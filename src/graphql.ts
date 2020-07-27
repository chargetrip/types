export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Any JSON object or array */
  JSON: { [key: string]: number | string | boolean | null | Scalars["JSON"] };
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: string;
  /** The File Upload scalar */
  Upload: any;
};

export type Query = {
  /** Get the full list of amenities around a station */
  amenityList?: Maybe<Array<Maybe<Amenity>>>;
  /** Get the information about a car by the car ID */
  car?: Maybe<Car>;
  /** Get the full list of cars */
  carList?: Maybe<Array<Maybe<Car>>>;
  /** Get the full list of operators */
  operatorList?: Maybe<Array<Maybe<Operator>>>;
  /** Get the information about an operator by the operator ID */
  operator?: Maybe<Operator>;
  /** Get all reviews of a station by the station ID */
  reviewList?: Maybe<Array<Review>>;
  /** Get a route by ID */
  route?: Maybe<Route>;
  /** Retrieve the information about a route path segment */
  routePath?: Maybe<RoutePath>;
  /** Get the station stats for the client */
  stationStats?: Maybe<StationStats>;
  /** Get the information about a station by the station ID */
  station?: Maybe<Station>;
  /** Get the full list of stations */
  stationList?: Maybe<Array<Maybe<Station>>>;
  /** Search for stations around a GeoJSON point with a specific distance in meters */
  stationAround?: Maybe<Array<Maybe<Station>>>;
  /** Get the information about a tariff by the tariff ID */
  tariff?: Maybe<OCPITariff>;
  /** Get the full list of tariffs */
  tariffList?: Maybe<Array<Maybe<OCPITariff>>>;
};

export type QueryamenityListArgs = {
  stationId: Scalars["ID"];
};

export type QuerycarArgs = {
  id?: Maybe<Scalars["ID"]>;
  externalId?: Maybe<Scalars["Int"]>;
};

