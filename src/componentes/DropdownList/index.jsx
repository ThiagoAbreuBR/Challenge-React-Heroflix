import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useEditoras} from 'componentes/Context/ContextColors';
import styles from "./DropdownList.module.css"

const ListaSuspensa = ({ id, label, required = false, capturingData, value }) => {

    const [errors, setErrors] = useState("");
    const [emptyField, setEmptyField] = useState("");

    const handleSubmitInvalid = (e) => {
        e.preventDefault();
        setEmptyField("Selecione uma editora.");
    };

    const handleInputChange = (validation) => {

        if (validation.trim() !== '') {
            setEmptyField('');
        }
        capturingData(validation);
    };

    const editoras = useEditoras();

    const uniquePublishingCompanies = [...new Set(editoras.map(editora => editora.publishingCompany))];

    return (
        <TextField
            className={styles.inputSelect}
            id={id}
            label={label}
            value={value}
            onBlur={(evento) => handleInputChange(evento.target.value)}
            onChange={(evento) => capturingData(evento.target.value)}
            required={required}
            onInvalid={handleSubmitInvalid}
            variant="filled"
            margin="normal"
            color={errors ? "error" : "primary"}
            size="small"
            select
            fullWidth
            helperText={errors || emptyField}
            error={!!errors || !!emptyField}
        >

            {uniquePublishingCompanies.map((publishingCompany) => (
                <MenuItem key={publishingCompany} value={publishingCompany}>
                    {publishingCompany}
                </MenuItem>
            ))}

        </TextField>
    );
}

export default ListaSuspensa;