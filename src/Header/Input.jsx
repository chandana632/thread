import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search…"
      size="small"
      sx={{
        backgroundColor: "rgb(87,235,205,0.55)", 
        borderRadius: "8px",
        width: '40%', 
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: 'transparent' }, 
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
}
