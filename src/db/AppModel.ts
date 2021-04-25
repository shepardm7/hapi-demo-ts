import Objection, { Model } from 'objection';

export interface IAppModel {
	id: number;
	createdAt: string;
	updatedAt: string;
}

export default class AppModel extends Model implements IAppModel {
	id!: number;
	createdAt!: string;
	updatedAt!: string;

	static idColumn = 'id';

	$beforeUpdate(opt: Objection.ModelOptions, queryContext: Objection.QueryContext): Promise<any> | void {
		this.updatedAt = new Date().toISOString();
		return super.$beforeUpdate(opt, queryContext);
	}

	$formatJson(json: Objection.Pojo): Objection.Pojo {
		const { createdAt, updatedAt, ...rest } = super.$formatJson(json);
		return rest;
	}
}
