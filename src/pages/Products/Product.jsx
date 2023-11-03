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
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
 
import React from 'react'

export default function Product() {
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] rounded-none p-4 shadow-xl shadow-blue-gray-500 bg-gray-800" >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className="itesm-center justify-center text-white text-center">
          Dashboard
        </Typography>
      </div>
      <List className="text-white">
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
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
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
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
        <button href="/" className="items-center text-center mt-48 border-shadow border-l-red border-red-600 border-r-[2px] p-0 font-bold " >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5  ml-2 " />
          </ListItemPrefix>
          Log Out
        </button>
      </List>
    </Card>
  )
}
