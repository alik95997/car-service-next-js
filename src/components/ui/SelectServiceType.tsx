import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  "Brakes",
  "Engine Repair",
  "Oil Change",
  "Car Wash",
  "Tire Rotation",
  "Battery Replacement",
  "Wheel Alignment",
  "Air Conditioning Service",
  "Transmission Repair",
  "Suspension Repair",
  "Exhaust System Repair",
];

export default function SelectServiceType() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          width: "100%",
          height: 20,
          mb: 5,
          "& .MuiInputBase-input": { color: "white" },
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
          "& .MuiMenuItem-root": { color: "white" },
          "& .MuiPaper-root": { backgroundColor: "#334155" },
        }}
      >
        <InputLabel id="demo-multiple-checkbox-label">Service Type</InputLabel>
        <Select
          fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Service Type" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => {
            const selected = personName.includes(name);
            const SelectionIcon = selected
              ? CheckBoxIcon
              : CheckBoxOutlineBlankIcon;

            return (
              <MenuItem key={name} value={name}>
                <SelectionIcon
                  fontSize="small"
                  style={{
                    marginRight: 8,
                    padding: 9,
                    boxSizing: "content-box",
                  }}
                />
                <ListItemText primary={name} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
