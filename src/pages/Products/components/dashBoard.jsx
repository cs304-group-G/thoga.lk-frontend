import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
 
import React from 'react'

export default function dashBoard() {
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] rounded-none p-4 shadow-xl shadow-blue-gray-500 bg-gray-800" >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className="itesm-center justify-center text-white text-center">
          Dashboard
        </Typography>
      </div>
      <List className="text-white">
        <ListItem >
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          <a href="/" className = 'space-x-2'>Home</a>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Items
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full ml-40 bg-gray-400 p-2" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <a href="/signin" className="items-center text-center mt-48 border-shadow border-l-red border-red-600 border-r-[2px] p-0 font-bold  " >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 text-center ml-32 items-center " />
          </ListItemPrefix>
          Log Out
        </a>
      </List>
    </Card>
  )
}
