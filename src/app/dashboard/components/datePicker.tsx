import { useState } from "react";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const DatePicker = ({ name }: { name: string }) => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal h-12 cursor-pointer",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white border-1 border-gray-200 rounded-xl m-2 shadow-sm">
          <Calendar id="deadline" mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
      <input type="hidden" name={name} value={date?.toISOString()} />
    </>
  );
};

export default DatePicker;
