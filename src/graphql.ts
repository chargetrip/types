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
  /** The date and time scalar */
  DateTime: string;
  /** Any JSON object or array */
  JSON: { [key: string]: number | string | boolean | null | Scalars["JSON"] };
  /**
   * The `PlainString` scalar type represents textual data, represented as UTF-8 character sequences.
   * The PlainString type represents free-form human-readable text with HTML sanitization.
   */
  PlainString: any;
  /** The File Upload scalar */
  Upload: any;
  /** Void scalar. Returns null */
  Void: any;
};

export enum AccessType {
  PRIVATE = "Private",
  PUBLIC = "Public",
  RESTRICTED = "Restricted"
}

/** Information about an address */
export type Address = {
  /** City */
  city?: Maybe<Scalars["String"]>;
  /** Continent code (2 letters) */
  continent?: Maybe<Scalars["String"]>;
  /** Country code (2 letters) */
  country?: Maybe<Scalars["String"]>;
  /** County code (2 letters) */
  county?: Maybe<Scalars["String"]>;
  /** Human-readable address of a location */
  formattedAddress?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Street number */
  number?: Maybe<Scalars["String"]>;
  /** Postal code of a location */
  postalCode?: Maybe<Scalars["String"]>;
  /** Street name */
  street?: Maybe<Scalars["String"]>;
  /** String composed of 3 words which represent the location of an address on the globe. More details: http://w3w.co/<what3Words> */
  what3Words?: Maybe<Scalars["String"]>;
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
  BATHROOM = "bathroom",
  COFFEE = "coffee",
  HOTEL = "hotel",
  MUSEUM = "museum",
  PARK = "park",
  PHARMACY = "pharmacy",
  PLAYGROUND = "playground",
  RESTAURANT = "restaurant",
  SHOPPING = "shopping",
  SUPERMARKET = "supermarket"
}

/** The amenity model */
export type Amenity = {
  /** Embedded Address */
  address?: Maybe<Address>;
  /** Date and time when an amenity was created */
  createdAt?: Maybe<Scalars["String"]>;
  /** Computed distance between station and amenity */
  distance?: Maybe<Scalars["Int"]>;
  /** ID provided by an amenity data source as the row ID */
  externalId?: Maybe<Scalars["String"]>;
  /** Full path URL to amenity foursquare page */
  foursquareUrl?: Maybe<Scalars["String"]>;
  /** Unique amenity ID */
  id?: Maybe<Scalars["ID"]>;
  /** Geo location coordinates. This is a GeoJSON Point */
  location?: Maybe<Point>;
  /** Name of an amenity */
  name?: Maybe<Scalars["String"]>;
  /** Rating of an amenity, the value will be between 0.0 and 10.0. If no rating has been given, the value will be set to null */
  rating?: Maybe<Scalars["Float"]>;
  /** Type of amenity. An amenity can belong to multiple categories */
  type?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Date and time when an amenity was last updated */
  updatedAt?: Maybe<Scalars["String"]>;
};

/** Amenities stats model */
export type AmenityStats = {
  /** The total number of stations with the specified amenity */
  total?: Maybe<Scalars["Int"]>;
  /** The amenity type */
  type?: Maybe<Scalars["String"]>;
};

/** The type of the batter value */
export enum BatteryInputType {
  KM = "km",
  KWH = "kwh",
  MILES = "miles",
  PERCENTAGE = "percentage"
}

/** Output of a car query */
export type Car = {
  /**
   * Acceleration time from 0 to 100 km/h
   * @deprecated In favor of performance.acceleration
   */
  acceleration?: Maybe<Scalars["Float"]>;
  /** List of adapters of connectors available for a car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Availability of a car */
  availability?: Maybe<CarAvailability>;
  /** Battery of a car */
  battery?: Maybe<CarBattery>;
  /**
   * Battery efficiency in the city, highway and combined depending on weather conditions
   * @deprecated In favor of efficiency
   */
  batteryEfficiency?: Maybe<CarBatteryEfficiency>;
  /**
   * Full battery capacity in kWh
   * @deprecated In favor of battery.full_kwh
   */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /**
   * Usable battery capacity in kWh
   * @deprecated In favor of battery.usable_kwh
   */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /** Body of a car */
  body?: Maybe<CarBody>;
  /**
   * Car model
   * @deprecated In favor of naming.model
   */
  carModel?: Maybe<Scalars["String"]>;
  /**
   * Car model edition. Added by Chargetrip as an alternative for when a car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years
   * @deprecated In favor of naming.chargetrip_version
   */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /**
   * Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data
   * @deprecated In favor of range.chargetrip_range
   */
  chargetripRange?: Maybe<ChargetripRange>;
  /**
   * A list of offset data for different charging speeds
   * @deprecated You will receive null values
   */
  chargingOffset?: Maybe<Scalars["JSON"]>;
  /** Information about vehicle connectivity */
  connect?: Maybe<Connect>;
  /** Available connectors for a car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /**
   * Extra consumption model
   * @deprecated In favor of routing.consumption
   */
  consumption?: Maybe<CarExtraConsumption>;
  /**
   * Car edition
   * @deprecated In favor of naming.version
   */
  edition?: Maybe<Scalars["String"]>;
  /**
   * ID provided by a car data source as the row ID
   * @deprecated Will be removed in the future
   */
  externalId?: Maybe<Scalars["String"]>;
  /**
   * Cars that support fast charging have a minimum charging speed of 43 kWh
   * @deprecated In favor of routing.fast_charging_support
   */
  fastChargingSupport?: Maybe<Scalars["Boolean"]>;
  /**
   * Height in mm
   * @deprecated In favor of body.height
   */
  height?: Maybe<Scalars["Int"]>;
  /** Cars unique ID */
  id?: Maybe<Scalars["ID"]>;
  /**
   * Images of a car
   * @deprecated In favor of media.image_list
   */
  images?: Maybe<Array<Maybe<CarImage>>>;
  /**
   * Images of a car in structured data
   * @deprecated In favor of media.image or media.brand
   */
  imagesData?: Maybe<CarImageData>;
  /**
   * Car manufacturer
   * @deprecated In favor of naming.make
   */
  make?: Maybe<Scalars["String"]>;
  /** Media of a car */
  media?: Maybe<CarMedia>;
  /**
   * Current production mode of a car
   * @deprecated In favor of availability.status
   */
  mode?: Maybe<CarMode>;
  /** Naming of a car */
  naming?: Maybe<CarNaming>;
  /** Performance of a car */
  performance?: Maybe<CarPerformance>;
  /**
   * Amount of petrol a similar petrol car would consume per 100 km
   * @deprecated In favor of routing.petrol_consumption
   */
  petrolConsumption?: Maybe<Scalars["Float"]>;
  /**
   * Power of a car in Kw
   * @deprecated In favor of drivetrain.power
   */
  power?: Maybe<Scalars["Float"]>;
  /** Range of a car */
  range?: Maybe<CarRange>;
  /** Routing of a car */
  routing?: Maybe<CarRouting>;
  /**
   * Number of seats
   * @deprecated In favor of body.seats
   */
  seats?: Maybe<Scalars["Int"]>;
  /**
   * Maximum car speed in km/h
   * @deprecated In favor of performance.top_speed
   */
  topSpeed?: Maybe<Scalars["Float"]>;
  /**
   * Engine torque
   * @deprecated In favor of drivetrain.torque
   */
  torque?: Maybe<Scalars["Float"]>;
  /**
   * Car version
   * @deprecated In favor of naming.edition
   */
  version?: Maybe<Scalars["String"]>;
  /**
   * Weight in kg
   * @deprecated In favor of body.weight
   */
  weight?: Maybe<Scalars["Float"]>;
  /**
   * Width in mm
   * @deprecated In favor of body.width
   */
  width?: Maybe<Scalars["Int"]>;
};

export type CarAvailability = {
  /**
   * Availability of car
   *
   * Values:
   *    - 0 = Car no longer for sale in any market / region
   *    - 1 = Car currently for sale in at least one market / region
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unkown or not open
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown
   *    - 91 = Status uncertain, introduction date and/or pricing unclear
   */
  status?: Maybe<Scalars["Int"]>;
};

export type CarBattery = {
  /** Full battery capacity in kWh */
  full_kwh?: Maybe<Scalars["Float"]>;
  /** Usable battery capacity in kWh */
  usable_kwh?: Maybe<Scalars["Float"]>;
};

/** Deprecated */
export type CarBatteryEfficiency = {
  /** Average efficiency measured in kWh/100 km */
  average?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C, measured in kWh/100 km */
  best?: Maybe<CarEstimationData>;
  /** Worst conditions are based on -10°C and use of heating, measured in kWh/100 km */
  worst?: Maybe<CarEstimationData>;
};

/** Battery field estimated */
export enum CarBatteryFieldEstimations {
  /** Both of the battery kWh fields are estimations */
  B = "B",
  /** full_kwh field is estimated */
  F = "F",
  /** None of the battery kWh fields are estimations */
  N = "N",
  /** usable_kwh field is estimated */
  U = "U"
}

export type CarBody = {
  /** Height (average height for adjustable suspensions) in mm */
  height?: Maybe<Scalars["Int"]>;
  /** Number of seats */
  seats?: Maybe<Scalars["Int"]>;
  /** Weight Unladen EU) in kg */
  weight?: Maybe<Scalars["Int"]>;
  /** Width with folded mirrors in mm */
  width?: Maybe<Scalars["Int"]>;
};

/** Deprecated */
export type CarConsumption = {
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
};

/** The consumption of the car */
export type CarConsumptionInput = {
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
};

/** Drivetrain */
export enum CarDrivetrain {
  /** Battery Electric Car */
  BEV = "BEV",
  /** Extended Range Electric Car */
  EREV = "EREV"
}

/** Deprecated */
export type CarEstimationData = {
  /** Estimated battery efficiency on city roads, in km */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on highway and city roads combined, in km */
  combined?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on a highway or express roads, in km */
  highway?: Maybe<Scalars["Float"]>;
};

/** Deprecated */
export type CarExtraConsumption = {
  /** Consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumption>;
  /** Consumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumption>;
  /** Consumption, in kWh, of a car in idle mode */
  idle?: Maybe<CarConsumption>;
};

/** Fuel type */
export enum CarFuel {
  /** Electricity only. Full electric car */
  E = "E"
}

export type CarImage = {
  /** Height of a large image in pixels */
  height?: Maybe<Scalars["Int"]>;
  /** Image id */
  id?: Maybe<Scalars["ID"]>;
  /** Height of a thumbnail image in pixels */
  thumbnail_height?: Maybe<Scalars["Int"]>;
  /** Full path URL of a thumbnail image */
  thumbnail_url?: Maybe<Scalars["String"]>;
  /** Width of a thumbnail image in pixels */
  thumbnail_width?: Maybe<Scalars["Int"]>;
  /** Image type */
  type?: Maybe<CarImageType>;
  /** Full path URL of a large image */
  url?: Maybe<Scalars["String"]>;
  /** Width of a large image in pixels */
  width?: Maybe<Scalars["Int"]>;
};

/** Deprecated */
export type CarImageData = {
  /** Full size logo of the maker of a car */
  brand?: Maybe<CarImage>;
  /** Thumbnail of a full size logo of the maker of a car */
  brand_thumbnail?: Maybe<CarImage>;
  /** Full size image of a car */
  image?: Maybe<CarImage>;
  /** Thumbnail of a full size image */
  image_thumbnail?: Maybe<CarImage>;
};

/** Available types of images which can be found for a car. Each type has specific image sizes */
export enum CarImageType {
  /** Full-sized brand (maker) logo at 768x432 px */
  BRAND = "brand",
  /** Thumbnail of a full-sized brand logo at 56x24 px */
  BRAND_THUMBNAIL = "brand_thumbnail",
  /** Full-sized image at 1536x864 px */
  IMAGE = "image",
  /** Thumbnail of a full-sized image at 131x72 px */
  IMAGE_THUMBNAIL = "image_thumbnail",
  /** Images provided by a Car Datasource */
  PROVIDER = "provider"
}

/** When uploading images to a car, you can select one of this types. The rest of the types are automatically generated by the system */
export enum CarImageTypeUploadable {
  /** Full size image with a resolution at least 1536x864 px */
  IMAGE = "image"
}

/** The output element of the carList query */
export type CarList = {
  /** @deprecated You will receive null values */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Adapters of connectors available for a car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** @deprecated You will receive null values */
  auxConsumption?: Maybe<Scalars["Float"]>;
  /** Availability of a car */
  availability?: Maybe<CarListAvailability>;
  /** Battery of a car */
  battery?: Maybe<CarListBattery>;
  /** @deprecated You will receive null values */
  batteryEfficiency?: Maybe<CarBatteryEfficiency>;
  /**
   * Full battery capacity in kWh
   * @deprecated In favor of battery.full_kwh
   */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /**
   * Usable battery capacity in kWh
   * @deprecated In favor of battery.usable_kwh
   */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  bmsConsumption?: Maybe<Scalars["Float"]>;
  /** Body of a car */
  body?: Maybe<CarListBody>;
  /**
   * Car model
   * @deprecated In favor of naming.model
   */
  carModel?: Maybe<Scalars["String"]>;
  /**
   * Car model edition. Added by Chargetrip as an alternative for when a car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years
   * @deprecated In favor of naming.chargetrip_version
   */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /**
   * Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data
   * @deprecated In favor of range.chargetrip_range
   */
  chargetripRange?: Maybe<ChargetripRange>;
  /** @deprecated You will receive null values */
  chargingOffset?: Maybe<Scalars["JSON"]>;
  /** Information about vehicle connectivity */
  connect?: Maybe<Connect>;
  /** Connectors available for a car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** @deprecated You will receive null values */
  consumption?: Maybe<CarExtraConsumption>;
  /** @deprecated You will receive null values */
  dragCoefficient?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  drivelineEfficiency?: Maybe<Scalars["Float"]>;
  /**
   * Car edition
   * @deprecated In favor of naming.version
   */
  edition?: Maybe<Scalars["String"]>;
  /**
   * ID provided by a car data source as the row ID
   * @deprecated Will be removed in the future
   */
  externalId?: Maybe<Scalars["String"]>;
  /**
   * Cars that support fast charging have a minimum charging speed of 43 kWh
   * @deprecated In favor of routing.fast_charging_support
   */
  fastChargingSupport?: Maybe<Scalars["Boolean"]>;
  /** @deprecated You will receive null values */
  height?: Maybe<Scalars["Int"]>;
  /** Cars unique ID */
  id?: Maybe<Scalars["ID"]>;
  /** @deprecated You will receive null values */
  images?: Maybe<Array<Maybe<CarImage>>>;
  /**
   * Images of a car in structured data
   * @deprecated In favor of media.image and media.brand
   */
  imagesData?: Maybe<CarImageData>;
  /**
   * Car manufacturer
   * @deprecated In favor of naming.make
   */
  make?: Maybe<Scalars["String"]>;
  /** Media of a car */
  media?: Maybe<CarListMedia>;
  /**
   * Current production mode of a car
   * @deprecated In favor of availability.status
   */
  mode?: Maybe<CarMode>;
  /** @deprecated You will receive null values */
  motorEfficiency?: Maybe<Scalars["Float"]>;
  /** Naming of a car */
  naming?: Maybe<CarListNaming>;
  /** @deprecated You will receive null values */
  petrolConsumption?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  power?: Maybe<Scalars["Float"]>;
  /** Range of a car */
  range?: Maybe<CarListRange>;
  /** @deprecated You will receive null values */
  regenEfficiency?: Maybe<Scalars["Float"]>;
  /** Routing of a car */
  routing?: Maybe<CarListRouting>;
  /**
   * Number of seats
   * @deprecated In favor of body.seats
   */
  seats?: Maybe<Scalars["Int"]>;
  /** @deprecated You will receive null values */
  tirePressure?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  topSpeed?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  torque?: Maybe<Scalars["Float"]>;
  /**
   * Car version
   * @deprecated In favor of naming.edition
   */
  version?: Maybe<Scalars["String"]>;
  /** @deprecated You will receive null values */
  weight?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  width?: Maybe<Scalars["Int"]>;
};

