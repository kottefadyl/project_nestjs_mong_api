/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { BreedDocument } from 'src/schemas/breed.schema';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';
export declare class BreedsService {
    private breedModel;
    constructor(breedModel: Model<BreedDocument>);
    create(createBreedDto: CreateBreedDto, user: User): Promise<Breed>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, BreedDocument> & import("src/schemas/breed.schema").Breed & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(name: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, BreedDocument> & import("src/schemas/breed.schema").Breed & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, BreedDocument> & import("src/schemas/breed.schema").Breed & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, BreedDocument, "findOne">;
    update(name: string, updateBreedDto: UpdateBreedDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, BreedDocument> & import("src/schemas/breed.schema").Breed & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, BreedDocument, "updateOne">;
    remove(name: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, BreedDocument> & import("src/schemas/breed.schema").Breed & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, BreedDocument, "deleteOne">;
}
