import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Бренд складається тільки з літер від 1 до 20 символів',
        'string.required':'Це поле обов\'язкове',
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'мінімум - 0',
        'number.max':'максимум - 1 000 000',
        'number.required':'Це поле обов\'язкове',
    }),
    year:Joi.number().min(1993).max(new Date().getFullYear()).required().messages({
        'number.min':'мінімум - 1993',
        'number.max':`максимум - ${new Date().getFullYear()}`,
        'number.required':'Це поле обов\'язкове',
    })
})

export {
    carValidator
}