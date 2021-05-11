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
  /** Car premium data provides even more information about your car: tire pressure, prices, drivetrain data, and more. Please contact us for access to premium data. */
  carPremium?: Maybe<CarPremium>;
  /** Get a full list of cars */
  carList?: Maybe<Array<Maybe<CarList>>>;
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

/** Output of a car query */
export type Car = {
  /** Cars unique ID */
  id?: Maybe<Scalars["ID"]>;
  /** Naming of a car */
  naming?: Maybe<CarNaming>;
  /** Available connectors for a car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** List of adapters of connectors available for a car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Battery of a car */
  battery?: Maybe<CarBattery>;
  /** Body of a car */
  body?: Maybe<CarBody>;
  /** Availability of a car */
  availability?: Maybe<CarAvailability>;
  /** Performance of a car */
  performance?: Maybe<CarPerformance>;
  /** Range of a car */
  range?: Maybe<CarRange>;
  /** Media of a car */
  media?: Maybe<CarMedia>;
  /** Routing of a car */
  routing?: Maybe<CarRouting>;
  /**
   * ID provided by a car data source as the row ID
   * @deprecated Will be removed in the future
   */
  externalId?: Maybe<Scalars["String"]>;
  /**
   * Car manufacturer
   * @deprecated In favor of naming.make
   */
  make?: Maybe<Scalars["String"]>;
  /**
   * Car model
   * @deprecated In favor of naming.model
   */
  carModel?: Maybe<Scalars["String"]>;
  /**
   * Car edition
   * @deprecated In favor of naming.version
   */
  edition?: Maybe<Scalars["String"]>;
  /**
   * Car model edition. Added by Chargetrip as an alternative for when a car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years
   * @deprecated In favor of naming.chargetrip_version
   */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /**
   * Car version
   * @deprecated In favor of naming.edition
   */
  version?: Maybe<Scalars["String"]>;
  /**
   * Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data
   * @deprecated In favor of range.chargetrip_range
   */
  chargetripRange?: Maybe<ChargetripRange>;
  /**
   * Cars that support fast charging have a minimum charging speed of 43 Kwh. Cars without support for fast charging used in a newRoute mutation will return an error
   * @deprecated In favor of routing.fast_charging_support
   */
  fastChargingSupport?: Maybe<Scalars["Boolean"]>;
  /**
   * Current production mode of a car
   * @deprecated In favor of availability.status
   */
  mode?: Maybe<CarMode>;
  /**
   * Number of seats
   * @deprecated In favor of body.seats
   */
  seats?: Maybe<Scalars["Int"]>;
  /**
   * Weight in kg
   * @deprecated In favor of body.weight
   */
  weight?: Maybe<Scalars["Float"]>;
  /**
   * Height in mm
   * @deprecated In favor of body.height
   */
  height?: Maybe<Scalars["Int"]>;
  /**
   * Width in mm
   * @deprecated In favor of body.width
   */
  width?: Maybe<Scalars["Int"]>;
  /**
   * Usable battery capacity in kWh
   * @deprecated In favor of battery.usable_kwh
   */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /**
   * Full battery capacity in kWh
   * @deprecated In favor of battery.full_kwh
   */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /**
   * Battery efficiency in the city, highway and combined depending on weather conditions
   * @deprecated In favor of efficiency
   */
  batteryEfficiency?: Maybe<CarBatteryEfficiency>;
  /**
   * Acceleration time from 0 to 100 km/h
   * @deprecated In favor of performance.acceleration
   */
  acceleration?: Maybe<Scalars["Float"]>;
  /**
   * Maximum car speed in km/h
   * @deprecated In favor of performance.top_speed
   */
  topSpeed?: Maybe<Scalars["Float"]>;
  /**
   * Power of a car in Kw
   * @deprecated In favor of drivetrain.power
   */
  power?: Maybe<Scalars["Float"]>;
  /**
   * Engine torque
   * @deprecated In favor of drivetrain.torque
   */
  torque?: Maybe<Scalars["Float"]>;
  /**
   * Extra consumption model
   * @deprecated In favor of routing.consumption
   */
  consumption?: Maybe<CarExtraConsumption>;
  /**
   * Amount of petrol a similar petrol car would consume per 100 km
   * @deprecated In favor of routing.petrol_consumption
   */
  petrolConsumption?: Maybe<Scalars["Float"]>;
  /**
   * A list of offset data for different charging speeds
   * @deprecated You will receive null values
   */
  chargingOffset?: Maybe<Scalars["JSON"]>;
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
};

export type CarNaming = {
  /** Car manufacturer name */
  make?: Maybe<Scalars["String"]>;
  /** Car model name */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car */
  edition?: Maybe<Scalars["String"]>;
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years */
  chargetrip_version?: Maybe<Scalars["String"]>;
};

/** Car plug model */
export type CarPlug = {
  /** Plug type, known as connector standard in OCPI */
  standard?: Maybe<OCPIConnectorType>;
  /** The maximum power a plug accepts in kW */
  power?: Maybe<Scalars["Float"]>;
  /** Time it takes to charge from 10 to 80% with a fast charger, shown in minutes */
  time?: Maybe<Scalars["Int"]>;
  /** Charging speed in km/h */
  speed?: Maybe<Scalars["Int"]>;
};

/** The socket or plug standard of the charging point. */
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
  TESLA_S = "TESLA_S"
}

