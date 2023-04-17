import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setAllCars}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid
        }
    } = useForm({mode: 'all'});


    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Бренд складається тільки з літер від 1 до 20 символів'
                },
                required: {value: true, message: 'Бренд складається тільки з літер від 1 до 20 символів'}
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'мінімум - 0'},
                max: {value: 1000000, message: 'максимум - 1 000 000'},
                required: {value: true, message: 'мінімум - 0, максимум - 1 000 000'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1993, message: 'мінімальний рік - 1993'},
                max: {value: new Date().getFullYear(), message: `максимальний рік - ${new Date().getFullYear()}`},
                required: {
                    value: true,
                    message: `мінімальний рік - 1993, максимальний рік - ${new Date().getFullYear()}`
                }
            })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {
    CarForm
};