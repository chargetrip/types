export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Acknowledgement scalar. Returns 'OK'. */
  Acknowledgement: any;
  /** The date and time scalar. */
  DateTime: string;
  /** Email address scalar, email regex with HTML sanitization. */
  Email: any;
  /** Any JSON object or array. */
  JSON: { [key: string]: number | string | boolean | null | Scalars["JSON"] };
  /** The non empty string scalar. */
  NonEmptyString: any;
  /** The `PlainID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The `PlainID` type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID. */
  PlainID: any;
  /**
   * The `PlainString` scalar type represents textual data, represented as UTF-8 character sequences.
   * The PlainString type represents free-form human-readable text with HTML sanitization.
   */
  PlainString: any;
  /** The File Upload scalar. */
  Upload: any;
};

export enum AccelerationUnit {
  /** Return the acceleration in seconds to 100 kilometers per hour. */
  SECONDS_TO_100_KILOMETERS_PER_HOUR = "seconds_to_100_kilometers_per_hour",
  /** Return the acceleration in seconds to 60 miles per hour. */
  SECONDS_TO_60_MILES_PER_HOUR = "seconds_to_60_miles_per_hour"
}

export enum AccessType {
  PUBLIC = "Public",
  RESTRICTED = "Restricted",
  PRIVATE = "Private"
}

