import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useESGData } from '../../Context/esg';
import { Button, Stack } from '@mui/material';
import { RefreshOutlined } from '@mui/icons-material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function MultipleSelect() {
    const { value, industry, setIndustry } = useESGData();
    const MenuOptions = React.useMemo(() => { return ["All", ...new Set(value.map(it => it.Industry))] }, [value])
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setIndustry(value);
    };

    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={industry}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {MenuOptions.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="outlined" startIcon={<RefreshOutlined />} onClick={() => setIndustry("All")}>
                Reset
            </Button>
        </Stack>


    );
}