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
  /** Get a full list of amenities around a station */
  amenityList?: Maybe<Array<Maybe<Amenity>>>;
  /** Get information about a car by its ID */
  car?: Maybe<Car>;
  /** Get a full list of cars */
  carList?: Maybe<Array<Maybe<Car>>>;
  /** Get a full list of operators */
  operatorList?: Maybe<Array<Maybe<Operator>>>;
  /** Get information about an operator by its ID */
  operator?: Maybe<Operator>;
  /** Get all reviews of a station by the station ID */
  reviewList?: Maybe<Array<Review>>;
  /** Get a route by ID */
  route?: Maybe<Route>;
  /** Retrieve information about a route path segment */
  routePath?: Maybe<RoutePath>;
  /** Get the station statistics */
  stationStats?: Maybe<StationStats>;
  /** Get information about a station by its ID */
  station?: Maybe<Station>;
  /** Get a full list of stations */
  stationList?: Maybe<Array<Maybe<Station>>>;
  /** Search for stations around a GeoJSON point with a specific distance in meters */
  stationAround?: Maybe<Array<Maybe<Station>>>;
  /** Get information about a tariff by the tariff ID */
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

/** A GeoJSON Point */
export type Point = {
  /** Point type */
  type: PointType;
  /** The coordinates array with longitude as first value and latitude as second one */
  coordinates: Array<Scalars["Float"]>;
};

/** GeoJSON Point type */
export enum PointType {
  POINT = "Point"
}

