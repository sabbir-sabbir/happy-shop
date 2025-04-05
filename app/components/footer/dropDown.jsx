import React from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const DropDown = () => {
    const [position, setPosition] = React.useState("bottom")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Tap to open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select one</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="spain">Spain</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Mexico">Mexico</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="america">America</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="brazil">Brazil</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bangladesh">Bangladesh</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropDown