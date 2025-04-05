import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { setDate } from "date-fns";
import { CalendarIcon, Calendar } from "@/components/ui/Calendar/Calendar";
import { format } from "path";
import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { date } from "zod";
import clsx from "clsx";

const TransactionDatePicker = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className={clsx(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default TransactionDatePicker;