export type CarBattery = {
  /** Usable battery capacity in kWh */
  usable_kwh?: Maybe<Scalars["Float"]>;
  /** Full battery capacity in kWh */
  full_kwh?: Maybe<Scalars["Float"]>;
};

export type CarBody = {
  /** Width with folded mirrors in mm */
  width?: Maybe<Scalars["Int"]>;
  /** Height (average height for adjustable suspensions) in mm */
  height?: Maybe<Scalars["Int"]>;
  /** Weight Unladen EU) in kg */
  weight?: Maybe<Scalars["Int"]>;
  /** Number of seats */
  seats?: Maybe<Scalars["Int"]>;
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

export type CarPerformance = {
  /** Acceleration 0-100 km/h in seconds */
  acceleration?: Maybe<Scalars["Float"]>;
  /** Top speed of car in km/h */
  top_speed?: Maybe<Scalars["Int"]>;
};

export type CarRange = {
  /** Index range in EV Database RealRange model in km */
  real?: Maybe<Scalars["Int"]>;
  /** Indicates if real is estimated */
  real_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<CarRangeValue>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<CarRangeValue>;
  /** Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data */
  chargetrip_range?: Maybe<ChargetripRange>;
  /** @deprecated You will receive null values */
  wltp?: Maybe<Scalars["Float"]>;
};


export type CarRangeValue = {
  /** Estimated value on the highway or express roads */
  highway?: Maybe<Scalars["Int"]>;
  /** Estimated value on the cities road */
  city?: Maybe<Scalars["Int"]>;
  /** Estimated combined value */
  combined?: Maybe<Scalars["Int"]>;
};

/** Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data */
export type ChargetripRange = {
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
};

export type CarMedia = {
  /** URL to detail page on EV database */
  evdb_details_url?: Maybe<Scalars["String"]>;
  /** Latest image */
  image?: Maybe<CarImage>;
  /** Latest maker logo */
  brand?: Maybe<CarImage>;
  /** All images */
  image_list?: Maybe<Array<Maybe<CarImage>>>;
  /** Latest video */
  video?: Maybe<CarVideo>;
  /** All videos */
  video_list?: Maybe<Array<Maybe<CarVideo>>>;
  /**
   * URL to detail page on EV database
   * @deprecated Will be removed in the future. Please use evdb_details_url
   */
  evdb_detail_url?: Maybe<Scalars["String"]>;
};

export type CarImage = {
  /** Image id */
  id?: Maybe<Scalars["ID"]>;
  /** Image type */
  type?: Maybe<CarImageType>;
  /** Full path URL of a large image */
  url?: Maybe<Scalars["String"]>;
  /** Height of a large image in pixels */
  height?: Maybe<Scalars["Int"]>;
  /** Width of a large image in pixels */
  width?: Maybe<Scalars["Int"]>;
  /** Full path URL of a thumbnail image */
  thumbnail_url?: Maybe<Scalars["String"]>;
  /** Height of a thumbnail image in pixels */
  thumbnail_height?: Maybe<Scalars["Int"]>;
  /** Width of a thumbnail image in pixels */
  thumbnail_width?: Maybe<Scalars["Int"]>;
};

/** Available types of images which can be found for a car. Each type has specific image sizes */
export enum CarImageType {
  /** Images provided by a Car Datasource */
  PROVIDER = "provider",
  /** Full-sized image at 1536x864 px */
  IMAGE = "image",
  /** Thumbnail of a full-sized image at 131x72 px */
  IMAGE_THUMBNAIL = "image_thumbnail",
  /** Full-sized brand (maker) logo at 768x432 px */
  BRAND = "brand",
  /** Thumbnail of a full-sized brand logo at 56x24 px */
  BRAND_THUMBNAIL = "brand_thumbnail"
}

export type CarVideo = {
  /** Video id */
  id?: Maybe<Scalars["ID"]>;
  /** Full path URL of a video */
  url?: Maybe<Scalars["String"]>;
};

export type CarRouting = {
  /**
   * EVs that support fast charging have a minimum charging speed of 43 Kwh.
   * EVs without support for fast charging used in a newRoute mutation will return an error.
   */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
};

/** Mode (state) of the current production */
export enum CarMode {
  /** Old car that is no longer manufactured */
  INDEX_ONLY = "index_only",
  /** Car is in production and has been released */
  PRODUCTION = "production",
  /** Future releases of a car, a concept of the car, specs may change over time */
  CONCEPT = "concept"
}

/** Deprecated */
export type CarBatteryEfficiency = {
  /** Average efficiency measured in kWh/100 km */
  average?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating, measured in kWh/100 km */
  worst?: Maybe<CarEstimationData>;
  /** Best conditions are based on 23°C and no use of A/C, measured in kWh/100 km */
  best?: Maybe<CarEstimationData>;
};

/** Deprecated */
export type CarEstimationData = {
  /** Estimated battery efficiency on a highway or express roads, in km */
  highway?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on city roads, in km */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated battery efficiency on highway and city roads combined, in km */
  combined?: Maybe<Scalars["Float"]>;
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

/** Deprecated */
export type CarConsumption = {
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<Scalars["Float"]>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<Scalars["Float"]>;
};

/** Deprecated */
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

/** The output element of the carPremium query */
export type CarPremium = {
  /** Unique ID of a car */
  id?: Maybe<Scalars["ID"]>;
  /** Internal ID of the successor car trim */
  succesor_id?: Maybe<Scalars["String"]>;
  /** Naming of a car */
  naming?: Maybe<CarPremiumNaming>;
  /** Connectors available for a car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** Charge details */
  charge?: Maybe<CarPremiumCharge>;
  /** Fast charge details */
  fast_charge?: Maybe<CarPremiumFastCharge>;
  /** Adapters of connectors available for a car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Battery of a car */
  battery?: Maybe<CarPremiumBattery>;
  /** Body of a car */
  body?: Maybe<CarPremiumBody>;
  /** Availability of a car */
  availability?: Maybe<CarPremiumAvailability>;
  /** Pricing of a car */
  price?: Maybe<CarPremiumPrice>;
  /** Drivetrain of a car */
  drivetrain?: Maybe<CarPremiumDrivetrain>;
  /** Performance of a car */
  performance?: Maybe<CarPremiumPerformance>;
  /** Range of a car */
  range?: Maybe<CarPremiumRange>;
  /** Efficiency of a car */
  efficiency?: Maybe<CarPremiumEfficiency>;
  /** Safety of a car */
  safety?: Maybe<CarPremiumSafety>;
  /** Media of a car */
  media?: Maybe<CarPremiumMedia>;
  /** Routing of a car */
  routing?: Maybe<CarPremiumRouting>;
};

export type CarPremiumNaming = {
  /** Car manufacturer name */
  make?: Maybe<Scalars["String"]>;
  /** Car model name */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car */
  edition?: Maybe<Scalars["String"]>;
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide a version name, or uses the same version name across all trims or consecutive years */
  chargetrip_version?: Maybe<Scalars["String"]>;
};

export type CarPremiumCharge = {
  /** Location of charge port */
  plug?: Maybe<CarPremiumChargePlug>;
  /** Location of second charge port */
  second_plug?: Maybe<CarPremiumChargeSecondPlug>;
  /** The car standard charge */
  standard?: Maybe<CarPremiumChargeStandardOBC>;
  /** The car alternative charge */
  alternative?: Maybe<CarPremiumChargeAlternativeOBC>;
  /** The car option charge */
  option?: Maybe<CarPremiumChargeOptionOBC>;
};

export type CarPremiumChargePlug = {
  /** Type of charge port on vehicle */
  value?: Maybe<OCPIConnectorType>;
  /** Indicates if value is an estimate */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Location of charge port */
  location?: Maybe<Scalars["String"]>;
};

export type CarPremiumChargeSecondPlug = {
  /** Location of charge port */
  location?: Maybe<Scalars["String"]>;
  /** Indicates if second charge port is optional */
  is_optional?: Maybe<Scalars["Boolean"]>;
};

export type CarPremiumChargeStandardOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC) */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC) */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC) */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Indicates if Charge_Standard fields are estimated */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Charging details for the standard OBC at several charging points */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

