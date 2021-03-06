import { PeopleRequestBuilder } from './PeopleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { Location, LocationField } from './Location';
import { PersonGender } from './PersonGender';
import { Feature } from './Feature';
import { AllFields, BigNumberField, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "People" of service "Microsoft.OData.Service.Sample.TrippinInMemory.Models".
 */
export declare class People extends EntityV4 implements PeopleType {
    /**
     * Technical entity name for People.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for People.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * User Name.
     */
    userName: string;
    /**
     * First Name.
     */
    firstName: string;
    /**
     * Last Name.
     * @nullable
     */
    lastName?: string;
    /**
     * Middle Name.
     * @nullable
     */
    middleName?: string;
    /**
     * Gender.
     */
    gender: PersonGender;
    /**
     * Age.
     * @nullable
     */
    age?: BigNumber;
    /**
     * Emails.
     * @nullable
     */
    emails?: string[];
    /**
     * Address Info.
     * @nullable
     */
    addressInfo?: Location[];
    /**
     * Home Address.
     * @nullable
     */
    homeAddress?: Location;
    /**
     * Favorite Feature.
     */
    favoriteFeature: Feature;
    /**
     * Features.
     */
    features: Feature[];
    /**
     * One-to-many navigation property to the [[People]] entity.
     */
    friends: People[];
    /**
     * One-to-one navigation property to the [[People]] entity.
     */
    bestFriend: People;
    /**
     * Returns an entity builder to construct instances `People`.
     * @returns A builder that constructs instances of entity type `People`.
     */
    static builder(): EntityBuilderType<People, PeopleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `People` entity type.
     * @returns A `People` request builder.
     */
    static requestBuilder(): PeopleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `People`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `People`.
     */
    static customField(fieldName: string): CustomFieldV4<People>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface PeopleType {
    userName: string;
    firstName: string;
    lastName?: string;
    middleName?: string;
    gender: PersonGender;
    age?: BigNumber;
    emails?: string[];
    addressInfo?: Location[];
    homeAddress?: Location;
    favoriteFeature: Feature;
    features: Feature[];
    friends: PeopleType[];
    bestFriend: PeopleType;
}
export interface PeopleTypeForceMandatory {
    userName: string;
    firstName: string;
    lastName: string;
    middleName: string;
    gender: PersonGender;
    age: BigNumber;
    emails: string[];
    addressInfo: Location[];
    homeAddress: Location;
    favoriteFeature: Feature;
    features: Feature[];
    friends: PeopleType[];
    bestFriend: PeopleType;
}
export declare namespace People {
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAME: StringField<People>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<People>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<People>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<People>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: EnumField<People>;
    /**
     * Static representation of the [[age]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGE: BigNumberField<People>;
    /**
     * Static representation of the [[emails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAILS: CollectionField<People, 'Edm.String'>;
    /**
     * Static representation of the [[addressInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_INFO: CollectionField<People, Location>;
    /**
     * Static representation of the [[homeAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_ADDRESS: LocationField<People>;
    /**
     * Static representation of the [[favoriteFeature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAVORITE_FEATURE: EnumField<People>;
    /**
     * Static representation of the [[features]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEATURES: CollectionField<People, 'Edm.Enum'>;
    /**
     * Static representation of the one-to-many navigation property [[friends]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIENDS: OneToManyLink<People, People>;
    /**
     * Static representation of the one-to-one navigation property [[bestFriend]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEST_FRIEND: OneToOneLink<People, People>;
    /**
     * All fields of the People entity.
     */
    const _allFields: Array<StringField<People> | EnumField<People> | BigNumberField<People> | CollectionField<People, 'Edm.String'> | CollectionField<People, Location> | LocationField<People> | CollectionField<People, 'Edm.Enum'> | OneToManyLink<People, People> | OneToOneLink<People, People>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<People>;
    /**
     * All key fields of the People entity.
     */
    const _keyFields: Array<Field<People>>;
    /**
     * Mapping of all key field names to the respective static field property People.
     */
    const _keys: {
        [keys: string]: Field<People>;
    };
}
//# sourceMappingURL=People.d.ts.map