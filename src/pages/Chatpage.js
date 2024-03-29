import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function Chatpage() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxhc2luZHVhQGdtYWlsLmNvbSIsImlhdCI6MTcwNzc2NjQ1NiwiZXhwIjoxODA3ODUyODU2fQ.4a9NeERLKgRlTEzpFh4VPBF9oDwRSyvcb6IMp6t7uWs";
  // const myid = "65c91caf565830fb7d624304";
  // const messages = [
  //   {
  //     _id: "65c91caf565830fb7d624304",
  //     user1: "65c7d5a4b63266a992bc2b33",
  //     user2: "65c7d5a4b63266a992bc2b33",
  //     unreadCount: 0,
  //     messages: [
  //       {
  //         _id: "65c91cb0565830fb7d624306",
  //         senderId: "65c7d5a4b63266a992bc2b33",
  //         message: "test message 1 to another",
  //         createdAt: "2024-02-11T19:14:56.194Z",
  //         updatedAt: "2024-02-11T19:14:56.194Z",
  //         __v: 0,
  //       },
  //       {
  //         _id: "65c91cbf565830fb7d62430b",
  //         senderId: "65c7d5a4b63266a992bc2b33",
  //         message: "test message 2 to myself",
  //         createdAt: "2024-02-11T19:15:11.491Z",
  //         updatedAt: "2024-02-11T19:15:11.491Z",
  //         __v: 0,
  //       },
  //     ],
  //     createdAt: "2024-02-11T19:14:55.859Z",
  //     updatedAt: "2024-02-11T19:15:11.896Z",
  //     __v: 0,
  //   },
  // ];

  const [userData, setuserData] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  const getUserDetails = async () => {
    axios
      .get("http://localhost:8080/api/v1/auth/userdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setuserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getChat = async (userId) => {
    axios
      .get(`http://localhost:8080/api/v1/chat/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendMessage = (userId) => {
    axios
      .post(
        `http://localhost:8080/api/v1/chat/sendMessage/${userId}`,
        {
          message: messageInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        getChat("65c91caf565830fb7d624304");
        setMessageInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getData = async () => {
      getUserDetails();
      getChat("65c91caf565830fb7d624304");
    };

    getData();
  }, []);

  return (
    <div className="bg-[#5136a5] h-screen w-full">
      <h1 className="text-4xl p-3 text-white font-bold">
        {userData &&
          message &&
          (userData.userId == message.user1.userId
            ? message.user2.firstname
            : message.user1.firstname)}
      </h1>

      {message &&
        message.messages.map((item) => (
          <div key={item._id} className="grid grid-cols-1 md:grid-cols-3">
            <div></div>
            <div>
              <div className="pt-[2rem] bg-[]">
                <p className="ring-offset-2 ring-2 pt-2 text-white bg-[#005c4b] flex items-center border rounded-md p-2">
                  {item.message}
                </p>
                <p className="text-right">{item.updatedAt}</p>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      <div class="p-4 fixed bottom-0 w-full">
        <div>
          <div class="relative">
            <div class="max-w-md mx-auto bg-white rounded-md shadow-md p-4">
              <div class="overflow-y-auto max-h-48"></div>

              <div class="mt-2 flex items-center border-t ">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your message..."
                  class="flex-1 border-none outline-none px-4"
                ></input>
                <button
                  onClick={() => {
                    sendMessage("65c91caf565830fb7d624304");
                  }}
                  class="bg-[#0ea5e9] bg-sky-500 hover:bg-sky-700 text-black px-2 py-2 rounded-md ml-2"
                >
                  Send
                </button>
              </div>
            </div>

            {/* <button class="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                    Open Chat
                  </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