/** Information about an address. */
export type Address = {
  /** Continent code (2 letters). */
  continent?: Maybe<Scalars["String"]>;
  /** Country code (2 letters). */
  country?: Maybe<Scalars["String"]>;
  /** County code (2 letters). */
  county?: Maybe<Scalars["String"]>;
  /** State or province. */
  state_province?: Maybe<Scalars["String"]>;
  /** Municipality. */
  municipality?: Maybe<Scalars["String"]>;
  /** City. */
  city?: Maybe<Scalars["String"]>;
  /** Street name. */
  street?: Maybe<Scalars["String"]>;
  /** Street number. */
  number?: Maybe<Scalars["String"]>;
  /**
   * Postal code of the location.
   * @deprecated In favor of postal_code.
   */
  postalCode?: Maybe<Scalars["String"]>;
  /**
   * String composed of 3 words which represent the location of an address on the globe. More details: http://w3w.co/<what3Words>.
   * @deprecated In favor of what_3_words.
   */
  what3Words?: Maybe<Scalars["String"]>;
  /**
   * Human-readable address of the location.
   * @deprecated In favor of formatted_address.
   */
  formattedAddress?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Postal code of the location. */
  postal_code?: Maybe<Scalars["String"]>;
  /** String composed of 3 words which represent the location of an address on the globe. More details: http://w3w.co/<what3Words>. */
  what_3_words?: Maybe<Scalars["String"]>;
  /** Human-readable address of the location. */
  formatted_address?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export enum AdhocAuthorisationMethod {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  OTHER = "OTHER",
  OTHER_APPLE_PAY = "OTHER_Apple_Pay",
  OTHER_AUTHENTICATION_BY_CAR = "OTHER_Authentication_by_car",
  OTHER_GOOGLE_PAY = "OTHER_Google_Pay",
  QR_CODE = "QR_CODE",
  SMS = "SMS"
}

/** Amenities available near a station */
export enum Amenities {
  PARK = "park",
  RESTAURANT = "restaurant",
  MUSEUM = "museum",
  COFFEE = "coffee",
  HOTEL = "hotel",
  SHOPPING = "shopping",
  BATHROOM = "bathroom",
  SUPERMARKET = "supermarket",
  PLAYGROUND = "playground",
  PHARMACY = "pharmacy"
}

/** The amenity model */
export type Amenity = {
  /** Unique amenity ID */
  id?: Maybe<Scalars["ID"]>;
  /** ID provided by an amenity data source as the row ID */
  externalId?: Maybe<Scalars["String"]>;
  /** Name of an amenity */
  name?: Maybe<Scalars["String"]>;
  /** Geo location coordinates. This is a GeoJSON Point */
  location?: Maybe<Point>;
  /** Embedded Address */
  address?: Maybe<Address>;
  /** Type of amenity. An amenity can belong to multiple categories */
  type?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Rating of an amenity, the value will be between 0.0 and 10.0. If no rating has been given, the value will be set to null */
  rating?: Maybe<Scalars["Float"]>;
  /** Computed distance between station and amenity */
  distance?: Maybe<Scalars["Int"]>;
  /** Full path URL to amenity foursquare page */
  foursquareUrl?: Maybe<Scalars["String"]>;
  /** Date and time when an amenity was created */
  createdAt?: Maybe<Scalars["String"]>;
  /** Date and time when an amenity was last updated */
  updatedAt?: Maybe<Scalars["String"]>;
};

/** Amenity preferences for a route. */
export type AmenityPreferencesInput = {
  /** Desired amenities near all charge-stops along a route, with a 1 kilometer radius. */
  all_charge_stops?: Maybe<Array<AmenityType>>;
  /** Scheduled charge stops, with a specified amenity and timeline. */
  scheduled_charge_stops?: Maybe<Array<ScheduledChargeStopInput>>;
};

/** Amenities stats model */
export type AmenityStats = {
  /** The amenity type */
  type?: Maybe<Scalars["String"]>;
  /** The total number of stations with the specified amenity */
  total?: Maybe<Scalars["Int"]>;
};

/** A list of amenity types. */
export enum AmenityType {
  PARK = "park",
  RESTAURANT = "restaurant",
  MUSEUM = "museum",
  COFFEE = "coffee",
  HOTEL = "hotel",
  SHOPPING = "shopping",
  BATHROOM = "bathroom",
  SUPERMARKET = "supermarket",
  PLAYGROUND = "playground",
  PHARMACY = "pharmacy"
}

export type AuthorizeConnectedVehicleInput = {
  /** Id from the connected vehicle */
  id: Scalars["ID"];
  /** Provider specific options. See the developer portal for more details */
  options: AuthorizeConnectedVehicleOptions;
};

export type AuthorizeConnectedVehicleOptions = {
  /** OAuth code returned as a query parameter on the OAuth callback */
  code?: Maybe<Scalars["PlainString"]>;
};

export type AuxiliaryConsumption = {
  /** Value of the auxiliary power consumption of the vehicle. */
  value: Scalars["Float"];
  /** Type of auxiliary power consumption of the vehicle. */
  type: AuxiliaryConsumptionUnit;
  /** Source of inputted data. */
  source: TelemetryInputSource;
};

export type AuxiliaryConsumptionInput = {
  /** Value of the auxiliary power consumption of the vehicle. */
  value: Scalars["Float"];
  /** Type of auxiliary power consumption of the vehicle. */
  type: AuxiliaryConsumptionUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

/** Auxiliary consumption units. */
export enum AuxiliaryConsumptionUnit {
  /** Return the auxiliary consumption in kilowatt hours. */
  KILOWATT_HOUR = "kilowatt_hour"
}

/** The type of the battery value. */
export enum BatteryInputType {
  KWH = "kwh",
  KM = "km",
  MILES = "miles",
  PERCENTAGE = "percentage"
}

export type BatteryTemperatureInput = {
  /** Value of the temperature of the battery. */
  value: Scalars["Float"];
  /** Type of temperature of the battery. */
  type: TemperatureUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

/** Deprecated: In favour of Vehicle. */
export type Car = {
  /** Cars unique ID. */
  id?: Maybe<Scalars["ID"]>;
  /** Naming of a car. */
  naming?: Maybe<CarNaming>;
  /** Available connectors for a car. */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** List of adapters of connectors available for a car. */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Battery of a car. */
  battery?: Maybe<CarBattery>;
  /** Body of a car. */
  body?: Maybe<CarBody>;
  /** Availability of a car. */
  availability?: Maybe<CarAvailability>;
  /** Performance of a car. */
  performance?: Maybe<CarPerformance>;
  /** Range of a car. */
  range?: Maybe<CarRange>;
  /** Media of a car. */
  media?: Maybe<CarMedia>;
  /** Routing of a car. */
  routing?: Maybe<CarRouting>;
  /** Information about vehicle connectivity. */
  connect?: Maybe<Connect>;
  /**
   * ID provided by a car data source as the row ID.
   * @deprecated Will be removed in the future
   */
  externalId?: Maybe<Scalars["String"]>;
  /**
   * Car manufacturer.
   * @deprecated In favor of naming.make
   */
  make?: Maybe<Scalars["String"]>;
  /**
   * Car model.
   * @deprecated In favor of naming.model
   */
  carModel?: Maybe<Scalars["String"]>;
  /**
   * Car edition.
   * @deprecated In favor of naming.version
   */
  edition?: Maybe<Scalars["String"]>;
  /**
   * Car model edition. Added by Chargetrip as an alternative for when a car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years.
   * @deprecated In favor of naming.chargetrip_version
   */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /**
   * Car version.
   * @deprecated In favor of naming.edition
   */
  version?: Maybe<Scalars["String"]>;
  /**
   * Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data.
   * @deprecated In favor of range.chargetrip_range
   */
  chargetripRange?: Maybe<ChargetripRange>;
  /**
   * Cars that support fast charging have a minimum charging speed of 43 kWh.
   * @deprecated In favor of routing.fast_charging_support
   */
  fastChargingSupport?: Maybe<Scalars["Boolean"]>;
  /**
   * Current production mode of a car.
   * @deprecated In favor of availability.status
   */
  mode?: Maybe<CarMode>;
  /**
   * Number of seats.
   * @deprecated In favor of body.seats
   */
  seats?: Maybe<Scalars["Int"]>;
  /**
   * Weight in kg.
   * @deprecated In favor of body.weight
   */
  weight?: Maybe<Scalars["Float"]>;
  /**
   * Height in mm.
   * @deprecated In favor of body.height
   */
  height?: Maybe<Scalars["Int"]>;
  /**
   * Width in mm.
   * @deprecated In favor of body.width
   */
  width?: Maybe<Scalars["Int"]>;
  /**
   * Usable battery capacity in kWh.
   * @deprecated In favor of battery.usable_kwh
   */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /**
   * Full battery capacity in kWh.
   * @deprecated In favor of battery.full_kwh
   */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /**
   * Battery efficiency in the city, highway and combined depending on weather conditions.
   * @deprecated In favor of efficiency
   */
  batteryEfficiency?: Maybe<CarBatteryEfficiency>;
  /**
   * Acceleration time from 0 to 100 km/h.
   * @deprecated In favor of performance.acceleration
   */
  acceleration?: Maybe<Scalars["Float"]>;
  /**
   * Maximum car speed in km/h.
   * @deprecated In favor of performance.top_speed
   */
  topSpeed?: Maybe<Scalars["Float"]>;
  /**
   * Power of a car in Kw.
   * @deprecated In favor of drivetrain.power
   */
  power?: Maybe<Scalars["Float"]>;
  /**
   * Engine torque.
   * @deprecated In favor of drivetrain.torque
   */
  torque?: Maybe<Scalars["Float"]>;
  /**
   * Extra consumption model.
   * @deprecated In favor of routing.consumption
   */
  consumption?: Maybe<CarExtraConsumption>;
  /**
   * Amount of petrol a similar petrol car would consume per 100 km.
   * @deprecated In favor of routing.petrol_consumption
   */
  petrolConsumption?: Maybe<Scalars["Float"]>;
  /**
   * A list of offset data for different charging speeds.
   * @deprecated You will receive null values
   */
  chargingOffset?: Maybe<Scalars["JSON"]>;
  /**
   * Images of a car.
   * @deprecated In favor of media.image_list
   */
  images?: Maybe<Array<Maybe<CarImage>>>;
  /**
   * Images of a car in structured data.
   * @deprecated In favor of media.image or media.brand
   */
  imagesData?: Maybe<CarImageData>;
};

/** Deprecated: In favour of VehicleAvailability. */
export type CarAvailability = {
  /**
   * Availability of car.
   *
   * Values:
   *    - 0 = Car no longer for sale in any market / region.
   *    - 1 = Car currently for sale in at least one market / region.
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open.
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unkown or not open.
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open.
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open.
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open.
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown.
   *    - 91 = Status uncertain, introduction date and/or pricing unclear.
   */
  status?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehicleBattery. */
export type CarBattery = {
  /** Usable battery capacity in kWh. */
  usable_kwh?: Maybe<Scalars["Float"]>;
  /** Full battery capacity in kWh. */
  full_kwh?: Maybe<Scalars["Float"]>;
};

/** Deprecated. */
export type CarBatteryEfficiency = {
  /** Average efficiency measured in kWh/100 km. */
  average?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating, measured in kWh/100 km. */
  worst?: Maybe<CarEstimationData>;
  /** Best conditions are based on 23°C and no use of A/C, measured in kWh/100 km. */
  best?: Maybe<CarEstimationData>;
};

/** Deprecated: In favour of VehicleBatteryFieldEstimations. */
export enum CarBatteryFieldEstimations {
  /** Both of the battery kWh fields are estimations. */
  B = "B",
  /** full_kwh field is estimated. */
  F = "F",
  /** None of the battery kWh fields are estimations. */
  N = "N",
  /** usable_kwh field is estimated. */
  U = "U"
}

/** Deprecated: In favour of VehicleBody. */
export type CarBody = {
  /** Width with folded mirrors in mm. */
  width?: Maybe<Scalars["Int"]>;
  /** Height (average height for adjustable suspensions) in mm. */
  height?: Maybe<Scalars["Int"]>;
  /** Weight Unladen EU) in kg. */
  weight?: Maybe<Scalars["Int"]>;
  /** Number of seats. */
  seats?: Maybe<Scalars["Int"]>;
};

export enum CarConnectivityProvider {
  ENODE = "Enode"
}

/** Deprecated. */
export type CarConsumption = {
  /** Worst conditions are based on -10°C and use of heating. */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C. */
  best?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehicleConsumptionInput. */
export type CarConsumptionInput = {
  /** Worst conditions are based on -10°C and use of heating. */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C. */
  best?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehicleDrivetrain. */
export enum CarDrivetrain {
  /** Battery Electric Car.. */
  BEV = "BEV",
  /** Extended Range Electric Car. */
  EREV = "EREV"
}

/** Deprecated. */
export type CarEstimationData = {
  /** Estimated battery efficiency on a highway or express roads, in km. */
  highway?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on city roads, in km. */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on highway and city roads combined, in km. */
  combined?: Maybe<Scalars["Float"]>;
};

/** Deprecated. */
export type CarExtraConsumption = {
  /** Consumption, in kWh, of the auxiliaries. */
  aux?: Maybe<CarConsumption>;
  /** Consumption, in kWh, of the battery management system. */
  bms?: Maybe<CarConsumption>;
  /** Consumption, in kWh, of a car in idle mode. */
  idle?: Maybe<CarConsumption>;
};

/** Deprecated: In favour of VehicleFuel. */
export enum CarFuel {
  /** Electricity only. Full electric car. */
  E = "E"
}

/** Deprecated: In favour of VehicleImage */
export type CarImage = {
  /** Image id. */
  id?: Maybe<Scalars["ID"]>;
  /** Image type. */
  type?: Maybe<CarImageType>;
  /** Full path URL of a large image. */
  url?: Maybe<Scalars["String"]>;
  /** Height of a large image in pixels. */
  height?: Maybe<Scalars["Int"]>;
  /** Width of a large image in pixels. */
  width?: Maybe<Scalars["Int"]>;
  /** Full path URL of a thumbnail image. */
  thumbnail_url?: Maybe<Scalars["String"]>;
  /** Height of a thumbnail image in pixels. */
  thumbnail_height?: Maybe<Scalars["Int"]>;
  /** Width of a thumbnail image in pixels. */
  thumbnail_width?: Maybe<Scalars["Int"]>;
};

/** Deprecated. */
export type CarImageData = {
  /** Full size image of a car. */
  image?: Maybe<CarImage>;
  /** Thumbnail of a full size image. */
  image_thumbnail?: Maybe<CarImage>;
  /** Full size logo of the make of a car. */
  brand?: Maybe<CarImage>;
  /** Thumbnail of a full size logo of the make of a car. */
  brand_thumbnail?: Maybe<CarImage>;
};

/** Deprecated: In favour of VehicleImageType. */
export enum CarImageType {
  /** Images provided by a Car Datasource. */
  PROVIDER = "provider",
  /** Full-sized image at 1536x864 px. */
  IMAGE = "image",
  /** Thumbnail of a full-sized image at 131x72 px. */
  IMAGE_THUMBNAIL = "image_thumbnail",
  /** Full-sized brand (make) logo at 768x432 px. */
  BRAND = "brand",
  /** Thumbnail of a full-sized brand (make) logo at 56x24 px. */
  BRAND_THUMBNAIL = "brand_thumbnail",
  /** Placeholder image at 1536x864 px. */
  PLACEHOLDER = "placeholder"
}

/** Deprecated: In favour of VehicleImageTypeUploadable. */
export enum CarImageTypeUploadable {
  /** Full size image with a resolution at least 1536x864 px. */
  IMAGE = "image"
}

/** Deprecated: In favour of VehicleList. */
export type CarList = {
  /** Cars unique ID. */
  id?: Maybe<Scalars["ID"]>;
  /** Naming of a car. */
  naming?: Maybe<CarListNaming>;
  /** Connectors available for a car. */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** Adapters of connectors available for a car. */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Battery of a car. */
  battery?: Maybe<CarListBattery>;
  /** Body of a car. */
  body?: Maybe<CarListBody>;
  /** Availability of a car. */
  availability?: Maybe<CarListAvailability>;
  /** Range of a car. */
  range?: Maybe<CarListRange>;
  /** Media of a car. */
  media?: Maybe<CarListMedia>;
  /** Routing of a car. */
  routing?: Maybe<CarListRouting>;
  /** Information about vehicle connectivity. */
  connect?: Maybe<Connect>;
  /**
   * ID provided by a car data source as the row ID.
   * @deprecated Will be removed in the future
   */
  externalId?: Maybe<Scalars["String"]>;
  /**
   * Car manufacturer.
   * @deprecated In favor of naming.make
   */
  make?: Maybe<Scalars["String"]>;
  /**
   * Car model.
   * @deprecated In favor of naming.model
   */
  carModel?: Maybe<Scalars["String"]>;
  /**
   * Car edition.
   * @deprecated In favor of naming.version
   */
  edition?: Maybe<Scalars["String"]>;
  /**
   * Car model edition. Added by Chargetrip as an alternative for when a car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years.
   * @deprecated In favor of naming.chargetrip_version
   */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /**
   * Car version.
   * @deprecated In favor of naming.edition
   */
  version?: Maybe<Scalars["String"]>;
  /**
   * Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data.
   * @deprecated In favor of range.chargetrip_range
   */
  chargetripRange?: Maybe<ChargetripRange>;
  /**
   * Cars that support fast charging have a minimum charging speed of 43 kWh.
   * @deprecated In favor of routing.fast_charging_support
   */
  fastChargingSupport?: Maybe<Scalars["Boolean"]>;
  /**
   * Current production mode of a car.
   * @deprecated In favor of availability.status
   */
  mode?: Maybe<CarMode>;
  /**
   * Number of seats.
   * @deprecated In favor of body.seats
   */
  seats?: Maybe<Scalars["Int"]>;
  /**
   * Usable battery capacity in kWh.
   * @deprecated In favor of battery.usable_kwh
   */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /**
   * Full battery capacity in kWh.
   * @deprecated In favor of battery.full_kwh
   */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /**
   * Images of a car in structured data.
   * @deprecated In favor of media.image and media.brand
   */
  imagesData?: Maybe<CarImageData>;
  /** @deprecated You will receive null values */
  power?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  acceleration?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  topSpeed?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  torque?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  batteryEfficiency?: Maybe<CarBatteryEfficiency>;
  /** @deprecated You will receive null values */
  weight?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  height?: Maybe<Scalars["Int"]>;
  /** @deprecated You will receive null values */
  width?: Maybe<Scalars["Int"]>;
  /** @deprecated You will receive null values */
  consumption?: Maybe<CarExtraConsumption>;
  /** @deprecated You will receive null values */
  petrolConsumption?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  chargingOffset?: Maybe<Scalars["JSON"]>;
  /** @deprecated You will receive null values */
  auxConsumption?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  bmsConsumption?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  dragCoefficient?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  tirePressure?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  motorEfficiency?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  drivelineEfficiency?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  regenEfficiency?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  images?: Maybe<Array<Maybe<CarImage>>>;
};

/** Deprecated: In favour of VehicleListAvailability. */
export type CarListAvailability = {
  /**
   * Availability of car.
   *
   * Values:
   *    - 0 = Car no longer for sale in any market / region.
   *    - 1 = Car currently for sale in at least one market / region.
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open.
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unkown or not open.
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open.
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open.
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open.
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown.
   *    - 91 = Status uncertain, introduction date and/or pricing unclear.
   */
  status?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehicleListBattery. */
export type CarListBattery = {
  /** Usable battery capacity in kWh. */
  usable_kwh?: Maybe<Scalars["Float"]>;
  /** Full battery capacity in kWh. */
  full_kwh?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehicleListBody. */
export type CarListBody = {
  /** Number of seats in car. */
  seats?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehicleListFilter. */
export type CarListFilter = {
  /**
   * Availability of car.
   *
   * Values:
   *    - 0 = Car no longer for sale in any market / region.
   *    - 1 = Car currently for sale in at least one market / region.
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open.
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unkown or not open.
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open.
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open.
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open.
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown.
   *    - 91 = Status uncertain, introduction date and/or pricing unclear.
   */
  availability?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  /** Information about vehicle connectivity. */
  connect?: Maybe<ConnectFilter>;
};

/** Deprecated: In favour of VehicleListMedia. */
export type CarListMedia = {
  /** Latest image of the car. */
  image?: Maybe<CarImage>;
  /** Latest make logo of the car. */
  brand?: Maybe<CarImage>;
  /** Latest video of the car. */
  video?: Maybe<CarVideo>;
};

/** Deprecated: In favour of VehicleListNaming. */
export type CarListNaming = {
  /** Car manufacturer name. */
  make?: Maybe<Scalars["String"]>;
  /** Car model name. */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car. */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car. */
  edition?: Maybe<Scalars["String"]>;
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years. */
  chargetrip_version?: Maybe<Scalars["String"]>;
};

/** Deprecated. */
export type CarListQuery = {
  /** Deprecated: Not used anymore. */
  make?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore. */
  model?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore. */
  version?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore. */
  chargetrip_version?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore. */
  mode?: Maybe<CarMode>;
};

/** Deprecated: In favour of VehicleListRange. */
export type CarListRange = {
  /**
   * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
   * Chargetrip range is based on the theoretical distance driven using only the electric engine.
   * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  chargetrip_range?: Maybe<ChargetripRange>;
  /** @deprecated You will receive null values */
  wltp?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  worst?: Maybe<CarEstimationData>;
  /** @deprecated You will receive null values */
  best?: Maybe<CarEstimationData>;
};

/** Deprecated: In favour of VehicleListRouting. */
export type CarListRouting = {
  /** Cars that support fast charging have a minimum charging speed of 43 kWh. */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehicleMedia. */
export type CarMedia = {
  /** URL to detail page on EV database. */
  evdb_details_url?: Maybe<Scalars["String"]>;
  /** Latest image. */
  image?: Maybe<CarImage>;
  /** Latest make logo. */
  brand?: Maybe<CarImage>;
  /** All images. */
  image_list?: Maybe<Array<Maybe<CarImage>>>;
  /** Latest video. */
  video?: Maybe<CarVideo>;
  /** All videos. */
  video_list?: Maybe<Array<Maybe<CarVideo>>>;
  /**
   * URL to detail page on EV database.
   * @deprecated Will be removed in the future. Please use evdb_details_url
   */
  evdb_detail_url?: Maybe<Scalars["String"]>;
};

/** Deprecated: In favour of VehicleMode. */
export enum CarMode {
  /** Old car that is no longer manufactured. */
  INDEX_ONLY = "index_only",
  /** Car is in production and has been released. */
  PRODUCTION = "production",
  /** Future releases of a car, a concept of the car, specs may change over time. */
  CONCEPT = "concept"
}

/** Deprecated: In favour of VehicleNaming. */
export type CarNaming = {
  /** Car manufacturer name. */
  make?: Maybe<Scalars["String"]>;
  /** Car model name. */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car. */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car. */
  edition?: Maybe<Scalars["String"]>;
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years. */
  chargetrip_version?: Maybe<Scalars["String"]>;
};

/** Deprecated: In favour of VehiclePerformance. */
export type CarPerformance = {
  /** Acceleration 0-100 km/h in seconds. */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Top speed of car in km/h. */
  top_speed?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehicleConnector. */
export type CarPlug = {
  /** Plug type, known as connector standard in OCPI. */
  standard?: Maybe<ConnectorType>;
  /** Usable electric power in kW. */
  power?: Maybe<Scalars["Float"]>;
  /** Maximum electric power in kW. */
  max_electric_power?: Maybe<Scalars["Float"]>;
  /** Time it takes to charge from 10 to 80% with a fast charger, shown in minutes. */
  time?: Maybe<Scalars["Int"]>;
  /** Charging speed in km/h. */
  speed?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehiclePremium. */
export type CarPremium = {
  /** Unique ID of a car. */
  id?: Maybe<Scalars["ID"]>;
  /** Internal ID of the successor car trim. */
  succesor_id?: Maybe<Scalars["String"]>;
  /** Naming of a car. */
  naming?: Maybe<CarPremiumNaming>;
  /** Connectors available for a car. */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** Charge details. */
  charge?: Maybe<CarPremiumCharge>;
  /** Fast charge details. */
  fast_charge?: Maybe<CarPremiumFastCharge>;
  /** Adapters of connectors available for a car. */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Battery of a car. */
  battery?: Maybe<CarPremiumBattery>;
  /** Body of a car. */
  body?: Maybe<CarPremiumBody>;
  /** Availability of a car. */
  availability?: Maybe<CarPremiumAvailability>;
  /** Pricing of a car. */
  price?: Maybe<CarPremiumPrice>;
  /** Drivetrain of a car. */
  drivetrain?: Maybe<CarPremiumDrivetrain>;
  /** Performance of a car. */
  performance?: Maybe<CarPremiumPerformance>;
  /** Range of a car. */
  range?: Maybe<CarPremiumRange>;
  /** Efficiency of a car. */
  efficiency?: Maybe<CarPremiumEfficiency>;
  /** Safety of a car. */
  safety?: Maybe<CarPremiumSafety>;
  /** Media of a car. */
  media?: Maybe<CarPremiumMedia>;
  /** Routing of a car. */
  routing?: Maybe<CarPremiumRouting>;
  /** Information about vehicle connectivity. */
  connect?: Maybe<Connect>;
};

/** Deprecated: In favour of VehiclePremiumAvailability. */
export type CarPremiumAvailability = {
  /**
   * Availability of car.
   *
   * Values:
   *    - 0 = Car no longer for sale in any market/region.
   *    - 1 = Car currently for sale in at least one market/region.
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open.
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unknown or not open.
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open.
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open.
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open.
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown.
   *    - 91 = Status uncertain, introduction date and/or pricing unclear.
   */
  status?: Maybe<Scalars["Int"]>;
  /** Date of introduction, mm-yyyy. */
  date_from?: Maybe<Scalars["String"]>;
  /** Indicates if date from field is estimated. */
  date_from_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Date last available, mm-yyyy. */
  date_to?: Maybe<Scalars["String"]>;
};

/** Deprecated: In favour of VehiclePremiumBattery. */
export type CarPremiumBattery = {
  /** Usable battery capacity in kWh. */
  usable_kwh?: Maybe<Scalars["Float"]>;
  /** Full battery capacity in kWh. */
  full_kwh?: Maybe<Scalars["Float"]>;
  /** Indicates which battery fields are estimated. */
  estimated_fields?: Maybe<CarBatteryFieldEstimations>;
  /** Battery thermal management system (active/passive, air/liquid). */
  thermal_management_system?: Maybe<Scalars["String"]>;
  /** Duration of battery warranty. */
  warranty_period?: Maybe<Scalars["Float"]>;
  /** Mileage of battery warranty. */
  warranty_mileage?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehiclePremiumBody. */
export type CarPremiumBody = {
  /** Length in mm. */
  length?: Maybe<Scalars["Int"]>;
  /** Width with folded mirrors in mm. */
  width?: Maybe<Scalars["Int"]>;
  /** Width of vehicle in mm, including mirrors. */
  full_width?: Maybe<Scalars["Int"]>;
  /** Height (average height for adjustable suspensions) in mm. */
  height?: Maybe<Scalars["Int"]>;
  /** Indicates if length/width/height fields are estimations. */
  size_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Wheelbase in mm. */
  wheelbase?: Maybe<Scalars["Int"]>;
  /** Indicates if wheelbase field is estimated. */
  wheelbase_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Weight (unladen EU) in kg. */
  weight?: Maybe<Scalars["Int"]>;
  /** Indicates if weight field is estimated. */
  weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum payload allowed for vehicle in kg. */
  weight_max_payload?: Maybe<Scalars["Int"]>;
  /** Gross Vehicle Weight (GVWR) - (max allowed vehicle weight with payload) in kg. */
  max_gross_vehicle_weight?: Maybe<Scalars["Int"]>;
  /** Standard luggage capacity in l. */
  boot_capacity?: Maybe<Scalars["Int"]>;
  /** Storage capacity of front trunk/under the hood (frunk). */
  boot_front_capacity?: Maybe<Scalars["Int"]>;
  /** Maximum luggage capacity in l. */
  boot_capacity_max?: Maybe<Scalars["Int"]>;
  /** Indicates if a tow hitch/towbar can be fitted according to vehicle homologation. */
  tow_hitch_compatible?: Maybe<Scalars["Boolean"]>;
  /** Maximum unbraked towing weight in kg. */
  tow_weight_unbraked?: Maybe<Scalars["Int"]>;
  /** Maximum braked towing weight in kg. */
  tow_weight_braked?: Maybe<Scalars["Int"]>;
  /** Indicates if tow weight fields are estimations. */
  tow_weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum vertical load / noseweight on tow hitch according to vehicle homologation. */
  tow_weight_vertical_load?: Maybe<Scalars["Int"]>;
  /** Maximum load on roof of car in kg. */
  roof_load_max?: Maybe<Scalars["Int"]>;
  /** Body type, listed in local naming convention where applicable. */
  body_type?: Maybe<Scalars["String"]>;
  /** Segment, listed in local naming convention where applicable. */
  segment?: Maybe<Scalars["String"]>;
  /** Number of seats. */
  seats?: Maybe<Scalars["Int"]>;
  /** Indicates whether a car has roof rails as a standard. */
  has_roofrails?: Maybe<Scalars["Boolean"]>;
  /** Turning circle of vehicle kerb-to-kerb. */
  turning_circle?: Maybe<Scalars["Float"]>;
  /** Name of vehicle platform used for vehicle (often abbreviated to indicate group platforms). */
  vehicle_platform?: Maybe<Scalars["String"]>;
  /** Indicates if the vehicle platform used for vehicle is a dedicated battery electric vehicle platform. */
  vehicle_platform_is_dedicated?: Maybe<Scalars["Boolean"]>;
  /**
   * Indicates whether a car has roof rails as a standard.
   * @deprecated In favor of has_roofrails
   */
  rooftrails?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehiclePremiumCharge. */
export type CarPremiumCharge = {
  /** Location of charge port. */
  plug?: Maybe<CarPremiumChargePlug>;
  /** Location of second charge port. */
  second_plug?: Maybe<CarPremiumChargeSecondPlug>;
  /** The car standard charge. */
  standard?: Maybe<CarPremiumChargeStandardOBC>;
  /** The car alternative charge. */
  alternative?: Maybe<CarPremiumChargeAlternativeOBC>;
  /** The car option charge. */
  option?: Maybe<CarPremiumChargeOptionOBC>;
};

/** Deprecated: In favour of VehiclePremiumChargeAlternativeOBC. */
export type CarPremiumChargeAlternativeOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC). */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC). */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC). */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC). */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Charging details for the standard OBC at several charging points. */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

/** Deprecated: In favour of VehiclePremiumChargeOBCTable. */
export type CarPremiumChargeOBCTable = {
  /** Voltage between phase and neutral for this EVSE (phase voltage). */
  evse_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Current per phase for this EVSE (phase current). */
  evse_phase_amperage?: Maybe<Scalars["Int"]>;
  /** Number of phases for this EVSE. */
  evse_phases?: Maybe<Scalars["Int"]>;
  /** Voltage between phase and neutral used by standard OBC (phase voltage). */
  charge_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Current per phase used by standard OBC (phase current). */
  charge_phase_amperage?: Maybe<Scalars["Float"]>;
  /** Number of phases used by standard OBC. */
  charge_phases?: Maybe<Scalars["Int"]>;
  /** Power used by standard OBC (before OBC losses). */
  charge_power?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC with this EVSE). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC with this EVSE). */
  charge_speed?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehiclePremiumChargeOptionOBC. */
export type CarPremiumChargeOptionOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC). */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC). */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC). */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC). */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Charging details for the standard OBC at several charging points. */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

/** Deprecated: In favour of VehiclePremiumChargePlug. */
export type CarPremiumChargePlug = {
  /** Type of charge port on vehicle. */
  value?: Maybe<ConnectorType>;
  /** Indicates if value is an estimate. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Location of charge port. */
  location?: Maybe<Scalars["String"]>;
};

/** Deprecated: In favour of VehiclePremiumChargePower. */
export type CarPremiumChargePower = {
  /** Maximum value. */
  max?: Maybe<Scalars["Float"]>;
  /** Average value. */
  average?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehiclePremiumChargeSecondPlug. */
export type CarPremiumChargeSecondPlug = {
  /** Location of charge port. */
  location?: Maybe<Scalars["String"]>;
  /** Indicates if second charge port is optional. */
  is_optional?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehiclePremiumChargeStandardOBC. */
export type CarPremiumChargeStandardOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC). */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC). */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC). */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC). */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Indicates if Charge_Standard fields are estimated. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Charging details for the standard OBC at several charging points. */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

/** Deprecated: In favour of VehiclePremiumDrivetrain. */
export type CarPremiumDrivetrain = {
  /** Type of drivetrain. */
  type?: Maybe<CarDrivetrain>;
  /** Fuel type. */
  fuel?: Maybe<CarFuel>;
  /** Propulsion type. */
  propulsion?: Maybe<CarPropulsion>;
  /** Indicates if propulsion field is estimated. */
  propulsion_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum (combined) power output in kw. */
  power?: Maybe<Scalars["Int"]>;
  /** Indicates if power field is estimated. */
  power_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum (combined) power output in horsepower (PS). */
  power_hp?: Maybe<Scalars["Int"]>;
  /** Maximum (combined) torque output in newton meter. */
  torque?: Maybe<Scalars["Int"]>;
  /** Indicates if torque field is estimated. */
  torque_is_estimated?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehiclePremiumEfficiency. */
export type CarPremiumEfficiency = {
  /** Rated efficiency in WLTP combined cycle. */
  wltp?: Maybe<CarPremiumEfficiencyWLTP>;
  /** Rated efficiency in WLTP combined cycle (TEH / least efficient trim). */
  wltp_teh?: Maybe<CarPremiumEfficiencyWLTPTEH>;
  /** Rated efficiency in NEDC combined cycle. */
  nedc?: Maybe<CarPremiumEfficiencyNEDC>;
  /** Car efficiency based on RealRange. */
  real?: Maybe<CarPremiumEfficiencyReal>;
};

/** Deprecated: In favour of VehiclePremiumEfficiencyNEDC. */
export type CarPremiumEfficiencyNEDC = {
  /** Rated efficiency in NEDC combined cycle in kWh/100 km. */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in NEDC combined cycle presented in gas equivalent, in l/100 km. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle (based on value) in kWh/100 km. */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle presented in gas equivalent in l/100 km. */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in NEDC combined cycle in battery-only mode (NULL if not NEDC rated) in gr/km. */
  co2?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehiclePremiumEfficiencyProvider. */
export type CarPremiumEfficiencyReal = {
  /** Car efficiency based on RealRange (useable battery/range) in kWh/100 km. */
  value?: Maybe<Scalars["Float"]>;
  /** Car efficiency based on RealRange presented in gas equivalent, in l/100 km. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating. */
  worst?: Maybe<CarPremiumEfficiencyRealValue>;
  /** Best conditions are based on 23°C and no use of A/C. */
  best?: Maybe<CarPremiumEfficiencyRealValue>;
};

/** Deprecated: In favour of VehiclePremiumEfficiencyProviderValue. */
export type CarPremiumEfficiencyRealValue = {
  /** Estimated value on highway or express roads. */
  highway?: Maybe<Scalars["Float"]>;
  /** Estimated value on city roads. */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated combined value. */
  combined?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehiclePremiumEfficiencyWLTP. */
export type CarPremiumEfficiencyWLTP = {
  /** Rated efficiency in WLTP combined cycle in kWh/100 km. */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP combined cycle presented in gas equivalent, in l/100 km. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle (based on value) in kWh/100 km. */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle presented in gas equivalent, in l/100 km. */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in WLTP combined cycle in battery-only mode (NULL if not WLTP rated) in gr/km. */
  co2?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehiclePremiumEfficiencyWLTPTEH. */
export type CarPremiumEfficiencyWLTPTEH = {
  /** Rated efficiency in WLTP TEH combined cycle (TEH/least efficient trim). */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP TEH combined cycle presented in gas equivalent, in l/100 km. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle (based on value) in kWh/100 km. */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle presented in gas equivalent, in l/100 km. */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in WLTP TEH combined cycle in battery-only mode (NULL if not WLTP TEH rated) in gr/km. */
  co2?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehiclePremiumChargePlug. */
export type CarPremiumFastCharge = {
  /** Location of charge port. */
  plug?: Maybe<CarPremiumChargePlug>;
  /** Power during fast charging from 10% to 80% SoC (optimal conditions, fastest charger). */
  power?: Maybe<CarPremiumChargePower>;
  /** Minutes needed to charge from 10% to 80%, with average charging power (optimal conditions, fastest charger). */
  charge_time?: Maybe<Scalars["Float"]>;
  /** Charging speed during fast charging from 10% to 80% (optimal conditions, fastest charger). */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Indicates if fast charge is optional in some markets/regions. */
  is_optional?: Maybe<Scalars["Boolean"]>;
  /** Indicates what fields are estimated. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Charging details for fast charging. */
  table?: Maybe<Array<Maybe<CarPremiumFastChargeTable>>>;
};

/** Deprecated: In favour of VehiclePremiumFastChargeTable. */
export type CarPremiumFastChargeTable = {
  /** Charging details for fast charging (format: ChargerPlug-ChargerPower-AC/DC). */
  format?: Maybe<Scalars["String"]>;
  /** Fast charge power. */
  power?: Maybe<CarPremiumChargePower>;
  /** Minutes needed to charge from 10% to 80% (optimal conditions). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed during fast charging from 10% to 80% (optimal conditions). */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Indicates if maximum power during fast charging is limited by the vehicle. */
  is_limited?: Maybe<Scalars["Boolean"]>;
  /** Indicates if average power during fast charging is limited by the vehicle. */
  average_is_limited?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehiclePremiumMedia. */
export type CarPremiumMedia = {
  /** URL to detail page on EV database. */
  evdb_details_url?: Maybe<Scalars["String"]>;
  /** Latest image. */
  image?: Maybe<CarImage>;
  /** Latest make logo. */
  brand?: Maybe<CarImage>;
  /** All images. */
  image_list?: Maybe<Array<Maybe<CarImage>>>;
  /** Latest video. */
  video?: Maybe<CarVideo>;
  /** All videos. */
  video_list?: Maybe<Array<Maybe<CarVideo>>>;
  /**
   * URL to detail page on EV database.
   * @deprecated Will be removed in the future. Please use evdb_details_url
   */
  evdb_detail_url?: Maybe<Scalars["String"]>;
};

/** Deprecated: In favour of VehiclePremiumNaming. */
export type CarPremiumNaming = {
  /** Car manufacturer name. */
  make?: Maybe<Scalars["String"]>;
  /** Car model name. */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car. */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car. */
  edition?: Maybe<Scalars["String"]>;
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide a version name, or uses the same version name across all trims or consecutive years. */
  chargetrip_version?: Maybe<Scalars["String"]>;
};

/** Deprecated: In favour of VehiclePremiumPerformance. */
export type CarPremiumPerformance = {
  /** Acceleration 0-100 km/h in seconds. */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Indicates if acceleration field is estimated. */
  acceleration_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Top speed of car in km/h. */
  top_speed?: Maybe<Scalars["Int"]>;
  /** Indicates if top_speed field is estimated. */
  top_speed_is_estimated?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehiclePremiumPrice. */
export type CarPremiumPrice = {
  /** Starting price for German market. */
  de?: Maybe<CarPremiumPriceValue>;
  /** Starting price for Dutch market. */
  nl?: Maybe<CarPremiumPriceValue>;
  /** Starting price for British market. */
  uk?: Maybe<CarPremiumPriceValueWithGrant>;
};

/** Deprecated: In favour of VehiclePremiumPrice.value */
export type CarPremiumPriceValue = {
  /** Starting price for local market. */
  value?: Maybe<Scalars["Int"]>;
  /** Currency name for local market. */
  currency?: Maybe<Scalars["String"]>;
  /** Indicates if price value is based on estimates. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /**
   * Indicates if price value is based on estimates.
   * @deprecated In favor of is_estimated
   */
  estimated?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehiclePremiumPriceValueWithGrant. */
export type CarPremiumPriceValueWithGrant = {
  /** Starting price for local market. */
  value?: Maybe<Scalars["Int"]>;
  /** Currency name for local market. */
  currency?: Maybe<Scalars["String"]>;
  /** Indicates if the starting price is based on an estimate. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Grant that is applied to the starting price. */
  grant_applied?: Maybe<Scalars["Int"]>;
  /**
   * Indicates if price value is based on estimates.
   * @deprecated In favor of is_estimated
   */
  estimated?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehiclePremiumRange. */
export type CarPremiumRange = {
  /** Rated range in WLTP combined cycle (NULL if not WLTP rated) in km. */
  wltp?: Maybe<Scalars["Int"]>;
  /** Indicates if WLTP range is estimated (NULL if not WLTP rated). */
  wltp_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Rated range in WLTP (TEH/least efficient trim) combined cycle (NULL if not WLTP rated). */
  wltp_teh?: Maybe<Scalars["Int"]>;
  /** Rated range in NEDC combined cycle (NULL if not NEDC rated) in km. */
  nedc?: Maybe<Scalars["Int"]>;
  /** Indicates if NEDC range is estimated (NULL if not NEDC rated). */
  nedc_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Index range in EV Database RealRange model in km. */
  real?: Maybe<Scalars["Int"]>;
  /** Indicates if real is estimated. */
  real_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Worst conditions are based on -10°C and use of heating. */
  worst?: Maybe<CarPremiumRangeValue>;
  /** Best conditions are based on 23°C and no use of A/C. */
  best?: Maybe<CarPremiumRangeValue>;
  /**
   * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
   * Chargetrip range is based on the theoretical distance driven using only the electric engine.
   * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  chargetrip_range?: Maybe<ChargetripRange>;
};

/** Deprecated: In favour of VehiclePremiumRangeValue. */
export type CarPremiumRangeValue = {
  /** Estimated value on highway or express roads. */
  highway?: Maybe<Scalars["Int"]>;
  /** Estimated value on city roads. */
  city?: Maybe<Scalars["Int"]>;
  /** Estimated combined value. */
  combined?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehiclePremiumRouting. */
export type CarPremiumRouting = {
  /** Cars that support fast charging have a minimum charging speed of 43 kWh. */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
  /** Drag coefficient. */
  drag_coefficient?: Maybe<Scalars["Float"]>;
  /** Tire pressure recommended by manufacturer. */
  tire_pressure?: Maybe<Scalars["Float"]>;
  /** Extra consumption model. */
  consumption?: Maybe<CarPremiumRoutingConsumption>;
  /** Amount of petrol that an equivalent petrol car would consume in l/100 km. */
  petrol_consumption?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehiclePremiumRoutingConsumption. */
export type CarPremiumRoutingConsumption = {
  /** Consumption, in kWh, of the auxiliaries. */
  aux?: Maybe<CarPremiumRoutingConsumptionValue>;
  /** Consumption, in kWh, of the battery management system. */
  bms?: Maybe<CarPremiumRoutingConsumptionValue>;
  /** Consumption, in kWh, of the car in idle mode. */
  idle?: Maybe<CarPremiumRoutingConsumptionValue>;
};

/** Deprecated: In favour of VehiclePremiumRoutingConsumptionValue. */
export type CarPremiumRoutingConsumptionValue = {
  /** Best (lowest) consumption in summer. */
  best?: Maybe<Scalars["Float"]>;
  /** Best (lowest) consumption in winter. */
  worst?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehiclePremiumSafety. */
export type CarPremiumSafety = {
  /** Number of seats equipped with ISOFIX. */
  isofix_seats?: Maybe<Scalars["Int"]>;
  /** EuroNCAP results. */
  euro_ncap?: Maybe<CarPremiumSafetyEuroNcap>;
};

/** Deprecated: In favour of VehiclePremiumSafetyEuroNcap. */
export type CarPremiumSafetyEuroNcap = {
  /** EuroNCAP rating (out of 5 stars). */
  rating?: Maybe<Scalars["Int"]>;
  /** EuroNCAP year of rating. */
  year?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of adult protection (out of 100%). */
  adult?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of child protection (out of 100%). */
  child?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of vulnerable road users (out of 100%). */
  vru?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of safety assists (out of 100%). */
  sa?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehiclePropulsion. */
export enum CarPropulsion {
  /** All-wheel drive car. */
  AWD = "AWD",
  /** Front-wheel drive car. */
  FRONT = "Front",
  /** Rear-wheel drive car. */
  REAR = "Rear"
}

/** Deprecated: In favour of VehicleRange. */
export type CarRange = {
  /** Index range in EV Database RealRange model in km. */
  real?: Maybe<Scalars["Int"]>;
  /** Indicates if real is estimated. */
  real_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Worst conditions are based on -10°C and use of heating. */
  worst?: Maybe<CarRangeValue>;
  /** Best conditions are based on 23°C and no use of A/C. */
  best?: Maybe<CarRangeValue>;
  /**
   * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
   * Chargetrip range is based on the theoretical distance driven using only the electric engine.
   * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  chargetrip_range?: Maybe<ChargetripRange>;
  /** @deprecated You will receive null values */
  wltp?: Maybe<Scalars["Float"]>;
};

/** Deprecated: In favour of VehicleRangeValue. */
export type CarRangeValue = {
  /** Estimated value on the highway or express roads. */
  highway?: Maybe<Scalars["Int"]>;
  /** Estimated value on the cities road. */
  city?: Maybe<Scalars["Int"]>;
  /** Estimated combined value. */
  combined?: Maybe<Scalars["Int"]>;
};

/** Deprecated: In favour of VehicleRouting. */
export type CarRouting = {
  /** Cars that support fast charging have a minimum charging speed of 43 kWh. */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: In favour of VehicleStatus. */
export enum CarStatus {
  /** Was just imported. */
  NEW = "new",
  /** Is being reviewed by a human operator. */
  REVIEW = "review",
  /** Is public and can be used by a customer. */
  PUBLIC = "public",
  /** Is removed and can not be used. */
  REMOVED = "removed"
}

/** Deprecated: In favour of VehicleVideo. */
export type CarVideo = {
  /** Video id. */
  id?: Maybe<Scalars["ID"]>;
  /** Full path URL of a video. */
  url?: Maybe<Scalars["String"]>;
};

/** Charging mode used at charging stations. */
export enum ChargeMode {
  /** Optimizes the charging time at each station, in order to decrease the total travel time. You will only charge up until the SOC you need in order to reach the next stop. */
  OPTIMIZE_TRAVEL_TIME = "OPTIMIZE_TRAVEL_TIME",
  /** Charge to the maximum capacity at every charging stop. The default maximum charging capacity is 80%. */
  ALWAYS_TO_MAX_CHARGE = "ALWAYS_TO_MAX_CHARGE"
}

export type ChargeSpeed = {
  /** Value of the charge speed of the battery. */
  value: Scalars["Float"];
  /** Type of the charge speed of the battery. */
  type: ChargeSpeedUnit;
  /** Source of inputted data */
  source: TelemetryInputSource;
};

export type ChargeSpeedInput = {
  /** Value of the charge speed of the battery. */
  value: Scalars["Float"];
  /** Type of the charge speed of the battery. */
  type: ChargeSpeedUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

/** Charge speed unit. */
export enum ChargeSpeedUnit {
  /** Return the charge speed in kilowatt hours. */
  KILOWATT_HOUR = "kilowatt_hour",
  /** Return the charge speed in kilometers per hour. */
  KILOMETERS_PER_HOUR = "kilometers_per_hour",
  /** Return the charge speed in miles per hour. */
  MILES_PER_HOUR = "miles_per_hour"
}

export type ChargeTotalInput = {
  /** Value of the temperature of the battery. */
  value: Scalars["Float"];
  /** Type of total charge amount. */
  type: StateOfChargeUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: Maybe<TelemetryInputSource>;
};

/** A grouped representation of EVSEs. */
export type Charger = {
  /** Type of a charger. */
  standard?: Maybe<ConnectorType>;
  /** Power of a charger, in kW. */
  power?: Maybe<Scalars["Float"]>;
  /** Price of a charger. */
  price?: Maybe<Scalars["String"]>;
  /** Charging speed. */
  speed?: Maybe<StationSpeedType>;
  /** Statuses of all the EVSEs grouped in a charger. */
  status?: Maybe<ChargerStatuses>;
  /** Total number of EVSEs grouped in a charger. */
  total?: Maybe<Scalars["Int"]>;
};

/** Status of a charger. */
export enum ChargerStatus {
  /** The charger is free. */
  FREE = "free",
  /** The charger is occupied/busy. */
  BUSY = "busy",
  /** The charger is unknown. */
  UNKNOWN = "unknown",
  /** The charger has an error. */
  ERROR = "error"
}

/** Grouping by status of the chargers. */
export type ChargerStatuses = {
  /** How many are free. */
  free?: Maybe<Scalars["Int"]>;
  /** How many are busy. */
  busy?: Maybe<Scalars["Int"]>;
  /** How many are unknown. */
  unknown?: Maybe<Scalars["Int"]>;
  /** How many are not available. */
  error?: Maybe<Scalars["Int"]>;
};

/**
 * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
 * Chargetrip range is based on the theoretical distance driven using only the electric engine.
 * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
 * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
 */
export type ChargetripRange = {
  /**
   * Range calculated using the worst conditions.
   * Worst conditions are based on -0°C, including use of heating.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  worst?: Maybe<Scalars["Float"]>;
  /**
   * Range calculated using the best conditions.
   * Best conditions are based on 25°C, including use of A/C.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  best?: Maybe<Scalars["Float"]>;
};

/**
 * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
 * Chargetrip range is based on the theoretical distance driven using only the electric engine.
 * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
 * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
 */
export type ChargetripRangeworstArgs = {
  unit?: Maybe<DistanceUnit>;
};

/**
 * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
 * Chargetrip range is based on the theoretical distance driven using only the electric engine.
 * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
 * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
 */
export type ChargetripRangebestArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type ChargingBehaviour = {
  /** Charging behaviour of users divided in groups, based on real-time information. */
  code?: Maybe<ChargingBehaviourCode>;
  /** Description of charging behaviour. */
  description?: Maybe<Scalars["String"]>;
};

export enum ChargingBehaviourCode {
  /** Mainly morning charging, and some mixed afternoon and evening charging. */
  URBAN_CHARGING = "URBAN_CHARGING",
  /** Mainly fast charging, with some morning and afternoon charging. */
  FAST_CHARGING = "FAST_CHARGING",
  /** Mixed behaviour between morning, afternoon, evening, overnight, and noise charging. */
  MIXED_CHARGING = "MIXED_CHARGING",
  /** Mainly noise charging. */
  NOISE_CHARGING = "NOISE_CHARGING",
  /** Mainly overnight charging. */
  OVERNIGHT_CHARGING = "OVERNIGHT_CHARGING",
  /** Mainly morning charging, with some afternoon charging. */
  OFFICE_CHARGING = "OFFICE_CHARGING"
}

export type Connect = {
  /** List of connectivity providers to which the vehicle can connect. This field returns null for free users. Please contact customer success for more information. */
  providers?: Maybe<Array<ConnectProvider>>;
};

export type ConnectBattery = {
  /** Estimated range by OEM */
  range?: Maybe<Scalars["Float"]>;
  /** Percentage of the battery remaining */
  percentage?: Maybe<Scalars["Float"]>;
  /** Capacity of the battery, in kwh */
  capacity?: Maybe<Scalars["Float"]>;
  /** Date when the battery data was retrieved, as ISO-8601 date */
  date?: Maybe<Scalars["DateTime"]>;
};

export type ConnectCharge = {
  /** Vehicle is plugged in */
  is_plugged_in?: Maybe<Scalars["Boolean"]>;
  /** Vehicle is charging */
  is_charging?: Maybe<Scalars["Boolean"]>;
  /** Battery is fully charged */
  is_fully_charged?: Maybe<Scalars["Boolean"]>;
  /** Charge limit defined by vehicle owner */
  limit?: Maybe<Scalars["Int"]>;
  /** Charge speed, in kwh */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Estimation when charging is completed, as ISO-8601 date */
  fully_charged_at?: Maybe<Scalars["DateTime"]>;
  /** Estimated minutes till charged */
  minutes_till_charged?: Maybe<Scalars["Int"]>;
  /** Date when the charge data was retrieved, as ISO-8601 date */
  date?: Maybe<Scalars["DateTime"]>;
};

export type ConnectFilter = {
  /** List of connectivity providers to which a vehicle can connect. */
  providers?: Maybe<Array<Maybe<ConnectProvider>>>;
};

/** Location of the vehicle */
export type ConnectLocation = {
  /** Feature type */
  type: FeatureType;
  /** Geometry of the feature */
  geometry: GeometryPoint;
  /** Properties object containing meta data about the feature point */
  properties?: Maybe<ConnectLocationProperties>;
};

/** Properties of a vehicle location */
export type ConnectLocationProperties = {
  /** Date when the location was retrieved, as ISO-8601 date */
  date: Scalars["DateTime"];
};

export type ConnectOdometer = {
  /** Odometer value, distance driven, default in km */
  distance?: Maybe<Scalars["Float"]>;
  /** Date when the odometer data was retrieved, as ISO-8601 date */
  date?: Maybe<Scalars["DateTime"]>;
};

export enum ConnectProvider {
  ENODE = "Enode"
}

export enum ConnectScope {
  /** Vehicle location, applicable for: Enode */
  LOCATION = "location",
  /** Charge state, applicable for: Enode */
  CHARGE_STATE = "charge_state",
  /** Odometer reading, applicable for: Enode */
  ODOMETER = "odometer"
}

export type ConnectedVehicle = {
  /** Unique ID of the connected vehicle */
  id: Scalars["ID"];
  /** Unique ID of the vehicle */
  vehicle_id: Scalars["ID"];
  /** Status of the connected vehicle */
  status: ConnectedVehicleStatus;
  /** URL to connect the vehicle to the connectivity provider */
  authorization_url?: Maybe<Scalars["String"]>;
  /** Connectivity provider */
  provider: CarConnectivityProvider;
  /** Scope for accessing the vehicle */
  scope?: Maybe<Array<Maybe<ConnectScope>>>;
  /** Custom label for a connected vehicle that can be assigned by a user */
  label?: Maybe<Scalars["String"]>;
  /** Vehicle identification number, unique identifier for a vehicle */
  vin?: Maybe<Scalars["String"]>;
};

export type ConnectedVehicleListFilter = {
  /** Status of the connected vehicle */
  status?: Maybe<Array<ConnectedVehicleStatus>>;
};

export enum ConnectedVehicleStatus {
  /** Vehicle was added to the Chargetrip Connect platform but not yet authorized */
  PENDING_AUTHORIZATION = "pending_authorization",
  /** Vehicle was authorized. Chargetrip can retrieve data on behave of the user */
  AUTHORIZED = "authorized",
  /** Pending vehicle removal */
  PENDING_REMOVAL = "pending_removal",
  /** Vehicle was removed and access has been revoked */
  REMOVED = "removed"
}

/** Connector data which extends OCPI Connector. */
export type Connector = {
  /** Identifier of a connector within an EVSE. Two connectors may have the same ID as long as they do not belong to the same EVSE object. This property is OCPI-compliant. */
  id?: Maybe<Scalars["String"]>;
  /** Standard of an installed connector. This property is OCPI-compliant. */
  standard?: Maybe<ConnectorType>;
  /** Format (socket/cable) of an installed connector. This property is OCPI-compliant. */
  format?: Maybe<OCPIConnectorFormat>;
  /** Type of power of an installed connector. This property is OCPI-compliant. */
  power_type?: Maybe<OCPIPowerType>;
  /** Maximum voltage of an connector (line to neutral for AC_3_PHASE), in volt [V]. For example: DC Chargers might vary the voltage during charging when battery almost full. This property is OCPI-compliant. */
  max_voltage?: Maybe<Scalars["Int"]>;
  /** Maximum amperage of a connector, in ampere [A]. This property is OCPI-compliant. */
  max_amperage?: Maybe<Scalars["Int"]>;
  /**
   * Maximum electric power that can be delivered by a connector, in watt [W]. When the maximum electric power is lower than the calculated value from voltage and amperage, this value should be set.
   * For example: A DC Charge Point which can deliver up to 920V and up to 400A can be limited to a maximum of 150kW. Depending on the vehicle, it may supply maximum voltage or current, but not both at the same time.
   * For AC Charge Points, the amount of phases used can also have influence on the maximum power. This property is OCPI-compliant.
   */
  max_electric_power?: Maybe<Scalars["Int"]>;
  /** Maximum electric power in kW. */
  power?: Maybe<Scalars["Float"]>;
  /**
   * Identifiers of the currently valid charging tariffs. Multiple tariffs are possible, but only one of each Tariff.type can be active at the same time. Tariffs with the same type are only allowed, if they are not active at the same time: start_date_time and end_date_time period not overlapping.
   * When preference-based smart charging is supported, one tariff for every possible ProfileType should be provided. This tells the user about the options they have at this Connector, and what the tariff is for every option.
   * For a "free of charge" tariff, this field should be set and point to a defined "free of charge" tariff. This property is OCPI-compliant.
   */
  tariff_ids?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** URL to an operator’s terms and conditions. This property is OCPI-compliant. */
  terms_and_conditions?: Maybe<Scalars["String"]>;
  /** Timestamp when a connector was last updated (or created). This property is OCPI-compliant. */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
  /** List of valid charging tariffs. */
  tariff?: Maybe<Array<Maybe<OCPITariff>>>;
  /** Charging prices. */
  pricing?: Maybe<Pricing>;
  /** Custom properties of a connector. These are vendor specific and will return null values on the fields that are not supported by your station database. */
  custom_properties?: Maybe<ConnectorCustomProperties>;
};

/** Custom properties for connectors. */
export type ConnectorCustomProperties = {
  /**
   * Charging prices.
   * @deprecated In favor of connector.pricing
   */
  pricing?: Maybe<Pricing>;
  /** Custom connector properties for OICP databases. Station databases that not follow the OICP standard return null values. */
  oicp?: Maybe<OICPConnectorCustomProperties>;
};

/** The socket or plug standard of the charging point. */
export enum ConnectorType {
  /** The connector type is CHAdeMO, DC. */
  CHADEMO = "CHADEMO",
  /** Standard/domestic household, type "A", NEMA 1-15, 2 pins. */
  DOMESTIC_A = "DOMESTIC_A",
  /** Standard/domestic household, type "B", NEMA 5-15, 3 pins. */
  DOMESTIC_B = "DOMESTIC_B",
  /** Standard/domestic household, type "C", CEE 7/17, 2 pins. */
  DOMESTIC_C = "DOMESTIC_C",
  /** Standard/domestic household, type "D", 3 pins. */
  DOMESTIC_D = "DOMESTIC_D",
  /** Standard/domestic household, type "E", CEE 7/5 3 pins. */
  DOMESTIC_E = "DOMESTIC_E",
  /** Standard/domestic household, type "F", CEE 7/4, Schuko, 3 pins. */
  DOMESTIC_F = "DOMESTIC_F",
  /** Standard/domestic household, type "G", BS 1363, Commonwealth, 3 pins. */
  DOMESTIC_G = "DOMESTIC_G",
  /** Standard/domestic household, type "H", SI-32, 3 pins. */
  DOMESTIC_H = "DOMESTIC_H",
  /** Standard/domestic household, type "I", AS 3112, 3 pins. */
  DOMESTIC_I = "DOMESTIC_I",
  /** Standard/domestic household, type "J", SEV 1011, 3 pins. */
  DOMESTIC_J = "DOMESTIC_J",
  /** Standard/domestic household, type "K", DS 60884-2-D1, 3 pins. */
  DOMESTIC_K = "DOMESTIC_K",
  /** Standard/domestic household, type "L", CEI 23-16-VII, 3 pins. */
  DOMESTIC_L = "DOMESTIC_L",
  /** Standard/Domestic household, type "M", BS 546, 3 pins. */
  DOMESTIC_M = "DOMESTIC_M",
  /** Standard/Domestic household, type "N", NBR 14136, 3 pins. */
  DOMESTIC_N = "DOMESTIC_N",
  /** Standard/Domestic household, type "O", TIS 166-2549, 3 pins. */
  DOMESTIC_O = "DOMESTIC_O",
  /** IEC 60309-2 Industrial connector single phase 16 amperes (usually blue). */
  IEC_60309_2_SINGLE_16 = "IEC_60309_2_single_16",
  /** IEC 60309-2 Industrial connector three phase 16 amperes (usually red). */
  IEC_60309_2_THREE_16 = "IEC_60309_2_three_16",
  /** IEC 60309-2 Industrial connector three phase 32 amperes (usually red). */
  IEC_60309_2_THREE_32 = "IEC_60309_2_three_32",
  /** IEC 60309-2 Industrial connector three phase 64 amperes (usually red). */
  IEC_60309_2_THREE_64 = "IEC_60309_2_three_64",
  /** IEC 62196 Type 1 "SAE J1772". */
  IEC_62196_T1 = "IEC_62196_T1",
  /** Combo Type 1 based, DC. */
  IEC_62196_T1_COMBO = "IEC_62196_T1_COMBO",
  /** IEC 62196 Type 2 "Mennekes". */
  IEC_62196_T2 = "IEC_62196_T2",
  /** Combo Type 2 based, DC. */
  IEC_62196_T2_COMBO = "IEC_62196_T2_COMBO",
  /** IEC 62196 Type 3A. */
  IEC_62196_T3A = "IEC_62196_T3A",
  /** IEC 62196 Type 3C "Scame". */
  IEC_62196_T3C = "IEC_62196_T3C",
  /** On-board bottom-up-pantograph typically for bus charging. */
  PANTOGRAPH_BOTTOM_UP = "PANTOGRAPH_BOTTOM_UP",
  /** Off-board top-down-pantograph typically for bus charging. */
  PANTOGRAPH_TOP_DOWN = "PANTOGRAPH_TOP_DOWN",
  /** Tesla connector "Roadster"-type (round, 4 pins). */
  TESLA_R = "TESLA_R",
  /** Tesla connector "Model-S"-type (oval, 5 pins). */
  TESLA_S = "TESLA_S",
  /** The connector type is GB_T (Chinese standard), DC. */
  GB_T = "GB_T",
  /** The ChaoJi connector. The new generation charging connector, harmonized between CHAdeMO and GB/T. DC. */
  CHAOJI = "CHAOJI",
  /** The connector type is NEMA 5-20, 3 pins. */
  NEMA_5_20 = "NEMA_5_20",
  /** The connector type is NEMA 6-30, 3 pins. */
  NEMA_6_30 = "NEMA_6_30",
  /** The connector type is NEMA 6-50, 3 pins. */
  NEMA_6_50 = "NEMA_6_50",
  /** The connector type is NEMA 10-30, 3 pins. */
  NEMA_10_30 = "NEMA_10_30",
  /** The connector type is NEMA 10-50, 3 pins. */
  NEMA_10_50 = "NEMA_10_50",
  /** The connector type is NEMA 14-30, 3 pins, rating of 30 A. */
  NEMA_14_30 = "NEMA_14_30",
  /** The connector type is NEMA 14-50, 3 pins, rating of 50 A. */
  NEMA_14_50 = "NEMA_14_50"
}

export enum ConsumptionUnit {
  /** Return the consumption in kilowatt hours per 100 kilometers. */
  KILOWATT_HOURS_PER_100_KILOMETERS = "kilowatt_hours_per_100_kilometers",
  /** Return the consumption in watt hours per kilometer. */
  WATT_HOURS_PER_KILOMETER = "watt_hours_per_kilometer",
  /** Return the consumption in kilometers per kilowatt hour. */
  KILOMETERS_PER_KILOWATT_HOUR = "kilometers_per_kilowatt_hour",
  /** Return the consumption in kilowatt hours per 100 miles. */
  KILOWATT_HOURS_PER_100_MILES = "kilowatt_hours_per_100_miles",
  /** Return the consumption in watt hours per mile. */
  WATT_HOURS_PER_MILE = "watt_hours_per_mile",
  /** Return the consumption in miles per kilowatt hour. */
  MILES_PER_KILOWATT_HOUR = "miles_per_kilowatt_hour"
}

/** The complete contact information. */
export type Contact = {
  /** The phone number in international format. */
  phone?: Maybe<Scalars["String"]>;
  /** The email address. */
  email?: Maybe<Scalars["String"]>;
  /** The absolute URL of the website. */
  website?: Maybe<Scalars["String"]>;
  /** The absolute URL of the facebook profile page. */
  facebook?: Maybe<Scalars["String"]>;
  /** The absolute URL of the twitter profile page. */
  twitter?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
};

/** ISO-3166 alpha-2 country codes. */
export enum CountryCodeAlpha2 {
  AD = "AD",
  AE = "AE",
  AF = "AF",
  AG = "AG",
  AI = "AI",
  AL = "AL",
  AM = "AM",
  AN = "AN",
  AO = "AO",
  AQ = "AQ",
  AR = "AR",
  AS = "AS",
  AT = "AT",
  AU = "AU",
  AW = "AW",
  AX = "AX",
  AZ = "AZ",
  BA = "BA",
  BB = "BB",
  BD = "BD",
  BE = "BE",
  BF = "BF",
  BG = "BG",
  BH = "BH",
  BI = "BI",
  BJ = "BJ",
  BL = "BL",
  BM = "BM",
  BN = "BN",
  BO = "BO",
  BQ = "BQ",
  BR = "BR",
  BS = "BS",
  BT = "BT",
  BV = "BV",
  BW = "BW",
  BY = "BY",
  BZ = "BZ",
  CA = "CA",
  CC = "CC",
  CD = "CD",
  CF = "CF",
  CG = "CG",
  CH = "CH",
  CI = "CI",
  CK = "CK",
  CL = "CL",
  CM = "CM",
  CN = "CN",
  CO = "CO",
  CR = "CR",
  CS = "CS",
  CU = "CU",
  CV = "CV",
  CW = "CW",
  CX = "CX",
  CY = "CY",
  CZ = "CZ",
  DE = "DE",
  DJ = "DJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  DZ = "DZ",
  EC = "EC",
  EE = "EE",
  EG = "EG",
  EH = "EH",
  ER = "ER",
  ES = "ES",
  ET = "ET",
  FI = "FI",
  FJ = "FJ",
  FK = "FK",
  FM = "FM",
  FO = "FO",
  FR = "FR",
  GA = "GA",
  GB = "GB",
  GD = "GD",
  GE = "GE",
  GF = "GF",
  GG = "GG",
  GH = "GH",
  GI = "GI",
  GL = "GL",
  GM = "GM",
  GN = "GN",
  GP = "GP",
  GQ = "GQ",
  GR = "GR",
  GS = "GS",
  GT = "GT",
  GU = "GU",
  GW = "GW",
  GY = "GY",
  HK = "HK",
  HM = "HM",
  HN = "HN",
  HR = "HR",
  HT = "HT",
  HU = "HU",
  ID = "ID",
  IE = "IE",
  IL = "IL",
  IM = "IM",
  IN = "IN",
  IO = "IO",
  IQ = "IQ",
  IR = "IR",
  IS = "IS",
  IT = "IT",
  JE = "JE",
  JM = "JM",
  JO = "JO",
  JP = "JP",
  KE = "KE",
  KG = "KG",
  KH = "KH",
  KI = "KI",
  KM = "KM",
  KN = "KN",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KY = "KY",
  KZ = "KZ",
  LA = "LA",
  LB = "LB",
  LC = "LC",
  LI = "LI",
  LK = "LK",
  LR = "LR",
  LS = "LS",
  LT = "LT",
  LU = "LU",
  LV = "LV",
  LY = "LY",
  MA = "MA",
  MC = "MC",
  MD = "MD",
  ME = "ME",
  MF = "MF",
  MG = "MG",
  MH = "MH",
  MK = "MK",
  ML = "ML",
  MM = "MM",
  MN = "MN",
  MO = "MO",
  MP = "MP",
  MQ = "MQ",
  MR = "MR",
  MS = "MS",
  MT = "MT",
  MU = "MU",
  MV = "MV",
  MW = "MW",
  MX = "MX",
  MY = "MY",
  MZ = "MZ",
  NA = "NA",
  NC = "NC",
  NE = "NE",
  NF = "NF",
  NG = "NG",
  NI = "NI",
  NL = "NL",
  NO = "NO",
  NP = "NP",
  NR = "NR",
  NU = "NU",
  NZ = "NZ",
  OM = "OM",
  PA = "PA",
  PE = "PE",
  PF = "PF",
  PG = "PG",
  PH = "PH",
  PK = "PK",
  PL = "PL",
  PM = "PM",
  PN = "PN",
  PR = "PR",
  PS = "PS",
  PT = "PT",
  PW = "PW",
  PY = "PY",
  QA = "QA",
  RE = "RE",
  RKS = "RKS",
  RO = "RO",
  RS = "RS",
  RU = "RU",
  RW = "RW",
  SA = "SA",
  SB = "SB",
  SC = "SC",
  SD = "SD",
  SE = "SE",
  SG = "SG",
  SH = "SH",
  SI = "SI",
  SJ = "SJ",
  SK = "SK",
  SL = "SL",
  SM = "SM",
  SN = "SN",
  SO = "SO",
  SR = "SR",
  SS = "SS",
  ST = "ST",
  SV = "SV",
  SX = "SX",
  SY = "SY",
  SZ = "SZ",
  TC = "TC",
  TD = "TD",
  TF = "TF",
  TG = "TG",
  TH = "TH",
  TJ = "TJ",
  TK = "TK",
  TL = "TL",
  TM = "TM",
  TN = "TN",
  TO = "TO",
  TR = "TR",
  TT = "TT",
  TV = "TV",
  TW = "TW",
  TZ = "TZ",
  UA = "UA",
  UG = "UG",
  UM = "UM",
  US = "US",
  UY = "UY",
  UZ = "UZ",
  VA = "VA",
  VC = "VC",
  VE = "VE",
  VG = "VG",
  VI = "VI",
  VN = "VN",
  VU = "VU",
  WF = "WF",
  WS = "WS",
  XK = "XK",
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW"
}

export type CreateConnectedVehicleInput = {
  /** Id from the vehicle */
  vehicle_id: Scalars["ID"];
  /** Connectivity provider used to retrieve data from the vehicle */
  provider: CarConnectivityProvider;
  /** Label for a connected vehicle */
  label?: Maybe<Scalars["PlainString"]>;
  /** Provider specific options. See the developer portal for more details */
  options: CreateConnectedVehicleOptions;
};

export type CreateConnectedVehicleOptions = {
  /** Redirect uri */
  redirect_uri?: Maybe<Scalars["PlainString"]>;
  /** Scope */
  scope?: Maybe<Array<ConnectScope>>;
};

export type CreateRoute = {
  /** Vehicle used on a route. */
  vehicle: RouteVehicle;
  /** Origin of a route. */
  origin: RouteOriginFeaturePoint;
  /** Destination of a route. */
  destination: RouteDestinationFeaturePoint;
  /** Via points of a route. */
  via?: Maybe<Array<RouteViaFeaturePoint>>;
  /** Operator preferences for a route. When provided, prefers routes that use higher order operators. */
  operators?: Maybe<RouteOperatorPreferences>;
  /** Season of a route. */
  season: RouteSeason;
  /** Alternative stations along a route within a specified radius in meters (minimum 500, maximum 5000). */
  alternative_station_radius?: Maybe<Scalars["Int"]>;
  /** Departure time of a route. */
  departure_time?: Maybe<Scalars["DateTime"]>;
};

/** Input for the create route mutation. */
export type CreateRouteInput = {
  /** Vehicle specific input. */
  vehicle: RouteVehicleInput;
  /** Origin of a route. */
  origin: RouteOriginFeaturePointInput;
  /** Destination of a route. */
  destination: RouteDestinationFeaturePointInput;
  /** Optional via points of a route. */
  via?: Maybe<Array<RouteViaFeaturePointInput>>;
  /** Prioritized operators for a route calculation. */
  operators?: Maybe<RouteOperatorPreferencesInput>;
  /** Optional flag to specify the season. */
  season?: Maybe<RouteSeason>;
  /** Alternative stations along a route within a specified radius in meters (minimum 500, maximum 5000). */
  alternative_station_radius?: Maybe<Scalars["Int"]>;
  /** Current elevation. */
  elevation?: Maybe<ElevationInput>;
  /** Route departure time. */
  departure_time?: Maybe<Scalars["DateTime"]>;
};

/** Currency according to the ISO 4217 standard. */
export enum CurrencyUnit {
  /** Return the currency in EUR. */
  EUR = "EUR",
  /** Return the currency in USD. */
  USD = "USD",
  /** Return the currency in GBP. */
  GBP = "GBP",
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BRL = "BRL",
  BSD = "BSD",
  BWP = "BWP",
  BYN = "BYN",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHF = "CHF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  CRC = "CRC",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ETB = "ETB",
  FJD = "FJD",
  FKP = "FKP",
  GEL = "GEL",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  ISK = "ISK",
  JMD = "JMD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KRW = "KRW",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SLE = "SLE",
  SOS = "SOS",
  SRD = "SRD",
  STD = "STD",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  UYU = "UYU",
  UZS = "UZS",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XCD = "XCD",
  XOF = "XOF",
  XPF = "XPF",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW"
}

export enum DimensionUnit {
  /** Return the dimension in meters. */
  METER = "meter",
  /** Return the dimension in feet. */
  FOOT = "foot",
  /** Return the dimension in kilometers. */
  KILOMETER = "kilometer",
  /** Return the dimension in miles. */
  MILE = "mile"
}

/** Distance unit */
export enum DistanceUnit {
  /** Return the distance in meters. */
  METER = "meter",
  /** Return the distance in feet. */
  FOOT = "foot",
  /** Return the distance in kilometers. */
  KILOMETER = "kilometer",
  /** Return the distance in miles. */
  MILE = "mile"
}

/** EVSE data which extends OCPI EVSE. */
export type EVSE = {
  /**
   * Uniquely identifies an EVSE within the CPOs platform (and suboperator platforms). For example a database ID or the actual "EVSE ID". This field can never be changed, modified or renamed. This is the 'technical' identification of the EVSE, not to be used as 'human readable' identification, use the field evse_id for that.
   * This field is named uid instead of id, because id could be confused with evse_id which is an eMI3 defined field. This property is OCPI-compliant.
   */
  uid?: Maybe<Scalars["String"]>;
  /** Compliant with the following specification for EVSE ID from "eMI3 standard version V1.0" (http://emi3group.com/documents-links/) "Part 2: business objects." Optional because: if an evse_id is to be re-used in the real world, the evse_id can be removed from an EVSE object if the status is set to REMOVED. This property is OCPI-compliant. */
  evse_id?: Maybe<Scalars["String"]>;
  /** Indicates the current status of an EVSE. This property is OCPI-compliant. */
  status?: Maybe<OCPIStatus>;
  /** Indicates a planned status update of a nEVSE. This property is OCPI-compliant. */
  status_schedule?: Maybe<Array<Maybe<OCPIStatusSchedule>>>;
  /** List of functionalities that an EVSE is capable of. This property is OCPI-compliant. */
  capabilities?: Maybe<Array<Maybe<OCPICapability>>>;
  /** List of available connectors on an EVSE. This property is OCPI-compliant. */
  connectors?: Maybe<Array<Maybe<Connector>>>;
  /** Level on which a Charge Point is located (in garage buildings) in the locally displayed numbering scheme. This property is OCPI-compliant. */
  floor_level?: Maybe<Scalars["String"]>;
  /** Coordinates of a EVSE. This property is OCPI-compliant. */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** A number/string printed on the outside of an EVSE for visual identification. This property is OCPI-compliant. */
  physical_reference?: Maybe<Scalars["String"]>;
  /** Restrictions that apply to a parking spot. This property is OCPI-compliant. */
  parking_restrictions?: Maybe<Array<Maybe<OCPIParkingRestriction>>>;
  /** Links to images related to an EVSE such as photos or logos. This property is OCPI-compliant. */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Timestamp when this EVSE or one of its Connectors was last updated (or created). This property is OCPI-compliant. */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Indicates if parking is free or paid. */
  parking_cost?: Maybe<ParkingCost>;
  /** Unique ID of the location in the system of the CPO. */
  cpo_external_id?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
  /** Custom properties of an EVSE. */
  custom_properties?: Maybe<EvseCustomProperties>;
};

export type ElectricityGenerationMethod = {
  /** Fraction of total electricity production. */
  fraction: Scalars["Float"];
  /** Emissions per kWh of the generation method. */
  intensity: Scalars["Float"];
};

export type ElectricityGenerationMethodintensityArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type ElevationInput = {
  /** Value of the elevation. */
  value: Scalars["Float"];
  /** Type of the value of elevation. */
  type: DistanceUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

export enum ElevationUnit {
  /** Return the elevation in meters. */
  METER = "meter",
  /** Return the elevation in feet. */
  FOOT = "foot"
}

export enum EmissionRateUnit {
  /** Return the emission rate in grams per kilometer. */
  GRAMS_PER_KILOMETER = "grams_per_kilometer",
  /** Return the emission rate in ounces per mile. */
  OUNCES_PER_MILE = "ounces_per_mile"
}

export enum EmissionUnit {
  /** Return the emissions in grams. */
  GRAM = "gram",
  /** Return the emissions in ounces. */
  OUNCE = "ounce"
}

export type EmissionsFactor = {
  /** The name of the area for which the emissions factor was calculated. */
  name: Scalars["String"];
  /** The type of area for which the emissions factor was calculated. */
  type: EmissionsFactorType;
  /** The base regional emissions factor in CO2e/kWh. */
  value: Scalars["Float"];
};

/** Emissions factor type. */
export enum EmissionsFactorType {
  COUNTRY = "country",
  SUBREGION = "subregion",
  REGION = "region"
}

/** Custom EVSE properties for OICP databases such as the global Hubject database. Station databases that not follow the OICP standard return null values. */
export type EvseCustomProperties = {
  /** OICP standard custom properties. */
  oicp?: Maybe<OICPEvseCustomProperties>;
};

/** A GeoJSON Feature<LineString>. */
export type FeatureLineString = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: LineString;
};

/** A GeoJSON Feature<MultiPolygon>. */
export type FeatureMultiPolygon = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: MultiPolygon;
  /** Properties of the MultiPolygon Feature. */
  properties?: Maybe<PolygonProperties>;
};

/** A GeoJSON Feature<Point>. */
export type FeatureMultiPolygonPoint = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: Point;
  /** Optional object where you can store custom data you need in your application. */
  properties?: Maybe<Scalars["JSON"]>;
};

/** A GeoJSON Feature<Point>. */
export type FeaturePoint = {
  /** Feature ID. */
  id?: Maybe<Scalars["String"]>;
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: Point;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
};

/** A GeoJSON Feature<Point> input. */
export type FeaturePointInput = {
  /** The feature ID. */
  id?: Maybe<Scalars["String"]>;
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: PointInput;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
};

/** A GeoJSON Feature<Point> input. */
export type FeaturePointPolygonInput = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: PointInput;
  /** Optional object where you can store custom data you need in your application. */
  properties?: Maybe<FeaturePointPolygonPropertiesInput>;
};

/** Properties for Feature<Point> input. */
export type FeaturePointPolygonProperties = {
  /** Name of the location. */
  name?: Maybe<Scalars["String"]>;
};

/** Properties for Feature<Point> input. */
export type FeaturePointPolygonPropertiesInput = {
  /** Name of the location. */
  name?: Maybe<Scalars["String"]>;
};

/** GeoJSON Feature type. */
export enum FeatureType {
  FEATURE = "Feature"
}

export type FluidEmissions = {
  /** Total fluid emissions. */
  total: Scalars["Float"];
  /** Wiper fluid maintenance emissions. */
  wiper: Scalars["Float"];
  /** Brake fluid maintenance emissions. */
  brake: Scalars["Float"];
  /** Powertrain coolant fluid maintenance emissions. */
  powertrain_coolant: Scalars["Float"];
  /** Transmission fluid maintenance emissions. */
  transmission: Scalars["Float"];
  /** Motor oil maintenance emissions. */
  motor_oil?: Maybe<Scalars["Float"]>;
};

export type FluidEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type FluidEmissionswiperArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type FluidEmissionsbrakeArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type FluidEmissionspowertrain_coolantArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type FluidEmissionstransmissionArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type FluidEmissionsmotor_oilArgs = {
  unit?: Maybe<EmissionUnit>;
};

export enum FuelConsumptionUnit {
  /** Return the fuel consumption in liters per 100 kilometers. */
  LITERS_PER_100_KILOMETERS = "liters_per_100_kilometers",
  /** Return the fuel consumption in miles per gallon. */
  MILES_PER_GALLON = "miles_per_gallon"
}

export enum FuelUnit {
  /** Return the fuel consumption in liters. */
  LITER = "liter",
  /** Return the fuel consumption in US gallon. */
  GALLON = "gallon"
}

/** Geometry point with GPS coordinates */
export type GeometryPoint = {
  type: PointType;
  coordinates: Array<Scalars["Float"]>;
};

/** Mode of heat pump. */
export enum HeatPumpMode {
  /** Default to the vehicle configuration. */
  DEFAULT = "default",
  /** Vehicle has it installed. */
  INSTALLED = "installed",
  /** Vehicle doesn't have it installed. */
  NONE = "none"
}

/** Allowed N (EU) types of heavy vehicles. */
export enum HeavyVehiclesEUType {
  /** Only N1 type of heavy vehicles can be parked at the charging station. N1 vehicles have a maximum mass not exceeding 3.5 tonnes (7,700 lbs). */
  N1 = "N1",
  /** Only N2 type of heavy vehicles can be parked at the charging station. N2 vehicles have a maximum mass exceeding 3.5 tonnes but not exceeding 12 tonnes (26,000 lbs). */
  N2 = "N2",
  /** Only N3 type of heavy vehicles can be parked at the charging station. N3 vehicles have a maximum mass exceeding 12 tonnes (26,000 lbs). */
  N3 = "N3"
}

/** List of facilities in the location. */
export enum HeavyVehiclesFacility {
  /** Truck parking. */
  TRUCK_PARKING = "TRUCK_PARKING",
  /** Truck wash. */
  TRUCK_WASH = "TRUCK_WASH",
  /** Truck repair. */
  TRUCK_REPAIR = "TRUCK_REPAIR",
  /** Truck dealership. */
  TRUCK_DEALERSHIP = "TRUCK_DEALERSHIP",
  /** Secure truck parking. */
  SECURE_TRUCK_PARKING = "SECURE_TRUCK_PARKING"
}

/** Navigation service providers available */
export enum InstructionsFormat {
  /** Chargetrip raw instructions */
  CHARGETRIP = "Chargetrip",
  /** Mapbox instructions mapping */
  MAPBOXV5 = "MapboxV5"
}

export type Isoline = {
  /** Isoline id. */
  id: Scalars["ID"];
  /** Isoline status. */
  status: IsolineStatus;
  /** Shape of the isoline consisting in a list of multipolygons. */
  polygons?: Maybe<Array<Maybe<FeatureMultiPolygon>>>;
  /** List of the ferries uniting islands formed by the isoline. */
  ferries?: Maybe<Array<Maybe<FeatureLineString>>>;
  /** The inputted request data for the isoline used to compute it. */
  request_input?: Maybe<IsolineRequestInput>;
};

export type IsolineCabin = {
  /** Flag which indicate if the vehicle cabin was preconditioned for the desired temperature. */
  is_preconditioned?: Maybe<Scalars["Boolean"]>;
  /** Desired temperature inside the cabin. Default is 20 degrees Celsius or 68 degrees Fahrenheit. */
  desired_temperature?: Maybe<Scalars["Float"]>;
};

export type IsolineCabindesired_temperatureArgs = {
  unit?: Maybe<TemperatureUnit>;
};

/** Information about the cabin of the vehicle. */
export type IsolineCabinInput = {
  /** Flag which indicate if the vehicle cabin was preconditioned for the desired temperature. */
  is_preconditioned?: Maybe<Scalars["Boolean"]>;
  /** Desired temperature inside the cabin. Default is 20 degrees Celsius or 68 degrees Fahrenheit. */
  desired_temperature?: Maybe<TemperatureInput>;
};

export enum IsolineFerryConnectionsType {
  /** Ferry connections should not be included. */
  NONE = "none",
  /** Ferry connections should be taken into account but only one level deep. For example: from the European mainland to England and no other connecting ferries departing from England. */
  SINGLE = "single"
}

export type IsolineInput = {
  /** Vehicle id. */
  vehicle_id: Scalars["ID"];
  /** Origin point of the request. */
  origin: FeaturePointPolygonInput;
  /** Numbers of polygons to be generated (maximum: 20). */
  polygon_count?: Maybe<Scalars["Int"]>;
  /** Vehicle should be able to return to the origin point from any point. */
  round_trip?: Maybe<Scalars["Boolean"]>;
  /** Number of occupants. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Cumulated weight of the occupants. */
  total_occupant_weight?: Maybe<TotalOccupantWeightInput>;
  /** Cargo weight. */
  total_cargo_weight?: Maybe<TotalCargoWeightInput>;
  /** Climate is on. */
  climate_control?: Maybe<Scalars["Boolean"]>;
  /** Vehicle Heat Pump configuration. */
  heat_pump?: Maybe<HeatPumpMode>;
  /** Vehicle cabin configuration. */
  cabin?: Maybe<IsolineCabinInput>;
  /** Season to be taken into account when generating the isoline. */
  season?: Maybe<RouteSeason>;
  /** Polygons precision quality. */
  quality?: Maybe<IsolineQuality>;
  /** Include ferry connections. Single and multiple ferry connections increase the calculation time and the number of polygons. */
  ferry_connections?: Maybe<IsolineFerryConnectionsType>;
  /** Battery state of charge. Default is usable battery kwh of the inputted vehicle. */
  state_of_charge?: Maybe<StateOfChargeInput>;
  /** Minimum final battery state of charge. Default is 0 */
  final_state_of_charge?: Maybe<StateOfChargeInput>;
};

/** Granularity of the isoline. */
export enum IsolineQuality {
  /** High polygons precisions. */
  HIGH = "high",
  /** Low polygons precisions. */
  LOW = "low"
}

export type IsolineRequestInput = {
  /** Vehicle id. */
  vehicle_id: Scalars["ID"];
  /** Origin point of the request. */
  origin: FeaturePoint;
  /** Numbers of polygons that were generated. */
  polygon_count?: Maybe<Scalars["Int"]>;
  /** Vehicle should be able to return to the origin point from any point. */
  round_trip?: Maybe<Scalars["Boolean"]>;
  /** Number of occupants. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Cumulated weight of the occupants. */
  total_occupant_weight?: Maybe<Scalars["Float"]>;
  /** Cargo weight. */
  total_cargo_weight?: Maybe<Scalars["Float"]>;
  /** Climate is on. */
  climate_control?: Maybe<Scalars["Boolean"]>;
  /** Vehicle Heat Pump configuration. */
  heat_pump?: Maybe<HeatPumpMode>;
  /** Vehicle cabin configuration. */
  cabin?: Maybe<IsolineCabin>;
  /** Season taken into account when isoline was generated. */
  season?: Maybe<RouteSeason>;
  /** Polygons precision quality. */
  quality?: Maybe<IsolineQuality>;
  /** Ferry connections. */
  ferry_connections?: Maybe<IsolineFerryConnectionsType>;
  /** Battery state of charge. */
  state_of_charge: Scalars["Float"];
  /** Minimum final battery state of charge. */
  final_state_of_charge: Scalars["Float"];
};

export type IsolineRequestInputtotal_occupant_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type IsolineRequestInputtotal_cargo_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type IsolineRequestInputstate_of_chargeArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

export type IsolineRequestInputfinal_state_of_chargeArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

/** Status of the isoline label. */
export enum IsolineStatus {
  /** Isoline label has been successfully generated. */
  DONE = "done",
  /** Isoline label is under processing. */
  PENDING = "pending",
  /** There was an error while generating the isoline label. */
  ERROR = "error"
}

/** Types of a leg. */
export enum LegType {
  /** This leg ends at a charging station and the vehicle must recharge. */
  STATION = "station",
  /** This leg ends at a via charging station and the vehicle must recharge. */
  STATIONVIA = "stationVia",
  /** This leg ends at a scheduled charging station and the vehicle must recharge. */
  STATIONAMENITY = "stationAmenity",
  /** This leg ends at a via location. */
  VIA = "via",
  /** This leg ends at the destination, and is the last leg of the route. */
  FINAL = "final",
  /** This leg ends at the destination which is a charging station, and is the last leg of the route. */
  STATIONFINAL = "stationFinal"
}

/** A GeoJSON LineString. */
export type LineString = {
  /** LineString type. */
  type: LineStringType;
  /** List of coordinates arrays with longitude as first value and latitude as second one. */
  coordinates: Array<Maybe<Array<Scalars["Float"]>>>;
};

/** GeoJSON LineString type. */
export enum LineStringType {
  LINESTRING = "LineString"
}

/** Preferred language for the mapping */
export enum MappingLanguage {
  /** English(US) */
  EN = "en"
}

/** Navigation service providers available */
export enum MappingProvider {
  /** Chargetrip raw instructions */
  CHARGETRIP = "Chargetrip",
  /** Mapbox instructions mapping */
  MAPBOXV5 = "MapboxV5"
}

export enum MeasurementUnit {
  /** Return the measurement in millimeters. */
  MILLIMETER = "millimeter",
  /** Return the measurement in inches. */
  INCH = "inch"
}

/** A GeoJSON Polygon. */
export type MultiPolygon = {
  /** MultiPolygon type. */
  type: MultiPolygonType;
  /** List of coordinates representing a polygon. */
  coordinates: Array<
    Maybe<Array<Maybe<Array<Maybe<Array<Scalars["Float"]>>>>>>
  >;
};

/** GeoJSON MultiPolygon type. */
export enum MultiPolygonType {
  MULTIPOLYGON = "MultiPolygon"
}

export type Mutation = {
  /** [BETA] Create a connected vehicle for a given vehicle id and a connectivity provider */
  createConnectedVehicle?: Maybe<ConnectedVehicle>;
  /** [BETA] Authorize a connected vehicle */
  authorizeConnectedVehicle?: Maybe<ConnectedVehicle>;
  /** [BETA] Update a connected vehicle */
  updateConnectedVehicle?: Maybe<ConnectedVehicle>;
  /** [BETA] Remove a connected vehicle and revoke access */
  removeConnectedVehicle?: Maybe<ConnectedVehicle>;
  /** Create a consumption based isoline. */
  createIsoline?: Maybe<Scalars["ID"]>;
  /** [BETA] Start a new navigation session on top of an existing route */
  startNavigation?: Maybe<Scalars["ID"]>;
  /** [BETA] Update the navigation session */
  updateNavigation?: Maybe<Scalars["Acknowledgement"]>;
  /** [BETA] Recalculate the current navigation route */
  recalculateNavigation?: Maybe<Scalars["Acknowledgement"]>;
  /** [BETA] End a navigation session */
  finishNavigation?: Maybe<Scalars["Acknowledgement"]>;
  /**
   * Add a new review.
   * If the `x-token` header is send for a valid user, the review will belong to it, otherwise will be added for an anonymouse user
   */
  addReview: Review;
  /**
   * Remove a review added by an authenticated user.
   * The `x-token` header is mandatory in order to authorize the user who wants to remove a review.
   * In case it is not sent, an error will occur.
   * In case the review was not found or belongs to another user an error will occur.
   * This is a premium feature, contact Chargetrip for more information.
   */
  deleteUserReview: Review;
  /** [BETA] Create a new route from the route input and its ID. */
  createRoute: Scalars["ID"];
  /** Create a new route from the route input and its ID */
  newRoute?: Maybe<Scalars["ID"]>;
};

export type MutationcreateConnectedVehicleArgs = {
  input?: Maybe<CreateConnectedVehicleInput>;
};

export type MutationauthorizeConnectedVehicleArgs = {
  input?: Maybe<AuthorizeConnectedVehicleInput>;
};

export type MutationupdateConnectedVehicleArgs = {
  input: UpdateConnectedVehicleInput;
};

export type MutationremoveConnectedVehicleArgs = {
  input: RemoveConnectedVehicleInput;
};

export type MutationcreateIsolineArgs = {
  input: IsolineInput;
};

export type MutationstartNavigationArgs = {
  input: NavigationStartInput;
};

export type MutationupdateNavigationArgs = {
  input: NavigationUpdateInput;
};

export type MutationrecalculateNavigationArgs = {
  input: NavigationRecalculateInput;
};

export type MutationfinishNavigationArgs = {
  input: NavigationFinishInput;
};

export type MutationaddReviewArgs = {
  review: ReviewAdd;
};

export type MutationdeleteUserReviewArgs = {
  id: Scalars["ID"];
};

export type MutationcreateRouteArgs = {
  input: CreateRouteInput;
};

export type MutationnewRouteArgs = {
  input?: Maybe<RequestInput>;
};

/** The navigation session data */
export type Navigation = {
  /** ID of the navigation session */
  id: Scalars["ID"];
  /** The current route used for navigation */
  route_id: Scalars["ID"];
  /** The current route alternative used for navigation */
  route_alternative_id: Scalars["ID"];
  /** The state of a navigation session. The status can be driving, charging, finished, or error */
  state: NavigationState;
  /** State of charge at the last known location */
  state_of_charge: Scalars["Float"];
  /** Last known location */
  last_known_location: Point;
  /** Next charging station */
  next_station?: Maybe<NavigationStation>;
  /** A set of alternative charging stations to next station */
  alternative_stations: Array<NavigationStation>;
  /** Navigation instructions */
  instructions?: Maybe<Scalars["JSON"]>;
  /** Navigation meta information. */
  meta?: Maybe<NavigationMeta>;
};

/** The navigation session data */
export type Navigationstate_of_chargeArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

/** Input for the navigation recalculate */
export type NavigationFinishInput = {
  /** ID of the navigation session */
  id: Scalars["ID"];
  /** Current coordinates */
  current_location: PointInput;
};

export type NavigationInstructionsInput = {
  /** Turn by turn instructions format for a route */
  instructions_format: InstructionsFormat;
  /** Preferred navigation instructions language. Default: en */
  language?: Maybe<MappingLanguage>;
  /** Number of decimals used for the Google Polyline encoding Algorithm. Allowed values are 5 or 6. */
  precision?: Maybe<Scalars["Int"]>;
};

/** Navigation meta information. */
export type NavigationMeta = {
  /** Creation time of the navigation session. */
  created_at?: Maybe<Scalars["DateTime"]>;
  /** Last updated time of the navigation session. */
  updated_at?: Maybe<Scalars["DateTime"]>;
};

/** Input for the navigation recalculate */
export type NavigationRecalculateInput = {
  /** ID of the navigation session */
  id: Scalars["ID"];
  /** State of charge at origin */
  state_of_charge?: Maybe<StateOfChargeInput>;
  /** Origin location of a new route */
  current_location: PointInput;
  /** Via points of a new route. If this field is not sent, the original via points will be used */
  via?: Maybe<Array<FeaturePointInput>>;
  /** Telemetry data input */
  telemetry?: Maybe<TelemetryInput>;
};

/** Input for the navigation start */
export type NavigationStartInput = {
  /** ID of the route of the navigation session */
  route_id: Scalars["ID"];
  /** ID of the route alternative of the navigation session */
  route_alternative_id?: Maybe<Scalars["ID"]>;
  /** Current coordinates */
  current_location: PointInput;
  /** Instruction input format */
  instructions: NavigationInstructionsInput;
};

/** State of navigation session */
export enum NavigationState {
  /** Vehicle is driving */
  DRIVING = "driving",
  /** Vehicle is charging */
  CHARGING = "charging",
  /** Navigation session is completed (either manually or automatically 48 hours after the last update) */
  FINISHED = "finished",
  /** Failed to update navigation session due to route error or not found */
  ERROR = "error"
}

/** Navigation session station type */
export type NavigationStation = {
  /** The ID as string of the charging station */
  station_id: Scalars["ID"];
  /** GPS location of the charging station */
  station_location: Point;
  /** An array with all GPS locations of via points until the next charging station */
  via: Array<Point>;
  /** Estimated state of charge, at arrival on the next charging station */
  estimated_state_of_charge: Scalars["Float"];
  /** Estimated consumption, in kWh, from last the known location until the next charging station */
  estimated_consumption: Scalars["Float"];
  /** Estimated duration, in seconds, from the last known location until the next charging station */
  estimated_duration: Scalars["Int"];
};

/** Navigation session station type */
export type NavigationStationestimated_state_of_chargeArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

/** Input for the navigation update */
export type NavigationUpdateInput = {
  /** ID of the navigation session */
  id: Scalars["ID"];
  /** A list of locations that were collected since the last update */
  location_data: Array<NavigationUpdateLocationsInput>;
  /** Telemetry data input */
  telemetry?: Maybe<TelemetryInput>;
};

/** Properties of the location */
export type NavigationUpdateLocationPropertiesInput = {
  /** Current route leg index corresponding to a location */
  route_leg: Scalars["Int"];
  /** Speed at a location */
  speed?: Maybe<VehicleSpeedInput>;
  /** UNIX timestamp at location, in seconds */
  timestamp: Scalars["Int"];
  /** Elevation information */
  elevation?: Maybe<ElevationInput>;
};

/** Input for the navigation update locations */
export type NavigationUpdateLocationsInput = {
  /** GPS location */
  geometry: PointInput;
  /** Extra information about the location */
  properties: NavigationUpdateLocationPropertiesInput;
};

/** This class defines an additional geo location that is relevant for the Charge Point. The geodetic system to be used is WGS 84. */
export type OCPIAdditionalGeoLocation = {
  /** Latitude of the point in decimal degree. Example: 50.770774. Decimal separator: "." Regex: -?[0-9]{1,2}\.[0-9]{5,7}. This property is OCPI-compliant. */
  latitude?: Maybe<Scalars["String"]>;
  /** Longitude of the point in decimal degree. Example: -126.104965. Decimal separator: "." Regex: -?[0-9]{1,3}\.[0-9]{5,7}. This property is OCPI-compliant. */
  longitude?: Maybe<Scalars["String"]>;
  /** Name of the point in local language or as written at the location. For example the street name of a parking lot entrance or it’s number. This property is OCPI-compliant. */
  name?: Maybe<OCPIDisplayText>;
};

/** The capabilities of an EVSE. */
export enum OCPICapability {
  /** The EVSE supports charging profiles. */
  CHARGING_PROFILE_CAPABLE = "CHARGING_PROFILE_CAPABLE",
  /** The EVSE supports charging preferences. */
  CHARGING_PREFERENCES_CAPABLE = "CHARGING_PREFERENCES_CAPABLE",
  /** EVSE has a payment terminal that supports chip cards. */
  CHIP_CARD_SUPPORT = "CHIP_CARD_SUPPORT",
  /** EVSE has a payment terminal that supports contactless cards. */
  CONTACTLESS_CARD_SUPPORT = "CONTACTLESS_CARD_SUPPORT",
  /** EVSE has a payment terminal that makes it possible to pay for charging using a credit card. */
  CREDIT_CARD_PAYABLE = "CREDIT_CARD_PAYABLE",
  /** EVSE has a payment terminal that makes it possible to pay for charging using a debit card. */
  DEBIT_CARD_PAYABLE = "DEBIT_CARD_PAYABLE",
  /** EVSE has a payment terminal with a pin-code entry device. */
  PED_TERMINAL = "PED_TERMINAL",
  /** The EVSE can remotely be started/stopped. */
  REMOTE_START_STOP_CAPABLE = "REMOTE_START_STOP_CAPABLE",
  /** The EVSE can be reserved. */
  RESERVABLE = "RESERVABLE",
  /** Charging at this EVSE can be authorized with an RFID token. */
  RFID_READER = "RFID_READER",
  /** This EVSE supports token groups, two or more tokens work as one, so that a session can be started with one token and stopped with another (handy when a card and key-fob are given to the EV-driver). */
  TOKEN_GROUP_CAPABLE = "TOKEN_GROUP_CAPABLE",
  /** Connectors have a mechanical lock that can be requested by the eMSP to be unlocked. */
  UNLOCK_CAPABLE = "UNLOCK_CAPABLE",
  /** When a StartSession is sent to this EVSE, the MSP is required to add the optional connector_id field in the StartSession object. */
  START_SESSION_CONNECTOR_REQUIRED = "START_SESSION_CONNECTOR_REQUIRED"
}

/** The format of the connector, whether it is a socket or a plug. */
export enum OCPIConnectorFormat {
  /** The connector is a socket; the EV user needs to bring a fitting plug. */
  SOCKET = "SOCKET",
  /** The connector is an attached cable; the EV users car needs to have a fitting inlet. */
  CABLE = "CABLE"
}

/** Deprecated: Please use ConnectorType instead */
export enum OCPIConnectorType {
  /** The connector type is CHAdeMO, DC */
  CHADEMO = "CHADEMO",
  /** Standard/domestic household, type "A", NEMA 1-15, 2 pins */
  DOMESTIC_A = "DOMESTIC_A",
  /** Standard/domestic household, type "B", NEMA 5-15, 3 pins */
  DOMESTIC_B = "DOMESTIC_B",
  /** Standard/domestic household, type "C", CEE 7/17, 2 pins */
  DOMESTIC_C = "DOMESTIC_C",
  /** Standard/domestic household, type "D", 3 pins */
  DOMESTIC_D = "DOMESTIC_D",
  /** Standard/domestic household, type "E", CEE 7/5 3 pins */
  DOMESTIC_E = "DOMESTIC_E",
  /** Standard/domestic household, type "F", CEE 7/4, Schuko, 3 pins */
  DOMESTIC_F = "DOMESTIC_F",
  /** Standard/domestic household, type "G", BS 1363, Commonwealth, 3 pins */
  DOMESTIC_G = "DOMESTIC_G",
  /** Standard/domestic household, type "H", SI-32, 3 pins */
  DOMESTIC_H = "DOMESTIC_H",
  /** Standard/domestic household, type "I", AS 3112, 3 pins */
  DOMESTIC_I = "DOMESTIC_I",
  /** Standard/domestic household, type "J", SEV 1011, 3 pins */
  DOMESTIC_J = "DOMESTIC_J",
  /** Standard/domestic household, type "K", DS 60884-2-D1, 3 pins */
  DOMESTIC_K = "DOMESTIC_K",
  /** Standard/domestic household, type "L", CEI 23-16-VII, 3 pins */
  DOMESTIC_L = "DOMESTIC_L",
  /** Standard/Domestic household, type "M", BS 546, 3 pins */
  DOMESTIC_M = "DOMESTIC_M",
  /** Standard/Domestic household, type "N", NBR 14136, 3 pins */
  DOMESTIC_N = "DOMESTIC_N",
  /** Standard/Domestic household, type "O", TIS 166-2549, 3 pins */
  DOMESTIC_O = "DOMESTIC_O",
  /** IEC 60309-2 Industrial connector single phase 16 amperes (usually blue) */
  IEC_60309_2_SINGLE_16 = "IEC_60309_2_single_16",
  /** IEC 60309-2 Industrial connector three phase 16 amperes (usually red) */
  IEC_60309_2_THREE_16 = "IEC_60309_2_three_16",
  /** IEC 60309-2 Industrial connector three phase 32 amperes (usually red) */
  IEC_60309_2_THREE_32 = "IEC_60309_2_three_32",
  /** IEC 60309-2 Industrial connector three phase 64 amperes (usually red) */
  IEC_60309_2_THREE_64 = "IEC_60309_2_three_64",
  /** IEC 62196 Type 1 "SAE J1772" */
  IEC_62196_T1 = "IEC_62196_T1",
  /** Combo Type 1 based, DC */
  IEC_62196_T1_COMBO = "IEC_62196_T1_COMBO",
  /** IEC 62196 Type 2 "Mennekes" */
  IEC_62196_T2 = "IEC_62196_T2",
  /** Combo Type 2 based, DC */
  IEC_62196_T2_COMBO = "IEC_62196_T2_COMBO",
  /** IEC 62196 Type 3A */
  IEC_62196_T3A = "IEC_62196_T3A",
  /** IEC 62196 Type 3C "Scame" */
  IEC_62196_T3C = "IEC_62196_T3C",
  /** On-board bottom-up-pantograph typically for bus charging */
  PANTOGRAPH_BOTTOM_UP = "PANTOGRAPH_BOTTOM_UP",
  /** Off-board top-down-pantograph typically for bus charging */
  PANTOGRAPH_TOP_DOWN = "PANTOGRAPH_TOP_DOWN",
  /** Tesla connector "Roadster"-type (round, 4 pins) */
  TESLA_R = "TESLA_R",
  /** Tesla connector "Model-S"-type (oval, 5 pins) */
  TESLA_S = "TESLA_S",
  /** The connector type is GB_T (Chinese standard), DC */
  GB_T = "GB_T",
  /** The ChaoJi connector. The new generation charging connector, harmonized between CHAdeMO and GB/T. DC. */
  CHAOJI = "CHAOJI",
  /** The connector type is NEMA 5-20, 3 pins */
  NEMA_5_20 = "NEMA_5_20",
  /** The connector type is NEMA 6-30, 3 pins */
  NEMA_6_30 = "NEMA_6_30",
  /** The connector type is NEMA 6-50, 3 pins */
  NEMA_6_50 = "NEMA_6_50",
  /** The connector type is NEMA 10-30, 3 pins */
  NEMA_10_30 = "NEMA_10_30",
  /** The connector type is NEMA 10-50, 3 pins */
  NEMA_10_50 = "NEMA_10_50",
  /** The connector type is NEMA 14-30, 3 pins, rating of 30 A */
  NEMA_14_30 = "NEMA_14_30",
  /** The connector type is NEMA 14-50, 3 pins, rating of 50 A */
  NEMA_14_50 = "NEMA_14_50"
}

export enum OCPIDayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export type OCPIDisplayText = {
  /** Language Code ISO 639-1. This property is OCPI-compliant. */
  language?: Maybe<Scalars["String"]>;
  /** Text to be displayed to an end user. No markup, html etc. allowed. This property is OCPI-compliant. */
  text?: Maybe<Scalars["String"]>;
};

/** This type is used to specify the energy mix and environmental impact of the supplied energy at a location or in a tariff. */
export type OCPIEnergyMix = {
  /** True if the power is 100% from regenerative sources. This property is OCPI-compliant. */
  is_green_energy?: Maybe<Scalars["Boolean"]>;
  /** Key-value pairs (enum + percentage) of energy sources of this location’s tariff. This property is OCPI-compliant. */
  energy_sources?: Maybe<Array<Maybe<OCPIEnergySource>>>;
  /** Key-value pairs (enum + percentage) of nuclear waste and CO2 exhaust of this location’s tariff. This property is OCPI-compliant. */
  environ_impact?: Maybe<Array<Maybe<OCPIEnvironmentalImpact>>>;
  /** Name of the energy supplier, delivering the energy for this location or tariff.*. This property is OCPI-compliant. */
  supplier_name?: Maybe<Scalars["String"]>;
  /** Name of the energy suppliers product/tariff plan used at this location.*. This property is OCPI-compliant. */
  energy_product_name?: Maybe<Scalars["String"]>;
};

export type OCPIEnergySource = {
  /** The type of energy source. This property is OCPI-compliant. */
  source?: Maybe<OCPIEnergySourceCategory>;
  /** Percentage of this source (0-100) in the mix. This property is OCPI-compliant. */
  percentage?: Maybe<Scalars["Int"]>;
};

/** Categories of energy sources. */
export enum OCPIEnergySourceCategory {
  /** Nuclear power sources. */
  NUCLEAR = "NUCLEAR",
  /** All kinds of fossil power sources. */
  GENERAL_FOSSIL = "GENERAL_FOSSIL",
  /** Fossil power from coal. */
  COAL = "COAL",
  /** Fossil power from gas. */
  GAS = "GAS",
  /** All kinds of regenerative power sources. */
  GENERAL_GREEN = "GENERAL_GREEN",
  /** Regenerative power from PV. */
  SOLAR = "SOLAR",
  /** Regenerative power from wind turbines. */
  WIND = "WIND",
  /** Regenerative power from water turbines. */
  WATER = "WATER"
}

/** Amount of waste produced/emitted per kWh. */
export type OCPIEnvironmentalImpact = {
  /** The environmental impact category of this value. This property is OCPI-compliant. */
  category?: Maybe<OCPIEnvironmentalImpactCategory>;
  /** Amount of this portion in g/kWh. This property is OCPI-compliant. */
  amount?: Maybe<Scalars["Float"]>;
};

/** Categories of environmental impact values. */
export enum OCPIEnvironmentalImpactCategory {
  /** Produced nuclear waste in g/kWh. */
  NUCLEAR_WASTE = "NUCLEAR_WASTE",
  /** Exhausted carbon dioxide in g/kWh. */
  CARBON_DIOXIDE = "CARBON_DIOXIDE"
}

/** Specifies one exceptional period for opening or access hours. */
export type OCPIExceptionalPeriod = {
  /** Begin of the exception. In UTC, time_zone field can be used to convert to local time. This property is OCPI-compliant. */
  period_begin?: Maybe<Scalars["DateTime"]>;
  /** End of the exception. In UTC, time_zone field can be used to convert to local time. This property is OCPI-compliant. */
  period_end?: Maybe<Scalars["DateTime"]>;
};

export enum OCPIFacility {
  /** A hotel. */
  HOTEL = "HOTEL",
  /** A restaurant. */
  RESTAURANT = "RESTAURANT",
  /** A cafe. */
  CAFE = "CAFE",
  /** A mall or shopping center. */
  MALL = "MALL",
  /** A supermarket. */
  SUPERMARKET = "SUPERMARKET",
  /** Sport facilities: gym, field etc. */
  SPORT = "SPORT",
  /** A recreation area. */
  RECREATION_AREA = "RECREATION_AREA",
  /** Located in, or close to, a park, nature reserve etc. */
  NATURE = "NATURE",
  /** A museum. */
  MUSEUM = "MUSEUM",
  /** A bike/e-bike/e-scooter sharing location. */
  BIKE_SHARING = "BIKE_SHARING",
  /** A bus stop. */
  BUS_STOP = "BUS_STOP",
  /** A taxi stand. */
  TAXI_STAND = "TAXI_STAND",
  /** A tram stop/station. */
  TRAM_STOP = "TRAM_STOP",
  /** A metro station. */
  METRO_STATION = "METRO_STATION",
  /** A train station. */
  TRAIN_STATION = "TRAIN_STATION",
  /** An airport. */
  AIRPORT = "AIRPORT",
  /** A parking lot. */
  PARKING_LOT = "PARKING_LOT",
  /** A carpool parking. */
  CARPOOL_PARKING = "CARPOOL_PARKING",
  /** A Fuel station. */
  FUEL_STATION = "FUEL_STATION",
  /** Wifi or other type of internet available. */
  WIFI = "WIFI"
}

/** This class defines the geo location of the Charge Point. The geodetic system to be used is WGS 84. */
export type OCPIGeoLocation = {
  /** Latitude of the point in decimal degree. Example: 50.770774. Decimal separator: "." Regex: -?[0-9]{1,2}\.[0-9]{5,7}. This property is OCPI-compliant. */
  latitude?: Maybe<Scalars["String"]>;
  /** Longitude of the point in decimal degree. Example: -126.104965. Decimal separator: "." Regex: -?[0-9]{1,3}\.[0-9]{5,7}. This property is OCPI-compliant. */
  longitude?: Maybe<Scalars["String"]>;
};

/** Opening and access hours of the location. */
export type OCPIHours = {
  /** True to represent 24 hours a day and 7 days a week, except the given exceptions. This property is OCPI-compliant. */
  twentyfourseven?: Maybe<Scalars["Boolean"]>;
  /** Regular hours, weekday-based. Only to be used if twentyfourseven=false, then this field needs to contain at least one RegularHours object. This property is OCPI-compliant. */
  regular_hours?: Maybe<Array<Maybe<OCPIRegularHours>>>;
  /** Exceptions for specified calendar dates, time-range based. Periods the station is operating/accessible. Additional to regular_hours. May overlap regular rules. This property is OCPI-compliant. */
  exceptional_openings?: Maybe<Array<Maybe<OCPIExceptionalPeriod>>>;
  /** Exceptions for specified calendar dates, time-range based. Periods the station is not operating/accessible. Overwriting regular_hours and exceptional_openings. Should not overlap exceptional_openings. This property is OCPI-compliant. */
  exceptional_closings?: Maybe<Array<Maybe<OCPIExceptionalPeriod>>>;
};

export type OCPIImage = {
  /** URL from where the image data can be fetched through a web browser. This property is OCPI-compliant. */
  url?: Maybe<Scalars["String"]>;
  /** URL from where a thumbnail of the image can be fetched through a webbrowser. This property is OCPI-compliant. */
  thumbnail?: Maybe<Scalars["String"]>;
  /** Category of an image. This property is OCPI-compliant. */
  category?: Maybe<OCPIImageCategory>;
  /** Image type: gif, jpeg, png, svg. This property is OCPI-compliant. */
  type?: Maybe<Scalars["String"]>;
  /** Width of the full scale image. This property is OCPI-compliant. */
  width?: Maybe<Scalars["Int"]>;
  /** Height of the full scale image. This property is OCPI-compliant. */
  height?: Maybe<Scalars["Int"]>;
};

/** The category of an image to obtain the correct usage in a user presentation. The category has to be set accordingly to the image content in order to guarantee the right usage. */
export enum OCPIImageCategory {
  /** Photo of the physical device that contains one or more EVSEs. */
  CHARGER = "CHARGER",
  /** Location entrance photo. Should show the car entrance to the location from street side. */
  ENTRANCE = "ENTRANCE",
  /** Location overview photo. */
  LOCATION = "LOCATION",
  /** Logo of an associated roaming network to be displayed with the EVSE for example in lists, maps and detailed information views. */
  NETWORK = "NETWORK",
  /** Logo of the charge point operator, for example a municipality, to be displayed in the EVSEs detailed information view or in lists and maps, if no network logo is present. */
  OPERATOR = "OPERATOR",
  /** Other */
  OTHER = "OTHER",
  /** Logo of the charge point owner, for example a local store, to be displayed in the EVSEs detailed information view. */
  OWNER = "OWNER"
}

/** This value, if provided, represents the restriction to the parking spot for different purposes. */
export enum OCPIParkingRestriction {
  /** Reserved parking spot for electric vehicles. */
  EV_ONLY = "EV_ONLY",
  /** Parking is only allowed while plugged in (charging). */
  PLUGGED = "PLUGGED",
  /** Reserved parking spot for disabled people with valid ID. */
  DISABLED = "DISABLED",
  /** Parking spot for customers/guests only, for example in case of a hotel or shop. */
  CUSTOMERS = "CUSTOMERS",
  /** Parking spot only suitable for (electric) motorcycles or scooters. */
  MOTORCYCLES = "MOTORCYCLES"
}

/** Reflects the general type of the charge point’s location. May be used for user information. */
export enum OCPIParkingType {
  /** Location on a parking facility/rest area along a motorway, freeway, interstate, highway etc. */
  ALONG_MOTORWAY = "ALONG_MOTORWAY",
  /** Multistorey car park. */
  PARKING_GARAGE = "PARKING_GARAGE",
  /** A cleared area that is intended for parking vehicles, i.e. at supermarkets, bars, etc. */
  PARKING_LOT = "PARKING_LOT",
  /** Location is on the driveway of a house/building. */
  ON_DRIVEWAY = "ON_DRIVEWAY",
  /** Parking in public space along a street. */
  ON_STREET = "ON_STREET",
  /** Multistorey car park, mainly underground. */
  UNDERGROUND_GARAGE = "UNDERGROUND_GARAGE"
}

export enum OCPIPowerType {
  /** AC single phase. */
  AC_1_PHASE = "AC_1_PHASE",
  /** AC three phase. */
  AC_3_PHASE = "AC_3_PHASE",
  /** AC two phases, only two of the three available phases connected. */
  AC_2_PHASE = "AC_2_PHASE",
  /** AC two phases using split phase system. */
  AC_2_PHASE_SPLIT = "AC_2_PHASE_SPLIT",
  /** Direct Current. */
  DC = "DC"
}

export type OCPIPrice = {
  /** Price/Cost excluding VAT. This property is OCPI-compliant. */
  excl_vat?: Maybe<Scalars["Float"]>;
  /** Price/Cost including VAT. This property is OCPI-compliant. */
  incl_vat?: Maybe<Scalars["Float"]>;
};

export type OCPIPriceComponent = {
  /** Type of tariff dimension. This property is OCPI-compliant. */
  type?: Maybe<OCPITariffDimensionType>;
  /** Price per unit (excl. VAT) for this tariff dimension. This property is OCPI-compliant. */
  price?: Maybe<Scalars["Float"]>;
  /** Applicable VAT percentage for this tariff dimension. If omitted, no VAT is applicable. Not providing a VAT is different from 0% VAT, which would be a value of 0.0 here. This property is OCPI-compliant. */
  vat?: Maybe<Scalars["Float"]>;
  /** Minimum amount to be billed. This unit will be billed in this step_size blocks. For example: if type is TIME and step_size has a value of 300, then time will be billed in blocks of 5 minutes. If 6 minutes were used, 10 minutes (2 blocks of step_size) will be billed. This property is OCPI-compliant. */
  step_size?: Maybe<Scalars["Int"]>;
};

/** Regular recurring operation or access hours. */
export type OCPIRegularHours = {
  /** Number of days in the week, from Monday (1) till Sunday (7). This property is OCPI-compliant. */
  weekday?: Maybe<Scalars["Int"]>;
  /** Begin of the regular period, in local time, given in hours and minutes. Must be in 24h format with leading zeros. Example: "18:15". Hour/Minute separator: ":" Regex: ([0-1][0-9]|2[1-3]):[0-5][0-9]. This property is OCPI-compliant. */
  period_begin?: Maybe<Scalars["String"]>;
  /** End of the regular period, in local time, syntax as for period_begin. Must be later than period_begin. This property is OCPI-compliant. */
  period_end?: Maybe<Scalars["String"]>;
};

export enum OCPIReservationRestrictionType {
  /** Used in TariffElements to describe costs for a reservation. */
  RESERVATION = "RESERVATION",
  /** Used in TariffElements to describe costs for a reservation that expires (i.e. driver does not start a charging session before expiry_date of the reservation). */
  RESERVATION_EXPIRES = "RESERVATION_EXPIRES"
}

/** The status of an EVSE. */
export enum OCPIStatus {
  /** The EVSE/Connector is able to start a new charging session. */
  AVAILABLE = "AVAILABLE",
  /** The EVSE/Connector is not accessible because of a physical barrier, i.e. a car. */
  BLOCKED = "BLOCKED",
  /** The EVSE/Connector is in use. */
  CHARGING = "CHARGING",
  /** The EVSE/Connector is not yet active or it is no longer available (deleted). */
  INOPERATIVE = "INOPERATIVE",
  /** The EVSE/Connector is currently out of order. */
  OUTOFORDER = "OUTOFORDER",
  /** The EVSE/Connector is planned, will be operating soon. */
  PLANNED = "PLANNED",
  /** The EVSE/Connector was discontinued/removed. */
  REMOVED = "REMOVED",
  /** The EVSE/Connector is reserved for a particular EV driver and is unavailable for other drivers. */
  RESERVED = "RESERVED",
  /** No status information available (also used when offline). */
  UNKNOWN = "UNKNOWN"
}

/** This type is used to schedule status periods in the future. The eMSP can provide this information to the EV user for trip planning purposes. A period MAY have no end. Example: "This station will be running as of tomorrow. Today it is still planned and under construction. */
export type OCPIStatusSchedule = {
  /** Begin of the scheduled period. This property is OCPI-compliant. */
  period_begin?: Maybe<Scalars["DateTime"]>;
  /** End of the scheduled period, if known. This property is OCPI-compliant. */
  period_end?: Maybe<Scalars["DateTime"]>;
  /** Status value during the scheduled period. This property is OCPI-compliant. */
  status?: Maybe<OCPIStatus>;
};

export type OCPITariff = {
  /** ISO-3166 alpha-2 country code of the CPO that owns this tariff. This property is OCPI-compliant. */
  country_code?: Maybe<Scalars["String"]>;
  /** CPO ID of the CPO that owns this tariff (following the ISO-15118 standard). This property is OCPI-compliant. */
  party_id?: Maybe<Scalars["String"]>;
  /** Uniquely identifies the tariff within the CPO’s platform (and suboperator platforms). This property is OCPI-compliant. */
  id?: Maybe<Scalars["String"]>;
  /** ISO-4217 code of the currency of this tariff. This property is OCPI-compliant. */
  currency?: Maybe<Scalars["String"]>;
  /** Defines the type of the tariff. This allows for distinction in case of given charging preferences. When omitted, this tariff is valid for all sessions. This property is OCPI-compliant. */
  type?: Maybe<OCPITariffType>;
  /** List of alternative tariff information texts, in multiple languages. This property is OCPI-compliant. */
  tariff_alt_text?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** URL to a web page that contains an explanation of the tariff information in human readable form. This property is OCPI-compliant. */
  tariff_alt_url?: Maybe<Scalars["String"]>;
  /** When this field is set, a charging session with this tariff will cost at least the amount shown. This is different from a FLAT fee (start tariff, transaction fee), as a FLAT fee is a fixed amount that must be paid for any charging session. A minimum price indicates that when the cost of a charging session is lower than this amount, the cost of the session will be equal to this amount. This property is OCPI-compliant. */
  min_price?: Maybe<OCPIPrice>;
  /** When this field is set, a charging session with this tariff will NOT cost more than this amount. This property is OCPI-compliant. */
  max_price?: Maybe<OCPIPrice>;
  /** List of tariff elements. This property is OCPI-compliant. */
  elements?: Maybe<Array<Maybe<OCPITariffElement>>>;
  /** Time when this tariff becomes active, in UTC, time_zone field of the Location can be used to convert to local time. Typically used for a new tariff that is already given with the location, before it becomes active. This property is OCPI-compliant. */
  start_date_time?: Maybe<Scalars["DateTime"]>;
  /** Time after which this tariff is no longer valid, in UTC, time_zone field if the location can be used to convert to local time. Typically used when this tariff is going to be replaced with a different tariff in the near future. This property is OCPI-compliant. */
  end_date_time?: Maybe<Scalars["DateTime"]>;
  /** Details about the energy supplied with this tariff. This property is OCPI-compliant. */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** Timestamp when this tariff was last updated (or created). This property is OCPI-compliant. */
  last_updated?: Maybe<Scalars["DateTime"]>;
};

export enum OCPITariffDimensionType {
  /** Defined in kWh, step_size multiplier: 1 Wh */
  ENERGY = "ENERGY",
  /** Flat fee without unit for step_size */
  FLAT = "FLAT",
  /** Time not charging: defined in hours, step_size multiplier: 1 second */
  PARKING_TIME = "PARKING_TIME",
  /** Time charging: defined in hours, step_size multiplier: 1 second Can also be used in combination with a RESERVATION restriction to describe the price of the reservation time. */
  TIME = "TIME"
}

export type OCPITariffElement = {
  /** List of price components that describe the pricing of a tariff. This property is OCPI-compliant. */
  price_components?: Maybe<Array<Maybe<OCPIPriceComponent>>>;
  /** Restrictions that describe the applicability of a tariff. This property is OCPI-compliant. */
  restrictions?: Maybe<Array<Maybe<OCPITariffRestrictions>>>;
};

export type OCPITariffRestrictions = {
  /** Start time of day in local time, the time zone is defined in the time_zone field of the Location, for example 13:30, valid from this time of the day. Must be in 24h format with leading zeros. Hour/Minute separator: ":" Regex: ([0-1][0-9]|2[1-3]):[0-5][0-9]. This property is OCPI-compliant. */
  start_time?: Maybe<Scalars["String"]>;
  /** End time of day in local time, the time zone is defined in the time_zone field of the Location, for example 19:45, valid until this time of the day. Same syntax as start_time. This property is OCPI-compliant. */
  end_time?: Maybe<Scalars["String"]>;
  /** Start date in local time, the time zone is defined in the time_zone field of the Location, for example: 2015-12-24, valid from this day. Regex: ([12][0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]). This property is OCPI-compliant. */
  start_date?: Maybe<Scalars["String"]>;
  /** End date in local time, the time zone is defined in the time_zone field of the Location, for example: 2015-12-27, valid until this day (exclusive). Same syntax as start_date. This property is OCPI-compliant. */
  end_date?: Maybe<Scalars["String"]>;
  /** Minimum consumed energy in kWh, for example 20, valid from this amount of energy being used. This property is OCPI-compliant. */
  min_kwh?: Maybe<Scalars["Float"]>;
  /** Maximum consumed energy in kWh, for example 50, valid until this amount of energy being used. This property is OCPI-compliant. */
  max_kwh?: Maybe<Scalars["Float"]>;
  /** Sum of the minimum current in over all phases, for example 5. When the EV is charging with more than the defined amount of current, this tariff element is/becomes active. If the charging current is or becomes lower, this tariff element is not or no longer valid and becomes inactive. This does not describe the minimum current over the entire charging session. This restriction can make a tariff element become active when the charging current is above the defined value, but the tariff element MUST no longer be active when the charging current drops below the defined value. This property is OCPI-compliant. */
  min_current?: Maybe<Scalars["Float"]>;
  /** Sum of the maximum current in over all phases, for example 20. When the EV is charging with less than the defined amount of current, this tariff element becomes/is active. If the charging current is or becomes higher, this tariff element is not or no longer valid and becomes inactive. This describes NOT the maximum current over the entire Charging Session. This restriction can make a tariff element become active when the charging current is below this value, but the tariff element MUST  no longer be active when the charging current raises above the defined value. This property is OCPI-compliant. */
  max_current?: Maybe<Scalars["Float"]>;
  /** Minimum power in kW, for example 5. When the EV is charging with more than the defined amount of power, this tariff element is/becomes active. If the charging power is or becomes lower, this tariff element is not or no longer valid and becomes inactive. This does not describe the minimum power over the entire charging session. This restriction can make a tariff element become active when the charging power is above this value, but the TariffElement MUST no longer be active when the charging power drops below the defined value. This property is OCPI-compliant. */
  min_power?: Maybe<Scalars["Float"]>;
  /** Maximum power in kW, for example 20. When the EV is charging with less than the defined amount of power, this tariff element becomes/is active. If the charging power is or becomes higher, this tariff element is not or no longer valid and becomes inactive. This does not describe the maximum power over the entire charging session. This restriction can make a tariff element become active when the charging power is below this value, but the TariffElement MUST no longer be active when the charging power raises above the defined value. This property is OCPI-compliant. */
  max_power?: Maybe<Scalars["Float"]>;
  /** Minimum duration in seconds the charging session MUST last (inclusive). When the duration of a charging session is longer than the defined value, this TariffElement is or becomes active. Before that moment, this tariff element is not yet active. This property is OCPI-compliant. */
  min_duration?: Maybe<Scalars["Float"]>;
  /** Maximum duration in seconds the charging session MUST last (exclusive). When the duration of a charging session is shorter than the defined value, this tariff element is or becomes active. After that moment, this tariff element is no longer active. This property is OCPI-compliant. */
  max_duration?: Maybe<Scalars["Float"]>;
  /** Which day(s) of the week this tariff element is active. This property is OCPI-compliant. */
  day_of_week?: Maybe<OCPIDayOfWeek>;
  /** When this field is present, the tariff element describes reservation costs. A reservation starts when the reservation is made, and ends when the drivers starts charging on the reserved EVSE/Location, or when the reservation expires. A reservation can only have: FLAT and TIME TariffDimensions, where TIME is for the duration of the reservation. This property is OCPI-compliant. */
  reservation?: Maybe<OCPIReservationRestrictionType>;
};

export enum OCPITariffType {
  /** Used to describe that a tariff is valid when ad-hoc payment is used at the charge point (for example: Debit or Credit card payment terminal) */
  AD_HOC_PAYMENT = "AD_HOC_PAYMENT",
  /** Used to describe that a tariff is valid when charging preference: CHEAP is set for the session */
  PROFILE_CHEAP = "PROFILE_CHEAP",
  /** Used to describe that a tariff is valid when charging preference: FAST is set for the session */
  PROFILE_FAST = "PROFILE_FAST",
  /** Used to describe that a tariff is valid when charging preference: GREEN is set for the session */
  PROFILE_GREEN = "PROFILE_GREEN",
  /** Used to describe that a tariff is valid when using an RFID, without any charging preference, or when charging preference: REGULAR is set for the session */
  REGULAR = "REGULAR"
}

/** List of charging modes that are supported. */
export enum OICPChargingModes {
  MODE_1 = "mode_1",
  MODE_2 = "mode_2",
  MODE_3 = "mode_3",
  MODE_4 = "mode_4",
  CHADEMO = "chademo"
}

/** Custom connector properties for OICP databases. Station databases that not follow the OICP standard return null values. */
export type OICPConnectorCustomProperties = {
  /** Returns whether the connector is able to deliver different power outputs. */
  dynamic_power_level?: Maybe<Scalars["Boolean"]>;
  /** List of charging modes that are supported as specified by IEC 61851-1. */
  charging_modes?: Maybe<Array<OICPChargingModes>>;
};

/** List of authentication modes that are supported. */
export enum OICPEvseAuthenticationMode {
  NFC_RFID_CLASSIC = "nfc_rfid_classic",
  NFC_RFID_DESFIRE = "nfc_rfid_desfire",
  PNC = "pnc",
  REMOTE = "remote",
  DIRECT_PAYMENT = "direct_payment",
  NO_AUTHENTICATION_REQUIRED = "no_authentication_required"
}

/** Custom EVSE properties for OICP databases such as the global Hubject database. Station databases that not follow the OICP standard return null values. */
export type OICPEvseCustomProperties = {
  /** List of authentication modes that are supported. */
  authentication_modes: Array<OICPEvseAuthenticationMode>;
  /** Returns a value if the EVSE has a limited capacity (e.g. built-in battery). Values are in kWh. */
  max_capacity?: Maybe<Scalars["Int"]>;
  /** List of payment options that are supported. */
  payment_options: Array<OICPPaymentOptions>;
  /** List of value added services that are supported. */
  value_added_services: Array<OICPValueAddedServices>;
  /** List of additional info by locale. */
  additional_info?: Maybe<Array<OICPEvseCustomPropertiesAdditionalInfo>>;
  /** When the value is set to false this station does not support remote start and stop by Hubject. */
  is_hubject_compatible: Scalars["Boolean"];
  /** Name of the charging point manufacturer. */
  hardware_manufacturer?: Maybe<Scalars["String"]>;
};

export type OICPEvseCustomPropertiesAdditionalInfo = {
  /** The language in which the additional info text is provided. */
  lang?: Maybe<Scalars["String"]>;
  /** Additional info text value. */
  value?: Maybe<Scalars["String"]>;
};

/** List of payment options that are supported. */
export enum OICPPaymentOptions {
  NO_PAYMENT = "no_payment",
  DIRECT = "direct",
  CONTRACT = "contract"
}

/** Custom station properties for OICP databases such as the global Hubject database. Station databases that not follow the OICP standard return null values. */
export type OICPStationCustomProperties = {
  /** Returns whether the station is a parking facility. */
  parking_facility?: Maybe<Scalars["Boolean"]>;
  /** Returns an identifier for the precise parking spot. Eg. 36 or 12-1. */
  parking_spot?: Maybe<Scalars["String"]>;
  /** Returns information on how the charging station provides metering law data. */
  calibration_law_data_availability: Scalars["String"];
  /** Identification of the corresponding clearing house in the event that roaming between different clearing houses must be processed in the future. */
  clearinghouse_id?: Maybe<Scalars["String"]>;
};

/** List of value added services that are supported. */
export enum OICPValueAddedServices {
  RESERVATION = "reservation",
  DYNAMIC_PRICING = "dynamic_pricing",
  PARKING_SENSORS = "parking_sensors",
  MAXIMUM_POWER_CHARGING = "maximum_power_charging",
  PREDICTIVE_CHARGE_POINT_USAGE = "predictive_charge_point_usage",
  CHARGING_PLANS = "charging_plans",
  ROOF_PROVIDED = "roof_provided",
  NONE = "none"
}

export type OdometerInput = {
  /** Value of the vehicle's odometer. */
  value: Scalars["Float"];
  /** Type of the value of the vehicle's odometer. */
  type: DistanceUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

/** Operator data which extends OCPI BusinessDetails. */
export type Operator = {
  /** Unique operator ID. */
  id?: Maybe<Scalars["ID"]>;
  /** External ID of an operator provided by the operator data source. */
  external_id?: Maybe<Scalars["String"]>;
  /** Name of an operator. This property is OCPI-compliant. */
  name?: Maybe<Scalars["String"]>;
  /** Link to an operator’s website. This property is OCPI-compliant. */
  website?: Maybe<Scalars["String"]>;
  /** Image link to an operator’s logo. This property is OCPI-compliant. */
  logo?: Maybe<OCPIImage>;
  /**
   * ISO-3166 alpha-2 country code an operator is active in.
   * @deprecated In favor of countries.
   */
  country?: Maybe<Scalars["String"]>;
  /** ISO-3166 alpha-2 country codes an operator is active in. */
  countries?: Maybe<Array<CountryCodeAlpha2>>;
  /** Contact information. */
  contact?: Maybe<Contact>;
  /** Ranking level on which the operator is placed or null in case the operator is not on any ranking level. */
  ranking?: Maybe<Scalars["Int"]>;
  /** Flag which indicates if the operator is in the excluded list. */
  excluded?: Maybe<Scalars["Boolean"]>;
};

/** Filter which can be applied to retrieve the operator list action. */
export type OperatorListFilter = {
  /** ISO-3166 alpha-2 country codes an operator is active in. */
  countries?: Maybe<Array<CountryCodeAlpha2>>;
  /** List of ranking level(s) to be retrieved. Valid values are 1 to 10. */
  ranking?: Maybe<Array<Scalars["Int"]>>;
  /** Only retrieve operators that are in the excluded list. */
  excluded?: Maybe<Scalars["Boolean"]>;
};

/** Filter which can be applied to retrieve the operator list action. */
export type OperatorListQuery = {
  /** Unique operator ID. */
  id?: Maybe<Scalars["ID"]>;
  /** External ID of an operator provided by an operator data source. */
  external_id?: Maybe<Scalars["String"]>;
  /** Exact name. */
  name?: Maybe<Scalars["String"]>;
  /** Exact country code. */
  country?: Maybe<Scalars["String"]>;
};

export type OutsideTempInput = {
  /** Value of the outside temperature. */
  value: Scalars["Float"];
  /** Type of the value of the outside temperature. */
  type: TemperatureUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: Maybe<TelemetryInputSource>;
};

export type OutsideTemperatureInput = {
  /** Value of the outside temperature. */
  value: Scalars["Float"];
  /** Type of the value of the outside temperature. */
  type: TemperatureUnit;
  /** Source of inputted data. */
  source?: TelemetryInputSource;
};

export enum ParkingCost {
  /** Parking is free. */
  FREE = "free",
  /** Parking includes a fee. */
  PAID = "paid"
}

export type PathSegment = {
  /** Elevation (altitude) in meters. */
  elevation?: Maybe<Scalars["Int"]>;
  /** Average speed, in km/h, for this route path segment. */
  averageSpeed?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh, of a route path segment. */
  consumption?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh per km, of a route path segment. */
  consumptionPerKm?: Maybe<Scalars["Float"]>;
  /** Distance, in meters, of a route path segment. */
  distance?: Maybe<Scalars["Float"]>;
  /** Duration, in seconds, of a route path segment. */
  duration?: Maybe<Scalars["Float"]>;
  /** State of charge, in kWh, of a route path segment. */
  stateOfCharge?: Maybe<Scalars["Float"]>;
};

/** A GeoJSON Point. */
export type Point = {
  /** Point type. */
  type: PointType;
  /** The coordinates array with longitude as first value and latitude as second one. */
  coordinates: Array<Scalars["Float"]>;
};

/** A GeoJSON Point input. */
export type PointInput = {
  /** Point type. */
  type: PointType;
  /** Coordinates [longitude, latitude]. */
  coordinates: Array<Scalars["Float"]>;
};

/** GeoJSON Point type. */
export enum PointType {
  POINT = "Point"
}

/** Polygon properties. */
export type PolygonProperties = {
  /** Index of the feature inside the list. */
  index?: Maybe<Scalars["Int"]>;
};

/** Number of decimals for a polyline. */
export enum PolylineInputDecimals {
  FIVE = "five",
  SIX = "six"
}

export type PowerInput = {
  /** Value of the positive or negative power. When negative the vehicle is charging. */
  value: Scalars["Float"];
  /** Type of the value of the power. */
  type: PowerUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: Maybe<TelemetryInputSource>;
};

/** The list of powers for the speed type */
export type PowerList = {
  /** The maximum power the plug provides in kW */
  power?: Maybe<Scalars["Float"]>;
  /** The total number of stations with the specified power */
  total?: Maybe<Scalars["Int"]>;
};

/** Power stats model */
export type PowerStats = {
  /** The charging speed type for the specified power */
  type?: Maybe<StationSpeedType>;
  /** The list of powers for the speed type */
  powers?: Maybe<Array<Maybe<PowerList>>>;
};

export enum PowerSupported {
  /** Power is supported. */
  AVAILABLE = "available",
  /** Power is not supported. */
  NOT_AVAILABLE = "not_available",
  /** Power is announced, but not yet supported. */
  ANNOUNCED = "announced"
}

export enum PowerUnit {
  /** Return the power in kilowatts. */
  KILOWATT = "kilowatt",
  /** Return the power in horsepower. */
  HORSEPOWER = "horsepower"
}

/** Pressure units. */
export enum PressureUnit {
  /** Return the pressure in bar. */
  BAR = "bar",
  /** Return the pressure in pounds per square inch. */
  POUNDS_PER_SQUARE_INCH = "pounds_per_square_inch"
}

export type Pricing = {
  /** Unique ID of a price. */
  id?: Maybe<Scalars["String"]>;
  /** Price details. */
  price_list?: Maybe<Array<Maybe<PricingList>>>;
};

export type PricingList = {
  /** (MSP) Mobility Service Provider. */
  partner?: Maybe<Scalars["String"]>;
  /** Product details. */
  product?: Maybe<PricingListProduct>;
  /** Price product elements. */
  elements?: Maybe<Array<Maybe<PricingListElement>>>;
};

export type PricingListElement = {
  /** Price element type. */
  type?: Maybe<PricingListElementType>;
  /** Price of the element type without VAT. */
  price_excl_vat?: Maybe<Scalars["Float"]>;
  /** VAT percentage to apply. */
  vat?: Maybe<Scalars["Float"]>;
};

export enum PricingListElementType {
  /** Price per kWh. */
  ENERGY = "ENERGY",
  /** Starting price, fixed fee per charge session. */
  FLAT = "FLAT",
  /** Fixed price per hour. */
  TIME = "TIME",
  /** Parking price per hour. */
  PARKING_TIME = "PARKING_TIME"
}

export type PricingListProduct = {
  /** Name of the payment card or subscription. If name is 'Adhoc price' the price is the CPO price. */
  name?: Maybe<Scalars["String"]>;
  /** Description of the product. */
  description?: Maybe<Scalars["String"]>;
  /** Subscription type. */
  subscription_type?: Maybe<Scalars["String"]>;
  /** Subscription fee without VAT. */
  subscription_fee_excl_vat?: Maybe<Scalars["Float"]>;
  /** Currency. */
  currency?: Maybe<Scalars["String"]>;
};

export type Query = {
  /** Get a full list of amenities around a station */
  amenityList?: Maybe<Array<Maybe<Amenity>>>;
  /** Deprecated: In favor of vehicle. */
  car?: Maybe<Car>;
  /** Deprecated: In favor of VehiclePremium. */
  carPremium?: Maybe<CarPremium>;
  /** Deprecated: In favor of VehicleList. */
  carList?: Maybe<Array<Maybe<CarList>>>;
  /** [BETA] Get a connected vehicles by id */
  connectedVehicle?: Maybe<ConnectedVehicle>;
  /** [BETA] Get the connected vehicles for the current user */
  connectedVehicleList?: Maybe<Array<Maybe<ConnectedVehicle>>>;
  /** [BETA] Retrieve live vehicle data by connected vehicle id */
  connectedVehicleData?: Maybe<VehicleData>;
  /** Get an isoline by ID. */
  isoline?: Maybe<Isoline>;
  /** [BETA] Get a navigation session by ID */
  navigation?: Maybe<Navigation>;
  /** Get a full list of operators. */
  operatorList?: Maybe<Array<Maybe<Operator>>>;
  /** Get information about an operator by its ID. */
  operator?: Maybe<Operator>;
  /** Get all reviews of a station by the station ID. */
  reviewList?: Maybe<Array<Review>>;
  /**
   * Get all reviews of stations that were added by an authenticated user.
   * The `x-token` header is mandatory in order to authorize the user who wants to retrieve all the reviews added by him/her.
   * This is a premium feature, contact Chargetrip for more information.
   */
  userReviewList?: Maybe<Array<Review>>;
  /** Get a route by ID */
  route?: Maybe<Route>;
  /** [BETA] Get a route by ID. */
  getRoute: RouteResponse;
  /** [BETA] Get emissions for a route. */
  getRouteEmissions: RouteDetailsEmissions;
  /** [BETA] Emissions profile for route. */
  routeEmissions: RouteEmissions;
  /** Retrieve information about a route path segment */
  routePath?: Maybe<RoutePath>;
  /** Get the station statistics */
  stationStats?: Maybe<StationStats>;
  /** Get information about a station by its ID. */
  station?: Maybe<Station>;
  /** Get a full list of stations. */
  stationList?: Maybe<Array<Maybe<Station>>>;
  /** Search for stations around a GeoJSON point with a specific distance in meters. */
  stationAround?: Maybe<Array<Maybe<Station>>>;
  /** Get information about a tariff by the tariff ID. */
  tariff?: Maybe<OCPITariff>;
  /** Get the full list of tariffs. */
  tariffList?: Maybe<Array<Maybe<OCPITariff>>>;
  /** Deprecated: This query will be removed in favor of navigation query and subscription. Mapping can be retrieved via the instructions field. */
  navigationMapping?: Maybe<Scalars["JSON"]>;
  /** Get information about a vehicle by its ID. */
  vehicle?: Maybe<Vehicle>;
  /** Vehicle premium data provides even more information about your vehicle: tire pressure, prices, drivetrain data, and more. Please contact us for access to premium data. */
  vehiclePremium?: Maybe<VehiclePremium>;
  /** Get a full list of vehicles. */
  vehicleList?: Maybe<Array<Maybe<VehicleList>>>;
};

export type QueryamenityListArgs = {
  stationId: Scalars["ID"];
};

export type QuerycarArgs = {
  id?: Maybe<Scalars["ID"]>;
  externalId?: Maybe<Scalars["Int"]>;
};

export type QuerycarPremiumArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QuerycarListArgs = {
  query?: Maybe<CarListQuery>;
  search?: Maybe<Scalars["String"]>;
  filter?: Maybe<CarListFilter>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryconnectedVehicleArgs = {
  id: Scalars["ID"];
};

export type QueryconnectedVehicleListArgs = {
  filter?: Maybe<ConnectedVehicleListFilter>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryconnectedVehicleDataArgs = {
  id: Scalars["ID"];
};

export type QueryisolineArgs = {
  id: Scalars["ID"];
};

export type QuerynavigationArgs = {
  id: Scalars["ID"];
};

export type QueryoperatorListArgs = {
  query?: Maybe<OperatorListQuery>;
  search?: Maybe<Scalars["String"]>;
  filter?: Maybe<OperatorListFilter>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryoperatorArgs = {
  id: Scalars["ID"];
};

export type QueryreviewListArgs = {
  stationId: Scalars["ID"];
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryuserReviewListArgs = {
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryrouteArgs = {
  id: Scalars["ID"];
};

export type QuerygetRouteArgs = {
  id: Scalars["ID"];
};

export type QuerygetRouteEmissionsArgs = {
  route_id: Scalars["ID"];
  route_details_id: Scalars["ID"];
};

export type QueryrouteEmissionsArgs = {
  route_id: Scalars["ID"];
  route_alternative_id?: Maybe<Scalars["ID"]>;
};

export type QueryroutePathArgs = {
  id: Scalars["ID"];
  location: PointInput;
  alternativeId?: Maybe<Scalars["ID"]>;
};

export type QuerystationArgs = {
  id?: Maybe<Scalars["ID"]>;
  evse_id?: Maybe<Scalars["String"]>;
};

export type QuerystationListArgs = {
  query?: Maybe<StationListQuery>;
  filter?: Maybe<StationListFilter>;
  search?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QuerystationAroundArgs = {
  query?: Maybe<StationAroundQuery>;
  filter?: Maybe<StationAroundFilter>;
  search?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QuerytariffArgs = {
  id: Scalars["ID"];
};

export type QuerytariffListArgs = {
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QuerynavigationMappingArgs = {
  id: Scalars["ID"];
  provider: MappingProvider;
  precision?: Maybe<Scalars["Int"]>;
  language?: Maybe<MappingLanguage>;
};

export type QueryvehicleArgs = {
  id: Scalars["ID"];
  country?: Maybe<CountryCodeAlpha2>;
};

export type QueryvehiclePremiumArgs = {
  id: Scalars["ID"];
  country?: Maybe<CountryCodeAlpha2>;
};

export type QueryvehicleListArgs = {
  search?: Maybe<Scalars["String"]>;
  filter?: Maybe<VehicleListFilter>;
  country?: Maybe<CountryCodeAlpha2>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type RemoveConnectedVehicleInput = {
  /** Id from the connected vehicle */
  id: Scalars["ID"];
};

/** EV specific data for a route request. */
export type RequestEv = {
  /** Internal ID of a Vehicle. */
  id?: Maybe<Scalars["ID"]>;
  /** EV battery specific data. */
  battery?: Maybe<RequestEvBattery>;
  /** Supported plugs for an EV. */
  plugs?: Maybe<Array<Maybe<RequestEvPlug>>>;
  /** Supported adapters of plugs for an EV. */
  adapters?: Maybe<Array<Maybe<RequestEvPlug>>>;
  /** Minimum desired power of chargers. */
  minPower?: Maybe<Scalars["Int"]>;
  /** Climate is on. */
  climate?: Maybe<Scalars["Boolean"]>;
  /** Vehicle Heat Pump configuration. */
  heatPump?: Maybe<HeatPumpMode>;
  /** Vehicle cabin configuration. */
  cabin?: Maybe<RequestEvCabin>;
  /** Cargo weight, in kg. */
  cargo?: Maybe<Scalars["Float"]>;
  /**
   * The number of passengers on board.
   * @deprecated In favor of occupants.
   */
  numberOfPassengers?: Maybe<Scalars["Int"]>;
  /** Number of occupants. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Consumption specific to an EV or inputted by a request. */
  consumption?: Maybe<RequestEvConsumption>;
};

export type RequestEvBattery = {
  /** Usable capacity of the battery used to compute the route. If this in not filled in, value as the vehicle battery.usable_kwh. */
  capacity?: Maybe<RequestEvBatteryValue>;
  /** Usable capacity of a battery, in kWh. This value is computed from the provided capacity value. */
  capacityKwh?: Maybe<Scalars["Float"]>;
  /** Current amount of energy in a battery. If this is not filled in, we assume the battery is full and it will be equal to the battery.usable_kwh. */
  stateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** Current amount of energy in a battery, in kWh. This value is computed from the provided state of charge. */
  stateOfChargeKwh?: Maybe<Scalars["Float"]>;
  /** Desired final amount of energy in a battery. If this is not filled in, it will be set to 20% of the vehicle battery.usable_kwh. */
  finalStateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** Desired final amount of energy in a battery, in kWh. This value is computed from the provided final state of charge. */
  finalStateOfChargeKwh?: Maybe<Scalars["Float"]>;
};

export type RequestEvBatteryInput = {
  /** Usable capacity of a battery used to compute a route. We recommend you stay between 50% and 150%. If this in not filled in, we assume it is the same value as the vehicle battery.usable_kwh. */
  capacity?: Maybe<RequestEvBatteryInputValue>;
  /** Current amount of energy in a battery. If this is not filled in, we assume the battery is full and we fill it in with vehicle battery.usable_kwh. */
  stateOfCharge?: Maybe<RequestEvBatteryInputValue>;
  /** Desired final amount of energy in a battery. The value should be between 0 and 80% of the vehicle battery.usable_kwh If this is not filled in, we assume it is 20% of the vehicle battery.usable_kwh. */
  finalStateOfCharge?: Maybe<RequestEvBatteryInputValue>;
};

export type RequestEvBatteryInputValue = {
  /** Value of a desired final amount of energy in a battery. */
  value: Scalars["Float"];
  /** Type of a desired final amount of energy in a battery. */
  type: BatteryInputType;
};

export type RequestEvBatteryValue = {
  /** Value of the desired final amount of energy in a battery. */
  value: Scalars["Float"];
  /** Type of the desired final amount of energy in a battery. */
  type: BatteryInputType;
};

/** Vehicle cabin configuration. */
export type RequestEvCabin = {
  /** Flag which indicate if the vehicle cabin was preconditioned for the desired temperature. */
  isPreconditioned?: Maybe<Scalars["Boolean"]>;
  /** Desired cabin temperature. Default is 20 degrees Celsius or 68 degrees Fahrenheit. */
  desiredTemperature?: Maybe<Scalars["Float"]>;
};

/** Vehicle cabin configuration. */
export type RequestEvCabindesiredTemperatureArgs = {
  unit?: Maybe<TemperatureUnit>;
};

/** Vehicle cabin configuration. */
export type RequestEvCabinInput = {
  /** Flag which indicate if the vehicle cabin was preconditioned for the desired temperature. */
  isPreconditioned?: Maybe<Scalars["Boolean"]>;
  /** Desired cabin temperature. Default is 20 degrees Celsius or 68 degrees Fahrenheit. */
  desiredTemperature?: Maybe<TemperatureInput>;
};

export type RequestEvConsumption = {
  /** The amount of energy, in kWh, used by the auxiliary systems of the vehicle in an hour, like media box, etc */
  auxiliary?: Maybe<Scalars["Float"]>;
  /**
   * Consumption, in kWh, of the auxiliaries.
   * @deprecated In favor of auxiliary
   */
  aux?: Maybe<CarConsumption>;
  /**
   * The consumption, in kWh, of the battery management system.
   * @deprecated In favor of auxiliary
   */
  bms?: Maybe<CarConsumption>;
  /**
   * The consumption, in kWh, of the vehicle in idle mode.
   * @deprecated In favor of auxiliary
   */
  idle?: Maybe<CarConsumption>;
};

export type RequestEvConsumptionInput = {
  /** The amount of energy, in kWh, used by the auxiliary systems of the vehicle in an hour, like media box, etc. */
  auxiliary?: Maybe<Scalars["Float"]>;
  /** Deprecated in favor of auxiliary. */
  aux?: Maybe<CarConsumptionInput>;
  /** Deprecated in favor of auxiliary. */
  bms?: Maybe<CarConsumptionInput>;
  /** Deprecated in favor of auxiliary. */
  idle?: Maybe<CarConsumptionInput>;
};

export type RequestEvInput = {
  /** Internal ID of a Vehicle. */
  id: Scalars["ID"];
  /** The EV battery specific data. */
  battery?: Maybe<RequestEvBatteryInput>;
  /** Supported plugs of an EV. */
  plugs?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
  /** Supported adapters of plugs of an EV. */
  adapters?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
  /** Minimum desired power of chargers. */
  minPower?: Maybe<Scalars["Int"]>;
  /** Flag which indicates if the climate is on. */
  climate?: Maybe<Scalars["Boolean"]>;
  /** Vehicle Heat Pump configuration. */
  heatPump?: Maybe<HeatPumpMode>;
  /** Vehicle cabin configuration. */
  cabin?: Maybe<RequestEvCabinInput>;
  /** Number of occupants. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Cargo weight, in kg. */
  cargo?: Maybe<Scalars["Int"]>;
  /** Consumption specific to the EV or inputted by the request. */
  consumption?: Maybe<RequestEvConsumptionInput>;
  /** Deprecated. */
  auxConsumption?: Maybe<Scalars["Float"]>;
  /** Deprecated. */
  bmsConsumption?: Maybe<Scalars["Float"]>;
};

export type RequestEvPlug = {
  /** Type of the plug. */
  standard?: Maybe<ConnectorType>;
  /** Maximum charging speed for a plug. */
  chargingPower?: Maybe<Scalars["Float"]>;
};

export type RequestEvPlugInput = {
  /** Type of a plug. */
  standard: ConnectorType;
  /** Maximum charging speed for this plug. */
  chargingPower: Scalars["Float"];
};

export type RequestInput = {
  /** EV specific data for a route request. */
  ev: RequestEvInput;
  /** Route request data. */
  routeRequest: RequestRouteInput;
  /** Telemetry data used to overwrite routing parameters. */
  telemetry?: Maybe<Scalars["JSON"]>;
};

export type RequestRoute = {
  /**
   * Requested amenities near the stations, within a 1 kilometer radius.
   * @deprecated Will be removed. Use the amenity preferences instead.
   */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Amenity preferences for a route. */
  amenity_preferences?: Maybe<RouteAmenityPreferences>;
  /**
   * Requested operators.
   * @deprecated Will be removed. Use the operators property instead.
   */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /**
   * Preferred operators are required. In case there are no preferred operators the route cannot be calculated.
   * @deprecated Will be removed. Use the operators property instead.
   */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /**
   * Encourage the route to use preferred operators. In case there are no preferred operators the route can still be calculated.
   * @deprecated Will be removed. Use the operators property instead.
   */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /** Operator prioritization for a route. */
  operators?: Maybe<RouteOperators>;
  /** Season. */
  season?: Maybe<RouteSeason>;
  /** Percentage for the minimum limit of the battery capacity before a recharge. The value should be between 0 and 60. When omitted, the project configuration is used. */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** Origin of a route. */
  origin?: Maybe<FeaturePoint>;
  /** Destination of a route. */
  destination?: Maybe<FeaturePoint>;
  /** Locations where a route will stop. */
  via?: Maybe<Array<Maybe<FeaturePoint>>>;
  /** Radius in meters for alternative stations along a route (min 500 - max 5000). */
  stationsAlongRouteRadius?: Maybe<Scalars["Int"]>;
  /** Flag indicating wether the turn-by-turn navigation instructions should be prepared. Disclaimer: The functionality is under active development and the final API is a subject to change. Not ready for production. */
  instructions?: Maybe<Scalars["Boolean"]>;
  /** Mode that indicates if we optimize the charging time or always charge to the maximum capacity. */
  chargeMode?: Maybe<ChargeMode>;
};

export type RequestRouteInput = {
  /** Deprecated: in favor of amenity preferences. A list of desired amenities near the stations, with a 1 kilometer radius. */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Amenity preferences for a route. */
  amenity_preferences?: Maybe<AmenityPreferencesInput>;
  /** Deprecated: in favor of operators. A list of requested operators. */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Deprecated: in favor of operators. Flag which indicates if the operators are required. */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /** Deprecated: in favor of operators. Flag which indicates if the preferred operators should be loaded. */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /** Operator prioritization for a route. */
  operators?: Maybe<RouteOperatorsInput>;
  /** Optional flag to specify the season. */
  season?: Maybe<RouteSeason>;
  /** Percentage for a minimum limit of a battery capacity before a recharge. The value should be between 0 and 60. When omitted, the project configuration is used. */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** Mode that indicates if we optimize the charging time or always charge to the maximum capacity. */
  chargeMode?: Maybe<ChargeMode>;
  /** Origin of a route. */
  origin: FeaturePointInput;
  /** Destination of a route. */
  destination: FeaturePointInput;
  /** An optional list of locations where we should stop. */
  via?: Maybe<Array<Maybe<FeaturePointInput>>>;
  /** Alternative stations along a route within a specified radius in meters (minimum 500, maximum 5000). */
  stationsAlongRouteRadius?: Maybe<Scalars["Int"]>;
  /** Deprecated: all routes will have turn-by-turn instructions prepared. Boolean will be ignored. */
  instructions?: Maybe<Scalars["Boolean"]>;
};

export type RequestUser = {
  /** ID of the user. */
  id?: Maybe<Scalars["ID"]>;
};

/** Review model. */
export type Review = {
  /** ID of a review. */
  id: Scalars["ID"];
  /** Station for which a review was provided. */
  station?: Maybe<Station>;
  /** User who added a review. If a review was added by an anonymous user, this will be null. */
  user?: Maybe<ReviewUser>;
  /** Rating of a review. */
  rating?: Maybe<Scalars["Int"]>;
  /** Message of a review. */
  message?: Maybe<Scalars["String"]>;
  /** Locale of a message. */
  locale?: Maybe<Scalars["String"]>;
  /** Vehicle that was provided/selected by a user. */
  ev?: Maybe<Vehicle>;
  /** Plug type that was provided/selected by a user. */
  plugType?: Maybe<ConnectorType>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for a station review. */
  tags?: Maybe<ReviewTags>;
  /** Date and time when a review was created. */
  createdAt?: Maybe<Scalars["String"]>;
  /** Date and time when a review was updated. */
  updatedAt?: Maybe<Scalars["String"]>;
};

/** Form input to add a new review. */
export type ReviewAdd = {
  /** Station ID for which a review is provided. */
  stationId: Scalars["String"];
  /** Rating of a review. */
  rating: Scalars["Int"];
  /** Review message. */
  message?: Maybe<Scalars["String"]>;
  /** Locale of a message. */
  locale?: Maybe<Scalars["String"]>;
  /** ID of the vehicle that was provided/selected by a user. */
  ev?: Maybe<Scalars["String"]>;
  /** Plug type that was provided/selected by a user. */
  plugType?: Maybe<ConnectorType>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for a station review. */
  tags?: Maybe<ReviewTagsInput>;
};

/** Form input for edit an existing review. */
export type ReviewEdit = {
  /** Rating of a review. */
  rating: Scalars["Int"];
  /** Review message. */
  message?: Maybe<Scalars["String"]>;
  /** Locale of a message. */
  locale?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for a station review. */
  tags?: Maybe<ReviewTagsInput>;
};

/** Statistical information for reviews of a station. */
export type ReviewStats = {
  /** Average of all reviews. */
  rating?: Maybe<Scalars["Float"]>;
  /** 'Total number of reviews. */
  count?: Maybe<Scalars["Int"]>;
};

/** Boolean tags for the station review. */
export type ReviewTags = {
  /** Flag which indicates if the station was working when the review was added. */
  working?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if the user recommended the station when the review was added. */
  recommended?: Maybe<Scalars["Boolean"]>;
};

/** Boolean tags for a station review. */
export type ReviewTagsInput = {
  /** Flag which indicates if a station was working when the review was added. */
  working?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if a user recommended a station when the review was added. */
  recommended?: Maybe<Scalars["Boolean"]>;
};

/** Special format for the user of a review. */
export type ReviewUser = {
  /** User full name. If a review was added by an anonymous user, this will be null. */
  name?: Maybe<Scalars["String"]>;
  /**
   * User ID.
   * @deprecated Not sent back anymore, will be null
   */
  id?: Maybe<Scalars["ID"]>;
  /**
   * First name.
   * @deprecated In favor of name.
   */
  firstName?: Maybe<Scalars["String"]>;
  /**
   * Last name.
   * @deprecated In favor of name
   */
  lastName?: Maybe<Scalars["String"]>;
};

export type Route = {
  /** Recommended route. */
  route?: Maybe<RouteAlternative>;
  /** Available alternatives. */
  alternatives?: Maybe<Array<Maybe<RouteAlternative>>>;
  /** EV specific data for a route request. */
  ev?: Maybe<RequestEv>;
  /** Route telemetry data. */
  telemetry?: Maybe<Scalars["JSON"]>;
  /** @deprecated You will receive null values. */
  user?: Maybe<RequestUser>;
  /** Route request data. */
  routeRequest?: Maybe<RequestRoute>;
  /** Application who requested a route. */
  app?: Maybe<RouteApp>;
  /** Route status. */
  status?: Maybe<RouteStatus>;
};

export type RouteAlternative = {
  /** ID of a route alternative. */
  id?: Maybe<Scalars["ID"]>;
  /** Type of alternative route. */
  type?: Maybe<RouteAlternativeType>;
  /** Number of charges along a route. */
  charges?: Maybe<Scalars["Int"]>;
  /** Number of available charges along a route. */
  chargesAvailable?: Maybe<Scalars["Int"]>;
  /** Number of occupied charges along a route. */
  chargesOccupied?: Maybe<Scalars["Int"]>;
  /** Number of unknown charges along a route. */
  chargesUnknown?: Maybe<Scalars["Int"]>;
  /** Number of out of order charges along a route. */
  chargesOutOfOrder?: Maybe<Scalars["Int"]>;
  /** Total distance of a route in meters. */
  distance?: Maybe<Scalars["Int"]>;
  /** Total duration of a route, including charge time, in seconds. */
  duration?: Maybe<Scalars["Int"]>;
  /** Total energy used for a route in kWh. */
  consumption?: Maybe<Scalars["Float"]>;
  /** Total time required to charge for an entire route, in seconds. */
  chargeTime?: Maybe<Scalars["Float"]>;
  /**
   * Amenity ranking for an alternative.
   * @deprecated Will be removed in the future
   */
  amenityRanking?: Maybe<Scalars["Int"]>;
  /** Display value that indicates the range, in meters, available at the beginning of the trip. This range is calculated using the Chargetrip range, the conditions at the time of planning the route, weather scenario (current or seasonal) and the route input. */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** Total energy in a battery at the beginning of a trip, in kWh. */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** Total energy in a battery at the beginning of a trip, in percentage. */
  rangeStartPercentage?: Maybe<Scalars["Int"]>;
  /** Display value that indicates the range, in meters, available at the end of the trip. This range is calculated using the Chargetrip range, the conditions at the time of planning the route, weather scenario (current or seasonal) and the route input. Please note: In case of a non BEV where the range end is negative, the value will be 0. */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** Remaining range, energy in kWh, at the end of a trip. In the case of a non BEV where the range end is negative, the value will be 0. */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** Remaining range, energy in percentage, at the end of a trip. */
  rangeEndPercentage?: Maybe<Scalars["Int"]>;
  /** Text information about a route direction. */
  via?: Maybe<Scalars["String"]>;
  /** Polyline containing encoded coordinates. */
  polyline?: Maybe<Scalars["String"]>;
  /** Path elevation, distance, duration, consumption and speed values, grouped into 100 segments. */
  pathPlot?: Maybe<Array<Maybe<PathSegment>>>;
  /**
   * Elevation values. Each elevationPlot has a hundred points, independent of the length of a route.
   * @deprecated Will be removed in the future; Use the pathPlot property
   */
  elevationPlot?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Total number of meters which are going up on a route. */
  elevationUp?: Maybe<Scalars["Float"]>;
  /** Total number of meters which are going down on a route. */
  elevationDown?: Maybe<Scalars["Float"]>;
  /** Highest value from the elevation array. */
  elevationMax?: Maybe<Scalars["Float"]>;
  /** Money and CO2 saving information. */
  saving?: Maybe<RouteAlternativeSaving>;
  /** Legs of the route. */
  legs?: Maybe<Array<Maybe<RouteLeg>>>;
  /** List of raw turn-by-turn navigation instructions. */
  instructions?: Maybe<Array<Maybe<RouteInstruction>>>;
  /** Alternative stations along a route within specified radius in meters. Only if it was provided at newRoute mutation. */
  stationsAlongRoute?: Maybe<Array<Maybe<RouteStationsAlong>>>;
  /** Tags of a route alternative. Values: road, highway, toll, ferry, etc. */
  tags?: Maybe<Array<Maybe<RouteTagType>>>;
};

export type RouteAlternativepolylineArgs = {
  decimals?: Maybe<Scalars["Int"]>;
};

export type RouteAlternativeSaving = {
  /** Total amount of CO2, in grams, which would be used with a gasoline vehicle. */
  co2?: Maybe<Scalars["String"]>;
  /** Money saved by a user driving this route with the electric vehicle. */
  money?: Maybe<Scalars["String"]>;
  /** Currency. */
  currency?: Maybe<Scalars["String"]>;
  /** Average gas price with which the calculation was made. */
  averageGasPrice?: Maybe<Scalars["String"]>;
  /** Average energy price with which the calculation was made. */
  averageEnergyPrice?: Maybe<Scalars["String"]>;
};

/** Types of an alternative route. */
export enum RouteAlternativeType {
  /** Fastest route between origin and destination. */
  FASTEST = "fastest",
  /** Best matching route based on operator and amenities preferences. */
  BESTMATCHING = "bestMatching",
  /** An alternative to the fastest route. */
  ALTERNATIVE = "alternative"
}

/** Amenity preferences for a route. */
export type RouteAmenityPreferences = {
  /** Desired amenities near all charge-stops along a route, with a 1 kilometer radius. */
  all_charge_stops?: Maybe<Array<AmenityType>>;
  /** Scheduled charge stops, with a specified amenity and timeline. */
  scheduled_charge_stops?: Maybe<Array<RouteScheduledChargeStop>>;
};

export type RouteApp = {
  /** ID of the app who requested a route. */
  id?: Maybe<Scalars["ID"]>;
};

export type RouteDestinationFeaturePoint = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: Point;
  /** Optional object where additional properties can be specified. */
  properties?: Maybe<RouteDestinationProperties>;
};

export type RouteDestinationFeaturePointInput = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: PointInput;
  /** Optional object where additional properties can be specified. */
  properties?: Maybe<RouteDestinationPropertiesInput>;
};

export type RouteDestinationProperties = {
  /** Data about the destination location. */
  location?: Maybe<RoutePropertiesLocation>;
  /** Data about the destination station. */
  station?: Maybe<RoutePropertiesStation>;
};

export type RouteDestinationPropertiesInput = {
  /** Data about the destination location. */
  location?: Maybe<RoutePropertiesLocationInput>;
  /** Data about the destination station. */
  station?: Maybe<RoutePropertiesStationInput>;
};

export type RouteDetails = {
  /** ID of a route computation. */
  id: Scalars["ID"];
  /** Type of a computed route. */
  type: RouteDetailsType;
  /** Aggregation of the connectors. */
  connectors: RouteDetailsConnectors;
  /** Total distance of a route. */
  distance: Scalars["Float"];
  /** Aggregation of all durations of a route. */
  durations: RouteDetailsDurations;
  /** Total energy used for a route in kilowatt hours. */
  consumption: Scalars["Float"];
  /** Range available at the beginning of a trip. */
  range_at_origin: Scalars["Float"];
  /** Range available at the end of a trip. */
  range_at_destination: Scalars["Float"];
  /** Text information about a route direction. */
  via?: Maybe<Scalars["String"]>;
  /** Polyline containing encoded coordinates. */
  polyline?: Maybe<Scalars["String"]>;
  /** Path elevation, distance, duration, consumption and speed values, grouped into 100 segments. */
  path_plot: Array<RouteDetailsPathSegment>;
  /** Details about elevation on a route. */
  elevation: RouteDetailsElevation;
  /** Money saving information. */
  savings?: Maybe<RouteDetailsSavings>;
  /** Legs of a route. */
  legs: Array<RouteDetailsLeg>;
  alternative_stations: Array<RouteDetailsAlternativeStation>;
  /** Aggregation of tags over the current RouteDetails. Tags are available on legs and further subdivided over individual sections and maneuvers. */
  tags: Array<RouteDetailsTag>;
  /** Number of charges along a route. */
  charges: Scalars["Int"];
};

export type RouteDetailsdistanceArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsrange_at_originArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

export type RouteDetailsrange_at_destinationArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

export type RouteDetailspolylineArgs = {
  decimals: PolylineInputDecimals;
};

export type RouteDetailsAlternativeStation = {
  /** ID of a station. */
  id: Scalars["ID"];
  /** GeoJSON location of a station. */
  location: Point;
  /** Speed of a station. A station along a route can be either fast or turbo. */
  speed: StationSpeedType;
  /** Status of a station. */
  status: ChargerStatus;
  /** Ranking of an operator. */
  operator_ranking?: Maybe<Scalars["Int"]>;
};

/** Aggregation of the connectors on a route. */
export type RouteDetailsConnectors = {
  /** Aggregation of every connector on a route. */
  all: RouteDetailsConnectorsValues;
  /** Aggregation of every usable connector on a route. */
  usable: RouteDetailsConnectorsValues;
};

/** Aggregation of the connectors on a route by status. */
export type RouteDetailsConnectorsValues = {
  /** Total numbers of connectors. */
  total: Scalars["Int"];
  /** Number of connectors with status available. */
  available: Scalars["Int"];
  /** Number of connectors with status occupied. */
  occupied: Scalars["Int"];
  /** Number of connectors with status unknown. */
  unknown: Scalars["Int"];
  /** Number of connectors with status out of order. */
  out_of_order: Scalars["Int"];
};

/** Aggregation of all durations of a route. */
export type RouteDetailsDurations = {
  /** Total duration, in seconds. */
  total: Scalars["Int"];
  /** Total duration charging, in seconds. */
  charging: Scalars["Int"];
  /** Total duration driving, in seconds. */
  driving: Scalars["Int"];
  /** Total duration stopped for a short stay, for example at a via point, in seconds. */
  stopover: Scalars["Int"];
  /** Total duration of ferry rides, in seconds. */
  ferry?: Maybe<Scalars["Int"]>;
};

export type RouteDetailsElevation = {
  /** Total value driving uphill on a route. */
  up: Scalars["Float"];
  /** Total value driving downhill on a route. */
  down: Scalars["Float"];
  /** Maximum elevation on a route. */
  maximum: Scalars["Float"];
  /** Minimum elevation on a route. */
  minimum: Scalars["Float"];
};

export type RouteDetailsElevationupArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsElevationdownArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsElevationmaximumArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsElevationminimumArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsEmissions = {
  /** ID of the route for which we retrieve the emissions profile. */
  route_id: Scalars["ID"];
  route_alternative_id: Scalars["ID"];
  /** Emissions profile for the vehicle used in route. */
  route_vehicle: RouteVehicleEmissions;
  internal_combustion_vehicle: RouteInternalCombustionVehicleEmissions;
  /** Estimated GHG emissions saved by a user driving this route with the electric vehicle in grams of CO2e. */
  co2e_saved: Scalars["Float"];
};

export type RouteDetailsEmissionsinternal_combustion_vehicleArgs = {
  fuel_type?: Maybe<RouteOperationalFuelType>;
};

export type RouteDetailsEmissionsco2e_savedArgs = {
  unit?: Maybe<EmissionUnit>;
};

/** Leg of a route detail. */
export type RouteDetailsLeg = {
  /** Distance from the start to the end of a leg. */
  distance: Scalars["Float"];
  /** Aggregation of all durations of a route leg. */
  durations: RouteDetailsDurations;
  /** Total energy used in a leg in kilowatt hours. */
  consumption: Scalars["Float"];
  /** Origin point location. */
  origin: RouteDetailsLegFeaturePoint;
  /** Destination point location. */
  destination: RouteDetailsLegFeaturePoint;
  /** Range at the origin of the leg. */
  range_at_origin: Scalars["Float"];
  /** Range at the destination of the leg. */
  range_at_destination: Scalars["Float"];
  /** Range after charging on the leg. */
  range_after_charge?: Maybe<Scalars["Float"]>;
  /** Type of a leg. */
  type: RouteDetailsLegType;
  /** Name of a destination. This is the station name in case a user should charge or the name of the location in case this was provided. */
  name?: Maybe<Scalars["String"]>;
  /** Information about the station at the origin of this leg. */
  station?: Maybe<RouteDetailsLegStation>;
  /** Aggregation of the connectors on the leg. */
  connectors: RouteDetailsConnectors;
  /** Polyline containing encoded coordinates. */
  polyline: Scalars["String"];
  /** Aggregation of tags over the current leg. Tags are further subdivided over individual sections and maneuvers. */
  tags: Array<RouteDetailsTag>;
  /** Maneuvers of a leg - used to generate turn-by-turn instructions. */
  maneuvers: Array<RouteDetailsManeuver>;
  /** Road sections of a leg - divided by means of transportation. */
  sections: Array<RouteDetailsLegSection>;
};

/** Leg of a route detail. */
export type RouteDetailsLegdistanceArgs = {
  unit?: Maybe<DistanceUnit>;
};

/** Leg of a route detail. */
export type RouteDetailsLegrange_at_originArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

/** Leg of a route detail. */
export type RouteDetailsLegrange_at_destinationArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

/** Leg of a route detail. */
export type RouteDetailsLegrange_after_chargeArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

/** Leg of a route detail. */
export type RouteDetailsLegpolylineArgs = {
  decimals: PolylineInputDecimals;
};

export type RouteDetailsLegFeaturePoint = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: Point;
  /** Properties of the feature. */
  properties?: Maybe<RouteDetailsLegFeatureProperties>;
};

export type RouteDetailsLegFeatureProperties = {
  /** Name of the location. */
  name?: Maybe<Scalars["String"]>;
  /** ID of the station. */
  station_id?: Maybe<Scalars["ID"]>;
  /** External ID of the station. */
  external_station_id?: Maybe<Scalars["ID"]>;
  /** Temperature at the location. */
  temperature?: Maybe<Scalars["Float"]>;
  /** Air pressure at the location. */
  air_pressure?: Maybe<Scalars["Float"]>;
  /** Solar irradiance at the location. */
  solar_irradiance?: Maybe<Scalars["Float"]>;
  /** Duration, in seconds, of time spent at this location. */
  duration?: Maybe<Scalars["Int"]>;
  /** Number of occupants present in the vehicle. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Value of the current weight of the occupants. */
  total_occupant_weight?: Maybe<Scalars["Float"]>;
  /** Value of the current weight of the cargo. */
  total_cargo_weight?: Maybe<Scalars["Float"]>;
};

export type RouteDetailsLegFeaturePropertiestemperatureArgs = {
  unit?: Maybe<TemperatureUnit>;
};

export type RouteDetailsLegFeaturePropertiestotal_occupant_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type RouteDetailsLegFeaturePropertiestotal_cargo_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type RouteDetailsLegManeuverPoints = {
  /** Number of polyline points which are included in this instruction. */
  size: Scalars["Int"];
  /** Interval of points that are included in this instruction, an array with 2 values, where the first value is the index of the polyline where the interval starts. The second value is where it ends. */
  interval: Array<Scalars["Int"]>;
};

/** Type of a maneuver indicating the main action. */
export enum RouteDetailsLegManeuverType {
  UNKNOWN = "UNKNOWN",
  U_TURN_UNKNOWN = "U_TURN_UNKNOWN",
  U_TURN_LEFT = "U_TURN_LEFT",
  KEEP_LEFT = "KEEP_LEFT",
  LEAVE_ROUNDABOUT = "LEAVE_ROUNDABOUT",
  TURN_SHARP_LEFT = "TURN_SHARP_LEFT",
  TURN_LEFT = "TURN_LEFT",
  TURN_SLIGHT_LEFT = "TURN_SLIGHT_LEFT",
  CONTINUE_ON_STREET = "CONTINUE_ON_STREET",
  TURN_SLIGHT_RIGHT = "TURN_SLIGHT_RIGHT",
  TURN_RIGHT = "TURN_RIGHT",
  TURN_SHARP_RIGHT = "TURN_SHARP_RIGHT",
  FINISH = "FINISH",
  REACHED_VIA = "REACHED_VIA",
  REACHED_CHARGING_STATION = "REACHED_CHARGING_STATION",
  USE_ROUNDABOUT = "USE_ROUNDABOUT",
  KEEP_RIGHT = "KEEP_RIGHT",
  U_TURN_RIGHT = "U_TURN_RIGHT",
  PT_START_TRIP = "PT_START_TRIP",
  PT_TRANSFER = "PT_TRANSFER",
  PT_END_TRIP = "PT_END_TRIP",
  IGNORE = "IGNORE"
}

export type RouteDetailsLegSection = {
  /** Section type. */
  type: RouteDetailsLegSectionType;
  /** Origin point. */
  origin: RouteDetailsLegSectionFeaturePoint;
  /** Destination point. */
  destination: RouteDetailsLegSectionFeaturePoint;
  /** Aggregation of tags over the current section. */
  tags: Array<RouteDetailsTag>;
  /** Polyline containing encoded coordinates. */
  polyline?: Maybe<Scalars["String"]>;
  /** Distance from the start to the end of a section. */
  distance: Scalars["Float"];
  /** Total drive time from the start to the end of a section, in seconds. */
  duration: Scalars["Float"];
  /** Total energy used in a section in kilowatt-hours. */
  consumption: Scalars["Float"];
};

export type RouteDetailsLegSectionpolylineArgs = {
  decimals: PolylineInputDecimals;
};

export type RouteDetailsLegSectiondistanceArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsLegSectionFeaturePoint = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: Point;
  /** Properties of the feature. */
  properties: RouteDetailsLegSectionFeaturePointProperties;
};

export type RouteDetailsLegSectionFeaturePointProperties = {
  /** Number of occupants present in the vehicle. */
  occupants: Scalars["Int"];
  /** Value of the current weight of the occupants. */
  total_occupant_weight?: Maybe<Scalars["Float"]>;
  /** Value of the current weight of the cargo. */
  total_cargo_weight?: Maybe<Scalars["Float"]>;
};

export type RouteDetailsLegSectionFeaturePointPropertiestotal_occupant_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type RouteDetailsLegSectionFeaturePointPropertiestotal_cargo_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

/** Type of a route details leg section. */
export enum RouteDetailsLegSectionType {
  DRIVING = "driving",
  FERRY = "ferry",
  WALKING = "walking"
}

export type RouteDetailsLegStation = {
  /** ID of a station. */
  station_id: Scalars["ID"];
  /** Name of a station. */
  station_name?: Maybe<Scalars["String"]>;
  /** ID of an operator. */
  operator_id: Scalars["ID"];
  /** Name of an operator. */
  operator_name?: Maybe<Scalars["String"]>;
  /** ID of the EVSE that was selected in a route. */
  evse_uid?: Maybe<Scalars["ID"]>;
  /** ID of the connector that was selected in a route. */
  connector_id?: Maybe<Scalars["ID"]>;
  /** List of amenities present at the station. */
  amenities?: Maybe<Array<AmenityType>>;
};

/** Type of a leg. */
export enum RouteDetailsLegType {
  STATION = "station",
  STATION_VIA = "station_via",
  STATION_FINAL = "station_final",
  STATION_AMENITY = "station_amenity",
  VIA = "via",
  FINAL = "final"
}

export type RouteDetailsManeuver = {
  /** Type of instruction. */
  type: RouteDetailsLegManeuverType;
  /** Location of the maneuver. */
  location?: Maybe<RouteDetailsLegFeaturePoint>;
  /** Name of the street on which an instruction is. */
  name?: Maybe<Scalars["String"]>;
  /** Distance, in meters, of a route instruction. */
  distance: Scalars["Float"];
  /** Duration, in seconds, of a route instruction. */
  duration: Scalars["Int"];
  /** Information about the points on a polyline. */
  points: RouteDetailsLegManeuverPoints;
  /** Exit number on a roundabout. This field exists only on sign `USE_ROUNDABOUT` (6), otherwise this value is null. */
  exit_number?: Maybe<Scalars["Int"]>;
  /** Curvature angle between the roundabout and the exit of the roundabout. This field exists only on sign USE_ROUNDABOUT (6), otherwise this value is `null`. */
  turn_angle?: Maybe<Scalars["Float"]>;
  /** Aggregation of tags over the current maneuver. */
  tags?: Maybe<Array<RouteDetailsTag>>;
};

export type RouteDetailsManeuverdistanceArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsPathSegment = {
  /** Elevation value of a route path segment. */
  elevation: Scalars["Float"];
  /** Average speed of a route path segment. */
  average_speed: Scalars["Float"];
  /** Consumption, in kilowatt hours, of a route path segment. */
  consumption: Scalars["Float"];
  /** Distance of a route path segment. */
  distance: Scalars["Float"];
  /** Duration, in seconds, of a route path segment. */
  duration: Scalars["Float"];
  /** State of charge, in kilowatt hours, of a route path segment. */
  state_of_charge?: Maybe<Scalars["Float"]>;
  /** Maximum vehicle speed of a route path segment. */
  max_speed: Scalars["Float"];
};

export type RouteDetailsPathSegmentelevationArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsPathSegmentaverage_speedArgs = {
  unit?: Maybe<SpeedUnit>;
};

export type RouteDetailsPathSegmentdistanceArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type RouteDetailsPathSegmentstate_of_chargeArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

export type RouteDetailsPathSegmentmax_speedArgs = {
  unit?: Maybe<SpeedUnit>;
};

/** Money saving information. */
export type RouteDetailsSavings = {
  /** Money saved by a user driving this route with an electric vehicle. */
  money?: Maybe<Scalars["Float"]>;
  /** Average gas price with which the calculation was made. */
  average_gas_price?: Maybe<Scalars["Float"]>;
  /** Average energy price with which the calculation was made. */
  average_energy_price?: Maybe<Scalars["Float"]>;
};

/** Tags of a route. */
export enum RouteDetailsTag {
  ROAD = "road",
  HIGHWAY = "highway",
  TOLL = "toll",
  FERRY = "ferry",
  WALKING = "walking",
  CROSSBORDER = "crossborder"
}

/** Types of a route. */
export enum RouteDetailsType {
  FASTEST = "fastest",
  BEST_MATCHING = "best_matching",
  ALTERNATIVE = "alternative"
}

export type RouteEmbeddedEmissions = {
  /** Total embedded emissions. */
  total: Scalars["Float"];
  /** Manufacturing emissions. */
  manufacturing: RouteEmbeddedManufacturingEmissions;
  /** Total distribution emissions. */
  distribution: Scalars["Float"];
  /** Distribution sea segment emissions. */
  maritime: RouteEmbeddedMaritimeEmissions;
  /** Distribution land segment emissions. */
  land: RouteEmbeddedLandEmissions;
};

export type RouteEmbeddedEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedEmissionsdistributionArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedLandEmissions = {
  /** Total embedded land segment emissions. */
  total: Scalars["Float"];
  /** Distribution land segment emissions from fuel consumption. */
  fuel: Scalars["Float"];
  /** Distribution land segment lifecycle emissions. */
  lifecycle: Scalars["Float"];
};

export type RouteEmbeddedLandEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedLandEmissionsfuelArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedLandEmissionslifecycleArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedManufacturingEmissions = {
  /** Total embedded manufacturing emissions. */
  total: Scalars["Float"];
  /** Vehicle body manufacturing emissions. */
  body: Scalars["Float"];
  /** Lithium ion battery manufacturing emissions. */
  battery?: Maybe<Scalars["Float"]>;
};

export type RouteEmbeddedManufacturingEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedManufacturingEmissionsbodyArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedManufacturingEmissionsbatteryArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedMaritimeEmissions = {
  /** Total embedded maritime emissions. */
  total: Scalars["Float"];
  /** Fuel related maritime segment emissions. */
  fuel: Scalars["Float"];
  /** Port facility related maritime segment emissions. */
  port: Scalars["Float"];
  /** Idling related maritime segment emissions. */
  idle: Scalars["Float"];
  /** Distributed lifecycle related maritime segment emissions. */
  lifecycle: Scalars["Float"];
};

export type RouteEmbeddedMaritimeEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedMaritimeEmissionsfuelArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedMaritimeEmissionsportArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedMaritimeEmissionsidleArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmbeddedMaritimeEmissionslifecycleArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEmissions = {
  /** ID of the route for which we retrieve the emissions profile. */
  route_id: Scalars["ID"];
  /** ID of the route alternative for which we retrieve the emissions profile. */
  route_alternative_id: Scalars["ID"];
  /** Emissions profile for the vehicle used in route. */
  route_vehicle: RouteVehicleEmissions;
  /** Emissions profile for an equivalent internal combustion engine vehicle. */
  internal_combustion_vehicle: RouteInternalCombustionVehicleEmissions;
};

export type RouteEmissionsinternal_combustion_vehicleArgs = {
  fuel_type?: Maybe<RouteOperationalFuelType>;
};

export type RouteEndOfLifeEmissions = {
  /** Total end of life emissions. */
  total: Scalars["Float"];
  /** Fluid related end of life emissions. */
  fluids: FluidEmissions;
  /** Battery related end of life emissions. */
  battery: Scalars["Float"];
  /** Tire related end of life emissions. */
  tires: Scalars["Float"];
  /** Body end of life emissions. */
  body: Scalars["Float"];
  /** Transport end of life emissions. */
  transport: Scalars["Float"];
};

export type RouteEndOfLifeEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEndOfLifeEmissionsbatteryArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEndOfLifeEmissionstiresArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEndOfLifeEmissionsbodyArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteEndOfLifeEmissionstransportArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteInstruction = {
  /** Information about the points on the polyline. */
  points?: Maybe<RouteInstructionPoints>;
  /** Sign of the instruction. See `RouteInstructionSign`. */
  sign?: Maybe<RouteInstructionSign>;
  /** Name of the street on which the instruction is. */
  name?: Maybe<Scalars["String"]>;
  /** Distance, in meters, of the current route instruction. */
  distance?: Maybe<Scalars["Int"]>;
  /** Duration, in seconds, of the current route instruction. */
  time?: Maybe<Scalars["Int"]>;
  /** Exit number on a roundabout. This field exists only on sign `USE_ROUNDABOUT` (6), otherwise is null. */
  exit_number?: Maybe<Scalars["Int"]>;
  /** Curvature angle between the roundabout and street you exit the roundabout. This field exists only on sign USE_ROUNDABOUT (6), otherwise is null. */
  turn_angle?: Maybe<Scalars["Float"]>;
};

export type RouteInstructionPoints = {
  /** Number of polyline points which are included in this instruction. */
  size?: Maybe<Scalars["Int"]>;
  /** The interval of points that are included in this instruction, an array with 2 values, where the first value is the index of the polyline where the interval starts. The second value is where it ends. */
  interval?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** Sign belonging to the instruction indicating the main maneuver. */
export enum RouteInstructionSign {
  UNKNOWN = "UNKNOWN",
  U_TURN_UNKNOWN = "U_TURN_UNKNOWN",
  U_TURN_LEFT = "U_TURN_LEFT",
  KEEP_LEFT = "KEEP_LEFT",
  LEAVE_ROUNDABOUT = "LEAVE_ROUNDABOUT",
  TURN_SHARP_LEFT = "TURN_SHARP_LEFT",
  TURN_LEFT = "TURN_LEFT",
  TURN_SLIGHT_LEFT = "TURN_SLIGHT_LEFT",
  CONTINUE_ON_STREET = "CONTINUE_ON_STREET",
  TURN_SLIGHT_RIGHT = "TURN_SLIGHT_RIGHT",
  TURN_RIGHT = "TURN_RIGHT",
  TURN_SHARP_RIGHT = "TURN_SHARP_RIGHT",
  FINISH = "FINISH",
  REACHED_VIA = "REACHED_VIA",
  REACHED_CHARGING_STATION = "REACHED_CHARGING_STATION",
  USE_ROUNDABOUT = "USE_ROUNDABOUT",
  KEEP_RIGHT = "KEEP_RIGHT",
  U_TURN_RIGHT = "U_TURN_RIGHT",
  PT_START_TRIP = "PT_START_TRIP",
  PT_TRANSFER = "PT_TRANSFER",
  PT_END_TRIP = "PT_END_TRIP",
  IGNORE = "IGNORE"
}

export type RouteInternalCombustionVehicleEmissions = {
  /** Total co2e emissions. */
  total: Scalars["Float"];
  /** Total co2e emissions from vehicle operational processes calculated using the methodology in section 5.2.2 of ISO 14083:2023 and default emissions intensities in Annex K of the same document. */
  iso_14083_2023: Scalars["Float"];
  /** Embedded emissions, for example emissions produced during manufacturing, transportation, and delivery. */
  embedded: RouteEmbeddedEmissions;
  /** Operational emissions. */
  operational: RouteInternalCombustionVehicleOperationalEmissions;
  /** End of life emissions. */
  end_of_life: RouteEndOfLifeEmissions;
  /** Emissions info for the legs in the same order as in the route. */
  legs: Array<RouteInternalCombustionVehicleLegEmissions>;
};

export type RouteInternalCombustionVehicleEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteInternalCombustionVehicleEmissionsiso_14083_2023Args = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteInternalCombustionVehicleLegEmissions = {
  /** Total co2e emissions. */
  total: Scalars["Float"];
  /** Total co2e emissions from vehicle operational processes calculated using the methodology in section 5.2.2 of ISO 14083:2023 and default emissions intensities in Annex K of the same document. */
  iso_14083_2023: Scalars["Float"];
  /** Embedded emissions, for example emissions produced during manufacturing, transportation, and delivery. */
  embedded: RouteEmbeddedEmissions;
  /** Operational emissions. */
  operational: RouteInternalCombustionVehicleOperationalEmissions;
  /** End of life emissions. */
  end_of_life: RouteEndOfLifeEmissions;
};

export type RouteInternalCombustionVehicleLegEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteInternalCombustionVehicleLegEmissionsiso_14083_2023Args = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteInternalCombustionVehicleOperationalEmissions = {
  /** Total operational emissions. */
  total: Scalars["Float"];
  /** Fuel emissions. */
  fuel: RouteOperationalFuelEmissions;
  /** Road infrastructure emissions. */
  infrastructure: RouteOperationalInfrastructureEmissions;
  /** Maintenance emissions. */
  maintenance: RouteOperationalMaintenanceEmissions;
};

export type RouteInternalCombustionVehicleOperationalEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteLeg = {
  /** ID of a leg. */
  id?: Maybe<Scalars["ID"]>;
  /** Distance from the start to the end of a leg, in meters. */
  distance?: Maybe<Scalars["Int"]>;
  /** Total drive time from the start to the end of a leg, in seconds. */
  duration?: Maybe<Scalars["Int"]>;
  /** Total energy used in a leg in kWh. */
  consumption?: Maybe<Scalars["Float"]>;
  /** Display value that indicates the range, in meters, available at the beginning of the leg. This range is calculated using the Chargetrip range, the conditions at the time of planning the route, weather scenario (current or seasonal) and the route input. */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** Total energy in a battery at the beginning of a leg, in kWh. */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** Total energy in a battery at the beginning of a trip, in percentage. */
  rangeStartPercentage?: Maybe<Scalars["Int"]>;
  /** Display value that indicates the range, in meters, available at the end of the leg. This range is calculated using the Chargetrip range, the conditions at the time of planning the route, weather scenario (current or seasonal) and the route input. Please note: In case of a non BEV where the range end is negative, the value will be 0. */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** Total energy left in a battery at the end of a leg, in kWh. In the case of a non BEV where the range end is negative, the value will be 0. */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** Remaining range, energy in percentage, at the end of a trip. */
  rangeEndPercentage?: Maybe<Scalars["Int"]>;
  /** Origin point location. */
  origin?: Maybe<FeaturePoint>;
  /** Destination point location. */
  destination?: Maybe<FeaturePoint>;
  /** Type of a leg. */
  type?: Maybe<LegType>;
  /** Name of a destination. This is the station name in case a user should charge or the name of the location in case this was provided. */
  name?: Maybe<Scalars["String"]>;
  /** ID of a station. */
  stationId?: Maybe<Scalars["String"]>;
  /** ID of an operator. */
  operatorId?: Maybe<Scalars["String"]>;
  /** Name of an operator. */
  operatorName?: Maybe<Scalars["String"]>;
  /** Ranking of an operator. */
  operatorRanking?: Maybe<Scalars["Int"]>;
  /** Total time required to charge a battery until 80%, in seconds. */
  chargeTime?: Maybe<Scalars["Int"]>;
  /** Recommended EVSE where to charge. */
  evse?: Maybe<EVSE>;
  /** Recommended connector for charging. */
  connector?: Maybe<Connector>;
  /** Number of compatible plugs available at a charge station. */
  plugsAvailable?: Maybe<Scalars["Int"]>;
  /** Number of compatible plugs occupied at a charge station. */
  plugsOccupied?: Maybe<Scalars["Int"]>;
  /** Number of compatible plugs unknown at a charge station. */
  plugsUnknown?: Maybe<Scalars["Int"]>;
  /** Number of compatible plugs out of order at a charge station. */
  plugsOutOfOrder?: Maybe<Scalars["Int"]>;
  /** Total number of compatible plugs at a charge station. */
  plugsCount?: Maybe<Scalars["Int"]>;
  /** Polyline containing encoded coordinates. */
  polyline?: Maybe<Scalars["String"]>;
  /** Steps of a leg. */
  steps?: Maybe<Array<Maybe<RouteStep>>>;
  /** Tags of a leg. Values: road, highway, toll, ferry. */
  tags?: Maybe<Array<Maybe<RouteTagType>>>;
  /** Cargo weight in a vehicle for the duration of a leg, in kg. */
  cargo?: Maybe<Scalars["Float"]>;
  /** Number of occupants in a vehicle for the duration of a leg. */
  occupants?: Maybe<Scalars["Int"]>;
};

export type RouteLegpolylineArgs = {
  decimals?: Maybe<Scalars["Int"]>;
};

export type RouteLegMeta = {
  /** Warnings that certain conditions specified in a route mutation are not respected. */
  warnings: Array<RouteMetaWarning>;
};

export type RouteLegOperationalElectricityEmissions = {
  /** Total electricity emissions. */
  total: Scalars["Float"];
  /** Base emissions without efficiency losses. */
  base_value: Scalars["Float"];
  /** Emissions for electricity lost in the battery. */
  battery_losses: Scalars["Float"];
  /** Emissions for electricity lost in transmission. */
  transmission_losses: Scalars["Float"];
  /** Emissions for electricity lost during charging. */
  chargepoint_losses: Scalars["Float"];
  /** Electricity efficiency information. */
  efficiency: RouteOperationalElectricityEmissionsEfficiency;
  /** Electricity intensity information. */
  intensity: RouteLegOperationalElectricityEmissionsIntensity;
};

export type RouteLegOperationalElectricityEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteLegOperationalElectricityEmissionsbase_valueArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteLegOperationalElectricityEmissionsbattery_lossesArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteLegOperationalElectricityEmissionstransmission_lossesArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteLegOperationalElectricityEmissionschargepoint_lossesArgs = {
  unit?: Maybe<EmissionUnit>;
};

/** Electricity emission intensity for a leg */
export type RouteLegOperationalElectricityEmissionsIntensity = {
  /** Total average electricity emissions intensity in unit CO2e/kWh. */
  total: Scalars["Float"];
  /** Base regional electricity emissions intensity for the leg. */
  base_regional_value: EmissionsFactor;
  /** Base regional electricity intensity used for the ISO 14083:2023 emissions estimation. */
  base_iso_14083_2023_regional_value: EmissionsFactor;
  /** Electricity mix for the leg. */
  energy_sources: RouteOperationalElectricityEnergySources;
  /** Average emissions intensity of processing and transport of primary energy, power generation infrastructure, etc. in unit CO2e/kWh. */
  infrastructure: Scalars["Float"];
  /** Estimated electricity demand at the time and place the electricity for this leg was obtained as a fraction of the annual average demand. */
  average_demand: Scalars["Float"];
  /** Fraction of regional power generation that is not affected by demand (is assumed to always be on). */
  base_load_fraction: Scalars["Float"];
  /** Season for which the leg was calculated. */
  season: RouteOperationalElectricitySeason;
  /** Climate for which the leg was calculated. */
  climate: RouteOperationalElectricityClimate;
};

/** Electricity emission intensity for a leg */
export type RouteLegOperationalElectricityEmissionsIntensitytotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

/** Electricity emission intensity for a leg */
export type RouteLegOperationalElectricityEmissionsIntensityinfrastructureArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteMeta = {
  /** Warnings that certain conditions specified in a route mutation are not respected. */
  warnings: Array<RouteMetaWarning>;
};

export type RouteMetaWarning = {
  /** Static identifier, can be used for production purposes such as i18n. */
  code: Scalars["String"];
  /** Human readable explanation of the warning, for development purposes. */
  message: Scalars["String"];
  /** Optional JSON object containing data explaining the warning, for development purposes. */
  data?: Maybe<Scalars["JSON"]>;
};

export type RouteMetadata = {
  /** Refers to the x-app-id specified in the headers. */
  app_id: Scalars["ID"];
  /** Date when a route was created by a createRoute mutation. */
  created_at: Scalars["DateTime"];
  /** Last updated date of a route. */
  updated_at: Scalars["DateTime"];
  /** Length of time required to successfully calculate a route, in milliseconds. */
  computation_time?: Maybe<Scalars["Int"]>;
};

/** Köppen climate classification. */
export enum RouteOperationalElectricityClimate {
  /** Tropical rain forest climate. */
  AF = "Af",
  /** Tropical monsoon climate. */
  AM = "Am",
  /** Tropical savanna climate, dry summer. */
  AW = "Aw",
  /** Tropical savanna climate, dry winter. */
  AS = "As",
  /** Hot desert climate. */
  BWH = "BWh",
  /** Cold desert climate. */
  BWK = "BWk",
  /** Hot semi-arid climate. */
  BSH = "BSh",
  /** Cold semi-arid climate. */
  BSK = "BSk",
  /** Monsoon-influenced humid subtropical climate. */
  CWA = "Cwa",
  /** Subtropical highland climate. */
  CWB = "Cwb",
  /** Cold subtropical highland climate. */
  CWC = "Cwc",
  /** Humid subtropical climate. */
  CFA = "Cfa",
  /** Temperate oceanic climate. */
  CFB = "Cfb",
  /** Sub polar oceanic climate. */
  CFC = "Cfc",
  /** Hot-summer Mediterranean climate. */
  CSA = "Csa",
  /** Warm-summer Mediterranean climate. */
  CSB = "Csb",
  /** Cold-summer Mediterranean climate. */
  CSC = "Csc",
  /** Monsoon-influenced hot-summer humid continental climate. */
  DWA = "Dwa",
  /** Monsoon-influenced warm-summer humid continental climate. */
  DWB = "Dwb",
  /** Monsoon-influenced subarctic climate. */
  DWC = "Dwc",
  /** Monsoon-influenced extremely cold subarctic climate. */
  DWD = "Dwd",
  /** Hot-summer humid continental climate. */
  DFA = "Dfa",
  /** Warm-summer humid continental climate. */
  DFB = "Dfb",
  /** Subarctic climate. */
  DFC = "Dfc",
  /** Extremely cold subarctic climate. */
  DFD = "Dfd",
  /** Mediterranean-influenced hot-summer humid continental climate. */
  DSA = "Dsa",
  /** Mediterranean-influenced warm-summer humid continental climate. */
  DSB = "Dsb",
  /** Mediterranean-influenced subarctic climate. */
  DSC = "Dsc",
  /** Mediterranean-influenced extremely cold subarctic climate. */
  DSD = "Dsd",
  /** Tundra climate. */
  ET = "ET",
  /** Ice cap climate. */
  EF = "EF"
}

export type RouteOperationalElectricityEmissions = {
  /** Total electricity emissions. */
  total: Scalars["Float"];
  /** Base emissions without efficiency losses. */
  base_value: Scalars["Float"];
  /** Emissions for electricity lost in the battery. */
  battery_losses: Scalars["Float"];
  /** Emissions for electricity lost in transmission. */
  transmission_losses: Scalars["Float"];
  /** Emissions for electricity lost during charging. */
  chargepoint_losses: Scalars["Float"];
  /** Electricity efficiency information. */
  efficiency: RouteOperationalElectricityEmissionsEfficiency;
  /** Electricity intensity information. */
  intensity: RouteOperationalElectricityEmissionsIntensity;
};

export type RouteOperationalElectricityEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalElectricityEmissionsbase_valueArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalElectricityEmissionsbattery_lossesArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalElectricityEmissionstransmission_lossesArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalElectricityEmissionschargepoint_lossesArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalElectricityEmissionsEfficiency = {
  /** Average total electricity efficiency. */
  total: Scalars["Float"];
  /** Average efficiency of the battery. */
  battery: Scalars["Float"];
  /** Average estimated transmission efficiency using the base transmission efficiency adjusting for temperature. */
  transmission: Scalars["Float"];
  /** Average base regional grid transmission efficiency. */
  base_transmission: Scalars["Float"];
  /** Average transmission efficiency change due to temperature. */
  transmission_temperature_modifier: Scalars["Float"];
  /** Average efficiency of the chargepoint. */
  chargepoint: Scalars["Float"];
  /** Average evse (electric vehicle supply equipment) efficiency of the chargepoint. */
  evse: Scalars["Float"];
  /** Average circuit breaker efficiency of the chargepoint. */
  breaker: Scalars["Float"];
  /** Average power electronics unit efficiency of the chargepoint. */
  power_electronics_unit: Scalars["Float"];
  /** Average transformer efficiency of the chargepoint. */
  transformer: Scalars["Float"];
  /** Change in chargepoint efficiency due to temperature. */
  chargepoint_temperature_modifier: Scalars["Float"];
  /** Average charging current in amperes. */
  average_charging_current: Scalars["Float"];
  /** Average charging voltage in volts. */
  average_charging_voltage: Scalars["Float"];
  /** Average outside temperature. */
  average_temperature: Scalars["Float"];
  /** Average regional temperature. */
  average_regional_temperature: Scalars["Float"];
};

export type RouteOperationalElectricityEmissionsEfficiencyaverage_temperatureArgs = {
  unit?: Maybe<TemperatureUnit>;
};

export type RouteOperationalElectricityEmissionsEfficiencyaverage_regional_temperatureArgs = {
  unit?: Maybe<TemperatureUnit>;
};

/** Electricity emission intensity for the route */
export type RouteOperationalElectricityEmissionsIntensity = {
  /** Total average electricity emissions intensity in unit CO2e/kWh. */
  total: Scalars["Float"];
  /** Average base regional electricity emissions intensity in unit CO2e/kWh. */
  average_base_regional_value: Scalars["Float"];
  /** Total electricity intensity used for iso 14083:2023 scope emissions estimate in unit CO2e/kWh. */
  iso_14083_2023: Scalars["Float"];
  /** Average electricity mix for the route. */
  energy_sources: RouteOperationalElectricityEnergySources;
  /** Average emissions intensity of processing and transport of primary energy, power generation infrastructure, etc. in unit CO2e/kWh. */
  infrastructure: Scalars["Float"];
  /** Average electricity demand at the time of route charges as a fraction of the annual average demand. */
  average_demand: Scalars["Float"];
  /** Fraction of regional power generation that is not affected by demand (is assumed to always be on). */
  base_load_fraction: Scalars["Float"];
};

/** Electricity emission intensity for the route */
export type RouteOperationalElectricityEmissionsIntensitytotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

/** Electricity emission intensity for the route */
export type RouteOperationalElectricityEmissionsIntensityaverage_base_regional_valueArgs = {
  unit?: Maybe<EmissionUnit>;
};

/** Electricity emission intensity for the route */
export type RouteOperationalElectricityEmissionsIntensityiso_14083_2023Args = {
  unit?: Maybe<EmissionUnit>;
};

/** Electricity emission intensity for the route */
export type RouteOperationalElectricityEmissionsIntensityinfrastructureArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalElectricityEnergySources = {
  /** Electricity produced by coal power plants. */
  coal: ElectricityGenerationMethod;
  /** Electricity produced by natural gas power plants. */
  gas: ElectricityGenerationMethod;
  /** Electricity produced by hydroelectric power. */
  hydro: ElectricityGenerationMethod;
  /** Electricity produced by solar power. */
  solar: ElectricityGenerationMethod;
  /** Electricity produced by wind power. */
  wind: ElectricityGenerationMethod;
  /** Electricity produced by oil power plants. */
  oil: ElectricityGenerationMethod;
  /** Electricity produced by nuclear power plants. */
  nuclear: ElectricityGenerationMethod;
  /** Electricity produced by biofuel/biomass. */
  biofuel: ElectricityGenerationMethod;
  /** Electricity produced by geothermal power plants. */
  geothermal: ElectricityGenerationMethod;
  /** Electricity produced by other means. */
  other: ElectricityGenerationMethod;
};

/** Yearly seasons. */
export enum RouteOperationalElectricitySeason {
  /** Winter season. */
  WINTER = "winter",
  /** Spring season. */
  SPRING = "spring",
  /** Summer season. */
  SUMMER = "summer",
  /** Fall season. */
  FALL = "fall"
}

export type RouteOperationalFuelEmissions = {
  /** Total fuel emissions for the route. */
  total: Scalars["Float"];
  /** Direct (tank to wheels) fuel emissions for the route. */
  direct: Scalars["Float"];
  /** Indirect (well to tank) fuel emissions for the route. */
  indirect: Scalars["Float"];
  /** Total fuel consumption for the route. */
  consumption: Scalars["Float"];
  /** Estimated internal combustion vehicle weight. */
  vehicle_weight: Scalars["Float"];
  /** Estimated internal combustion vehicle engine torque. */
  engine_torque: Scalars["Float"];
  /** Average powertrain efficiency. */
  powertrain_efficiency: Scalars["Float"];
  /** Average base powertrain efficiency. */
  base_powertrain_efficiency: Scalars["Float"];
  /** Speed related change in powertrain efficiency from the base. */
  powertrain_efficiency_speed_modifier: Scalars["Float"];
  /** Average speed of the vehicle. */
  average_speed: Scalars["Float"];
};

export type RouteOperationalFuelEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalFuelEmissionsdirectArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalFuelEmissionsindirectArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalFuelEmissionsconsumptionArgs = {
  unit?: Maybe<FuelUnit>;
};

export type RouteOperationalFuelEmissionsvehicle_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type RouteOperationalFuelEmissionsengine_torqueArgs = {
  unit?: Maybe<TorqueUnit>;
};

export type RouteOperationalFuelEmissionsaverage_speedArgs = {
  unit?: Maybe<SpeedUnit>;
};

/** Fuel types. */
export enum RouteOperationalFuelType {
  /** Gasoline fuel. */
  GASOLINE = "gasoline",
  /** Diesel fuel. */
  DIESEL = "diesel"
}

export type RouteOperationalInfrastructureEmissions = {
  /** Total road infrastructure emissions. */
  total: Scalars["Float"];
  /** Embedded (construction, decommissioning, etc) road infrastructure emissions. */
  embedded: Scalars["Float"];
  /** Induced road infrastructure maintenance emissions. */
  maintenance: Scalars["Float"];
};

export type RouteOperationalInfrastructureEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalInfrastructureEmissionsembeddedArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalInfrastructureEmissionsmaintenanceArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalMaintenanceEmissions = {
  /** Total maintenance emissions. */
  total: Scalars["Float"];
  /** Fluid related maintenance emissions. */
  fluids: FluidEmissions;
  /** Battery related maintenance emissions. */
  battery: Scalars["Float"];
  /** Tire related maintenance emissions. */
  tires: Scalars["Float"];
  /** Miscellaneous component maintenance emissions. */
  components: Scalars["Float"];
  /** Accident repair related maintenance emissions. */
  repair: Scalars["Float"];
};

export type RouteOperationalMaintenanceEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalMaintenanceEmissionsbatteryArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalMaintenanceEmissionstiresArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalMaintenanceEmissionscomponentsArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperationalMaintenanceEmissionsrepairArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteOperatorPreferences = {
  /** Flag indicating if an operator should be preferred or required. */
  type?: Maybe<RouteOperatorsType>;
  /** Ranking of an operator with multiple levels, each level having its own penalty value. */
  ranking?: Maybe<RouteOperatorPreferencesRanking>;
  /** Route operators that should be excluded. */
  exclude?: Maybe<Array<RouteOperatorsValue>>;
};

/** Prioritized operators for a route calculation. */
export type RouteOperatorPreferencesInput = {
  /** Flag indicating if the operators ranking should be preferred or required. */
  type: RouteOperatorsType;
  /** Ranking of an operator with multiple levels, each level having its own penalty value. */
  ranking?: Maybe<RouteOperatorPreferencesRankingInput>;
  /** Route operators that should be excluded. */
  exclude?: Maybe<Array<RouteOperatorsValueInput>>;
};

export type RouteOperatorPreferencesRanking = {
  /** Level one (most significant) for operator ranking. */
  level_one?: Maybe<Array<RouteOperatorsValue>>;
  /** Level two for operator ranking. */
  level_two?: Maybe<Array<RouteOperatorsValue>>;
  /** Level three for operator ranking. */
  level_three?: Maybe<Array<RouteOperatorsValue>>;
  /** Level four for operator ranking. */
  level_four?: Maybe<Array<RouteOperatorsValue>>;
  /** Level five for operator ranking. */
  level_five?: Maybe<Array<RouteOperatorsValue>>;
  /** Level six for operator ranking. */
  level_six?: Maybe<Array<RouteOperatorsValue>>;
  /** Level seven for operator ranking. */
  level_seven?: Maybe<Array<RouteOperatorsValue>>;
  /** Level eight for operator ranking. */
  level_eight?: Maybe<Array<RouteOperatorsValue>>;
  /** Level nine for operator ranking. */
  level_nine?: Maybe<Array<RouteOperatorsValue>>;
  /** Level ten for operator ranking. */
  level_ten?: Maybe<Array<RouteOperatorsValue>>;
};

export type RouteOperatorPreferencesRankingInput = {
  /** Level one (most significant) for operator ranking. */
  level_one?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level two for operator ranking. */
  level_two?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level three for operator ranking. */
  level_three?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level four for operator ranking. */
  level_four?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level five for operator ranking. */
  level_five?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level six for operator ranking. */
  level_six?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level seven for operator ranking. */
  level_seven?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level eight for operator ranking. */
  level_eight?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level nine for operator ranking. */
  level_nine?: Maybe<Array<RouteOperatorsValueInput>>;
  /** Level ten (least significant) for operator ranking. */
  level_ten?: Maybe<Array<RouteOperatorsValueInput>>;
};

/** Prioritized operators for a route calculation. */
export type RouteOperators = {
  /** Flag indicating if the operators ranking should be preferred or required. */
  type?: Maybe<RouteOperatorsType>;
  /** Ranking of an operator with multiple levels, each level having it's own penalty value. */
  ranking?: Maybe<RouteOperatorsRanking>;
  /** Operator IDs which should be excluded from a route. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** Prioritized operators for a route calculation. */
export type RouteOperatorsInput = {
  /** Flag indicating if the operators ranking should be preferred or required. */
  type?: Maybe<RouteOperatorsType>;
  /** Ranking of an operator with multiple levels, each level having it's own penalty value. */
  ranking?: Maybe<RouteOperatorsRankingInput>;
  /** Operator IDs which should be excluded from a route. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** Ranking configuration for prioritized operators. */
export type RouteOperatorsRanking = {
  /** Level 1 (most significant) for operator ranking. */
  level1?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 2 for operator ranking. */
  level2?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 3 for operator ranking. */
  level3?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 4 for operator ranking. */
  level4?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 5 for operator ranking. */
  level5?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 6 for operator ranking. */
  level6?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 7 for operator ranking. */
  level7?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 8 for operator ranking. */
  level8?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 9 for operator ranking. */
  level9?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 10 (least significant) for operator ranking. */
  level10?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** Ranking configuration for prioritized operators. */
export type RouteOperatorsRankingInput = {
  /** Level 1 (most significant) for operator ranking. */
  level1?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 2 for operator ranking. */
  level2?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 3 for operator ranking. */
  level3?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 4 for operator ranking. */
  level4?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 5 for operator ranking. */
  level5?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 6 for operator ranking. */
  level6?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 7 for operator ranking. */
  level7?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 8 for operator ranking. */
  level8?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 9 for operator ranking. */
  level9?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 10 (least significant) for operator ranking. */
  level10?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** Type of operator prioritization for a route. */
export enum RouteOperatorsType {
  /** Operators ranking will not be taken into account if no type is given. */
  NONE = "none",
  /** Operators given in the operators ranking will be preferred when calculating routes. */
  PREFERRED = "preferred",
  /** Operators given in the operators ranking will be required when calculating routes, all other operators will be ignored. */
  REQUIRED = "required"
}

export type RouteOperatorsValue = {
  /** ID of an operator. */
  id: Scalars["ID"];
  /** List of country codes. */
  countries?: Maybe<Array<CountryCodeAlpha2>>;
};

export type RouteOperatorsValueInput = {
  /** ID of an operator. */
  id: Scalars["ID"];
  /** List of countries in which the operator should be excluded. When not specified the operator will be excluded in every country. */
  countries: Array<CountryCodeAlpha2>;
};

export type RouteOriginFeaturePoint = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: Point;
  /** Optional object where additional properties can be specified. */
  properties?: Maybe<RouteOriginProperties>;
};

export type RouteOriginFeaturePointInput = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: PointInput;
  /** Optional object where additional properties can be specified. */
  properties?: Maybe<RouteOriginPropertiesInput>;
};

export type RouteOriginProperties = {
  /** Data about the origin location. */
  location?: Maybe<RoutePropertiesLocation>;
  /** Vehicle data at the origin location. */
  vehicle?: Maybe<RoutePropertiesVehicle>;
};

export type RouteOriginPropertiesInput = {
  /** Data about the origin location. */
  location?: Maybe<RoutePropertiesLocationInput>;
  /** Vehicle data at the origin location. */
  vehicle?: Maybe<RoutePropertiesVehicleInput>;
  /** Station data at the origin location. */
  station?: Maybe<RoutePropertiesStationInput>;
};

export type RoutePath = {
  /** GeoJSON location of a route path segment. */
  location?: Maybe<Point>;
  /** Elevation (altitude) in meters. */
  elevation?: Maybe<Scalars["Int"]>;
  /** Average speed, in km/h, for this route path segment. */
  averageSpeed?: Maybe<Scalars["Float"]>;
  /** Recommended speed, in km/h for this route path segment to optimise the consumption. */
  recommendedSpeed?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh, of a route path segment. */
  consumption?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh per km, of a route path segment. */
  consumptionPerKm?: Maybe<Scalars["Float"]>;
  /** Distance, in meters, of a route path segment. */
  distance?: Maybe<Scalars["Float"]>;
  /** Duration, in seconds, of a route path segment. */
  duration?: Maybe<Scalars["Float"]>;
  /** State of charge, in kWh, of a route path segment. */
  stateOfCharge?: Maybe<Scalars["Float"]>;
};

export type RoutePropertiesLocation = {
  /** Name that should overwrite the name that is automatically assigned to this location (for example: address or station name). */
  name?: Maybe<Scalars["String"]>;
  /** Duration to stay at this point. */
  stop_duration?: Maybe<Scalars["Int"]>;
  /** Temperature. */
  temperature?: Maybe<Scalars["Float"]>;
  /** Air pressure. */
  air_pressure?: Maybe<Scalars["Float"]>;
  /** Solar irradiance. */
  solar_irradiance?: Maybe<Scalars["Float"]>;
  /** Country. */
  country?: Maybe<Array<CountryCodeAlpha2>>;
};

export type RoutePropertiesLocationInput = {
  /** Name that should overwrite the name that is automatically assigned to this location (for example: address or station name). */
  name?: Maybe<Scalars["String"]>;
  /** Duration to stay at this point. */
  stop_duration?: Maybe<Scalars["Int"]>;
};

export type RoutePropertiesStation = {
  /** ID of the station. When provided and valid, the coordinates of this station will be used. */
  station_id?: Maybe<Scalars["ID"]>;
  /** External ID of the station. When provided and valid, the coordinates of this station will be used. */
  external_station_id?: Maybe<Scalars["ID"]>;
};

export type RoutePropertiesStationInput = {
  /** ID of the station. When provided and valid, the coordinates of this station will be used. */
  station_id?: Maybe<Scalars["ID"]>;
  /** External ID of the station. When provided and valid, the coordinates of this station will be used. */
  external_station_id?: Maybe<Scalars["ID"]>;
};

export type RoutePropertiesVehicle = {
  /** Number of occupants present in the vehicle. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Combined weight of the occupants. */
  total_occupant_weight?: Maybe<TotalOccupantWeight>;
  /** Weight of the cargo. */
  total_cargo_weight?: Maybe<TotalCargoWeight>;
};

export type RoutePropertiesVehicleInput = {
  /** Number of occupants present in the vehicle. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Combined weight of the occupants. */
  total_occupant_weight?: Maybe<TotalOccupantWeightInput>;
  /** Weight of the cargo. */
  total_cargo_weight?: Maybe<TotalCargoWeightInput>;
};

export type RouteResponse = {
  /** ID of a route calculation. */
  id: Scalars["ID"];
  /** Status of a route. */
  status: RouteStatus;
  /** Recommended route. */
  recommended?: Maybe<RouteDetails>;
  /** Meta data for a route. */
  meta: RouteMetadata;
  /** Route request. */
  request_input: CreateRoute;
  /** Region of a route calculation. */
  region: Scalars["String"];
};

/** Scheduled charge stop along a route. */
export type RouteScheduledChargeStop = {
  /** List of amenity types. */
  types?: Maybe<Array<Maybe<AmenityType>>>;
  /** Duration at the amenity, in seconds. */
  duration?: Maybe<Scalars["Int"]>;
  /** Maximum allowed offset from the stop_after value in seconds. Default is 1800. */
  offset?: Maybe<Scalars["Int"]>;
  /** Desired drive time before a scheduled stop after leaving the previous stop, in seconds. */
  stop_after?: Maybe<Scalars["Int"]>;
  /** Maximum distance from a station to an amenity, in meters. */
  max_distance_from_station?: Maybe<Scalars["Int"]>;
};

/** The season of the route. */
export enum RouteSeason {
  /** We suppose it is summer and we have the best weather conditions. */
  SUMMER = "summer",
  /** We suppose it is winter and we have the worst weather conditions. */
  WINTER = "winter",
  /** We fetch the current weather conditions. */
  CURRENT = "current"
}

export type RouteStationsAlong = {
  /** The ID of station. */
  id?: Maybe<Scalars["String"]>;
  /** Geojson location of a station. */
  location?: Maybe<Point>;
  /** Speed of a station. A station along a route can be either fast or turbo. */
  speed?: Maybe<StationSpeedType>;
  /** Status of a station. */
  status?: Maybe<ChargerStatus>;
  /** The station uses a preferred operator. */
  preferredOperator?: Maybe<Scalars["Boolean"]>;
  /** Distance in meters between station and route path. */
  distance?: Maybe<Scalars["Int"]>;
};

/** The status of a route. The status can be pending, processing, done, not_found or error. */
export enum RouteStatus {
  /** Route is queued and pending processing. Temporary status. */
  PENDING = "pending",
  /** We are computing the route for your request. Temporary status. */
  PROCESSING = "processing",
  /** We finished computing the route, with a result. Final status. */
  DONE = "done",
  /** We finished computing the route, without any result. Final status. */
  NOT_FOUND = "not_found",
  /** An error occurred while computing the route. Final status. */
  ERROR = "error"
}

export type RouteStep = {
  /** ID of a step. */
  id?: Maybe<Scalars["ID"]>;
  /** Type of a step. */
  type?: Maybe<StepType>;
  /** Polyline containing encoded coordinates. */
  polyline?: Maybe<Scalars["String"]>;
  /** Distance from the start to the end of a step, in meters. */
  distance?: Maybe<Scalars["Int"]>;
  /** Total drive time from the start to the end of a step, in seconds. */
  duration?: Maybe<Scalars["Int"]>;
  /** Total energy used in a step in kWh. */
  consumption?: Maybe<Scalars["Float"]>;
};

export type RouteSteppolylineArgs = {
  decimals?: Maybe<Scalars["Int"]>;
};

/** Tags of a route. */
export enum RouteTagType {
  ROAD = "road",
  HIGHWAY = "highway",
  TOLL = "toll",
  FERRY = "ferry",
  WALKING = "walking",
  CROSSBORDER = "crossborder"
}

export type RouteVehicle = {
  /** ID of the vehicle. */
  id: Scalars["ID"];
  /** EV battery specific configuration. */
  battery?: Maybe<RouteVehicleBattery>;
  /** Charging configuration. */
  charging?: Maybe<RouteVehicleCharging>;
  /** Average tire pressures of all wheels, starting from the front side (right to left) and then to the rear. */
  tire_pressure?: Maybe<TirePressure>;
  /** Value of the vehicle's odometer. */
  odometer?: Maybe<Scalars["Float"]>;
  /** Value of the auxiliary power consumption of the vehicle. */
  auxiliary_consumption?: Maybe<AuxiliaryConsumption>;
  /** Flag which indicates if climate control is on. */
  climate?: Maybe<Scalars["Boolean"]>;
  /** Vehicle Heat Pump configuration. */
  heat_pump: HeatPumpMode;
  /** Vehicle cabin configuration. */
  cabin: RouteVehicleCabin;
  /** Revolutions per minute of the motor, a measure of the rotational speed of the motor's rotor component. */
  motor_rpm?: Maybe<Scalars["Int"]>;
  /** Value of the outside temperature. */
  outside_temperature?: Maybe<Temperature>;
  /** Vehicle is in park, neutral or turned off. */
  is_parked?: Maybe<Scalars["Boolean"]>;
  /** Value of the vehicle's speed. */
  vehicle_speed?: Maybe<VehicleSpeed>;
  /** Current heading in degrees. */
  heading?: Maybe<Scalars["Float"]>;
};

export type RouteVehicleBattery = {
  /** Battery capacity. */
  capacity: StateOfCharge;
  /** State of charge. */
  state_of_charge: StateOfCharge;
  /** Minimum final battery state of charge. */
  final_state_of_charge: StateOfCharge;
  /** Temperature of the battery. */
  temperature?: Maybe<Temperature>;
  /** Battery current in ampere. */
  current?: Maybe<Scalars["Float"]>;
  /** Battery voltage in volts. */
  voltage?: Maybe<Scalars["Float"]>;
  /** Value of the positive or negative power. When negative, the vehicle is charging. */
  power?: Maybe<Scalars["Float"]>;
  /** Indicates if the vehicle is charging. */
  is_charging?: Maybe<Scalars["Boolean"]>;
};

/** EV battery specific configuration for a create route mutation. */
export type RouteVehicleBatteryInput = {
  /** Battery capacity. */
  capacity?: Maybe<StateOfChargeInput>;
  /** Battery state of charge. */
  state_of_charge?: Maybe<StateOfChargeInput>;
  /** Minimum battery state of charge. */
  final_state_of_charge?: Maybe<StateOfChargeInput>;
  /** Battery temperature. */
  temperature?: Maybe<BatteryTemperatureInput>;
  /** Battery current in ampere. */
  current?: Maybe<Scalars["Float"]>;
  /** Battery voltage in volts. */
  voltage?: Maybe<Scalars["Float"]>;
  /** Vehicle power. */
  power?: Maybe<Scalars["Float"]>;
  /** Vehicle is currently charging. */
  is_charging?: Maybe<Scalars["Boolean"]>;
};

export type RouteVehicleCabin = {
  /** Flag which indicates if the vehicle cabin was preconditioned for the desired temperature. */
  is_preconditioned: Scalars["Boolean"];
  /** Desired cabin temperature. Default is 20 degrees Celsius or 68 degrees Fahrenheit. */
  desired_temperature: Temperature;
};

export type RouteVehicleCabinInput = {
  /** Flag which indicates if the vehicle cabin was preconditioned for the desired temperature. */
  is_preconditioned?: Scalars["Boolean"];
  /** Desired cabin temperature. Default is 20 degrees Celsius or 68 degrees Fahrenheit. */
  desired_temperature: TemperatureInput;
};

export type RouteVehicleCharging = {
  /** Mode that indicates if the charging time is optimized or if always charged to the maximum capacity. */
  mode: ChargeMode;
  /** Minimum desired power of chargers. */
  minimum_power: Scalars["Int"];
  /** Percentage for the minimum limit of the battery's capacity before a recharge. The value should be between 0 and 60. Defaults to 10. */
  risk_margin: Scalars["Int"];
  /** Supported connectors. */
  connectors?: Maybe<Array<RouteVehicleChargingConnector>>;
  /** Supported adapters. */
  adapters?: Maybe<Array<RouteVehicleChargingConnector>>;
};

export type RouteVehicleChargingConnector = {
  /** Type of the plug. */
  standard: ConnectorType;
  /** Maximum charging speed for the plug. */
  max_charge_speed: ChargeSpeed;
};

export type RouteVehicleChargingConnectorInput = {
  /** Plug type. */
  standard: ConnectorType;
  /** Maximum charging speed for this plug. */
  max_charge_speed: ChargeSpeedInput;
};

export type RouteVehicleChargingInput = {
  /** Mode that indicates if the charging time is optimized or if always charged to the maximum capacity. */
  mode?: Maybe<ChargeMode>;
  /** Minimum desired power of chargers. */
  minimum_power?: Maybe<Scalars["Float"]>;
  /** Percentage representing the minimum value of the state of charge at a next charge stop. The value should be between 0 and 60. */
  risk_margin?: Maybe<Scalars["Int"]>;
  /** Supported connectors. */
  connectors?: Maybe<Array<RouteVehicleChargingConnectorInput>>;
  /** Supported adapters. */
  adapters?: Maybe<Array<RouteVehicleChargingConnectorInput>>;
};

export type RouteVehicleEmissions = {
  /** Total co2e emissions. */
  total: Scalars["Float"];
  /** Total co2e emissions from vehicle operational processes calculated using the methodology in section 5.2.2 of ISO 14083:2023 and default emissions intensities in Annex K of the same document. */
  iso_14083_2023: Scalars["Float"];
  /** Embedded emissions, for example emissions produced during manufacturing, transportation, and delivery. */
  embedded: RouteEmbeddedEmissions;
  /** Operational emissions. */
  operational: RouteVehicleOperationalEmissions;
  /** End of life emissions. */
  end_of_life: RouteEndOfLifeEmissions;
  /** Emissions info for the legs in the same order as in the route. */
  legs: Array<RouteVehicleLegEmissions>;
};

export type RouteVehicleEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteVehicleEmissionsiso_14083_2023Args = {
  unit?: Maybe<EmissionUnit>;
};

/** Vehicle specific input for a create route mutation. */
export type RouteVehicleInput = {
  /** ID of the vehicle. */
  id: Scalars["ID"];
  /** EV battery specific configuration. */
  battery?: Maybe<RouteVehicleBatteryInput>;
  /** Charging configuration. */
  charging?: Maybe<RouteVehicleChargingInput>;
  /** Average tire pressures of all wheels. */
  tire_pressure?: Maybe<TirePressureInput>;
  /** Odometer (mileage) reading. */
  odometer?: Maybe<OdometerInput>;
  /** Average auxiliary power consumption. */
  auxiliary_consumption?: Maybe<AuxiliaryConsumptionInput>;
  /** Flag which indicates if climate control is on. */
  climate?: Maybe<Scalars["Boolean"]>;
  /** Vehicle Heat Pump configuration. */
  heat_pump?: Maybe<HeatPumpMode>;
  /** Vehicle cabin configuration for creating the route. */
  cabin?: Maybe<RouteVehicleCabinInput>;
  /** Outside temperature. */
  outside_temperature?: Maybe<OutsideTemperatureInput>;
  /** Vehicle is in park, neutral or turned off. */
  is_parked?: Maybe<Scalars["Boolean"]>;
  /** Vehicle speed. */
  vehicle_speed?: Maybe<VehicleSpeedInput>;
  /** Current heading in degrees. */
  heading?: Maybe<Scalars["Float"]>;
};

export type RouteVehicleLegEmissions = {
  /** Total co2e emissions for the leg. */
  total: Scalars["Float"];
  /** Total leg co2e emissions from vehicle operational processes using the methodology in section 5.2.2 of ISO 14083:2023 and default emissions intensities in Annex K of the same document. */
  iso_14083_2023: Scalars["Float"];
  /** Embedded emissions, for example emissions produced during manufacturing, transportation, and delivery. */
  embedded: RouteEmbeddedEmissions;
  /** Operational emissions for the leg. */
  operational: RouteVehicleLegOperationalEmissions;
  /** End of life emissions for the leg. */
  end_of_life: RouteEndOfLifeEmissions;
};

export type RouteVehicleLegEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteVehicleLegEmissionsiso_14083_2023Args = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteVehicleLegOperationalEmissions = {
  /** Total operational emissions for the leg. */
  total: Scalars["Float"];
  /** Electricity emissions data for the leg. */
  electricity: RouteLegOperationalElectricityEmissions;
  /** Total road infrastructure emissions for the leg. */
  infrastructure: RouteOperationalInfrastructureEmissions;
  /** Total maintenance emissions for the leg. */
  maintenance: RouteOperationalMaintenanceEmissions;
};

export type RouteVehicleLegOperationalEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteVehicleOperationalEmissions = {
  /** Total operational emissions. */
  total: Scalars["Float"];
  /** Electricity emissions. */
  electricity: RouteOperationalElectricityEmissions;
  /** Road infrastructure emissions. */
  infrastructure: RouteOperationalInfrastructureEmissions;
  /** Maintenance emissions. */
  maintenance: RouteOperationalMaintenanceEmissions;
};

export type RouteVehicleOperationalEmissionstotalArgs = {
  unit?: Maybe<EmissionUnit>;
};

export type RouteViaFeaturePoint = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: Point;
  /** Optional object where additional properties can be specified. */
  properties?: Maybe<RouteViaProperties>;
};

export type RouteViaFeaturePointInput = {
  /** Feature type. */
  type: FeatureType;
  /** Geometry of the feature. */
  geometry: PointInput;
  /** Optional object where additional properties can be specified. */
  properties?: Maybe<RouteViaPropertiesInput>;
};

export type RouteViaProperties = {
  /** Location data of the via point. */
  location: RoutePropertiesLocation;
  /** Vehicle data of the via point. */
  vehicle: RoutePropertiesVehicle;
  /** Station data of the via point. */
  station: RoutePropertiesStation;
};

export type RouteViaPropertiesInput = {
  /** Location data of the via point. */
  location: RoutePropertiesLocationInput;
  /** Vehicle data of the via point. */
  vehicle: RoutePropertiesVehicleInput;
  /** Station data of the via point. */
  station: RoutePropertiesStationInput;
};

/** Scheduled charge stop along a route. */
export type ScheduledChargeStopInput = {
  /** List of amenity types. */
  types: Array<AmenityType>;
  /** Duration at the amenity, in seconds. The value should be between 900 and 86400. */
  duration: Scalars["Int"];
  /** Maximum allowed offset from the stop_after value in seconds. */
  offset?: Maybe<Scalars["Int"]>;
  /** Desired drive time for a scheduled stop after leaving the origin point, in seconds. */
  stop_after: Scalars["Int"];
  /** Maximum distance from a station to an amenity, in meters. The value should be between 0 and 1000. */
  max_distance_from_station?: Maybe<Scalars["Int"]>;
};

export enum SortDirection {
  ASCENDING = "ascending",
  DESCENDING = "descending"
}

/** Speed units. */
export enum SpeedUnit {
  /** Return the speed in kilometers per hour. */
  KILOMETERS_PER_HOUR = "kilometers_per_hour",
  /** Return the speed in miles per hour. */
  MILES_PER_HOUR = "miles_per_hour"
}

/** Standards(plug type) stats model */
export type StandardStats = {
  /** The plug type */
  type?: Maybe<ConnectorType>;
  /** The total number of stations with the specified plug */
  total?: Maybe<Scalars["Int"]>;
};

export type StateOfCharge = {
  /** Value of the state of charge of the vehicle. */
  value: Scalars["Float"];
  /** Type of the state of charge of the vehicle. */
  type: StateOfChargeUnit;
  /** Source of inputted data. */
  source: TelemetryInputSource;
};

export type StateOfChargeInput = {
  /** Value of the state of charge of the vehicle. */
  value: Scalars["Float"];
  /** Type of the state of charge of the vehicle. */
  type: StateOfChargeUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

/** State of charge unit. */
export enum StateOfChargeUnit {
  /** Return the state of charge in kilometers. */
  KILOMETER = "kilometer",
  /** Return the state of charge in miles. */
  MILE = "mile",
  /** Return the state of charge in kilowatt hours. */
  KILOWATT_HOUR = "kilowatt_hour",
  /** Return the state of charge as a percentage. */
  PERCENTAGE = "percentage"
}

/** Station data which extends OCPI Location. */
export type Station = {
  /** Unique ID of a station. This property is OCPI-compliant. */
  id: Scalars["ID"];
  /** ISO-3166 alpha-2 country code of a station. This property is OCPI-compliant. */
  country_code?: Maybe<Scalars["String"]>;
  /** CPO ID of a CPO that 'owns' this station (following the ISO-15118 standard). This property is OCPI-compliant. */
  party_id?: Maybe<Scalars["String"]>;
  /**
   * Defines if a location may be published on a website or app etc.
   * When this is set to false, only tokens identified in the field: publish_allowed_to are allowed to show this location.
   * When the same location has EVSEs that may be published and may not be published, two 'locations' should be created. This property is OCPI-compliant.
   */
  publish?: Maybe<Scalars["Boolean"]>;
  /** Name of a charging station. This property is OCPI-compliant. */
  name?: Maybe<Scalars["String"]>;
  /** Street/block name and house number if available. This property is OCPI-compliant. */
  address?: Maybe<Scalars["String"]>;
  /** City or town. This property is OCPI-compliant. */
  city?: Maybe<Scalars["String"]>;
  /** Postal code of a location, may only be omitted when a location has no postal code: in some countries charging locations at highways don’t have postal codes. This property is OCPI-compliant. */
  postal_code?: Maybe<Scalars["String"]>;
  /** State or province of a location, only to be used when relevant. This property is OCPI-compliant. */
  state?: Maybe<Scalars["String"]>;
  /** ISO 3166-1 alpha-3 code for the country of this station. This property is OCPI-compliant. */
  country?: Maybe<Scalars["String"]>;
  /** Coordinates of a location. This property is OCPI-compliant. */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** Geographical location of related points relevant to a user. This property is OCPI-compliant. */
  related_locations?: Maybe<Array<Maybe<OCPIAdditionalGeoLocation>>>;
  /** Type of parking at a charge point location. This property is OCPI-compliant. */
  parking_type?: Maybe<OCPIParkingType>;
  /** EVSEs that belong to a station. This property is OCPI-compliant. */
  evses?: Maybe<Array<Maybe<EVSE>>>;
  /** Human-readable directions on how to reach a station. This property is OCPI-compliant. */
  directions?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** Information about an operator. This property is OCPI-compliant. */
  operator?: Maybe<Operator>;
  /** Information about a suboperator if applicable. This property is OCPI-compliant. */
  suboperator?: Maybe<Operator>;
  /** Information about an owner if available. This property is OCPI-compliant. */
  owner?: Maybe<Operator>;
  /** Facilities a charging station belongs to. This property is OCPI-compliant. */
  facilities?: Maybe<Array<Maybe<OCPIFacility>>>;
  /** Value from the IANA time zone database representing the time zone of a location. Examples: "Europe/Oslo", "Europe/Zurich". (http://www.iana.org/time-zones). This property is OCPI-compliant. */
  time_zone?: Maybe<Scalars["String"]>;
  /** Times when an EVSEs at a location can be accessed for charging. This property is OCPI-compliant. */
  opening_times?: Maybe<OCPIHours>;
  /** Indicates if the EVSEs are still charging outside the opening hours. E.g. when a parking garage closes its barriers overnight, is it allowed to charge till the next morning? Default: true. This property is OCPI-compliant. */
  charging_when_closed?: Maybe<Scalars["Boolean"]>;
  /** Links to images related to a location such as photos or logos. This property is OCPI-compliant. */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Details of the energy supplied at a location. This property is OCPI-compliant. */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** Timestamp when a location, or one of its EVSEs or Connectors were last updated (or created). This property is OCPI-compliant. */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** ID provided by a station data source. */
  external_id?: Maybe<Scalars["String"]>;
  /** GeoJSON location of a charging station. */
  location?: Maybe<Point>;
  /** Elevation (altitude) level. */
  elevation?: Maybe<Scalars["Int"]>;
  /** Groups of EVSEs by power and type. */
  chargers?: Maybe<Array<Maybe<Charger>>>;
  /** Amenities located at this location. */
  amenities?: Maybe<Scalars["JSON"]>;
  /** Enriched information about the physical address of a station. */
  physical_address?: Maybe<Address>;
  /** Describes the heavy vehicle properties at the location. */
  heavy_vehicles_properties?: Maybe<StationHeavyVehiclesProperties>;
  /** Describes the heavy vehicle restrictions at the location. */
  heavy_vehicles_restrictions?: Maybe<StationHeavyVehiclesRestrictions>;
  /** Describes the vehicle restrictions at the location. */
  vehicle_restrictions?: Maybe<StationVehicleRestrictions>;
  /** Type of location where the charge point is located. For example, shop. */
  location_category?: Maybe<Scalars["String"]>;
  /** Coordinates for the location's entrances in decimal degrees. If available, there can be more than one entrances to the location. */
  entrance_for_navigation?: Maybe<Array<OCPIAdditionalGeoLocation>>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer. */
  properties?: Maybe<Scalars["JSON"]>;
  /** A flag that indicates if a station has real-time information about the availability of its connectors. */
  realtime?: Maybe<Scalars["Boolean"]>;
  /**
   * A flag that indicates if a station is on private property.
   * @deprecated In favor of access_type.
   */
  private?: Maybe<Scalars["Boolean"]>;
  /** Connectors grouped by power. */
  power?: Maybe<Scalars["JSON"]>;
  /**
   * Station availability.
   * @deprecated predicted_availability, no value will be sent. Deprecated in favor of predicted_occupancy.
   */
  predicted_availability?: Maybe<Array<Maybe<StationPredictedAvailability>>>;
  /** Predicted station occupancy. */
  predicted_occupancy?: Maybe<Array<Maybe<StationPredictedOccupancy>>>;
  /** Charging speed for a station. */
  speed?: Maybe<StationSpeedType>;
  /** Global status for a station. */
  status?: Maybe<ChargerStatus>;
  /** Custom properties of a station. These are vendor specific and will return null values on the fields that are not supported by your station database. */
  custom_properties?: Maybe<StationCustomProperties>;
  /** Review of a station. */
  review?: Maybe<ReviewStats>;
  /** List of eMSP cards accepted at a charging station. */
  roaming?: Maybe<Array<Maybe<StationRoaming>>>;
  /** Phone number for assistance at a charging station. */
  support_phone_number?: Maybe<Scalars["String"]>;
  /** Charging behavior of a station. */
  charging_behaviour?: Maybe<ChargingBehaviour>;
  /** Shows how reliable a charging station is (1 to 5; 1 = unreliable, 5 = reliable), taking into account the charging behaviour history and error values. */
  reliability_score?: Maybe<Scalars["Int"]>;
  /** Indicates the authentication and payment methods. */
  adhoc_authorisation_payment_method?: Maybe<
    Array<StationAdhocAuthorisationPaymentMethod>
  >;
  /** Type of access to the charging station. */
  access_type?: Maybe<AccessType>;
};

export enum StationAdhocAuthorisationPaymentMethod {
  /** Authentication by car through Plug and Charge. */
  AUTH_BY_CAR_PLUG_AND_CHARGE = "AUTH_BY_CAR_PLUG_AND_CHARGE",
  /** Apple Pay. */
  ONLINE_APPLE_PAY = "ONLINE_APPLE_PAY",
  /** Terminal in app. */
  TERMINAL_IN_APP = "TERMINAL_IN_APP",
  /** PayPal. */
  ONLINE_PAYPAL = "ONLINE_PAYPAL",
  /** Service Provider RFID Card. */
  SERVICE_PROVIDER_RFID_CARD = "SERVICE_PROVIDER_RFID_CARD",
  /** Terminal QR Code. */
  TERMINAL_QR_CODE = "TERMINAL_QR_CODE",
  /** Terminal Credit Card. */
  TERMINAL_CREDIT_CARD = "TERMINAL_CREDIT_CARD",
  /** Terminal Debit Card. */
  TERMINAL_DEBIT_CARD = "TERMINAL_DEBIT_CARD",
  /** Terminal SMS. */
  TERMINAL_SMS = "TERMINAL_SMS",
  /** Credit Card. */
  ONLINE_CREDIT_CARD = "ONLINE_CREDIT_CARD",
  /** Other. */
  OTHER_OTHER = "OTHER_OTHER",
  /** Terminal Contactless. */
  TERMINAL_CONTACTLESS = "TERMINAL_CONTACTLESS",
  /** Google Pay. */
  ONLINE_GOOGLE_PAY = "ONLINE_GOOGLE_PAY",
  /** Bank Payment. */
  ONLINE_BANK_PAYMENT = "ONLINE_BANK_PAYMENT",
  /** Authentication by car through Auto Charge. */
  AUTH_BY_CAR_AUTOCHARGE = "AUTH_BY_CAR_AUTOCHARGE"
}

/** Filter which can be applied to retrieve the station around list action. */
export type StationAroundFilter = {
  /** GeoJSON Point of the center of the around me circle. */
  location?: Maybe<PointInput>;
  /** Distance, in meters, to search around. */
  distance?: Maybe<Scalars["Int"]>;
  /** Powers in kW. */
  powers?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Amenities available near a station. */
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  /** Station speed. */
  power_groups?: Maybe<Array<Maybe<StationSpeedType>>>;
  /** Station socket or plug standards. */
  connectors?: Maybe<Array<Maybe<ConnectorType>>>;
  /** Flag that allows you to return only available stations. */
  available_only?: Maybe<Scalars["Boolean"]>;
  /** Flag indicating if only stations that are owned by an operator from a clients ranking list are returned. */
  preferred_operator?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: Replaced by filter & search params. */
export type StationAroundQuery = {
  /** GeoJSON Point of the center of the around me circle. */
  location?: Maybe<PointInput>;
  /** Distance, in meters, to search around. */
  distance?: Maybe<Scalars["Int"]>;
  /** Power in kW. */
  power?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Amenities available near a station. Values: restaurant, bathroom, supermarket, playground, coffee, shopping, museum, hotel, park. */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type StationCustomProperties = {
  /**
   * List of eMSP cards accepted at a charging station.
   * @deprecated In favor of station.roaming.
   */
  roaming?: Maybe<Array<Maybe<StationRoaming>>>;
  /**
   * Phone number for assistance at a charging station.
   * @deprecated In favor of station.support_phone_number.
   */
  support_phone_number?: Maybe<Scalars["String"]>;
  /**
   * Charging behavior of a station.
   * @deprecated In favor of station.charging_behaviour.
   */
  charging_behaviour?: Maybe<ChargingBehaviour>;
  /**
   * Shows how reliable a charging station is (1 to 5; 1 = unreliable, 5 = reliable), taking into account the charging behaviour history and error values.
   * @deprecated In favor of station.reliability_score.
   */
  reliability_score?: Maybe<Scalars["Int"]>;
  /**
   * List of available ad hoc payment methods.
   * @deprecated In favor of station.adhoc_authorisation_payment_method.
   */
  adhoc_authorisation_method?: Maybe<Array<Maybe<AdhocAuthorisationMethod>>>;
  /**
   * Predicted station occupancy.
   * @deprecated In favor of station.predicted_occupancy.
   */
  predicted_occupancy?: Maybe<Array<Maybe<StationPredictedOccupancy>>>;
  /**
   * Type of access to the charging station.
   * @deprecated In favor of station.charging_behaviour.
   */
  access_type?: Maybe<AccessType>;
  /** Custom station properties for OICP databases such as the global Hubject database. Station databases that not follow the OICP standard return null values. */
  oicp?: Maybe<OICPStationCustomProperties>;
};

/** Describes the heavy vehicle properties at the location. */
export type StationHeavyVehiclesProperties = {
  /** Indicates whether the location was constructed mainly for the purpose of heavy vehicles like trucks. */
  is_dedicated?: Maybe<Scalars["Boolean"]>;
  /** List of facilities in the location. */
  facilities?: Maybe<Array<HeavyVehiclesFacility>>;
  /** Indicates whether the location is suitable for trucks with trailers. */
  is_trailer_accessible?: Maybe<Scalars["Boolean"]>;
  /** Indicates whether the location is drive-through. */
  is_drive_through?: Maybe<Scalars["Boolean"]>;
  /** Indicates whether the location allows charging of heavy vehicles transporting dangerous goods. */
  allows_dangerous_goods?: Maybe<Scalars["Boolean"]>;
  /** Indicates whether the location is suitable for rigid heavy vehicles. */
  allows_rigid_vehicles?: Maybe<Scalars["Boolean"]>;
  /** Indicates whether the location allows overnight charging of heavy vehicles. */
  allows_overnight_parking?: Maybe<Scalars["Boolean"]>;
};

/** Describes the heavy vehicle restrictions at the location. */
export type StationHeavyVehiclesRestrictions = {
  /** Maximum height of the heavy vehicle that is allowed to be parked at the charging station. */
  height?: Maybe<Scalars["Float"]>;
  /** Maximum width of the heavy vehicle that is allowed to be parked at the charging station. */
  width?: Maybe<Scalars["Float"]>;
  /** Maximum length of the heavy vehicle that is allowed to be parked at the charging station. */
  length?: Maybe<Scalars["Float"]>;
  /** Maximum mass of the heavy vehicle that is allowed to be parked at the charging station. */
  mass?: Maybe<Scalars["Float"]>;
  /** Allowed N (EU) types of heavy vehicles. */
  allowed_types_EU?: Maybe<Array<HeavyVehiclesEUType>>;
};

/** Describes the heavy vehicle restrictions at the location. */
export type StationHeavyVehiclesRestrictionsheightArgs = {
  unit?: Maybe<DimensionUnit>;
};

/** Describes the heavy vehicle restrictions at the location. */
export type StationHeavyVehiclesRestrictionswidthArgs = {
  unit?: Maybe<DimensionUnit>;
};

/** Describes the heavy vehicle restrictions at the location. */
export type StationHeavyVehiclesRestrictionslengthArgs = {
  unit?: Maybe<DimensionUnit>;
};

/** Describes the heavy vehicle restrictions at the location. */
export type StationHeavyVehiclesRestrictionsmassArgs = {
  unit?: Maybe<WeightUnit>;
};

/** Filter which can be applied to retrieve the station list action. */
export type StationListFilter = {
  /** Powers in kW. */
  powers?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Amenities available near a station. */
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  /** Station speed. */
  power_groups?: Maybe<Array<Maybe<StationSpeedType>>>;
  /** Station socket or plug standards. */
  connectors?: Maybe<Array<Maybe<ConnectorType>>>;
  /** Flag that allows you to return only available stations. */
  available_only?: Maybe<Scalars["Boolean"]>;
  /** Flag indicating if only stations that are owned by an operator from a clients ranking list are returned. */
  preferred_operator?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: Replaced by filter & search params. */
export type StationListQuery = {
  /** ID of the station. */
  id?: Maybe<Scalars["ID"]>;
  /** External ID of the station provided by the station data source. */
  external_id?: Maybe<Scalars["String"]>;
  /** Exact name. */
  name?: Maybe<Scalars["String"]>;
};

/** Station availability for each weekday and hour. */
export type StationPredictedAvailability = {
  /** Number of weekday from 1 (monday) to 7 (sunday). */
  weekday?: Maybe<Scalars["Int"]>;
  /** The prediction for each hour 0-23 from 1 to 5 (1 - very busy ... 5 very quiet (free)). */
  prediction?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** Station occupancy for each weekday and hour. */
export type StationPredictedOccupancy = {
  /** Number of weekday from 1 (monday) to 7 (sunday). */
  weekday?: Maybe<Scalars["Int"]>;
  /** Occupancy on a scale from 1 to 10, where 1 means free for charging and 10 means fully occupied. */
  occupancy?: Maybe<Scalars["Int"]>;
  /** Start of the period of the occupancy prediction (string of 'hh-mmZ' format). */
  period_begin?: Maybe<Scalars["String"]>;
  /** End of the period of the occupancy prediction (string of 'hh-mmZ' format). */
  period_end?: Maybe<Scalars["String"]>;
};

export type StationRoaming = {
  /** Unique id for a provider. It is created by Eco-Movement, and it is stable. */
  partner_id?: Maybe<Scalars["String"]>;
  /**
   * Unique E-Mobility Account Identifier (eMA ID) for a provider.
   * It is created by Eco-Movement by combining the country code where the charging station is located, and the party id of the provider.
   * For example, NL-ECO. Note: A provider can have multiple eMA IDs.
   * For example, if a company named 'Example Company A' acquired 'Example Company B' and owns the charging stations of Example Company B,
   * then this attribute maps Example Company B's eMA IDs to Example Company A's eMA IDs. For example, ['NL-EXA', 'NL-EXB'].
   */
  ema_id?: Maybe<Array<Scalars["String"]>>;
  /** Name of the EMSP provider. */
  emsp?: Maybe<Scalars["String"]>;
  /** Name of the card accepted at a charging station. */
  card?: Maybe<Scalars["String"]>;
  /** Link to native Android app for card accepted at a charging station. */
  android_app_link?: Maybe<Scalars["String"]>;
  /** Link to native iOS app for card accepted at a charging station. */
  ios_app_link?: Maybe<Scalars["String"]>;
};

/** The station speed type. */
export enum StationSpeedType {
  /** Slow charging (below 43 kW). */
  SLOW = "slow",
  /** Fast charging stations (above 43 kW and below 150 kW). */
  FAST = "fast",
  /** Ultra fast charging stations (above 150 kW). */
  TURBO = "turbo"
}

/** The station stats model */
export type StationStats = {
  /** Stations count grouped by standards */
  standards?: Maybe<Array<Maybe<StandardStats>>>;
  /** Stations count grouped by power */
  power?: Maybe<Array<Maybe<PowerStats>>>;
  /** Stations count grouped by amenities */
  amenities?: Maybe<Array<Maybe<AmenityStats>>>;
};

/** Describes the vehicle restrictions at the location. */
export type StationVehicleRestrictions = {
  /** Maximum weight for a vehicle that is allowed at the location. */
  mass?: Maybe<Scalars["Float"]>;
  /** Maximum width for a vehicle that is allowed at the location. */
  width?: Maybe<Scalars["Float"]>;
  /** Maximum height for a vehicle that is allowed at the location. */
  height?: Maybe<Scalars["Float"]>;
  /** Maximum length for a vehicle that is allowed at the location. */
  length?: Maybe<Scalars["Float"]>;
};

/** Describes the vehicle restrictions at the location. */
export type StationVehicleRestrictionsmassArgs = {
  unit?: Maybe<WeightUnit>;
};

/** Describes the vehicle restrictions at the location. */
export type StationVehicleRestrictionswidthArgs = {
  unit?: Maybe<DimensionUnit>;
};

/** Describes the vehicle restrictions at the location. */
export type StationVehicleRestrictionsheightArgs = {
  unit?: Maybe<DimensionUnit>;
};

/** Describes the vehicle restrictions at the location. */
export type StationVehicleRestrictionslengthArgs = {
  unit?: Maybe<DimensionUnit>;
};

/** Types of a route step. */
export enum StepType {
  /** This step is a road. */
  ROAD = "road",
  /** This step is a highway. */
  HIGHWAY = "highway",
  /** This step is a toll road. */
  TOLL = "toll",
  /** This step is a ferry. */
  FERRY = "ferry",
  /** This step is reachable by walking. */
  WALKING = "walking",
  /** This step is a crossborder. */
  CROSSBORDER = "crossborder"
}

export type Subscription = {
  /** [BETA] Subscribe to a connected vehicle. */
  connectedVehicle?: Maybe<ConnectedVehicle>;
  /** Subscribe to an isoline in order to receive updates. */
  isoline?: Maybe<Isoline>;
  /** [BETA] Subscribe to navigation session system event updates. We strongly recommend using this at all times to not miss any updates */
  navigationUpdatedById?: Maybe<Navigation>;
  /** Subscription for a specific route was updated in the system event */
  routeUpdatedById?: Maybe<Route>;
  /** [BETA] Subscription for a specific route was updated in the system event */
  route: RouteResponse;
};

export type SubscriptionconnectedVehicleArgs = {
  id: Scalars["ID"];
};

export type SubscriptionisolineArgs = {
  id: Scalars["ID"];
};

export type SubscriptionnavigationUpdatedByIdArgs = {
  id: Scalars["ID"];
};

export type SubscriptionrouteUpdatedByIdArgs = {
  id: Scalars["ID"];
};

export type SubscriptionrouteArgs = {
  id: Scalars["ID"];
};

export type Telemetry = {
  /** Value of the auxiliary power consumption of the vehicle. */
  auxiliary_consumption?: Maybe<Scalars["Float"]>;
  /** Battery current in ampere. */
  battery_current?: Maybe<Scalars["Float"]>;
  /** Value of the temperature of the battery. */
  battery_temperature?: Maybe<Scalars["Float"]>;
  /** Battery voltage in volts. */
  battery_voltage?: Maybe<Scalars["Float"]>;
  /** Is the vehicle currently charging. */
  is_charging?: Maybe<Scalars["Boolean"]>;
  /** Value of the rate of charge of the battery. */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Value of the amount of battery charged. */
  charge_total?: Maybe<Scalars["Float"]>;
  /** Value of the current weight of the occupants. */
  total_occupant_weight?: Maybe<Scalars["Float"]>;
  /** Value of the current weight of the cargo. */
  total_cargo_weight?: Maybe<Scalars["Float"]>;
  /** Value of the current elevation. */
  elevation?: Maybe<Scalars["Float"]>;
  /** Current heading in degrees. */
  heading?: Maybe<Scalars["Float"]>;
  /** RPM of the motor. */
  motor_rpm?: Maybe<Scalars["Int"]>;
  /** Number of occupants present in the vehicle. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Value of the vehicle's odometer. */
  odometer?: Maybe<Scalars["Float"]>;
  /** Value of the outside temperature. */
  outside_temperature?: Maybe<Scalars["Float"]>;
  /** Vehicle is in park, neutral or turned off. */
  is_parked?: Maybe<Scalars["Boolean"]>;
  /** Value of the positive or negative power. When negative the vehicle is charging. */
  power?: Maybe<Scalars["Float"]>;
  /** Value of the state of charge of the vehicle. */
  state_of_charge?: Maybe<Scalars["Float"]>;
  /** Values for the average tire pressures of all wheels, starting from the front side right to left and to the rear. */
  tire_pressure?: Maybe<Array<Scalars["Float"]>>;
  /** UNIX timestamp in seconds. */
  timestamp?: Maybe<Scalars["Int"]>;
  /** Value of the vehicle speed. */
  vehicle_speed?: Maybe<Scalars["Float"]>;
  /** Custom input fields can be added based on telemetry architecture. */
  custom?: Maybe<Scalars["JSON"]>;
};

export type Telemetryauxiliary_consumptionArgs = {
  unit?: Maybe<AuxiliaryConsumptionUnit>;
};

export type Telemetrybattery_temperatureArgs = {
  unit?: Maybe<TemperatureUnit>;
};

export type Telemetrycharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

export type Telemetrycharge_totalArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

export type Telemetrytotal_occupant_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type Telemetrytotal_cargo_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type TelemetryelevationArgs = {
  unit?: Maybe<ElevationUnit>;
};

export type TelemetryodometerArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type Telemetryoutside_temperatureArgs = {
  unit?: Maybe<TemperatureUnit>;
};

export type TelemetrypowerArgs = {
  unit?: Maybe<PowerUnit>;
};

export type Telemetrystate_of_chargeArgs = {
  unit?: Maybe<StateOfChargeUnit>;
};

export type Telemetrytire_pressureArgs = {
  unit?: Maybe<PressureUnit>;
};

export type Telemetryvehicle_speedArgs = {
  unit?: Maybe<SpeedUnit>;
};

export type TelemetryInput = {
  /** Average auxiliary power consumption. */
  auxiliary_consumption?: Maybe<AuxiliaryConsumptionInput>;
  /** Battery current in ampere. */
  battery_current?: Maybe<Scalars["Float"]>;
  /** Battery temperature. */
  battery_temperature?: Maybe<BatteryTemperatureInput>;
  /** Battery voltage in volts. */
  battery_voltage?: Maybe<Scalars["Float"]>;
  /** Is the vehicle currently charging. */
  is_charging?: Maybe<Scalars["Boolean"]>;
  /** Rate of charge. */
  charge_speed?: Maybe<ChargeSpeedInput>;
  /** Amount charged. */
  charge_total?: Maybe<ChargeTotalInput>;
  /** Cumulated weight of the occupants. */
  total_occupant_weight?: Maybe<TotalOccupantWeightInput>;
  /** Weight of the cargo. */
  total_cargo_weight?: Maybe<TotalCargoWeightInput>;
  /** Current elevation. */
  elevation?: Maybe<ElevationInput>;
  /** Current heading in degrees. */
  heading?: Maybe<Scalars["Float"]>;
  /** RPM of the motor. */
  motor_rpm?: Maybe<Scalars["Int"]>;
  /** Number of occupants in the vehicle. */
  occupants?: Maybe<Scalars["Int"]>;
  /** Mileage or odometer reading. */
  odometer?: Maybe<OdometerInput>;
  /** Outside temperature. */
  outside_temperature?: Maybe<OutsideTempInput>;
  /** Vehicle is in park, neutral or turned off. */
  is_parked?: Maybe<Scalars["Boolean"]>;
  /** Vehicle power. */
  power?: Maybe<PowerInput>;
  /** Battery state of charge. */
  state_of_charge?: Maybe<StateOfChargeInput>;
  /** Average tire pressures of all wheels, starting from the front side right to left and to the rear. */
  tire_pressure?: Maybe<TirePressureInput>;
  /** UNIX timestamp in seconds. */
  timestamp?: Maybe<Scalars["Int"]>;
  /** Vehicle speed. */
  vehicle_speed?: Maybe<VehicleSpeedInput>;
  /** Custom input fields can be added based on telemetry architecture. */
  custom?: Maybe<Scalars["JSON"]>;
};

/** Telemetry input sources. */
export enum TelemetryInputSource {
  /** Manually inputted value. */
  MANUAL = "manual",
  /** Value from the vehicle's telemetry. */
  TELEMETRY = "telemetry"
}

export type Temperature = {
  /** Value of the temperature. */
  value: Scalars["Float"];
  /** Type of temperature. */
  type: TemperatureUnit;
  /** Source of inputted data. */
  source: TelemetryInputSource;
};

export type TemperatureInput = {
  /** Value of the temperature. */
  value: Scalars["Float"];
  /** Type of temperature. */
  type: TemperatureUnit;
  /** Source of inputted data. */
  source?: TelemetryInputSource;
};

/** Temperature unit. */
export enum TemperatureUnit {
  /** Return the temperature in Celsius. */
  CELSIUS = "Celsius",
  /** Return the temperature in Fahrenheit. */
  FAHRENHEIT = "Fahrenheit"
}

export type TirePressure = {
  /** Values for the tire pressure, starting from the front side right to left and to the rear (FR, FL, RL, RR). */
  value: Array<Scalars["Float"]>;
  /** Type of the value of pressure. */
  type: PressureUnit;
  /** Source of inputted data. */
  source: TelemetryInputSource;
};

export type TirePressureInput = {
  /** Values for the tire pressure, starting from the front side right to left and to the rear. */
  value: Array<Scalars["Float"]>;
  /** Type of the value of pressure. */
  type: PressureUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

export enum TorqueUnit {
  /** Return the torque in newton meters. */
  NEWTON_METER = "newton_meter",
  /** Return the torque in foot pounds. */
  FOOT_POUND = "foot_pound"
}

export type TotalCargoWeight = {
  /** Value of the current weight of the cargo. */
  value: Scalars["Float"];
  /** Type of the current weight of the cargo. */
  type: WeightUnit;
  /** Source of inputted data. */
  source: TelemetryInputSource;
};

export type TotalCargoWeightInput = {
  /** Value of the current weight of the cargo. */
  value: Scalars["Float"];
  /** Type of the current weight of the cargo. */
  type: WeightUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

export type TotalOccupantWeight = {
  /** Value of the current weight of the occupants. */
  value: Scalars["Float"];
  /** Type of the current weight of the occupants. */
  type: WeightUnit;
  /** Source of inputted data. */
  source: TelemetryInputSource;
};

export type TotalOccupantWeightInput = {
  /** Value of the current weight of the occupants. */
  value: Scalars["Float"];
  /** Type of the current weight of the occupants. */
  type: WeightUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

export enum TurningCircleUnit {
  /** Return the turning circle in meters. */
  METER = "meter",
  /** Return the turning circle in feet. */
  FOOT = "foot"
}

export type UpdateConnectedVehicleInput = {
  /** Id from the connected vehicle */
  id: Scalars["ID"];
  /** New label for a connected vehicle */
  label?: Maybe<Scalars["PlainString"]>;
};

/** Output of a vehicle query. */
export type Vehicle = {
  /** Vehicles unique ID. */
  id: Scalars["ID"];
  /** Naming of the vehicle. */
  naming: VehicleNaming;
  /** Drivetrain of the vehicle. */
  drivetrain: VehicleDrivetrain;
  /** Available connectors for the vehicle. Please note that for HEVs this will always be an empty array. */
  connectors: Array<VehicleConnector>;
  /** Adapters for the connectors of the vehicle. Please note that for HEVs this will always be an empty array. */
  adapters: Array<VehicleConnector>;
  /** Battery of the vehicle. */
  battery: VehicleBattery;
  /** Body of the vehicle. */
  body: VehicleBody;
  /** Availability of the vehicle. */
  availability: VehicleAvailability;
  /** Performance of the vehicle. */
  performance?: Maybe<VehiclePerformance>;
  /** Range of the vehicle. */
  range: VehicleRange;
  /** Media of the vehicle. */
  media: VehicleMedia;
  /** Routing of the vehicle. */
  routing: VehicleRouting;
  /** Information about vehicle connectivity. */
  connect: Connect;
  /** Regions in which the vehicle is available. Based on the continent code (CC) standard. */
  region: Array<VehicleRegion>;
  /** Vehicle intended use. Can be passenger, cargo, or utility. */
  purpose: VehiclePurpose;
  /** Type of vehicle. */
  type: VehicleType;
  /** Details about Heat Pump. */
  heat_pump?: Maybe<VehicleHeatPump>;
};

export type VehicleAvailability = {
  /** Availability of the vehicle. */
  status: VehicleAvailabilityStatus;
};

/** Availability status of a vehicle. */
export enum VehicleAvailabilityStatus {
  /** Vehicle no longer for sale in any market / region. */
  NO_LONGER_AVAILABLE = "no_longer_available",
  /** Vehicle currently for sale in at least one market / region. */
  AVAILABLE = "available",
  /** Vehicle expected in market from Date_From (estimated), pre-order open. */
  RELEASE_DATE_ANNOUNCED_PREORDERABLE = "release_date_announced_preorderable",
  /** Vehicle expected in market from Date_From (estimated), pre-order unknown or not open. */
  RELEASE_DATE_ANNOUNCED = "release_date_announced",
  /** Concept vehicle, nearing production and/or confirmed, pre-order open. */
  CONCEPT_VEHICLE_PREORDERABLE = "concept_vehicle_preorderable",
  /** Concept vehicle, nearing production and/or confirmed, pre-order unknown or not open. */
  CONCEPT_VEHICLE = "concept_vehicle",
  /** Concept vehicle, not close to production and/or unconfirmed, pre-order open. */
  CONCEPT_VEHICLE_RELEASE_DATE_TBA_PREORDERABLE = "concept_vehicle_release_date_tba_preorderable",
  /** Concept vehicle, not close to production and/or unconfirmed, pre-order unknown. */
  CONCEPT_VEHICLE_RELEASE_DATE_TBA = "concept_vehicle_release_date_tba",
  /** Status uncertain, introduction date and/or pricing unclear. */
  UNCERTAIN = "uncertain"
}

export type VehicleBattery = {
  /** Full battery capacity in kWh. */
  full_kwh: Scalars["Float"];
  /** Usable battery capacity in kWh. */
  usable_kwh: Scalars["Float"];
  /** Type of battery. */
  type?: Maybe<VehicleBatteryType>;
};

/** Battery field estimated. */
export enum VehicleBatteryFieldEstimations {
  /** Both of the battery kWh fields are estimations. */
  B = "B",
  /** full_kwh field is estimated. */
  F = "F",
  /** None of the battery kWh fields are estimations. */
  N = "N",
  /** usable_kwh field is estimated. */
  U = "U"
}

export enum VehicleBatteryType {
  /** Lithium-Ion Battery. */
  LITHIUM_ION = "lithium_ion"
}

export type VehicleBody = {
  /** Width with folded mirrors. */
  width: Scalars["Float"];
  /** Height (average height for adjustable suspensions). */
  height: Scalars["Float"];
  /** Weight (unladen). */
  weight: VehicleBodyWeight;
  /** Number of seats. */
  seats: Scalars["Int"];
};

export type VehicleBodywidthArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehicleBodyheightArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehicleBodyWeight = {
  /** Minimum weight. */
  minimum?: Maybe<Scalars["Float"]>;
  /** Nominal weight. */
  nominal?: Maybe<Scalars["Float"]>;
  /** Maximal weight. */
  maximal?: Maybe<Scalars["Float"]>;
};

export type VehicleBodyWeightminimumArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehicleBodyWeightnominalArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehicleBodyWeightmaximalArgs = {
  unit?: Maybe<WeightUnit>;
};

/** Vehicle plug model. */
export type VehicleConnector = {
  /** Connector type, known as connector standard in OCPI. */
  standard: ConnectorType;
  /** Usable electric power. */
  power: Scalars["Float"];
  /** Maximum electric power. */
  max_electric_power: Scalars["Float"];
  /** Time it takes to charge from 10 to 80% with a fast charger, shown in minutes. */
  time: Scalars["Int"];
  /**
   * Charging speed.
   * @deprecated In favor of charge_speed.
   */
  speed: Scalars["Float"];
  /** Charging speed. */
  charge_speed: Scalars["Float"];
};

/** Vehicle plug model. */
export type VehicleConnectorpowerArgs = {
  unit?: Maybe<PowerUnit>;
};

/** Vehicle plug model. */
export type VehicleConnectormax_electric_powerArgs = {
  unit?: Maybe<PowerUnit>;
};

/** Vehicle plug model. */
export type VehicleConnectorspeedArgs = {
  unit?: Maybe<SpeedUnit>;
};

/** Vehicle plug model. */
export type VehicleConnectorcharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

/** The consumption of the vehicle. */
export type VehicleConsumptionInput = {
  /** Worst conditions are based on -10°C and use of heating. */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C. */
  best?: Maybe<Scalars["Float"]>;
};

export type VehicleData = {
  /** Battery data */
  battery?: Maybe<ConnectBattery>;
  /** Charge data */
  charge?: Maybe<ConnectCharge>;
  /** Location data */
  location?: Maybe<ConnectLocation>;
  /** Odometer data */
  odometer?: Maybe<ConnectOdometer>;
};

export enum VehicleDataProvider {
  /** Internal data provider. */
  CHARGETRIP = "chargetrip",
  /** EV database data provider. */
  EVDATABASE = "evdatabase"
}

export type VehicleDrivetrain = {
  /** Type of drivetrain. */
  type: VehicleDrivetrainType;
};

/** Drivetrain. */
export enum VehicleDrivetrainType {
  /** Battery Electric Vehicle. */
  BEV = "BEV",
  /** Extended Range Electric Vehicle. */
  EREV = "EREV",
  /** Hybrid Electric Vehicle. */
  HEV = "HEV",
  /** Plug-in Hybrid Electric Vehicle. */
  PHEV = "PHEV"
}

/** Fuel type. */
export enum VehicleFuel {
  /** ICE engine available. Uses diesel. */
  D = "D",
  /** Electricity only. Full electric vehicle. */
  E = "E",
  /** ICE engine available. Uses gasoline. */
  P = "P"
}

export type VehicleHeatPump = {
  /** Indicates if a heat pump is available for a specific vehicle. */
  is_available?: Maybe<Scalars["Boolean"]>;
  /** Indicates if a heat pump is standard equipment for a specific vehicle. */
  is_standard_equipment?: Maybe<Scalars["Boolean"]>;
};

export type VehicleImage = {
  /** Image id. */
  id?: Maybe<Scalars["ID"]>;
  /** Image type. */
  type: VehicleImageType;
  /** Full path URL of a large image. */
  url: Scalars["String"];
  /** Height of a large image in pixels. */
  height: Scalars["Int"];
  /** Width of a large image in pixels. */
  width: Scalars["Int"];
  /** Full path URL of a thumbnail image. */
  thumbnail_url: Scalars["String"];
  /** Height of a thumbnail image in pixels. */
  thumbnail_height: Scalars["Int"];
  /** Width of a thumbnail image in pixels. */
  thumbnail_width: Scalars["Int"];
};

/** Available types of images which can be found for a vehicle. Each type has specific image sizes. */
export enum VehicleImageType {
  /** Images provided by a Vehicle Datasource. */
  PROVIDER = "provider",
  /** Full-sized image at 1536x864 px. */
  IMAGE = "image",
  /** Thumbnail of a full-sized image at 131x72 px. */
  IMAGE_THUMBNAIL = "image_thumbnail",
  /** Premium image. */
  IMAGE_PREMIUM = "image_premium",
  /** Thumbnail of a premium image. */
  PREMIUM_IMAGE_THUMBNAIL = "premium_image_thumbnail",
  /** Full-sized brand (make) logo at 768x432 px. */
  BRAND = "brand",
  /** Thumbnail of a full-sized brand (make) logo at 56x24 px. */
  BRAND_THUMBNAIL = "brand_thumbnail",
  /** Placeholder image at 1536x864 px. */
  PLACEHOLDER = "placeholder"
}

/** When uploading images to a vehicle, you can select one of this types. The rest of the types are automatically generated by the system. */
export enum VehicleImageTypeUploadable {
  /** Freemium vehicle image. */
  IMAGE = "image",
  /** Premium vehicle image. */
  IMAGE_PREMIUM = "image_premium"
}

/** The output element of the vehicleList query. */
export type VehicleList = {
  /** Vehicles unique ID. */
  id: Scalars["ID"];
  /** Naming of the vehicle. */
  naming: VehicleListNaming;
  /** Drivetrain of the vehicle. */
  drivetrain: VehicleDrivetrain;
  /** Connectors available for the vehicle. Please note that for HEVs this will always be an empty array. */
  connectors: Array<VehicleConnector>;
  /** Adapters available for the vehicle. Please note that for HEVs this will always be an empty array. */
  adapters: Array<VehicleConnector>;
  /** Battery of the vehicle. */
  battery: VehicleListBattery;
  /** Body of the vehicle. */
  body: VehicleListBody;
  /** Availability of the vehicle. */
  availability: VehicleListAvailability;
  /** Range of the vehicle. */
  range: VehicleListRange;
  /** Media of the vehicle. */
  media: VehicleListMedia;
  /** Routing of the vehicle. */
  routing: VehicleListRouting;
  /** Information about vehicle connectivity. */
  connect: Connect;
  /** Regions in which the vehicle is available. Based on the continent code (CC) standard. */
  region: Array<VehicleRegion>;
  /** Vehicle intended use. Can be passenger, cargo, or utility. */
  purpose: VehiclePurpose;
  /** Type of vehicle. */
  type: VehicleType;
};

export type VehicleListAvailability = {
  /** Availability of the vehicle. */
  status: VehicleAvailabilityStatus;
};

export type VehicleListBattery = {
  /** Full battery capacity in kWh. */
  full_kwh: Scalars["Float"];
  /** Usable battery capacity in kWh. */
  usable_kwh: Scalars["Float"];
  /** Type of battery. */
  type?: Maybe<VehicleBatteryType>;
};

export type VehicleListBody = {
  /** Number of seats in a vehicle. */
  seats: Scalars["Int"];
};

export type VehicleListFilter = {
  /** Availability of a vehicle. */
  availability?: Maybe<Array<VehicleAvailabilityStatus>>;
  /** Drivetrain type of a vehicle. */
  drivetrain?: Maybe<Array<VehicleDrivetrainType>>;
  /** Information about vehicle connectivity. */
  connect?: Maybe<ConnectFilter>;
  /** Regions in which the vehicle is available. Based on the continent code (CC) standard. */
  region?: Maybe<Array<VehicleRegion>>;
  /** Vehicle intended use. Can be passenger, cargo, or utility. */
  purpose?: Maybe<Array<VehiclePurpose>>;
  /** Type of vehicle. */
  type?: Maybe<Array<VehicleType>>;
};

export type VehicleListMedia = {
  /** Featured image of the vehicle from a 45-degree angle. */
  image: VehicleImage;
  /**
   * Latest make logo of the vehicle.
   * @deprecated In favor of make.
   */
  brand: VehicleImage;
  /** Latest make logo of the vehicle. */
  make: VehicleImage;
  /** Latest video of the vehicle. */
  video?: Maybe<VehicleVideo>;
};

export type VehicleListNaming = {
  /** Vehicle manufacturer name. */
  make: Scalars["String"];
  /** Vehicle model name. */
  model: Scalars["String"];
  /** Version, edition or submodel of the vehicle. */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of the vehicle. */
  edition?: Maybe<Scalars["String"]>;
  /** Vehicle model version. Added by Chargetrip as an alternative for when a vehicle manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years. */
  chargetrip_version: Scalars["String"];
};

export type VehicleListRange = {
  /**
   * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
   * Chargetrip range is based on the theoretical distance driven using only the electric engine.
   * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  chargetrip_range: ChargetripRange;
};

export type VehicleListRouting = {
  /** Vehicles that support fast charging have a minimum charging speed of 43 kWh. */
  fast_charging_support: Scalars["Boolean"];
};

export type VehicleMedia = {
  /** Featured image of the vehicle from a 45-degree angle. */
  image: VehicleImage;
  /**
   * Latest make logo.
   * @deprecated In favor of make.
   */
  brand: VehicleImage;
  /** Latest make logo. */
  make: VehicleImage;
  /** All images of the vehicle. */
  image_list: Array<VehicleImage>;
  /** Latest video. */
  video?: Maybe<VehicleVideo>;
  /** All videos of the vehicle. */
  video_list?: Maybe<Array<VehicleVideo>>;
};

/** Mode (state) of the current production. */
export enum VehicleMode {
  /** Old vehicle that is no longer manufactured. */
  INDEX_ONLY = "index_only",
  /** Vehicle is in production and has been released. */
  PRODUCTION = "production",
  /** Future releases of a vehicle, a concept of the vehicle, specs may change over time. */
  CONCEPT = "concept"
}

export type VehicleNaming = {
  /** Vehicle manufacturer name. */
  make: Scalars["String"];
  /** Vehicle model name. */
  model: Scalars["String"];
  /** Version, edition or submodel of the vehicle. */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of the vehicle. */
  edition?: Maybe<Scalars["String"]>;
  /** Vehicle model version. Added by Chargetrip as an alternative for when a vehicle manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years. */
  chargetrip_version: Scalars["String"];
};

export type VehiclePerformance = {
  /** Acceleration. */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Top speed of the vehicle. */
  top_speed?: Maybe<Scalars["Float"]>;
};

export type VehiclePerformanceaccelerationArgs = {
  unit?: Maybe<AccelerationUnit>;
};

export type VehiclePerformancetop_speedArgs = {
  unit?: Maybe<SpeedUnit>;
};

export enum VehiclePlugAndChargeSupport {
  /** Plug and charge is available. */
  AVAILABLE = "available",
  /** Plug and charge is announced, but not yet available. */
  ANNOUNCED = "announced",
  /** Plug and charge is available in a limited context. */
  LIMITED = "limited",
  /** Plug and charge is not available. */
  NOT_AVAILABLE = "not_available"
}

/** The output element of the vehiclePremium query. */
export type VehiclePremium = {
  /** Vehicles unique ID. */
  id: Scalars["ID"];
  /** Internal ID of the successor vehicle trim. */
  succesor_id?: Maybe<Scalars["String"]>;
  /** Naming of the vehicle. */
  naming: VehiclePremiumNaming;
  /** Connectors available for the vehicle. Please note that for HEVs this will always be an empty array. */
  connectors: Array<VehicleConnector>;
  /** Charge details. */
  charge: VehiclePremiumCharge;
  /** Fast charge details. */
  fast_charge: VehiclePremiumFastCharge;
  /** Adapters of connectors available for a connectors of the vehicle. Please note that for HEVs this will always be an empty array. */
  adapters: Array<VehicleConnector>;
  /** Battery of the vehicle. */
  battery: VehiclePremiumBattery;
  /** Body of the vehicle. */
  body: VehiclePremiumBody;
  /** Availability of the vehicle. */
  availability: VehiclePremiumAvailability;
  /**
   * Pricing of the vehicle.
   * @deprecated In favor of pricing.
   */
  price: VehiclePremiumPrice;
  /** Starting price in the currency defined in the field argument. If not defined, it will return the starting price in the currency returned in the currency field. */
  pricing: VehiclePremiumPriceValueWithGrant;
  /** Drivetrain of the vehicle. */
  drivetrain: VehiclePremiumDrivetrain;
  /** Performance of the vehicle. */
  performance?: Maybe<VehiclePremiumPerformance>;
  /** Range of the vehicle. */
  range: VehiclePremiumRange;
  /** Efficiency of the vehicle. */
  efficiency: VehiclePremiumEfficiency;
  /** Safety of the vehicle. */
  safety?: Maybe<VehiclePremiumSafety>;
  /** Media of the vehicle. */
  media: VehiclePremiumMedia;
  /** Routing of the vehicle. */
  routing: VehiclePremiumRouting;
  /** Information about vehicle connectivity. */
  connect: Connect;
  /** Regions in which the vehicle is available. Based on the continent code (CC) standard. */
  region: Array<VehicleRegion>;
  /** Vehicle intended use. Can be passenger, cargo, or utility. */
  purpose: VehiclePurpose;
  /** Type of vehicle. */
  type: VehicleType;
  /** Details about Heat Pump. */
  heat_pump?: Maybe<VehicleHeatPump>;
};

export type VehiclePremiumAvailability = {
  /** Availability of the vehicle. */
  status: VehicleAvailabilityStatus;
  /** Date of introduction, mm-yyyy. */
  date_from?: Maybe<Scalars["String"]>;
  /** Indicates if date from field is estimated. */
  date_from_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Date last available, mm-yyyy. */
  date_to?: Maybe<Scalars["String"]>;
};

export type VehiclePremiumBattery = {
  /** Usable battery capacity in kWh. */
  usable_kwh: Scalars["Float"];
  /** Full battery capacity in kWh. */
  full_kwh: Scalars["Float"];
  /** Indicates which battery fields are estimated. */
  estimated_fields?: Maybe<VehicleBatteryFieldEstimations>;
  /** Battery thermal management system (active/passive, air/liquid). */
  thermal_management_system?: Maybe<Scalars["String"]>;
  /** Duration of battery warranty. */
  warranty_period?: Maybe<Scalars["Float"]>;
  /** Mileage of battery warranty. */
  warranty_mileage?: Maybe<Scalars["Float"]>;
  /** Chemistry of the battery. */
  chemistry?: Maybe<Scalars["String"]>;
  /** Manufacturer of the battery. */
  manufacturer?: Maybe<Scalars["String"]>;
  /** Number of battery modules. */
  modules?: Maybe<Scalars["Float"]>;
  /** Number of cells in the battery pack, can include configuration (s = serial, p = parallel). */
  cells?: Maybe<Scalars["String"]>;
  /** Weight of the battery pack. */
  weight?: Maybe<Scalars["Float"]>;
  /** Nominal voltage of battery. */
  nominal_voltage?: Maybe<Scalars["Float"]>;
  /** Type of battery. */
  type?: Maybe<VehicleBatteryType>;
};

export type VehiclePremiumBatteryweightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehiclePremiumBody = {
  /** Length. */
  length?: Maybe<Scalars["Float"]>;
  /** Width with folded mirrors. */
  width: Scalars["Float"];
  /** Width of vehicle including mirrors. */
  full_width?: Maybe<Scalars["Float"]>;
  /** Height (average height for adjustable suspensions). */
  height: Scalars["Float"];
  /** Indicates if length/width/height fields are estimations. */
  size_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Wheelbase. */
  wheelbase?: Maybe<Scalars["Float"]>;
  /** Indicates if wheelbase field is estimated. */
  wheelbase_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Ground clearance of a vehicle as specified by the OEM. */
  ground_clearance?: Maybe<Scalars["Float"]>;
  /** Weight (unladen EU). */
  weight: VehicleBodyWeight;
  /** Maximum allowed vehicle weight with payload. */
  weight_gvwr?: Maybe<VehicleBodyWeight>;
  /** Maximum allowed vehicle and trailer weight with payload. */
  weight_gtw?: Maybe<VehicleBodyWeight>;
  /** Allowed payload weight. */
  weight_payload?: Maybe<VehicleBodyWeight>;
  /** Indicates if weight field is estimated. */
  weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum payload allowed for the vehicle. */
  weight_max_payload?: Maybe<Scalars["Float"]>;
  /**
   * Gross Vehicle Weight (GVWR) - (max allowed vehicle weight with payload).
   * @deprecated In favor of weight_gvwr.nominal
   */
  max_gross_vehicle_weight?: Maybe<Scalars["Float"]>;
  /** Standard luggage capacity. */
  boot_capacity?: Maybe<Scalars["Float"]>;
  /** Storage capacity of front trunk/under the hood (frunk). */
  boot_front_capacity?: Maybe<Scalars["Float"]>;
  /** Maximum luggage capacity. */
  boot_capacity_max?: Maybe<Scalars["Float"]>;
  /** Indicates if a tow hitch/towbar can be fitted according to vehicle homologation. */
  tow_hitch_compatible?: Maybe<Scalars["Boolean"]>;
  /** Maximum unbraked towing weight. */
  tow_weight_unbraked?: Maybe<Scalars["Float"]>;
  /** Maximum braked towing weight. */
  tow_weight_braked?: Maybe<Scalars["Float"]>;
  /** Indicates if tow weight fields are estimations. */
  tow_weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum vertical load / noseweight on tow hitch according to vehicle homologation. */
  tow_weight_vertical_load?: Maybe<Scalars["Float"]>;
  /** Maximum load on roof of the vehicle. */
  roof_load_max?: Maybe<Scalars["Float"]>;
  /** Body type, listed in local naming convention where applicable. */
  body_type?: Maybe<Scalars["String"]>;
  /** Segment, listed in local naming convention where applicable. */
  segment?: Maybe<Scalars["String"]>;
  /** Number of seats. */
  seats: Scalars["Int"];
  /** Indicates whether a vehicle has roof rails as a standard. */
  has_roofrails?: Maybe<Scalars["Boolean"]>;
  /** Turning circle of the vehicle kerb-to-kerb. */
  turning_circle?: Maybe<Scalars["Float"]>;
  /** Name of the vehicle platform used for vehicle (often abbreviated to indicate group platforms). */
  vehicle_platform?: Maybe<Scalars["String"]>;
  /** Indicates if the vehicle platform used for vehicle is a dedicated battery electric vehicle platform. */
  vehicle_platform_is_dedicated?: Maybe<Scalars["Boolean"]>;
};

export type VehiclePremiumBodylengthArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehiclePremiumBodywidthArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehiclePremiumBodyfull_widthArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehiclePremiumBodyheightArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehiclePremiumBodywheelbaseArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehiclePremiumBodyground_clearanceArgs = {
  unit?: Maybe<MeasurementUnit>;
};

export type VehiclePremiumBodyweight_max_payloadArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehiclePremiumBodymax_gross_vehicle_weightArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehiclePremiumBodyboot_capacityArgs = {
  unit?: Maybe<VolumeUnit>;
};

export type VehiclePremiumBodyboot_front_capacityArgs = {
  unit?: Maybe<VolumeUnit>;
};

export type VehiclePremiumBodyboot_capacity_maxArgs = {
  unit?: Maybe<VolumeUnit>;
};

export type VehiclePremiumBodytow_weight_unbrakedArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehiclePremiumBodytow_weight_brakedArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehiclePremiumBodytow_weight_vertical_loadArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehiclePremiumBodyroof_load_maxArgs = {
  unit?: Maybe<WeightUnit>;
};

export type VehiclePremiumBodyturning_circleArgs = {
  unit?: Maybe<TurningCircleUnit>;
};

export type VehiclePremiumCharge = {
  /** Information about the main connector. */
  plug?: Maybe<VehiclePremiumChargePlug>;
  /** Information about vehicles secondary onboard charger. */
  second_plug?: Maybe<VehiclePremiumChargeSecondPlug>;
  /** Information about the vehicle standard onboard charger. */
  standard?: Maybe<VehiclePremiumChargeStandardOBC>;
  /** Optional upgrade for the standard onboard charger when available. */
  option?: Maybe<VehiclePremiumChargeOptionOBC>;
  /** Alternative upgrade for the standard onboard charger when available. */
  alternative?: Maybe<VehiclePremiumChargeAlternativeOBC>;
  /** Vehicle-to-everything charge support. */
  vehicle_to_everything?: Maybe<VehicleToEverything>;
};

export type VehiclePremiumChargeAlternativeOBC = {
  /** Maximum power OBC can accept to charge a battery (alternative OBC). */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (alternative OBC). */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (alternative OBC). */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (alternative OBC). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (alternative OBC). */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Charging details for the alternative OBC at several charging points. */
  table?: Maybe<Array<Maybe<VehiclePremiumChargeOBCTable>>>;
};

export type VehiclePremiumChargeAlternativeOBCpowerArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumChargeAlternativeOBCcharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

export type VehiclePremiumChargeOBCTable = {
  /** Voltage between phase and neutral for this EVSE (phase voltage). */
  evse_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Current per phase for this EVSE (phase current). */
  evse_phase_amperage?: Maybe<Scalars["Int"]>;
  /** Number of phases for this EVSE. */
  evse_phases?: Maybe<Scalars["Int"]>;
  /** Voltage between phase and neutral used by standard OBC (phase voltage). */
  charge_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Current per phase used by standard OBC (phase current). */
  charge_phase_amperage?: Maybe<Scalars["Float"]>;
  /** Number of phases used by standard OBC. */
  charge_phases?: Maybe<Scalars["Int"]>;
  /** Power used by standard OBC (before OBC losses). */
  charge_power?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC with this EVSE). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC with this EVSE). */
  charge_speed?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumChargeOBCTablecharge_powerArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumChargeOBCTablecharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

export type VehiclePremiumChargeOptionOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC). */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC). */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC). */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC). */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Charging details for the standard OBC at several charging points. */
  table?: Maybe<Array<Maybe<VehiclePremiumChargeOBCTable>>>;
};

export type VehiclePremiumChargeOptionOBCpowerArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumChargeOptionOBCcharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

export type VehiclePremiumChargePlug = {
  /** Type of charge port on vehicle. */
  value?: Maybe<ConnectorType>;
  /** Indicates if value is an estimate. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Location of charge port. */
  location?: Maybe<Scalars["String"]>;
};

export type VehiclePremiumChargePower = {
  /** Maximum value. */
  max?: Maybe<Scalars["Float"]>;
  /** Average value. */
  average?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumChargePowermaxArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumChargePoweraverageArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumChargeSecondPlug = {
  /** Location of charge port. */
  location?: Maybe<Scalars["String"]>;
  /** Indicates if second charge port is optional. */
  is_optional?: Maybe<Scalars["Boolean"]>;
};

export type VehiclePremiumChargeStandardOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC). */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC). */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC). */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC). */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Indicates if Charge_Standard fields are estimated. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Charging details for the standard OBC at several charging points. */
  table?: Maybe<Array<Maybe<VehiclePremiumChargeOBCTable>>>;
};

export type VehiclePremiumChargeStandardOBCpowerArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumChargeStandardOBCcharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

export type VehiclePremiumDrivetrain = {
  /** Type of drivetrain. */
  type: VehicleDrivetrainType;
  /** Fuel type. */
  fuel?: Maybe<VehicleFuel>;
  /** Propulsion type. */
  propulsion?: Maybe<VehiclePropulsion>;
  /** Indicates if propulsion field is estimated. */
  propulsion_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum (combined) power output. */
  power?: Maybe<Scalars["Float"]>;
  /** Indicates if power field is estimated. */
  power_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum (combine) power output. */
  power_hp?: Maybe<Scalars["Float"]>;
  /** Maximum (combine) torque output. */
  torque?: Maybe<Scalars["Float"]>;
  /** Indicates if torque field is estimated. */
  torque_is_estimated?: Maybe<Scalars["Boolean"]>;
};

export type VehiclePremiumDrivetrainpowerArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumDrivetrainpower_hpArgs = {
  unit?: Maybe<PowerUnit>;
};

export type VehiclePremiumDrivetraintorqueArgs = {
  unit?: Maybe<TorqueUnit>;
};

export type VehiclePremiumEfficiency = {
  /** Rated efficiency in WLTP combined cycle. */
  wltp?: Maybe<VehiclePremiumEfficiencyWLTP>;
  /** Rated efficiency in WLTP combined cycle (TEH / least efficient trim). */
  wltp_teh?: Maybe<VehiclePremiumEfficiencyWLTPTEH>;
  /** Rated efficiency in NEDC combined cycle. */
  nedc?: Maybe<VehiclePremiumEfficiencyNEDC>;
  /** Vehicle efficiency based on provider range. */
  provider?: Maybe<VehiclePremiumEfficiencyProvider>;
};

export type VehiclePremiumEfficiencyNEDC = {
  /** Rated efficiency in NEDC combined cycle. */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in NEDC combined cycle presented in gas equivalent. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle (based on value). */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle presented in gas equivalent. */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in NEDC combined cycle in battery-only mode (NULL if not NEDC rated). */
  co2?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumEfficiencyNEDCvalueArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumEfficiencyNEDCfuel_equivalentArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumEfficiencyNEDCvehicleArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumEfficiencyNEDCvehicle_fuel_equivalentArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumEfficiencyNEDCco2Args = {
  unit?: Maybe<EmissionRateUnit>;
};

export type VehiclePremiumEfficiencyProvider = {
  /** Vehicle efficiency based on RealRange (usable battery/range). */
  value?: Maybe<Scalars["Float"]>;
  /** Vehicle efficiency based on RealRange presented in gas equivalent. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating. */
  worst?: Maybe<VehiclePremiumEfficiencyProviderValue>;
  /** Best conditions are based on 23°C and no use of A/C. */
  best?: Maybe<VehiclePremiumEfficiencyProviderValue>;
};

export type VehiclePremiumEfficiencyProvidervalueArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumEfficiencyProviderfuel_equivalentArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumEfficiencyProviderValue = {
  /** Estimated value on highway or express roads. */
  highway?: Maybe<Scalars["Float"]>;
  /** Estimated value on city roads. */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated combined value. */
  combined?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumEfficiencyProviderValuehighwayArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumEfficiencyProviderValuecityArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumEfficiencyProviderValuecombinedArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumEfficiencyWLTP = {
  /** Rated efficiency in WLTP combined cycle. */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP combined cycle presented in gas equivalent. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle (based on value). */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle presented in gas equivalent. */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in WLTP combined cycle in battery-only mode (NULL if not WLTP rated). */
  co2?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumEfficiencyWLTPvalueArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPfuel_equivalentArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPvehicleArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPvehicle_fuel_equivalentArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPco2Args = {
  unit?: Maybe<EmissionRateUnit>;
};

export type VehiclePremiumEfficiencyWLTPTEH = {
  /** Rated efficiency in WLTP TEH combined cycle (TEH/least efficient trim). */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP TEH combined cycle presented in gas equivalent. */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle (based on value). */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle presented in gas equivalent. */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in WLTP TEH combined cycle in battery-only mode (NULL if not WLTP TEH rated). */
  co2?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumEfficiencyWLTPTEHvalueArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPTEHfuel_equivalentArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPTEHvehicleArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPTEHvehicle_fuel_equivalentArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumEfficiencyWLTPTEHco2Args = {
  unit?: Maybe<EmissionRateUnit>;
};

export type VehiclePremiumFastCharge = {
  /** Details about the connector. */
  plug?: Maybe<VehiclePremiumChargePlug>;
  /** Power during fast charging from 10% to 80% SoC (optimal conditions, fastest charger). */
  power?: Maybe<VehiclePremiumChargePower>;
  /** Minutes needed to charge from 10% to 80%, with average charging power (optimal conditions, fastest charger). */
  charge_time?: Maybe<Scalars["Float"]>;
  /** Charging speed during fast charging from 10% to 80% (optimal conditions, fastest charger). */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Indicates if fast charge is optional in some markets/regions. */
  is_optional?: Maybe<Scalars["Boolean"]>;
  /** Indicates what fields are estimated. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Charging details for fast charging. */
  table?: Maybe<Array<Maybe<VehiclePremiumFastChargeTable>>>;
  /** Indicates if autocharge is available. */
  has_autocharge?: Maybe<Scalars["Boolean"]>;
  /** Status of Plug & Charge (PnC ISO15118) support for vehicle. */
  iso_15118_pnc_support?: Maybe<VehiclePlugAndChargeSupport>;
  /** Status of Plug & Charge (PnC ISO15118) -2 protocol support for vehicle. */
  iso_15118_pnc_support_2?: Maybe<VehiclePlugAndChargeSupport>;
  /** Status of Plug & Charge (PnC ISO15118) -20 protocol support for vehicle. */
  iso_15118_pnc_support_20?: Maybe<VehiclePlugAndChargeSupport>;
  /** Indicates if the fastcharge data is based on a real-world test by Fastned. */
  is_fastned_tested?: Maybe<Scalars["Boolean"]>;
};

export type VehiclePremiumFastChargecharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

export type VehiclePremiumFastChargeTable = {
  /** Charging details for fast charging (format: ChargerConnector-ChargerPower-AC/DC). */
  format?: Maybe<Scalars["String"]>;
  /** Fast charge power. */
  power?: Maybe<VehiclePremiumChargePower>;
  /** Minutes needed to charge from 10% to 80% (optimal conditions). */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed during fast charging from 10% to 80% (optimal conditions). */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Indicates if maximum power during fast charging is limited by the vehicle. */
  is_limited?: Maybe<Scalars["Boolean"]>;
  /** Indicates if average power during fast charging is limited by the vehicle. */
  average_is_limited?: Maybe<Scalars["Boolean"]>;
};

export type VehiclePremiumFastChargeTablecharge_speedArgs = {
  unit?: Maybe<ChargeSpeedUnit>;
};

export type VehiclePremiumMedia = {
  /** URL for more details. */
  provider_details_url?: Maybe<Scalars["String"]>;
  /** Featured image of the vehicle from a 45-degree angle. */
  image: VehicleImage;
  /**
   * Latest make logo.
   * @deprecated In favor of make.
   */
  brand: VehicleImage;
  /** Latest make logo. */
  make: VehicleImage;
  /** All images of the vehicle. */
  image_list: Array<VehicleImage>;
  /** Latest video. */
  video?: Maybe<VehicleVideo>;
  /** All videos of the vehicle. */
  video_list?: Maybe<Array<VehicleVideo>>;
  /** URL of the OEM page for this vehicle. */
  oem_details_url?: Maybe<Scalars["String"]>;
};

export type VehiclePremiumNaming = {
  /** Vehicle manufacturer name. */
  make: Scalars["String"];
  /** Vehicle model name. */
  model: Scalars["String"];
  /** Version, edition or submodel of the vehicle. */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of the vehicle. */
  edition?: Maybe<Scalars["String"]>;
  /** Vehicle model version. Added by Chargetrip as an alternative for when a vehicle manufacturer does not provide a version name, or uses the same version name across all trims or consecutive years. */
  chargetrip_version: Scalars["String"];
  /** Vehicle model length version. */
  length_version?: Maybe<Scalars["String"]>;
  /** Vehicle model height version. */
  height_version?: Maybe<Scalars["String"]>;
};

export type VehiclePremiumPerformance = {
  /** Acceleration 0-100 km/h. */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Indicates if acceleration field is estimated. */
  acceleration_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Top speed of the vehicle. */
  top_speed?: Maybe<Scalars["Float"]>;
  /** Indicates if top_speed field is estimated. */
  top_speed_is_estimated?: Maybe<Scalars["Boolean"]>;
};

export type VehiclePremiumPerformanceaccelerationArgs = {
  unit?: Maybe<AccelerationUnit>;
};

export type VehiclePremiumPerformancetop_speedArgs = {
  unit?: Maybe<SpeedUnit>;
};

export type VehiclePremiumPrice = {
  /** Starting price for German market. */
  DE?: Maybe<VehiclePremiumPriceValueWithGrant>;
  /** Starting price for Dutch market. */
  NL?: Maybe<VehiclePremiumPriceValueWithGrant>;
  /** Starting price for British market. */
  GB?: Maybe<VehiclePremiumPriceValueWithGrant>;
};

export type VehiclePremiumPriceValueWithGrant = {
  /** Starting price for local market expressed in the currency in the field currency. */
  value?: Maybe<Scalars["Float"]>;
  /** Currency in which the value without optional field conversion is expressed. */
  currency?: Maybe<CurrencyUnit>;
  /** Indicates if the starting price is based on an estimate. */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Grant that is applied to the starting price. */
  grant_applied?: Maybe<Scalars["Int"]>;
  /** Total delivery fees (be aware that this field does not include grant). */
  price_delivery?: Maybe<Scalars["Int"]>;
  /** First registration fee (be aware that this field does not include grant). */
  price_first_registration_fee?: Maybe<Scalars["Int"]>;
};

export type VehiclePremiumPriceValueWithGrantvalueArgs = {
  unit?: Maybe<CurrencyUnit>;
};

export type VehiclePremiumRange = {
  /** Rated range in WLTP combined cycle (NULL if not WLTP rated). */
  wltp?: Maybe<Scalars["Float"]>;
  /** Indicates if WLTP range is estimated (NULL if not WLTP rated). */
  wltp_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Rated range in WLTP (TEH/least efficient trim) combined cycle (NULL if not WLTP rated). */
  wltp_teh?: Maybe<Scalars["Float"]>;
  /** Rated range in NEDC combined cycle (NULL if not NEDC rated). */
  nedc?: Maybe<Scalars["Float"]>;
  /** Indicates if NEDC range is estimated (NULL if not NEDC rated). */
  nedc_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Index range. */
  provider?: Maybe<Scalars["Float"]>;
  /** Indicates if index range is estimated. */
  provider_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Worst conditions are based on -10°C and use of heating. */
  worst: VehiclePremiumRangeValue;
  /** Best conditions are based on 23°C and no use of A/C. */
  best: VehiclePremiumRangeValue;
  /**
   * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
   * Chargetrip range is based on the theoretical distance driven using only the electric engine.
   * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  chargetrip_range: ChargetripRange;
};

export type VehiclePremiumRangewltpArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumRangewltp_tehArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumRangenedcArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumRangeproviderArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumRangeValue = {
  /** Estimated value on highway or express roads. */
  highway: Scalars["Float"];
  /** Estimated value on city roads. */
  city: Scalars["Float"];
  /** Estimated combined value. */
  combined: Scalars["Float"];
};

export type VehiclePremiumRangeValuehighwayArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumRangeValuecityArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumRangeValuecombinedArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehiclePremiumRouting = {
  /** Vehicles that support fast charging have a minimum charging speed of 43 kWh. */
  fast_charging_support: Scalars["Boolean"];
  /** Drag coefficient. */
  drag_coefficient: Scalars["Float"];
  /** Tire pressure recommended by manufacturer. */
  tire_pressure: Scalars["Float"];
  /** Extra consumption model. */
  consumption?: Maybe<VehiclePremiumRoutingConsumption>;
  /** Amount of gasoline that an equivalent gasoline vehicle would consume. */
  fuel_consumption?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumRoutingtire_pressureArgs = {
  unit?: Maybe<PressureUnit>;
};

export type VehiclePremiumRoutingfuel_consumptionArgs = {
  unit?: Maybe<FuelConsumptionUnit>;
};

export type VehiclePremiumRoutingConsumption = {
  /** The amount of energy, in kWh, used by the auxiliary systems of the vehicle in an hour, like media box, etc */
  auxiliary?: Maybe<Scalars["Float"]>;
  /**
   * Consumption, in kWh, of the auxiliaries.
   * @deprecated In favor of auxiliary
   */
  aux?: Maybe<VehiclePremiumRoutingConsumptionValue>;
  /**
   * Consumption, in kWh, of the battery management system.
   * @deprecated In favor of auxiliary
   */
  bms?: Maybe<VehiclePremiumRoutingConsumptionValue>;
  /**
   * Consumption, in kWh, of the vehicle in idle mode.
   * @deprecated In favor of auxiliary
   */
  idle?: Maybe<VehiclePremiumRoutingConsumptionValue>;
};

export type VehiclePremiumRoutingConsumptionauxiliaryArgs = {
  unit?: Maybe<AuxiliaryConsumptionUnit>;
};

export type VehiclePremiumRoutingConsumptionValue = {
  /** Best (lowest) consumption in summer. */
  best?: Maybe<Scalars["Float"]>;
  /** Best (lowest) consumption in winter. */
  worst?: Maybe<Scalars["Float"]>;
};

export type VehiclePremiumRoutingConsumptionValuebestArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumRoutingConsumptionValueworstArgs = {
  unit?: Maybe<ConsumptionUnit>;
};

export type VehiclePremiumSafety = {
  /** Number of seats equipped with ISOFIX. */
  isofix_seats?: Maybe<Scalars["Int"]>;
  /** EuroNCAP results. */
  euro_ncap?: Maybe<VehiclePremiumSafetyEuroNcap>;
};

export type VehiclePremiumSafetyEuroNcap = {
  /** EuroNCAP rating (out of 5 stars). */
  rating?: Maybe<Scalars["Int"]>;
  /** EuroNCAP year of rating. */
  year?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of adult protection (out of 100%). */
  adult?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of child protection (out of 100%). */
  child?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of vulnerable road users (out of 100%). */
  vru?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of safety assists (out of 100%). */
  sa?: Maybe<Scalars["Int"]>;
  /** Link to the EuroNCAP test report. */
  url?: Maybe<Scalars["String"]>;
};

/** Propulsion. */
export enum VehiclePropulsion {
  /** All-wheel drive vehicle. */
  AWD = "AWD",
  /** Front-wheel drive vehicle. */
  FRONT = "Front",
  /** Rear-wheel drive vehicle. */
  REAR = "Rear"
}

/** Status of a vehicle provider. */
export enum VehicleProviderStatus {
  /** Is imported from any of the data providers. */
  NEW = "new",
  /** Has been attached to core vehicle. */
  ATTACHED = "attached",
  /** Has been detached from a core vehicle. */
  DETACHED = "detached",
  /** Has been archived by database maintainer. */
  ARCHIVED = "archived"
}

export enum VehiclePurpose {
  /** Vehicle intended for the transportation of passengers. */
  PASSENGER = "passenger",
  /** Vehicle intended for the transportation of cargo. */
  CARGO = "cargo",
  /** Vehicle intended for the transportation of everything except cargo or passengers. Eg: ambulances, agricultural vehicles, etcetera. */
  UTILITY = "utility"
}

export type VehicleRange = {
  /** Index range. */
  provider?: Maybe<Scalars["Float"]>;
  /** Indicates if index range is estimated. */
  provider_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Worst conditions are based on -10°C and use of heating. */
  worst: VehicleRangeValue;
  /** Best conditions are based on 23°C and no use of A/C. */
  best: VehicleRangeValue;
  /**
   * Chargetrip's custom real-world range provides a carefully calculated display range for all-electric vehicle models.
   * Chargetrip range is based on the theoretical distance driven using only the electric engine.
   * Vehicles that do not have a full electric drivetrain type (all except Battery Electric Vehicles / BEV) therefore return relatively small ranges.
   * More information on the CT range can be found at https://chargetrip.com/blog/what-is-ct-real-range
   */
  chargetrip_range: ChargetripRange;
};

export type VehicleRangeproviderArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehicleRangeValue = {
  /** Estimated value on the highway or express roads. */
  highway: Scalars["Float"];
  /** Estimated value on the cities road. */
  city: Scalars["Float"];
  /** Estimated combined value. */
  combined: Scalars["Float"];
};

export type VehicleRangeValuehighwayArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehicleRangeValuecityArgs = {
  unit?: Maybe<DistanceUnit>;
};

export type VehicleRangeValuecombinedArgs = {
  unit?: Maybe<DistanceUnit>;
};

export enum VehicleRegion {
  /** Africa. */
  AF = "AF",
  /** Asia. */
  AS = "AS",
  /** Europe. */
  EU = "EU",
  /** North America. */
  NA = "NA",
  /** Oceania. */
  OC = "OC",
  /** South America. */
  SA = "SA"
}

export type VehicleRouting = {
  /** Vehicles that support fast charging have a minimum charging speed of 43 kWh. */
  fast_charging_support: Scalars["Boolean"];
};

export type VehicleSpeed = {
  /** Value of the vehicle speed. */
  value: Scalars["Float"];
  /** Type of the vehicle speed. */
  type: SpeedUnit;
  /** Source of inputted data. */
  source: TelemetryInputSource;
};

export type VehicleSpeedInput = {
  /** Value of the vehicle speed. */
  value: Scalars["Float"];
  /** Type of the vehicle speed. */
  type: SpeedUnit;
  /** Source of inputted data, defaults to 'manual'. */
  source?: TelemetryInputSource;
};

/** Status of a vehicle. */
export enum VehicleStatus {
  /** Is being reviewed by a human operator. */
  DRAFT = "draft",
  /** Is public and can be used by a customer. */
  PUBLIC = "public",
  /** Is private and can be used by a human operator. */
  PRIVATE = "private",
  /** Is archived and can not be used. */
  ARCHIVED = "archived"
}

export type VehicleToEverything = {
  /** Information about Vehicle-to-Load. */
  vehicle_to_load?: Maybe<VehicleToEverythingLoad>;
  /** Information about Vehicle-to-Home. */
  vehicle_to_home?: Maybe<VehicleToEverythingHomeGrid>;
  /** Information about Vehicle-to-Grid. */
  vehicle_to_grid?: Maybe<VehicleToEverythingHomeGrid>;
};

export type VehicleToEverythingHomeGrid = {
  /** Vehicle-to-Home/Grid AC power information. */
  ac?: Maybe<VehicleToEverythingPower>;
  /** Vehicle-to-Home/Grid DC power information */
  dc?: Maybe<VehicleToEverythingPower>;
};

export type VehicleToEverythingLoad = {
  /** Vehicle-to-Load power information. */
  ac?: Maybe<VehicleToEverythingPower>;
  /** Details on interior ports available for V2L. */
  interior_ports?: Maybe<Scalars["String"]>;
  /** Details on exterior ports available for V2L. */
  exterior_ports?: Maybe<Scalars["String"]>;
};

export type VehicleToEverythingPower = {
  /** Indicates if this charging is supported. */
  is_supported?: Maybe<PowerSupported>;
  /** Maximum power output, in kilowatts. */
  maximum_power?: Maybe<Scalars["String"]>;
};

export enum VehicleType {
  /** Any motor vehicle with two wheels or a motor vehicle with no more than four wheels, does not have parallel seating, and is controlled by means of handlebars. */
  MOTORCYCLE = "motorcycle",
  /** A motor vehicle with three or four wheels that is not a Motorcycle, Pickup, Van, Truck, or Utility vehicle and either has a top speed of less than 60kph or an unladen weight of less than 400kg. */
  MICROCAR = "microcar",
  /** A motor vehicle that does not have an enclosed cab, is not a microcar or utility vehicle, is capable of carrying eight or fewer people, and that has less than one third of its internal volume dedicated to cargo, living, or sleeping space in its default configuration. */
  CAR = "car",
  /** A motor vehicle that has an enclosed cab, is not a utility vehicle, and has a fixed, non-articulated, open-top back cargo bed that is enclosed on at least three sides. */
  PICKUP = "pickup",
  /**
   * A motor vehicle that does not have an enclosed cab, is not a utility vehicle, that fulfills exactly one of the following conditions:
   * 1) It is capable of carrying more than eight but less than twenty people.
   * 2) At least one third of its internal volume is dedicated to cargo space in its default configuration.
   * 3) It is the passenger variant of a vehicle that meets criterion 2.
   */
  VAN = "van",
  /** A motor vehicle that does not have an enclosed cab, is not a Utility vehicle, and is capable of carrying 20 or more people in its default configuration. */
  BUS = "bus",
  /** A motor vehicle that has an enclosed cab and is not a Pickup or Utility vehicle. */
  TRUCK = "truck",
  /**
   * A motor vehicle that fulfills at least one of the following conditions:
   * 1) It does not have wheels.
   * 2) It has some mode of locomotion other than wheels in its default configuration such as treads, skis, or floats.
   * 3) It is capable of air or water travel in its default configuration.
   * 4) It was manufactured primarily for some purpose other than transporting cargo or passengers.
   * 5) It does not conform to any of the criteria for the other vehicle categories.
   */
  UTILITY = "utility"
}

export type VehicleVideo = {
  /** Video id. */
  id?: Maybe<Scalars["ID"]>;
  /** Full path URL of a video. */
  url?: Maybe<Scalars["String"]>;
};

export enum VolumeUnit {
  /** Return the volume in liters. */
  LITER = "liter",
  /** Return the volume in cubic meters. */
  CUBIC_METER = "cubic_meter",
  /** Return the volume in cubic feet. */
  CUBIC_FOOT = "cubic_foot"
}

/** Weight unit. */
export enum WeightUnit {
  /** Return the weight in kilograms. */
  KILOGRAM = "kilogram",
  /** Return the weight in pounds. */
  POUND = "pound"
}
