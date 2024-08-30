import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FirmwareSelector() {
  const [interfaceName, setInterfaceName] = React.useState("");

  const handleInterfaceNameChange = (event) => {
    setInterfaceName(event.target.value);
  };

  const [ver, setVer] = React.useState("");

  const handleChange = (event) => {
    setVer(event.target.value);
    console.log(event.target.value);
  };

  const command = {
    build: ` make -C stage1 FW=${ver} clean && make -C stage1 FW=${ver}`,
    run: `sudo python3 pppwn.py --interface=${interfaceName} --fw=${ver}}`,
  };

  return (
    <div>
      <h1>Playstation PPPawn</h1>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Interface Name"
          variant="outlined"
          onChange={handleInterfaceNameChange}
        />
      </Box>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Version</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ver}
          onChange={handleChange}
          autoWidth
          label="version"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={9000}>9.00</MenuItem>
          <MenuItem value={9600}> 9.60</MenuItem>
          <MenuItem value={1000}>10.00</MenuItem>
          <MenuItem value={1001}> 10.01</MenuItem>
          <MenuItem value={1100}>11.00</MenuItem>
        </Select>
        <Button
          sx={{ m: 2 }}
          variant="contained"
          onClick={() => {
            console.log(command);
            fetch("http://127.0.0.1:5000/build", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ command: command }),
            });
          }}
        >
          Hack my playstation!
        </Button>
      </FormControl>
    </div>
  );
}
