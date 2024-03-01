import { useEffect, useMemo } from 'react';
import { useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);

	useEffect(() => {
		createValidator();
	}, [formState]);

	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			if (formValidation[formValue] !== null) return false;
		}

		return true;
	}, [formValidation]);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidator = () => {
		const formCheckedValues = {};

		for (const formField of Object.keys(formValidations)) {
			const [fn, errorMessague = 'Este campo es requerido'] =
				formValidations[formField];

			formCheckedValues[`${formField}Valid`] = fn(formState[formField])
				? null
				: errorMessague;
		}

		setFormValidation(formCheckedValues);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		isFormValid,
		...formValidation,
	};
};
