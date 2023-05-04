import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {carsService} from "../../services";
import {carActions} from "../../redux";

const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const {setValue, reset, register, handleSubmit} = useForm();

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate, setValue])

    const save = async (car)=>{
        await dispatch(carActions.create({car}))
        reset()
    };

    const update = async (car)=>{
        await carsService.updateById(carForUpdate.id, car);
        dispatch(carActions.changeTrigger());
        reset()
    }

    return (

        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? "Update" : 'Save'}</button>
        </form>
    );
};

export {
    CarForm
};