import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setAllCars, carForUpdate, setCarForUpdate, carDelete, setCarDelete}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isValid,
        },
        setValue
    } = useForm({mode: 'all'});

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    },[carForUpdate])

    useEffect(()=>{
        if (carDelete){
            setValue('brand', carDelete.brand, {shouldValidate:true})
            setValue('price', carDelete.price, {shouldValidate:true})
            setValue('year', carDelete.year, {shouldValidate:true})
        }
    },[carDelete])

    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(data);
        reset();
    }

    const update = async (car)=>{
        const {data} = await carService.getById(carForUpdate.id);
        const {dataU} = await carService.updateByID(data.id, car)
        setCarForUpdate(dataU);
        reset();
    }

    const carDeletet = async (car)=>{
        const {data} = await carService.getById(carDelete.id);
        const {dataD} = await carService.deleteById(data.id)
        setCarDelete(dataD);
        reset();
    }

    return (
        <form className={'form'} onSubmit={handleSubmit(carForUpdate?update:carDelete?carDeletet:save)}>
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
            <button disabled={!isValid}>{carForUpdate?'Update':carDelete?'Delete':'Save'}</button>

        </form>
    );
};

export {
    CarForm
};