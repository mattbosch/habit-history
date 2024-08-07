import * as Popover from "@radix-ui/react-popover";
import React, { useState } from "react";
import clsx from "clsx";
import * as DateFNS from "date-fns";
import { CheckboxCards, Flex, Text } from "@radix-ui/themes";

export function HabitDay({ date }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Popover.Portal>
          <Popover.Content>
            <span className="font-semibold text-zinc-500">DATE</span>
            <CheckboxCards.Root
              defaultValue={["1"]}
              columns={{ initial: "1", sm: "3" }}
            >
              <CheckboxCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">A1 Keyboard</Text>
                  <Text>US Layout</Text>
                </Flex>
              </CheckboxCards.Item>
              <CheckboxCards.Item value="2">
                <Flex direction="column" width="100%">
                  <Text weight="bold">Pro Mouse</Text>
                  <Text>Zero-lag wireless</Text>
                </Flex>
              </CheckboxCards.Item>
              <CheckboxCards.Item value="3">
                <Flex direction="column" width="100%">
                  <Text weight="bold">Lightning Mat</Text>
                  <Text>Wireless charging</Text>
                </Flex>
              </CheckboxCards.Item>
            </CheckboxCards.Root>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Trigger>
    </Popover.Root>
  );
}