export type CarListAvailability = {
  /**
   * Availability of car
   *
   * Values:
   *    - 0 = Car no longer for sale in any market / region
   *    - 1 = Car currently for sale in at least one market / region
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unkown or not open
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown
   *    - 91 = Status uncertain, introduction date and/or pricing unclear
   */
  status?: Maybe<Scalars["Int"]>;
};

export type CarListBattery = {
  /** Full battery capacity in kWh */
  full_kwh?: Maybe<Scalars["Float"]>;
  /** Usable battery capacity in kWh */
  usable_kwh?: Maybe<Scalars["Float"]>;
};

export type CarListBody = {
  /** Number of seats in car */
  seats?: Maybe<Scalars["Int"]>;
};

export type CarListFilter = {
  /**
   * Availability of car
   *
   * Values:
   *    - 0 = Car no longer for sale in any market / region
   *    - 1 = Car currently for sale in at least one market / region
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unkown or not open
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown
   *    - 91 = Status uncertain, introduction date and/or pricing unclear
   */
  availability?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  /** Information about vehicle connectivity */
  connect?: Maybe<ConnectFilter>;
};

export type CarListMedia = {
  /** Latest maker logo of the car */
  brand?: Maybe<CarImage>;
  /** Latest image of the car */
  image?: Maybe<CarImage>;
  /** Latest video of the car */
  video?: Maybe<CarVideo>;
};

export type CarListNaming = {
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years */
  chargetrip_version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car */
  edition?: Maybe<Scalars["String"]>;
  /** Car manufacturer name */
  make?: Maybe<Scalars["String"]>;
  /** Car model name */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car */
  version?: Maybe<Scalars["String"]>;
};

/** Deprecated */
export type CarListQuery = {
  /** Deprecated: Not used anymore */
  chargetrip_version?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore */
  make?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore */
  mode?: Maybe<CarMode>;
  /** Deprecated: Not used anymore */
  model?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore */
  version?: Maybe<Scalars["String"]>;
};

export type CarListRange = {
  /** @deprecated You will receive null values */
  best?: Maybe<CarEstimationData>;
  /**
   *  Is an index value of what we consider to be the real-world range.
   * (Comparable to Range_Real from EV Database.) It is essentially a normalized range to display in the front-end.
   */
  chargetrip_range?: Maybe<ChargetripRange>;
  /** @deprecated You will receive null values */
  wltp?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  worst?: Maybe<CarEstimationData>;
};

export type CarListRouting = {
  /** Cars that support fast charging have a minimum charging speed of 43 kWh */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
};

export type CarMedia = {
  /** Latest maker logo */
  brand?: Maybe<CarImage>;
  /**
   * URL to detail page on EV database
   * @deprecated Will be removed in the future. Please use evdb_details_url
   */
  evdb_detail_url?: Maybe<Scalars["String"]>;
  /** URL to detail page on EV database */
  evdb_details_url?: Maybe<Scalars["String"]>;
  /** Latest image */
  image?: Maybe<CarImage>;
  /** All images */
  image_list?: Maybe<Array<Maybe<CarImage>>>;
  /** Latest video */
  video?: Maybe<CarVideo>;
  /** All videos */
  video_list?: Maybe<Array<Maybe<CarVideo>>>;
};

/** Mode (state) of the current production */
export enum CarMode {
  /** Future releases of a car, a concept of the car, specs may change over time */
  CONCEPT = "concept",
  /** Old car that is no longer manufactured */
  INDEX_ONLY = "index_only",
  /** Car is in production and has been released */
  PRODUCTION = "production"
}

export type CarNaming = {
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years */
  chargetrip_version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car */
  edition?: Maybe<Scalars["String"]>;
  /** Car manufacturer name */
  make?: Maybe<Scalars["String"]>;
  /** Car model name */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car */
  version?: Maybe<Scalars["String"]>;
};

export type CarPerformance = {
  /** Acceleration 0-100 km/h in seconds */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Top speed of car in km/h */
  top_speed?: Maybe<Scalars["Int"]>;
};

/** Car plug model */
export type CarPlug = {
  /** Maximum electric power in kW */
  max_electric_power?: Maybe<Scalars["Float"]>;
  /** Usable electric power in kW */
  power?: Maybe<Scalars["Float"]>;
  /** Charging speed in km/h */
  speed?: Maybe<Scalars["Int"]>;
  /** Plug type, known as connector standard in OCPI */
  standard?: Maybe<ConnectorType>;
  /** Time it takes to charge from 10 to 80% with a fast charger, shown in minutes */
  time?: Maybe<Scalars["Int"]>;
};

/** The output element of the carPremium query */
export type CarPremium = {
  /** Adapters of connectors available for a car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Availability of a car */
  availability?: Maybe<CarPremiumAvailability>;
  /** Battery of a car */
  battery?: Maybe<CarPremiumBattery>;
  /** Body of a car */
  body?: Maybe<CarPremiumBody>;
  /** Charge details */
  charge?: Maybe<CarPremiumCharge>;
  /** Information about vehicle connectivity */
  connect?: Maybe<Connect>;
  /** Connectors available for a car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** Drivetrain of a car */
  drivetrain?: Maybe<CarPremiumDrivetrain>;
  /** Efficiency of a car */
  efficiency?: Maybe<CarPremiumEfficiency>;
  /** Fast charge details */
  fast_charge?: Maybe<CarPremiumFastCharge>;
  /** Unique ID of a car */
  id?: Maybe<Scalars["ID"]>;
  /** Media of a car */
  media?: Maybe<CarPremiumMedia>;
  /** Naming of a car */
  naming?: Maybe<CarPremiumNaming>;
  /** Performance of a car */
  performance?: Maybe<CarPremiumPerformance>;
  /** Pricing of a car */
  price?: Maybe<CarPremiumPrice>;
  /** Range of a car */
  range?: Maybe<CarPremiumRange>;
  /** Routing of a car */
  routing?: Maybe<CarPremiumRouting>;
  /** Safety of a car */
  safety?: Maybe<CarPremiumSafety>;
  /** Internal ID of the successor car trim */
  succesor_id?: Maybe<Scalars["String"]>;
};

export type CarPremiumAvailability = {
  /** Date of introduction, mm-yyyy */
  date_from?: Maybe<Scalars["String"]>;
  /** Indicates if date from field is estimated */
  date_from_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Date last available, mm-yyyy */
  date_to?: Maybe<Scalars["String"]>;
  /**
   * Availability of car
   *
   * Values:
   *    - 0 = Car no longer for sale in any market/region
   *    - 1 = Car currently for sale in at least one market/region
   *    - 2 = Car expected in market from Date_From (estimated), pre-order open
   *    - 3 = Car expected in market from Date_From (estimated), pre-order unknown or not open
   *    - 12 = Concept car, nearing production and/or confirmed, pre-order open
   *    - 13 = Concept car, nearing production and/or confirmed, pre-order unknown or not open
   *    - 22 = Concept car, not close to production and/or unconfirmed, pre-order open
   *    - 23 = Concept car, not close to production and/or unconfirmed, pre-order unknown
   *    - 91 = Status uncertain, introduction date and/or pricing unclear
   */
  status?: Maybe<Scalars["Int"]>;
};

export type CarPremiumBattery = {
  /** Indicates which battery fields are estimated */
  estimated_fields?: Maybe<CarBatteryFieldEstimations>;
  /** Full battery capacity in kWh */
  full_kwh?: Maybe<Scalars["Float"]>;
  /** Battery thermal management system (active/passive, air/liquid) */
  thermal_management_system?: Maybe<Scalars["String"]>;
  /** Usable battery capacity in kWh */
  usable_kwh?: Maybe<Scalars["Float"]>;
  /** Mileage of battery warranty */
  warranty_mileage?: Maybe<Scalars["Float"]>;
  /** Duration of battery warranty */
  warranty_period?: Maybe<Scalars["Float"]>;
};

export type CarPremiumBody = {
  /** Body type, listed in local naming convention where applicable */
  body_type?: Maybe<Scalars["String"]>;
  /** Standard luggage capacity in l */
  boot_capacity?: Maybe<Scalars["Int"]>;
  /** Maximum luggage capacity in l */
  boot_capacity_max?: Maybe<Scalars["Int"]>;
  /** Storage capacity of front trunk/under the hood (frunk) */
  boot_front_capacity?: Maybe<Scalars["Int"]>;
  /** Width of vehicle in mm, including mirrors */
  full_width?: Maybe<Scalars["Int"]>;
  /** Indicates whether a car has roof rails as a standard */
  has_roofrails?: Maybe<Scalars["Boolean"]>;
  /** Height (average height for adjustable suspensions) in mm */
  height?: Maybe<Scalars["Int"]>;
  /** Length in mm */
  length?: Maybe<Scalars["Int"]>;
  /** Gross Vehicle Weight (GVWR) - (max allowed vehicle weight with payload) in kg */
  max_gross_vehicle_weight?: Maybe<Scalars["Int"]>;
  /** Maximum load on roof of car in kg */
  roof_load_max?: Maybe<Scalars["Int"]>;
  /**
   * Indicates whether a car has roof rails as a standard
   * @deprecated In favor of has_roofrails
   */
  rooftrails?: Maybe<Scalars["Boolean"]>;
  /** Number of seats */
  seats?: Maybe<Scalars["Int"]>;
  /** Segment, listed in local naming convention where applicable */
  segment?: Maybe<Scalars["String"]>;
  /** Indicates if length/width/height fields are estimations */
  size_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Indicates if a tow hitch/towbar can be fitted according to vehicle homologation */
  tow_hitch_compatible?: Maybe<Scalars["Boolean"]>;
  /** Maximum braked towing weight in kg */
  tow_weight_braked?: Maybe<Scalars["Int"]>;
  /** Indicates if tow weight fields are estimations */
  tow_weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum unbraked towing weight in kg */
  tow_weight_unbraked?: Maybe<Scalars["Int"]>;
  /** Maximum vertical load / noseweight on tow hitch according to vehicle homologation */
  tow_weight_vertical_load?: Maybe<Scalars["Int"]>;
  /** Turning circle of vehicle kerb-to-kerb */
  turning_circle?: Maybe<Scalars["Float"]>;
  /** Name of vehicle platform used for vehicle (often abbreviated to indicate group platforms) */
  vehicle_platform?: Maybe<Scalars["String"]>;
  /** Indicates if the vehicle platform used for vehicle is a dedicated battery electric vehicle platform */
  vehicle_platform_is_dedicated?: Maybe<Scalars["Boolean"]>;
  /** Weight (unladen EU) in kg */
  weight?: Maybe<Scalars["Int"]>;
  /** Indicates if weight field is estimated */
  weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum payload allowed for vehicle in kg */
  weight_max_payload?: Maybe<Scalars["Int"]>;
  /** Wheelbase in mm */
  wheelbase?: Maybe<Scalars["Int"]>;
  /** Indicates if wheelbase field is estimated */
  wheelbase_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Width with folded mirrors in mm */
  width?: Maybe<Scalars["Int"]>;
};

export type CarPremiumCharge = {
  /** The car alternative charge */
  alternative?: Maybe<CarPremiumChargeAlternativeOBC>;
  /** The car option charge */
  option?: Maybe<CarPremiumChargeOptionOBC>;
  /** Location of charge port */
  plug?: Maybe<CarPremiumChargePlug>;
  /** Location of second charge port */
  second_plug?: Maybe<CarPremiumChargeSecondPlug>;
  /** The car standard charge */
  standard?: Maybe<CarPremiumChargeStandardOBC>;
};

export type CarPremiumChargeAlternativeOBC = {
  /** Charging speed when charging at maximum power (standard OBC) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC) */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC) */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum power OBC can accept to charge a battery (standard OBC) */
  power?: Maybe<Scalars["Float"]>;
  /** Charging details for the standard OBC at several charging points */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

export type CarPremiumChargeOBCTable = {
  /** Current per phase used by standard OBC (phase current) */
  charge_phase_amperage?: Maybe<Scalars["Float"]>;
  /** Voltage between phase and neutral used by standard OBC (phase voltage) */
  charge_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Number of phases used by standard OBC */
  charge_phases?: Maybe<Scalars["Int"]>;
  /** Power used by standard OBC (before OBC losses) */
  charge_power?: Maybe<Scalars["Float"]>;
  /** Charging speed when charging at maximum power (standard OBC with this EVSE) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC with this EVSE) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Current per phase for this EVSE (phase current) */
  evse_phase_amperage?: Maybe<Scalars["Int"]>;
  /** Voltage between phase and neutral for this EVSE (phase voltage) */
  evse_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Number of phases for this EVSE */
  evse_phases?: Maybe<Scalars["Int"]>;
};

export type CarPremiumChargeOptionOBC = {
  /** Charging speed when charging at maximum power (standard OBC) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC) */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC) */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum power OBC can accept to charge a battery (standard OBC) */
  power?: Maybe<Scalars["Float"]>;
  /** Charging details for the standard OBC at several charging points */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

export type CarPremiumChargePlug = {
  /** Indicates if value is an estimate */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Location of charge port */
  location?: Maybe<Scalars["String"]>;
  /** Type of charge port on vehicle */
  value?: Maybe<ConnectorType>;
};

export type CarPremiumChargePower = {
  /** Average value */
  average?: Maybe<Scalars["Float"]>;
  /** Maximum value */
  max?: Maybe<Scalars["Float"]>;
};

export type CarPremiumChargeSecondPlug = {
  /** Indicates if second charge port is optional */
  is_optional?: Maybe<Scalars["Boolean"]>;
  /** Location of charge port */
  location?: Maybe<Scalars["String"]>;
};

export type CarPremiumChargeStandardOBC = {
  /** Charging speed when charging at maximum power (standard OBC) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Indicates if Charge_Standard fields are estimated */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC) */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC) */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum power OBC can accept to charge a battery (standard OBC) */
  power?: Maybe<Scalars["Float"]>;
  /** Charging details for the standard OBC at several charging points */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

export type CarPremiumDrivetrain = {
  /** Fuel type */
  fuel?: Maybe<CarFuel>;
  /** Maximum (combined) power output in kw */
  power?: Maybe<Scalars["Int"]>;
  /** Maximum (combined) power output in horsepower (PS) */
  power_hp?: Maybe<Scalars["Int"]>;
  /** Indicates if power field is estimated */
  power_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Propulsion type */
  propulsion?: Maybe<CarPropulsion>;
  /** Indicates if propulsion field is estimated */
  propulsion_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum (combined) torque output in newton meter */
  torque?: Maybe<Scalars["Int"]>;
  /** Indicates if torque field is estimated */
  torque_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Type of drivetrain */
  type?: Maybe<CarDrivetrain>;
};

export type CarPremiumEfficiency = {
  /** Rated efficiency in NEDC combined cycle */
  nedc?: Maybe<CarPremiumEfficiencyNEDC>;
  /** Car efficiency based on RealRange */
  real?: Maybe<CarPremiumEfficiencyReal>;
  /** Rated efficiency in WLTP combined cycle */
  wltp?: Maybe<CarPremiumEfficiencyWLTP>;
  /** Rated efficiency in WLTP combined cycle (TEH / least efficient trim) */
  wltp_teh?: Maybe<CarPremiumEfficiencyWLTPTEH>;
};

export type CarPremiumEfficiencyNEDC = {
  /** Rated CO2 emissions in NEDC combined cycle in battery-only mode (NULL if not NEDC rated) in gr/km */
  co2?: Maybe<Scalars["Int"]>;
  /** Rated efficiency in NEDC combined cycle presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in NEDC combined cycle in kWh/100 km */
  value?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle (based on value) in kWh/100 km */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle presented in gas equivalent in l/100 km */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
};

export type CarPremiumEfficiencyReal = {
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<CarPremiumEfficiencyRealValue>;
  /** Car efficiency based on RealRange presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Car efficiency based on RealRange (useable battery/range) in kWh/100 km */
  value?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<CarPremiumEfficiencyRealValue>;
};

