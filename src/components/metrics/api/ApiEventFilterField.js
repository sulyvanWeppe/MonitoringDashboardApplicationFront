import { useState, useEffect } from 'react';
import { useTheme, Box, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Chip } from '@mui/material'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 500
    },
  },
};


function getStyles(value, filterValue, theme) {
    return {
      fontWeight:
        filterValue.indexOf(value) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

export default function ApiEventFilterField({ filterName, filterValues, handleFilterChange }) {
  console.log("rendering");
    const theme = useTheme();
    const [filterValue, setFilterValue] = useState([]);
    const [possibleValues, setPossibleValues] = useState(filterValues);

    /*const handleChange = (event) => {
        event.stopPropagation();
        //Set local value
        setFilterValue(
          // On autofill we get a stringified value.
          //typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value
          filterValue ? [...filterValue,'toto'] : ['toto']
        );

        console.log("filter value is "+event.target.value);
        console.log(filterValue);

        console.log("call to higher level");
        handleFilterChange(event);
      };*/

    //Rendering
    return(
        <div>
            <FormControl sx={{ m: 1}} fullWidth>
                <InputLabel id="filter-field-label">{filterName}</InputLabel>
                <Select
                    labelId="filter-field-label"
                    id="filter-field"
                    multiple
                    value={filterValue}
                    onChange={handleFilterChange}
                    input={<OutlinedInput id="select-multiple-filter" label="Chip"/>}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} color="primary" variant="outlined"/>
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {possibleValues.map((possibleValue) => (
                        <MenuItem
                        key={possibleValue}
                        value={possibleValue}
                        style={getStyles(possibleValue, filterValue, theme)}
                        >
                        {possibleValue}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}