/** Information about an address */
export type Address = {
  /** Continent code (2 letters) */
  continent?: Maybe<Scalars["String"]>;
  /** Country code (2 letters) */
  country?: Maybe<Scalars["String"]>;
  /** County code (2 letters) */
  county?: Maybe<Scalars["String"]>;
  /** City */
  city?: Maybe<Scalars["String"]>;
  /** Street name */
  street?: Maybe<Scalars["String"]>;
  /** Street number */
  number?: Maybe<Scalars["String"]>;
  /** Postal code of a location */
  postalCode?: Maybe<Scalars["String"]>;
  /** String composed of 3 words which represent the location of an address on the globe. More details: http://w3w.co/<what3Words> */
  what3Words?: Maybe<Scalars["String"]>;
  /** Human-readable address of a location */
  formattedAddress?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The car model */
export type Car = {
  /** Cars unique ID */
  id?: Maybe<Scalars["ID"]>;
  /** ID provided by the car data source as the row ID */
  externalId?: Maybe<Scalars["String"]>;
  /** Car manufacturer */
  make?: Maybe<Scalars["String"]>;
  /** Car model */
  carModel?: Maybe<Scalars["String"]>;
  /** Car edition */
  edition?: Maybe<Scalars["String"]>;
  /** Car model edition. Added by Chargetrip as an alternative for when the car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /** Car version */
  version?: Maybe<Scalars["String"]>;
  /** Current production mode of a car */
  mode?: Maybe<CarMode>;
  /** Power of a car in Kw */
  power?: Maybe<Scalars["Float"]>;
  /** Acceleration time from 0 to 100 km/h */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Maximum car speed in km/h */
  topSpeed?: Maybe<Scalars["Float"]>;
  /** Engine torque */
  torque?: Maybe<Scalars["Float"]>;
  /** Usable battery capacity in kWh */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /** Full battery capacity in kWh */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /** Battery efficiency in the city, highway and combined depending on weather conditions */
  batteryEfficiency?: Maybe<CarBatteryEfficiency>;
  /** Range in the city, highway and combined depending on weather conditions */
  range?: Maybe<CarRange>;
  /** Available connectors for a car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** List of adapters of connectors available for a car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Number of seats */
  seats?: Maybe<Scalars["Int"]>;
  /** Weight in Kg */
  weight?: Maybe<Scalars["Float"]>;
  /** Height in mm */
  height?: Maybe<Scalars["Int"]>;
  /** Width in mm */
  width?: Maybe<Scalars["Int"]>;
  /** Extra consumption model */
  consumption?: Maybe<CarExtraConsumption>;
  /** Amount of petrol a similar petrol car would consume per 100km */
  petrolConsumption?: Maybe<Scalars["Float"]>;
  /** A list of offset data for different charging speeds */
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
  /** Images of a car */
  images?: Maybe<Array<Maybe<CarImage>>>;
  /** Images of a car in structured data */
  imagesData?: Maybe<CarImageData>;
};

/** Mode (state) of the current production */
export enum CarMode {
  /** Old car that is no longer manufactured */
  INDEX_ONLY = "index_only",
  /** The car is in production and released */
  PRODUCTION = "production",
  /** Future releases of a car, a concept of the car, specs may change over time */
  CONCEPT = "concept"
}

/** Car battery efficiency */
export type CarBatteryEfficiency = {
  /** Average efficiency measured in kWh/100km */
  average?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating, measured in kWh/100km */
  worst?: Maybe<CarEstimationData>;
  /** Best conditions are based on 23°C and no use of A/C, measured in kWh/100km */
  best?: Maybe<CarEstimationData>;
};

/** Car estimated data format */
export type CarEstimationData = {
  /** Estimated battery efficiency on a highway or express roads, in km */
  highway?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on a city road, in km */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on highway and city roads combined, in km */
  combined?: Maybe<Scalars["Float"]>;
};

/** Car range estimations */
export type CarRange = {
  /** WLTP estimation */
  wltp?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<CarEstimationData>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<CarEstimationData>;
};

/** Car plug model */
export type CarPlug = {
  /** Plug type, known as connector standard in OCPI */
  standard?: Maybe<OCPIConnectorType>;
  /** This is the maximum power a plug accepts in kW */
  power?: Maybe<Scalars["Float"]>;
  /** Time it takes to charge from 10% to 80%, with a fast charger in minutes */
  time?: Maybe<Scalars["Int"]>;
  /** Charging speed in km/h */
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

/** Extra consumption model of a car */
export type CarExtraConsumption = {
  /** Consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumption>;
  /** Consumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumption>;
  /** Consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarConsumption>;
};

/** Consumption of the auxiliaries */
export type CarConsumption = {
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
};

export type CarImage = {
  /** Image id */
  id?: Maybe<Scalars["ID"]>;
  /** Image url */
  url?: Maybe<Scalars["String"]>;
  /** Image width in pixels */
  width?: Maybe<Scalars["Int"]>;
  /** Image height in pixels */
  height?: Maybe<Scalars["Int"]>;
  /** Image type */
  type?: Maybe<CarImageType>;
};

/** Available types of images which can be found for a car. Each type has specific image sizes */
export enum CarImageType {
  /** Images provided by a Car Datasource */
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

/** Images of a car in structured data */
export type CarImageData = {
  /** Full size image of a car */
  image?: Maybe<CarImage>;
  /** Thumbnail of a full size image */
  image_thumbnail?: Maybe<CarImage>;
  /** Full size logo of the maker of a car */
  brand?: Maybe<CarImage>;
  /** Thumbnail of a full size logo of the maker of a car */
  brand_thumbnail?: Maybe<CarImage>;
};

/** Filter which can be applied to retrieve the car list action */
export type CarListQuery = {
  /** Vehicle manufacturer (maker) */
  make?: Maybe<Scalars["String"]>;
  /** Car model */
  carModel?: Maybe<Scalars["String"]>;
  /** Car edition */
  edition?: Maybe<Scalars["String"]>;
  /** Car model edition. Added by Chargetrip as an alternative for when the car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /** The car current production mode */
  mode?: Maybe<CarMode>;
};

/** Filter which can be applied to retrieve the operator list action */
export type OperatorListQuery = {
  /** Unique operator ID */
  id?: Maybe<Scalars["ID"]>;
  /** External ID of an operator provided by an operator data source */
  external_id?: Maybe<Scalars["String"]>;
  /** Exact name */
  name?: Maybe<Scalars["String"]>;
  /** Exact country code */
  country?: Maybe<Scalars["String"]>;
};

/** The operator data which extends OCPI BusinessDetails */
export type Operator = {
  /** Unique operator ID */
  id?: Maybe<Scalars["ID"]>;
  /** External ID of an operator provided by the operator data source */
  external_id?: Maybe<Scalars["String"]>;
  /** Name of an operator */
  name?: Maybe<Scalars["String"]>;
  /** Link to an operator’s website */
  website?: Maybe<Scalars["String"]>;
  /** Image link to an operator’s logo */
  logo?: Maybe<OCPIImage>;
  /** ISO-3166 alpha-2 country code */
  country?: Maybe<Scalars["String"]>;
  /** Contact information */
  contact?: Maybe<Contact>;
};

export type OCPIImage = {
  /** URL from where the image data can be fetched through a web browser. */
  url?: Maybe<Scalars["String"]>;
  /** URL from where a thumbnail of the image can be fetched through a webbrowser. */
  thumbnail?: Maybe<Scalars["String"]>;
  /** Category of an image */
  category?: Maybe<OCPIImageCategory>;
  /** Image type: gif, jpeg, png, svg */
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
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
};

/** The review model */
export type Review = {
  /** ID of a review */
  id: Scalars["ID"];
  /** Station for which a review was provided */
  station?: Maybe<Station>;
  /** User who added a review, in case a review was added by an anonymous user, this will be null */
  user?: Maybe<ReviewUser>;
  /** Rating of a review */
  rating?: Maybe<Scalars["Int"]>;
  /** Message of a review */
  message?: Maybe<Scalars["String"]>;
  /** Locale of a message */
  locale?: Maybe<Scalars["String"]>;
  /** Car which was provided/selected by a user */
  ev?: Maybe<Car>;
  /** Plug type which was provided/selected by a user */
  plugType?: Maybe<OCPIConnectorType>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for a station review */
  tags?: Maybe<ReviewTags>;
  /** Date and time when a review was created */
  createdAt?: Maybe<Scalars["String"]>;
  /** Date and time when a review was updated */
  updatedAt?: Maybe<Scalars["String"]>;
};

/** Extending a station model to add review stats property */
export type Station = {
  /** Review of a station */
  review?: Maybe<ReviewStats>;
  /** Unique ID of a station */
  id: Scalars["ID"];
  /** ISO-3166 alpha-2 country code of a station */
  country_code?: Maybe<Scalars["String"]>;
  /** CPO ID of a CPO that 'owns' this station (following the ISO-15118 standard) */
  party_id?: Maybe<Scalars["String"]>;
  /**
   * Defines if a Location may be published on an website or app etc.
   * When this is set to false, only tokens identified in the field: publish_allowed_to are allowed to show this Location.
   * When the same location has EVSEs that may be published and may not be published, two 'Locations' should be created.
   */
  publish?: Maybe<Scalars["Boolean"]>;
  /** Name of a charging station */
  name?: Maybe<Scalars["String"]>;
  /** Street/block name and house number if available */
  address?: Maybe<Scalars["String"]>;
  /** City or town */
  city?: Maybe<Scalars["String"]>;
  /** Postal code of a location, may only be omitted when a location has no postal code: in some countries charging locations at highways don’t have postal codes. */
  postal_code?: Maybe<Scalars["String"]>;
  /** State or province of a location, only to be used when relevant */
  state?: Maybe<Scalars["String"]>;
  /** ISO 3166-1 alpha-3 code for the country of this station */
  country?: Maybe<Scalars["String"]>;
  /** Coordinates of a location */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** Geographical location of related points relevant to a user */
  related_locations?: Maybe<Array<Maybe<OCPIAdditionalGeoLocation>>>;
  /** Type of parking at a charge point location */
  parking_type?: Maybe<OCPIParkingType>;
  /** EVSEs that belong to a station */
  evses?: Maybe<Array<Maybe<EVSE>>>;
  /** Human-readable directions on how to reach a station */
  directions?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** Information about an operator */
  operator?: Maybe<Operator>;
  /** Information about a suboperator if applicable */
  suboperator?: Maybe<Operator>;
  /** Information about an owner if available */
  owner?: Maybe<Operator>;
  /** Facilities a charging station belongs to */
  facilities?: Maybe<Array<Maybe<OCPIFacility>>>;
  /** Value from the IANA time zone database representing the time zone of a location. Examples: "Europe/Oslo", "Europe/Zurich". (http://www.iana.org/time-zones) */
  time_zone?: Maybe<Scalars["String"]>;
  /** Times when an EVSEs at a location can be accessed for charging */
  opening_times?: Maybe<OCPIHours>;
  /** Indicates if the EVSEs are still charging outside the opening hours. E.g. when a parking garage closes its barriers over night, is it allowed to charge till the next morning? Default: true */
  charging_when_closed?: Maybe<Scalars["Boolean"]>;
  /** Links to images related to a location such as photos or logos */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Details of the energy supplied at a location */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** Timestamp when a location, or one of its EVSEs or Connectors were last updated (or created) */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** ID provided by a station data source */
  external_id?: Maybe<Scalars["String"]>;
  /** GeoJSON location of a charging station */
  location?: Maybe<Point>;
  /** Elevation (altitude) level */
  elevation?: Maybe<Scalars["Int"]>;
  /** Groups of EVSEs by power and type */
  chargers?: Maybe<Array<Maybe<Charger>>>;
  /** Amenties located at this location */
  amenities?: Maybe<Scalars["JSON"]>;
  /** Enriched information about the physical address of a station */
  physical_address?: Maybe<Address>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** A flag which indicates if a station has realtime information about the availability of its connectors */
  realtime?: Maybe<Scalars["Boolean"]>;
  /** A flag which indicates if a station is on a private property */
  private?: Maybe<Scalars["Boolean"]>;
  /** Connectors grouped by power */
  power?: Maybe<Scalars["JSON"]>;
  /** Charging speed for a station */
  speed?: Maybe<StationSpeedType>;
  /** Global status for a station */
  status?: Maybe<ChargerStatus>;
};

/** Statistical information for reviews of a station */
export type ReviewStats = {
  /** Average of all reviews */
  rating?: Maybe<Scalars["Float"]>;
  /** 'Total number of reviews */
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

/** EVSE data which extends OCPI EVSE */
export type EVSE = {
  /**
   * Uniquely identifies an EVSE within the CPOs platform (and suboperator platforms). For example a database ID or the actual "EVSE ID". This field can never be changed, modified or renamed. This is the 'technical' identification of the EVSE, not to be used as 'human readable' identification, use the field evse_id for that.
   * This field is named uid instead of id, because id could be confused with evse_id which is an eMI3 defined field.
   */
  uid?: Maybe<Scalars["String"]>;
  /** Compliant with the following specification for EVSE ID from "eMI3 standard version V1.0" (http://emi3group.com/documents-links/) "Part 2: business objects." Optional because: if an evse_id is to be re-used in the real world, the evse_id can be removed from an EVSE object if the status is set to REMOVED. */
  evse_id?: Maybe<Scalars["String"]>;
  /** Indicates the current status of an EVSE. */
  status?: Maybe<OCPIStatus>;
  /** Indicates a planned status update of a nEVSE. */
  status_schedule?: Maybe<Array<Maybe<OCPIStatusSchedule>>>;
  /** List of functionalities that an EVSE is capable of. */
  capabilities?: Maybe<Array<Maybe<OCPICapability>>>;
  /** List of available connectors on an EVSE. */
  connectors?: Maybe<Array<Maybe<Connector>>>;
  /** Level on which a Charge Point is located (in garage buildings) in the locally displayed numbering scheme. */
  floor_level?: Maybe<Scalars["String"]>;
  /** Coordinates of a EVSE. */
  coordinates?: Maybe<OCPIGeoLocation>;
  /** A number/string printed on the outside of an EVSE for visual identification. */
  physical_reference?: Maybe<Scalars["String"]>;
  /** Restrictions that apply to a parking spot. */
  parking_restrictions?: Maybe<Array<Maybe<OCPIParkingRestriction>>>;
  /** Links to images related to an EVSE such as photos or logos. */
  images?: Maybe<Array<Maybe<OCPIImage>>>;
  /** Timestamp when this EVSE or one of its Connectors was last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Indicates if parking is free or paid. */
  parking_cost?: Maybe<ParkingCost>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
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

/** Connector data which extends OCPI Connector */
export type Connector = {
  /** Identifier of a connector within an EVSE. Two connectors may have the same ID as long as they do not belong to the same EVSE object. */
  id?: Maybe<Scalars["String"]>;
  /** Standard of an installed connector. */
  standard?: Maybe<OCPIConnectorType>;
  /** Format (socket/cable) of an installed connector. */
  format?: Maybe<OCPIConnectorFormat>;
  /** Type of power of an installed connector.  */
  power_type?: Maybe<OCPIPowerType>;
  /** Maximum voltage of an connector (line to neutral for AC_3_PHASE), in volt [V]. For example: DC Chargers might vary the voltage during charging when battery almost full. */
  max_voltage?: Maybe<Scalars["Int"]>;
  /** Maximum amperage of a connector, in ampere [A]. */
  max_amperage?: Maybe<Scalars["Int"]>;
  /**
   * Maximum electric power that can be delivered by a connector, in watt [W]. When the maximum electric power is lower than the calculated value from voltage and amperage, this value should be set.
   * For example: A DC Charge Point which can deliver up to 920V and up to 400A can be limited to a maximum of 150kW. Depending on the car, it may supply maximum voltage or current, but not both at the same time.
   * For AC Charge Points, the amount of phases used can also have influence on the maximum power.
   */
  max_electric_power?: Maybe<Scalars["Int"]>;
  /** Maximum electric power in kW */
  power?: Maybe<Scalars["Float"]>;
  /**
   * Identifiers of the currently valid charging tariffs. Multiple tariffs are possible, but only one of each Tariff.type can be active at the same time. Tariffs with the same type are only allowed, if they are not active at the same time: start_date_time and end_date_time period not overlapping.
   * When preference-based smart charging is supported, one tariff for every possible ProfileType should be provided. This tells the user about the options they have at this Connector, and what the tariff is for every option.
   * For a "free of charge" tariff, this field should be set and point to a defined "free of charge" tariff.
   */
  tariff_ids?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** URL to an operator’s terms and conditions. */
  terms_and_conditions?: Maybe<Scalars["String"]>;
  /** Timestamp when a connector was last updated (or created). */
  last_updated?: Maybe<Scalars["DateTime"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** List of valid charging tariffs */
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
  /** List of alternative tariff information texts, in multiple languages. */
  tariff_alt_text?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** URL to a web page that contains an explanation of the tariff information in human readable form. */
  tariff_alt_url?: Maybe<Scalars["String"]>;
  /** When this field is set, a Charging Session with this tariff will cost at least this amount. This is different from a FLAT fee (Start Tariff, Transaction Fee), as a FLAT fee is a fixed amount that has to be payed for any Charging Session. A minimum price indicates that when the cost of a Charging Session is lower than this amount, the cost of the Session will be equal to this amount. (Also see note below) */
  min_price?: Maybe<OCPIPrice>;
  /** When this field is set, a Charging Session with this tariff will NOT cost more than this amount */
  max_price?: Maybe<OCPIPrice>;
  /** List of Tariff Elements. */
  elements?: Maybe<Array<Maybe<OCPITariffElement>>>;
  /** The time when this tariff becomes active, in UTC, time_zone field of the Location can be used to convert to local time. Typically used for a new tariff that is already given with the location, before it becomes active */
  start_date_time?: Maybe<Scalars["DateTime"]>;
  /** The time after which this tariff is no longer valid, in UTC, time_zone field if the Location can be used to convert to local time. Typically used when this tariff is going to be replaced with a different tariff in the near future */
  end_date_time?: Maybe<Scalars["DateTime"]>;
  /** Details about the energy supplied with this tariff. */
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
  /** True if the power is 100% from regenerative sources */
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
  /** Type of charger */
  standard?: Maybe<OCPIConnectorType>;
  /** Power of a charger */
  power?: Maybe<Scalars["Float"]>;
  /** Price of a charger */
  price?: Maybe<Scalars["String"]>;
  /** Charging speed */
  speed?: Maybe<StationSpeedType>;
  /** Statuses of all the EVSEs grouped in a charger */
  status?: Maybe<ChargerStatuses>;
  /** Total number of EVSEs grouped in a charger */
  total?: Maybe<Scalars["Int"]>;
};

/** The station speed type */
export enum StationSpeedType {
  /** Slow charging (below 43 kWh) */
  SLOW = "slow",
  /** Fast charging stations (above 43 kWh and below 150 kWh) */
  FAST = "fast",
  /** Ultra fast charging stations (above 150 kWh) */
  TURBO = "turbo"
}

/** Groupping by status of the chargers */
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
  /** User ID */
  id: Scalars["ID"];
  /** First name */
  firstName?: Maybe<Scalars["String"]>;
  /** Last name */
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
  /** Recommended route */
  route?: Maybe<RouteAlternative>;
  /** Available alternatives */
  alternatives?: Maybe<Array<Maybe<RouteAlternative>>>;
  /** EV specific data for a route request */
  ev?: Maybe<RequestEv>;
  /** User who requested the route */
  user?: Maybe<RequestUser>;
  /** Route request data */
  routeRequest?: Maybe<RequestRoute>;
  /** Route status */
  status?: Maybe<RouteStatus>;
};

export type RouteAlternative = {
  /** ID of a route alternative */
  id?: Maybe<Scalars["ID"]>;
  /** Type of alternative route */
  type?: Maybe<RouteAlternativeType>;
  /** Number of charges along a route */
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
  /** Total duration of a route, including charge time, in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** Total energy used for a route in kWh */
  consumption?: Maybe<Scalars["Float"]>;
  /** Total time required to charge for an entire route, in seconds */
  chargeTime?: Maybe<Scalars["Float"]>;
  /** Amenity ranking for an alternative */
  amenityRanking?: Maybe<Scalars["Int"]>;
  /** Range, in meters, available at the beginning of a trip */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** Total energy in a battery at the beginning of a trip, in kWh */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** Remaining range, in meters, at the end of a trip */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** Remaining range, energy in kWh, at the end of a trip. */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** Text information about a route direction */
  via?: Maybe<Scalars["String"]>;
  /** Polyline encoded route */
  polyline?: Maybe<Scalars["String"]>;
  /** Elevation values. Each elevationPlot has a hundred points, independent of the length of a route */
  elevationPlot?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Total number of meters which are going up on a route */
  elevationUp?: Maybe<Scalars["Float"]>;
  /** Total number of meters which are going down on a route */
  elevationDown?: Maybe<Scalars["Float"]>;
  /** Highest value from the elevation array */
  elevationMax?: Maybe<Scalars["Float"]>;
  /** Money and CO2 saving information */
  saving?: Maybe<RouteAlternativeSaving>;
  /** Legs of the route */
  legs?: Maybe<Array<Maybe<RouteLeg>>>;
  /** Alternative stations along a route within specified radius in meters. Only if it was provided at newRoute mutation */
  stationsAlongRoute?: Maybe<Array<Maybe<RouteStationsAlong>>>;
};

/** Types of an alternative route */
export enum RouteAlternativeType {
  /** Fastest route between origin and destination */
  FASTEST = "fastest",
  /** Best matching amenities along the route with the requested list */
  BESTMATCHING = "bestMatching",
  /** An alternative to the fastest route */
  ALTERNATIVE = "alternative"
}

export type RouteAlternativeSaving = {
  /** Total amount of CO2, in grams, which would be used with a petrol vehicle */
  co2?: Maybe<Scalars["String"]>;
  /** Money saved by a user driving this route with the electric vehicle */
  money?: Maybe<Scalars["String"]>;
  /** Currency */
  currency?: Maybe<Scalars["String"]>;
  /** Average gas price with which the calculation was made */
  averageGasPrice?: Maybe<Scalars["String"]>;
  /** Average energy price with which the calculation was made */
  averageEnergyPrice?: Maybe<Scalars["String"]>;
};

export type RouteLeg = {
  /** ID of a leg */
  id?: Maybe<Scalars["ID"]>;
  /** Distance from the start to the end of a leg, in meters */
  distance?: Maybe<Scalars["Int"]>;
  /** Total drive time from the start to the end of a leg, in seconds */
  duration?: Maybe<Scalars["Int"]>;
  /** Total energy used in a leg in kWh */
  consumption?: Maybe<Scalars["Float"]>;
  /** Range, in meters, available at the beginning of a leg */
  rangeStart?: Maybe<Scalars["Int"]>;
  /** Total energy in a battery at the beginning of a leg, in kWh */
  rangeStartKwh?: Maybe<Scalars["Float"]>;
  /** Range, in meters, available at the end of a leg */
  rangeEnd?: Maybe<Scalars["Int"]>;
  /** Total energy left in a battery at the end of a leg, in kWh */
  rangeEndKwh?: Maybe<Scalars["Float"]>;
  /** Origin point location */
  origin?: Maybe<FeaturePoint>;
  /** Destination point location */
  destination?: Maybe<FeaturePoint>;
  /** Type of a leg */
  type?: Maybe<LegType>;
  /** Name of a destination. This is the station name in case a user should charge or the name of the location in case this was provided */
  name?: Maybe<Scalars["String"]>;
  /** ID of a station */
  stationId?: Maybe<Scalars["String"]>;
  /** ID of the operator */
  operatorId?: Maybe<Scalars["String"]>;
  /** Total time required to charge a battery until 80%, in seconds */
  chargeTime?: Maybe<Scalars["Int"]>;
  /** Recommended EVSE where to charge */
  evse?: Maybe<EVSE>;
  /** Recommended connector for charging */
  connector?: Maybe<Connector>;
  /** Number of available plugs at a station */
  plugsAvailable?: Maybe<Scalars["Int"]>;
  /** Number of occupied plugs at a charge station */
  plugsOccupied?: Maybe<Scalars["Int"]>;
  /** Number of unknown plugs at a charge station */
  plugsUnknown?: Maybe<Scalars["Int"]>;
  /** Number of out of order plugs at a charge station */
  plugsOutOfOrder?: Maybe<Scalars["Int"]>;
  /** Total number of plugs at a charge station */
  plugsCount?: Maybe<Scalars["Int"]>;
};

/** A GeoJSON Feature<Point> */
export type FeaturePoint = {
  /** Feature ID */
  id?: Maybe<Scalars["String"]>;
  /** Feature type */
  type: FeatureType;
  /** Geometry of the feature */
  geometry: Point;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
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
  /** This leg ends at the destination which is a charging station, and is the last leg of the route */
  STATIONFINAL = "stationFinal"
}

export type RouteStationsAlong = {
  /** The ID of station */
  id?: Maybe<Scalars["String"]>;
  /** Geojson location of a station */
  location?: Maybe<Point>;
  /** Speed of a station. A station along a route can be either fast or turbo */
  speed?: Maybe<StationSpeedType>;
  /** Status of a station */
  status?: Maybe<ChargerStatus>;
  /** The station uses a preferred operator */
  preferredOperator?: Maybe<Scalars["Boolean"]>;
  /** Distance in meters between station and route path */
  distance?: Maybe<Scalars["Int"]>;
};

/** EV specific data for a route request */
export type RequestEv = {
  /** Internal ID of a Car */
  id?: Maybe<Scalars["ID"]>;
  /** EV battery specific data */
  battery?: Maybe<RequestEvBattery>;
  /** Supported plugs for an EV */
  plugs?: Maybe<Array<Maybe<RequestEvPlug>>>;
  /** Supported adapters of plugs for an EV */
  adapters?: Maybe<Array<Maybe<RequestEvPlug>>>;
  /** Minimum desired power of chargers */
  minPower?: Maybe<Scalars["Int"]>;
  /** Climate is on. The default is true */
  climate?: Maybe<Scalars["Boolean"]>;
  /** The number of passengers on board */
  numberOfPassengers?: Maybe<Scalars["Int"]>;
  /** Consumption specific to an EV or inputed by a request */
  consumption?: Maybe<RequestEvConsumption>;
};

export type RequestEvBattery = {
  /** The usable capacity of the battery used to compute the route. If this in not filled in,  value as the car batteryUsableKwh. */
  capacity?: Maybe<RequestEvBatteryValue>;
  /** Usable capacity of a battery, in kWh. This value is computed from the provided capacity value. */
  capacityKwh?: Maybe<Scalars["Float"]>;
  /** Current amount of energy in a battery. If this is not filled in, we assume the battery is full and it will be equal to the batteryUsableKwh. */
  stateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** Current amount of energy in a battery, in kWh. This value is computed from the provided state of charge. */
  stateOfChargeKwh?: Maybe<Scalars["Float"]>;
  /** Desired final amount of energy in a battery. If this is not filled in, it will be set to 20% of the car batteryUsableKwh. */
  finalStateOfCharge?: Maybe<RequestEvBatteryValue>;
  /** Desired final amount of energy in a battery, in kWh. This value is computed from the provided final state of charge. */
  finalStateOfChargeKwh?: Maybe<Scalars["Float"]>;
};

export type RequestEvBatteryValue = {
  /** Value of the desired final amount of energy in a battery */
  value: Scalars["Float"];
  /** Type of the desired final amount of energy in a battery */
  type: BatteryInputType;
};

/** The type of the batter value */
export enum BatteryInputType {
  KWH = "kwh",
  KM = "km",
  MILES = "miles"
}

export type RequestEvPlug = {
  /** Type of the plug */
  standard?: Maybe<OCPIConnectorType>;
  /** Maximum charging speed for a plug */
  chargingPower?: Maybe<Scalars["Float"]>;
};

export type RequestEvConsumption = {
  /** Consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumption>;
  /** The consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarConsumption>;
};

export type RequestUser = {
  /** ID of the user */
  id?: Maybe<Scalars["ID"]>;
};

export type RequestRoute = {
  /** Desired amenities near the stations, within a 1 km radius */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Requested operators */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Preferred operators are required. In case there are no preferred operators the route cannot be calculated */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /** Encourage the route to use preferred operators. In case there are no preferred operators the route can still be calculated */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /** Season */
  season?: Maybe<RouteSeason>;
  /** Percentage for the minimum limit of the battery capacity before a recharge. The value should be between 0 and 60, with a default of 10% */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** Origin of a route */
  origin?: Maybe<FeaturePoint>;
  /** Destination of a route */
  destination?: Maybe<FeaturePoint>;
  /** Locations where a route will stop */
  via?: Maybe<Array<Maybe<FeaturePoint>>>;
  /** Radius in meters for alternative stations along a route (min 500 - max 5000) */
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

/** The status of a route. The status can be pending, processing, done, not_found or error */
export enum RouteStatus {
  /** Route is queued and pending processing. Temporary status */
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
  /** Point type */
  type: PointType;
  /** Coordinates [longitude, latitude] */
  coordinates: Array<Scalars["Float"]>;
};

export type RoutePath = {
  /** GeoJSON location of a route path segment */
  location?: Maybe<Point>;
  /** Elevation (altitude) in meters */
  elevation?: Maybe<Scalars["Int"]>;
  /** Average speed, in km/h, for this route path segment */
  averageSpeed?: Maybe<Scalars["Float"]>;
  /** Recommended speed, in km/h for this route path segment to optimise the consumption */
  recommendedSpeed?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh, of a route path segment */
  consumption?: Maybe<Scalars["Float"]>;
  /** Consumption, in kWh per km, of a route path segment */
  consumptionPerKm?: Maybe<Scalars["Float"]>;
  /** Distance, in meters, of a route path segment */
  distance?: Maybe<Scalars["Float"]>;
  /** Duration, in seconds, of a route path segment */
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
  /** ID of the station */
  id?: Maybe<Scalars["ID"]>;
  /** External ID of the station provided by the station data source */
  external_id?: Maybe<Scalars["String"]>;
  /** Exact name */
  name?: Maybe<Scalars["String"]>;
};

/** Filter which can be applied to retrieve the station around list action */
export type StationAroundQuery = {
  /** The GeoJSON Point of the center of the around me circle */
  location: PointInput;
  /** Distance, in meters, to search around */
  distance: Scalars["Int"];
  /** Power in kWh */
  power?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  /** Amentities available near a station. Values: restaurant, bathroom, supermarket, playground, coffee, shopping, museum, hotel, park */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type Mutation = {
  /** Add a new review */
  addReview: Review;
  /** Create a new route from the route input and its ID */
  newRoute?: Maybe<Scalars["ID"]>;
};

export type MutationaddReviewArgs = {
  review: ReviewAdd;
};

export type MutationnewRouteArgs = {
  input?: Maybe<RequestInput>;
};

/** Form input to add a new review */
export type ReviewAdd = {
  /** Station ID for which a review is provided */
  stationId: Scalars["String"];
  /** Rating of a review */
  rating: Scalars["Int"];
  /** Review message */
  message?: Maybe<Scalars["String"]>;
  /** Locale of a message */
  locale?: Maybe<Scalars["String"]>;
  /** ID of the Car which was provided/selected by a user */
  ev?: Maybe<Scalars["String"]>;
  /** Plug type which was provided/selected by a user */
  plugType?: Maybe<OCPIConnectorType>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for a station review */
  tags?: Maybe<ReviewTagsInput>;
};

/** Boolean tags for a station review */
export type ReviewTagsInput = {
  /** Flag which indicates if a station was working when the review was added */
  working?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if a user recommended a station when the review was added */
  recommended?: Maybe<Scalars["Boolean"]>;
};

export type RequestInput = {
  /** EV specific data for a route request */
  ev: RequestEvInput;
  /** Route request data */
  routeRequest: RequestRouteInput;
};

export type RequestEvInput = {
  /** Iternal ID of a Car */
  id: Scalars["ID"];
  /** The EV battery specific data */
  battery?: Maybe<RequestEvBatteryInput>;
  /** Supported plugs of an EV */
  plugs?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
  /** Supported adapters of plugs of an EV */
  adapters?: Maybe<Array<Maybe<RequestEvPlugInput>>>;
  /** Minimum desired power of chargers */
  minPower?: Maybe<Scalars["Int"]>;
  /** Flag which indicates if the climate is on. The default is true */
  climate?: Maybe<Scalars["Boolean"]>;
  /** Number of passengers on board */
  numberOfPassengers?: Maybe<Scalars["Int"]>;
  /** Consumption specific to the EV or inputed by the request */
  consumption?: Maybe<RequestEvConsumptionInput>;
  /** Deprecated */
  auxConsumption?: Maybe<Scalars["Float"]>;
  /** Deprecated */
  bmsConsumption?: Maybe<Scalars["Float"]>;
};

export type RequestEvBatteryInput = {
  /** Usable capacity of a battery used to compute a route. If this in not filled in, we assume it is the same value as the car batteryUsableKwh. */
  capacity?: Maybe<RequestEvBatteryInputValue>;
  /** Current amount of energy in a battery. If this is not filled in, we assume the battery is full and we fill it in with car batteryUsableKwh. */
  stateOfCharge?: Maybe<RequestEvBatteryInputValue>;
  /** Desired final amount of energy in a battery. If this is not filled in, we assume it is 20% of the car batteryUsableKwh. */
  finalStateOfCharge?: Maybe<RequestEvBatteryInputValue>;
};

export type RequestEvBatteryInputValue = {
  /** Value of a desired final amount of energy in a battery */
  value: Scalars["Float"];
  /** Type of a desired final amount of energy in a battery */
  type: BatteryInputType;
};

export type RequestEvPlugInput = {
  /** Type of a plug */
  standard: OCPIConnectorType;
  /** Maximum charging speed for this plug */
  chargingPower: Scalars["Float"];
};

export type RequestEvConsumptionInput = {
  /** Consumption, in kWh, of the auxiliaries */
  aux?: Maybe<CarConsumptionInput>;
  /** Cnsumption, in kWh, of the battery management system */
  bms?: Maybe<CarConsumptionInput>;
  /** Consumption, in kWh, of the car in idle mode */
  idle?: Maybe<CarConsumptionInput>;
};

/** The consumption of the car */
export type CarConsumptionInput = {
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
};

export type RequestRouteInput = {
  /** A list of desired amenities near the stations, with a 1 km radius */
  amenities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A list of requested operators */
  operatorIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Flag which indicates if the operators are required */
  operatorRequired?: Maybe<Scalars["Boolean"]>;
  /** Flag which indicates if the preferred operators should be loaded */
  operatorPrefer?: Maybe<Scalars["Boolean"]>;
  /** Optional flag to specify the season */
  season?: Maybe<RouteSeason>;
  /** Percentage for a minimum limit of a battery capacity before a recharge. The value should be between 0 and 60, with a default of 10% */
  safeRiskMargin?: Maybe<Scalars["Int"]>;
  /** Origin of a route */
  origin: FeaturePointInput;
  /** Destination of a route */
  destination: FeaturePointInput;
  /** An optional list of locations where we should stop */
  via?: Maybe<Array<Maybe<FeaturePointInput>>>;
  /** Alternative stations along a route within a specified radius in meters (min 500, max 5000) */
  stationsAlongRouteRadius?: Maybe<Scalars["Int"]>;
};

/** A GeoJSON Feature<Point> input */
export type FeaturePointInput = {
  /** The feature ID */
  id?: Maybe<Scalars["String"]>;
  /** Feature type */
  type: FeatureType;
  /** Geometry of the feature */
  geometry: PointInput;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
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

/** Form input for edit an existing review */
export type ReviewEdit = {
  /** Rating of a review */
  rating: Scalars["Int"];
  /** Review message */
  message?: Maybe<Scalars["String"]>;
  /** Locale of a message */
  locale?: Maybe<Scalars["String"]>;
  /** Optional object where you can store custom data you need in your application. This extends the current functionalities we offer */
  properties?: Maybe<Scalars["JSON"]>;
  /** Boolean tags for a station review */
  tags?: Maybe<ReviewTagsInput>;
};