export type QuerycarListArgs = {
  query?: Maybe<CarListQuery>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QueryoperatorListArgs = {
  query?: Maybe<OperatorListQuery>;
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

export type QueryrouteArgs = {
  id: Scalars["ID"];
};

export type QueryroutePathArgs = {
  id: Scalars["ID"];
  location: PointInput;
  alternativeId?: Maybe<Scalars["ID"]>;
};

export type QuerystationArgs = {
  id: Scalars["ID"];
};

export type QuerystationListArgs = {
  query?: Maybe<StationListQuery>;
  size?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type QuerystationAroundArgs = {
  query: StationAroundQuery;
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

/** The amenity model */
export type Amenity = {
  /** The unique amenity ID */
  id?: Maybe<Scalars["ID"]>;
  /** This is the ID provided by the amenity data source as the row ID */
  externalId?: Maybe<Scalars["String"]>;
  /** The name of the amenity */
  name?: Maybe<Scalars["String"]>;
  /** The geo location coordinates. This is a GeoJSON Point */
  location?: Maybe<Point>;
  /** The embedded Address */
  address?: Maybe<Address>;
  /** The amenity type keys as array of strings */
  type?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The rating value provided by the amenity data source. Values between 0.0 and 10.0 or null in case the amenity doesn't have any rating */
  rating?: Maybe<Scalars["Float"]>;
  /** The computed distance between a station and the current amenity */
  distance?: Maybe<Scalars["Int"]>;
  /** The full path URL to amenity foursquare page */
  foursquareUrl?: Maybe<Scalars["String"]>;
  /** The date and time when the amenity was created */
  createdAt?: Maybe<Scalars["String"]>;
  /** The date and time when the amenity was updated */
  updatedAt?: Maybe<Scalars["String"]>;
};

/** A GeoJSON Point */
export type Point = {
  /** The type of the point */
  type: PointType;
  /** The coordinates array with longitude as first value and latitude as second one */
  coordinates: Array<Scalars["Float"]>;
};

/** GeoJSON Point type */
export enum PointType {
  POINT = "Point"
}

/** The conplete information about an address */
export type Address = {
  /** The continent code (2 letters) */
  continent?: Maybe<Scalars["String"]>;
  /** The country code (2 letters) */
  country?: Maybe<Scalars["String"]>;
  /** The name of the county */
  county?: Maybe<Scalars["String"]>;
  /** The name of the city */
  city?: Maybe<Scalars["String"]>;
  /** The street name */
  street?: Maybe<Scalars["String"]>;
  /** The number from the street */
  number?: Maybe<Scalars["String"]>;
  /** The postal code of the location */
  postalCode?: Maybe<Scalars["String"]>;
  /** The string composed from 3 word which represent the location of the address on the globe. Use like: http://w3w.co/<what3Words> */
  what3Words?: Maybe<Scalars["String"]>;
  /** The composed address information which should be rendered */
  formattedAddress?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The car model */
export type Car = {
  /** The cars unique ID */
  id?: Maybe<Scalars["ID"]>;
  /** This is the ID provided by the car data source as the row ID */
  externalId?: Maybe<Scalars["String"]>;
  /** This is the car manufacturer */
  make?: Maybe<Scalars["String"]>;
  /** This is the car model */
  carModel?: Maybe<Scalars["String"]>;
  /** This is the car edition */
  edition?: Maybe<Scalars["String"]>;
  /** This is the car version */
  version?: Maybe<Scalars["String"]>;
  /** The current production mode of the car */
  mode?: Maybe<CarMode>;
  /** This is the car power in Kw */
  power?: Maybe<Scalars["Float"]>;
  /** The acceleration time from zero to 100 km/h */
  acceleration?: Maybe<Scalars["Float"]>;
  /** The maximum speed reached by the car */
  topSpeed?: Maybe<Scalars["Float"]>;
  /** The engine torque */
  torque?: Maybe<Scalars["Float"]>;
  /** This is the usable battery capacity in kWh */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /** This is the full battery capacity in kWh */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /** This is the battery efficiency in the city, highway and combined depending on weather conditions */
  batteryEfficiency?: Maybe<CarBatteryEfficiency>;
  /** This is the range in the city, highway and combined depending on weather conditions */
  range?: Maybe<CarRange>;
  /** This is the list of connectors available for the car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** This is the list of adapters of connectors available on the car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** This is the number of seats */
  seats?: Maybe<Scalars["Int"]>;
  /** This is the weight in Kg */
  weight?: Maybe<Scalars["Float"]>;
  /** This is the height in mm */
  height?: Maybe<Scalars["Int"]>;
  /** This is the width in mm */
  width?: Maybe<Scalars["Int"]>;
  /** The extra consumption model */
  consumption?: Maybe<CarExtraConsumption>;
  /** This is the amount of petrol a similar petrol car would consume per 100km */
  petrolConsumption?: Maybe<Scalars["Float"]>;
  /** A list of offset data for different charging speed */
  chargingOffset?: Maybe<Scalars["JSON"]>;
  /**
   * Deprecated
   * @deprecated You will receive null values.
   */
  auxConsumption?: Maybe<Scalars["Float"]>;
  /**
   * Deprecated
   * @deprecated You will receive null values.
   */
  bmsConsumption?: Maybe<Scalars["Float"]>;
  /**
   * Deprecated
   * @deprecated You will receive null values.
   */
  dragCoefficient?: Maybe<Scalars["Float"]>;
  /**
   * Deprecated
   * @deprecated You will receive null values.
   */
  tirePressure?: Maybe<Scalars["Float"]>;
  /**
   * Deprecated
   * @deprecated You will receive null values.
   */
  motorEfficiency?: Maybe<Scalars["Float"]>;
  /**
   * Deprecated
   * @deprecated You will receive null values.
   */
  drivelineEfficiency?: Maybe<Scalars["Float"]>;
  /**
   * Deprecated
   * @deprecated You will receive null values.
   */
  regenEfficiency?: Maybe<Scalars["Float"]>;
  /** The list of images of the car */
  images?: Maybe<Array<Maybe<CarImage>>>;
  /** The images of the car in structured data */
  imagesData?: Maybe<CarImageData>;
};

/** Mode (state) of the current production */
export enum CarMode {
  /** Old car that is no longer manufactured */
  INDEX_ONLY = "index_only",
  /** The car is in the manufacture process */
  PRODUCTION = "production",
  /** Future releases of car, a concept of the car, spec may change over time */
  CONCEPT = "concept"
}

/** The car battery efficiency */
export type CarBatteryEfficiency = {
  /** The average efficiency measured in kWh/100km */
  average?: Maybe<Scalars["Float"]>;
  /** Worst conditions: 'worst-case' based on -10°C and use of heating */
  worst?: Maybe<CarEstimationData>;
  /** Best conditions: 'best-case' based on 23°C and no use of A/C */
  best?: Maybe<CarEstimationData>;
};

/** Car estimated data format */
export type CarEstimationData = {
  /** The estimated value on the highway or express roads */
  highway?: Maybe<Scalars["Float"]>;
  /** The estimated value on the cities road */
  city?: Maybe<Scalars["Float"]>;
  /** The estimated combined value */
  combined?: Maybe<Scalars["Float"]>;
};

/** The car range estimations */
export type CarRange = {
  /** The WLTP estimation */
  wltp?: Maybe<Scalars["Float"]>;
  /** Worst conditions: 'worst-case' based on -10°C and use of heating */
  worst?: Maybe<CarEstimationData>;
  /** Best conditions: 'best-case' based on 23°C and no use of A/C */
  best?: Maybe<CarEstimationData>;
};

/** This is the car plug model */
export type CarPlug = {
  /** This is the plug type, known as connector standard in OCPI */
  standard?: Maybe<OCPIConnectorType>;
  /** This the maximum power the plug accepts in kW */
  power?: Maybe<Scalars["Float"]>;
  /** This is the time it takes to charge from 0 to 100% or from 10 to 80% if it's a fast charger in minutes */
  time?: Maybe<Scalars["Int"]>;
  /** This is the charging speed in km/h */
  speed?: Maybe<Scalars["Int"]>;
};

/** The socket or plug standard of the charging point. */
export enum OCPIConnectorType {
  /** The connector type is CHAdeMO, DC */
  CHADEMO = "CHADEMO",
  /** Standard/Domestic household, type "A", NEMA 1-15, 2 pins */
  DOMESTIC_A = "DOMESTIC_A",
  /** Standard/Domestic household, type "B", NEMA 5-15, 3 pins */
  DOMESTIC_B = "DOMESTIC_B",
  /** Standard/Domestic household, type "C", CEE 7/17, 2 pins */
  DOMESTIC_C = "DOMESTIC_C",
  /** Standard/Domestic household, type "D", 3 pins */
  DOMESTIC_D = "DOMESTIC_D",
  /** Standard/Domestic household, type "E", CEE 7/5 3 pins */
  DOMESTIC_E = "DOMESTIC_E",
  /** Standard/Domestic household, type "F", CEE 7/4, Schuko, 3 pins */
  DOMESTIC_F = "DOMESTIC_F",
  /** Standard/Domestic household, type "G", BS 1363, Commonwealth, 3 pins */
  DOMESTIC_G = "DOMESTIC_G",
  /** Standard/Domestic household, type "H", SI-32, 3 pins */
  DOMESTIC_H = "DOMESTIC_H",
  /** Standard/Domestic household, type "I", AS 3112, 3 pins */
  DOMESTIC_I = "DOMESTIC_I",
  /** Standard/Domestic household, type "J", SEV 1011, 3 pins */
  DOMESTIC_J = "DOMESTIC_J",
  /** Standard/Domestic household, type "K", DS 60884-2-D1, 3 pins */
  DOMESTIC_K = "DOMESTIC_K",
  /** Standard/Domestic household, type "L", CEI 23-16-VII, 3 pins */
  DOMESTIC_L = "DOMESTIC_L",
  /** IEC 60309-2 Industrial Connector single phase 16 amperes (usually blue) */
  IEC_60309_2_SINGLE_16 = "IEC_60309_2_single_16",
  /** IEC 60309-2 Industrial Connector three phase 16 amperes (usually red) */
  IEC_60309_2_THREE_16 = "IEC_60309_2_three_16",
  /** IEC 60309-2 Industrial Connector three phase 32 amperes (usually red) */
  IEC_60309_2_THREE_32 = "IEC_60309_2_three_32",
  /** IEC 60309-2 Industrial Connector three phase 64 amperes (usually red) */
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
  /** On-board Bottom-up-Pantograph typically for bus charging */
  PANTOGRAPH_BOTTOM_UP = "PANTOGRAPH_BOTTOM_UP",
  /** Off-board Top-down-Pantograph typically for bus charging */
  PANTOGRAPH_TOP_DOWN = "PANTOGRAPH_TOP_DOWN",
  /** Tesla Connector "Roadster"-type (round, 4 pins) */
  TESLA_R = "TESLA_R",
  /** Tesla Connector "Model-S"-type (oval, 5 pins) */
  TESLA_S = "TESLA_S"
}

/** The extra consumption model of the car */
export type CarExtraConsumption = {
  /** The consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the auxiliaries */
  bms?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the auxiliaries */
  idle?: Maybe<CarConsumption>;
};

/** The consumption of the auxiliaries */
export type CarConsumption = {
  /** Worst conditions: 'worst-case' based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions: 'best-case' based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
};

export type CarImage = {
  /** This is the image id */
  id?: Maybe<Scalars["ID"]>;
  /** This is the image url */
  url?: Maybe<Scalars["String"]>;
  /** This is the image width in pixels */
  width?: Maybe<Scalars["Int"]>;
  /** This is the image height in pixels */
  height?: Maybe<Scalars["Int"]>;
  /** This is the image type */
  type?: Maybe<CarImageType>;
};

/** This is the available types of images which can be found on a car. Each type have specific image sizes */
export enum CarImageType {
  /** Images provided by the Car Datasource */
  PROVIDER = "provider",
  /** Full size image at 1536x864 px */
  IMAGE = "image",
  /** The thumbnail of the full size image at 131x72 px */
  IMAGE_THUMBNAIL = "image_thumbnail",
  /** Full size brand (maker) logo at 768x432 px */
  BRAND = "brand",
  /** The thumbnail of the full size brand logo at 56x24 px */
  BRAND_THUMBNAIL = "brand_thumbnail"
}

/** The images of the car in structured data */
export type CarImageData = {
  /** Full size image of the car */
  image?: Maybe<CarImage>;
  /** Thumbnail of the full size image */
  image_thumbnail?: Maybe<CarImage>;
  /** The full size logo of the maker of the car */
  brand?: Maybe<CarImage>;
  /** Thumbnail of the full size logo of the maker of the car */
  brand_thumbnail?: Maybe<CarImage>;
};

/** Filter which can be applied to retrieve the car list action */
export type CarListQuery = {
  /** This is the vehicle manufacturer (maker) */
  make?: Maybe<Scalars["String"]>;
  /** This is the car model */
  carModel?: Maybe<Scalars["String"]>;
  /** This is the car edition */
  edition?: Maybe<Scalars["String"]>;
  /** The car current production mode */
  mode?: Maybe<CarMode>;
};

/** Filter which can be applied to retrieve the operator list action */
export type OperatorListQuery = {
  /** The unique operator ID */
  id?: Maybe<Scalars["ID"]>;
  /** The external id of the operator provided by the operator data source */
  external_id?: Maybe<Scalars["String"]>;
  /** The exact name of the operator */
  name?: Maybe<Scalars["String"]>;
  /** The exact country code */
  country?: Maybe<Scalars["String"]>;
};

/** The operator data which extends OCPI BusinessDetails */
export type Operator = {
  /** The unique operator ID */
  id?: Maybe<Scalars["ID"]>;
  /** The external id of the operator provided by the operator data source */
  external_id?: Maybe<Scalars["String"]>;
  /** The name of the operator */
  name?: Maybe<Scalars["String"]>;
  /** Link to the operator’s website. */
  website?: Maybe<Scalars["String"]>;
  /** Image link to the operator’s logo. */
  logo?: Maybe<OCPIImage>;
  /** ISO-3166 alpha-2 country code */
  country?: Maybe<Scalars["String"]>;
  /** The contact object information */
  contact?: Maybe<Contact>;
};

export type OCPIImage = {
  /** URL from where the image data can be fetched through a web browser. */
  url?: Maybe<Scalars["String"]>;
  /** URL from where a thumbnail of the image can be fetched through a webbrowser. */
  thumbnail?: Maybe<Scalars["String"]>;
  /** Describes what the image is used for. */
  category?: Maybe<OCPIImageCategory>;
  /** Image type like: gif, jpeg, png, svg */
  type?: Maybe<Scalars["String"]>;
  /** Width of the full scale image */
  width?: Maybe<Scalars["Int"]>;
  /** Height of the full scale image */
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

/** The complete contact information */
export type Contact = {
  /** The phone number in international format */
  phone?: Maybe<Scalars["String"]>;
  /** The email address */
  email?: Maybe<Scalars["String"]>;
  /** The absolute URL of the website */
  website?: Maybe<Scalars["String"]>;
  /** The absolute URL of the facebook profile page */
  facebook?: Maybe<Scalars["String"]>;
  /** The absolute URL of the twitter profile page */
  twitter?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
};

/** The review model */
export type Review = {
  /** The ID of the review */
  id: Scalars["ID"];
  /** The station for which the review was provided */
  station?: Maybe<Station>;
  /** The user who added the review, in case the review was added by an anonymous user, this will be null */
  user?: Maybe<ReviewUser>;
  /** The rating of the review */
  rating?: Maybe<Scalars["Int"]>;
  /** The message of the review */
  message?: Maybe<Scalars["String"]>;
  /** The locale of the message */
  locale?: Maybe<Scalars["String"]>;
  /** The Car which was provided/selected by the user */
  ev?: Maybe<Car>;
  /** The plug type which was provided/selected by the user */
  plugType?: Maybe<OCPIConnectorType>;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for the station review */
  tags?: Maybe<ReviewTags>;
  /** The date and time when the review was created */
  createdAt?: Maybe<Scalars["String"]>;
  /** The date and time when the review was updated */
  updatedAt?: Maybe<Scalars["String"]>;
};

/** Extending the station model to add review stats property */
export type Station = {
  /** The review stats for a station */
  review?: Maybe<ReviewStats>;
  /** The station unique ID */
  id: Scalars["ID"];
  /** ISO-3166 alpha-2 country code of the CPO that 'owns' this Location. */
  country_code?: Maybe<Scalars["String"]>;
  /** CPO ID of the CPO that 'owns' this Location (following the ISO-15118 standard). */
  party_id?: Maybe<Scalars["String"]>;
  /**
   * Defines if a Location may be published on an website or app etc.
   * When this is set to false, only tokens identified in the field: publish_allowed_to are allowed to be shown this Location.
   * When the same location has EVSEs that may be published and may not be published, two 'Locations' should be created.
   */
  publish?: Maybe<Scalars["Boolean"]>;
  /** The name of the charging station */
  name?: Maybe<Scalars["String"]>;
  /** Street/block name and house number if available. */
  address?: Maybe<Scalars["String"]>;
  /** City or town. */
  city?: Maybe<Scalars["String"]>;
  /** Postal code of the location, may only be omitted when the location has no postal code: in some countries charging locations at highways don’t have postal codes. */
  postal_code?: Maybe<Scalars["String"]>;
  /** State or province of the location, only to be used when relevant. */
  state?: Maybe<Scalars["String"]>;
  /** ISO 3166-1 alpha-3 code for the country of this location. */
  country?: Maybe<Scalars["String"]>;
  /** Coordinates of the location. */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** Geographical location of related points relevant to the user. */
  related_locations?: Maybe<Array<Maybe<OCPIAdditionalGeoLocation>>>;
  /** The general type of parking at the charge point location. */
  parking_type?: Maybe<OCPIParkingType>;
  /** List of EVSEs that belong to this Location. */
  evses?: Maybe<Array<Maybe<EVSE>>>;
  /** Human-readable directions on how to reach the location. */
  directions?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** Information of the operator. When not specified, the information retrieved from the Credentials module should be used instead. */
  operator?: Maybe<Operator>;
  /** Information of the suboperator if available. */
  suboperator?: Maybe<Operator>;
  /** Information of the owner if available. */
  owner?: Maybe<Operator>;
  /** Optional list of facilities this charging location directly belongs to. */
  facilities?: Maybe<Array<Maybe<OCPIFacility>>>;
  /** One of IANA tzdata’s TZ-values representing the time zone of the location. Examples: "Europe/Oslo", "Europe/Zurich". (http://www.iana.org/time-zones) */
  time_zone?: Maybe<Scalars["String"]>;
  /** The times when the EVSEs at the location can be accessed for charging. */
  opening_times?: Maybe<OCPIHours>;
  /** Indicates if the EVSEs are still charging outside the opening hours of the location. E.g. when the parking garage closes its barriers over night, is it allowed to charge till the next morning? Default: true */
  charging_when_closed?: Maybe<Scalars["Boolean"]>;
  /** Links to images related to the location such as photos or logos. */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Details on the energy supplied at this location. */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** Timestamp when this Location or one of its EVSEs or Connectors were last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** This is the ID provided by the station data source as the row ID */
  external_id?: Maybe<Scalars["String"]>;
  /** GeoJSON location of the charging station */
  location?: Maybe<Point>;
  /** Tƒhe elevation (altitude) level */
  elevation?: Maybe<Scalars["Int"]>;
  /** Groups of EVSEs by power and type */
  chargers?: Maybe<Array<Maybe<Charger>>>;
  /** An object with amenity types as key and number of amenities as value */
  amenities?: Maybe<Scalars["JSON"]>;
  /** Enriched information about the physical address of the station */
  physical_address?: Maybe<Address>;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** A flag which indicates if the station has realtime information about the availability of the connectors */
  realtime?: Maybe<Scalars["Boolean"]>;
  /** A flag which indicates if the station is on a private property */
  private?: Maybe<Scalars["Boolean"]>;
  /** The connectors grouped by power */
  power?: Maybe<Scalars["JSON"]>;
  /** The global charging speed type for the station */
  speed?: Maybe<StationSpeedType>;
  /** The global status for the station */
  status?: Maybe<ChargerStatus>;
};

/** Statistical information for the reviews of a station */
export type ReviewStats = {
  /** The reviews average */
  rating?: Maybe<Scalars["Float"]>;
  /** 'The total number of reviews */
  count?: Maybe<Scalars["Int"]>;
};

/** This class defines the geo location of the Charge Point. The geodetic system to be used is WGS 84. */
export type OCPIGeoLocation = {
  /** Latitude of the point in decimal degree. Example: 50.770774. Decimal separator: "." Regex: -?[0-9]{1,2}\.[0-9]{5,7} */
  latitude?: Maybe<Scalars["String"]>;
  /** Longitude of the point in decimal degree. Example: -126.104965. Decimal separator: "." Regex: -?[0-9]{1,3}\.[0-9]{5,7} */
  longitude?: Maybe<Scalars["String"]>;
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

export type OCPIDisplayText = {
  /** Language Code ISO 639-1 */
  language?: Maybe<Scalars["String"]>;
  /** Text to be displayed to an end user. No markup, html etc. allowed. */
  text?: Maybe<Scalars["String"]>;
};

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

/** The EVSE data which extends OCPI EVSE */
export type EVSE = {
  /**
   * Uniquely identifies the EVSE within the CPOs platform (and suboperator platforms). For example a database ID or the actual "EVSE ID". This field can never be changed, modified or renamed. This is the 'technical' identification of the EVSE, not to be used as 'human readable' identification, use the field evse_id for that.
   * This field is named uid instead of id, because id could be confused with evse_id which is an eMI3 defined field.
   */
  uid?: Maybe<Scalars["String"]>;
  /** Compliant with the following specification for EVSE ID from "eMI3 standard version V1.0" (http://emi3group.com/documents-links/) "Part 2: business objects." Optional because: if an evse_id is to be re-used in the real world, the evse_id can be removed from an EVSE object if the status is set to REMOVED. */
  evse_id?: Maybe<Scalars["String"]>;
  /** Indicates the current status of the EVSE. */
  status?: Maybe<OCPIStatus>;
  /** Indicates a planned status update of the EVSE. */
  status_schedule?: Maybe<Array<Maybe<OCPIStatusSchedule>>>;
  /** List of functionalities that the EVSE is capable of. */
  capabilities?: Maybe<Array<Maybe<OCPICapability>>>;
  /** List of available connectors on the EVSE. */
  connectors?: Maybe<Array<Maybe<Connector>>>;
  /** Level on which the Charge Point is located (in garage buildings) in the locally displayed numbering scheme. */
  floor_level?: Maybe<Scalars["String"]>;
  /** Coordinates of the EVSE. */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** A number/string printed on the outside of the EVSE for visual identification. */
  physical_reference?: Maybe<Scalars["String"]>;
  /** The restrictions that apply to the parking spot. */
  parking_restrictions?: Maybe<Array<Maybe<OCPIParkingRestriction>>>;
  /** Links to images related to the EVSE such as photos or logos. */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Timestamp when this EVSE or one of its Connectors was last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Indicates if the parking is free or paid. */
  parking_cost?: Maybe<ParkingCost>;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
};

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
  UNLOCK_CAPABLE = "UNLOCK_CAPABLE"
}

/** The connector data which extends OCPI Connector */
export type Connector = {
  /** Identifier of the Connector within the EVSE. Two Connectors may have the same id as long as they do not belong to the same EVSE object. */
  id?: Maybe<Scalars["String"]>;
  /** The standard of the installed connector. */
  standard?: Maybe<OCPIConnectorType>;
  /** The format (socket/cable) of the installed connector. */
  format?: Maybe<OCPIConnectorFormat>;
  /** The type of the power of the installed connector.  */
  power_type?: Maybe<OCPIPowerType>;
  /** Maximum voltage of the connector (line to neutral for AC_3_PHASE), in volt [V]. For example: DC Chargers might vary the voltage during charging when battery almost full. */
  max_voltage?: Maybe<Scalars["Int"]>;
  /** Maximum amperage of the connector, in ampere [A]. */
  max_amperage?: Maybe<Scalars["Int"]>;
  /**
   * Maximum electric power that can be delivered by this connector, in watt [W]. When the maximum electric power is lower than the calculated value from voltage and amperage, this value should be set.
   * For example: A DC Charge Point which can delivers up to 920V and up to 400A can be limited to a maximum of 150kW. Depending on the car, it may supply maximum voltage or current, but not both at the same time.
   * For AC Charge Points, the amount of phases used can also have influence on the maximum power.
   */
  max_electric_power?: Maybe<Scalars["Int"]>;
  /** Maximum electric power in kW */
  power?: Maybe<Scalars["Float"]>;
  /**
   * Identifiers of the currently valid charging tariffs. Multiple tariffs are possible, but only one of each Tariff.type can be active at the same time. Tariffs with the same type are only allowed, if they are not active at the same time: start_date_time and end_date_time period not overlapping.
   * When preference-based smart charging is supported, one tariff for every possible ProfileType should be provided. These tell the user about the options they have at this Connector, and what the tariff is for every option.
   * For a "free of charge" tariff, this field should be set and point to a defined "free of charge" tariff.
   */
  tariff_ids?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** URL to the operator’s terms and conditions. */
  terms_and_conditions?: Maybe<Scalars["String"]>;
  /** Timestamp when this Connector was last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** The list if valid charging tariffs */
  tariff?: Maybe<Array<Maybe<OCPITariff>>>;
};

/** The format of the connector, whether it is a socket or a plug. */
export enum OCPIConnectorFormat {
  /** The connector is a socket; the EV user needs to bring a fitting plug. */
  SOCKET = "SOCKET",
  /** The connector is an attached cable; the EV users car needs to have a fitting inlet. */
  CABLE = "CABLE"
}

export enum OCPIPowerType {
  /** AC single phase. */
  AC_1_PHASE = "AC_1_PHASE",
  /** AC three phase. */
  AC_3_PHASE = "AC_3_PHASE",
  /** Direct Current. */
  DC = "DC"
}

export type OCPITariff = {
  /** ISO-3166 alpha-2 country code of the CPO that owns this Tariff. */
  country_code?: Maybe<Scalars["String"]>;
  /** CPO ID of the CPO that owns this Tariff (following the ISO-15118 standard). */
  party_id?: Maybe<Scalars["String"]>;
  /** Uniquely identifies the tariff within the CPO’s platform (and suboperator platforms). */
  id?: Maybe<Scalars["String"]>;
  /** ISO-4217 code of the currency of this tariff. */
  currency?: Maybe<Scalars["String"]>;
  /** Defines the type of the tariff. This allows for distinction in case of given Charging Preferences. When omitted, this tariff is valid for all sessions. */
  type?: Maybe<OCPITariffType>;
  /** List of multi-language alternative tariff info texts. */
  tariff_alt_text?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** URL to a web page that contains an explanation of the tariff information in human readable form. */
  tariff_alt_url?: Maybe<Scalars["String"]>;
  /** When this field is set, a Charging Session with this tariff will at least cost this amount. This is different from a FLAT fee (Start Tariff, Transaction Fee), as a FLAT fee is a fixed amount that has to be payed for any Charging Session. A minimum price indicates that when the cost of a Charging Session is lower than this amount, the cost of the Session will be equal to this amount. (Also see note below) */
  min_price?: Maybe<OCPIPrice>;
  /** When this field is set, a Charging Session with this tariff will NOT cost more than this amount. (See note below) */
  max_price?: Maybe<OCPIPrice>;
  /** List of Tariff Elements. */
  elements?: Maybe<Array<Maybe<OCPITariffElement>>>;
  /** The time when this tariff becomes active, in UTC, time_zone field of the Location can be used to convert to local time. Typically used for a new tariff that is already given with the location, before it becomes active. (See note below) */
  start_date_time?: Maybe<Scalars["DateTime"]>;
  /** The time after which this tariff is no longer valid, in UTC, time_zone field if the Location can be used to convert to local time. Typically used when this tariff is going to be replaced with a different tariff in the near future. (See note below) */
  end_date_time?: Maybe<Scalars["DateTime"]>;
  /** Details on the energy supplied with this tariff. */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** Timestamp when this Tariff was last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
};

export enum OCPITariffType {
  /** Used to describe that a Tariff is valid when ad-hoc payment is used at the Charge Point (for example: Debit or Credit card payment terminal). */
  AD_HOC_PAYMENT = "AD_HOC_PAYMENT",
  /** Used to describe that a Tariff is valid when Charging Preference: CHEAP is set for the session. */
  PROFILE_CHEAP = "PROFILE_CHEAP",
  /** Used to describe that a Tariff is valid when Charging Preference: FAST is set for the session. */
  PROFILE_FAST = "PROFILE_FAST",
  /** Used to describe that a Tariff is valid when Charging Preference: GREEN is set for the session. */
  PROFILE_GREEN = "PROFILE_GREEN",
  /** Used to describe that a Tariff is valid when using an RFID, without any Charging Preference, or when Charging Preference: REGULAR is set for the session. */
  REGULAR = "REGULAR"
}

export type OCPIPrice = {
  /** Price/Cost excluding VAT. */
  excl_vat?: Maybe<Scalars["Float"]>;
  /** Price/Cost including VAT. */
  incl_vat?: Maybe<Scalars["Float"]>;
};

export type OCPITariffElement = {
  /** List of price components that describe the pricing of a tariff. */
  price_components?: Maybe<Array<Maybe<OCPIPriceComponent>>>;
  /** Restrictions that describe the applicability of a tariff. */
  restrictions?: Maybe<Array<Maybe<OCPITariffRestrictions>>>;
};

export type OCPIPriceComponent = {
  /** Type of tariff dimension. */
  type?: Maybe<OCPITariffDimensionType>;
  /** Price per unit (excl. VAT) for this tariff dimension. */
  price?: Maybe<Scalars["Float"]>;
  /** Applicable VAT percentage for this tariff dimension. If omitted, no VAT is applicable. Not providing a VAT is different from 0% VAT, which would be a value of 0.0 here. */
  vat?: Maybe<Scalars["Float"]>;
  /** Minimum amount to be billed. This unit will be billed in this step_size blocks. For example: if type is TIME and step_size has a value of 300, then time will be billed in blocks of 5 minutes. If 6 minutes were used, 10 minutes (2 blocks of step_size) will be billed. */
  step_size?: Maybe<Scalars["Int"]>;
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

export type OCPITariffRestrictions = {
  /** Start time of day in local time, the time zone is defined in the time_zone field of the Location, for example 13:30, valid from this time of the day. Must be in 24h format with leading zeros. Hour/Minute separator: ":" Regex: ([0-1][0-9]|2[1-3]):[0-5][0-9] */
  start_time?: Maybe<Scalars["String"]>;
  /** End time of day in local time, the time zone is defined in the time_zone field of the Location, for example 19:45, valid until this time of the day. Same syntax as start_time. */
  end_time?: Maybe<Scalars["String"]>;
  /** Start date in local time, the time zone is defined in the time_zone field of the Location, for example: 2015-12-24, valid from this day. Regex: ([12][0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) */
  start_date?: Maybe<Scalars["String"]>;
  /** End date in local time, the time zone is defined in the time_zone field of the Location, for example: 2015-12-27, valid until this day (exclusive). Same syntax as start_date. */
  end_date?: Maybe<Scalars["String"]>;
  /** Minimum consumed energy in kWh, for example 20, valid from this amount of energy being used. */
  min_kwh?: Maybe<Scalars["Float"]>;
  /** Maximum consumed energy in kWh, for example 50, valid until this amount of energy being used. */
  max_kwh?: Maybe<Scalars["Float"]>;
  /** Sum of the minimum current in A over all phases, for example 5. When the EV is charging with more than the defined amount of current, this TariffElement is/becomes active. If the charging current is or becomes lower, this TariffElement is not or no longer valid and becomes inactive. This describes NOT the minimum current over the entire Charging Session. This restriction can make a TariffElement become active when the charging current is above the defined value, but the TariffElement MUST no longer be active when the charging current drops below the defined value. */
  min_current?: Maybe<Scalars["Float"]>;
  /** Sum of the maximum current in A over all phases, for example 20. When the EV is charging with less than the defined amount of current, this TariffElement becomes/is active. If the charging current is or becomes higher, this TariffElement is not or no longer valid and becomes inactive. This describes NOT the maximum current over the entire Charging Session. This restriction can make a TariffElement become active when the charging current is below this value, but the TariffElement MUST  no longer be active when the charging current raises above the defined value. */
  max_current?: Maybe<Scalars["Float"]>;
  /** Minimum power in kW, for example 5. When the EV is charging with more than the defined amount of power, this TariffElement is/becomes active. If the charging power is or becomes lower, this TariffElement is not or no longer valid and becomes inactive. This describes NOT the minimum power over the entire Charging Session. This restriction can make a TariffElement become active when the charging power is above this value, but the TariffElement MUST no longer be active when the charging power drops below the defined value. */
  min_power?: Maybe<Scalars["Float"]>;
  /** Maximum power in kW, for example 20. When the EV is charging with less than the defined amount of power, this TariffElement becomes/is active. If the charging power is or becomes higher, this TariffElement is not or no longer valid and becomes inactive. This describes NOT the maximum power over the entire Charging Session. This restriction can make a TariffElement become active when the charging power is below this value, but the TariffElement MUST no longer be active when the charging power raises above the defined value. */
  max_power?: Maybe<Scalars["Float"]>;
  /** Minimum duration in seconds the Charging Session MUST last (inclusive). When the duration of a Charging Session is longer than the defined value, this TariffElement is or becomes active. Before that moment, this TariffElement is not yet active. */
  min_duration?: Maybe<Scalars["Float"]>;
  /** Maximum duration in seconds the Charging Session MUST last (exclusive). When the duration of a Charging Session is shorter than the defined value, this TariffElement is or becomes active. After that moment, this TariffElement is no longer active. */
  max_duration?: Maybe<Scalars["Float"]>;
  /** Which day(s) of the week this TariffElement is active. */
  day_of_week?: Maybe<OCPIDayOfWeek>;
  /** When this field is present, the TariffElement describes reservation costs. A reservation starts when the reservation is made, and ends when the drivers starts charging on the reserved EVSE/Location, or when the reservation expires. A reservation can only have: FLAT and TIME TariffDimensions, where TIME is for the duration of the reservation. */
  reservation?: Maybe<OCPIReservationRestrictionType>;
};

export enum OCPIDayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export enum OCPIReservationRestrictionType {
  /** Used in TariffElements to describe costs for a reservation. */
  RESERVATION = "RESERVATION",
  /** Used in TariffElements to describe costs for a reservation that expires (i.e. driver does not start a charging session before expiry_date of the reservation). */
  RESERVATION_EXPIRES = "RESERVATION_EXPIRES"
}

/** This type is used to specify the energy mix and environmental impact of the supplied energy at a location or in a tariff. */
export type OCPIEnergyMix = {
  /** True if 100% from regenerative sources. (CO2 and nuclear waste is zero) */
  is_green_energy?: Maybe<Scalars["Boolean"]>;
  /** Key-value pairs (enum + percentage) of energy sources of this location’s tariff. */
  energy_sources?: Maybe<Array<Maybe<OCPIEnergySource>>>;
  /** Key-value pairs (enum + percentage) of nuclear waste and CO2 exhaust of this location’s tariff. */
  environ_impact?: Maybe<Array<Maybe<OCPIEnvironmentalImpact>>>;
  /** Name of the energy supplier, delivering the energy for this location or tariff.* */
  supplier_name?: Maybe<Scalars["String"]>;
  /** Name of the energy suppliers product/tariff plan used at this location.* */
  energy_product_name?: Maybe<Scalars["String"]>;
};

export type OCPIEnergySource = {
  /** The type of energy source. */
  source?: Maybe<OCPIEnergySourceCategory>;
  /** Percentage of this source (0-100) in the mix. */
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
  /** The environmental impact category of this value. */
  category?: Maybe<OCPIEnvironmentalImpactCategory>;
  /** Amount of this portion in g/kWh. */
  amount?: Maybe<Scalars["Int"]>;
};

/** Categories of environmental impact values. */
export enum OCPIEnvironmentalImpactCategory {
  /** Produced nuclear waste in grams per kilowatthour. */
  NUCLEAR_WASTE = "NUCLEAR_WASTE",
  /** Exhausted carbon dioxide in grams per kilowatthour. */
  CARBON_DIOXIDE = "CARBON_DIOXIDE"
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

export enum ParkingCost {
  /** Parking is free */
  FREE = "free",
  /** Parking includes a fee */
  PAID = "paid"
}

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

/** Opening and access hours of the location. */
export type OCPIHours = {
  /** True to represent 24 hours a day and 7 days a week, except the given exceptions. */
  twentyfourseven?: Maybe<Scalars["Boolean"]>;
  /** Regular hours, weekday-based. Only to be used if twentyfourseven=false, then this field needs to contain at least one RegularHours object. */
  regular_hours?: Maybe<Array<Maybe<OCPIRegularHours>>>;
  /** Exceptions for specified calendar dates, time-range based. Periods the station is operating/accessible. Additional to regular_hours. May overlap regular rules. */
  exceptional_openings?: Maybe<Array<Maybe<OCPIExceptionalPeriod>>>;
  /** Exceptions for specified calendar dates, time-range based. Periods the station is not operating/accessible. Overwriting regular_hours and exceptional_openings. Should not overlap exceptional_openings. */
  exceptional_closings?: Maybe<Array<Maybe<OCPIExceptionalPeriod>>>;
};

/** Regular recurring operation or access hours. */
export type OCPIRegularHours = {
  /** Number of days in the week, from Monday (1) till Sunday (7) */
  weekday?: Maybe<Scalars["Int"]>;
  /** Begin of the regular period, in local time, given in hours and minutes. Must be in 24h format with leading zeros. Example: "18:15". Hour/Minute separator: ":" Regex: ([0-1][0-9]|2[1-3]):[0-5][0-9]. */
  period_begin?: Maybe<Scalars["String"]>;
  /** End of the regular period, in local time, syntax as for period_begin. Must be later than period_begin. */
  period_end?: Maybe<Scalars["String"]>;
};

/** Specifies one exceptional period for opening or access hours. */
export type OCPIExceptionalPeriod = {
  /** Begin of the exception. In UTC, time_zone field can be used to convert to local time. */
  period_begin?: Maybe<Scalars["DateTime"]>;
  /** End of the exception. In UTC, time_zone field can be used to convert to local time. */
  period_end?: Maybe<Scalars["DateTime"]>;
};

/** A groupped representation of EVSEs */
export type Charger = {
  /** The type of the charger */
  standard?: Maybe<OCPIConnectorType>;
  /** The power of the charger */
  power?: Maybe<Scalars["Float"]>;
  /** The price render string of the charger */
  price?: Maybe<Scalars["String"]>;
  /** The charging speed type */
  speed?: Maybe<StationSpeedType>;
  /** The statuses of all the EVSEs grouped in the charger */
  status?: Maybe<ChargerStatuses>;
  /** The total number of EVSEs grouped in the charger */
  total?: Maybe<Scalars["Int"]>;
};

/** The station speed type */
export enum StationSpeedType {
  /** Slow charging (bellow 40 kWh) */
  SLOW = "slow",
  /** Fast charging stations (above 40 kWh and bellow 150 kWh) */
  FAST = "fast",
  /** Ultra fast charging stations (above 150 kWh) */
  TURBO = "turbo"
}

/** The groupping by status of the chargers */
export type ChargerStatuses = {
  /** How many are free */
  free?: Maybe<Scalars["Int"]>;
  /** How many are busy */
  busy?: Maybe<Scalars["Int"]>;
  /** How many are unknown */
  unknown?: Maybe<Scalars["Int"]>;
  /** How many are not available */
  error?: Maybe<Scalars["Int"]>;
};

export enum ChargerStatus {
  /** The charger is free */
  FREE = "free",
  /** The charger is occupied/busy */
  BUSY = "busy",
  /** The charger is unknown */
  UNKNOWN = "unknown",
  /** The charger has an error */
  ERROR = "error"
}

/** Special format for the user of a review */
export type ReviewUser = {
  /** The user ID */
  id: Scalars["ID"];
  /** The users first name */
  firstName?: Maybe<Scalars["String"]>;
  /** The users last name */
  lastName?: Maybe<Scalars["String"]>;
};

/** Boolean tags for the station review */
export type ReviewTags = {
  /** Flag which indicates if the station was working when the review was added */
  working?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if the user recommended the station when the review was added */
  recommended?: Maybe<Scalars["Boolean"]>;
};

export type Route = {
  /** The recommended route */
  route?: Maybe<RouteAlternative>;
  /** A list of available alternatives */
  alternatives?: Maybe<Array<Maybe<RouteAlternative>>>;
  /** The EV specific data for a route request */
  ev?: Maybe<RequestEv>;
  /** The user who requested the route */
  user?: Maybe<RequestUser>;
  /** The route request data */
  routeRequest?: Maybe<RequestRoute>;
  /** The route status */
  status?: Maybe<RouteStatus>;
};

export type RouteAlternative = {
  /** The ID of the route alternative */
  id?: Maybe<Scalars["ID"]>;
  /** The type of the alternative */
  type?: Maybe<RouteAlternativeType>;
  /** The number of charges along the route. Usualy {legs} - 1 */
  charges?: Maybe<Scalars["Int"]>;
  /** The number of available charges along the route. */
  chargesAvailable?: Maybe<Scalars["Int"]>;
  /** The number of occupied charges along the route. */
  chargesOccupied?: Maybe<Scalars["Int"]>;
  /** The number of unknown charges along the route. */
  chargesUnknown?: Maybe<Scalars["Int"]>;
  /** The number of out of order charges along the route. */
  chargesOutOfOrder?: Maybe<Scalars["Int"]>;
  /** The total distance of the route in meters. */
  distance?: Maybe<Scalars["Int"]>;
  /** The total time of the route, including charge time, in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** The total energy used for the route in kWh */
  consumption?: Maybe<Scalars["Float"]>;
  /** The total time required to charge of the entire route, in seconds */
  chargeTime?: Maybe<Scalars["Float"]>;
  /** The amenity ranking for the alternative */
  amenityRanking?: Maybe<Scalars["Int"]>;
  /** The range, in meters, available at the beginning of the trip */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** The total energy in the battery at the beginning of the trip, in kWh */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** The remaining range, in meters, at the end of the trip */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** The remaining range, energy in kWh, at the end of the trip. */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** Text information about the route direction */
  via?: Maybe<Scalars["String"]>;
  /** The polyline encoded route */
  polyline?: Maybe<Scalars["String"]>;
  /** A list of elevation values. Each elevationPlot has a hundred points, independent of the length of the route */
  elevationPlot?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** The total number of meters which are going up on the route */
  elevationUp?: Maybe<Scalars["Float"]>;
  /** The total number of meters which are going down on the route */
  elevationDown?: Maybe<Scalars["Float"]>;
  /** The highest value from the elevation array */
  elevationMax?: Maybe<Scalars["Float"]>;
  /** Money and CO2 saving information */
  saving?: Maybe<RouteAlternativeSaving>;
  /** The list of legs of the route */
  legs?: Maybe<Array<Maybe<RouteLeg>>>;
  /** The list of alternative stations along the route within specified radius in meters only if it was provided at newRoute request */
  stationsAlongRoute?: Maybe<Array<Maybe<RouteStationsAlong>>>;
};

/** The types of the route alternative */
export enum RouteAlternativeType {
  /** The fastest route between origin and destination */
  FASTEST = "fastest",
  /** Best matching amenities along the route with the requested list */
  BESTMATCHING = "bestMatching",
  /** An alternative to the fastest route */
  ALTERNATIVE = "alternative"
}

export type RouteAlternativeSaving = {
  /** The total amount of CO2, in grams, which were used with a petrol vehicle */
  co2?: Maybe<Scalars["String"]>;
  /** The money saved by the user driving this route with the electric vehicle */
  money?: Maybe<Scalars["String"]>;
  /** The money currency */
  currency?: Maybe<Scalars["String"]>;
  /** The avarage gas price with which we made the calculation */
  averageGasPrice?: Maybe<Scalars["String"]>;
  /** The avarage energy price with which we made the calculation */
  averageEnergyPrice?: Maybe<Scalars["String"]>;
};

export type RouteLeg = {
  /** The ID of the leg */
  id?: Maybe<Scalars["ID"]>;
  /** The distance until the end of the leg is reached from the start, in meters */
  distance?: Maybe<Scalars["Int"]>;
  /** The total drive time from the start to the end of the leg, in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** The total energy used of the leg in kWh */
  consumption?: Maybe<Scalars["Float"]>;
  /** The range, in meters, available at the beginning of the leg */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** The total energy in the battery at the beginning of the leg, in kWh */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** The range, in meters, available at the end of the leg */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** The total energy left in the battery at the end of the leg, in kWh */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** The origin point location */
  origin?: Maybe<FeaturePoint>;
  /** The destination point location */
  destination?: Maybe<FeaturePoint>;
  /** The type of the leg */
  type?: Maybe<LegType>;
  /** The name of the destination. This is the station name in case the user should charge or the name of the location in case was provided */
  name?: Maybe<Scalars["String"]>;
  /** The ID of the station, if the user should charge */
  stationId?: Maybe<Scalars["String"]>;
  /** The ID of the operator, if the user should charge */
  operatorId?: Maybe<Scalars["String"]>;
  /** The total time required to charge the battery until 80%, in seconds, if the user should charge */
  chargeTime?: Maybe<Scalars["Int"]>;
  /** The recommended EVSE where to charge, if the user should charge */
  evse?: Maybe<EVSE>;
  /** The recommended connector for charging */
  connector?: Maybe<Connector>;
  /** The number of available plugs at the station, if the user should charge */
  plugsAvailable?: Maybe<Scalars["Int"]>;
  /** The number of occupied plug at the charge station, if the user should charge */
  plugsOccupied?: Maybe<Scalars["Int"]>;
  /** The number of unknown plug at the charge station, if the user should charge */
  plugsUnknown?: Maybe<Scalars["Int"]>;
  /** The number of out of order plug at the charge station, if the user should charge */
  plugsOutOfOrder?: Maybe<Scalars["Int"]>;
  /** The total number of plugs at the station, if the user should charge */
  plugsCount?: Maybe<Scalars["Int"]>;
};

/** A GeoJSON Feature<Point> */
export type FeaturePoint = {
  /** The feature ID */
  id?: Maybe<Scalars["String"]>;
  /** The type of the feature */
  type: FeatureType;
  /** The geometry of the feature */
  geometry: Point;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
};

/** GeoJSON Feature type */
export enum FeatureType {
  FEATURE = "Feature"
}

/** The types of the leg */
export enum LegType {
  /** This leg ends at a charging station and the car must recharge */
  STATION = "station",
  /** This leg ends at a via charging station and the car must recharge */
  STATIONVIA = "stationVia",
  /** This leg ends at a via location */
  VIA = "via",
  /** This leg ends at the destination, and is the last leg of the route */
  FINAL = "final",
  /** This leg ends at the destination which is a charging station, and is the last leg of the route. */
  STATIONFINAL = "stationFinal"
}

export type RouteStationsAlong = {
  /** The ID of station */
  id?: Maybe<Scalars["String"]>;
  /** The geojson location of station */
  location?: Maybe<Point>;
  /** The speed of the station */
  speed?: Maybe<StationSpeedType>;
  /** The status of the station */
  status?: Maybe<ChargerStatus>;
  /** If the station uses preferred opperator */
  preferredOperator?: Maybe<Scalars["Boolean"]>;
  /** The distance in meters of the station from the route path */
  distance?: Maybe<Scalars["Int"]>;
};

/** The EV specific data for a route request */
export type RequestEv = {
  /** This is internal ID of the Car */
  id?: Maybe<Scalars["ID"]>;
  /** The EV battery specific data */
  battery?: Maybe<RequestEvBattery>;
  /** The supported plugs of the EV */
  plugs?: Maybe<Array<Maybe<RequestEvPlug>>>;
  /** The supported adapters of plugs of the EV */
  adapters?: Maybe<Array<Maybe<RequestEvPlug>>>;
  /** The minimum desired power of chargers */
  minPower?: Maybe<Scalars["Int"]>;
  /** Flag which indicates if the climate is on. The default is true */
  climate?: Maybe<Scalars["Boolean"]>;
  /** The number of passengers on board */
  numberOfPassengers?: Maybe<Scalars["Int"]>;
  /** The consumption specific to the EV or inputed by the request */
  consumption?: Maybe<RequestEvConsumption>;
};

export type RequestEvBattery = {
  /** The usable capacity of the battery used to compute the route. If this in not filled in,  value as the car batteryUsableKwh. */
  capacity?: Maybe<RequestEvBatteryValue>;
  /** The usable capacity of the battery, in kWh. This value is computed from the provided capacity value. */
  capacityKwh?: Maybe<Scalars["Float"]>;
  /** The current amount of energy in the battery. If this is not filled in, we assume the battery is full and we fill it in with car batteryUsableKwh. */
  stateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** The current amount of energy in the battery, in kWh. This value is computed from the provided state of charge. */
  stateOfChargeKwh?: Maybe<Scalars["Float"]>;
  /** The desired final amount of energy in the battery. If this is not filled in, we assume it is 20% of the car batteryUsableKwh. */
  finalStateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** The desired final amount of energy in the battery, in kWh. This value is computed from the provided final state of charge. */
  finalStateOfChargeKwh?: Maybe<Scalars["Float"]>;
};

export type RequestEvBatteryValue = {
  /** The value of the desired final amount of energy in the battery */
  value: Scalars["Float"];
  /** The type of the desired final amount of energy in the battery */
  type: BatteryInputType;
};

/** The type of the batter value */
export enum BatteryInputType {
  KWH = "kwh",
  KM = "km",
  MILES = "miles"
}

export type RequestEvPlug = {
  /** The type of the plug */
  standard?: Maybe<OCPIConnectorType>;
  /** The maximum charging speed for this plug */
  chargingPower?: Maybe<Scalars["Float"]>;
};

export type RequestEvConsumption = {
  /** The consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarConsumption>;
};

export type RequestUser = {
  /** The ID of the user */
  id?: Maybe<Scalars["ID"]>;
};

export type RequestRoute = {
  /** A list of desired amenities on stations */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A list of preferred/required operators */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Flag which indicates if the operators are required or preferred */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if the preferred operators should be loaded */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /** Optional season */
  season?: Maybe<RouteSeason>;
  /** Percentage for the minimum limit of the battery capacity before a recharge. Value between 0 and 60 */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** The origin location for the route */
  origin?: Maybe<FeaturePoint>;
  /** The destination location for the route */
  destination?: Maybe<FeaturePoint>;
  /** An optional list of locations where we should stop */
  via?: Maybe<Array<Maybe<FeaturePoint>>>;
  /** Radius in meters for alternative stations along the route (min 500 - max 5000) */
  stationsAlongRouteRadius?: Maybe<Scalars["Int"]>;
};

/** The season of the route */
export enum RouteSeason {
  /** We suppose it is summer and we have the best weather conditions */
  SUMMER = "summer",
  /** We suppose it is winter and we have the worst weather conditions */
  WINTER = "winter",
  /** We fetch the current weather conditions */
  CURRENT = "current"
}

/** The statuses of the route */
export enum RouteStatus {
  /** The route is queued and pending processing. Temporary status */
  PENDING = "pending",
  /** We are computing the route for your request. Temporary status */
  PROCESSING = "processing",
  /** We finished computing the route, with a result. Final status */
  DONE = "done",
  /** We finished the computing the route, without any result. Final status */
  NOT_FOUND = "not_found",
  /** An error occurred while computing the route. Final status */
  ERROR = "error"
}

/** A GeoJSON Point input */
export type PointInput = {
  /** The type of the point */
  type: PointType;
  /** The coordinates array with longitude as first value and latitude as second one */
  coordinates: Array<Scalars["Float"]>;
};

export type RoutePath = {
  /** The Geo JSON location of the route path segment */
  location?: Maybe<Point>;
  /** The elevation (altitude) in meters */
  elevation?: Maybe<Scalars["Int"]>;
  /** The average speed, in km/h, for this route path segment */
  avSpeed?: Maybe<Scalars["Float"]>;
  /** The recommended speed of this path segment to optimise the consumption */
  recommandedSpeed?: Maybe<Scalars["Float"]>;
  /** The consumption, in kWh, of this route path segment */
  consumption?: Maybe<Scalars["Float"]>;
  /** The consumption, in kWh per km, of this route path segment */
  consumptionPerKm?: Maybe<Scalars["Float"]>;
  /** The distance, in meters, of this route path segment */
  distance?: Maybe<Scalars["Float"]>;
  /** The duration, in seconds, of this route path segment */
  duration?: Maybe<Scalars["Float"]>;
};

/** The station stats model */
export type StationStats = {
  /** Stations count grouped by standards */
  standards?: Maybe<Array<Maybe<StandardStats>>>;
  /** Stations count grouped by power */
  power?: Maybe<Array<Maybe<PowerStats>>>;
  /** Stations count grouped by amenities */
  amenities?: Maybe<Array<Maybe<AmenityStats>>>;
};

/** Standards(plug type) stats model */
export type StandardStats = {
  /** The plug type */
  type?: Maybe<OCPIConnectorType>;
  /** The total number of stations with the specified plug */
  total?: Maybe<Scalars["Int"]>;
};

/** Power stats model */
export type PowerStats = {
  /** The charging speed type for the specified power */
  type?: Maybe<StationSpeedType>;
  /** The list of powers for the speed type */
  powers?: Maybe<Array<Maybe<PowerList>>>;
};

/** The list of powers for the speed type */
export type PowerList = {
  /** The maximum power the plug provides in kW */
  power?: Maybe<Scalars["Float"]>;
  /** The total number of stations with the specified power */
  total?: Maybe<Scalars["Int"]>;
};

/** Amenities stats model */
export type AmenityStats = {
  /** The amenity type */
  type?: Maybe<Scalars["String"]>;
  /** The total number of stations with the specified amenity */
  total?: Maybe<Scalars["Int"]>;
};

/** Filter which can be applied to retrieve the station list action */
export type StationListQuery = {
  /** The ID of the station */
  id?: Maybe<Scalars["ID"]>;
  /** The external ID of the station provided by the station data source */
  external_id?: Maybe<Scalars["String"]>;
  /** The exact name */
  name?: Maybe<Scalars["String"]>;
};

/** Filter which can be applied to retrieve the station around list action */
export type StationAroundQuery = {
  /** The GeoJSON Point of the center of the around me circle */
  location: PointInput;
  /** The distance, in meters, to search around */
  distance: Scalars["Int"];
  /** A list of power in kWh */
  power?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** A list of amenity keys. Values: restaurant, bathroom, supermarket, playground, coffee, shopping, museum, hotel, park */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type Mutation = {
  /** Add a new review */
  addReview: Review;
  /** Create a new route from route input and get the ID */
  newRoute?: Maybe<Scalars["ID"]>;
};

export type MutationaddReviewArgs = {
  review: ReviewAdd;
};

export type MutationnewRouteArgs = {
  input?: Maybe<RequestInput>;
};

/** The form input for add a new review */
export type ReviewAdd = {
  /** The station ID for which the review is provided */
  stationId: Scalars["String"];
  /** The rating of the review */
  rating: Scalars["Int"];
  /** The message of the review */
  message?: Maybe<Scalars["String"]>;
  /** The locale of the message */
  locale?: Maybe<Scalars["String"]>;
  /** The ID of the Car which was provided/selected by the user */
  ev?: Maybe<Scalars["String"]>;
  /** The plug type which was provided/selected by the user */
  plugType?: Maybe<OCPIConnectorType>;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for the station review */
  tags?: Maybe<ReviewTagsInput>;
};

/** Boolean tags for the station review */
export type ReviewTagsInput = {
  /** Flag which indicates if the station was working when the review was added */
  working?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if the user recommended the station when the review was added */
  recommended?: Maybe<Scalars["Boolean"]>;
};

export type RequestInput = {
  /** The EV specific data for a route request */
  ev: RequestEvInput;
  /** The route request data */
  routeRequest: RequestRouteInput;
};

export type RequestEvInput = {
  /** This is internal ID of the Car */
  id: Scalars["ID"];
  /** The EV battery specific data */
  battery?: Maybe<RequestEvBatteryInput>;
  /** The supported plugs of the EV */
  plugs?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
  /** The supported adapters of plugs of the EV */
  adapters?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
  /** The minimum desired power of chargers */
  minPower?: Maybe<Scalars["Int"]>;
  /** Flag which indicates if the climate is on. The default is true */
  climate?: Maybe<Scalars["Boolean"]>;
  /** The number of passengers on board */
  numberOfPassengers?: Maybe<Scalars["Int"]>;
  /** The consumption specific to the EV or inputed by the request */
  consumption?: Maybe<RequestEvConsumptionInput>;
  /** Deprecated */
  auxConsumption?: Maybe<Scalars["Float"]>;
  /** Deprecated */
  bmsConsumption?: Maybe<Scalars["Float"]>;
};

export type RequestEvBatteryInput = {
  /** The usable capacity of the battery used to compute the route. If this in not filled in, we assume it is the same value as the car batteryUsableKwh. */
  capacity?: Maybe<RequestEvBatteryInputValue>;
  /** The current amount of energy in the battery. If this is not filled in, we assume the battery is full and we fill it in with car batteryUsableKwh. */
  stateOfCharge?: Maybe<RequestEvBatteryInputValue>;
  /** The desired final amount of energy in the battery. If this is not filled in, we assume it is 20% of the car batteryUsableKwh. */
  finalStateOfCharge?: Maybe<RequestEvBatteryInputValue>;
};

export type RequestEvBatteryInputValue = {
  /** The value of the desired final amount of energy in the battery */
  value: Scalars["Float"];
  /** The type of the desired final amount of energy in the battery */
  type: BatteryInputType;
};

export type RequestEvPlugInput = {
  /** The type of the plug */
  standard: OCPIConnectorType;
  /** The maximum charging speed for this plug */
  chargingPower: Scalars["Float"];
};

export type RequestEvConsumptionInput = {
  /** The consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumptionInput>;
  /** The consumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumptionInput>;
  /** The consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarConsumptionInput>;
};

/** The consumption of the car */
export type CarConsumptionInput = {
  /** Worst conditions: 'worst-case' based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions: 'best-case' based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
};

export type RequestRouteInput = {
  /** A list of desired amenities on stations */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A list of preferred/required operators */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Flag which indicates if the operators are required or preferred */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if the preferred operators should be loaded */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /** Optional season select */
  season?: Maybe<RouteSeason>;
  /** Percentage for the minimum limit of the battery capacity before a recharge. Value between 0 and 60. Default is 10% */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** The origin location for the route */
  origin: FeaturePointInput;
  /** The destination location for the route */
  destination: FeaturePointInput;
  /** An optional list of locations where we should stop */
  via?: Maybe<Array<Maybe<FeaturePointInput>>>;
  /** An optional list of alternative stations along the route within specified radius in meters (min 500, max 5000) also could be null */
  stationsAlongRouteRadius?: Maybe<Scalars["Int"]>;
};

/** A GeoJSON Feature<Point> input */
export type FeaturePointInput = {
  /** The feature ID */
  id?: Maybe<Scalars["String"]>;
  /** The type of the feature */
  type: FeatureType;
  /** The geometry of the feature */
  geometry: PointInput;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
};

export type Subscription = {
  /** Subscription for a new operator was added in the system event */
  operatorAdded?: Maybe<Operator>;
  /** Subscription for an operator was updated in the system event, any operator */
  operatorUpdated?: Maybe<Operator>;
  /** Subscription for an operator was removed from the system event, any operator */
  operatorDeleted?: Maybe<Operator>;
  /** Subscription for a specific operator was updated in the system event */
  operatorUpdatedById?: Maybe<Operator>;
  /** Subscription for a specific operator was removed from the system event */
  operatorDeletedById?: Maybe<Operator>;
  /** Subscription for a specific route was updated in the system event */
  routeUpdatedById?: Maybe<Route>;
  /** Subscription for a new station was added in the system event */
  stationAdded?: Maybe<Station>;
  /** Subscription for a station was updated in the system event, any station */
  stationUpdated?: Maybe<Station>;
  /** Subscription for a station was removed from the system event, any station */
  stationDeleted?: Maybe<Station>;
  /** Subscription for a specific station was updated in the system event */
  stationUpdatedById?: Maybe<Station>;
  /** Subscription for a specific station was removed from the system event */
  stationDeletedById?: Maybe<Station>;
};

export type SubscriptionoperatorUpdatedByIdArgs = {
  id: Scalars["ID"];
};

export type SubscriptionoperatorDeletedByIdArgs = {
  id: Scalars["ID"];
};

export type SubscriptionrouteUpdatedByIdArgs = {
  id: Scalars["ID"];
};

export type SubscriptionstationUpdatedByIdArgs = {
  id: Scalars["ID"];
};

export type SubscriptionstationDeletedByIdArgs = {
  id: Scalars["ID"];
};

/** When uploading images to a car, you can select one of this types. The rest of the types are automatically generated by the system */
export enum CarImageTypeUploadable {
  /** Full size image with a resolution at least 1536x864 px */
  IMAGE = "image",
  /** Full size brand (maker) logo with a resolution at least 768x432 px */
  BRAND = "brand"
}

/** The form input for edit an existing review */
export type ReviewEdit = {
  /** The rating of the review */
  rating: Scalars["Int"];
  /** The message of the review */
  message?: Maybe<Scalars["String"]>;
  /** The locale of the message */
  locale?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application and extend the current functionalities which we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for the station review */
  tags?: Maybe<ReviewTagsInput>;
};
