import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import "./Contact.scss";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { useState } from "react";
import { WHITE } from "../../constants/colors";
import { EMPTY_STRING } from "../../constants/constants";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const [policy, setProduct] = useState<string>(EMPTY_STRING);

  const handleChange = (event: SelectChangeEvent) => {
    setProduct(event.target.value as string);
  };

  return (
    <div className="card">
      <div className="contact-container">
        <form className="form-container">
          <FormControl fullWidth>
            <InputLabel
              id="select-label"
              sx={{
                "&.Mui-focused": {
                  color: WHITE,
                },
              }}
            >
              Policy Type
            </InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value={policy}
              label="Policy Type"
              onChange={handleChange}
              fullWidth
              sx={{
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: WHITE,
                },
              }}
            >
              <MenuItem value="auto">Auto</MenuItem>
              <MenuItem value="home">Home</MenuItem>
              <MenuItem value="life">Life</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Contact;
