import Joi from 'joi';

// All default / shared validators will go here
export default {
	id: Joi.number().integer().min(1).max(999999999).message('Invalid ID provided')
}