export type CarPremiumChargeOBCTable = {
  /** Voltage between phase and neutral for this EVSE (phase voltage) */
  evse_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Current per phase for this EVSE (phase current) */
  evse_phase_amperage?: Maybe<Scalars["Int"]>;
  /** Number of phases for this EVSE */
  evse_phases?: Maybe<Scalars["Int"]>;
  /** Voltage between phase and neutral used by standard OBC (phase voltage) */
  charge_phase_voltage?: Maybe<Scalars["Int"]>;
  /** Current per phase used by standard OBC (phase current) */
  charge_phase_amperage?: Maybe<Scalars["Float"]>;
  /** Number of phases used by standard OBC */
  charge_phases?: Maybe<Scalars["Int"]>;
  /** Power used by standard OBC (before OBC losses) */
  charge_power?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC with this EVSE) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC with this EVSE) */
  charge_speed?: Maybe<Scalars["Int"]>;
};

export type CarPremiumChargeAlternativeOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC) */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC) */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC) */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Charging details for the standard OBC at several charging points */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

export type CarPremiumChargeOptionOBC = {
  /** Maximum power OBC can accept to charge a battery (standard OBC) */
  power?: Maybe<Scalars["Float"]>;
  /** Number of phases the OBC accepts to achieve maximum power (standard OBC) */
  phases?: Maybe<Scalars["Int"]>;
  /** Maximum current the OBC accepts per phase to achieve maximum power (standard OBC) */
  phase_amperage?: Maybe<Scalars["Float"]>;
  /** Minutes needed to charge from 0% to 100% (standard OBC) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed when charging at maximum power (standard OBC) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Charging details for the standard OBC at several charging points */
  table?: Maybe<Array<Maybe<CarPremiumChargeOBCTable>>>;
};

export type CarPremiumFastCharge = {
  /** Location of charge port */
  plug?: Maybe<CarPremiumChargePlug>;
  /** Power during fast charging from 10% to 80% SoC (optimal conditions, fastest charger) */
  power?: Maybe<CarPremiumChargePower>;
  /** Minutes needed to charge from 10% to 80%, with average charging power (optimal conditions, fastest charger) */
  charge_time?: Maybe<Scalars["Float"]>;
  /** Charging speed during fast charging from 10% to 80% (optimal conditions, fastest charger) */
  charge_speed?: Maybe<Scalars["Float"]>;
  /** Indicates if fast charge is optional in some markets/regions */
  is_optional?: Maybe<Scalars["Boolean"]>;
  /** Indicates what fields are estimated */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Charging details for fast charging */
  table?: Maybe<Array<Maybe<CarPremiumFastChargeTable>>>;
};