export type CarPremiumEfficiencyRealValue = {
  /** Estimated value on city roads */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated combined value */
  combined?: Maybe<Scalars["Float"]>;
  /** Estimated value on highway or express roads */
  highway?: Maybe<Scalars["Float"]>;
};

export type CarPremiumEfficiencyWLTP = {
  /** Rated CO2 emissions in WLTP combined cycle in battery-only mode (NULL if not WLTP rated) in gr/km */
  co2?: Maybe<Scalars["Int"]>;
  /** Rated efficiency in WLTP combined cycle presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP combined cycle in kWh/100 km */
  value?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle (based on value) in kWh/100 km */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle presented in gas equivalent, in l/100 km */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
};

export type CarPremiumEfficiencyWLTPTEH = {
  /** Rated CO2 emissions in WLTP TEH combined cycle in battery-only mode (NULL if not WLTP TEH rated) in gr/km */
  co2?: Maybe<Scalars["Int"]>;
  /** Rated efficiency in WLTP TEH combined cycle presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP TEH combined cycle (TEH/least efficient trim) */
  value?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle (based on value) in kWh/100 km */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle presented in gas equivalent, in l/100 km */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
};

export type CarPremiumFastCharge = {
  /** Charging speed during fast charging from 10% to 80% (optimal conditions, fastest charger) */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 10% to 80%, with average charging power (optimal conditions, fastest charger) */
  charge_time?: Maybe<Scalars["Float"]>;
  /** Indicates what fields are estimated */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Indicates if fast charge is optional in some markets/regions */
  is_optional?: Maybe<Scalars["Boolean"]>;
  /** Location of charge port */
  plug?: Maybe<CarPremiumChargePlug>;
  /** Power during fast charging from 10% to 80% SoC (optimal conditions, fastest charger) */
  power?: Maybe<CarPremiumChargePower>;
  /** Charging details for fast charging */
  table?: Maybe<Array<Maybe<CarPremiumFastChargeTable>>>;
};

export type CarPremiumFastChargeTable = {
  /** Indicates if average power during fast charging is limited by the vehicle */
  average_is_limited?: Maybe<Scalars["Boolean"]>;
  /** Charging speed during fast charging from 10% to 80% (optimal conditions) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Minutes needed to charge from 10% to 80% (optimal conditions) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging details for fast charging (format: ChargerPlug-ChargerPower-AC/DC) */
  format?: Maybe<Scalars["String"]>;
  /** Indicates if maximum power during fast charging is limited by the vehicle */
  is_limited?: Maybe<Scalars["Boolean"]>;
  /** Fast charge power */
  power?: Maybe<CarPremiumChargePower>;
};

export type CarPremiumMedia = {
  /** Latest maker logo */
  brand?: Maybe<CarImage>;
  /**
   * URL to detail page on EV database
   * @deprecated Will be removed in the future. Please use evdb_details_url
   */
  evdb_detail_url?: Maybe<Scalars["String"]>;
  /** URL to detail page on EV database */
  evdb_details_url?: Maybe<Scalars["String"]>;
  /** Latest image */
  image?: Maybe<CarImage>;
  /** All images */
  image_list?: Maybe<Array<Maybe<CarImage>>>;
  /** Latest video */
  video?: Maybe<CarVideo>;
  /** All videos */
  video_list?: Maybe<Array<Maybe<CarVideo>>>;
};

export type CarPremiumNaming = {
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide a version name, or uses the same version name across all trims or consecutive years */
  chargetrip_version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car */
  edition?: Maybe<Scalars["String"]>;
  /** Car manufacturer name */
  make?: Maybe<Scalars["String"]>;
  /** Car model name */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car */
  version?: Maybe<Scalars["String"]>;
};

export type CarPremiumPerformance = {
  /** Acceleration 0-100 km/h in seconds */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Indicates if acceleration field is estimated */
  acceleration_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Top speed of car in km/h */
  top_speed?: Maybe<Scalars["Int"]>;
  /** Indicates if top_speed field is estimated */
  top_speed_is_estimated?: Maybe<Scalars["Boolean"]>;
};

export type CarPremiumPrice = {
  /** Starting price for German market */
  de?: Maybe<CarPremiumPriceValue>;
  /** Starting price for Dutch market */
  nl?: Maybe<CarPremiumPriceValue>;
  /** Starting price for British market */
  uk?: Maybe<CarPremiumPriceValueWithGrant>;
};

export type CarPremiumPriceValue = {
  /** Currency name for local market */
  currency?: Maybe<Scalars["String"]>;
  /**
   * Indicates if price value is based on estimates
   * @deprecated In favor of is_estimated
   */
  estimated?: Maybe<Scalars["Boolean"]>;
  /** Indicates if price value is based on estimates */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Starting price for local market */
  value?: Maybe<Scalars["Int"]>;
};

export type CarPremiumPriceValueWithGrant = {
  /** Currency name for local market */
  currency?: Maybe<Scalars["String"]>;
  /**
   * Indicates if price value is based on estimates
   * @deprecated In favor of is_estimated
   */
  estimated?: Maybe<Scalars["Boolean"]>;
  /** Grant is applied to value */
  grant_applied?: Maybe<Scalars["Int"]>;
  /** Indicates if price value is based on estimates */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Starting price for local market */
  value?: Maybe<Scalars["Int"]>;
};

export type CarPremiumRange = {
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<CarPremiumRangeValue>;
  /** Is an index value of what we consider to be the real-world range. (Comparable to Range_Real from EV Database.) It is essentially a normalized range to display on the front-end. */
  chargetrip_range?: Maybe<ChargetripRange>;
  /** Rated range in NEDC combined cycle (NULL if not NEDC rated) in km */
  nedc?: Maybe<Scalars["Int"]>;
  /** Indicates if NEDC range is estimated (NULL if not NEDC rated) */
  nedc_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Index range in EV Database RealRange model in km */
  real?: Maybe<Scalars["Int"]>;
  /** Indicates if real is estimated */
  real_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Rated range in WLTP combined cycle (NULL if not WLTP rated) in km */
  wltp?: Maybe<Scalars["Int"]>;
  /** Indicates if WLTP range is estimated (NULL if not WLTP rated) */
  wltp_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Rated range in WLTP (TEH/least efficient trim) combined cycle (NULL if not WLTP rated) */
  wltp_teh?: Maybe<Scalars["Int"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<CarPremiumRangeValue>;
};

export type CarPremiumRangeValue = {
  /** Estimated value on city roads */
  city?: Maybe<Scalars["Int"]>;
  /** Estimated combined value */
  combined?: Maybe<Scalars["Int"]>;
  /** Estimated value on highway or express roads */
  highway?: Maybe<Scalars["Int"]>;
};

export type CarPremiumRouting = {
  /** Extra consumption model */
  consumption?: Maybe<CarPremiumRoutingConsumption>;
  /** Drag coefficient */
  drag_coefficient?: Maybe<Scalars["Float"]>;
  /** Cars that support fast charging have a minimum charging speed of 43 kWh */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
  /** Amount of petrol that an equivalent petrol car would consume in l/100 km */
  petrol_consumption?: Maybe<Scalars["Float"]>;
  /** Tire pressure recommended by manufacturer */
  tire_pressure?: Maybe<Scalars["Float"]>;
};

export type CarPremiumRoutingConsumption = {
  /** Consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarPremiumRoutingConsumptionValue>;
  /** Consumption, in kWh, of the battery management system */
  bms?: Maybe<CarPremiumRoutingConsumptionValue>;
  /** Consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarPremiumRoutingConsumptionValue>;
};

export type CarPremiumRoutingConsumptionValue = {
  /** Best (lowest) consumption in summer */
  best?: Maybe<Scalars["Float"]>;
  /** Best (lowest) consumption in winter */
  worst?: Maybe<Scalars["Float"]>;
};

export type CarPremiumSafety = {
  /** EuroNCAP results */
  euro_ncap?: Maybe<CarPremiumSafetyEuroNcap>;
  /** Number of seats equipped with ISOFIX */
  isofix_seats?: Maybe<Scalars["Int"]>;
};

export type CarPremiumSafetyEuroNcap = {
  /** EuroNCAP rating of adult protection (out of 100%) */
  adult?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of child protection (out of 100%) */
  child?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating (out of 5 stars) */
  rating?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of safety assists (out of 100%) */
  sa?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of vulnerable road users (out of 100%) */
  vru?: Maybe<Scalars["Int"]>;
  /** EuroNCAP year of rating */
  year?: Maybe<Scalars["Int"]>;
};

/** Propulsion */
export enum CarPropulsion {
  /** All-wheel drive car */
  AWD = "AWD",
  /** Front-wheel drive car */
  FRONT = "Front",
  /** Rear-wheel drive car */
  REAR = "Rear"
}

export type CarRange = {
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<CarRangeValue>;
  /** Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data */
  chargetrip_range?: Maybe<ChargetripRange>;
  /** Index range in EV Database RealRange model in km */
  real?: Maybe<Scalars["Int"]>;
  /** Indicates if real is estimated */
  real_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** @deprecated You will receive null values */
  wltp?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<CarRangeValue>;
};

export type CarRangeValue = {
  /** Estimated value on the cities road */
  city?: Maybe<Scalars["Int"]>;
  /** Estimated combined value */
  combined?: Maybe<Scalars["Int"]>;
  /** Estimated value on the highway or express roads */
  highway?: Maybe<Scalars["Int"]>;
};

export type CarRouting = {
  /** Cars that support fast charging have a minimum charging speed of 43 kWh */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
};

/** Status of a car */
export enum CarStatus {
  /** Was just imported */
  NEW = "new",
  /** Is public and can be used by a customer */
  PUBLIC = "public",
  /** Is removed and can not be used */
  REMOVED = "removed",
  /** Is being reviewed by a human operator */
  REVIEW = "review"
}

export type CarVideo = {
  /** Video id */
  id?: Maybe<Scalars["ID"]>;
  /** Full path URL of a video */
  url?: Maybe<Scalars["String"]>;
};

/** Charging mode used at charging stations */
export enum ChargeMode {
  /** Charge to the maximum capacity at every charging stop. The default maximum charging capacity is 80% */
  ALWAYS_TO_MAX_CHARGE = "ALWAYS_TO_MAX_CHARGE",
  /** Optimizes the charging time at each station, in order to decrease the total travel time. You will only charge up until the SOC you need in order to reach the next stop */
  OPTIMIZE_TRAVEL_TIME = "OPTIMIZE_TRAVEL_TIME"
}

/** A groupped representation of EVSEs */
export type Charger = {
  /** Power of a charger */
  power?: Maybe<Scalars["Float"]>;
  /** Price of a charger */
  price?: Maybe<Scalars["String"]>;
  /** Charging speed */
  speed?: Maybe<StationSpeedType>;
  /** Type of charger */
  standard?: Maybe<ConnectorType>;
  /** Statuses of all the EVSEs grouped in a charger */
  status?: Maybe<ChargerStatuses>;
  /** Total number of EVSEs grouped in a charger */
  total?: Maybe<Scalars["Int"]>;
};

export enum ChargerStatus {
  /** The charger is occupied/busy */
  BUSY = "busy",
  /** The charger has an error */
  ERROR = "error",
  /** The charger is free */
  FREE = "free",
  /** The charger is unknown */
  UNKNOWN = "unknown"
}

/** Groupping by status of the chargers */
export type ChargerStatuses = {
  /** How many are busy */
  busy?: Maybe<Scalars["Int"]>;
  /** How many are not available */
  error?: Maybe<Scalars["Int"]>;
  /** How many are free */
  free?: Maybe<Scalars["Int"]>;
  /** How many are unknown */
  unknown?: Maybe<Scalars["Int"]>;
};

/** Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data */
export type ChargetripRange = {
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
};

export type ChargingBehaviour = {
  /** Charging behaviour of users divided in groups, based on real-time information */
  code?: Maybe<ChargingBehaviourCode>;
  /** Description of charging behaviour */
  description?: Maybe<Scalars["String"]>;
};

export enum ChargingBehaviourCode {
  /** Mainly fast charging, with some morning and afternoon charging */
  FAST_CHARGING = "FAST_CHARGING",
  /** Mixed behaviour between morning, afternoon, evening, overnight, and noise charging */
  MIXED_CHARGING = "MIXED_CHARGING",
  /** Mainly noise charging */
  NOISE_CHARGING = "NOISE_CHARGING",
  /** Mainly morning charging, with some afternoon charging */
  OFFICE_CHARGING = "OFFICE_CHARGING",
  /** Mainly overnight charging */
  OVERNIGHT_CHARGING = "OVERNIGHT_CHARGING",
  /** Mainly morning charging, and some mixed afternoon and evening charging */
  URBAN_CHARGING = "URBAN_CHARGING"
}

export type Connect = {
  /** List of connectivity providers to which a vehicle can connect */
  providers?: Maybe<Array<Maybe<ConnectProvider>>>;
};

export type ConnectFilter = {
  /** List of connectivity providers to which a vehicle can connect */
  providers?: Maybe<Array<Maybe<ConnectProvider>>>;
};

export enum ConnectProvider {
  ENODE = "Enode"
}

/** Connector data which extends OCPI Connector */
export type Connector = {
  /** Custom properties of a connector. These are vendor specific and will return null values on the fields that are not supported by your station database */
  custom_properties?: Maybe<ConnectorCustomProperties>;
  /** Format (socket/cable) of an installed connector. */
  format?: Maybe<OCPIConnectorFormat>;
  /** Identifier of a connector within an EVSE. Two connectors may have the same ID as long as they do not belong to the same EVSE object. */
  id?: Maybe<Scalars["String"]>;
  /** Timestamp when a connector was last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Maximum amperage of a connector, in ampere [A]. */
  max_amperage?: Maybe<Scalars["Int"]>;
  /**
   * Maximum electric power that can be delivered by a connector, in watt [W]. When the maximum electric power is lower than the calculated value from voltage and amperage, this value should be set.
   * For example: A DC Charge Point which can deliver up to 920V and up to 400A can be limited to a maximum of 150kW. Depending on the car, it may supply maximum voltage or current, but not both at the same time.
   * For AC Charge Points, the amount of phases used can also have influence on the maximum power.
   */
  max_electric_power?: Maybe<Scalars["Int"]>;
  /** Maximum voltage of an connector (line to neutral for AC_3_PHASE), in volt [V]. For example: DC Chargers might vary the voltage during charging when battery almost full. */
  max_voltage?: Maybe<Scalars["Int"]>;
  /** Maximum electric power in kW */
  power?: Maybe<Scalars["Float"]>;
  /** Type of power of an installed connector.  */
  power_type?: Maybe<OCPIPowerType>;
  /**
   * Charging prices
   * @deprecated In favor of custom_properties.pricing
   */
  pricing?: Maybe<Pricing>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Standard of an installed connector. */
  standard?: Maybe<ConnectorType>;
  /** List of valid charging tariffs */
  tariff?: Maybe<Array<Maybe<OCPITariff>>>;
  /**
   * Identifiers of the currently valid charging tariffs. Multiple tariffs are possible, but only one of each Tariff.type can be active at the same time. Tariffs with the same type are only allowed, if they are not active at the same time: start_date_time and end_date_time period not overlapping.
   * When preference-based smart charging is supported, one tariff for every possible ProfileType should be provided. This tells the user about the options they have at this Connector, and what the tariff is for every option.
   * For a "free of charge" tariff, this field should be set and point to a defined "free of charge" tariff.
   */
  tariff_ids?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** URL to an operator’s terms and conditions. */
  terms_and_conditions?: Maybe<Scalars["String"]>;
};

export type ConnectorCustomProperties = {
  /** Charging prices */
  pricing?: Maybe<Pricing>;
};

/** The socket or plug standard of the charging point. */
export enum ConnectorType {
  /** The connector type is CHAdeMO, DC */
  CHADEMO = "CHADEMO",
  /** The ChaoJi connector. The new generation charging connector, harmonized between CHAdeMO and GB/T. DC. */
  CHAOJI = "CHAOJI",
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
  /** The connector type is GB_T (Chinese standard), DC */
  GB_T = "GB_T",
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
  NEMA_14_50 = "NEMA_14_50",
  /** On-board bottom-up-pantograph typically for bus charging */
  PANTOGRAPH_BOTTOM_UP = "PANTOGRAPH_BOTTOM_UP",
  /** Off-board top-down-pantograph typically for bus charging */
  PANTOGRAPH_TOP_DOWN = "PANTOGRAPH_TOP_DOWN",
  /** Tesla connector "Roadster"-type (round, 4 pins) */
  TESLA_R = "TESLA_R",
  /** Tesla connector "Model-S"-type (oval, 5 pins) */
  TESLA_S = "TESLA_S"
}

/** The complete contact information */
export type Contact = {
  /** The email address */
  email?: Maybe<Scalars["String"]>;
  /** The absolute URL of the facebook profile page */
  facebook?: Maybe<Scalars["String"]>;
  /** The phone number in international format */
  phone?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** The absolute URL of the twitter profile page */
  twitter?: Maybe<Scalars["String"]>;
  /** The absolute URL of the website */
  website?: Maybe<Scalars["String"]>;
};

/** ISO-3166 alpha-2 country codes */
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
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW"
}

