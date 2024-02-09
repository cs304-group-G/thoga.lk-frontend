import React from "react";
import { Link } from "react-router-dom";

export default function viewProduct() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col space-y-3 text-center">
        <h1 className="text-4xl">All products</h1>
        <Link to='/vegetables'>
          <button
            className="bg-slate-800 rounded-lg p-3 w-64 text-green-400 font-bold text-3xl hover:bg-green-500 hover:text-slate-100"
            style={{ display: "flex", }}
          >
            <span style={{ backgroundColor: "white", padding: "5px", borderRadius: "50%", marginRight: "10px" }}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG20lEQVR4nO1baWxVRRT+2toi1rYKWFsl7mzKD61giiAgajUaFHABl7hrDCLgFtS4FyRGsW4EcY0aFdeAS1RwAxFEWpfWEJaiQYXEKlCKWqqUZ07yjTm5zl3ee3P7Hmm/ZPJuZs49M/fembM/oAtdyBTyASxmk+tOh6kAEmxT0MnQE8AWALvYNrOv0+BRfvm32eT6EXQS7AvgT375wQAqeP3X7roLPgbQxm28HkAtgBcATAMwyiLgbuIXn6/6FrBPxjQKAJwM4BYAL5L3es4lc36ELMAyJcxsbQsXL187lw8g/VWKRxX7GklzPIB5ALaF8Ja5M46eAL7hgn4EcAaAawA8DKDBs2BNJw9qkMs+Gfte0bcDqANQA+AiAKcA+IFjXwPogSzBAQA2cGEvecb6A7gHQLN6sJctPF5T478DuBPAwR6aVzguc5UjyzAQQAsXOMFnpzxGgSc009VYDft2ceeUWO6/gDQtnCsrcQUX+WuARJ9AiZ/gUbmB160Axvjc0wtAE+kuR5bjE8sX9uIsnm+R5P/wenQA/X3kKRon6zGYW1nOcWEA3f3qzD8QQFdItSc8B2E3wbII27WIR0Xojgugu5I0S5EhfAHgD6qdagD7RbjnWi769RA6swtmBtC8peRFRvC5R5eLcTIuwjEQ2nUhdENJtzyAxhhOxyKDKAQwUjku7SEv4SSl1lpDrLmg1qrUphhYWYHbuKBmqieNQwB8mMYDhzUJnvRBFuBdLuhu1VephJr83g7g6BBNEAa59xjyMnbAVgDDkGGM4mLETjeoZd8bAIpjmFN4vqkcrIzuhGIlELVHN8nj5LhGrnoJnwLIQQaRYIsCObsrAZSy1bIvaFy0jw3iJ/zGuU9EB+JwAHcwkNGoXkAj++ScHuZz70rSNigX+auQ8RUBa7mLNM+gAzCI9r1RR0FtF+11r84u9cQGGtgXddyLCtKtRowooPvazsk2842LI9OPErqQ1+LFPUvhJLQ7GeQs8DzkSrXVvQgbt8kgsVBjQRHjbQm6rtMjSnY5nzOUu7uQvDItg5JCPoAlZP4zt1sqx+YXZbzEkflpY3OOGvXwB6bBp7d6CQ/CPcQUH+uaaaXa9ql8edtOaLX48ktD1F4yarEbgMkAvqRM8KOLhIURojnJYiZ5vm+xGrXakwdOVi3KDv3Wo4nk+KaEo5S0d2nKlijtIBFiV2qxm3r4nwCcna7AnRajcfGcJfOTrlqcrB7eSX5gERmKnneNseT9gUOeK8jzHFcM15JhX7hHP/Je45DndvIsylqGCkUqqREFRzL+KP7CJlqWTdylE2mBGvlQyBjkItLs5D2yQ+4FMCDinPibDPNjcmONiRwmMOeSLsjn2ORzbWvC64kogn0rb9gH7rEXeUtdgB9KGWBJ8GPMZWq8nD5FbyZIl1seUsLwF5KmgPfIvU+qD1sbFtHeQEKJ67lG/5AocZ4yv9codWlDDtNp7WxTQwIjA5R8+ywoYLOERCPgHiax+Y7P+PUcF9O5LCLPE5KIDZYps1zUpxXPx5h8NHbAzZYxkTkbOR6UH0wXZyofxyrnbiTB7BjO/zb6A318nBqZtx7xw1iX1iz0MCUsXOJcJaiCKsakDihu3Mq5pAbhf+hOKS2CZX+Hk5rKj+t8xo3jMxzxY0RYvHF+DHJgtccR8sIIp/IOKuUxcsCKS1TM3RVaQixMEz7bE/Gju4p3WFHInJ8IrCMcTWpK3YpDTPC9ET+MSS5z+mI2icR8dIFV5Cf2vQ3rOO7qhQehL+cSw8gXh9J83AHgIAeTzuOkYr3ZsJjjpyF+nB71iD9FwlcdTDqavL4LKYAKqhNyhVlRQ35lqrBRl7SmgnyVy5MSWC9GqgrRuLEqGXN/Eok3WgohksUc8pIv4EWBekFx5v2Hc44mT8bKFzmM5CYYbMh3UE+gE6Ia1RwXoykumLS6BEkio5RBRxMsTTUf34s8JDpsQzmzPKJ+h8A9hpL3jiS8zf8wUMmDp1MsgMjj/VIV6ocZpKlzHJXKZ4lfgjst5TfYTCbv8V8fyaDEUlFis9KMTSAOkis8rnR/WtZmhYq/SW3/qUncOz7EIzQYosrqRAiniynK9JW0X9ooY1jJxOIWhJS5glXjxuGRiG4YzlPFGNU8PjbZVM9mi/PlqSPVTpfcGXIZhtZ/gKhn2UoV83Xdue3Hq4evi6p+AFxMgWV4jyM/yQCdr/5dkuA/SCbwWJYwRWYCH60MpMaCHnxoUxsY1OroiposUZsPnfY/KpVMsLWlrGP2G1/ratuHYQ9++Ydo12/kmWvhAid6vvyYgBcwx8L7MlWwvZ3p76s4JhL+ar6M7aSR60s53oUuIBj/AiFgv8HFk8KfAAAAAElFTkSuQmCC"
                alt="Vegetables"
               
              />
            </span>
            Vegetables
          </button>
        </Link>

        <Link to='/fruits'>
          <button
            className="bg-slate-800 rounded-lg p-3 w-64 text-red-400 font-bold text-3xl hover:bg-red-500 hover:text-slate-100"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%", marginRight: "10px" }}>
            <img width="50" height="50" src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-fruits-ramadan-and-eid-smashingstocks-detailed-outline-smashing-stocks.png" alt="external-fruits-ramadan-and-eid-smashingstocks-detailed-outline-smashing-stocks"/>
            </span>
            Fruits
          </button>
        </Link>
        

        <Link to='/items'>
          <button
          
            className="bg-slate-800 rounded-lg p-3 w-64 text-blue-400 font-bold text-3xl hover:bg-blue-500 hover:text-slate-100"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%", marginRight: "10px" }}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/tractor.png" alt="tractor"/>
            </span>
            Items
          </button>
        </Link>
      </div>
    </div>
  );
}
