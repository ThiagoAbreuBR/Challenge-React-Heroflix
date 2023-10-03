import React, { useState } from 'react';
import styles from './TextField.module.css';
import { TextField } from '@mui/material';
import { simpleValidation, validateTrailer, validateWallpaper } from 'models/validation';

const CampoTexto = ({ id, type, label, placeholder, required = false, textarea = true, value, capturingData }) => {

    const [errors, setErrors] = useState('');
    const [emptyField, setEmptyField] = useState('');

    const handleInputChange = (validation) => {
        let validationErrors = '';

        if (validation.trim() !== '') {
            setEmptyField('');
        }

        if (required && (id === "title" || id === "synopsis" || id === "publishingCompany")) {
            validationErrors = simpleValidation(validation);
            setErrors(validationErrors);
        }

        if (required && (id === "wallpaper")) {
            validationErrors = validateWallpaper(validation);
            setErrors(validationErrors);
        }

        if (required && (id === "trailer")) {
            validationErrors = validateTrailer(validation);
            setErrors(validationErrors);
        }

        if (!validationErrors) {
            capturingData(validation);
        }
    }

    const handleSubmitInvalid = (e) => {
        e.preventDefault();
        setEmptyField("Preencha esse campo.");
    };

    return (
        <div>
            <TextField
                className={styles.input}
                id={id}
                label={label}
                placeholder={placeholder}
                type={type}
                value={value}
                required={required}
                onBlur={(evento) => handleInputChange(evento.target.value)}
                onChange={(evento) => capturingData(evento.target.value)}
                onInvalid={handleSubmitInvalid}
                variant="filled"
                margin="normal"
                color={errors ? 'error' : 'primary'}
                size="small"
                multiline={textarea}
                maxRows={100}
                fullWidth
                helperText={errors || emptyField}
                error={!!errors || !!emptyField}
            />
        </div>
    );
};

export default CampoTexto;
