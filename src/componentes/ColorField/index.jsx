import React, { useState } from "react";
import { TextField } from "@mui/material";
import styles from "./ColorField.module.css";
import { validateColors } from "models/validation";

const ColorField = ({ id, type, value, label, required = false, capturingData }) => {
    const [errors, setErrors] = useState("");
    const [emptyField, setEmptyField] = useState("");

    const handleSubmitInvalid = (e) => {
        e.preventDefault();
        setEmptyField("Selecione uma cor");
    };

    const handleInputChange = (validation) => {
        if (validation.trim() !== '') {
            setEmptyField('');
        }

        if (required && (id === "background" || id === "color")) {
            const validationErrors = validateColors(validation);
            setErrors(validationErrors);

            if (!validationErrors) {
                capturingData(validation);
            }
        }
    };

    return (
        <TextField
            className={styles.inputColor}
            id={id}
            type={type}
            value={value}
            label={label}
            required={required}
            onBlur={(evento) => handleInputChange(evento.target.value)}
            onChange={(evento) => capturingData(evento.target.value)}
            onInvalid={handleSubmitInvalid}
            variant="filled"
            margin="normal"
            color={errors ? "error" : "primary"}
            size="small"
            helperText={errors || emptyField}
            error={!!errors || !!emptyField}
            fullWidth
        />
    );
};

export default ColorField;