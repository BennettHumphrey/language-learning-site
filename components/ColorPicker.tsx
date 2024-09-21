import { setFlashcardSetColor } from "@/app/actions/setFlashcardSetColor";
import { currentUserIdState, openColorPickerState } from "@/app/utils/Recoil";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";


interface ColorPickerProps {
  deckTitle: string;
  triggerColorChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  deckTitle,
  triggerColorChange
}) => {
  const currentUser = useRecoilValue(currentUserIdState);
  const [openColorPicker, setOpenColorPicker] = useRecoilState(openColorPickerState);

  const colorOptions = [
    "hsl(3, 99%, 35%)",
    "hsl(23, 100%, 40%)",
    "hsl(39, 100%, 35%)",
    "hsl(146, 69%, 35%)",
    "hsl(196, 82%, 35%)",
    "hsl(324, 93%, 38%)",
  ];

  const handleColorPick = (color: string) => {
    // console.log('Trigger handleColorPick')
    setFlashcardSetColor(deckTitle, currentUser, color)
    // console.log('Trigger handleColorPick 2')
    triggerColorChange((prev) => !prev);
    // console.log('Trigger handleColorPick 3')
    // Needs a timeout to actually trigger for some reason
    setTimeout(() => setOpenColorPicker(''), 1)
    // setOpenColorPicker('')
    // console.log('Trigger handleColorPick 4')
    return;
  };

  return (
    <div className="bg-slate-200 absolute flex gap-3 p-3 translate-x-[-3px] translate-y-[-10px] rounded-bl-xl">
      {colorOptions.map((color, index) => (
        <div
          onClick={() => handleColorPick(color)}
          key={index}
          style={{ backgroundColor: color }}
          className="rounded-full relative w-4 h-4 select-none"
        />
      ))}
    </div>
  );
};

export default ColorPicker;