/** EVSE data which extends OCPI EVSE */
export type EVSE = {
  /** List of functionalities that an EVSE is capable of. */
  capabilities?: Maybe<Array<Maybe<OCPICapability>>>;
  /** List of available connectors on an EVSE. */
  connectors?: Maybe<Array<Maybe<Connector>>>;
  /** Coordinates of a EVSE. */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** Compliant with the following specification for EVSE ID from "eMI3 standard version V1.0" (http://emi3group.com/documents-links/) "Part 2: business objects." Optional because: if an evse_id is to be re-used in the real world, the evse_id can be removed from an EVSE object if the status is set to REMOVED. */
  evse_id?: Maybe<Scalars["String"]>;
  /** Level on which a Charge Point is located (in garage buildings) in the locally displayed numbering scheme. */
  floor_level?: Maybe<Scalars["String"]>;
  /** Links to images related to an EVSE such as photos or logos. */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Timestamp when this EVSE or one of its Connectors was last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Indicates if parking is free or paid. */
  parking_cost?: Maybe<ParkingCost>;
  /** Restrictions that apply to a parking spot. */
  parking_restrictions?: Maybe<Array<Maybe<OCPIParkingRestriction>>>;
  /** A number/string printed on the outside of an EVSE for visual identification. */
  physical_reference?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Indicates the current status of an EVSE. */
  status?: Maybe<OCPIStatus>;
  /** Indicates a planned status update of a nEVSE. */
  status_schedule?: Maybe<Array<Maybe<OCPIStatusSchedule>>>;
  /**
   * Uniquely identifies an EVSE within the CPOs platform (and suboperator platforms). For example a database ID or the actual "EVSE ID". This field can never be changed, modified or renamed. This is the 'technical' identification of the EVSE, not to be used as 'human readable' identification, use the field evse_id for that.
   * This field is named uid instead of id, because id could be confused with evse_id which is an eMI3 defined field.
   */
  uid?: Maybe<Scalars["String"]>;
};

/** A GeoJSON Feature<Point> */
export type FeaturePoint = {
  /** Geometry of the feature */
  geometry: Point;
  /** Feature ID */
  id?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Feature type */
  type: FeatureType;
};

/** A GeoJSON Feature<Point> input */
export type FeaturePointInput = {
  /** Geometry of the feature */
  geometry: PointInput;
  /** The feature ID */
  id?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Feature type */
  type: FeatureType;
};

/** A GeoJSON Feature<Point> input */
export type FeaturePointPolygonInput = {
  /** Geometry of the feature */
  geometry: PointInput;
  /** Optional object where you can store custom data you need in your application. */
  properties?: Maybe<FeaturePointPolygonPropertiesInput>;
  /** Feature type */
  type: FeatureType;
};

/** Properties for Feature<Point> input */
export type FeaturePointPolygonProperties = {
  /** Name of the location */
  name?: Maybe<Scalars["String"]>;
};

/** Properties for Feature<Point> input */
export type FeaturePointPolygonPropertiesInput = {
  /** Name of the location */
  name?: Maybe<Scalars["String"]>;
};

/** A GeoJSON Feature<Polygon> */
export type FeaturePolygon = {
  /** Geometry of the feature */
  geometry: Polygon;
  /** Properties of the Polygon Feature */
  properties?: Maybe<PolygonProperties>;
  /** Feature type */
  type: FeatureType;
};

/** A GeoJSON Feature<Point> */
export type FeaturePolygonPoint = {
  /** Geometry of the feature */
  geometry: Point;
  /** Optional object where you can store custom data you need in your application. */
  properties?: Maybe<Scalars["JSON"]>;
  /** Feature type */
  type: FeatureType;
};

/** GeoJSON Feature type */
export enum FeatureType {
  FEATURE = "Feature"
}

/** Navigation service providers available */
export enum InstructionsFormat {
  /** Chargetrip raw instructions */
  CHARGETRIP = "Chargetrip",
  /** Mapbox instructions mapping */
  MAPBOXV5 = "MapboxV5"
}

export type Isoline = {
  /** Isoline id */
  id: Scalars["ID"];
  /** Origin point of the request */
  origin: FeaturePolygonPoint;
  /** Number of Isolines to be generated representing SoC (default: 1, max: 100) */
  polygon_count?: Maybe<Scalars["Int"]>;
  /** Shape of the isoline consisting in a list of polygons */
  polygons?: Maybe<Array<Maybe<FeaturePolygon>>>;
  /** Season to be taken into account when generating the isoline, defaults to current */
  season?: Maybe<RouteSeason>;
  /** Isoline status */
  status: IsolineStatus;
  /** Vehicle id */
  vehicle_id: Scalars["ID"];
};

export type IsolineInput = {
  /** Origin point of the request */
  origin: FeaturePointPolygonInput;
  /** Numbers of polygons to be generated (default: 1, max: 100) */
  polygon_count?: Maybe<Scalars["Int"]>;
  /** Season to be taken into account when generating the isoline, defaults to current */
  season?: Maybe<RouteSeason>;
  /** Vehicle id */
  vehicle_id: Scalars["ID"];
};

/** Status of the isoline label */
export enum IsolineStatus {
  /** Isoline label has been successfully generated */
  DONE = "done",
  /** There was an error while generating the isoline label */
  ERROR = "error",
  /** Isoline label is under processing */
  PENDING = "pending"
}

/** Types of a leg */
export enum LegType {
  /** This leg ends at the destination, and is the last leg of the route */
  FINAL = "final",
  /** This leg ends at a charging station and the car must recharge */
  STATION = "station",
  /** This leg ends at the destination which is a charging station, and is the last leg of the route */
  STATIONFINAL = "stationFinal",
  /** This leg ends at a via charging station and the car must recharge */
  STATIONVIA = "stationVia",
  /** This leg ends at a via location */
  VIA = "via"
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

export type Mutation = {
  /**
   * Add a new review.
   * If the `x-token` header is send for a valid user, the review will belong to it, otherwise will be added for an anonymouse user
   */
  addReview: Review;
  /** [BETA] Generate a set of consumption based Isolines */
  createIsoline?: Maybe<Scalars["ID"]>;
  /**
   * Remove a review added by an authenticated user.
   * The `x-token` header is mandatory in order to authorize the user who wants to remove a review.
   * In case it is not sent, an error will occur.
   * In case the review was not found or belongs to another user an error will occur.
   * This is a premium feature, contact Chargetrip for more information.
   */
  deleteUserReview: Review;
  /** [BETA] End a navigation session */
  finishNavigation?: Maybe<Scalars["Void"]>;
  /** Create a new route from the route input and its ID */
  newRoute?: Maybe<Scalars["ID"]>;
  /** [BETA] Recalculate the current navigation route */
  recalculateNavigation?: Maybe<Scalars["Void"]>;
  /** [BETA] Start a new navigation session on top of an existing route */
  startNavigation?: Maybe<Scalars["ID"]>;
  /** [BETA] Update the navigation session */
  updateNavigation?: Maybe<Scalars["Void"]>;
};

export type MutationaddReviewArgs = {
  review: ReviewAdd;
};

export type MutationcreateIsolineArgs = {
  input: IsolineInput;
};

export type MutationdeleteUserReviewArgs = {
  id: Scalars["ID"];
};

export type MutationfinishNavigationArgs = {
  input: NavigationFinishInput;
};

export type MutationnewRouteArgs = {
  input?: Maybe<RequestInput>;
};

export type MutationrecalculateNavigationArgs = {
  input: NavigationRecalculateInput;
};

export type MutationstartNavigationArgs = {
  input: NavigationStartInput;
};

export type MutationupdateNavigationArgs = {
  input: NavigationUpdateInput;
};

/** The navigation session data */
export type Navigation = {
  /** A set of alternative charging stations to next station */
  alternative_stations?: Maybe<Array<Maybe<NavigationStation>>>;
  /** ID of the navigation session */
  id: Scalars["ID"];
  /** Navigation instructions */
  instructions?: Maybe<Scalars["JSON"]>;
  /** Last known location */
  last_known_location?: Maybe<Point>;
  /** Next charging station */
  next_station?: Maybe<NavigationStation>;
  /** The current route alternative used for navigation */
  route_alternative_id?: Maybe<Scalars["String"]>;
  /** The current route used for navigation */
  route_id?: Maybe<Scalars["String"]>;
  /** The state of a navigation session. The status can be driving, charging, finished, or error */
  state?: Maybe<NavigationState>;
  /** State of charge at the last known location */
  state_of_charge?: Maybe<Scalars["Float"]>;
};

/** The navigation session data */
export type NavigationinstructionsArgs = {
  instructions_format: InstructionsFormat;
  language?: Maybe<MappingLanguage>;
  precision?: Maybe<Scalars["Int"]>;
};

/** Input for the navigation recalculate */
export type NavigationFinishInput = {
  /** Current coordinates */
  current_location: PointInput;
  /** ID of the navigation session */
  id: Scalars["ID"];
};

/** Input for the navigation recalculate */
export type NavigationRecalculateInput = {
  /** Origin location of a new route */
  current_location: PointInput;
  /** Heading of a vehicle, in degrees */
  heading?: Maybe<Scalars["Float"]>;
  /** ID of the navigation session */
  id: Scalars["ID"];
  /** State of charge at origin */
  state_of_charge?: Maybe<Scalars["Float"]>;
  /** Via points of a new route. If this field is not sent, the original via points will be used */
  via?: Maybe<Array<Maybe<FeaturePointInput>>>;
};

/** Input for the navigation start */
export type NavigationStartInput = {
  /** Current coordinates */
  current_location: PointInput;
  /** ID of the route alternative of the navigation session */
  route_alternative_id?: Maybe<Scalars["String"]>;
  /** ID of the route of the navigation session */
  route_id: Scalars["String"];
};

/** State of navigation session */
export enum NavigationState {
  /** Vehicle is charging */
  CHARGING = "charging",
  /** Vehicle is driving */
  DRIVING = "driving",
  /** Failed to update navigation session due to route error or not found */
  ERROR = "error",
  /** Navigation session is completed (either manually or automatically 48 hours after the last update) */
  FINISHED = "finished"
}

/** Navigation session station type */
export type NavigationStation = {
  /** Estimated consumption, in kWh, from last the known location until the next charging station */
  estimated_consumption?: Maybe<Scalars["Float"]>;
  /** Estimated duration, in seconds, from the last known location until the next charging station */
  estimated_duration?: Maybe<Scalars["Int"]>;
  /** Estimated state of charge, in kWh, at arrival on the next charging station */
  estimated_state_of_charge?: Maybe<Scalars["Float"]>;
  /** The ID as string of the charging station */
  station_id?: Maybe<Scalars["String"]>;
  /** GPS location of the charging station */
  station_location?: Maybe<Point>;
  /** An array with all GPS locations of via points until the next charging station */
  via?: Maybe<Array<Maybe<Point>>>;
};

/** Input for the navigation session update telemetry data */
export type NavigationTelemetryUpdateInput = {
  /** Indicates if a vehicle is charging */
  is_charging?: Maybe<Scalars["Boolean"]>;
  /** State of charge at the last known location, in kwh */
  state_of_charge?: Maybe<Scalars["Float"]>;
  /** Average tire pressure, in bars. This information should come from telemetry */
  tire_pressure?: Maybe<Scalars["Float"]>;
};

/** Input for the navigation update */
export type NavigationUpdateInput = {
  /** Heading of a vehicle, in degrees */
  heading?: Maybe<Scalars["Float"]>;
  /** ID of the navigation session */
  id: Scalars["ID"];
  /** A list of locations that were collected since the last update */
  location_data: Array<NavigationUpdateLocationsInput>;
  /** Telemetry data input */
  telemetry?: Maybe<NavigationTelemetryUpdateInput>;
};

/** Properties of the location */
export type NavigationUpdateLocationPropertiesInput = {
  /** Altitude information, in meters. This is optional */
  altitude?: Maybe<Scalars["Int"]>;
  /** Current route leg index corresponding to a location */
  route_leg: Scalars["Int"];
  /** Speed at a location, in km/h */
  speed: Scalars["Float"];
  /** UNIX timestamp at location, in seconds */
  timestamp: Scalars["Int"];
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
  /** Latitude of the point in decimal degree. Example: 50.770774. Decimal separator: "." Regex: -?[0-9]{1,2}\.[0-9]{5,7} */
  latitude?: Maybe<Scalars["String"]>;
  /** Longitude of the point in decimal degree. Example: -126.104965. Decimal separator: "." Regex: -?[0-9]{1,3}\.[0-9]{5,7} */
  longitude?: Maybe<Scalars["String"]>;
  /** Name of the point in local language or as written at the location. For example the street name of a parking lot entrance or it’s number. */
  name?: Maybe<OCPIDisplayText>;
};

/** The capabilities of an EVSE. */
export enum OCPICapability {
  /** The EVSE supports charging preferences. */
  CHARGING_PREFERENCES_CAPABLE = "CHARGING_PREFERENCES_CAPABLE",
  /** The EVSE supports charging profiles. */
  CHARGING_PROFILE_CAPABLE = "CHARGING_PROFILE_CAPABLE",
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
  /** When a StartSession is sent to this EVSE, the MSP is required to add the optional connector_id field in the StartSession object. */
  START_SESSION_CONNECTOR_REQUIRED = "START_SESSION_CONNECTOR_REQUIRED",
  /** This EVSE supports token groups, two or more tokens work as one, so that a session can be started with one token and stopped with another (handy when a card and key-fob are given to the EV-driver). */
  TOKEN_GROUP_CAPABLE = "TOKEN_GROUP_CAPABLE",
  /** Connectors have a mechanical lock that can be requested by the eMSP to be unlocked. */
  UNLOCK_CAPABLE = "UNLOCK_CAPABLE"
}

/** The format of the connector, whether it is a socket or a plug. */
export enum OCPIConnectorFormat {
  /** The connector is an attached cable; the EV users car needs to have a fitting inlet. */
  CABLE = "CABLE",
  /** The connector is a socket; the EV user needs to bring a fitting plug. */
  SOCKET = "SOCKET"
}

/** Deprecated: Please use ConnectorType instead */
export enum OCPIConnectorType {
  /** The connector type is CHAdeMO, DC */
  CHADEMO = "CHADEMO",
  /** The ChaoJi connector. The new generation charging connector, harmonized between CHAdeMO and GB/T. DC. */
  CHAOJI = "CHAOJI",
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
  /** The connector type is GB_T (Chinese standard), DC */
  GB_T = "GB_T",
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
  NEMA_14_50 = "NEMA_14_50",
  /** On-board bottom-up-pantograph typically for bus charging */
  PANTOGRAPH_BOTTOM_UP = "PANTOGRAPH_BOTTOM_UP",
  /** Off-board top-down-pantograph typically for bus charging */
  PANTOGRAPH_TOP_DOWN = "PANTOGRAPH_TOP_DOWN",
  /** Tesla connector "Roadster"-type (round, 4 pins) */
  TESLA_R = "TESLA_R",
  /** Tesla connector "Model-S"-type (oval, 5 pins) */
  TESLA_S = "TESLA_S"
}

export enum OCPIDayOfWeek {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY"
}

export type OCPIDisplayText = {
  /** Language Code ISO 639-1 */
  language?: Maybe<Scalars["String"]>;
  /** Text to be displayed to an end user. No markup, html etc. allowed. */
  text?: Maybe<Scalars["String"]>;
};

/** This type is used to specify the energy mix and environmental impact of the supplied energy at a location or in a tariff. */
export type OCPIEnergyMix = {
  /** Name of the energy suppliers product/tariff plan used at this location.* */
  energy_product_name?: Maybe<Scalars["String"]>;
  /** Key-value pairs (enum + percentage) of energy sources of this location’s tariff. */
  energy_sources?: Maybe<Array<Maybe<OCPIEnergySource>>>;
  /** Key-value pairs (enum + percentage) of nuclear waste and CO2 exhaust of this location’s tariff. */
  environ_impact?: Maybe<Array<Maybe<OCPIEnvironmentalImpact>>>;
  /** True if the power is 100% from regenerative sources */
  is_green_energy?: Maybe<Scalars["Boolean"]>;
  /** Name of the energy supplier, delivering the energy for this location or tariff.* */
  supplier_name?: Maybe<Scalars["String"]>;
};

export type OCPIEnergySource = {
  /** Percentage of this source (0-100) in the mix. */
  percentage?: Maybe<Scalars["Int"]>;
  /** The type of energy source. */
  source?: Maybe<OCPIEnergySourceCategory>;
};

/** Categories of energy sources. */
export enum OCPIEnergySourceCategory {
  /** Fossil power from coal. */
  COAL = "COAL",
  /** Fossil power from gas. */
  GAS = "GAS",
  /** All kinds of fossil power sources. */
  GENERAL_FOSSIL = "GENERAL_FOSSIL",
  /** All kinds of regenerative power sources. */
  GENERAL_GREEN = "GENERAL_GREEN",
  /** Nuclear power sources. */
  NUCLEAR = "NUCLEAR",
  /** Regenerative power from PV. */
  SOLAR = "SOLAR",
  /** Regenerative power from water turbines. */
  WATER = "WATER",
  /** Regenerative power from wind turbines. */
  WIND = "WIND"
}

/** Amount of waste produced/emitted per kWh. */
export type OCPIEnvironmentalImpact = {
  /** Amount of this portion in g/kWh. */
  amount?: Maybe<Scalars["Int"]>;
  /** The environmental impact category of this value. */
  category?: Maybe<OCPIEnvironmentalImpactCategory>;
};

/** Categories of environmental impact values. */
export enum OCPIEnvironmentalImpactCategory {
  /** Exhausted carbon dioxide in grams per kilowatthour. */
  CARBON_DIOXIDE = "CARBON_DIOXIDE",
  /** Produced nuclear waste in grams per kilowatthour. */
  NUCLEAR_WASTE = "NUCLEAR_WASTE"
}

/** Specifies one exceptional period for opening or access hours. */
export type OCPIExceptionalPeriod = {
  /** Begin of the exception. In UTC, time_zone field can be used to convert to local time. */
  period_begin?: Maybe<Scalars["DateTime"]>;
  /** End of the exception. In UTC, time_zone field can be used to convert to local time. */
  period_end?: Maybe<Scalars["DateTime"]>;
};

export enum OCPIFacility {
  /** An airport. */
  AIRPORT = "AIRPORT",
  /** A bike/e-bike/e-scooter sharing location. */
  BIKE_SHARING = "BIKE_SHARING",
  /** A bus stop. */
  BUS_STOP = "BUS_STOP",
  /** A cafe. */
  CAFE = "CAFE",
  /** A carpool parking. */
  CARPOOL_PARKING = "CARPOOL_PARKING",
  /** A Fuel station. */
  FUEL_STATION = "FUEL_STATION",
  /** A hotel. */
  HOTEL = "HOTEL",
  /** A mall or shopping center. */
  MALL = "MALL",
  /** A metro station. */
  METRO_STATION = "METRO_STATION",
  /** A museum. */
  MUSEUM = "MUSEUM",
  /** Located in, or close to, a park, nature reserve etc. */
  NATURE = "NATURE",
  /** A parking lot. */
  PARKING_LOT = "PARKING_LOT",
  /** A recreation area. */
  RECREATION_AREA = "RECREATION_AREA",
  /** A restaurant. */
  RESTAURANT = "RESTAURANT",
  /** Sport facilities: gym, field etc. */
  SPORT = "SPORT",
  /** A supermarket. */
  SUPERMARKET = "SUPERMARKET",
  /** A taxi stand. */
  TAXI_STAND = "TAXI_STAND",
  /** A train station. */
  TRAIN_STATION = "TRAIN_STATION",
  /** A tram stop/station. */
  TRAM_STOP = "TRAM_STOP",
  /** Wifi or other type of internet available. */
  WIFI = "WIFI"
}

/** This class defines the geo location of the Charge Point. The geodetic system to be used is WGS 84. */
export type OCPIGeoLocation = {
  /** Latitude of the point in decimal degree. Example: 50.770774. Decimal separator: "." Regex: -?[0-9]{1,2}\.[0-9]{5,7} */
  latitude?: Maybe<Scalars["String"]>;
  /** Longitude of the point in decimal degree. Example: -126.104965. Decimal separator: "." Regex: -?[0-9]{1,3}\.[0-9]{5,7} */
  longitude?: Maybe<Scalars["String"]>;
};

/** Opening and access hours of the location. */
export type OCPIHours = {
  /** Exceptions for specified calendar dates, time-range based. Periods the station is not operating/accessible. Overwriting regular_hours and exceptional_openings. Should not overlap exceptional_openings. */
  exceptional_closings?: Maybe<Array<Maybe<OCPIExceptionalPeriod>>>;
  /** Exceptions for specified calendar dates, time-range based. Periods the station is operating/accessible. Additional to regular_hours. May overlap regular rules. */
  exceptional_openings?: Maybe<Array<Maybe<OCPIExceptionalPeriod>>>;
  /** Regular hours, weekday-based. Only to be used if twentyfourseven=false, then this field needs to contain at least one RegularHours object. */
  regular_hours?: Maybe<Array<Maybe<OCPIRegularHours>>>;
  /** True to represent 24 hours a day and 7 days a week, except the given exceptions. */
  twentyfourseven?: Maybe<Scalars["Boolean"]>;
};

export type OCPIImage = {
  /** Category of an image */
  category?: Maybe<OCPIImageCategory>;
  /** Height of the full scale image */
  height?: Maybe<Scalars["Int"]>;
  /** URL from where a thumbnail of the image can be fetched through a webbrowser. */
  thumbnail?: Maybe<Scalars["String"]>;
  /** Image type: gif, jpeg, png, svg */
  type?: Maybe<Scalars["String"]>;
  /** URL from where the image data can be fetched through a web browser. */
  url?: Maybe<Scalars["String"]>;
  /** Width of the full scale image */
  width?: Maybe<Scalars["Int"]>;
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
  /** Parking spot for customers/guests only, for example in case of a hotel or shop. */
  CUSTOMERS = "CUSTOMERS",
  /** Reserved parking spot for disabled people with valid ID. */
  DISABLED = "DISABLED",
  /** Reserved parking spot for electric vehicles. */
  EV_ONLY = "EV_ONLY",
  /** Parking spot only suitable for (electric) motorcycles or scooters. */
  MOTORCYCLES = "MOTORCYCLES",
  /** Parking is only allowed while plugged in (charging). */
  PLUGGED = "PLUGGED"
}

/** Reflects the general type of the charge point’s location. May be used for user information. */
export enum OCPIParkingType {
  /** Location on a parking facility/rest area along a motorway, freeway, interstate, highway etc. */
  ALONG_MOTORWAY = "ALONG_MOTORWAY",
  /** Location is on the driveway of a house/building. */
  ON_DRIVEWAY = "ON_DRIVEWAY",
  /** Parking in public space along a street. */
  ON_STREET = "ON_STREET",
  /** Multistorey car park. */
  PARKING_GARAGE = "PARKING_GARAGE",
  /** A cleared area that is intended for parking vehicles, i.e. at supermarkets, bars, etc. */
  PARKING_LOT = "PARKING_LOT",
  /** Multistorey car park, mainly underground. */
  UNDERGROUND_GARAGE = "UNDERGROUND_GARAGE"
}

export enum OCPIPowerType {
  /** AC single phase. */
  AC_1_PHASE = "AC_1_PHASE",
  /** AC two phases, only two of the three available phases connected. */
  AC_2_PHASE = "AC_2_PHASE",
  /** AC two phases using split phase system. */
  AC_2_PHASE_SPLIT = "AC_2_PHASE_SPLIT",
  /** AC three phase. */
  AC_3_PHASE = "AC_3_PHASE",
  /** Direct Current. */
  DC = "DC"
}

export type OCPIPrice = {
  /** Price/Cost excluding VAT. */
  excl_vat?: Maybe<Scalars["Float"]>;
  /** Price/Cost including VAT. */
  incl_vat?: Maybe<Scalars["Float"]>;
};

export type OCPIPriceComponent = {
  /** Price per unit (excl. VAT) for this tariff dimension. */
  price?: Maybe<Scalars["Float"]>;
  /** Minimum amount to be billed. This unit will be billed in this step_size blocks. For example: if type is TIME and step_size has a value of 300, then time will be billed in blocks of 5 minutes. If 6 minutes were used, 10 minutes (2 blocks of step_size) will be billed. */
  step_size?: Maybe<Scalars["Int"]>;
  /** Type of tariff dimension. */
  type?: Maybe<OCPITariffDimensionType>;
  /** Applicable VAT percentage for this tariff dimension. If omitted, no VAT is applicable. Not providing a VAT is different from 0% VAT, which would be a value of 0.0 here. */
  vat?: Maybe<Scalars["Float"]>;
};

/** Regular recurring operation or access hours. */
export type OCPIRegularHours = {
  /** Begin of the regular period, in local time, given in hours and minutes. Must be in 24h format with leading zeros. Example: "18:15". Hour/Minute separator: ":" Regex: ([0-1][0-9]|2[1-3]):[0-5][0-9]. */
  period_begin?: Maybe<Scalars["String"]>;
  /** End of the regular period, in local time, syntax as for period_begin. Must be later than period_begin. */
  period_end?: Maybe<Scalars["String"]>;
  /** Number of days in the week, from Monday (1) till Sunday (7) */
  weekday?: Maybe<Scalars["Int"]>;
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
  /** Begin of the scheduled period. */
  period_begin?: Maybe<Scalars["DateTime"]>;
  /** End of the scheduled period, if known. */
  period_end?: Maybe<Scalars["DateTime"]>;
  /** Status value during the scheduled period. */
  status?: Maybe<OCPIStatus>;
};

export type OCPITariff = {
  /** ISO-3166 alpha-2 country code of the CPO that owns this tariff */
  country_code?: Maybe<Scalars["String"]>;
  /** ISO-4217 code of the currency of this tariff. */
  currency?: Maybe<Scalars["String"]>;
  /** List of tariff elements */
  elements?: Maybe<Array<Maybe<OCPITariffElement>>>;
  /** Time after which this tariff is no longer valid, in UTC, time_zone field if the location can be used to convert to local time. Typically used when this tariff is going to be replaced with a different tariff in the near future */
  end_date_time?: Maybe<Scalars["DateTime"]>;
  /** Details about the energy supplied with this tariff */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** Uniquely identifies the tariff within the CPO’s platform (and suboperator platforms) */
  id?: Maybe<Scalars["String"]>;
  /** Timestamp when this tariff was last updated (or created) */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** When this field is set, a charging session with this tariff will NOT cost more than this amount */
  max_price?: Maybe<OCPIPrice>;
  /** When this field is set, a charging session with this tariff will cost at least the amount shown. This is different from a FLAT fee (start tariff, transaction fee), as a FLAT fee is a fixed amount that must be paid for any charging session. A minimum price indicates that when the cost of a charging session is lower than this amount, the cost of the session will be equal to this amount */
  min_price?: Maybe<OCPIPrice>;
  /** CPO ID of the CPO that owns this tariff (following the ISO-15118 standard) */
  party_id?: Maybe<Scalars["String"]>;
  /** Time when this tariff becomes active, in UTC, time_zone field of the Location can be used to convert to local time. Typically used for a new tariff that is already given with the location, before it becomes active */
  start_date_time?: Maybe<Scalars["DateTime"]>;
  /** List of alternative tariff information texts, in multiple languages */
  tariff_alt_text?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** URL to a web page that contains an explanation of the tariff information in human readable form */
  tariff_alt_url?: Maybe<Scalars["String"]>;
  /** Defines the type of the tariff. This allows for distinction in case of given charging preferences. When omitted, this tariff is valid for all sessions */
  type?: Maybe<OCPITariffType>;
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
  /** List of price components that describe the pricing of a tariff. */
  price_components?: Maybe<Array<Maybe<OCPIPriceComponent>>>;
  /** Restrictions that describe the applicability of a tariff. */
  restrictions?: Maybe<Array<Maybe<OCPITariffRestrictions>>>;
};

export type OCPITariffRestrictions = {
  /** Which day(s) of the week this tariff element is active. */
  day_of_week?: Maybe<OCPIDayOfWeek>;
  /** End date in local time, the time zone is defined in the time_zone field of the Location, for example: 2015-12-27, valid until this day (exclusive). Same syntax as start_date */
  end_date?: Maybe<Scalars["String"]>;
  /** End time of day in local time, the time zone is defined in the time_zone field of the Location, for example 19:45, valid until this time of the day. Same syntax as start_time. */
  end_time?: Maybe<Scalars["String"]>;
  /** Sum of the maximum current in over all phases, for example 20. When the EV is charging with less than the defined amount of current, this tariff element becomes/is active. If the charging current is or becomes higher, this tariff element is not or no longer valid and becomes inactive. This describes NOT the maximum current over the entire Charging Session. This restriction can make a tariff element become active when the charging current is below this value, but the tariff element MUST  no longer be active when the charging current raises above the defined value */
  max_current?: Maybe<Scalars["Float"]>;
  /** Maximum duration in seconds the charging session MUST last (exclusive). When the duration of a charging session is shorter than the defined value, this tariff element is or becomes active. After that moment, this tariff element is no longer active */
  max_duration?: Maybe<Scalars["Float"]>;
  /** Maximum consumed energy in kWh, for example 50, valid until this amount of energy being used */
  max_kwh?: Maybe<Scalars["Float"]>;
  /** Maximum power in kW, for example 20. When the EV is charging with less than the defined amount of power, this tariff element becomes/is active. If the charging power is or becomes higher, this tariff element is not or no longer valid and becomes inactive. This does not describe the maximum power over the entire charging session. This restriction can make a tariff element become active when the charging power is below this value, but the TariffElement MUST no longer be active when the charging power raises above the defined value */
  max_power?: Maybe<Scalars["Float"]>;
  /** Sum of the minimum current in over all phases, for example 5. When the EV is charging with more than the defined amount of current, this tariff element is/becomes active. If the charging current is or becomes lower, this tariff element is not or no longer valid and becomes inactive. This does not describe the minimum current over the entire charging session. This restriction can make a tariff element become active when the charging current is above the defined value, but the tariff element MUST no longer be active when the charging current drops below the defined value */
  min_current?: Maybe<Scalars["Float"]>;
  /** Minimum duration in seconds the charging session MUST last (inclusive). When the duration of a charging session is longer than the defined value, this TariffElement is or becomes active. Before that moment, this tariff element is not yet active */
  min_duration?: Maybe<Scalars["Float"]>;
  /** Minimum consumed energy in kWh, for example 20, valid from this amount of energy being used */
  min_kwh?: Maybe<Scalars["Float"]>;
  /** Minimum power in kW, for example 5. When the EV is charging with more than the defined amount of power, this tariff element is/becomes active. If the charging power is or becomes lower, this tariff element is not or no longer valid and becomes inactive. This does not describe the minimum power over the entire charging session. This restriction can make a tariff element become active when the charging power is above this value, but the TariffElement MUST no longer be active when the charging power drops below the defined value */
  min_power?: Maybe<Scalars["Float"]>;
  /** When this field is present, the tariff element describes reservation costs. A reservation starts when the reservation is made, and ends when the drivers starts charging on the reserved EVSE/Location, or when the reservation expires. A reservation can only have: FLAT and TIME TariffDimensions, where TIME is for the duration of the reservation */
  reservation?: Maybe<OCPIReservationRestrictionType>;
  /** Start date in local time, the time zone is defined in the time_zone field of the Location, for example: 2015-12-24, valid from this day. Regex: ([12][0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) */
  start_date?: Maybe<Scalars["String"]>;
  /** Start time of day in local time, the time zone is defined in the time_zone field of the Location, for example 13:30, valid from this time of the day. Must be in 24h format with leading zeros. Hour/Minute separator: ":" Regex: ([0-1][0-9]|2[1-3]):[0-5][0-9] */
  start_time?: Maybe<Scalars["String"]>;
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

/** The operator data which extends OCPI BusinessDetails */
export type Operator = {
  /** Contact information */
  contact?: Maybe<Contact>;
  /** ISO-3166 alpha-2 country codes an operator is active in. */
  countries?: Maybe<Array<CountryCodeAlpha2>>;
  /** Deprecated: Not used anymore, please use countries property instead */
  country?: Maybe<Scalars["String"]>;
  /** Flag which indicates if the operator is in the excluded list */
  excluded?: Maybe<Scalars["Boolean"]>;
  /** External ID of an operator provided by the operator data source */
  external_id?: Maybe<Scalars["String"]>;
  /** Unique operator ID */
  id?: Maybe<Scalars["ID"]>;
  /** Image link to an operator’s logo */
  logo?: Maybe<OCPIImage>;
  /** Name of an operator */
  name?: Maybe<Scalars["String"]>;
  /** Ranking level on which the operator is placed or null in case the operator is not on any ranking level */
  ranking?: Maybe<Scalars["Int"]>;
  /** Link to an operator’s website */
  website?: Maybe<Scalars["String"]>;
};

/** Filter which can be applied to retrieve the operator list action */
export type OperatorListFilter = {
  /** ISO-3166 alpha-2 country codes an operator is active in. */
  countries?: Maybe<Array<CountryCodeAlpha2>>;
  /** Only retrieve operators that are in the excluded list */
  excluded?: Maybe<Scalars["Boolean"]>;
  /** List of ranking level(s) to be retrieved. Valid values are 1 to 10 */
  ranking?: Maybe<Array<Scalars["Int"]>>;
};

/** Filter which can be applied to retrieve the operator list action */
export type OperatorListQuery = {
  /** Exact country code */
  country?: Maybe<Scalars["String"]>;
  /** External ID of an operator provided by an operator data source */
  external_id?: Maybe<Scalars["String"]>;
  /** Unique operator ID */
  id?: Maybe<Scalars["ID"]>;
  /** Exact name */
  name?: Maybe<Scalars["String"]>;
};

export enum ParkingCost {
  /** Parking is free */
  FREE = "free",
  /** Parking includes a fee */
  PAID = "paid"
}

export type PathSegment = {
  /** Average speed, in km/h, for this route path segment */
  averageSpeed?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh, of a route path segment */
  consumption?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh per km, of a route path segment */
  consumptionPerKm?: Maybe<Scalars["Float"]>;
  /** Distance, in meters, of a route path segment */
  distance?: Maybe<Scalars["Float"]>;
  /** Duration, in seconds, of a route path segment */
  duration?: Maybe<Scalars["Float"]>;
  /** Elevation (altitude) in meters */
  elevation?: Maybe<Scalars["Int"]>;
  /** State of charge, in kWh, of a route path segment */
  stateOfCharge?: Maybe<Scalars["Float"]>;
};

/** A GeoJSON Point */
export type Point = {
  /** The coordinates array with longitude as first value and latitude as second one */
  coordinates: Array<Scalars["Float"]>;
  /** Point type */
  type: PointType;
};

/** A GeoJSON Point input */
export type PointInput = {
  /** Coordinates [longitude, latitude] */
  coordinates: Array<Scalars["Float"]>;
  /** Point type */
  type: PointType;
};

/** GeoJSON Point type */
export enum PointType {
  POINT = "Point"
}

/** A GeoJSON Polygon */
export type Polygon = {
  /** List of coordinates representing a polygon */
  coordinates: Array<Maybe<Array<Maybe<Array<Maybe<Scalars["Float"]>>>>>>;
  /** Polygon type */
  type: PolygonType;
};

/** Polygon properties */
export type PolygonProperties = {
  /** Index of the feature inside the list */
  index?: Maybe<Scalars["Int"]>;
};

/** GeoJSON Polygon type */
export enum PolygonType {
  POLYGON = "Polygon"
}

/** The list of powers for the speed type */
export type PowerList = {
  /** The maximum power the plug provides in kW */
  power?: Maybe<Scalars["Float"]>;
  /** The total number of stations with the specified power */
  total?: Maybe<Scalars["Int"]>;
};

/** Power stats model */
export type PowerStats = {
  /** The list of powers for the speed type */
  powers?: Maybe<Array<Maybe<PowerList>>>;
  /** The charging speed type for the specified power */
  type?: Maybe<StationSpeedType>;
};

/** The price model */
export type Price = {
  /** The currency of the price */
  currency?: Maybe<Scalars["String"]>;
  /** The value of the price which should be display by the frontend */
  displayValue?: Maybe<Scalars["String"]>;
  /** The pricing model */
  model?: Maybe<Scalars["String"]>;
  /** The value of the price */
  value?: Maybe<Scalars["String"]>;
};

export type Pricing = {
  /** Unique ID of a price */
  id?: Maybe<Scalars["String"]>;
  /** Price details */
  price_list?: Maybe<Array<Maybe<PricingList>>>;
};

export type PricingList = {
  /** Price product elements */
  elements?: Maybe<Array<Maybe<PricingListElement>>>;
  /** (MSP) Mobility Service Provider */
  partner?: Maybe<Scalars["String"]>;
  /** Product details */
  product?: Maybe<PricingListProduct>;
};

export type PricingListElement = {
  /** Price of the element type without VAT. */
  price_excl_vat?: Maybe<Scalars["Float"]>;
  /** Price element type. */
  type?: Maybe<PricingListElementType>;
  /** VAT percentage to apply */
  vat?: Maybe<Scalars["Float"]>;
};

export enum PricingListElementType {
  /** Price per kWh */
  ENERGY = "ENERGY",
  /** Starting price, fixed fee per charge session */
  FLAT = "FLAT",
  /** Parking price per hour */
  PARKING_TIME = "PARKING_TIME",
  /** Fixed price per hour */
  TIME = "TIME"
}

export type PricingListProduct = {
  /** Currency */
  currency?: Maybe<Scalars["String"]>;
  /** Description of the product */
  description?: Maybe<Scalars["String"]>;
  /** Name of the payment card or subscription. If name is 'Adhoc price' the price is the CPO price */
  name?: Maybe<Scalars["String"]>;
  /** Subscription fee without VAT */
  subscription_fee_excl_vat?: Maybe<Scalars["Float"]>;
  /** Subscription type */
  subscription_type?: Maybe<Scalars["String"]>;
};

export type Query = {
  /** Get a full list of amenities around a station */
  amenityList?: Maybe<Array<Maybe<Amenity>>>;
  /** Get information about a car by its ID */
  car?: Maybe<Car>;
  /** Get a full list of cars */
  carList?: Maybe<Array<Maybe<CarList>>>;
  /** Car premium data provides even more information about your car: tire pressure, prices, drivetrain data, and more. Please contact us for access to premium data. */
  carPremium?: Maybe<CarPremium>;
  /** [BETA] Get an isoline by ID */
  isoline?: Maybe<Isoline>;
  /** [BETA] Get a navigation session by ID */
  navigation?: Maybe<Navigation>;
  /** Get information about an operator by its ID */
  operator?: Maybe<Operator>;
  /** Get a full list of operators */
  operatorList?: Maybe<Array<Maybe<Operator>>>;
  /** Get all reviews of a station by the station ID */
  reviewList?: Maybe<Array<Review>>;
  /** Get a route by ID */
  route?: Maybe<Route>;
  /** Retrieve information about a route path segment */
  routePath?: Maybe<RoutePath>;
  /** Get information about a station by its ID */
  station?: Maybe<Station>;
  /** Search for stations around a GeoJSON point with a specific distance in meters */
  stationAround?: Maybe<Array<Maybe<Station>>>;
  /** Get a full list of stations */
  stationList?: Maybe<Array<Maybe<Station>>>;
  /** Get the station statistics */
  stationStats?: Maybe<StationStats>;
  /** Get information about a tariff by the tariff ID */
  tariff?: Maybe<OCPITariff>;
  /** Get the full list of tariffs */
  tariffList?: Maybe<Array<Maybe<OCPITariff>>>;
  /**
   * Get all reviews of stations that were added by an authenticated user.
   * The `x-token` header is mandatory in order to authorize the user who wants to retrieve all the reviews added by him/her.
   * This is a premium feature, contact Chargetrip for more information.
   */
  userReviewList?: Maybe<Array<Review>>;
};

export type QueryamenityListArgs = {
  stationId: Scalars["ID"];
};

export type QuerycarArgs = {
  externalId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["ID"]>;
};

export type QuerycarListArgs = {
  filter?: Maybe<CarListFilter>;
  page?: Maybe<Scalars["Int"]>;
  query?: Maybe<CarListQuery>;
  search?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type QuerycarPremiumArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryisolineArgs = {
  id: Scalars["ID"];
};

export type QuerynavigationArgs = {
  id: Scalars["ID"];
};

export type QueryoperatorArgs = {
  id: Scalars["ID"];
};

export type QueryoperatorListArgs = {
  filter?: Maybe<OperatorListFilter>;
  page?: Maybe<Scalars["Int"]>;
  query?: Maybe<OperatorListQuery>;
  search?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type QueryreviewListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  stationId: Scalars["ID"];
};

export type QueryrouteArgs = {
  id: Scalars["ID"];
};

export type QueryroutePathArgs = {
  alternativeId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  location: PointInput;
};

export type QuerystationArgs = {
  id: Scalars["ID"];
};

export type QuerystationAroundArgs = {
  filter?: Maybe<StationAroundFilter>;
  page?: Maybe<Scalars["Int"]>;
  query?: Maybe<StationAroundQuery>;
  search?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type QuerystationListArgs = {
  filter?: Maybe<StationListFilter>;
  page?: Maybe<Scalars["Int"]>;
  query?: Maybe<StationListQuery>;
  search?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type QuerytariffArgs = {
  id: Scalars["ID"];
};

export type QuerytariffListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type QueryuserReviewListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
};

/** EV specific data for a route request */
export type RequestEv = {
  /** Supported adapters of plugs for an EV */
  adapters?: Maybe<Array<Maybe<RequestEvPlug>>>;
  /** EV battery specific data */
  battery?: Maybe<RequestEvBattery>;
  /** Cargo weight, in kg */
  cargo?: Maybe<Scalars["Float"]>;
  /** Climate is on. The default is true */
  climate?: Maybe<Scalars["Boolean"]>;
  /** Consumption specific to an EV or inputed by a request */
  consumption?: Maybe<RequestEvConsumption>;
  /** Internal ID of a Car */
  id?: Maybe<Scalars["ID"]>;
  /** Minimum desired power of chargers */
  minPower?: Maybe<Scalars["Int"]>;
  /**
   * The number of passengers on board
   * @deprecated In favor of occupants
   */
  numberOfPassengers?: Maybe<Scalars["Int"]>;
  /** Number of occupants */
  occupants?: Maybe<Scalars["Int"]>;
  /** Supported plugs for an EV */
  plugs?: Maybe<Array<Maybe<RequestEvPlug>>>;
};

export type RequestEvBattery = {
  /** Usable capacity of the battery used to compute the route. If this in not filled in, value as the car battery.usable_kwh */
  capacity?: Maybe<RequestEvBatteryValue>;
  /** Usable capacity of a battery, in kWh. This value is computed from the provided capacity value */
  capacityKwh?: Maybe<Scalars["Float"]>;
  /** Desired final amount of energy in a battery. If this is not filled in, it will be set to 20% of the car battery.usable_kwh */
  finalStateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** Desired final amount of energy in a battery, in kWh. This value is computed from the provided final state of charge */
  finalStateOfChargeKwh?: Maybe<Scalars["Float"]>;
  /** Current amount of energy in a battery. If this is not filled in, we assume the battery is full and it will be equal to the battery.usable_kwh */
  stateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** Current amount of energy in a battery, in kWh. This value is computed from the provided state of charge */
  stateOfChargeKwh?: Maybe<Scalars["Float"]>;
};

export type RequestEvBatteryInput = {
  /** Usable capacity of a battery used to compute a route. We recommend you stay between 50% and 150%. If this in not filled in, we assume it is the same value as the car battery.usable_kwh */
  capacity?: Maybe<RequestEvBatteryInputValue>;
  /** Desired final amount of energy in a battery. The value should be between 0 and 80% of the car battery.usable_kwh If this is not filled in, we assume it is 20% of the car battery.usable_kwh */
  finalStateOfCharge?: Maybe<RequestEvBatteryInputValue>;
  /** Current amount of energy in a battery. If this is not filled in, we assume the battery is full and we fill it in with car battery.usable_kwh */
  stateOfCharge?: Maybe<RequestEvBatteryInputValue>;
};

export type RequestEvBatteryInputValue = {
  /** Type of a desired final amount of energy in a battery */
  type: BatteryInputType;
  /** Value of a desired final amount of energy in a battery */
  value: Scalars["Float"];
};

export type RequestEvBatteryValue = {
  /** Type of the desired final amount of energy in a battery */
  type: BatteryInputType;
  /** Value of the desired final amount of energy in a battery */
  value: Scalars["Float"];
};

export type RequestEvConsumption = {
  /** Consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarConsumption>;
};

export type RequestEvConsumptionInput = {
  /** Consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumptionInput>;
  /** Consumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumptionInput>;
  /** Consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarConsumptionInput>;
};

export type RequestEvInput = {
  /** Supported adapters of plugs of an EV */
  adapters?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
  /** Deprecated */
  auxConsumption?: Maybe<Scalars["Float"]>;
  /** The EV battery specific data */
  battery?: Maybe<RequestEvBatteryInput>;
  /** Deprecated */
  bmsConsumption?: Maybe<Scalars["Float"]>;
  /** Cargo weight, in kg */
  cargo?: Maybe<Scalars["Int"]>;
  /** Flag which indicates if the climate is on. The default is true */
  climate?: Maybe<Scalars["Boolean"]>;
  /** Consumption specific to the EV or inputted by the request */
  consumption?: Maybe<RequestEvConsumptionInput>;
  /** Internal ID of a Car */
  id: Scalars["ID"];
  /** Minimum desired power of chargers */
  minPower?: Maybe<Scalars["Int"]>;
  /** Number of occupants */
  occupants?: Maybe<Scalars["Int"]>;
  /** Supported plugs of an EV */
  plugs?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
};

export type RequestEvPlug = {
  /** Maximum charging speed for a plug */
  chargingPower?: Maybe<Scalars["Float"]>;
  /** Type of the plug */
  standard?: Maybe<ConnectorType>;
};

export type RequestEvPlugInput = {
  /** Maximum charging speed for this plug */
  chargingPower: Scalars["Float"];
  /** Type of a plug */
  standard: ConnectorType;
};

export type RequestInput = {
  /** EV specific data for a route request */
  ev: RequestEvInput;
  /** Route request data */
  routeRequest: RequestRouteInput;
};

export type RequestRoute = {
  /** Desired amenities near the stations, within a 1 km radius */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Mode that indicates if we optimize the charging time or always charge to the maximum capacity */
  chargeMode?: Maybe<ChargeMode>;
  /** Destination of a route */
  destination?: Maybe<FeaturePoint>;
  /** Flag indicating wether the turn-by-turn navigation instructions should be prepared. Disclaimer: The functionality is under active development and the final API is a subject to change. Not ready for production */
  instructions?: Maybe<Scalars["Boolean"]>;
  /**
   * Requested operators
   * @deprecated Will be removed. Use the operators property instead
   */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /**
   * Encourage the route to use preferred operators. In case there are no preferred operators the route can still be calculated
   * @deprecated Will be removed. Use the operators property instead
   */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /**
   * Preferred operators are required. In case there are no preferred operators the route cannot be calculated
   * @deprecated Will be removed. Use the operators property instead
   */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /** Operator prioritization for a route */
  operators?: Maybe<RouteOperators>;
  /** Origin of a route */
  origin?: Maybe<FeaturePoint>;
  /** Percentage for the minimum limit of the battery capacity before a recharge. The value should be between 0 and 60, with a default of 10% */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** Season */
  season?: Maybe<RouteSeason>;
  /** Radius in meters for alternative stations along a route (min 500 - max 5000) */
  stationsAlongRouteRadius?: Maybe<Scalars["Int"]>;
  /** Locations where a route will stop */
  via?: Maybe<Array<Maybe<FeaturePoint>>>;
};

export type RequestRouteInput = {
  /** A list of desired amenities near the stations, with a 1 km radius */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Mode that indicates if we optimize the charging time or always charge to the maximum capacity */
  chargeMode?: Maybe<ChargeMode>;
  /** Destination of a route */
  destination: FeaturePointInput;
  /** Deprecated: all routes will have turn-by-turn instructions prepared. Boolean will be ignored */
  instructions?: Maybe<Scalars["Boolean"]>;
  /** Deprecated: in favor of operators. A list of requested operators */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Deprecated: in favor of operators. Flag which indicates if the preferred operators should be loaded */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /** Deprecated: in favor of operators. Flag which indicates if the operators are required */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /** Operator prioritization for a route */
  operators?: Maybe<RouteOperatorsInput>;
  /** Origin of a route */
  origin: FeaturePointInput;
  /** Percentage for a minimum limit of a battery capacity before a recharge. The value should be between 0 and 60, with a default of 10% */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** Optional flag to specify the season */
  season?: Maybe<RouteSeason>;
  /** Alternative stations along a route within a specified radius in meters (minimum 500, maximum 5000) */
  stationsAlongRouteRadius?: Maybe<Scalars["Int"]>;
  /** An optional list of locations where we should stop */
  via?: Maybe<Array<Maybe<FeaturePointInput>>>;
};

export type RequestUser = {
  /** ID of the user */
  id?: Maybe<Scalars["ID"]>;
};

/** The review model */
export type Review = {
  /** Date and time when a review was created */
  createdAt?: Maybe<Scalars["String"]>;
  /** Car that was provided/selected by a user */
  ev?: Maybe<Car>;
  /** ID of a review */
  id: Scalars["ID"];
  /** Locale of a message */
  locale?: Maybe<Scalars["String"]>;
  /** Message of a review */
  message?: Maybe<Scalars["String"]>;
  /** Plug type that was provided/selected by a user */
  plugType?: Maybe<ConnectorType>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Rating of a review */
  rating?: Maybe<Scalars["Int"]>;
  /** Station for which a review was provided */
  station?: Maybe<Station>;
  /** Boolean tags for a station review */
  tags?: Maybe<ReviewTags>;
  /** Date and time when a review was updated */
  updatedAt?: Maybe<Scalars["String"]>;
  /** User who added a review. If a review was added by an anonymous user, this will be null */
  user?: Maybe<ReviewUser>;
};

/** Form input to add a new review */
export type ReviewAdd = {
  /** ID of the Car that was provided/selected by a user */
  ev?: Maybe<Scalars["String"]>;
  /** Locale of a message */
  locale?: Maybe<Scalars["String"]>;
  /** Review message */
  message?: Maybe<Scalars["String"]>;
  /** Plug type that was provided/selected by a user */
  plugType?: Maybe<ConnectorType>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Rating of a review */
  rating: Scalars["Int"];
  /** Station ID for which a review is provided */
  stationId: Scalars["String"];
  /** Boolean tags for a station review */
  tags?: Maybe<ReviewTagsInput>;
};

/** Form input for edit an existing review */
export type ReviewEdit = {
  /** Locale of a message */
  locale?: Maybe<Scalars["String"]>;
  /** Review message */
  message?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Rating of a review */
  rating: Scalars["Int"];
  /** Boolean tags for a station review */
  tags?: Maybe<ReviewTagsInput>;
};

/** Statistical information for reviews of a station */
export type ReviewStats = {
  /** 'Total number of reviews */
  count?: Maybe<Scalars["Int"]>;
  /** Average of all reviews */
  rating?: Maybe<Scalars["Float"]>;
};

/** Boolean tags for the station review */
export type ReviewTags = {
  /** Flag which indicates if the user recommended the station when the review was added */
  recommended?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if the station was working when the review was added */
  working?: Maybe<Scalars["Boolean"]>;
};

/** Boolean tags for a station review */
export type ReviewTagsInput = {
  /** Flag which indicates if a user recommended a station when the review was added */
  recommended?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if a station was working when the review was added */
  working?: Maybe<Scalars["Boolean"]>;
};

/** Special format for the user of a review */
export type ReviewUser = {
  /**
   * First name
   * @deprecated Please use name instead
   */
  firstName?: Maybe<Scalars["String"]>;
  /**
   * User ID
   * @deprecated Not sent back anymore, will be null
   */
  id?: Maybe<Scalars["ID"]>;
  /**
   * Last name
   * @deprecated Please use name instead
   */
  lastName?: Maybe<Scalars["String"]>;
  /** User full name. If a review was added by an anonymous user, this will be null */
  name?: Maybe<Scalars["String"]>;
};

export type Route = {
  /** Available alternatives */
  alternatives?: Maybe<Array<Maybe<RouteAlternative>>>;
  /** Application who requested a route */
  app?: Maybe<RouteApp>;
  /** EV specific data for a route request */
  ev?: Maybe<RequestEv>;
  /** Recommended route */
  route?: Maybe<RouteAlternative>;
  /** Route request data */
  routeRequest?: Maybe<RequestRoute>;
  /** Route status */
  status?: Maybe<RouteStatus>;
  /** @deprecated You will receive null values */
  user?: Maybe<RequestUser>;
};

export type RouteAlternative = {
  /**
   * Amenity ranking for an alternative
   * @deprecated Will be removed in the future
   */
  amenityRanking?: Maybe<Scalars["Int"]>;
  /** Total time required to charge for an entire route, in seconds */
  chargeTime?: Maybe<Scalars["Float"]>;
  /** Number of charges along a route */
  charges?: Maybe<Scalars["Int"]>;
  /** Number of available charges along a route */
  chargesAvailable?: Maybe<Scalars["Int"]>;
  /** Number of occupied charges along a route */
  chargesOccupied?: Maybe<Scalars["Int"]>;
  /** Number of out of order charges along a route */
  chargesOutOfOrder?: Maybe<Scalars["Int"]>;
  /** Number of unknown charges along a route */
  chargesUnknown?: Maybe<Scalars["Int"]>;
  /** Total energy used for a route in kWh */
  consumption?: Maybe<Scalars["Float"]>;
  /** Total distance of a route in meters */
  distance?: Maybe<Scalars["Int"]>;
  /** Total duration of a route, including charge time, in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** Total number of meters which are going down on a route */
  elevationDown?: Maybe<Scalars["Float"]>;
  /** Highest value from the elevation array */
  elevationMax?: Maybe<Scalars["Float"]>;
  /**
   * Elevation values. Each elevationPlot has a hundred points, independent of the length of a route
   * @deprecated Will be removed in the future; Use the pathPlot property
   */
  elevationPlot?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Total number of meters which are going up on a route */
  elevationUp?: Maybe<Scalars["Float"]>;
  /** ID of a route alternative */
  id?: Maybe<Scalars["ID"]>;
  /** List of raw turn-by-turn navigation instructions */
  instructions?: Maybe<Array<Maybe<RouteInstruction>>>;
  /** Legs of the route */
  legs?: Maybe<Array<Maybe<RouteLeg>>>;
  /** Path elevation, distance, duration, consumption and speed values, grouped into 100 segments */
  pathPlot?: Maybe<Array<Maybe<PathSegment>>>;
  /** Polyline containing encoded coordinates */
  polyline?: Maybe<Scalars["String"]>;
  /** Remaining range, in meters, at the end of a trip */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** Remaining range, energy in kWh, at the end of a trip */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** Remaining range, energy in percentage, at the end of a trip */
  rangeEndPercentage?: Maybe<Scalars["Int"]>;
  /** Range, in meters, available at the beginning of a trip */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** Total energy in a battery at the beginning of a trip, in kWh */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** Total energy in a battery at the beginning of a trip, in percentage */
  rangeStartPercentage?: Maybe<Scalars["Int"]>;
  /** Money and CO2 saving information */
  saving?: Maybe<RouteAlternativeSaving>;
  /** Alternative stations along a route within specified radius in meters. Only if it was provided at newRoute mutation */
  stationsAlongRoute?: Maybe<Array<Maybe<RouteStationsAlong>>>;
  /** Tags of a route alternative. Values: road, highway, toll, ferry, etc. */
  tags?: Maybe<Array<Maybe<RouteTagType>>>;
  /** Type of alternative route */
  type?: Maybe<RouteAlternativeType>;
  /** Text information about a route direction */
  via?: Maybe<Scalars["String"]>;
};

export type RouteAlternativepolylineArgs = {
  decimals?: Maybe<Scalars["Int"]>;
};

export type RouteAlternativeSaving = {
  /** Average energy price with which the calculation was made */
  averageEnergyPrice?: Maybe<Scalars["String"]>;
  /** Average gas price with which the calculation was made */
  averageGasPrice?: Maybe<Scalars["String"]>;
  /** Total amount of CO2, in grams, which would be used with a petrol vehicle */
  co2?: Maybe<Scalars["String"]>;
  /** Currency */
  currency?: Maybe<Scalars["String"]>;
  /** Money saved by a user driving this route with the electric vehicle */
  money?: Maybe<Scalars["String"]>;
};

/** Types of an alternative route */
export enum RouteAlternativeType {
  /** An alternative to the fastest route */
  ALTERNATIVE = "alternative",
  /** Best matching route based on operator and amenities preferences */
  BESTMATCHING = "bestMatching",
  /** Fastest route between origin and destination */
  FASTEST = "fastest"
}

export type RouteApp = {
  /** ID of the app who requested a route */
  id?: Maybe<Scalars["ID"]>;
};

export type RouteInstruction = {
  /** Distance, in meters, of the current route instruction */
  distance?: Maybe<Scalars["Int"]>;
  /** Exit number on a roundabout. This field exists only on sign `USE_ROUNDABOUT` (6), otherwise is null */
  exit_number?: Maybe<Scalars["Int"]>;
  /** Name of the street on which the instruction is */
  name?: Maybe<Scalars["String"]>;
  /** Information about the points on the polyline */
  points?: Maybe<RouteInstructionPoints>;
  /** Sign of the instruction. See `RouteInstructionSign` */
  sign?: Maybe<RouteInstructionSign>;
  /** Duration, in seconds, of the current route instruction */
  time?: Maybe<Scalars["Int"]>;
  /** Curvature angle between the roundabout and street you exit the roundabout. This field exists only on sign USE_ROUNDABOUT (6), otherwise is null */
  turn_angle?: Maybe<Scalars["Float"]>;
};

export type RouteInstructionPoints = {
  /** The interval of points that are included in this instruction, an array with 2 values, where the first value is the index of the polyline where the interval starts. The second value is where it ends */
  interval?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  /** Number of polyline points which are included in this instruction */
  size?: Maybe<Scalars["Int"]>;
};

/** Sign belonging to the instruction indicating the main maneuver */
export enum RouteInstructionSign {
  CONTINUE_ON_STREET = "CONTINUE_ON_STREET",
  FINISH = "FINISH",
  IGNORE = "IGNORE",
  KEEP_LEFT = "KEEP_LEFT",
  KEEP_RIGHT = "KEEP_RIGHT",
  LEAVE_ROUNDABOUT = "LEAVE_ROUNDABOUT",
  PT_END_TRIP = "PT_END_TRIP",
  PT_START_TRIP = "PT_START_TRIP",
  PT_TRANSFER = "PT_TRANSFER",
  REACHED_CHARGING_STATION = "REACHED_CHARGING_STATION",
  REACHED_VIA = "REACHED_VIA",
  TURN_LEFT = "TURN_LEFT",
  TURN_RIGHT = "TURN_RIGHT",
  TURN_SHARP_LEFT = "TURN_SHARP_LEFT",
  TURN_SHARP_RIGHT = "TURN_SHARP_RIGHT",
  TURN_SLIGHT_LEFT = "TURN_SLIGHT_LEFT",
  TURN_SLIGHT_RIGHT = "TURN_SLIGHT_RIGHT",
  UNKNOWN = "UNKNOWN",
  USE_ROUNDABOUT = "USE_ROUNDABOUT",
  U_TURN_LEFT = "U_TURN_LEFT",
  U_TURN_RIGHT = "U_TURN_RIGHT",
  U_TURN_UNKNOWN = "U_TURN_UNKNOWN"
}

export type RouteLeg = {
  /** Cargo weight in a vehicle for the duration of a leg, in kg */
  cargo?: Maybe<Scalars["Float"]>;
  /** Total time required to charge a battery until 80%, in seconds */
  chargeTime?: Maybe<Scalars["Int"]>;
  /** Recommended connector for charging */
  connector?: Maybe<Connector>;
  /** Total energy used in a leg in kWh */
  consumption?: Maybe<Scalars["Float"]>;
  /** Destination point location */
  destination?: Maybe<FeaturePoint>;
  /** Distance from the start to the end of a leg, in meters */
  distance?: Maybe<Scalars["Int"]>;
  /** Total drive time from the start to the end of a leg, in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** Recommended EVSE where to charge */
  evse?: Maybe<EVSE>;
  /** ID of a leg */
  id?: Maybe<Scalars["ID"]>;
  /** Name of a destination. This is the station name in case a user should charge or the name of the location in case this was provided */
  name?: Maybe<Scalars["String"]>;
  /** Number of occupants in a vehicle for the duration of a leg */
  occupants?: Maybe<Scalars["Int"]>;
  /** ID of an operator */
  operatorId?: Maybe<Scalars["String"]>;
  /** Name of an operator */
  operatorName?: Maybe<Scalars["String"]>;
  /** Ranking of an operator */
  operatorRanking?: Maybe<Scalars["Int"]>;
  /** Origin point location */
  origin?: Maybe<FeaturePoint>;
  /** Number of compatible plugs available at a charge station */
  plugsAvailable?: Maybe<Scalars["Int"]>;
  /** Total number of compatible plugs at a charge station */
  plugsCount?: Maybe<Scalars["Int"]>;
  /** Number of compatible plugs occupied at a charge station */
  plugsOccupied?: Maybe<Scalars["Int"]>;
  /** Number of compatible plugs out of order at a charge station */
  plugsOutOfOrder?: Maybe<Scalars["Int"]>;
  /** Number of compatible plugs unknown at a charge station */
  plugsUnknown?: Maybe<Scalars["Int"]>;
  /** Polyline containing encoded coordinates */
  polyline?: Maybe<Scalars["String"]>;
  /** Range, in meters, available at the end of a leg */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** Total energy left in a battery at the end of a leg, in kWh */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** Remaining range, energy in percentage, at the end of a trip */
  rangeEndPercentage?: Maybe<Scalars["Int"]>;
  /** Range, in meters, available at the beginning of a leg */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** Total energy in a battery at the beginning of a leg, in kWh */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** Total energy in a battery at the beginning of a trip, in percentage */
  rangeStartPercentage?: Maybe<Scalars["Int"]>;
  /** ID of a station */
  stationId?: Maybe<Scalars["String"]>;
  /** Steps of a leg */
  steps?: Maybe<Array<Maybe<RouteStep>>>;
  /** Tags of a leg. Values: road, highway, toll, ferry */
  tags?: Maybe<Array<Maybe<RouteTagType>>>;
  /** Type of a leg */
  type?: Maybe<LegType>;
};

export type RouteLegpolylineArgs = {
  decimals?: Maybe<Scalars["Int"]>;
};

/** Prioritized operators for a route calculation */
export type RouteOperators = {
  /** Operator IDs which should be excluded from a route */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Ranking of an operator with multiple levels, each level having it's own penalty value */
  ranking?: Maybe<RouteOperatorsRanking>;
  /** Flag indicating if the operators ranking should be preferred or required */
  type?: Maybe<RouteOperatorsType>;
};

/** Prioritized operators for a route calculation */
export type RouteOperatorsInput = {
  /** Operator IDs which should be excluded from a route */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Ranking of an operator with multiple levels, each level having it's own penalty value */
  ranking?: Maybe<RouteOperatorsRankingInput>;
  /** Flag indicating if the operators ranking should be preferred or required */
  type?: Maybe<RouteOperatorsType>;
};

/** Ranking configuration for prioritized operators */
export type RouteOperatorsRanking = {
  /** Level 1 (most significant) for operator ranking */
  level1?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 2 for operator ranking */
  level2?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 3 for operator ranking */
  level3?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 4 for operator ranking */
  level4?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 5 for operator ranking */
  level5?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 6 for operator ranking */
  level6?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 7 for operator ranking */
  level7?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 8 for operator ranking */
  level8?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 9 for operator ranking */
  level9?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 10 (least significant) for operator ranking */
  level10?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** Ranking configuration for prioritized operators */
export type RouteOperatorsRankingInput = {
  /** Level 1 (most significant) for operator ranking */
  level1?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 2 for operator ranking */
  level2?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 3 for operator ranking */
  level3?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 4 for operator ranking */
  level4?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 5 for operator ranking */
  level5?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 6 for operator ranking */
  level6?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 7 for operator ranking */
  level7?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 8 for operator ranking */
  level8?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 9 for operator ranking */
  level9?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Level 10 (least significant) for operator ranking */
  level10?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** Type of operator prioritization for a route */
export enum RouteOperatorsType {
  /** Default option. Operators ranking will not be taken into account if no type is given */
  NONE = "none",
  /** Operators given in the operators ranking will be preferred when calculating routes */
  PREFERRED = "preferred",
  /** Operators given in the operators ranking will be required when calculating routes, all other operators will be ignored */
  REQUIRED = "required"
}

export type RoutePath = {
  /** Average speed, in km/h, for this route path segment */
  averageSpeed?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh, of a route path segment */
  consumption?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh per km, of a route path segment */
  consumptionPerKm?: Maybe<Scalars["Float"]>;
  /** Distance, in meters, of a route path segment */
  distance?: Maybe<Scalars["Float"]>;
  /** Duration, in seconds, of a route path segment */
  duration?: Maybe<Scalars["Float"]>;
  /** Elevation (altitude) in meters */
  elevation?: Maybe<Scalars["Int"]>;
  /** GeoJSON location of a route path segment */
  location?: Maybe<Point>;
  /** Recommended speed, in km/h for this route path segment to optimise the consumption */
  recommendedSpeed?: Maybe<Scalars["Float"]>;
  /** State of charge, in kWh, of a route path segment */
  stateOfCharge?: Maybe<Scalars["Float"]>;
};

/** The season of the route */
export enum RouteSeason {
  /** We fetch the current weather conditions */
  CURRENT = "current",
  /** We suppose it is summer and we have the best weather conditions */
  SUMMER = "summer",
  /** We suppose it is winter and we have the worst weather conditions */
  WINTER = "winter"
}

export type RouteStationsAlong = {
  /** Distance in meters between station and route path */
  distance?: Maybe<Scalars["Int"]>;
  /** The ID of station */
  id?: Maybe<Scalars["String"]>;
  /** Geojson location of a station */
  location?: Maybe<Point>;
  /** The station uses a preferred operator */
  preferredOperator?: Maybe<Scalars["Boolean"]>;
  /** Speed of a station. A station along a route can be either fast or turbo */
  speed?: Maybe<StationSpeedType>;
  /** Status of a station */
  status?: Maybe<ChargerStatus>;
};

/** The status of a route. The status can be pending, processing, done, not_found or error */
export enum RouteStatus {
  /** We finished computing the route, with a result. Final status */
  DONE = "done",
  /** An error occurred while computing the route. Final status */
  ERROR = "error",
  /** We finished the computing the route, without any result. Final status */
  NOT_FOUND = "not_found",
  /** Route is queued and pending processing. Temporary status */
  PENDING = "pending",
  /** We are computing the route for your request. Temporary status */
  PROCESSING = "processing"
}

export type RouteStep = {
  /** Total enery used in a step in kWh */
  consumption?: Maybe<Scalars["Float"]>;
  /** Distance from the start to the end of a step, in meters */
  distance?: Maybe<Scalars["Int"]>;
  /** Total drive time from the start to the end of a step, in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** ID of a step */
  id?: Maybe<Scalars["ID"]>;
  /** Polyline containing encoded coordinates */
  polyline?: Maybe<Scalars["String"]>;
  /** Type of a step */
  type?: Maybe<StepType>;
};

export type RouteSteppolylineArgs = {
  decimals?: Maybe<Scalars["Int"]>;
};

/** Tags of a route */
export enum RouteTagType {
  CROSSBORDER = "crossborder",
  FERRY = "ferry",
  HIGHWAY = "highway",
  ROAD = "road",
  TOLL = "toll",
  WALKING = "walking"
}

/** Standards(plug type) stats model */
export type StandardStats = {
  /** The total number of stations with the specified plug */
  total?: Maybe<Scalars["Int"]>;
  /** The plug type */
  type?: Maybe<ConnectorType>;
};

/** Station data which extends OCPI Location */
export type Station = {
  /** Street/block name and house number if available */
  address?: Maybe<Scalars["String"]>;
  /** Amenities located at this location */
  amenities?: Maybe<Scalars["JSON"]>;
  /** Groups of EVSEs by power and type */
  chargers?: Maybe<Array<Maybe<Charger>>>;
  /** Indicates if the EVSEs are still charging outside the opening hours. E.g. when a parking garage closes its barriers overnight, is it allowed to charge till the next morning? Default: true */
  charging_when_closed?: Maybe<Scalars["Boolean"]>;
  /** City or town */
  city?: Maybe<Scalars["String"]>;
  /** Coordinates of a location */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** ISO 3166-1 alpha-3 code for the country of this station */
  country?: Maybe<Scalars["String"]>;
  /** ISO-3166 alpha-2 country code of a station */
  country_code?: Maybe<Scalars["String"]>;
  /** Custom properties of a station. These are vendor specific and will return null values on the fields that are not supported by your station database */
  custom_properties?: Maybe<StationCustomProperties>;
  /** Human-readable directions on how to reach a station */
  directions?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** Elevation (altitude) level */
  elevation?: Maybe<Scalars["Int"]>;
  /** Details of the energy supplied at a location */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** EVSEs that belong to a station */
  evses?: Maybe<Array<Maybe<EVSE>>>;
  /** ID provided by a station data source */
  external_id?: Maybe<Scalars["String"]>;
  /** Facilities a charging station belongs to */
  facilities?: Maybe<Array<Maybe<OCPIFacility>>>;
  /** Unique ID of a station */
  id: Scalars["ID"];
  /** Links to images related to a location such as photos or logos */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Timestamp when a location, or one of its EVSEs or Connectors were last updated (or created) */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** GeoJSON location of a charging station */
  location?: Maybe<Point>;
  /** Name of a charging station */
  name?: Maybe<Scalars["String"]>;
  /** Times when an EVSEs at a location can be accessed for charging */
  opening_times?: Maybe<OCPIHours>;
  /** Information about an operator */
  operator?: Maybe<Operator>;
  /** Information about an owner if available */
  owner?: Maybe<Operator>;
  /** Type of parking at a charge point location */
  parking_type?: Maybe<OCPIParkingType>;
  /** CPO ID of a CPO that 'owns' this station (following the ISO-15118 standard) */
  party_id?: Maybe<Scalars["String"]>;
  /** Enriched information about the physical address of a station */
  physical_address?: Maybe<Address>;
  /** Postal code of a location, may only be omitted when a location has no postal code: in some countries charging locations at highways don’t have postal codes. */
  postal_code?: Maybe<Scalars["String"]>;
  /** Connectors grouped by power */
  power?: Maybe<Scalars["JSON"]>;
  /**
   * Station availability
   * @deprecated predicted_availability, no value will be sent. Deprecated in favor of predicted_occupancy
   */
  predicted_availability?: Maybe<Array<Maybe<StationPredictedAvailability>>>;
  /**
   * Predicted station occupancy
   * @deprecated In favor of custom_properties.predicted_occupancy
   */
  predicted_occupancy?: Maybe<Array<Maybe<StationPredictedOccupancy>>>;
  /** A flag that indicates if a station is on private property */
  private?: Maybe<Scalars["Boolean"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /**
   * Defines if a location may be published on a website or app etc.
   * When this is set to false, only tokens identified in the field: publish_allowed_to are allowed to show this location.
   * When the same location has EVSEs that may be published and may not be published, two 'locations' should be created
   */
  publish?: Maybe<Scalars["Boolean"]>;
  /** A flag that indicates if a station has real-time information about the availability of its connectors */
  realtime?: Maybe<Scalars["Boolean"]>;
  /** Geographical location of related points relevant to a user */
  related_locations?: Maybe<Array<Maybe<OCPIAdditionalGeoLocation>>>;
  /** Review of a station */
  review?: Maybe<ReviewStats>;
  /** Charging speed for a station */
  speed?: Maybe<StationSpeedType>;
  /** State or province of a location, only to be used when relevant */
  state?: Maybe<Scalars["String"]>;
  /** Global status for a station */
  status?: Maybe<ChargerStatus>;
  /** Information about a suboperator if applicable */
  suboperator?: Maybe<Operator>;
  /** Value from the IANA time zone database representing the time zone of a location. Examples: "Europe/Oslo", "Europe/Zurich". (http://www.iana.org/time-zones) */
  time_zone?: Maybe<Scalars["String"]>;
};

/** Filter which can be applied to retrieve the station around list action */
export type StationAroundFilter = {
  /** Amenities available near a station */
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  /** Flag that allows you to return only available stations */
  available_only?: Maybe<Scalars["Boolean"]>;
  /** Station socket or plug standards */
  connectors?: Maybe<Array<Maybe<ConnectorType>>>;
  /** Distance, in meters, to search around */
  distance?: Maybe<Scalars["Int"]>;
  /** The GeoJSON Point of the center of the around me circle */
  location?: Maybe<PointInput>;
  /** Station speed */
  power_groups?: Maybe<Array<Maybe<StationSpeedType>>>;
  /** Powers in kWh */
  powers?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Flag indicating if only stations that are owned by an operator from a clients ranking list are returned */
  preferred_operator?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: Replaced by filter & search params */
export type StationAroundQuery = {
  /** Amenities available near a station. Values: restaurant, bathroom, supermarket, playground, coffee, shopping, museum, hotel, park */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Distance, in meters, to search around */
  distance?: Maybe<Scalars["Int"]>;
  /** The GeoJSON Point of the center of the around me circle */
  location?: Maybe<PointInput>;
  /** Power in kWh */
  power?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type StationCustomProperties = {
  /** Type of access to the charging station */
  access_type?: Maybe<AccessType>;
  /** List of available ad hoc payment methods */
  adhoc_authorisation_method?: Maybe<Array<Maybe<AdhocAuthorisationMethod>>>;
  /** Charging behavior of a station */
  charging_behaviour?: Maybe<ChargingBehaviour>;
  /** Predicted station occupancy */
  predicted_occupancy?: Maybe<Array<Maybe<StationPredictedOccupancy>>>;
  /** Shows how reliable a charging station is (1 to 5; 1 = unreliable, 5 = reliable), taking into account the charging behaviour history and error values */
  reliability_score?: Maybe<Scalars["Int"]>;
  /** List of eMSP cards accepted at a charging station */
  roaming?: Maybe<Array<Maybe<StationRoaming>>>;
  /** Phone number for assistance at a charging station */
  support_phone_number?: Maybe<Scalars["String"]>;
};

/** Filter which can be applied to retrieve the station list action */
export type StationListFilter = {
  /** Amenities available near a station */
  amenities?: Maybe<Array<Maybe<Amenities>>>;
  /** Flag that allows you to return only available stations */
  available_only?: Maybe<Scalars["Boolean"]>;
  /** Station socket or plug standards */
  connectors?: Maybe<Array<Maybe<ConnectorType>>>;
  /** Station speed */
  power_groups?: Maybe<Array<Maybe<StationSpeedType>>>;
  /** Powers in kWh */
  powers?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Flag indicating if only stations that are owned by an operator from a clients ranking list are returned */
  preferred_operator?: Maybe<Scalars["Boolean"]>;
};

/** Deprecated: Replaced by filter & search params */
export type StationListQuery = {
  /** External ID of the station provided by the station data source */
  external_id?: Maybe<Scalars["String"]>;
  /** ID of the station */
  id?: Maybe<Scalars["ID"]>;
  /** Exact name */
  name?: Maybe<Scalars["String"]>;
};

/** Station availability for each weekday and hour */
export type StationPredictedAvailability = {
  /** The prediction for each hour 0-23 from 1 to 5 (1 - very busy ... 5 very quiet (free)) */
  prediction?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  /** Number of weekday from 1 (monday) to 7 (sunday) */
  weekday?: Maybe<Scalars["Int"]>;
};

/** Station occupancy for each weekday and hour */
export type StationPredictedOccupancy = {
  /** Occupancy on a scale from 1 to 10, where 1 means free for charging and 10 means fully occupied */
  occupancy?: Maybe<Scalars["Int"]>;
  /** Start of the period of the occupancy prediction (string of 'hh-mmZ' format) */
  period_begin?: Maybe<Scalars["String"]>;
  /** End of the period of the occupancy prediction (string of 'hh-mmZ' format) */
  period_end?: Maybe<Scalars["String"]>;
  /** Number of weekday from 1 (monday) to 7 (sunday) */
  weekday?: Maybe<Scalars["Int"]>;
};

export type StationRoaming = {
  /** Link to native Android app for card accepted at a charging station */
  android_app_link?: Maybe<Scalars["String"]>;
  /** Name of the card accepted at a charging station */
  card?: Maybe<Scalars["String"]>;
  /** Name of the EMSP provider */
  emsp?: Maybe<Scalars["String"]>;
  /** Link to native iOS app for card accepted at a charging station */
  ios_app_link?: Maybe<Scalars["String"]>;
};

/** The station speed type */
export enum StationSpeedType {
  /** Fast charging stations (above 43 kWh and below 150 kWh) */
  FAST = "fast",
  /** Slow charging (below 43 kWh) */
  SLOW = "slow",
  /** Ultra fast charging stations (above 150 kWh) */
  TURBO = "turbo"
}

/** The station stats model */
export type StationStats = {
  /** Stations count grouped by amenities */
  amenities?: Maybe<Array<Maybe<AmenityStats>>>;
  /** Stations count grouped by power */
  power?: Maybe<Array<Maybe<PowerStats>>>;
  /** Stations count grouped by standards */
  standards?: Maybe<Array<Maybe<StandardStats>>>;
};

/** Types of a route step */
export enum StepType {
  /** This step is a crossborder */
  CROSSBORDER = "crossborder",
  /** This step is a ferry */
  FERRY = "ferry",
  /** This step is a highway */
  HIGHWAY = "highway",
  /** This step is a road */
  ROAD = "road",
  /** This step is a toll road */
  TOLL = "toll",
  /** This step is reachable by walking */
  WALKING = "walking"
}
