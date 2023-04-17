import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/car.validator";

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
    } = useForm({mode: 'all', resolver:joiResolver(carValidator)});

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
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?'Update':carDelete?'Delete':'Save'}</button>

        </form>
    );
};

export {
    CarForm
};