export type CarPremiumChargePower = {
  /** Maximum value */
  max?: Maybe<Scalars["Float"]>;
  /** Average value */
  average?: Maybe<Scalars["Float"]>;
};

export type CarPremiumFastChargeTable = {
  /** Charging details for fast charging (format: ChargerPlug-ChargerPower-AC/DC) */
  format?: Maybe<Scalars["String"]>;
  /** Fast charge power */
  power?: Maybe<CarPremiumChargePower>;
  /** Minutes needed to charge from 10% to 80% (optimal conditions) */
  charge_time?: Maybe<Scalars["Int"]>;
  /** Charging speed during fast charging from 10% to 80% (optimal conditions) */
  charge_speed?: Maybe<Scalars["Int"]>;
  /** Indicates if maximum power during fast charging is limited by the vehicle */
  is_limited?: Maybe<Scalars["Boolean"]>;
  /** Indicates if average power during fast charging is limited by the vehicle */
  average_is_limited?: Maybe<Scalars["Boolean"]>;
};

export type CarPremiumBattery = {
  /** Usable battery capacity in kWh */
  usable_kwh?: Maybe<Scalars["Float"]>;
  /** Full battery capacity in kWh */
  full_kwh?: Maybe<Scalars["Float"]>;
  /** Indicates which battery fields are estimated */
  estimated_fields?: Maybe<CarBatteryFieldEstimations>;
  /** Battery thermal management system (active/passive, air/liquid) */
  thermal_management_system?: Maybe<Scalars["String"]>;
  /** Duration of battery warranty */
  warranty_period?: Maybe<Scalars["Float"]>;
  /** Mileage of battery warranty */
  warranty_mileage?: Maybe<Scalars["Float"]>;
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

export type CarPremiumBody = {
  /** Length in mm */
  length?: Maybe<Scalars["Int"]>;
  /** Width with folded mirrors in mm */
  width?: Maybe<Scalars["Int"]>;
  /** Width of vehicle in mm, including mirrors */
  full_width?: Maybe<Scalars["Int"]>;
  /** Height (average height for adjustable suspensions) in mm */
  height?: Maybe<Scalars["Int"]>;
  /** Indicates if length/width/height fields are estimations */
  size_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Wheelbase in mm */
  wheelbase?: Maybe<Scalars["Int"]>;
  /** Indicates if wheelbase field is estimated */
  wheelbase_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Weight (unladen EU) in kg */
  weight?: Maybe<Scalars["Int"]>;
  /** Indicates if weight field is estimated */
  weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum payload allowed for vehicle in kg */
  weight_max_payload?: Maybe<Scalars["Int"]>;
  /** Gross Vehicle Weight (GVWR) - (max allowed vehicle weight with payload) in kg */
  max_gross_vehicle_weight?: Maybe<Scalars["Int"]>;
  /** Standard luggage capacity in l */
  boot_capacity?: Maybe<Scalars["Int"]>;
  /** Storage capacity of front trunk/under the hood (frunk) */
  boot_front_capacity?: Maybe<Scalars["Int"]>;
  /** Maximum luggage capacity in l */
  boot_capacity_max?: Maybe<Scalars["Int"]>;
  /** Indicates if a tow hitch/towbar can be fitted according to vehicle homologation */
  tow_hitch_compatible?: Maybe<Scalars["Boolean"]>;
  /** Maximum unbraked towing weight in kg */
  tow_weight_unbraked?: Maybe<Scalars["Int"]>;
  /** Maximum braked towing weight in kg */
  tow_weight_braked?: Maybe<Scalars["Int"]>;
  /** Indicates if tow weight fields are estimations */
  tow_weight_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum vertical load / noseweight on tow hitch according to vehicle homologation */
  tow_weight_vertical_load?: Maybe<Scalars["Int"]>;
  /** Maximum load on roof of car in kg */
  roof_load_max?: Maybe<Scalars["Int"]>;
  /** Body type, listed in local naming convention where applicable */
  body_type?: Maybe<Scalars["String"]>;
  /** Segment, listed in local naming convention where applicable */
  segment?: Maybe<Scalars["String"]>;
  /** Number of seats */
  seats?: Maybe<Scalars["Int"]>;
  /** Indicates whether a car has roof rails as a standard */
  has_roofrails?: Maybe<Scalars["Boolean"]>;
  /** Turning circle of vehicle kerb-to-kerb */
  turning_circle?: Maybe<Scalars["Float"]>;
  /** Name of vehicle platform used for vehicle (often abbreviated to indicate group platforms) */
  vehicle_platform?: Maybe<Scalars["String"]>;
  /** Indicates if the vehicle platform used for vehicle is a dedicated battery electric vehicle platform */
  vehicle_platform_is_dedicated?: Maybe<Scalars["Boolean"]>;
};

export type CarPremiumAvailability = {
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
  /** Date of introduction, mm-yyyy */
  date_from?: Maybe<Scalars["String"]>;
  /** Indicates if date from field is estimated */
  date_from_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Date last available, mm-yyyy */
  date_to?: Maybe<Scalars["String"]>;
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
  /** Starting price for local market */
  value?: Maybe<Scalars["Int"]>;
  /** Currency name for local market */
  currency?: Maybe<Scalars["String"]>;
  /** Indicates if price value is based on estimates */
  is_estimated?: Maybe<Scalars["Boolean"]>;
};

export type CarPremiumPriceValueWithGrant = {
  /** Starting price for local market */
  value?: Maybe<Scalars["Int"]>;
  /** Currency name for local market */
  currency?: Maybe<Scalars["String"]>;
  /** Indicates if price value is based on estimates */
  is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Grant is applied to value */
  grant_applied?: Maybe<Scalars["Int"]>;
};

export type CarPremiumDrivetrain = {
  /** Type of drivetrain */
  type?: Maybe<CarDrivetrain>;
  /** Fuel type */
  fuel?: Maybe<CarFuel>;
  /** Propulsion type */
  propulsion?: Maybe<CarPropulsion>;
  /** Indicates if propulsion field is estimated */
  propulsion_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum (combined) power output in kw */
  power?: Maybe<Scalars["Int"]>;
  /** Indicates if power field is estimated */
  power_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Maximum (combined) power output in horsepower (PS) */
  power_hp?: Maybe<Scalars["Int"]>;
  /** Maximum (combined) torque output in newton meter */
  torque?: Maybe<Scalars["Int"]>;
  /** Indicates if torque field is estimated */
  torque_is_estimated?: Maybe<Scalars["Boolean"]>;
};

/** Drivetrain */
export enum CarDrivetrain {
  /** Battery Electric Car */
  BEV = "BEV",
  /** Extended Range Electric Car */
  EREV = "EREV"
}

/** Fuel type */
export enum CarFuel {
  /** Electricity only. Full electric car */
  E = "E"
}

/** Propulsion */
export enum CarPropulsion {
  /** All-wheel drive car */
  AWD = "AWD",
  /** Front-wheel drive car */
  FRONT = "Front",
  /** Rear-wheel drive car */
  REAR = "Rear"
}

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

export type CarPremiumRange = {
  /** Rated range in WLTP combined cycle (NULL if not WLTP rated) in km */
  wltp?: Maybe<Scalars["Int"]>;
  /** Indicates if WLTP range is estimated (NULL if not WLTP rated) */
  wltp_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Rated range in WLTP (TEH/least efficient trim) combined cycle (NULL if not WLTP rated) */
  wltp_teh?: Maybe<Scalars["Int"]>;
  /** Rated range in NEDC combined cycle (NULL if not NEDC rated) in km */
  nedc?: Maybe<Scalars["Int"]>;
  /** Indicates if NEDC range is estimated (NULL if not NEDC rated) */
  nedc_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Index range in EV Database RealRange model in km */
  real?: Maybe<Scalars["Int"]>;
  /** Indicates if real is estimated */
  real_is_estimated?: Maybe<Scalars["Boolean"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<CarPremiumRangeValue>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<CarPremiumRangeValue>;
  /** Is an index value of what we consider to be the real-world range. (Comparable to Range_Real from EV Database.) It is essentially a normalized range to display on the front-end. */
  chargetrip_range?: Maybe<ChargetripRange>;
};

export type CarPremiumRangeValue = {
  /** Estimated value on highway or express roads */
  highway?: Maybe<Scalars["Int"]>;
  /** Estimated value on city roads */
  city?: Maybe<Scalars["Int"]>;
  /** Estimated combined value */
  combined?: Maybe<Scalars["Int"]>;
};

export type CarPremiumEfficiency = {
  /** Rated efficiency in WLTP combined cycle */
  wltp?: Maybe<CarPremiumEfficiencyWLTP>;
  /** Rated efficiency in WLTP combined cycle (TEH / least efficient trim) */
  wltp_teh?: Maybe<CarPremiumEfficiencyWLTPTEH>;
  /** Rated efficiency in NEDC combined cycle */
  nedc?: Maybe<CarPremiumEfficiencyNEDC>;
  /** Car efficiency based on RealRange */
  real?: Maybe<CarPremiumEfficiencyReal>;
};

export type CarPremiumEfficiencyWLTP = {
  /** Rated efficiency in WLTP combined cycle in kWh/100 km */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP combined cycle presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle (based on value) in kWh/100 km */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP combined cycle presented in gas equivalent, in l/100 km */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in WLTP combined cycle in battery-only mode (NULL if not WLTP rated) in gr/km */
  co2?: Maybe<Scalars["Int"]>;
};

export type CarPremiumEfficiencyWLTPTEH = {
  /** Rated efficiency in WLTP TEH combined cycle (TEH/least efficient trim) */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in WLTP TEH combined cycle presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle (based on value) in kWh/100 km */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in WLTP TEH combined cycle presented in gas equivalent, in l/100 km */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in WLTP TEH combined cycle in battery-only mode (NULL if not WLTP TEH rated) in gr/km */
  co2?: Maybe<Scalars["Int"]>;
};

export type CarPremiumEfficiencyNEDC = {
  /** Rated efficiency in NEDC combined cycle in kWh/100 km */
  value?: Maybe<Scalars["Float"]>;
  /** Rated efficiency in NEDC combined cycle presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle (based on value) in kWh/100 km */
  vehicle?: Maybe<Scalars["Float"]>;
  /** Rated vehicle efficiency in NEDC combined cycle presented in gas equivalent in l/100 km */
  vehicle_fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Rated CO2 emissions in NEDC combined cycle in battery-only mode (NULL if not NEDC rated) in gr/km */
  co2?: Maybe<Scalars["Int"]>;
};

export type CarPremiumEfficiencyReal = {
  /** Car efficiency based on RealRange (useable battery/range) in kWh/100 km */
  value?: Maybe<Scalars["Float"]>;
  /** Car efficiency based on RealRange presented in gas equivalent, in l/100 km */
  fuel_equivalent?: Maybe<Scalars["Float"]>;
  /** Worst conditions are based on -10°C and use of heating */
  worst?: Maybe<CarPremiumEfficiencyRealValue>;
  /** Best conditions are based on 23°C and no use of A/C */
  best?: Maybe<CarPremiumEfficiencyRealValue>;
};

export type CarPremiumEfficiencyRealValue = {
  /** Estimated value on highway or express roads */
  highway?: Maybe<Scalars["Float"]>;
  /** Estimated value on city roads */
  city?: Maybe<Scalars["Float"]>;
  /** Estimated combined value */
  combined?: Maybe<Scalars["Float"]>;
};

export type CarPremiumSafety = {
  /** Number of seats equipped with ISOFIX */
  isofix_seats?: Maybe<Scalars["Int"]>;
  /** EuroNCAP results */
  euro_ncap?: Maybe<CarPremiumSafetyEuroNcap>;
};

export type CarPremiumSafetyEuroNcap = {
  /** EuroNCAP rating (out of 5 stars) */
  rating?: Maybe<Scalars["Int"]>;
  /** EuroNCAP year of rating */
  year?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of adult protection (out of 100%) */
  adult?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of child protection (out of 100%) */
  child?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of vulnerable road users (out of 100%) */
  vru?: Maybe<Scalars["Int"]>;
  /** EuroNCAP rating of safety assists (out of 100%) */
  sa?: Maybe<Scalars["Int"]>;
};

export type CarPremiumMedia = {
  /** URL to detail page on EV database */
  evdb_details_url?: Maybe<Scalars["String"]>;
  /** Latest image */
  image?: Maybe<CarImage>;
  /** Latest maker logo */
  brand?: Maybe<CarImage>;
  /** All images */
  image_list?: Maybe<Array<Maybe<CarImage>>>;
  /** Latest video */
  video?: Maybe<CarVideo>;
  /** All videos */
  video_list?: Maybe<Array<Maybe<CarVideo>>>;
  /**
   * URL to detail page on EV database
   * @deprecated Will be removed in the future. Please use evdb_details_url
   */
  evdb_detail_url?: Maybe<Scalars["String"]>;
};

export type CarPremiumRouting = {
  /**
   * EVs that support fast charging have a minimum charging speed of 43 Kwh.
   * EVs without support for fast charging used in a newRoute mutation will return an error.
   */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
  /** Drag coefficient */
  drag_coefficient?: Maybe<Scalars["Float"]>;
  /** Tire pressure recommended by manufacturer */
  tire_pressure?: Maybe<Scalars["Float"]>;
  /** Extra consumption model */
  consumption?: Maybe<CarPremiumRoutingConsumption>;
  /** Amount of petrol that an equivalent petrol car would consume in l/100 km */
  petrol_consumption?: Maybe<Scalars["Float"]>;
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

/** Deprecated */
export type CarListQuery = {
  /** Deprecated: Not used anymore */
  make?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore */
  model?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore */
  version?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore */
  chargetrip_version?: Maybe<Scalars["String"]>;
  /** Deprecated: Not used anymore */
  mode?: Maybe<CarMode>;
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
};

/** The output element of the carList query */
export type CarList = {
  /** Cars unique ID */
  id?: Maybe<Scalars["ID"]>;
  /** Naming of a car */
  naming?: Maybe<CarListNaming>;
  /** Connectors available for a car */
  connectors?: Maybe<Array<Maybe<CarPlug>>>;
  /** Adapters of connectors available for a car */
  adapters?: Maybe<Array<Maybe<CarPlug>>>;
  /** Battery of a car */
  battery?: Maybe<CarListBattery>;
  /** Body of a car */
  body?: Maybe<CarListBody>;
  /** Availability of a car */
  availability?: Maybe<CarListAvailability>;
  /** Range of a car */
  range?: Maybe<CarListRange>;
  /** Media of a car */
  media?: Maybe<CarListMedia>;
  /** Routing of a car */
  routing?: Maybe<CarListRouting>;
  /**
   * ID provided by a car data source as the row ID
   * @deprecated Will be removed in the future
   */
  externalId?: Maybe<Scalars["String"]>;
  /**
   * Car manufacturer
   * @deprecated In favor of naming.make
   */
  make?: Maybe<Scalars["String"]>;
  /**
   * Car model
   * @deprecated In favor of naming.model
   */
  carModel?: Maybe<Scalars["String"]>;
  /**
   * Car edition
   * @deprecated In favor of naming.version
   */
  edition?: Maybe<Scalars["String"]>;
  /**
   * Car model edition. Added by Chargetrip as an alternative for when a car manufacturer does not provide an edition name, or uses the same edition name across all trims or consecutive years
   * @deprecated In favor of naming.chargetrip_version
   */
  chargetripEdition?: Maybe<Scalars["String"]>;
  /**
   * Car version
   * @deprecated In favor of naming.edition
   */
  version?: Maybe<Scalars["String"]>;
  /**
   * Chargetrip's custom real world range provides a carefully calculated display range for all EV models. This is based on our own research and driving data
   * @deprecated In favor of range.chargetrip_range
   */
  chargetripRange?: Maybe<ChargetripRange>;
  /**
   * Cars that support fast charging have a minimum charging speed of 43 Kwh. Cars without support for fast charging used in a newRoute mutation will return an error
   * @deprecated In favor of routing.fast_charging_support
   */
  fastChargingSupport?: Maybe<Scalars["Boolean"]>;
  /**
   * Current production mode of a car
   * @deprecated In favor of availability.status
   */
  mode?: Maybe<CarMode>;
  /**
   * Number of seats
   * @deprecated In favor of body.seats
   */
  seats?: Maybe<Scalars["Int"]>;
  /**
   * Usable battery capacity in kWh
   * @deprecated In favor of battery.usable_kwh
   */
  batteryUsableKwh?: Maybe<Scalars["Float"]>;
  /**
   * Full battery capacity in kWh
   * @deprecated In favor of battery.full_kwh
   */
  batteryFullKwh?: Maybe<Scalars["Float"]>;
  /**
   * Images of a car in structured data
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

export type CarListNaming = {
  /** Car manufacturer name */
  make?: Maybe<Scalars["String"]>;
  /** Car model name */
  model?: Maybe<Scalars["String"]>;
  /** Version, edition or submodel of car */
  version?: Maybe<Scalars["String"]>;
  /** Another submodel level of car */
  edition?: Maybe<Scalars["String"]>;
  /** Car model version. Added by Chargetrip as an alternative for when a car manufacturer does not provide an version name, or uses the same version name across all trims or consecutive years */
  chargetrip_version?: Maybe<Scalars["String"]>;
};

export type CarListBattery = {
  /** Usable battery capacity in kWh */
  usable_kwh?: Maybe<Scalars["Float"]>;
  /** Full battery capacity in kWh */
  full_kwh?: Maybe<Scalars["Float"]>;
};

export type CarListBody = {
  /** Number of seats in car */
  seats?: Maybe<Scalars["Int"]>;
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

export type CarListRange = {
  /**
   *  Is an index value of what we consider to be the real-world range.
   * (Comparable to Range_Real from EV Database.) It is essentially a normalized range to display in the front-end.
   */
  chargetrip_range?: Maybe<ChargetripRange>;
  /** @deprecated You will receive null values */
  wltp?: Maybe<Scalars["Float"]>;
  /** @deprecated You will receive null values */
  worst?: Maybe<CarEstimationData>;
  /** @deprecated You will receive null values */
  best?: Maybe<CarEstimationData>;
};

export type CarListMedia = {
  /** Latest image of the car */
  image?: Maybe<CarImage>;
  /** Latest maker logo of the car */
  brand?: Maybe<CarImage>;
  /** Latest video of the car */
  video?: Maybe<CarVideo>;
};

export type CarListRouting = {
  /**
   * EVs that support fast charging have a minimum charging speed of 43 Kwh.
   * EVs without support for fast charging used in a newRoute mutation will return an error.
   */
  fast_charging_support?: Maybe<Scalars["Boolean"]>;
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
  /** User who added a review. If a review was added by an anonymous user, this will be null */
  user?: Maybe<ReviewUser>;
  /** Rating of a review */
  rating?: Maybe<Scalars["Int"]>;
  /** Message of a review */
  message?: Maybe<Scalars["String"]>;
  /** Locale of a message */
  locale?: Maybe<Scalars["String"]>;
  /** Car that was provided/selected by a user */
  ev?: Maybe<Car>;
  /** Plug type that was provided/selected by a user */
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
   * Defines if a location may be published on a website or app etc.
   * When this is set to false, only tokens identified in the field: publish_allowed_to are allowed to show this location.
   * When the same location has EVSEs that may be published and may not be published, two 'locations' should be created
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
  /** Indicates if the EVSEs are still charging outside the opening hours. E.g. when a parking garage closes its barriers overnight, is it allowed to charge till the next morning? Default: true */
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
  /** A flag that indicates if a station has real-time information about the availability of its connectors */
  realtime?: Maybe<Scalars["Boolean"]>;
  /** A flag that indicates if a station is on private property */
  private?: Maybe<Scalars["Boolean"]>;
  /** Connectors grouped by power */
  power?: Maybe<Scalars["JSON"]>;
  /** Station availability */
  predicted_availability?: Maybe<Array<Maybe<StationPredictedAvailability>>>;
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
  /** ISO-3166 alpha-2 country code of the CPO that owns this tariff */
  country_code?: Maybe<Scalars["String"]>;
  /** CPO ID of the CPO that owns this tariff (following the ISO-15118 standard) */
  party_id?: Maybe<Scalars["String"]>;
  /** Uniquely identifies the tariff within the CPO’s platform (and suboperator platforms) */
  id?: Maybe<Scalars["String"]>;
  /** ISO-4217 code of the currency of this tariff. */
  currency?: Maybe<Scalars["String"]>;
  /** Defines the type of the tariff. This allows for distinction in case of given charging preferences. When omitted, this tariff is valid for all sessions */
  type?: Maybe<OCPITariffType>;
  /** List of alternative tariff information texts, in multiple languages */
  tariff_alt_text?: Maybe<Array<Maybe<OCPIDisplayText>>>;
  /** URL to a web page that contains an explanation of the tariff information in human readable form */
  tariff_alt_url?: Maybe<Scalars["String"]>;
  /** When this field is set, a charging session with this tariff will cost at least the amount shown. This is different from a FLAT fee (start tariff, transaction fee), as a FLAT fee is a fixed amount that must be paid for any charging session. A minimum price indicates that when the cost of a charging session is lower than this amount, the cost of the session will be equal to this amount */
  min_price?: Maybe<OCPIPrice>;
  /** When this field is set, a charging session with this tariff will NOT cost more than this amount */
  max_price?: Maybe<OCPIPrice>;
  /** List of tariff elements */
  elements?: Maybe<Array<Maybe<OCPITariffElement>>>;
  /** Time when this tariff becomes active, in UTC, time_zone field of the Location can be used to convert to local time. Typically used for a new tariff that is already given with the location, before it becomes active */
  start_date_time?: Maybe<Scalars["DateTime"]>;
  /** Time after which this tariff is no longer valid, in UTC, time_zone field if the location can be used to convert to local time. Typically used when this tariff is going to be replaced with a different tariff in the near future */
  end_date_time?: Maybe<Scalars["DateTime"]>;
  /** Details about the energy supplied with this tariff */
  energy_mix?: Maybe<OCPIEnergyMix>;
  /** Timestamp when this tariff was last updated (or created) */
  last_updated?: Maybe<Scalars["DateTime"]>;
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
  /** End date in local time, the time zone is defined in the time_zone field of the Location, for example: 2015-12-27, valid until this day (exclusive). Same syntax as start_date */
  end_date?: Maybe<Scalars["String"]>;
  /** Minimum consumed energy in kWh, for example 20, valid from this amount of energy being used */
  min_kwh?: Maybe<Scalars["Float"]>;
  /** Maximum consumed energy in kWh, for example 50, valid until this amount of energy being used */
  max_kwh?: Maybe<Scalars["Float"]>;
  /** Sum of the minimum current in over all phases, for example 5. When the EV is charging with more than the defined amount of current, this tariff element is/becomes active. If the charging current is or becomes lower, this tariff element is not or no longer valid and becomes inactive. This does not describe the minimum current over the entire charging session. This restriction can make a tariff element become active when the charging current is above the defined value, but the tariff element MUST no longer be active when the charging current drops below the defined value */
  min_current?: Maybe<Scalars["Float"]>;
  /** Sum of the maximum current in over all phases, for example 20. When the EV is charging with less than the defined amount of current, this tariff element becomes/is active. If the charging current is or becomes higher, this tariff element is not or no longer valid and becomes inactive. This describes NOT the maximum current over the entire Charging Session. This restriction can make a tariff element become active when the charging current is below this value, but the tariff element MUST  no longer be active when the charging current raises above the defined value */
  max_current?: Maybe<Scalars["Float"]>;
  /** Minimum power in kW, for example 5. When the EV is charging with more than the defined amount of power, this tariff element is/becomes active. If the charging power is or becomes lower, this tariff element is not or no longer valid and becomes inactive. This does not describe the minimum power over the entire charging session. This restriction can make a tariff element become active when the charging power is above this value, but the TariffElement MUST no longer be active when the charging power drops below the defined value */
  min_power?: Maybe<Scalars["Float"]>;
  /** Maximum power in kW, for example 20. When the EV is charging with less than the defined amount of power, this tariff element becomes/is active. If the charging power is or becomes higher, this tariff element is not or no longer valid and becomes inactive. This does not describe the maximum power over the entire charging session. This restriction can make a tariff element become active when the charging power is below this value, but the TariffElement MUST no longer be active when the charging power raises above the defined value */
  max_power?: Maybe<Scalars["Float"]>;
  /** Minimum duration in seconds the charging session MUST last (inclusive). When the duration of a charging session is longer than the defined value, this TariffElement is or becomes active. Before that moment, this tariff element is not yet active */
  min_duration?: Maybe<Scalars["Float"]>;
  /** Maximum duration in seconds the charging session MUST last (exclusive). When the duration of a charging session is shorter than the defined value, this tariff element is or becomes active. After that moment, this tariff element is no longer active */
  max_duration?: Maybe<Scalars["Float"]>;
  /** Which day(s) of the week this tariff element is active. */
  day_of_week?: Maybe<OCPIDayOfWeek>;
  /** When this field is present, the tariff element describes reservation costs. A reservation starts when the reservation is made, and ends when the drivers starts charging on the reserved EVSE/Location, or when the reservation expires. A reservation can only have: FLAT and TIME TariffDimensions, where TIME is for the duration of the reservation */
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

/** Station availability for each weekday and hour */
export type StationPredictedAvailability = {
  /** Number of weekday from 1 (monday) to 7 (sunday) */
  weekday?: Maybe<Scalars["Int"]>;
  /** The prediction for each hour 0-23 from 1 to 5 (1 - very busy ... 5 very quiet (free)) */
  prediction?: Maybe<Array<Maybe<Scalars["Int"]>>>;
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
  /** @deprecated You will receive null values */
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
  /** ID of the Car that was provided/selected by a user */
  ev?: Maybe<Scalars["String"]>;
  /** Plug type that was provided/selected by a user */
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

/** Status of a car */
export enum CarStatus {
  /** Was just imported */
  NEW = "new",
  /** Is being reviewed by a human operator */
  REVIEW = "review",
  /** Is public and can be used by a customer */
  PUBLIC = "public"
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
