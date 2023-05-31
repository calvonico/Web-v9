import React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Banderitas = () => {

    const { i18n } = useTranslation();


    const cambiaIdioma = (event) => {
      i18n.changeLanguage(event.target.value);
    };


  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 60, }}>
        {/* <InputLabel id="language-change">Age</InputLabel> */}
        <Select
          labelId="language-change"
          id="switcher"
          value={i18n.language}
          onChange={cambiaIdioma}
        >

          <MenuItem value="es"><Icon icon="emojione-v1:flag-for-spain" height="28" /> </MenuItem>
          <MenuItem value="en"><Icon icon="emojione-v1:flag-for-united-kingdom" height="28" /> </MenuItem>
          <MenuItem value="pt"><Icon icon="emojione-v1:flag-for-portugal" height="28" /> </MenuItem>
          
        </Select>
      </FormControl>

    </div>
  );
};

export default Banderitas;
