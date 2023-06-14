// index.jsx
"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="bg-gray-700 rounded-xl text-white px-3 py-1">
      More info
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="bg-red-400 p-4 rounded-md">
        Some more info…
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
