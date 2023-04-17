import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'name складається тільки з літер від 1 до 20 символів',
        'string.required': 'Це поле обов\'язкове',
    }),
    username: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'username складається тільки з літер від 1 до 20 символів',
        'string.required': 'Це поле обов\'язкове',
    }),
    email: Joi.string().regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).required().messages({
        'string.pattern.base': 'не схоже на дійсний email',
        'string.required': 'Це поле обов\'язкове',
    })
})

export {
    userValidator
}