
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model academic_years
 * 
 */
export type academic_years = $Result.DefaultSelection<Prisma.$academic_yearsPayload>
/**
 * Model admins
 * 
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>
/**
 * Model attendance
 * 
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>
/**
 * Model classrooms
 * 
 */
export type classrooms = $Result.DefaultSelection<Prisma.$classroomsPayload>
/**
 * Model courses
 * 
 */
export type courses = $Result.DefaultSelection<Prisma.$coursesPayload>
/**
 * Model groups
 * 
 */
export type groups = $Result.DefaultSelection<Prisma.$groupsPayload>
/**
 * Model professor_classroom_access
 * 
 */
export type professor_classroom_access = $Result.DefaultSelection<Prisma.$professor_classroom_accessPayload>
/**
 * Model professors
 * 
 */
export type professors = $Result.DefaultSelection<Prisma.$professorsPayload>
/**
 * Model schedules
 * 
 */
export type schedules = $Result.DefaultSelection<Prisma.$schedulesPayload>
/**
 * Model sections
 * 
 */
export type sections = $Result.DefaultSelection<Prisma.$sectionsPayload>
/**
 * Model students
 * 
 */
export type students = $Result.DefaultSelection<Prisma.$studentsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Academic_years
 * const academic_years = await prisma.academic_years.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Academic_years
   * const academic_years = await prisma.academic_years.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.academic_years`: Exposes CRUD operations for the **academic_years** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Academic_years
    * const academic_years = await prisma.academic_years.findMany()
    * ```
    */
  get academic_years(): Prisma.academic_yearsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.attendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classrooms`: Exposes CRUD operations for the **classrooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classrooms.findMany()
    * ```
    */
  get classrooms(): Prisma.classroomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.coursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor_classroom_access`: Exposes CRUD operations for the **professor_classroom_access** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professor_classroom_accesses
    * const professor_classroom_accesses = await prisma.professor_classroom_access.findMany()
    * ```
    */
  get professor_classroom_access(): Prisma.professor_classroom_accessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professors`: Exposes CRUD operations for the **professors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professors.findMany()
    * ```
    */
  get professors(): Prisma.professorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedules`: Exposes CRUD operations for the **schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedules.findMany()
    * ```
    */
  get schedules(): Prisma.schedulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sections`: Exposes CRUD operations for the **sections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.sections.findMany()
    * ```
    */
  get sections(): Prisma.sectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    academic_years: 'academic_years',
    admins: 'admins',
    attendance: 'attendance',
    classrooms: 'classrooms',
    courses: 'courses',
    groups: 'groups',
    professor_classroom_access: 'professor_classroom_access',
    professors: 'professors',
    schedules: 'schedules',
    sections: 'sections',
    students: 'students'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "academic_years" | "admins" | "attendance" | "classrooms" | "courses" | "groups" | "professor_classroom_access" | "professors" | "schedules" | "sections" | "students"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      academic_years: {
        payload: Prisma.$academic_yearsPayload<ExtArgs>
        fields: Prisma.academic_yearsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.academic_yearsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.academic_yearsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>
          }
          findFirst: {
            args: Prisma.academic_yearsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.academic_yearsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>
          }
          findMany: {
            args: Prisma.academic_yearsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>[]
          }
          create: {
            args: Prisma.academic_yearsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>
          }
          createMany: {
            args: Prisma.academic_yearsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.academic_yearsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>[]
          }
          delete: {
            args: Prisma.academic_yearsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>
          }
          update: {
            args: Prisma.academic_yearsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>
          }
          deleteMany: {
            args: Prisma.academic_yearsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.academic_yearsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.academic_yearsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>[]
          }
          upsert: {
            args: Prisma.academic_yearsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academic_yearsPayload>
          }
          aggregate: {
            args: Prisma.Academic_yearsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademic_years>
          }
          groupBy: {
            args: Prisma.academic_yearsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Academic_yearsGroupByOutputType>[]
          }
          count: {
            args: Prisma.academic_yearsCountArgs<ExtArgs>
            result: $Utils.Optional<Academic_yearsCountAggregateOutputType> | number
          }
        }
      }
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>
        fields: Prisma.adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>
        fields: Prisma.attendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      classrooms: {
        payload: Prisma.$classroomsPayload<ExtArgs>
        fields: Prisma.classroomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classroomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classroomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          findFirst: {
            args: Prisma.classroomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classroomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          findMany: {
            args: Prisma.classroomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>[]
          }
          create: {
            args: Prisma.classroomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          createMany: {
            args: Prisma.classroomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.classroomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>[]
          }
          delete: {
            args: Prisma.classroomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          update: {
            args: Prisma.classroomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          deleteMany: {
            args: Prisma.classroomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classroomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.classroomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>[]
          }
          upsert: {
            args: Prisma.classroomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          aggregate: {
            args: Prisma.ClassroomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassrooms>
          }
          groupBy: {
            args: Prisma.classroomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.classroomsCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomsCountAggregateOutputType> | number
          }
        }
      }
      courses: {
        payload: Prisma.$coursesPayload<ExtArgs>
        fields: Prisma.coursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findFirst: {
            args: Prisma.coursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findMany: {
            args: Prisma.coursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          create: {
            args: Prisma.coursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          createMany: {
            args: Prisma.coursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.coursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          delete: {
            args: Prisma.coursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          update: {
            args: Prisma.coursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          deleteMany: {
            args: Prisma.coursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.coursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          upsert: {
            args: Prisma.coursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.coursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.coursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      groups: {
        payload: Prisma.$groupsPayload<ExtArgs>
        fields: Prisma.groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findFirst: {
            args: Prisma.groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findMany: {
            args: Prisma.groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          create: {
            args: Prisma.groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          createMany: {
            args: Prisma.groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          delete: {
            args: Prisma.groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          update: {
            args: Prisma.groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          deleteMany: {
            args: Prisma.groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.groupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          upsert: {
            args: Prisma.groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      professor_classroom_access: {
        payload: Prisma.$professor_classroom_accessPayload<ExtArgs>
        fields: Prisma.professor_classroom_accessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professor_classroom_accessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professor_classroom_accessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>
          }
          findFirst: {
            args: Prisma.professor_classroom_accessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professor_classroom_accessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>
          }
          findMany: {
            args: Prisma.professor_classroom_accessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>[]
          }
          create: {
            args: Prisma.professor_classroom_accessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>
          }
          createMany: {
            args: Prisma.professor_classroom_accessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.professor_classroom_accessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>[]
          }
          delete: {
            args: Prisma.professor_classroom_accessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>
          }
          update: {
            args: Prisma.professor_classroom_accessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>
          }
          deleteMany: {
            args: Prisma.professor_classroom_accessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professor_classroom_accessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.professor_classroom_accessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>[]
          }
          upsert: {
            args: Prisma.professor_classroom_accessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professor_classroom_accessPayload>
          }
          aggregate: {
            args: Prisma.Professor_classroom_accessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor_classroom_access>
          }
          groupBy: {
            args: Prisma.professor_classroom_accessGroupByArgs<ExtArgs>
            result: $Utils.Optional<Professor_classroom_accessGroupByOutputType>[]
          }
          count: {
            args: Prisma.professor_classroom_accessCountArgs<ExtArgs>
            result: $Utils.Optional<Professor_classroom_accessCountAggregateOutputType> | number
          }
        }
      }
      professors: {
        payload: Prisma.$professorsPayload<ExtArgs>
        fields: Prisma.professorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>
          }
          findFirst: {
            args: Prisma.professorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>
          }
          findMany: {
            args: Prisma.professorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>[]
          }
          create: {
            args: Prisma.professorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>
          }
          createMany: {
            args: Prisma.professorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.professorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>[]
          }
          delete: {
            args: Prisma.professorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>
          }
          update: {
            args: Prisma.professorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>
          }
          deleteMany: {
            args: Prisma.professorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.professorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>[]
          }
          upsert: {
            args: Prisma.professorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professorsPayload>
          }
          aggregate: {
            args: Prisma.ProfessorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessors>
          }
          groupBy: {
            args: Prisma.professorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.professorsCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorsCountAggregateOutputType> | number
          }
        }
      }
      schedules: {
        payload: Prisma.$schedulesPayload<ExtArgs>
        fields: Prisma.schedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findFirst: {
            args: Prisma.schedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findMany: {
            args: Prisma.schedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          create: {
            args: Prisma.schedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          createMany: {
            args: Prisma.schedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.schedulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          delete: {
            args: Prisma.schedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          update: {
            args: Prisma.schedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          deleteMany: {
            args: Prisma.schedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.schedulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          upsert: {
            args: Prisma.schedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          aggregate: {
            args: Prisma.SchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedules>
          }
          groupBy: {
            args: Prisma.schedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.schedulesCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulesCountAggregateOutputType> | number
          }
        }
      }
      sections: {
        payload: Prisma.$sectionsPayload<ExtArgs>
        fields: Prisma.sectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          findFirst: {
            args: Prisma.sectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          findMany: {
            args: Prisma.sectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>[]
          }
          create: {
            args: Prisma.sectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          createMany: {
            args: Prisma.sectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>[]
          }
          delete: {
            args: Prisma.sectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          update: {
            args: Prisma.sectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          deleteMany: {
            args: Prisma.sectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>[]
          }
          upsert: {
            args: Prisma.sectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionsPayload>
          }
          aggregate: {
            args: Prisma.SectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSections>
          }
          groupBy: {
            args: Prisma.sectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sectionsCountArgs<ExtArgs>
            result: $Utils.Optional<SectionsCountAggregateOutputType> | number
          }
        }
      }
      students: {
        payload: Prisma.$studentsPayload<ExtArgs>
        fields: Prisma.studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findFirst: {
            args: Prisma.studentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findMany: {
            args: Prisma.studentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          create: {
            args: Prisma.studentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          createMany: {
            args: Prisma.studentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          delete: {
            args: Prisma.studentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          update: {
            args: Prisma.studentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          deleteMany: {
            args: Prisma.studentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          upsert: {
            args: Prisma.studentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.studentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    academic_years?: academic_yearsOmit
    admins?: adminsOmit
    attendance?: attendanceOmit
    classrooms?: classroomsOmit
    courses?: coursesOmit
    groups?: groupsOmit
    professor_classroom_access?: professor_classroom_accessOmit
    professors?: professorsOmit
    schedules?: schedulesOmit
    sections?: sectionsOmit
    students?: studentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Academic_yearsCountOutputType
   */

  export type Academic_yearsCountOutputType = {
    sections: number
  }

  export type Academic_yearsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Academic_yearsCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * Academic_yearsCountOutputType without action
   */
  export type Academic_yearsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academic_yearsCountOutputType
     */
    select?: Academic_yearsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Academic_yearsCountOutputType without action
   */
  export type Academic_yearsCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionsWhereInput
  }


  /**
   * Count Type ClassroomsCountOutputType
   */

  export type ClassroomsCountOutputType = {
    attendance: number
    professor_classroom_access: number
    schedules: number
  }

  export type ClassroomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | ClassroomsCountOutputTypeCountAttendanceArgs
    professor_classroom_access?: boolean | ClassroomsCountOutputTypeCountProfessor_classroom_accessArgs
    schedules?: boolean | ClassroomsCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ClassroomsCountOutputType without action
   */
  export type ClassroomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomsCountOutputType
     */
    select?: ClassroomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomsCountOutputType without action
   */
  export type ClassroomsCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }

  /**
   * ClassroomsCountOutputType without action
   */
  export type ClassroomsCountOutputTypeCountProfessor_classroom_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professor_classroom_accessWhereInput
  }

  /**
   * ClassroomsCountOutputType without action
   */
  export type ClassroomsCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
  }


  /**
   * Count Type CoursesCountOutputType
   */

  export type CoursesCountOutputType = {
    attendance: number
    schedules: number
  }

  export type CoursesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | CoursesCountOutputTypeCountAttendanceArgs
    schedules?: boolean | CoursesCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursesCountOutputType
     */
    select?: CoursesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    students: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | GroupsCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
  }


  /**
   * Count Type ProfessorsCountOutputType
   */

  export type ProfessorsCountOutputType = {
    courses: number
    professor_classroom_access: number
  }

  export type ProfessorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | ProfessorsCountOutputTypeCountCoursesArgs
    professor_classroom_access?: boolean | ProfessorsCountOutputTypeCountProfessor_classroom_accessArgs
  }

  // Custom InputTypes
  /**
   * ProfessorsCountOutputType without action
   */
  export type ProfessorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorsCountOutputType
     */
    select?: ProfessorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorsCountOutputType without action
   */
  export type ProfessorsCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
  }

  /**
   * ProfessorsCountOutputType without action
   */
  export type ProfessorsCountOutputTypeCountProfessor_classroom_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professor_classroom_accessWhereInput
  }


  /**
   * Count Type SectionsCountOutputType
   */

  export type SectionsCountOutputType = {
    courses: number
    groups: number
    students: number
  }

  export type SectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | SectionsCountOutputTypeCountCoursesArgs
    groups?: boolean | SectionsCountOutputTypeCountGroupsArgs
    students?: boolean | SectionsCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * SectionsCountOutputType without action
   */
  export type SectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionsCountOutputType
     */
    select?: SectionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionsCountOutputType without action
   */
  export type SectionsCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
  }

  /**
   * SectionsCountOutputType without action
   */
  export type SectionsCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
  }

  /**
   * SectionsCountOutputType without action
   */
  export type SectionsCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
  }


  /**
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    attendance: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | StudentsCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model academic_years
   */

  export type AggregateAcademic_years = {
    _count: Academic_yearsCountAggregateOutputType | null
    _avg: Academic_yearsAvgAggregateOutputType | null
    _sum: Academic_yearsSumAggregateOutputType | null
    _min: Academic_yearsMinAggregateOutputType | null
    _max: Academic_yearsMaxAggregateOutputType | null
  }

  export type Academic_yearsAvgAggregateOutputType = {
    id: number | null
  }

  export type Academic_yearsSumAggregateOutputType = {
    id: number | null
  }

  export type Academic_yearsMinAggregateOutputType = {
    id: number | null
    annee: string | null
    specialite: string | null
    faculte: string | null
  }

  export type Academic_yearsMaxAggregateOutputType = {
    id: number | null
    annee: string | null
    specialite: string | null
    faculte: string | null
  }

  export type Academic_yearsCountAggregateOutputType = {
    id: number
    annee: number
    specialite: number
    faculte: number
    _all: number
  }


  export type Academic_yearsAvgAggregateInputType = {
    id?: true
  }

  export type Academic_yearsSumAggregateInputType = {
    id?: true
  }

  export type Academic_yearsMinAggregateInputType = {
    id?: true
    annee?: true
    specialite?: true
    faculte?: true
  }

  export type Academic_yearsMaxAggregateInputType = {
    id?: true
    annee?: true
    specialite?: true
    faculte?: true
  }

  export type Academic_yearsCountAggregateInputType = {
    id?: true
    annee?: true
    specialite?: true
    faculte?: true
    _all?: true
  }

  export type Academic_yearsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which academic_years to aggregate.
     */
    where?: academic_yearsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academic_years to fetch.
     */
    orderBy?: academic_yearsOrderByWithRelationInput | academic_yearsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: academic_yearsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academic_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academic_years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned academic_years
    **/
    _count?: true | Academic_yearsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Academic_yearsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Academic_yearsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Academic_yearsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Academic_yearsMaxAggregateInputType
  }

  export type GetAcademic_yearsAggregateType<T extends Academic_yearsAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademic_years]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademic_years[P]>
      : GetScalarType<T[P], AggregateAcademic_years[P]>
  }




  export type academic_yearsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: academic_yearsWhereInput
    orderBy?: academic_yearsOrderByWithAggregationInput | academic_yearsOrderByWithAggregationInput[]
    by: Academic_yearsScalarFieldEnum[] | Academic_yearsScalarFieldEnum
    having?: academic_yearsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Academic_yearsCountAggregateInputType | true
    _avg?: Academic_yearsAvgAggregateInputType
    _sum?: Academic_yearsSumAggregateInputType
    _min?: Academic_yearsMinAggregateInputType
    _max?: Academic_yearsMaxAggregateInputType
  }

  export type Academic_yearsGroupByOutputType = {
    id: number
    annee: string
    specialite: string
    faculte: string
    _count: Academic_yearsCountAggregateOutputType | null
    _avg: Academic_yearsAvgAggregateOutputType | null
    _sum: Academic_yearsSumAggregateOutputType | null
    _min: Academic_yearsMinAggregateOutputType | null
    _max: Academic_yearsMaxAggregateOutputType | null
  }

  type GetAcademic_yearsGroupByPayload<T extends academic_yearsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Academic_yearsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Academic_yearsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Academic_yearsGroupByOutputType[P]>
            : GetScalarType<T[P], Academic_yearsGroupByOutputType[P]>
        }
      >
    >


  export type academic_yearsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annee?: boolean
    specialite?: boolean
    faculte?: boolean
    sections?: boolean | academic_years$sectionsArgs<ExtArgs>
    _count?: boolean | Academic_yearsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academic_years"]>

  export type academic_yearsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annee?: boolean
    specialite?: boolean
    faculte?: boolean
  }, ExtArgs["result"]["academic_years"]>

  export type academic_yearsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annee?: boolean
    specialite?: boolean
    faculte?: boolean
  }, ExtArgs["result"]["academic_years"]>

  export type academic_yearsSelectScalar = {
    id?: boolean
    annee?: boolean
    specialite?: boolean
    faculte?: boolean
  }

  export type academic_yearsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "annee" | "specialite" | "faculte", ExtArgs["result"]["academic_years"]>
  export type academic_yearsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | academic_years$sectionsArgs<ExtArgs>
    _count?: boolean | Academic_yearsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type academic_yearsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type academic_yearsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $academic_yearsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "academic_years"
    objects: {
      sections: Prisma.$sectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      annee: string
      specialite: string
      faculte: string
    }, ExtArgs["result"]["academic_years"]>
    composites: {}
  }

  type academic_yearsGetPayload<S extends boolean | null | undefined | academic_yearsDefaultArgs> = $Result.GetResult<Prisma.$academic_yearsPayload, S>

  type academic_yearsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<academic_yearsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Academic_yearsCountAggregateInputType | true
    }

  export interface academic_yearsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['academic_years'], meta: { name: 'academic_years' } }
    /**
     * Find zero or one Academic_years that matches the filter.
     * @param {academic_yearsFindUniqueArgs} args - Arguments to find a Academic_years
     * @example
     * // Get one Academic_years
     * const academic_years = await prisma.academic_years.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends academic_yearsFindUniqueArgs>(args: SelectSubset<T, academic_yearsFindUniqueArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Academic_years that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {academic_yearsFindUniqueOrThrowArgs} args - Arguments to find a Academic_years
     * @example
     * // Get one Academic_years
     * const academic_years = await prisma.academic_years.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends academic_yearsFindUniqueOrThrowArgs>(args: SelectSubset<T, academic_yearsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academic_years that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academic_yearsFindFirstArgs} args - Arguments to find a Academic_years
     * @example
     * // Get one Academic_years
     * const academic_years = await prisma.academic_years.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends academic_yearsFindFirstArgs>(args?: SelectSubset<T, academic_yearsFindFirstArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academic_years that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academic_yearsFindFirstOrThrowArgs} args - Arguments to find a Academic_years
     * @example
     * // Get one Academic_years
     * const academic_years = await prisma.academic_years.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends academic_yearsFindFirstOrThrowArgs>(args?: SelectSubset<T, academic_yearsFindFirstOrThrowArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Academic_years that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academic_yearsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Academic_years
     * const academic_years = await prisma.academic_years.findMany()
     * 
     * // Get first 10 Academic_years
     * const academic_years = await prisma.academic_years.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academic_yearsWithIdOnly = await prisma.academic_years.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends academic_yearsFindManyArgs>(args?: SelectSubset<T, academic_yearsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Academic_years.
     * @param {academic_yearsCreateArgs} args - Arguments to create a Academic_years.
     * @example
     * // Create one Academic_years
     * const Academic_years = await prisma.academic_years.create({
     *   data: {
     *     // ... data to create a Academic_years
     *   }
     * })
     * 
     */
    create<T extends academic_yearsCreateArgs>(args: SelectSubset<T, academic_yearsCreateArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Academic_years.
     * @param {academic_yearsCreateManyArgs} args - Arguments to create many Academic_years.
     * @example
     * // Create many Academic_years
     * const academic_years = await prisma.academic_years.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends academic_yearsCreateManyArgs>(args?: SelectSubset<T, academic_yearsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Academic_years and returns the data saved in the database.
     * @param {academic_yearsCreateManyAndReturnArgs} args - Arguments to create many Academic_years.
     * @example
     * // Create many Academic_years
     * const academic_years = await prisma.academic_years.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Academic_years and only return the `id`
     * const academic_yearsWithIdOnly = await prisma.academic_years.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends academic_yearsCreateManyAndReturnArgs>(args?: SelectSubset<T, academic_yearsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Academic_years.
     * @param {academic_yearsDeleteArgs} args - Arguments to delete one Academic_years.
     * @example
     * // Delete one Academic_years
     * const Academic_years = await prisma.academic_years.delete({
     *   where: {
     *     // ... filter to delete one Academic_years
     *   }
     * })
     * 
     */
    delete<T extends academic_yearsDeleteArgs>(args: SelectSubset<T, academic_yearsDeleteArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Academic_years.
     * @param {academic_yearsUpdateArgs} args - Arguments to update one Academic_years.
     * @example
     * // Update one Academic_years
     * const academic_years = await prisma.academic_years.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends academic_yearsUpdateArgs>(args: SelectSubset<T, academic_yearsUpdateArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Academic_years.
     * @param {academic_yearsDeleteManyArgs} args - Arguments to filter Academic_years to delete.
     * @example
     * // Delete a few Academic_years
     * const { count } = await prisma.academic_years.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends academic_yearsDeleteManyArgs>(args?: SelectSubset<T, academic_yearsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Academic_years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academic_yearsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Academic_years
     * const academic_years = await prisma.academic_years.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends academic_yearsUpdateManyArgs>(args: SelectSubset<T, academic_yearsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Academic_years and returns the data updated in the database.
     * @param {academic_yearsUpdateManyAndReturnArgs} args - Arguments to update many Academic_years.
     * @example
     * // Update many Academic_years
     * const academic_years = await prisma.academic_years.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Academic_years and only return the `id`
     * const academic_yearsWithIdOnly = await prisma.academic_years.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends academic_yearsUpdateManyAndReturnArgs>(args: SelectSubset<T, academic_yearsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Academic_years.
     * @param {academic_yearsUpsertArgs} args - Arguments to update or create a Academic_years.
     * @example
     * // Update or create a Academic_years
     * const academic_years = await prisma.academic_years.upsert({
     *   create: {
     *     // ... data to create a Academic_years
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Academic_years we want to update
     *   }
     * })
     */
    upsert<T extends academic_yearsUpsertArgs>(args: SelectSubset<T, academic_yearsUpsertArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Academic_years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academic_yearsCountArgs} args - Arguments to filter Academic_years to count.
     * @example
     * // Count the number of Academic_years
     * const count = await prisma.academic_years.count({
     *   where: {
     *     // ... the filter for the Academic_years we want to count
     *   }
     * })
    **/
    count<T extends academic_yearsCountArgs>(
      args?: Subset<T, academic_yearsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Academic_yearsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Academic_years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Academic_yearsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Academic_yearsAggregateArgs>(args: Subset<T, Academic_yearsAggregateArgs>): Prisma.PrismaPromise<GetAcademic_yearsAggregateType<T>>

    /**
     * Group by Academic_years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academic_yearsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends academic_yearsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: academic_yearsGroupByArgs['orderBy'] }
        : { orderBy?: academic_yearsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, academic_yearsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademic_yearsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the academic_years model
   */
  readonly fields: academic_yearsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for academic_years.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__academic_yearsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends academic_years$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, academic_years$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the academic_years model
   */
  interface academic_yearsFieldRefs {
    readonly id: FieldRef<"academic_years", 'Int'>
    readonly annee: FieldRef<"academic_years", 'String'>
    readonly specialite: FieldRef<"academic_years", 'String'>
    readonly faculte: FieldRef<"academic_years", 'String'>
  }
    

  // Custom InputTypes
  /**
   * academic_years findUnique
   */
  export type academic_yearsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * Filter, which academic_years to fetch.
     */
    where: academic_yearsWhereUniqueInput
  }

  /**
   * academic_years findUniqueOrThrow
   */
  export type academic_yearsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * Filter, which academic_years to fetch.
     */
    where: academic_yearsWhereUniqueInput
  }

  /**
   * academic_years findFirst
   */
  export type academic_yearsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * Filter, which academic_years to fetch.
     */
    where?: academic_yearsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academic_years to fetch.
     */
    orderBy?: academic_yearsOrderByWithRelationInput | academic_yearsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for academic_years.
     */
    cursor?: academic_yearsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academic_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academic_years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of academic_years.
     */
    distinct?: Academic_yearsScalarFieldEnum | Academic_yearsScalarFieldEnum[]
  }

  /**
   * academic_years findFirstOrThrow
   */
  export type academic_yearsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * Filter, which academic_years to fetch.
     */
    where?: academic_yearsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academic_years to fetch.
     */
    orderBy?: academic_yearsOrderByWithRelationInput | academic_yearsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for academic_years.
     */
    cursor?: academic_yearsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academic_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academic_years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of academic_years.
     */
    distinct?: Academic_yearsScalarFieldEnum | Academic_yearsScalarFieldEnum[]
  }

  /**
   * academic_years findMany
   */
  export type academic_yearsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * Filter, which academic_years to fetch.
     */
    where?: academic_yearsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academic_years to fetch.
     */
    orderBy?: academic_yearsOrderByWithRelationInput | academic_yearsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing academic_years.
     */
    cursor?: academic_yearsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academic_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academic_years.
     */
    skip?: number
    distinct?: Academic_yearsScalarFieldEnum | Academic_yearsScalarFieldEnum[]
  }

  /**
   * academic_years create
   */
  export type academic_yearsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * The data needed to create a academic_years.
     */
    data: XOR<academic_yearsCreateInput, academic_yearsUncheckedCreateInput>
  }

  /**
   * academic_years createMany
   */
  export type academic_yearsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many academic_years.
     */
    data: academic_yearsCreateManyInput | academic_yearsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * academic_years createManyAndReturn
   */
  export type academic_yearsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * The data used to create many academic_years.
     */
    data: academic_yearsCreateManyInput | academic_yearsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * academic_years update
   */
  export type academic_yearsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * The data needed to update a academic_years.
     */
    data: XOR<academic_yearsUpdateInput, academic_yearsUncheckedUpdateInput>
    /**
     * Choose, which academic_years to update.
     */
    where: academic_yearsWhereUniqueInput
  }

  /**
   * academic_years updateMany
   */
  export type academic_yearsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update academic_years.
     */
    data: XOR<academic_yearsUpdateManyMutationInput, academic_yearsUncheckedUpdateManyInput>
    /**
     * Filter which academic_years to update
     */
    where?: academic_yearsWhereInput
    /**
     * Limit how many academic_years to update.
     */
    limit?: number
  }

  /**
   * academic_years updateManyAndReturn
   */
  export type academic_yearsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * The data used to update academic_years.
     */
    data: XOR<academic_yearsUpdateManyMutationInput, academic_yearsUncheckedUpdateManyInput>
    /**
     * Filter which academic_years to update
     */
    where?: academic_yearsWhereInput
    /**
     * Limit how many academic_years to update.
     */
    limit?: number
  }

  /**
   * academic_years upsert
   */
  export type academic_yearsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * The filter to search for the academic_years to update in case it exists.
     */
    where: academic_yearsWhereUniqueInput
    /**
     * In case the academic_years found by the `where` argument doesn't exist, create a new academic_years with this data.
     */
    create: XOR<academic_yearsCreateInput, academic_yearsUncheckedCreateInput>
    /**
     * In case the academic_years was found with the provided `where` argument, update it with this data.
     */
    update: XOR<academic_yearsUpdateInput, academic_yearsUncheckedUpdateInput>
  }

  /**
   * academic_years delete
   */
  export type academic_yearsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    /**
     * Filter which academic_years to delete.
     */
    where: academic_yearsWhereUniqueInput
  }

  /**
   * academic_years deleteMany
   */
  export type academic_yearsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which academic_years to delete
     */
    where?: academic_yearsWhereInput
    /**
     * Limit how many academic_years to delete.
     */
    limit?: number
  }

  /**
   * academic_years.sections
   */
  export type academic_years$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    where?: sectionsWhereInput
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    cursor?: sectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * academic_years without action
   */
  export type academic_yearsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
  }


  /**
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminsSumAggregateOutputType = {
    id: number | null
  }

  export type AdminsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    id?: true
  }

  export type AdminsSumAggregateInputType = {
    id?: true
  }

  export type AdminsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminsWhereInput
    orderBy?: adminsOrderByWithAggregationInput | adminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: number
    name: string
    email: string
    password_hash: string
    created_at: Date | null
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type adminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "created_at", ExtArgs["result"]["admins"]>

  export type $adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password_hash: string
      created_at: Date | null
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = $Result.GetResult<Prisma.$adminsPayload, S>

  type adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admins'], meta: { name: 'admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminsFindUniqueArgs>(args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(args: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminsFindFirstArgs>(args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminsFindManyArgs>(args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends adminsCreateArgs>(args: SelectSubset<T, adminsCreateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminsCreateManyArgs>(args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminsCreateManyAndReturnArgs>(args?: SelectSubset<T, adminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends adminsDeleteArgs>(args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminsUpdateArgs>(args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminsDeleteManyArgs>(args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminsUpdateManyArgs>(args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminsUpdateManyAndReturnArgs>(args: SelectSubset<T, adminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends adminsUpsertArgs>(args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admins model
   */
  readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admins model
   */
  interface adminsFieldRefs {
    readonly id: FieldRef<"admins", 'Int'>
    readonly name: FieldRef<"admins", 'String'>
    readonly email: FieldRef<"admins", 'String'>
    readonly password_hash: FieldRef<"admins", 'String'>
    readonly created_at: FieldRef<"admins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findMany
   */
  export type adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins create
   */
  export type adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>
  }

  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admins createManyAndReturn
   */
  export type adminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admins update
   */
  export type adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admins updateManyAndReturn
   */
  export type adminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admins upsert
   */
  export type adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
  }

  /**
   * admins delete
   */
  export type adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admins without action
   */
  export type adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
  }


  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
    course_id: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
    course_id: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
    course_id: number | null
    timestamp: Date | null
    statut: string | null
    verified: boolean | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
    course_id: number | null
    timestamp: Date | null
    statut: string | null
    verified: boolean | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    student_id: number
    classroom_id: number
    course_id: number
    timestamp: number
    statut: number
    verified: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    course_id?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    course_id?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    course_id?: true
    timestamp?: true
    statut?: true
    verified?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    course_id?: true
    timestamp?: true
    statut?: true
    verified?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    course_id?: true
    timestamp?: true
    statut?: true
    verified?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: attendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    student_id: number | null
    classroom_id: number | null
    course_id: number | null
    timestamp: Date
    statut: string | null
    verified: boolean | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    course_id?: boolean
    timestamp?: boolean
    statut?: boolean
    verified?: boolean
    classrooms?: boolean | attendance$classroomsArgs<ExtArgs>
    courses?: boolean | attendance$coursesArgs<ExtArgs>
    students?: boolean | attendance$studentsArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    course_id?: boolean
    timestamp?: boolean
    statut?: boolean
    verified?: boolean
    classrooms?: boolean | attendance$classroomsArgs<ExtArgs>
    courses?: boolean | attendance$coursesArgs<ExtArgs>
    students?: boolean | attendance$studentsArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    course_id?: boolean
    timestamp?: boolean
    statut?: boolean
    verified?: boolean
    classrooms?: boolean | attendance$classroomsArgs<ExtArgs>
    courses?: boolean | attendance$coursesArgs<ExtArgs>
    students?: boolean | attendance$studentsArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectScalar = {
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    course_id?: boolean
    timestamp?: boolean
    statut?: boolean
    verified?: boolean
  }

  export type attendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "classroom_id" | "course_id" | "timestamp" | "statut" | "verified", ExtArgs["result"]["attendance"]>
  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | attendance$classroomsArgs<ExtArgs>
    courses?: boolean | attendance$coursesArgs<ExtArgs>
    students?: boolean | attendance$studentsArgs<ExtArgs>
  }
  export type attendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | attendance$classroomsArgs<ExtArgs>
    courses?: boolean | attendance$coursesArgs<ExtArgs>
    students?: boolean | attendance$studentsArgs<ExtArgs>
  }
  export type attendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | attendance$classroomsArgs<ExtArgs>
    courses?: boolean | attendance$coursesArgs<ExtArgs>
    students?: boolean | attendance$studentsArgs<ExtArgs>
  }

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendance"
    objects: {
      classrooms: Prisma.$classroomsPayload<ExtArgs> | null
      courses: Prisma.$coursesPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number | null
      classroom_id: number | null
      course_id: number | null
      timestamp: Date
      statut: string | null
      verified: boolean | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<Prisma.$attendancePayload, S>

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance'], meta: { name: 'attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendanceFindUniqueArgs>(args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendanceFindFirstArgs>(args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendanceFindManyArgs>(args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends attendanceCreateArgs>(args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendanceCreateManyArgs>(args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {attendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, attendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends attendanceDeleteArgs>(args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendanceUpdateArgs>(args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendanceDeleteManyArgs>(args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendanceUpdateManyArgs>(args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {attendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends attendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, attendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends attendanceUpsertArgs>(args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendance model
   */
  readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classrooms<T extends attendance$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, attendance$classroomsArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courses<T extends attendance$coursesArgs<ExtArgs> = {}>(args?: Subset<T, attendance$coursesArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    students<T extends attendance$studentsArgs<ExtArgs> = {}>(args?: Subset<T, attendance$studentsArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attendance model
   */
  interface attendanceFieldRefs {
    readonly id: FieldRef<"attendance", 'Int'>
    readonly student_id: FieldRef<"attendance", 'Int'>
    readonly classroom_id: FieldRef<"attendance", 'Int'>
    readonly course_id: FieldRef<"attendance", 'Int'>
    readonly timestamp: FieldRef<"attendance", 'DateTime'>
    readonly statut: FieldRef<"attendance", 'String'>
    readonly verified: FieldRef<"attendance", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
  }

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendance createManyAndReturn
   */
  export type attendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
  }

  /**
   * attendance updateManyAndReturn
   */
  export type attendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
  }

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to delete.
     */
    limit?: number
  }

  /**
   * attendance.classrooms
   */
  export type attendance$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    where?: classroomsWhereInput
  }

  /**
   * attendance.courses
   */
  export type attendance$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
  }

  /**
   * attendance.students
   */
  export type attendance$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
  }

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
  }


  /**
   * Model classrooms
   */

  export type AggregateClassrooms = {
    _count: ClassroomsCountAggregateOutputType | null
    _avg: ClassroomsAvgAggregateOutputType | null
    _sum: ClassroomsSumAggregateOutputType | null
    _min: ClassroomsMinAggregateOutputType | null
    _max: ClassroomsMaxAggregateOutputType | null
  }

  export type ClassroomsAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type ClassroomsSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type ClassroomsMinAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    status: string | null
  }

  export type ClassroomsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    status: string | null
  }

  export type ClassroomsCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    status: number
    _all: number
  }


  export type ClassroomsAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type ClassroomsSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type ClassroomsMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
  }

  export type ClassroomsMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
  }

  export type ClassroomsCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
    _all?: true
  }

  export type ClassroomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classrooms to aggregate.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classrooms
    **/
    _count?: true | ClassroomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassroomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassroomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomsMaxAggregateInputType
  }

  export type GetClassroomsAggregateType<T extends ClassroomsAggregateArgs> = {
        [P in keyof T & keyof AggregateClassrooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassrooms[P]>
      : GetScalarType<T[P], AggregateClassrooms[P]>
  }




  export type classroomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classroomsWhereInput
    orderBy?: classroomsOrderByWithAggregationInput | classroomsOrderByWithAggregationInput[]
    by: ClassroomsScalarFieldEnum[] | ClassroomsScalarFieldEnum
    having?: classroomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomsCountAggregateInputType | true
    _avg?: ClassroomsAvgAggregateInputType
    _sum?: ClassroomsSumAggregateInputType
    _min?: ClassroomsMinAggregateInputType
    _max?: ClassroomsMaxAggregateInputType
  }

  export type ClassroomsGroupByOutputType = {
    id: number
    name: string
    capacity: number | null
    status: string | null
    _count: ClassroomsCountAggregateOutputType | null
    _avg: ClassroomsAvgAggregateOutputType | null
    _sum: ClassroomsSumAggregateOutputType | null
    _min: ClassroomsMinAggregateOutputType | null
    _max: ClassroomsMaxAggregateOutputType | null
  }

  type GetClassroomsGroupByPayload<T extends classroomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomsGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomsGroupByOutputType[P]>
        }
      >
    >


  export type classroomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
    attendance?: boolean | classrooms$attendanceArgs<ExtArgs>
    professor_classroom_access?: boolean | classrooms$professor_classroom_accessArgs<ExtArgs>
    schedules?: boolean | classrooms$schedulesArgs<ExtArgs>
    _count?: boolean | ClassroomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classrooms"]>

  export type classroomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
  }, ExtArgs["result"]["classrooms"]>

  export type classroomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
  }, ExtArgs["result"]["classrooms"]>

  export type classroomsSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
  }

  export type classroomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "status", ExtArgs["result"]["classrooms"]>
  export type classroomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | classrooms$attendanceArgs<ExtArgs>
    professor_classroom_access?: boolean | classrooms$professor_classroom_accessArgs<ExtArgs>
    schedules?: boolean | classrooms$schedulesArgs<ExtArgs>
    _count?: boolean | ClassroomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type classroomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type classroomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $classroomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classrooms"
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[]
      professor_classroom_access: Prisma.$professor_classroom_accessPayload<ExtArgs>[]
      schedules: Prisma.$schedulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      capacity: number | null
      status: string | null
    }, ExtArgs["result"]["classrooms"]>
    composites: {}
  }

  type classroomsGetPayload<S extends boolean | null | undefined | classroomsDefaultArgs> = $Result.GetResult<Prisma.$classroomsPayload, S>

  type classroomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classroomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomsCountAggregateInputType | true
    }

  export interface classroomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classrooms'], meta: { name: 'classrooms' } }
    /**
     * Find zero or one Classrooms that matches the filter.
     * @param {classroomsFindUniqueArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classroomsFindUniqueArgs>(args: SelectSubset<T, classroomsFindUniqueArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classrooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classroomsFindUniqueOrThrowArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classroomsFindUniqueOrThrowArgs>(args: SelectSubset<T, classroomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsFindFirstArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classroomsFindFirstArgs>(args?: SelectSubset<T, classroomsFindFirstArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classrooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsFindFirstOrThrowArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classroomsFindFirstOrThrowArgs>(args?: SelectSubset<T, classroomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classrooms.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classrooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomsWithIdOnly = await prisma.classrooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classroomsFindManyArgs>(args?: SelectSubset<T, classroomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classrooms.
     * @param {classroomsCreateArgs} args - Arguments to create a Classrooms.
     * @example
     * // Create one Classrooms
     * const Classrooms = await prisma.classrooms.create({
     *   data: {
     *     // ... data to create a Classrooms
     *   }
     * })
     * 
     */
    create<T extends classroomsCreateArgs>(args: SelectSubset<T, classroomsCreateArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {classroomsCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classrooms = await prisma.classrooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classroomsCreateManyArgs>(args?: SelectSubset<T, classroomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classrooms and returns the data saved in the database.
     * @param {classroomsCreateManyAndReturnArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classrooms = await prisma.classrooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classrooms and only return the `id`
     * const classroomsWithIdOnly = await prisma.classrooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends classroomsCreateManyAndReturnArgs>(args?: SelectSubset<T, classroomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classrooms.
     * @param {classroomsDeleteArgs} args - Arguments to delete one Classrooms.
     * @example
     * // Delete one Classrooms
     * const Classrooms = await prisma.classrooms.delete({
     *   where: {
     *     // ... filter to delete one Classrooms
     *   }
     * })
     * 
     */
    delete<T extends classroomsDeleteArgs>(args: SelectSubset<T, classroomsDeleteArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classrooms.
     * @param {classroomsUpdateArgs} args - Arguments to update one Classrooms.
     * @example
     * // Update one Classrooms
     * const classrooms = await prisma.classrooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classroomsUpdateArgs>(args: SelectSubset<T, classroomsUpdateArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {classroomsDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classrooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classroomsDeleteManyArgs>(args?: SelectSubset<T, classroomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classrooms = await prisma.classrooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classroomsUpdateManyArgs>(args: SelectSubset<T, classroomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms and returns the data updated in the database.
     * @param {classroomsUpdateManyAndReturnArgs} args - Arguments to update many Classrooms.
     * @example
     * // Update many Classrooms
     * const classrooms = await prisma.classrooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classrooms and only return the `id`
     * const classroomsWithIdOnly = await prisma.classrooms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends classroomsUpdateManyAndReturnArgs>(args: SelectSubset<T, classroomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classrooms.
     * @param {classroomsUpsertArgs} args - Arguments to update or create a Classrooms.
     * @example
     * // Update or create a Classrooms
     * const classrooms = await prisma.classrooms.upsert({
     *   create: {
     *     // ... data to create a Classrooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classrooms we want to update
     *   }
     * })
     */
    upsert<T extends classroomsUpsertArgs>(args: SelectSubset<T, classroomsUpsertArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classrooms.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends classroomsCountArgs>(
      args?: Subset<T, classroomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomsAggregateArgs>(args: Subset<T, ClassroomsAggregateArgs>): Prisma.PrismaPromise<GetClassroomsAggregateType<T>>

    /**
     * Group by Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends classroomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classroomsGroupByArgs['orderBy'] }
        : { orderBy?: classroomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, classroomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classrooms model
   */
  readonly fields: classroomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classrooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classroomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends classrooms$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, classrooms$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professor_classroom_access<T extends classrooms$professor_classroom_accessArgs<ExtArgs> = {}>(args?: Subset<T, classrooms$professor_classroom_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends classrooms$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, classrooms$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the classrooms model
   */
  interface classroomsFieldRefs {
    readonly id: FieldRef<"classrooms", 'Int'>
    readonly name: FieldRef<"classrooms", 'String'>
    readonly capacity: FieldRef<"classrooms", 'Int'>
    readonly status: FieldRef<"classrooms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * classrooms findUnique
   */
  export type classroomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms findUniqueOrThrow
   */
  export type classroomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms findFirst
   */
  export type classroomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classrooms.
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classrooms.
     */
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * classrooms findFirstOrThrow
   */
  export type classroomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classrooms.
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classrooms.
     */
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * classrooms findMany
   */
  export type classroomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classrooms.
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * classrooms create
   */
  export type classroomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * The data needed to create a classrooms.
     */
    data: XOR<classroomsCreateInput, classroomsUncheckedCreateInput>
  }

  /**
   * classrooms createMany
   */
  export type classroomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classrooms.
     */
    data: classroomsCreateManyInput | classroomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classrooms createManyAndReturn
   */
  export type classroomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * The data used to create many classrooms.
     */
    data: classroomsCreateManyInput | classroomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classrooms update
   */
  export type classroomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * The data needed to update a classrooms.
     */
    data: XOR<classroomsUpdateInput, classroomsUncheckedUpdateInput>
    /**
     * Choose, which classrooms to update.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms updateMany
   */
  export type classroomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classrooms.
     */
    data: XOR<classroomsUpdateManyMutationInput, classroomsUncheckedUpdateManyInput>
    /**
     * Filter which classrooms to update
     */
    where?: classroomsWhereInput
    /**
     * Limit how many classrooms to update.
     */
    limit?: number
  }

  /**
   * classrooms updateManyAndReturn
   */
  export type classroomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * The data used to update classrooms.
     */
    data: XOR<classroomsUpdateManyMutationInput, classroomsUncheckedUpdateManyInput>
    /**
     * Filter which classrooms to update
     */
    where?: classroomsWhereInput
    /**
     * Limit how many classrooms to update.
     */
    limit?: number
  }

  /**
   * classrooms upsert
   */
  export type classroomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * The filter to search for the classrooms to update in case it exists.
     */
    where: classroomsWhereUniqueInput
    /**
     * In case the classrooms found by the `where` argument doesn't exist, create a new classrooms with this data.
     */
    create: XOR<classroomsCreateInput, classroomsUncheckedCreateInput>
    /**
     * In case the classrooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classroomsUpdateInput, classroomsUncheckedUpdateInput>
  }

  /**
   * classrooms delete
   */
  export type classroomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter which classrooms to delete.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms deleteMany
   */
  export type classroomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classrooms to delete
     */
    where?: classroomsWhereInput
    /**
     * Limit how many classrooms to delete.
     */
    limit?: number
  }

  /**
   * classrooms.attendance
   */
  export type classrooms$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * classrooms.professor_classroom_access
   */
  export type classrooms$professor_classroom_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    where?: professor_classroom_accessWhereInput
    orderBy?: professor_classroom_accessOrderByWithRelationInput | professor_classroom_accessOrderByWithRelationInput[]
    cursor?: professor_classroom_accessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Professor_classroom_accessScalarFieldEnum | Professor_classroom_accessScalarFieldEnum[]
  }

  /**
   * classrooms.schedules
   */
  export type classrooms$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    cursor?: schedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * classrooms without action
   */
  export type classroomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
  }


  /**
   * Model courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    id: number | null
    section_id: number | null
    professeur_id: number | null
  }

  export type CoursesSumAggregateOutputType = {
    id: number | null
    section_id: number | null
    professeur_id: number | null
  }

  export type CoursesMinAggregateOutputType = {
    id: number | null
    name: string | null
    section_id: number | null
    professeur_id: number | null
    room: string | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    section_id: number | null
    professeur_id: number | null
    room: string | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    name: number
    section_id: number
    professeur_id: number
    room: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    id?: true
    section_id?: true
    professeur_id?: true
  }

  export type CoursesSumAggregateInputType = {
    id?: true
    section_id?: true
    professeur_id?: true
  }

  export type CoursesMinAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
    professeur_id?: true
    room?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
    professeur_id?: true
    room?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
    professeur_id?: true
    room?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to aggregate.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type coursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithAggregationInput | coursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: coursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: number
    name: string
    section_id: number | null
    professeur_id: number | null
    room: string
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends coursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type coursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section_id?: boolean
    professeur_id?: boolean
    room?: boolean
    attendance?: boolean | courses$attendanceArgs<ExtArgs>
    professors?: boolean | courses$professorsArgs<ExtArgs>
    sections?: boolean | courses$sectionsArgs<ExtArgs>
    schedules?: boolean | courses$schedulesArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section_id?: boolean
    professeur_id?: boolean
    room?: boolean
    professors?: boolean | courses$professorsArgs<ExtArgs>
    sections?: boolean | courses$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section_id?: boolean
    professeur_id?: boolean
    room?: boolean
    professors?: boolean | courses$professorsArgs<ExtArgs>
    sections?: boolean | courses$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type coursesSelectScalar = {
    id?: boolean
    name?: boolean
    section_id?: boolean
    professeur_id?: boolean
    room?: boolean
  }

  export type coursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "section_id" | "professeur_id" | "room", ExtArgs["result"]["courses"]>
  export type coursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | courses$attendanceArgs<ExtArgs>
    professors?: boolean | courses$professorsArgs<ExtArgs>
    sections?: boolean | courses$sectionsArgs<ExtArgs>
    schedules?: boolean | courses$schedulesArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type coursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professors?: boolean | courses$professorsArgs<ExtArgs>
    sections?: boolean | courses$sectionsArgs<ExtArgs>
  }
  export type coursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professors?: boolean | courses$professorsArgs<ExtArgs>
    sections?: boolean | courses$sectionsArgs<ExtArgs>
  }

  export type $coursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "courses"
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[]
      professors: Prisma.$professorsPayload<ExtArgs> | null
      sections: Prisma.$sectionsPayload<ExtArgs> | null
      schedules: Prisma.$schedulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      section_id: number | null
      professeur_id: number | null
      room: string
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type coursesGetPayload<S extends boolean | null | undefined | coursesDefaultArgs> = $Result.GetResult<Prisma.$coursesPayload, S>

  type coursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<coursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface coursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['courses'], meta: { name: 'courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {coursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coursesFindUniqueArgs>(args: SelectSubset<T, coursesFindUniqueArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {coursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coursesFindUniqueOrThrowArgs>(args: SelectSubset<T, coursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coursesFindFirstArgs>(args?: SelectSubset<T, coursesFindFirstArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coursesFindFirstOrThrowArgs>(args?: SelectSubset<T, coursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends coursesFindManyArgs>(args?: SelectSubset<T, coursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {coursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends coursesCreateArgs>(args: SelectSubset<T, coursesCreateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {coursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coursesCreateManyArgs>(args?: SelectSubset<T, coursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {coursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends coursesCreateManyAndReturnArgs>(args?: SelectSubset<T, coursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {coursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends coursesDeleteArgs>(args: SelectSubset<T, coursesDeleteArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {coursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coursesUpdateArgs>(args: SelectSubset<T, coursesUpdateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {coursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coursesDeleteManyArgs>(args?: SelectSubset<T, coursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coursesUpdateManyArgs>(args: SelectSubset<T, coursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {coursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends coursesUpdateManyAndReturnArgs>(args: SelectSubset<T, coursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {coursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends coursesUpsertArgs>(args: SelectSubset<T, coursesUpsertArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends coursesCountArgs>(
      args?: Subset<T, coursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends coursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coursesGroupByArgs['orderBy'] }
        : { orderBy?: coursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, coursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the courses model
   */
  readonly fields: coursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends courses$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, courses$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professors<T extends courses$professorsArgs<ExtArgs> = {}>(args?: Subset<T, courses$professorsArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sections<T extends courses$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, courses$sectionsArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    schedules<T extends courses$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, courses$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the courses model
   */
  interface coursesFieldRefs {
    readonly id: FieldRef<"courses", 'Int'>
    readonly name: FieldRef<"courses", 'String'>
    readonly section_id: FieldRef<"courses", 'Int'>
    readonly professeur_id: FieldRef<"courses", 'Int'>
    readonly room: FieldRef<"courses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * courses findUnique
   */
  export type coursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findUniqueOrThrow
   */
  export type coursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findFirst
   */
  export type coursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findFirstOrThrow
   */
  export type coursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findMany
   */
  export type coursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses create
   */
  export type coursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to create a courses.
     */
    data: XOR<coursesCreateInput, coursesUncheckedCreateInput>
  }

  /**
   * courses createMany
   */
  export type coursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * courses createManyAndReturn
   */
  export type coursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * courses update
   */
  export type coursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The data needed to update a courses.
     */
    data: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
    /**
     * Choose, which courses to update.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses updateMany
   */
  export type coursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * courses updateManyAndReturn
   */
  export type coursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * courses upsert
   */
  export type coursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * The filter to search for the courses to update in case it exists.
     */
    where: coursesWhereUniqueInput
    /**
     * In case the courses found by the `where` argument doesn't exist, create a new courses with this data.
     */
    create: XOR<coursesCreateInput, coursesUncheckedCreateInput>
    /**
     * In case the courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
  }

  /**
   * courses delete
   */
  export type coursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    /**
     * Filter which courses to delete.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses deleteMany
   */
  export type coursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: coursesWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * courses.attendance
   */
  export type courses$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * courses.professors
   */
  export type courses$professorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    where?: professorsWhereInput
  }

  /**
   * courses.sections
   */
  export type courses$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    where?: sectionsWhereInput
  }

  /**
   * courses.schedules
   */
  export type courses$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    cursor?: schedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * courses without action
   */
  export type coursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
  }


  /**
   * Model groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsAvgAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type GroupsSumAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type GroupsMinAggregateOutputType = {
    id: number | null
    name: string | null
    section_id: number | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    section_id: number | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    name: number
    section_id: number
    _all: number
  }


  export type GroupsAvgAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type GroupsSumAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type GroupsMinAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to aggregate.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithAggregationInput | groupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _avg?: GroupsAvgAggregateInputType
    _sum?: GroupsSumAggregateInputType
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: number
    name: string
    section_id: number | null
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section_id?: boolean
    sections?: boolean | groups$sectionsArgs<ExtArgs>
    students?: boolean | groups$studentsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section_id?: boolean
    sections?: boolean | groups$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section_id?: boolean
    sections?: boolean | groups$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectScalar = {
    id?: boolean
    name?: boolean
    section_id?: boolean
  }

  export type groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "section_id", ExtArgs["result"]["groups"]>
  export type groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | groups$sectionsArgs<ExtArgs>
    students?: boolean | groups$studentsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | groups$sectionsArgs<ExtArgs>
  }
  export type groupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | groups$sectionsArgs<ExtArgs>
  }

  export type $groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groups"
    objects: {
      sections: Prisma.$sectionsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      section_id: number | null
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type groupsGetPayload<S extends boolean | null | undefined | groupsDefaultArgs> = $Result.GetResult<Prisma.$groupsPayload, S>

  type groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groups'], meta: { name: 'groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {groupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupsFindUniqueArgs>(args: SelectSubset<T, groupsFindUniqueArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupsFindFirstArgs>(args?: SelectSubset<T, groupsFindFirstArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupsFindManyArgs>(args?: SelectSubset<T, groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {groupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends groupsCreateArgs>(args: SelectSubset<T, groupsCreateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupsCreateManyArgs>(args?: SelectSubset<T, groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {groupsCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groups.
     * @param {groupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends groupsDeleteArgs>(args: SelectSubset<T, groupsDeleteArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {groupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupsUpdateArgs>(args: SelectSubset<T, groupsUpdateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupsDeleteManyArgs>(args?: SelectSubset<T, groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupsUpdateManyArgs>(args: SelectSubset<T, groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {groupsUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends groupsUpdateManyAndReturnArgs>(args: SelectSubset<T, groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groups.
     * @param {groupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends groupsUpsertArgs>(args: SelectSubset<T, groupsUpsertArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupsCountArgs>(
      args?: Subset<T, groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupsGroupByArgs['orderBy'] }
        : { orderBy?: groupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groups model
   */
  readonly fields: groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends groups$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, groups$sectionsArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    students<T extends groups$studentsArgs<ExtArgs> = {}>(args?: Subset<T, groups$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the groups model
   */
  interface groupsFieldRefs {
    readonly id: FieldRef<"groups", 'Int'>
    readonly name: FieldRef<"groups", 'String'>
    readonly section_id: FieldRef<"groups", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * groups findUnique
   */
  export type groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findUniqueOrThrow
   */
  export type groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findFirst
   */
  export type groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findFirstOrThrow
   */
  export type groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findMany
   */
  export type groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups create
   */
  export type groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a groups.
     */
    data: XOR<groupsCreateInput, groupsUncheckedCreateInput>
  }

  /**
   * groups createMany
   */
  export type groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groups createManyAndReturn
   */
  export type groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups update
   */
  export type groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a groups.
     */
    data: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
    /**
     * Choose, which groups to update.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups updateMany
   */
  export type groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * groups updateManyAndReturn
   */
  export type groupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups upsert
   */
  export type groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the groups to update in case it exists.
     */
    where: groupsWhereUniqueInput
    /**
     * In case the groups found by the `where` argument doesn't exist, create a new groups with this data.
     */
    create: XOR<groupsCreateInput, groupsUncheckedCreateInput>
    /**
     * In case the groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
  }

  /**
   * groups delete
   */
  export type groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter which groups to delete.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups deleteMany
   */
  export type groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * groups.sections
   */
  export type groups$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    where?: sectionsWhereInput
  }

  /**
   * groups.students
   */
  export type groups$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * groups without action
   */
  export type groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
  }


  /**
   * Model professor_classroom_access
   */

  export type AggregateProfessor_classroom_access = {
    _count: Professor_classroom_accessCountAggregateOutputType | null
    _avg: Professor_classroom_accessAvgAggregateOutputType | null
    _sum: Professor_classroom_accessSumAggregateOutputType | null
    _min: Professor_classroom_accessMinAggregateOutputType | null
    _max: Professor_classroom_accessMaxAggregateOutputType | null
  }

  export type Professor_classroom_accessAvgAggregateOutputType = {
    id: number | null
    professor_id: number | null
    classroom_id: number | null
  }

  export type Professor_classroom_accessSumAggregateOutputType = {
    id: number | null
    professor_id: number | null
    classroom_id: number | null
  }

  export type Professor_classroom_accessMinAggregateOutputType = {
    id: number | null
    professor_id: number | null
    classroom_id: number | null
    timestamp: Date | null
    action: string | null
    verified: boolean | null
  }

  export type Professor_classroom_accessMaxAggregateOutputType = {
    id: number | null
    professor_id: number | null
    classroom_id: number | null
    timestamp: Date | null
    action: string | null
    verified: boolean | null
  }

  export type Professor_classroom_accessCountAggregateOutputType = {
    id: number
    professor_id: number
    classroom_id: number
    timestamp: number
    action: number
    verified: number
    _all: number
  }


  export type Professor_classroom_accessAvgAggregateInputType = {
    id?: true
    professor_id?: true
    classroom_id?: true
  }

  export type Professor_classroom_accessSumAggregateInputType = {
    id?: true
    professor_id?: true
    classroom_id?: true
  }

  export type Professor_classroom_accessMinAggregateInputType = {
    id?: true
    professor_id?: true
    classroom_id?: true
    timestamp?: true
    action?: true
    verified?: true
  }

  export type Professor_classroom_accessMaxAggregateInputType = {
    id?: true
    professor_id?: true
    classroom_id?: true
    timestamp?: true
    action?: true
    verified?: true
  }

  export type Professor_classroom_accessCountAggregateInputType = {
    id?: true
    professor_id?: true
    classroom_id?: true
    timestamp?: true
    action?: true
    verified?: true
    _all?: true
  }

  export type Professor_classroom_accessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professor_classroom_access to aggregate.
     */
    where?: professor_classroom_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professor_classroom_accesses to fetch.
     */
    orderBy?: professor_classroom_accessOrderByWithRelationInput | professor_classroom_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professor_classroom_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professor_classroom_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professor_classroom_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professor_classroom_accesses
    **/
    _count?: true | Professor_classroom_accessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Professor_classroom_accessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Professor_classroom_accessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Professor_classroom_accessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Professor_classroom_accessMaxAggregateInputType
  }

  export type GetProfessor_classroom_accessAggregateType<T extends Professor_classroom_accessAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor_classroom_access]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor_classroom_access[P]>
      : GetScalarType<T[P], AggregateProfessor_classroom_access[P]>
  }




  export type professor_classroom_accessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professor_classroom_accessWhereInput
    orderBy?: professor_classroom_accessOrderByWithAggregationInput | professor_classroom_accessOrderByWithAggregationInput[]
    by: Professor_classroom_accessScalarFieldEnum[] | Professor_classroom_accessScalarFieldEnum
    having?: professor_classroom_accessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Professor_classroom_accessCountAggregateInputType | true
    _avg?: Professor_classroom_accessAvgAggregateInputType
    _sum?: Professor_classroom_accessSumAggregateInputType
    _min?: Professor_classroom_accessMinAggregateInputType
    _max?: Professor_classroom_accessMaxAggregateInputType
  }

  export type Professor_classroom_accessGroupByOutputType = {
    id: number
    professor_id: number | null
    classroom_id: number | null
    timestamp: Date
    action: string
    verified: boolean | null
    _count: Professor_classroom_accessCountAggregateOutputType | null
    _avg: Professor_classroom_accessAvgAggregateOutputType | null
    _sum: Professor_classroom_accessSumAggregateOutputType | null
    _min: Professor_classroom_accessMinAggregateOutputType | null
    _max: Professor_classroom_accessMaxAggregateOutputType | null
  }

  type GetProfessor_classroom_accessGroupByPayload<T extends professor_classroom_accessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Professor_classroom_accessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Professor_classroom_accessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Professor_classroom_accessGroupByOutputType[P]>
            : GetScalarType<T[P], Professor_classroom_accessGroupByOutputType[P]>
        }
      >
    >


  export type professor_classroom_accessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professor_id?: boolean
    classroom_id?: boolean
    timestamp?: boolean
    action?: boolean
    verified?: boolean
    classrooms?: boolean | professor_classroom_access$classroomsArgs<ExtArgs>
    professors?: boolean | professor_classroom_access$professorsArgs<ExtArgs>
  }, ExtArgs["result"]["professor_classroom_access"]>

  export type professor_classroom_accessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professor_id?: boolean
    classroom_id?: boolean
    timestamp?: boolean
    action?: boolean
    verified?: boolean
    classrooms?: boolean | professor_classroom_access$classroomsArgs<ExtArgs>
    professors?: boolean | professor_classroom_access$professorsArgs<ExtArgs>
  }, ExtArgs["result"]["professor_classroom_access"]>

  export type professor_classroom_accessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professor_id?: boolean
    classroom_id?: boolean
    timestamp?: boolean
    action?: boolean
    verified?: boolean
    classrooms?: boolean | professor_classroom_access$classroomsArgs<ExtArgs>
    professors?: boolean | professor_classroom_access$professorsArgs<ExtArgs>
  }, ExtArgs["result"]["professor_classroom_access"]>

  export type professor_classroom_accessSelectScalar = {
    id?: boolean
    professor_id?: boolean
    classroom_id?: boolean
    timestamp?: boolean
    action?: boolean
    verified?: boolean
  }

  export type professor_classroom_accessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professor_id" | "classroom_id" | "timestamp" | "action" | "verified", ExtArgs["result"]["professor_classroom_access"]>
  export type professor_classroom_accessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | professor_classroom_access$classroomsArgs<ExtArgs>
    professors?: boolean | professor_classroom_access$professorsArgs<ExtArgs>
  }
  export type professor_classroom_accessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | professor_classroom_access$classroomsArgs<ExtArgs>
    professors?: boolean | professor_classroom_access$professorsArgs<ExtArgs>
  }
  export type professor_classroom_accessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | professor_classroom_access$classroomsArgs<ExtArgs>
    professors?: boolean | professor_classroom_access$professorsArgs<ExtArgs>
  }

  export type $professor_classroom_accessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professor_classroom_access"
    objects: {
      classrooms: Prisma.$classroomsPayload<ExtArgs> | null
      professors: Prisma.$professorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professor_id: number | null
      classroom_id: number | null
      timestamp: Date
      action: string
      verified: boolean | null
    }, ExtArgs["result"]["professor_classroom_access"]>
    composites: {}
  }

  type professor_classroom_accessGetPayload<S extends boolean | null | undefined | professor_classroom_accessDefaultArgs> = $Result.GetResult<Prisma.$professor_classroom_accessPayload, S>

  type professor_classroom_accessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professor_classroom_accessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Professor_classroom_accessCountAggregateInputType | true
    }

  export interface professor_classroom_accessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professor_classroom_access'], meta: { name: 'professor_classroom_access' } }
    /**
     * Find zero or one Professor_classroom_access that matches the filter.
     * @param {professor_classroom_accessFindUniqueArgs} args - Arguments to find a Professor_classroom_access
     * @example
     * // Get one Professor_classroom_access
     * const professor_classroom_access = await prisma.professor_classroom_access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professor_classroom_accessFindUniqueArgs>(args: SelectSubset<T, professor_classroom_accessFindUniqueArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor_classroom_access that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professor_classroom_accessFindUniqueOrThrowArgs} args - Arguments to find a Professor_classroom_access
     * @example
     * // Get one Professor_classroom_access
     * const professor_classroom_access = await prisma.professor_classroom_access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professor_classroom_accessFindUniqueOrThrowArgs>(args: SelectSubset<T, professor_classroom_accessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor_classroom_access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professor_classroom_accessFindFirstArgs} args - Arguments to find a Professor_classroom_access
     * @example
     * // Get one Professor_classroom_access
     * const professor_classroom_access = await prisma.professor_classroom_access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professor_classroom_accessFindFirstArgs>(args?: SelectSubset<T, professor_classroom_accessFindFirstArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor_classroom_access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professor_classroom_accessFindFirstOrThrowArgs} args - Arguments to find a Professor_classroom_access
     * @example
     * // Get one Professor_classroom_access
     * const professor_classroom_access = await prisma.professor_classroom_access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professor_classroom_accessFindFirstOrThrowArgs>(args?: SelectSubset<T, professor_classroom_accessFindFirstOrThrowArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professor_classroom_accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professor_classroom_accessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professor_classroom_accesses
     * const professor_classroom_accesses = await prisma.professor_classroom_access.findMany()
     * 
     * // Get first 10 Professor_classroom_accesses
     * const professor_classroom_accesses = await prisma.professor_classroom_access.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professor_classroom_accessWithIdOnly = await prisma.professor_classroom_access.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends professor_classroom_accessFindManyArgs>(args?: SelectSubset<T, professor_classroom_accessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor_classroom_access.
     * @param {professor_classroom_accessCreateArgs} args - Arguments to create a Professor_classroom_access.
     * @example
     * // Create one Professor_classroom_access
     * const Professor_classroom_access = await prisma.professor_classroom_access.create({
     *   data: {
     *     // ... data to create a Professor_classroom_access
     *   }
     * })
     * 
     */
    create<T extends professor_classroom_accessCreateArgs>(args: SelectSubset<T, professor_classroom_accessCreateArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professor_classroom_accesses.
     * @param {professor_classroom_accessCreateManyArgs} args - Arguments to create many Professor_classroom_accesses.
     * @example
     * // Create many Professor_classroom_accesses
     * const professor_classroom_access = await prisma.professor_classroom_access.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professor_classroom_accessCreateManyArgs>(args?: SelectSubset<T, professor_classroom_accessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professor_classroom_accesses and returns the data saved in the database.
     * @param {professor_classroom_accessCreateManyAndReturnArgs} args - Arguments to create many Professor_classroom_accesses.
     * @example
     * // Create many Professor_classroom_accesses
     * const professor_classroom_access = await prisma.professor_classroom_access.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professor_classroom_accesses and only return the `id`
     * const professor_classroom_accessWithIdOnly = await prisma.professor_classroom_access.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends professor_classroom_accessCreateManyAndReturnArgs>(args?: SelectSubset<T, professor_classroom_accessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor_classroom_access.
     * @param {professor_classroom_accessDeleteArgs} args - Arguments to delete one Professor_classroom_access.
     * @example
     * // Delete one Professor_classroom_access
     * const Professor_classroom_access = await prisma.professor_classroom_access.delete({
     *   where: {
     *     // ... filter to delete one Professor_classroom_access
     *   }
     * })
     * 
     */
    delete<T extends professor_classroom_accessDeleteArgs>(args: SelectSubset<T, professor_classroom_accessDeleteArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor_classroom_access.
     * @param {professor_classroom_accessUpdateArgs} args - Arguments to update one Professor_classroom_access.
     * @example
     * // Update one Professor_classroom_access
     * const professor_classroom_access = await prisma.professor_classroom_access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professor_classroom_accessUpdateArgs>(args: SelectSubset<T, professor_classroom_accessUpdateArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professor_classroom_accesses.
     * @param {professor_classroom_accessDeleteManyArgs} args - Arguments to filter Professor_classroom_accesses to delete.
     * @example
     * // Delete a few Professor_classroom_accesses
     * const { count } = await prisma.professor_classroom_access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professor_classroom_accessDeleteManyArgs>(args?: SelectSubset<T, professor_classroom_accessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professor_classroom_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professor_classroom_accessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professor_classroom_accesses
     * const professor_classroom_access = await prisma.professor_classroom_access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professor_classroom_accessUpdateManyArgs>(args: SelectSubset<T, professor_classroom_accessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professor_classroom_accesses and returns the data updated in the database.
     * @param {professor_classroom_accessUpdateManyAndReturnArgs} args - Arguments to update many Professor_classroom_accesses.
     * @example
     * // Update many Professor_classroom_accesses
     * const professor_classroom_access = await prisma.professor_classroom_access.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professor_classroom_accesses and only return the `id`
     * const professor_classroom_accessWithIdOnly = await prisma.professor_classroom_access.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends professor_classroom_accessUpdateManyAndReturnArgs>(args: SelectSubset<T, professor_classroom_accessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor_classroom_access.
     * @param {professor_classroom_accessUpsertArgs} args - Arguments to update or create a Professor_classroom_access.
     * @example
     * // Update or create a Professor_classroom_access
     * const professor_classroom_access = await prisma.professor_classroom_access.upsert({
     *   create: {
     *     // ... data to create a Professor_classroom_access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor_classroom_access we want to update
     *   }
     * })
     */
    upsert<T extends professor_classroom_accessUpsertArgs>(args: SelectSubset<T, professor_classroom_accessUpsertArgs<ExtArgs>>): Prisma__professor_classroom_accessClient<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professor_classroom_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professor_classroom_accessCountArgs} args - Arguments to filter Professor_classroom_accesses to count.
     * @example
     * // Count the number of Professor_classroom_accesses
     * const count = await prisma.professor_classroom_access.count({
     *   where: {
     *     // ... the filter for the Professor_classroom_accesses we want to count
     *   }
     * })
    **/
    count<T extends professor_classroom_accessCountArgs>(
      args?: Subset<T, professor_classroom_accessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Professor_classroom_accessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor_classroom_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Professor_classroom_accessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Professor_classroom_accessAggregateArgs>(args: Subset<T, Professor_classroom_accessAggregateArgs>): Prisma.PrismaPromise<GetProfessor_classroom_accessAggregateType<T>>

    /**
     * Group by Professor_classroom_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professor_classroom_accessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends professor_classroom_accessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professor_classroom_accessGroupByArgs['orderBy'] }
        : { orderBy?: professor_classroom_accessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, professor_classroom_accessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessor_classroom_accessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professor_classroom_access model
   */
  readonly fields: professor_classroom_accessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professor_classroom_access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professor_classroom_accessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classrooms<T extends professor_classroom_access$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, professor_classroom_access$classroomsArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professors<T extends professor_classroom_access$professorsArgs<ExtArgs> = {}>(args?: Subset<T, professor_classroom_access$professorsArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the professor_classroom_access model
   */
  interface professor_classroom_accessFieldRefs {
    readonly id: FieldRef<"professor_classroom_access", 'Int'>
    readonly professor_id: FieldRef<"professor_classroom_access", 'Int'>
    readonly classroom_id: FieldRef<"professor_classroom_access", 'Int'>
    readonly timestamp: FieldRef<"professor_classroom_access", 'DateTime'>
    readonly action: FieldRef<"professor_classroom_access", 'String'>
    readonly verified: FieldRef<"professor_classroom_access", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * professor_classroom_access findUnique
   */
  export type professor_classroom_accessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * Filter, which professor_classroom_access to fetch.
     */
    where: professor_classroom_accessWhereUniqueInput
  }

  /**
   * professor_classroom_access findUniqueOrThrow
   */
  export type professor_classroom_accessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * Filter, which professor_classroom_access to fetch.
     */
    where: professor_classroom_accessWhereUniqueInput
  }

  /**
   * professor_classroom_access findFirst
   */
  export type professor_classroom_accessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * Filter, which professor_classroom_access to fetch.
     */
    where?: professor_classroom_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professor_classroom_accesses to fetch.
     */
    orderBy?: professor_classroom_accessOrderByWithRelationInput | professor_classroom_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professor_classroom_accesses.
     */
    cursor?: professor_classroom_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professor_classroom_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professor_classroom_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professor_classroom_accesses.
     */
    distinct?: Professor_classroom_accessScalarFieldEnum | Professor_classroom_accessScalarFieldEnum[]
  }

  /**
   * professor_classroom_access findFirstOrThrow
   */
  export type professor_classroom_accessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * Filter, which professor_classroom_access to fetch.
     */
    where?: professor_classroom_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professor_classroom_accesses to fetch.
     */
    orderBy?: professor_classroom_accessOrderByWithRelationInput | professor_classroom_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professor_classroom_accesses.
     */
    cursor?: professor_classroom_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professor_classroom_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professor_classroom_accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professor_classroom_accesses.
     */
    distinct?: Professor_classroom_accessScalarFieldEnum | Professor_classroom_accessScalarFieldEnum[]
  }

  /**
   * professor_classroom_access findMany
   */
  export type professor_classroom_accessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * Filter, which professor_classroom_accesses to fetch.
     */
    where?: professor_classroom_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professor_classroom_accesses to fetch.
     */
    orderBy?: professor_classroom_accessOrderByWithRelationInput | professor_classroom_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professor_classroom_accesses.
     */
    cursor?: professor_classroom_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professor_classroom_accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professor_classroom_accesses.
     */
    skip?: number
    distinct?: Professor_classroom_accessScalarFieldEnum | Professor_classroom_accessScalarFieldEnum[]
  }

  /**
   * professor_classroom_access create
   */
  export type professor_classroom_accessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * The data needed to create a professor_classroom_access.
     */
    data: XOR<professor_classroom_accessCreateInput, professor_classroom_accessUncheckedCreateInput>
  }

  /**
   * professor_classroom_access createMany
   */
  export type professor_classroom_accessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professor_classroom_accesses.
     */
    data: professor_classroom_accessCreateManyInput | professor_classroom_accessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professor_classroom_access createManyAndReturn
   */
  export type professor_classroom_accessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * The data used to create many professor_classroom_accesses.
     */
    data: professor_classroom_accessCreateManyInput | professor_classroom_accessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * professor_classroom_access update
   */
  export type professor_classroom_accessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * The data needed to update a professor_classroom_access.
     */
    data: XOR<professor_classroom_accessUpdateInput, professor_classroom_accessUncheckedUpdateInput>
    /**
     * Choose, which professor_classroom_access to update.
     */
    where: professor_classroom_accessWhereUniqueInput
  }

  /**
   * professor_classroom_access updateMany
   */
  export type professor_classroom_accessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professor_classroom_accesses.
     */
    data: XOR<professor_classroom_accessUpdateManyMutationInput, professor_classroom_accessUncheckedUpdateManyInput>
    /**
     * Filter which professor_classroom_accesses to update
     */
    where?: professor_classroom_accessWhereInput
    /**
     * Limit how many professor_classroom_accesses to update.
     */
    limit?: number
  }

  /**
   * professor_classroom_access updateManyAndReturn
   */
  export type professor_classroom_accessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * The data used to update professor_classroom_accesses.
     */
    data: XOR<professor_classroom_accessUpdateManyMutationInput, professor_classroom_accessUncheckedUpdateManyInput>
    /**
     * Filter which professor_classroom_accesses to update
     */
    where?: professor_classroom_accessWhereInput
    /**
     * Limit how many professor_classroom_accesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * professor_classroom_access upsert
   */
  export type professor_classroom_accessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * The filter to search for the professor_classroom_access to update in case it exists.
     */
    where: professor_classroom_accessWhereUniqueInput
    /**
     * In case the professor_classroom_access found by the `where` argument doesn't exist, create a new professor_classroom_access with this data.
     */
    create: XOR<professor_classroom_accessCreateInput, professor_classroom_accessUncheckedCreateInput>
    /**
     * In case the professor_classroom_access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professor_classroom_accessUpdateInput, professor_classroom_accessUncheckedUpdateInput>
  }

  /**
   * professor_classroom_access delete
   */
  export type professor_classroom_accessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    /**
     * Filter which professor_classroom_access to delete.
     */
    where: professor_classroom_accessWhereUniqueInput
  }

  /**
   * professor_classroom_access deleteMany
   */
  export type professor_classroom_accessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professor_classroom_accesses to delete
     */
    where?: professor_classroom_accessWhereInput
    /**
     * Limit how many professor_classroom_accesses to delete.
     */
    limit?: number
  }

  /**
   * professor_classroom_access.classrooms
   */
  export type professor_classroom_access$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    where?: classroomsWhereInput
  }

  /**
   * professor_classroom_access.professors
   */
  export type professor_classroom_access$professorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    where?: professorsWhereInput
  }

  /**
   * professor_classroom_access without action
   */
  export type professor_classroom_accessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
  }


  /**
   * Model professors
   */

  export type AggregateProfessors = {
    _count: ProfessorsCountAggregateOutputType | null
    _avg: ProfessorsAvgAggregateOutputType | null
    _sum: ProfessorsSumAggregateOutputType | null
    _min: ProfessorsMinAggregateOutputType | null
    _max: ProfessorsMaxAggregateOutputType | null
  }

  export type ProfessorsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfessorsSumAggregateOutputType = {
    id: number | null
  }

  export type ProfessorsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    fingerprint_id: string | null
    status: string | null
    created_at: Date | null
  }

  export type ProfessorsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    fingerprint_id: string | null
    status: string | null
    created_at: Date | null
  }

  export type ProfessorsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    fingerprint_id: number
    status: number
    created_at: number
    _all: number
  }


  export type ProfessorsAvgAggregateInputType = {
    id?: true
  }

  export type ProfessorsSumAggregateInputType = {
    id?: true
  }

  export type ProfessorsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    fingerprint_id?: true
    status?: true
    created_at?: true
  }

  export type ProfessorsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    fingerprint_id?: true
    status?: true
    created_at?: true
  }

  export type ProfessorsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    fingerprint_id?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ProfessorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professors to aggregate.
     */
    where?: professorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorsOrderByWithRelationInput | professorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professors
    **/
    _count?: true | ProfessorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorsMaxAggregateInputType
  }

  export type GetProfessorsAggregateType<T extends ProfessorsAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessors[P]>
      : GetScalarType<T[P], AggregateProfessors[P]>
  }




  export type professorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professorsWhereInput
    orderBy?: professorsOrderByWithAggregationInput | professorsOrderByWithAggregationInput[]
    by: ProfessorsScalarFieldEnum[] | ProfessorsScalarFieldEnum
    having?: professorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorsCountAggregateInputType | true
    _avg?: ProfessorsAvgAggregateInputType
    _sum?: ProfessorsSumAggregateInputType
    _min?: ProfessorsMinAggregateInputType
    _max?: ProfessorsMaxAggregateInputType
  }

  export type ProfessorsGroupByOutputType = {
    id: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status: string | null
    created_at: Date | null
    _count: ProfessorsCountAggregateOutputType | null
    _avg: ProfessorsAvgAggregateOutputType | null
    _sum: ProfessorsSumAggregateOutputType | null
    _min: ProfessorsMinAggregateOutputType | null
    _max: ProfessorsMaxAggregateOutputType | null
  }

  type GetProfessorsGroupByPayload<T extends professorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorsGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorsGroupByOutputType[P]>
        }
      >
    >


  export type professorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    status?: boolean
    created_at?: boolean
    courses?: boolean | professors$coursesArgs<ExtArgs>
    professor_classroom_access?: boolean | professors$professor_classroom_accessArgs<ExtArgs>
    _count?: boolean | ProfessorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professors"]>

  export type professorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["professors"]>

  export type professorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["professors"]>

  export type professorsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type professorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "fingerprint_id" | "status" | "created_at", ExtArgs["result"]["professors"]>
  export type professorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | professors$coursesArgs<ExtArgs>
    professor_classroom_access?: boolean | professors$professor_classroom_accessArgs<ExtArgs>
    _count?: boolean | ProfessorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type professorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type professorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $professorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professors"
    objects: {
      courses: Prisma.$coursesPayload<ExtArgs>[]
      professor_classroom_access: Prisma.$professor_classroom_accessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password_hash: string
      fingerprint_id: string
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["professors"]>
    composites: {}
  }

  type professorsGetPayload<S extends boolean | null | undefined | professorsDefaultArgs> = $Result.GetResult<Prisma.$professorsPayload, S>

  type professorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorsCountAggregateInputType | true
    }

  export interface professorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professors'], meta: { name: 'professors' } }
    /**
     * Find zero or one Professors that matches the filter.
     * @param {professorsFindUniqueArgs} args - Arguments to find a Professors
     * @example
     * // Get one Professors
     * const professors = await prisma.professors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professorsFindUniqueArgs>(args: SelectSubset<T, professorsFindUniqueArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professorsFindUniqueOrThrowArgs} args - Arguments to find a Professors
     * @example
     * // Get one Professors
     * const professors = await prisma.professors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professorsFindUniqueOrThrowArgs>(args: SelectSubset<T, professorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorsFindFirstArgs} args - Arguments to find a Professors
     * @example
     * // Get one Professors
     * const professors = await prisma.professors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professorsFindFirstArgs>(args?: SelectSubset<T, professorsFindFirstArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorsFindFirstOrThrowArgs} args - Arguments to find a Professors
     * @example
     * // Get one Professors
     * const professors = await prisma.professors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professorsFindFirstOrThrowArgs>(args?: SelectSubset<T, professorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professors.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorsWithIdOnly = await prisma.professors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends professorsFindManyArgs>(args?: SelectSubset<T, professorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professors.
     * @param {professorsCreateArgs} args - Arguments to create a Professors.
     * @example
     * // Create one Professors
     * const Professors = await prisma.professors.create({
     *   data: {
     *     // ... data to create a Professors
     *   }
     * })
     * 
     */
    create<T extends professorsCreateArgs>(args: SelectSubset<T, professorsCreateArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {professorsCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professors = await prisma.professors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professorsCreateManyArgs>(args?: SelectSubset<T, professorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {professorsCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professors = await prisma.professors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id`
     * const professorsWithIdOnly = await prisma.professors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends professorsCreateManyAndReturnArgs>(args?: SelectSubset<T, professorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professors.
     * @param {professorsDeleteArgs} args - Arguments to delete one Professors.
     * @example
     * // Delete one Professors
     * const Professors = await prisma.professors.delete({
     *   where: {
     *     // ... filter to delete one Professors
     *   }
     * })
     * 
     */
    delete<T extends professorsDeleteArgs>(args: SelectSubset<T, professorsDeleteArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professors.
     * @param {professorsUpdateArgs} args - Arguments to update one Professors.
     * @example
     * // Update one Professors
     * const professors = await prisma.professors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professorsUpdateArgs>(args: SelectSubset<T, professorsUpdateArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {professorsDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professorsDeleteManyArgs>(args?: SelectSubset<T, professorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professors = await prisma.professors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professorsUpdateManyArgs>(args: SelectSubset<T, professorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {professorsUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professors = await prisma.professors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id`
     * const professorsWithIdOnly = await prisma.professors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends professorsUpdateManyAndReturnArgs>(args: SelectSubset<T, professorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professors.
     * @param {professorsUpsertArgs} args - Arguments to update or create a Professors.
     * @example
     * // Update or create a Professors
     * const professors = await prisma.professors.upsert({
     *   create: {
     *     // ... data to create a Professors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professors we want to update
     *   }
     * })
     */
    upsert<T extends professorsUpsertArgs>(args: SelectSubset<T, professorsUpsertArgs<ExtArgs>>): Prisma__professorsClient<$Result.GetResult<Prisma.$professorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorsCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professors.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends professorsCountArgs>(
      args?: Subset<T, professorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessorsAggregateArgs>(args: Subset<T, ProfessorsAggregateArgs>): Prisma.PrismaPromise<GetProfessorsAggregateType<T>>

    /**
     * Group by Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends professorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professorsGroupByArgs['orderBy'] }
        : { orderBy?: professorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, professorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professors model
   */
  readonly fields: professorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends professors$coursesArgs<ExtArgs> = {}>(args?: Subset<T, professors$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professor_classroom_access<T extends professors$professor_classroom_accessArgs<ExtArgs> = {}>(args?: Subset<T, professors$professor_classroom_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professor_classroom_accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the professors model
   */
  interface professorsFieldRefs {
    readonly id: FieldRef<"professors", 'Int'>
    readonly name: FieldRef<"professors", 'String'>
    readonly email: FieldRef<"professors", 'String'>
    readonly password_hash: FieldRef<"professors", 'String'>
    readonly fingerprint_id: FieldRef<"professors", 'String'>
    readonly status: FieldRef<"professors", 'String'>
    readonly created_at: FieldRef<"professors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * professors findUnique
   */
  export type professorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * Filter, which professors to fetch.
     */
    where: professorsWhereUniqueInput
  }

  /**
   * professors findUniqueOrThrow
   */
  export type professorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * Filter, which professors to fetch.
     */
    where: professorsWhereUniqueInput
  }

  /**
   * professors findFirst
   */
  export type professorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * Filter, which professors to fetch.
     */
    where?: professorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorsOrderByWithRelationInput | professorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professors.
     */
    cursor?: professorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professors.
     */
    distinct?: ProfessorsScalarFieldEnum | ProfessorsScalarFieldEnum[]
  }

  /**
   * professors findFirstOrThrow
   */
  export type professorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * Filter, which professors to fetch.
     */
    where?: professorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorsOrderByWithRelationInput | professorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professors.
     */
    cursor?: professorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professors.
     */
    distinct?: ProfessorsScalarFieldEnum | ProfessorsScalarFieldEnum[]
  }

  /**
   * professors findMany
   */
  export type professorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * Filter, which professors to fetch.
     */
    where?: professorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professors to fetch.
     */
    orderBy?: professorsOrderByWithRelationInput | professorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professors.
     */
    cursor?: professorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professors.
     */
    skip?: number
    distinct?: ProfessorsScalarFieldEnum | ProfessorsScalarFieldEnum[]
  }

  /**
   * professors create
   */
  export type professorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * The data needed to create a professors.
     */
    data: XOR<professorsCreateInput, professorsUncheckedCreateInput>
  }

  /**
   * professors createMany
   */
  export type professorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professors.
     */
    data: professorsCreateManyInput | professorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professors createManyAndReturn
   */
  export type professorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * The data used to create many professors.
     */
    data: professorsCreateManyInput | professorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * professors update
   */
  export type professorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * The data needed to update a professors.
     */
    data: XOR<professorsUpdateInput, professorsUncheckedUpdateInput>
    /**
     * Choose, which professors to update.
     */
    where: professorsWhereUniqueInput
  }

  /**
   * professors updateMany
   */
  export type professorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professors.
     */
    data: XOR<professorsUpdateManyMutationInput, professorsUncheckedUpdateManyInput>
    /**
     * Filter which professors to update
     */
    where?: professorsWhereInput
    /**
     * Limit how many professors to update.
     */
    limit?: number
  }

  /**
   * professors updateManyAndReturn
   */
  export type professorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * The data used to update professors.
     */
    data: XOR<professorsUpdateManyMutationInput, professorsUncheckedUpdateManyInput>
    /**
     * Filter which professors to update
     */
    where?: professorsWhereInput
    /**
     * Limit how many professors to update.
     */
    limit?: number
  }

  /**
   * professors upsert
   */
  export type professorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * The filter to search for the professors to update in case it exists.
     */
    where: professorsWhereUniqueInput
    /**
     * In case the professors found by the `where` argument doesn't exist, create a new professors with this data.
     */
    create: XOR<professorsCreateInput, professorsUncheckedCreateInput>
    /**
     * In case the professors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professorsUpdateInput, professorsUncheckedUpdateInput>
  }

  /**
   * professors delete
   */
  export type professorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
    /**
     * Filter which professors to delete.
     */
    where: professorsWhereUniqueInput
  }

  /**
   * professors deleteMany
   */
  export type professorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professors to delete
     */
    where?: professorsWhereInput
    /**
     * Limit how many professors to delete.
     */
    limit?: number
  }

  /**
   * professors.courses
   */
  export type professors$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    cursor?: coursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * professors.professor_classroom_access
   */
  export type professors$professor_classroom_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professor_classroom_access
     */
    select?: professor_classroom_accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professor_classroom_access
     */
    omit?: professor_classroom_accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professor_classroom_accessInclude<ExtArgs> | null
    where?: professor_classroom_accessWhereInput
    orderBy?: professor_classroom_accessOrderByWithRelationInput | professor_classroom_accessOrderByWithRelationInput[]
    cursor?: professor_classroom_accessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Professor_classroom_accessScalarFieldEnum | Professor_classroom_accessScalarFieldEnum[]
  }

  /**
   * professors without action
   */
  export type professorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professors
     */
    select?: professorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the professors
     */
    omit?: professorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professorsInclude<ExtArgs> | null
  }


  /**
   * Model schedules
   */

  export type AggregateSchedules = {
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  export type SchedulesAvgAggregateOutputType = {
    id: number | null
    course: number | null
    classroom_id: number | null
  }

  export type SchedulesSumAggregateOutputType = {
    id: number | null
    course: number | null
    classroom_id: number | null
  }

  export type SchedulesMinAggregateOutputType = {
    id: number | null
    course: number | null
    classroom_id: number | null
    day_of_week: string | null
    start_time: Date | null
    end_time: Date | null
  }

  export type SchedulesMaxAggregateOutputType = {
    id: number | null
    course: number | null
    classroom_id: number | null
    day_of_week: string | null
    start_time: Date | null
    end_time: Date | null
  }

  export type SchedulesCountAggregateOutputType = {
    id: number
    course: number
    classroom_id: number
    day_of_week: number
    start_time: number
    end_time: number
    _all: number
  }


  export type SchedulesAvgAggregateInputType = {
    id?: true
    course?: true
    classroom_id?: true
  }

  export type SchedulesSumAggregateInputType = {
    id?: true
    course?: true
    classroom_id?: true
  }

  export type SchedulesMinAggregateInputType = {
    id?: true
    course?: true
    classroom_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
  }

  export type SchedulesMaxAggregateInputType = {
    id?: true
    course?: true
    classroom_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
  }

  export type SchedulesCountAggregateInputType = {
    id?: true
    course?: true
    classroom_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type SchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to aggregate.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | SchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulesMaxAggregateInputType
  }

  export type GetSchedulesAggregateType<T extends SchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedules[P]>
      : GetScalarType<T[P], AggregateSchedules[P]>
  }




  export type schedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithAggregationInput | schedulesOrderByWithAggregationInput[]
    by: SchedulesScalarFieldEnum[] | SchedulesScalarFieldEnum
    having?: schedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulesCountAggregateInputType | true
    _avg?: SchedulesAvgAggregateInputType
    _sum?: SchedulesSumAggregateInputType
    _min?: SchedulesMinAggregateInputType
    _max?: SchedulesMaxAggregateInputType
  }

  export type SchedulesGroupByOutputType = {
    id: number
    course: number | null
    classroom_id: number | null
    day_of_week: string
    start_time: Date
    end_time: Date
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  type GetSchedulesGroupByPayload<T extends schedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
        }
      >
    >


  export type schedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    classroom_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    classrooms?: boolean | schedules$classroomsArgs<ExtArgs>
    courses?: boolean | schedules$coursesArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    classroom_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    classrooms?: boolean | schedules$classroomsArgs<ExtArgs>
    courses?: boolean | schedules$coursesArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    classroom_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    classrooms?: boolean | schedules$classroomsArgs<ExtArgs>
    courses?: boolean | schedules$coursesArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectScalar = {
    id?: boolean
    course?: boolean
    classroom_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type schedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course" | "classroom_id" | "day_of_week" | "start_time" | "end_time", ExtArgs["result"]["schedules"]>
  export type schedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | schedules$classroomsArgs<ExtArgs>
    courses?: boolean | schedules$coursesArgs<ExtArgs>
  }
  export type schedulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | schedules$classroomsArgs<ExtArgs>
    courses?: boolean | schedules$coursesArgs<ExtArgs>
  }
  export type schedulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | schedules$classroomsArgs<ExtArgs>
    courses?: boolean | schedules$coursesArgs<ExtArgs>
  }

  export type $schedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedules"
    objects: {
      classrooms: Prisma.$classroomsPayload<ExtArgs> | null
      courses: Prisma.$coursesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      course: number | null
      classroom_id: number | null
      day_of_week: string
      start_time: Date
      end_time: Date
    }, ExtArgs["result"]["schedules"]>
    composites: {}
  }

  type schedulesGetPayload<S extends boolean | null | undefined | schedulesDefaultArgs> = $Result.GetResult<Prisma.$schedulesPayload, S>

  type schedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulesCountAggregateInputType | true
    }

  export interface schedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedules'], meta: { name: 'schedules' } }
    /**
     * Find zero or one Schedules that matches the filter.
     * @param {schedulesFindUniqueArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schedulesFindUniqueArgs>(args: SelectSubset<T, schedulesFindUniqueArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schedulesFindUniqueOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, schedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schedulesFindFirstArgs>(args?: SelectSubset<T, schedulesFindFirstArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, schedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedules.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulesWithIdOnly = await prisma.schedules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends schedulesFindManyArgs>(args?: SelectSubset<T, schedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedules.
     * @param {schedulesCreateArgs} args - Arguments to create a Schedules.
     * @example
     * // Create one Schedules
     * const Schedules = await prisma.schedules.create({
     *   data: {
     *     // ... data to create a Schedules
     *   }
     * })
     * 
     */
    create<T extends schedulesCreateArgs>(args: SelectSubset<T, schedulesCreateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {schedulesCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schedulesCreateManyArgs>(args?: SelectSubset<T, schedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {schedulesCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const schedulesWithIdOnly = await prisma.schedules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends schedulesCreateManyAndReturnArgs>(args?: SelectSubset<T, schedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedules.
     * @param {schedulesDeleteArgs} args - Arguments to delete one Schedules.
     * @example
     * // Delete one Schedules
     * const Schedules = await prisma.schedules.delete({
     *   where: {
     *     // ... filter to delete one Schedules
     *   }
     * })
     * 
     */
    delete<T extends schedulesDeleteArgs>(args: SelectSubset<T, schedulesDeleteArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedules.
     * @param {schedulesUpdateArgs} args - Arguments to update one Schedules.
     * @example
     * // Update one Schedules
     * const schedules = await prisma.schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schedulesUpdateArgs>(args: SelectSubset<T, schedulesUpdateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {schedulesDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schedulesDeleteManyArgs>(args?: SelectSubset<T, schedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schedulesUpdateManyArgs>(args: SelectSubset<T, schedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {schedulesUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const schedulesWithIdOnly = await prisma.schedules.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends schedulesUpdateManyAndReturnArgs>(args: SelectSubset<T, schedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedules.
     * @param {schedulesUpsertArgs} args - Arguments to update or create a Schedules.
     * @example
     * // Update or create a Schedules
     * const schedules = await prisma.schedules.upsert({
     *   create: {
     *     // ... data to create a Schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedules we want to update
     *   }
     * })
     */
    upsert<T extends schedulesUpsertArgs>(args: SelectSubset<T, schedulesUpsertArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedules.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends schedulesCountArgs>(
      args?: Subset<T, schedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchedulesAggregateArgs>(args: Subset<T, SchedulesAggregateArgs>): Prisma.PrismaPromise<GetSchedulesAggregateType<T>>

    /**
     * Group by Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends schedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schedulesGroupByArgs['orderBy'] }
        : { orderBy?: schedulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, schedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedules model
   */
  readonly fields: schedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classrooms<T extends schedules$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, schedules$classroomsArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courses<T extends schedules$coursesArgs<ExtArgs> = {}>(args?: Subset<T, schedules$coursesArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schedules model
   */
  interface schedulesFieldRefs {
    readonly id: FieldRef<"schedules", 'Int'>
    readonly course: FieldRef<"schedules", 'Int'>
    readonly classroom_id: FieldRef<"schedules", 'Int'>
    readonly day_of_week: FieldRef<"schedules", 'String'>
    readonly start_time: FieldRef<"schedules", 'DateTime'>
    readonly end_time: FieldRef<"schedules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * schedules findUnique
   */
  export type schedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findUniqueOrThrow
   */
  export type schedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findFirst
   */
  export type schedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findFirstOrThrow
   */
  export type schedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findMany
   */
  export type schedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules create
   */
  export type schedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a schedules.
     */
    data: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
  }

  /**
   * schedules createMany
   */
  export type schedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: schedulesCreateManyInput | schedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedules createManyAndReturn
   */
  export type schedulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * The data used to create many schedules.
     */
    data: schedulesCreateManyInput | schedulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedules update
   */
  export type schedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a schedules.
     */
    data: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
    /**
     * Choose, which schedules to update.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules updateMany
   */
  export type schedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedules updateManyAndReturn
   */
  export type schedulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedules upsert
   */
  export type schedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the schedules to update in case it exists.
     */
    where: schedulesWhereUniqueInput
    /**
     * In case the schedules found by the `where` argument doesn't exist, create a new schedules with this data.
     */
    create: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
    /**
     * In case the schedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
  }

  /**
   * schedules delete
   */
  export type schedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter which schedules to delete.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules deleteMany
   */
  export type schedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to delete.
     */
    limit?: number
  }

  /**
   * schedules.classrooms
   */
  export type schedules$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    where?: classroomsWhereInput
  }

  /**
   * schedules.courses
   */
  export type schedules$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
  }

  /**
   * schedules without action
   */
  export type schedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
  }


  /**
   * Model sections
   */

  export type AggregateSections = {
    _count: SectionsCountAggregateOutputType | null
    _avg: SectionsAvgAggregateOutputType | null
    _sum: SectionsSumAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  export type SectionsAvgAggregateOutputType = {
    id: number | null
    academic_year_id: number | null
  }

  export type SectionsSumAggregateOutputType = {
    id: number | null
    academic_year_id: number | null
  }

  export type SectionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    academic_year_id: number | null
  }

  export type SectionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    academic_year_id: number | null
  }

  export type SectionsCountAggregateOutputType = {
    id: number
    name: number
    academic_year_id: number
    _all: number
  }


  export type SectionsAvgAggregateInputType = {
    id?: true
    academic_year_id?: true
  }

  export type SectionsSumAggregateInputType = {
    id?: true
    academic_year_id?: true
  }

  export type SectionsMinAggregateInputType = {
    id?: true
    name?: true
    academic_year_id?: true
  }

  export type SectionsMaxAggregateInputType = {
    id?: true
    name?: true
    academic_year_id?: true
  }

  export type SectionsCountAggregateInputType = {
    id?: true
    name?: true
    academic_year_id?: true
    _all?: true
  }

  export type SectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sections to aggregate.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sections
    **/
    _count?: true | SectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionsMaxAggregateInputType
  }

  export type GetSectionsAggregateType<T extends SectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSections[P]>
      : GetScalarType<T[P], AggregateSections[P]>
  }




  export type sectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionsWhereInput
    orderBy?: sectionsOrderByWithAggregationInput | sectionsOrderByWithAggregationInput[]
    by: SectionsScalarFieldEnum[] | SectionsScalarFieldEnum
    having?: sectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionsCountAggregateInputType | true
    _avg?: SectionsAvgAggregateInputType
    _sum?: SectionsSumAggregateInputType
    _min?: SectionsMinAggregateInputType
    _max?: SectionsMaxAggregateInputType
  }

  export type SectionsGroupByOutputType = {
    id: number
    name: string
    academic_year_id: number | null
    _count: SectionsCountAggregateOutputType | null
    _avg: SectionsAvgAggregateOutputType | null
    _sum: SectionsSumAggregateOutputType | null
    _min: SectionsMinAggregateOutputType | null
    _max: SectionsMaxAggregateOutputType | null
  }

  type GetSectionsGroupByPayload<T extends sectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionsGroupByOutputType[P]>
            : GetScalarType<T[P], SectionsGroupByOutputType[P]>
        }
      >
    >


  export type sectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    academic_year_id?: boolean
    courses?: boolean | sections$coursesArgs<ExtArgs>
    groups?: boolean | sections$groupsArgs<ExtArgs>
    academic_years?: boolean | sections$academic_yearsArgs<ExtArgs>
    students?: boolean | sections$studentsArgs<ExtArgs>
    _count?: boolean | SectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type sectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    academic_year_id?: boolean
    academic_years?: boolean | sections$academic_yearsArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type sectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    academic_year_id?: boolean
    academic_years?: boolean | sections$academic_yearsArgs<ExtArgs>
  }, ExtArgs["result"]["sections"]>

  export type sectionsSelectScalar = {
    id?: boolean
    name?: boolean
    academic_year_id?: boolean
  }

  export type sectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "academic_year_id", ExtArgs["result"]["sections"]>
  export type sectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | sections$coursesArgs<ExtArgs>
    groups?: boolean | sections$groupsArgs<ExtArgs>
    academic_years?: boolean | sections$academic_yearsArgs<ExtArgs>
    students?: boolean | sections$studentsArgs<ExtArgs>
    _count?: boolean | SectionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academic_years?: boolean | sections$academic_yearsArgs<ExtArgs>
  }
  export type sectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academic_years?: boolean | sections$academic_yearsArgs<ExtArgs>
  }

  export type $sectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sections"
    objects: {
      courses: Prisma.$coursesPayload<ExtArgs>[]
      groups: Prisma.$groupsPayload<ExtArgs>[]
      academic_years: Prisma.$academic_yearsPayload<ExtArgs> | null
      students: Prisma.$studentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      academic_year_id: number | null
    }, ExtArgs["result"]["sections"]>
    composites: {}
  }

  type sectionsGetPayload<S extends boolean | null | undefined | sectionsDefaultArgs> = $Result.GetResult<Prisma.$sectionsPayload, S>

  type sectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionsCountAggregateInputType | true
    }

  export interface sectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sections'], meta: { name: 'sections' } }
    /**
     * Find zero or one Sections that matches the filter.
     * @param {sectionsFindUniqueArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sectionsFindUniqueArgs>(args: SelectSubset<T, sectionsFindUniqueArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sectionsFindUniqueOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindFirstArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sectionsFindFirstArgs>(args?: SelectSubset<T, sectionsFindFirstArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindFirstOrThrowArgs} args - Arguments to find a Sections
     * @example
     * // Get one Sections
     * const sections = await prisma.sections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.sections.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.sections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionsWithIdOnly = await prisma.sections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sectionsFindManyArgs>(args?: SelectSubset<T, sectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sections.
     * @param {sectionsCreateArgs} args - Arguments to create a Sections.
     * @example
     * // Create one Sections
     * const Sections = await prisma.sections.create({
     *   data: {
     *     // ... data to create a Sections
     *   }
     * })
     * 
     */
    create<T extends sectionsCreateArgs>(args: SelectSubset<T, sectionsCreateArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {sectionsCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const sections = await prisma.sections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sectionsCreateManyArgs>(args?: SelectSubset<T, sectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {sectionsCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const sections = await prisma.sections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionsWithIdOnly = await prisma.sections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sections.
     * @param {sectionsDeleteArgs} args - Arguments to delete one Sections.
     * @example
     * // Delete one Sections
     * const Sections = await prisma.sections.delete({
     *   where: {
     *     // ... filter to delete one Sections
     *   }
     * })
     * 
     */
    delete<T extends sectionsDeleteArgs>(args: SelectSubset<T, sectionsDeleteArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sections.
     * @param {sectionsUpdateArgs} args - Arguments to update one Sections.
     * @example
     * // Update one Sections
     * const sections = await prisma.sections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sectionsUpdateArgs>(args: SelectSubset<T, sectionsUpdateArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {sectionsDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.sections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sectionsDeleteManyArgs>(args?: SelectSubset<T, sectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const sections = await prisma.sections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sectionsUpdateManyArgs>(args: SelectSubset<T, sectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {sectionsUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const sections = await prisma.sections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionsWithIdOnly = await prisma.sections.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sections.
     * @param {sectionsUpsertArgs} args - Arguments to update or create a Sections.
     * @example
     * // Update or create a Sections
     * const sections = await prisma.sections.upsert({
     *   create: {
     *     // ... data to create a Sections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sections we want to update
     *   }
     * })
     */
    upsert<T extends sectionsUpsertArgs>(args: SelectSubset<T, sectionsUpsertArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.sections.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends sectionsCountArgs>(
      args?: Subset<T, sectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionsAggregateArgs>(args: Subset<T, SectionsAggregateArgs>): Prisma.PrismaPromise<GetSectionsAggregateType<T>>

    /**
     * Group by Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sectionsGroupByArgs['orderBy'] }
        : { orderBy?: sectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sections model
   */
  readonly fields: sectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends sections$coursesArgs<ExtArgs> = {}>(args?: Subset<T, sections$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends sections$groupsArgs<ExtArgs> = {}>(args?: Subset<T, sections$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    academic_years<T extends sections$academic_yearsArgs<ExtArgs> = {}>(args?: Subset<T, sections$academic_yearsArgs<ExtArgs>>): Prisma__academic_yearsClient<$Result.GetResult<Prisma.$academic_yearsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    students<T extends sections$studentsArgs<ExtArgs> = {}>(args?: Subset<T, sections$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sections model
   */
  interface sectionsFieldRefs {
    readonly id: FieldRef<"sections", 'Int'>
    readonly name: FieldRef<"sections", 'String'>
    readonly academic_year_id: FieldRef<"sections", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sections findUnique
   */
  export type sectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections findUniqueOrThrow
   */
  export type sectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections findFirst
   */
  export type sectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * sections findFirstOrThrow
   */
  export type sectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * sections findMany
   */
  export type sectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionsOrderByWithRelationInput | sectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sections.
     */
    cursor?: sectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    distinct?: SectionsScalarFieldEnum | SectionsScalarFieldEnum[]
  }

  /**
   * sections create
   */
  export type sectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sections.
     */
    data: XOR<sectionsCreateInput, sectionsUncheckedCreateInput>
  }

  /**
   * sections createMany
   */
  export type sectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sections.
     */
    data: sectionsCreateManyInput | sectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sections createManyAndReturn
   */
  export type sectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * The data used to create many sections.
     */
    data: sectionsCreateManyInput | sectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sections update
   */
  export type sectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sections.
     */
    data: XOR<sectionsUpdateInput, sectionsUncheckedUpdateInput>
    /**
     * Choose, which sections to update.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections updateMany
   */
  export type sectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sections.
     */
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyInput>
    /**
     * Filter which sections to update
     */
    where?: sectionsWhereInput
    /**
     * Limit how many sections to update.
     */
    limit?: number
  }

  /**
   * sections updateManyAndReturn
   */
  export type sectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * The data used to update sections.
     */
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyInput>
    /**
     * Filter which sections to update
     */
    where?: sectionsWhereInput
    /**
     * Limit how many sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sections upsert
   */
  export type sectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sections to update in case it exists.
     */
    where: sectionsWhereUniqueInput
    /**
     * In case the sections found by the `where` argument doesn't exist, create a new sections with this data.
     */
    create: XOR<sectionsCreateInput, sectionsUncheckedCreateInput>
    /**
     * In case the sections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sectionsUpdateInput, sectionsUncheckedUpdateInput>
  }

  /**
   * sections delete
   */
  export type sectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    /**
     * Filter which sections to delete.
     */
    where: sectionsWhereUniqueInput
  }

  /**
   * sections deleteMany
   */
  export type sectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sections to delete
     */
    where?: sectionsWhereInput
    /**
     * Limit how many sections to delete.
     */
    limit?: number
  }

  /**
   * sections.courses
   */
  export type sections$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courses
     */
    omit?: coursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coursesInclude<ExtArgs> | null
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    cursor?: coursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * sections.groups
   */
  export type sections$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    cursor?: groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * sections.academic_years
   */
  export type sections$academic_yearsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic_years
     */
    select?: academic_yearsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic_years
     */
    omit?: academic_yearsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: academic_yearsInclude<ExtArgs> | null
    where?: academic_yearsWhereInput
  }

  /**
   * sections.students
   */
  export type sections$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * sections without action
   */
  export type sectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
  }


  /**
   * Model students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    id: number | null
    group_id: number | null
    section_id: number | null
  }

  export type StudentsSumAggregateOutputType = {
    id: number | null
    group_id: number | null
    section_id: number | null
  }

  export type StudentsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    fingerprint_id: string | null
    group_id: number | null
    section_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    fingerprint_id: string | null
    group_id: number | null
    section_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    fingerprint_id: number
    group_id: number
    section_id: number
    status: number
    created_at: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    id?: true
    group_id?: true
    section_id?: true
  }

  export type StudentsSumAggregateInputType = {
    id?: true
    group_id?: true
    section_id?: true
  }

  export type StudentsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    fingerprint_id?: true
    group_id?: true
    section_id?: true
    status?: true
    created_at?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    fingerprint_id?: true
    group_id?: true
    section_id?: true
    status?: true
    created_at?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    fingerprint_id?: true
    group_id?: true
    section_id?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithAggregationInput | studentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    group_id: number | null
    section_id: number | null
    status: string | null
    created_at: Date | null
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    group_id?: boolean
    section_id?: boolean
    status?: boolean
    created_at?: boolean
    attendance?: boolean | students$attendanceArgs<ExtArgs>
    groups?: boolean | students$groupsArgs<ExtArgs>
    sections?: boolean | students$sectionsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    group_id?: boolean
    section_id?: boolean
    status?: boolean
    created_at?: boolean
    groups?: boolean | students$groupsArgs<ExtArgs>
    sections?: boolean | students$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    group_id?: boolean
    section_id?: boolean
    status?: boolean
    created_at?: boolean
    groups?: boolean | students$groupsArgs<ExtArgs>
    sections?: boolean | students$sectionsArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type studentsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    fingerprint_id?: boolean
    group_id?: boolean
    section_id?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type studentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "fingerprint_id" | "group_id" | "section_id" | "status" | "created_at", ExtArgs["result"]["students"]>
  export type studentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | students$attendanceArgs<ExtArgs>
    groups?: boolean | students$groupsArgs<ExtArgs>
    sections?: boolean | students$sectionsArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | students$groupsArgs<ExtArgs>
    sections?: boolean | students$sectionsArgs<ExtArgs>
  }
  export type studentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | students$groupsArgs<ExtArgs>
    sections?: boolean | students$sectionsArgs<ExtArgs>
  }

  export type $studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students"
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[]
      groups: Prisma.$groupsPayload<ExtArgs> | null
      sections: Prisma.$sectionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password_hash: string
      fingerprint_id: string
      group_id: number | null
      section_id: number | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = $Result.GetResult<Prisma.$studentsPayload, S>

  type studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students'], meta: { name: 'students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentsFindUniqueArgs>(args: SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(args: SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentsFindFirstArgs>(args?: SelectSubset<T, studentsFindFirstArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(args?: SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentsFindManyArgs>(args?: SelectSubset<T, studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends studentsCreateArgs>(args: SelectSubset<T, studentsCreateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentsCreateManyArgs>(args?: SelectSubset<T, studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentsCreateManyAndReturnArgs>(args?: SelectSubset<T, studentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends studentsDeleteArgs>(args: SelectSubset<T, studentsDeleteArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentsUpdateArgs>(args: SelectSubset<T, studentsUpdateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentsDeleteManyArgs>(args?: SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentsUpdateManyArgs>(args: SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends studentsUpdateManyAndReturnArgs>(args: SelectSubset<T, studentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends studentsUpsertArgs>(args: SelectSubset<T, studentsUpsertArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentsGroupByArgs['orderBy'] }
        : { orderBy?: studentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students model
   */
  readonly fields: studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends students$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, students$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends students$groupsArgs<ExtArgs> = {}>(args?: Subset<T, students$groupsArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sections<T extends students$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, students$sectionsArgs<ExtArgs>>): Prisma__sectionsClient<$Result.GetResult<Prisma.$sectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the students model
   */
  interface studentsFieldRefs {
    readonly id: FieldRef<"students", 'Int'>
    readonly name: FieldRef<"students", 'String'>
    readonly email: FieldRef<"students", 'String'>
    readonly password_hash: FieldRef<"students", 'String'>
    readonly fingerprint_id: FieldRef<"students", 'String'>
    readonly group_id: FieldRef<"students", 'Int'>
    readonly section_id: FieldRef<"students", 'Int'>
    readonly status: FieldRef<"students", 'String'>
    readonly created_at: FieldRef<"students", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * students findUnique
   */
  export type studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findFirst
   */
  export type studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findMany
   */
  export type studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students create
   */
  export type studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }

  /**
   * students createMany
   */
  export type studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * students createManyAndReturn
   */
  export type studentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * students update
   */
  export type studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * students updateManyAndReturn
   */
  export type studentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * students upsert
   */
  export type studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }

  /**
   * students delete
   */
  export type studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * students.attendance
   */
  export type students$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * students.groups
   */
  export type students$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
  }

  /**
   * students.sections
   */
  export type students$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sections
     */
    select?: sectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sections
     */
    omit?: sectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionsInclude<ExtArgs> | null
    where?: sectionsWhereInput
  }

  /**
   * students without action
   */
  export type studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Academic_yearsScalarFieldEnum: {
    id: 'id',
    annee: 'annee',
    specialite: 'specialite',
    faculte: 'faculte'
  };

  export type Academic_yearsScalarFieldEnum = (typeof Academic_yearsScalarFieldEnum)[keyof typeof Academic_yearsScalarFieldEnum]


  export const AdminsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    classroom_id: 'classroom_id',
    course_id: 'course_id',
    timestamp: 'timestamp',
    statut: 'statut',
    verified: 'verified'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const ClassroomsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    status: 'status'
  };

  export type ClassroomsScalarFieldEnum = (typeof ClassroomsScalarFieldEnum)[keyof typeof ClassroomsScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    section_id: 'section_id',
    professeur_id: 'professeur_id',
    room: 'room'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    section_id: 'section_id'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const Professor_classroom_accessScalarFieldEnum: {
    id: 'id',
    professor_id: 'professor_id',
    classroom_id: 'classroom_id',
    timestamp: 'timestamp',
    action: 'action',
    verified: 'verified'
  };

  export type Professor_classroom_accessScalarFieldEnum = (typeof Professor_classroom_accessScalarFieldEnum)[keyof typeof Professor_classroom_accessScalarFieldEnum]


  export const ProfessorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    fingerprint_id: 'fingerprint_id',
    status: 'status',
    created_at: 'created_at'
  };

  export type ProfessorsScalarFieldEnum = (typeof ProfessorsScalarFieldEnum)[keyof typeof ProfessorsScalarFieldEnum]


  export const SchedulesScalarFieldEnum: {
    id: 'id',
    course: 'course',
    classroom_id: 'classroom_id',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type SchedulesScalarFieldEnum = (typeof SchedulesScalarFieldEnum)[keyof typeof SchedulesScalarFieldEnum]


  export const SectionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    academic_year_id: 'academic_year_id'
  };

  export type SectionsScalarFieldEnum = (typeof SectionsScalarFieldEnum)[keyof typeof SectionsScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    fingerprint_id: 'fingerprint_id',
    group_id: 'group_id',
    section_id: 'section_id',
    status: 'status',
    created_at: 'created_at'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type academic_yearsWhereInput = {
    AND?: academic_yearsWhereInput | academic_yearsWhereInput[]
    OR?: academic_yearsWhereInput[]
    NOT?: academic_yearsWhereInput | academic_yearsWhereInput[]
    id?: IntFilter<"academic_years"> | number
    annee?: StringFilter<"academic_years"> | string
    specialite?: StringFilter<"academic_years"> | string
    faculte?: StringFilter<"academic_years"> | string
    sections?: SectionsListRelationFilter
  }

  export type academic_yearsOrderByWithRelationInput = {
    id?: SortOrder
    annee?: SortOrder
    specialite?: SortOrder
    faculte?: SortOrder
    sections?: sectionsOrderByRelationAggregateInput
  }

  export type academic_yearsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: academic_yearsWhereInput | academic_yearsWhereInput[]
    OR?: academic_yearsWhereInput[]
    NOT?: academic_yearsWhereInput | academic_yearsWhereInput[]
    annee?: StringFilter<"academic_years"> | string
    specialite?: StringFilter<"academic_years"> | string
    faculte?: StringFilter<"academic_years"> | string
    sections?: SectionsListRelationFilter
  }, "id">

  export type academic_yearsOrderByWithAggregationInput = {
    id?: SortOrder
    annee?: SortOrder
    specialite?: SortOrder
    faculte?: SortOrder
    _count?: academic_yearsCountOrderByAggregateInput
    _avg?: academic_yearsAvgOrderByAggregateInput
    _max?: academic_yearsMaxOrderByAggregateInput
    _min?: academic_yearsMinOrderByAggregateInput
    _sum?: academic_yearsSumOrderByAggregateInput
  }

  export type academic_yearsScalarWhereWithAggregatesInput = {
    AND?: academic_yearsScalarWhereWithAggregatesInput | academic_yearsScalarWhereWithAggregatesInput[]
    OR?: academic_yearsScalarWhereWithAggregatesInput[]
    NOT?: academic_yearsScalarWhereWithAggregatesInput | academic_yearsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"academic_years"> | number
    annee?: StringWithAggregatesFilter<"academic_years"> | string
    specialite?: StringWithAggregatesFilter<"academic_years"> | string
    faculte?: StringWithAggregatesFilter<"academic_years"> | string
  }

  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    id?: IntFilter<"admins"> | number
    name?: StringFilter<"admins"> | string
    email?: StringFilter<"admins"> | string
    password_hash?: StringFilter<"admins"> | string
    created_at?: DateTimeNullableFilter<"admins"> | Date | string | null
  }

  export type adminsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type adminsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    name?: StringFilter<"admins"> | string
    password_hash?: StringFilter<"admins"> | string
    created_at?: DateTimeNullableFilter<"admins"> | Date | string | null
  }, "id" | "email">

  export type adminsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: adminsCountOrderByAggregateInput
    _avg?: adminsAvgOrderByAggregateInput
    _max?: adminsMaxOrderByAggregateInput
    _min?: adminsMinOrderByAggregateInput
    _sum?: adminsSumOrderByAggregateInput
  }

  export type adminsScalarWhereWithAggregatesInput = {
    AND?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    OR?: adminsScalarWhereWithAggregatesInput[]
    NOT?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admins"> | number
    name?: StringWithAggregatesFilter<"admins"> | string
    email?: StringWithAggregatesFilter<"admins"> | string
    password_hash?: StringWithAggregatesFilter<"admins"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"admins"> | Date | string | null
  }

  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    id?: IntFilter<"attendance"> | number
    student_id?: IntNullableFilter<"attendance"> | number | null
    classroom_id?: IntNullableFilter<"attendance"> | number | null
    course_id?: IntNullableFilter<"attendance"> | number | null
    timestamp?: DateTimeFilter<"attendance"> | Date | string
    statut?: StringNullableFilter<"attendance"> | string | null
    verified?: BoolNullableFilter<"attendance"> | boolean | null
    classrooms?: XOR<ClassroomsNullableScalarRelationFilter, classroomsWhereInput> | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    students?: XOR<StudentsNullableScalarRelationFilter, studentsWhereInput> | null
  }

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    classroom_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    statut?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    classrooms?: classroomsOrderByWithRelationInput
    courses?: coursesOrderByWithRelationInput
    students?: studentsOrderByWithRelationInput
  }

  export type attendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    student_id_classroom_id_course_id_timestamp?: attendanceStudent_idClassroom_idCourse_idTimestampCompoundUniqueInput
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    student_id?: IntNullableFilter<"attendance"> | number | null
    classroom_id?: IntNullableFilter<"attendance"> | number | null
    course_id?: IntNullableFilter<"attendance"> | number | null
    timestamp?: DateTimeFilter<"attendance"> | Date | string
    statut?: StringNullableFilter<"attendance"> | string | null
    verified?: BoolNullableFilter<"attendance"> | boolean | null
    classrooms?: XOR<ClassroomsNullableScalarRelationFilter, classroomsWhereInput> | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
    students?: XOR<StudentsNullableScalarRelationFilter, studentsWhereInput> | null
  }, "id" | "student_id_classroom_id_course_id_timestamp">

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrderInput | SortOrder
    classroom_id?: SortOrderInput | SortOrder
    course_id?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    statut?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    _count?: attendanceCountOrderByAggregateInput
    _avg?: attendanceAvgOrderByAggregateInput
    _max?: attendanceMaxOrderByAggregateInput
    _min?: attendanceMinOrderByAggregateInput
    _sum?: attendanceSumOrderByAggregateInput
  }

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    OR?: attendanceScalarWhereWithAggregatesInput[]
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attendance"> | number
    student_id?: IntNullableWithAggregatesFilter<"attendance"> | number | null
    classroom_id?: IntNullableWithAggregatesFilter<"attendance"> | number | null
    course_id?: IntNullableWithAggregatesFilter<"attendance"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"attendance"> | Date | string
    statut?: StringNullableWithAggregatesFilter<"attendance"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"attendance"> | boolean | null
  }

  export type classroomsWhereInput = {
    AND?: classroomsWhereInput | classroomsWhereInput[]
    OR?: classroomsWhereInput[]
    NOT?: classroomsWhereInput | classroomsWhereInput[]
    id?: IntFilter<"classrooms"> | number
    name?: StringFilter<"classrooms"> | string
    capacity?: IntNullableFilter<"classrooms"> | number | null
    status?: StringNullableFilter<"classrooms"> | string | null
    attendance?: AttendanceListRelationFilter
    professor_classroom_access?: Professor_classroom_accessListRelationFilter
    schedules?: SchedulesListRelationFilter
  }

  export type classroomsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    attendance?: attendanceOrderByRelationAggregateInput
    professor_classroom_access?: professor_classroom_accessOrderByRelationAggregateInput
    schedules?: schedulesOrderByRelationAggregateInput
  }

  export type classroomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: classroomsWhereInput | classroomsWhereInput[]
    OR?: classroomsWhereInput[]
    NOT?: classroomsWhereInput | classroomsWhereInput[]
    name?: StringFilter<"classrooms"> | string
    capacity?: IntNullableFilter<"classrooms"> | number | null
    status?: StringNullableFilter<"classrooms"> | string | null
    attendance?: AttendanceListRelationFilter
    professor_classroom_access?: Professor_classroom_accessListRelationFilter
    schedules?: SchedulesListRelationFilter
  }, "id">

  export type classroomsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: classroomsCountOrderByAggregateInput
    _avg?: classroomsAvgOrderByAggregateInput
    _max?: classroomsMaxOrderByAggregateInput
    _min?: classroomsMinOrderByAggregateInput
    _sum?: classroomsSumOrderByAggregateInput
  }

  export type classroomsScalarWhereWithAggregatesInput = {
    AND?: classroomsScalarWhereWithAggregatesInput | classroomsScalarWhereWithAggregatesInput[]
    OR?: classroomsScalarWhereWithAggregatesInput[]
    NOT?: classroomsScalarWhereWithAggregatesInput | classroomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"classrooms"> | number
    name?: StringWithAggregatesFilter<"classrooms"> | string
    capacity?: IntNullableWithAggregatesFilter<"classrooms"> | number | null
    status?: StringNullableWithAggregatesFilter<"classrooms"> | string | null
  }

  export type coursesWhereInput = {
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    id?: IntFilter<"courses"> | number
    name?: StringFilter<"courses"> | string
    section_id?: IntNullableFilter<"courses"> | number | null
    professeur_id?: IntNullableFilter<"courses"> | number | null
    room?: StringFilter<"courses"> | string
    attendance?: AttendanceListRelationFilter
    professors?: XOR<ProfessorsNullableScalarRelationFilter, professorsWhereInput> | null
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
    schedules?: SchedulesListRelationFilter
  }

  export type coursesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrderInput | SortOrder
    professeur_id?: SortOrderInput | SortOrder
    room?: SortOrder
    attendance?: attendanceOrderByRelationAggregateInput
    professors?: professorsOrderByWithRelationInput
    sections?: sectionsOrderByWithRelationInput
    schedules?: schedulesOrderByRelationAggregateInput
  }

  export type coursesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    name?: StringFilter<"courses"> | string
    section_id?: IntNullableFilter<"courses"> | number | null
    professeur_id?: IntNullableFilter<"courses"> | number | null
    room?: StringFilter<"courses"> | string
    attendance?: AttendanceListRelationFilter
    professors?: XOR<ProfessorsNullableScalarRelationFilter, professorsWhereInput> | null
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
    schedules?: SchedulesListRelationFilter
  }, "id">

  export type coursesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrderInput | SortOrder
    professeur_id?: SortOrderInput | SortOrder
    room?: SortOrder
    _count?: coursesCountOrderByAggregateInput
    _avg?: coursesAvgOrderByAggregateInput
    _max?: coursesMaxOrderByAggregateInput
    _min?: coursesMinOrderByAggregateInput
    _sum?: coursesSumOrderByAggregateInput
  }

  export type coursesScalarWhereWithAggregatesInput = {
    AND?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    OR?: coursesScalarWhereWithAggregatesInput[]
    NOT?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"courses"> | number
    name?: StringWithAggregatesFilter<"courses"> | string
    section_id?: IntNullableWithAggregatesFilter<"courses"> | number | null
    professeur_id?: IntNullableWithAggregatesFilter<"courses"> | number | null
    room?: StringWithAggregatesFilter<"courses"> | string
  }

  export type groupsWhereInput = {
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    id?: IntFilter<"groups"> | number
    name?: StringFilter<"groups"> | string
    section_id?: IntNullableFilter<"groups"> | number | null
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
    students?: StudentsListRelationFilter
  }

  export type groupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrderInput | SortOrder
    sections?: sectionsOrderByWithRelationInput
    students?: studentsOrderByRelationAggregateInput
  }

  export type groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    name?: StringFilter<"groups"> | string
    section_id?: IntNullableFilter<"groups"> | number | null
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
    students?: StudentsListRelationFilter
  }, "id">

  export type groupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrderInput | SortOrder
    _count?: groupsCountOrderByAggregateInput
    _avg?: groupsAvgOrderByAggregateInput
    _max?: groupsMaxOrderByAggregateInput
    _min?: groupsMinOrderByAggregateInput
    _sum?: groupsSumOrderByAggregateInput
  }

  export type groupsScalarWhereWithAggregatesInput = {
    AND?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    OR?: groupsScalarWhereWithAggregatesInput[]
    NOT?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"groups"> | number
    name?: StringWithAggregatesFilter<"groups"> | string
    section_id?: IntNullableWithAggregatesFilter<"groups"> | number | null
  }

  export type professor_classroom_accessWhereInput = {
    AND?: professor_classroom_accessWhereInput | professor_classroom_accessWhereInput[]
    OR?: professor_classroom_accessWhereInput[]
    NOT?: professor_classroom_accessWhereInput | professor_classroom_accessWhereInput[]
    id?: IntFilter<"professor_classroom_access"> | number
    professor_id?: IntNullableFilter<"professor_classroom_access"> | number | null
    classroom_id?: IntNullableFilter<"professor_classroom_access"> | number | null
    timestamp?: DateTimeFilter<"professor_classroom_access"> | Date | string
    action?: StringFilter<"professor_classroom_access"> | string
    verified?: BoolNullableFilter<"professor_classroom_access"> | boolean | null
    classrooms?: XOR<ClassroomsNullableScalarRelationFilter, classroomsWhereInput> | null
    professors?: XOR<ProfessorsNullableScalarRelationFilter, professorsWhereInput> | null
  }

  export type professor_classroom_accessOrderByWithRelationInput = {
    id?: SortOrder
    professor_id?: SortOrderInput | SortOrder
    classroom_id?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    verified?: SortOrderInput | SortOrder
    classrooms?: classroomsOrderByWithRelationInput
    professors?: professorsOrderByWithRelationInput
  }

  export type professor_classroom_accessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: professor_classroom_accessWhereInput | professor_classroom_accessWhereInput[]
    OR?: professor_classroom_accessWhereInput[]
    NOT?: professor_classroom_accessWhereInput | professor_classroom_accessWhereInput[]
    professor_id?: IntNullableFilter<"professor_classroom_access"> | number | null
    classroom_id?: IntNullableFilter<"professor_classroom_access"> | number | null
    timestamp?: DateTimeFilter<"professor_classroom_access"> | Date | string
    action?: StringFilter<"professor_classroom_access"> | string
    verified?: BoolNullableFilter<"professor_classroom_access"> | boolean | null
    classrooms?: XOR<ClassroomsNullableScalarRelationFilter, classroomsWhereInput> | null
    professors?: XOR<ProfessorsNullableScalarRelationFilter, professorsWhereInput> | null
  }, "id">

  export type professor_classroom_accessOrderByWithAggregationInput = {
    id?: SortOrder
    professor_id?: SortOrderInput | SortOrder
    classroom_id?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    verified?: SortOrderInput | SortOrder
    _count?: professor_classroom_accessCountOrderByAggregateInput
    _avg?: professor_classroom_accessAvgOrderByAggregateInput
    _max?: professor_classroom_accessMaxOrderByAggregateInput
    _min?: professor_classroom_accessMinOrderByAggregateInput
    _sum?: professor_classroom_accessSumOrderByAggregateInput
  }

  export type professor_classroom_accessScalarWhereWithAggregatesInput = {
    AND?: professor_classroom_accessScalarWhereWithAggregatesInput | professor_classroom_accessScalarWhereWithAggregatesInput[]
    OR?: professor_classroom_accessScalarWhereWithAggregatesInput[]
    NOT?: professor_classroom_accessScalarWhereWithAggregatesInput | professor_classroom_accessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"professor_classroom_access"> | number
    professor_id?: IntNullableWithAggregatesFilter<"professor_classroom_access"> | number | null
    classroom_id?: IntNullableWithAggregatesFilter<"professor_classroom_access"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"professor_classroom_access"> | Date | string
    action?: StringWithAggregatesFilter<"professor_classroom_access"> | string
    verified?: BoolNullableWithAggregatesFilter<"professor_classroom_access"> | boolean | null
  }

  export type professorsWhereInput = {
    AND?: professorsWhereInput | professorsWhereInput[]
    OR?: professorsWhereInput[]
    NOT?: professorsWhereInput | professorsWhereInput[]
    id?: IntFilter<"professors"> | number
    name?: StringFilter<"professors"> | string
    email?: StringFilter<"professors"> | string
    password_hash?: StringFilter<"professors"> | string
    fingerprint_id?: StringFilter<"professors"> | string
    status?: StringNullableFilter<"professors"> | string | null
    created_at?: DateTimeNullableFilter<"professors"> | Date | string | null
    courses?: CoursesListRelationFilter
    professor_classroom_access?: Professor_classroom_accessListRelationFilter
  }

  export type professorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    courses?: coursesOrderByRelationAggregateInput
    professor_classroom_access?: professor_classroom_accessOrderByRelationAggregateInput
  }

  export type professorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    fingerprint_id?: string
    AND?: professorsWhereInput | professorsWhereInput[]
    OR?: professorsWhereInput[]
    NOT?: professorsWhereInput | professorsWhereInput[]
    name?: StringFilter<"professors"> | string
    password_hash?: StringFilter<"professors"> | string
    status?: StringNullableFilter<"professors"> | string | null
    created_at?: DateTimeNullableFilter<"professors"> | Date | string | null
    courses?: CoursesListRelationFilter
    professor_classroom_access?: Professor_classroom_accessListRelationFilter
  }, "id" | "email" | "fingerprint_id">

  export type professorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: professorsCountOrderByAggregateInput
    _avg?: professorsAvgOrderByAggregateInput
    _max?: professorsMaxOrderByAggregateInput
    _min?: professorsMinOrderByAggregateInput
    _sum?: professorsSumOrderByAggregateInput
  }

  export type professorsScalarWhereWithAggregatesInput = {
    AND?: professorsScalarWhereWithAggregatesInput | professorsScalarWhereWithAggregatesInput[]
    OR?: professorsScalarWhereWithAggregatesInput[]
    NOT?: professorsScalarWhereWithAggregatesInput | professorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"professors"> | number
    name?: StringWithAggregatesFilter<"professors"> | string
    email?: StringWithAggregatesFilter<"professors"> | string
    password_hash?: StringWithAggregatesFilter<"professors"> | string
    fingerprint_id?: StringWithAggregatesFilter<"professors"> | string
    status?: StringNullableWithAggregatesFilter<"professors"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"professors"> | Date | string | null
  }

  export type schedulesWhereInput = {
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    id?: IntFilter<"schedules"> | number
    course?: IntNullableFilter<"schedules"> | number | null
    classroom_id?: IntNullableFilter<"schedules"> | number | null
    day_of_week?: StringFilter<"schedules"> | string
    start_time?: DateTimeFilter<"schedules"> | Date | string
    end_time?: DateTimeFilter<"schedules"> | Date | string
    classrooms?: XOR<ClassroomsNullableScalarRelationFilter, classroomsWhereInput> | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
  }

  export type schedulesOrderByWithRelationInput = {
    id?: SortOrder
    course?: SortOrderInput | SortOrder
    classroom_id?: SortOrderInput | SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    classrooms?: classroomsOrderByWithRelationInput
    courses?: coursesOrderByWithRelationInput
  }

  export type schedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    course?: IntNullableFilter<"schedules"> | number | null
    classroom_id?: IntNullableFilter<"schedules"> | number | null
    day_of_week?: StringFilter<"schedules"> | string
    start_time?: DateTimeFilter<"schedules"> | Date | string
    end_time?: DateTimeFilter<"schedules"> | Date | string
    classrooms?: XOR<ClassroomsNullableScalarRelationFilter, classroomsWhereInput> | null
    courses?: XOR<CoursesNullableScalarRelationFilter, coursesWhereInput> | null
  }, "id">

  export type schedulesOrderByWithAggregationInput = {
    id?: SortOrder
    course?: SortOrderInput | SortOrder
    classroom_id?: SortOrderInput | SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    _count?: schedulesCountOrderByAggregateInput
    _avg?: schedulesAvgOrderByAggregateInput
    _max?: schedulesMaxOrderByAggregateInput
    _min?: schedulesMinOrderByAggregateInput
    _sum?: schedulesSumOrderByAggregateInput
  }

  export type schedulesScalarWhereWithAggregatesInput = {
    AND?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    OR?: schedulesScalarWhereWithAggregatesInput[]
    NOT?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"schedules"> | number
    course?: IntNullableWithAggregatesFilter<"schedules"> | number | null
    classroom_id?: IntNullableWithAggregatesFilter<"schedules"> | number | null
    day_of_week?: StringWithAggregatesFilter<"schedules"> | string
    start_time?: DateTimeWithAggregatesFilter<"schedules"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"schedules"> | Date | string
  }

  export type sectionsWhereInput = {
    AND?: sectionsWhereInput | sectionsWhereInput[]
    OR?: sectionsWhereInput[]
    NOT?: sectionsWhereInput | sectionsWhereInput[]
    id?: IntFilter<"sections"> | number
    name?: StringFilter<"sections"> | string
    academic_year_id?: IntNullableFilter<"sections"> | number | null
    courses?: CoursesListRelationFilter
    groups?: GroupsListRelationFilter
    academic_years?: XOR<Academic_yearsNullableScalarRelationFilter, academic_yearsWhereInput> | null
    students?: StudentsListRelationFilter
  }

  export type sectionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    academic_year_id?: SortOrderInput | SortOrder
    courses?: coursesOrderByRelationAggregateInput
    groups?: groupsOrderByRelationAggregateInput
    academic_years?: academic_yearsOrderByWithRelationInput
    students?: studentsOrderByRelationAggregateInput
  }

  export type sectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sectionsWhereInput | sectionsWhereInput[]
    OR?: sectionsWhereInput[]
    NOT?: sectionsWhereInput | sectionsWhereInput[]
    name?: StringFilter<"sections"> | string
    academic_year_id?: IntNullableFilter<"sections"> | number | null
    courses?: CoursesListRelationFilter
    groups?: GroupsListRelationFilter
    academic_years?: XOR<Academic_yearsNullableScalarRelationFilter, academic_yearsWhereInput> | null
    students?: StudentsListRelationFilter
  }, "id">

  export type sectionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    academic_year_id?: SortOrderInput | SortOrder
    _count?: sectionsCountOrderByAggregateInput
    _avg?: sectionsAvgOrderByAggregateInput
    _max?: sectionsMaxOrderByAggregateInput
    _min?: sectionsMinOrderByAggregateInput
    _sum?: sectionsSumOrderByAggregateInput
  }

  export type sectionsScalarWhereWithAggregatesInput = {
    AND?: sectionsScalarWhereWithAggregatesInput | sectionsScalarWhereWithAggregatesInput[]
    OR?: sectionsScalarWhereWithAggregatesInput[]
    NOT?: sectionsScalarWhereWithAggregatesInput | sectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sections"> | number
    name?: StringWithAggregatesFilter<"sections"> | string
    academic_year_id?: IntNullableWithAggregatesFilter<"sections"> | number | null
  }

  export type studentsWhereInput = {
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    id?: IntFilter<"students"> | number
    name?: StringFilter<"students"> | string
    email?: StringFilter<"students"> | string
    password_hash?: StringFilter<"students"> | string
    fingerprint_id?: StringFilter<"students"> | string
    group_id?: IntNullableFilter<"students"> | number | null
    section_id?: IntNullableFilter<"students"> | number | null
    status?: StringNullableFilter<"students"> | string | null
    created_at?: DateTimeNullableFilter<"students"> | Date | string | null
    attendance?: AttendanceListRelationFilter
    groups?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
  }

  export type studentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    section_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    attendance?: attendanceOrderByRelationAggregateInput
    groups?: groupsOrderByWithRelationInput
    sections?: sectionsOrderByWithRelationInput
  }

  export type studentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    fingerprint_id?: string
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    name?: StringFilter<"students"> | string
    password_hash?: StringFilter<"students"> | string
    group_id?: IntNullableFilter<"students"> | number | null
    section_id?: IntNullableFilter<"students"> | number | null
    status?: StringNullableFilter<"students"> | string | null
    created_at?: DateTimeNullableFilter<"students"> | Date | string | null
    attendance?: AttendanceListRelationFilter
    groups?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    sections?: XOR<SectionsNullableScalarRelationFilter, sectionsWhereInput> | null
  }, "id" | "email" | "fingerprint_id">

  export type studentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    section_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: studentsCountOrderByAggregateInput
    _avg?: studentsAvgOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
    _sum?: studentsSumOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    OR?: studentsScalarWhereWithAggregatesInput[]
    NOT?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"students"> | number
    name?: StringWithAggregatesFilter<"students"> | string
    email?: StringWithAggregatesFilter<"students"> | string
    password_hash?: StringWithAggregatesFilter<"students"> | string
    fingerprint_id?: StringWithAggregatesFilter<"students"> | string
    group_id?: IntNullableWithAggregatesFilter<"students"> | number | null
    section_id?: IntNullableWithAggregatesFilter<"students"> | number | null
    status?: StringNullableWithAggregatesFilter<"students"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null
  }

  export type academic_yearsCreateInput = {
    annee: string
    specialite: string
    faculte: string
    sections?: sectionsCreateNestedManyWithoutAcademic_yearsInput
  }

  export type academic_yearsUncheckedCreateInput = {
    id?: number
    annee: string
    specialite: string
    faculte: string
    sections?: sectionsUncheckedCreateNestedManyWithoutAcademic_yearsInput
  }

  export type academic_yearsUpdateInput = {
    annee?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    sections?: sectionsUpdateManyWithoutAcademic_yearsNestedInput
  }

  export type academic_yearsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    annee?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
    sections?: sectionsUncheckedUpdateManyWithoutAcademic_yearsNestedInput
  }

  export type academic_yearsCreateManyInput = {
    id?: number
    annee: string
    specialite: string
    faculte: string
  }

  export type academic_yearsUpdateManyMutationInput = {
    annee?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
  }

  export type academic_yearsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    annee?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
  }

  export type adminsCreateInput = {
    name: string
    email: string
    password_hash: string
    created_at?: Date | string | null
  }

  export type adminsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string | null
  }

  export type adminsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminsCreateManyInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    created_at?: Date | string | null
  }

  export type adminsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendanceCreateInput = {
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
    classrooms?: classroomsCreateNestedOneWithoutAttendanceInput
    courses?: coursesCreateNestedOneWithoutAttendanceInput
    students?: studentsCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateInput = {
    id?: number
    student_id?: number | null
    classroom_id?: number | null
    course_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type attendanceUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classrooms?: classroomsUpdateOneWithoutAttendanceNestedInput
    courses?: coursesUpdateOneWithoutAttendanceNestedInput
    students?: studentsUpdateOneWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type attendanceCreateManyInput = {
    id?: number
    student_id?: number | null
    classroom_id?: number | null
    course_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type attendanceUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type attendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type classroomsCreateInput = {
    name: string
    capacity?: number | null
    status?: string | null
    attendance?: attendanceCreateNestedManyWithoutClassroomsInput
    professor_classroom_access?: professor_classroom_accessCreateNestedManyWithoutClassroomsInput
    schedules?: schedulesCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateInput = {
    id?: number
    name: string
    capacity?: number | null
    status?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClassroomsInput
    professor_classroom_access?: professor_classroom_accessUncheckedCreateNestedManyWithoutClassroomsInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutClassroomsNestedInput
    professor_classroom_access?: professor_classroom_accessUpdateManyWithoutClassroomsNestedInput
    schedules?: schedulesUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutClassroomsNestedInput
    professor_classroom_access?: professor_classroom_accessUncheckedUpdateManyWithoutClassroomsNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsCreateManyInput = {
    id?: number
    name: string
    capacity?: number | null
    status?: string | null
  }

  export type classroomsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type classroomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type coursesCreateInput = {
    name: string
    room: string
    attendance?: attendanceCreateNestedManyWithoutCoursesInput
    professors?: professorsCreateNestedOneWithoutCoursesInput
    sections?: sectionsCreateNestedOneWithoutCoursesInput
    schedules?: schedulesCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateInput = {
    id?: number
    name: string
    section_id?: number | null
    professeur_id?: number | null
    room: string
    attendance?: attendanceUncheckedCreateNestedManyWithoutCoursesInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUpdateManyWithoutCoursesNestedInput
    professors?: professorsUpdateOneWithoutCoursesNestedInput
    sections?: sectionsUpdateOneWithoutCoursesNestedInput
    schedules?: schedulesUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    professeur_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUncheckedUpdateManyWithoutCoursesNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type coursesCreateManyInput = {
    id?: number
    name: string
    section_id?: number | null
    professeur_id?: number | null
    room: string
  }

  export type coursesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
  }

  export type coursesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    professeur_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
  }

  export type groupsCreateInput = {
    name: string
    sections?: sectionsCreateNestedOneWithoutGroupsInput
    students?: studentsCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateInput = {
    id?: number
    name: string
    section_id?: number | null
    students?: studentsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sections?: sectionsUpdateOneWithoutGroupsNestedInput
    students?: studentsUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    students?: studentsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type groupsCreateManyInput = {
    id?: number
    name: string
    section_id?: number | null
  }

  export type groupsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type groupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type professor_classroom_accessCreateInput = {
    timestamp: Date | string
    action: string
    verified?: boolean | null
    classrooms?: classroomsCreateNestedOneWithoutProfessor_classroom_accessInput
    professors?: professorsCreateNestedOneWithoutProfessor_classroom_accessInput
  }

  export type professor_classroom_accessUncheckedCreateInput = {
    id?: number
    professor_id?: number | null
    classroom_id?: number | null
    timestamp: Date | string
    action: string
    verified?: boolean | null
  }

  export type professor_classroom_accessUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classrooms?: classroomsUpdateOneWithoutProfessor_classroom_accessNestedInput
    professors?: professorsUpdateOneWithoutProfessor_classroom_accessNestedInput
  }

  export type professor_classroom_accessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type professor_classroom_accessCreateManyInput = {
    id?: number
    professor_id?: number | null
    classroom_id?: number | null
    timestamp: Date | string
    action: string
    verified?: boolean | null
  }

  export type professor_classroom_accessUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type professor_classroom_accessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type professorsCreateInput = {
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    courses?: coursesCreateNestedManyWithoutProfessorsInput
    professor_classroom_access?: professor_classroom_accessCreateNestedManyWithoutProfessorsInput
  }

  export type professorsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    courses?: coursesUncheckedCreateNestedManyWithoutProfessorsInput
    professor_classroom_access?: professor_classroom_accessUncheckedCreateNestedManyWithoutProfessorsInput
  }

  export type professorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUpdateManyWithoutProfessorsNestedInput
    professor_classroom_access?: professor_classroom_accessUpdateManyWithoutProfessorsNestedInput
  }

  export type professorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUncheckedUpdateManyWithoutProfessorsNestedInput
    professor_classroom_access?: professor_classroom_accessUncheckedUpdateManyWithoutProfessorsNestedInput
  }

  export type professorsCreateManyInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
  }

  export type professorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type professorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schedulesCreateInput = {
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    classrooms?: classroomsCreateNestedOneWithoutSchedulesInput
    courses?: coursesCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateInput = {
    id?: number
    course?: number | null
    classroom_id?: number | null
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
  }

  export type schedulesUpdateInput = {
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    classrooms?: classroomsUpdateOneWithoutSchedulesNestedInput
    courses?: coursesUpdateOneWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesCreateManyInput = {
    id?: number
    course?: number | null
    classroom_id?: number | null
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
  }

  export type schedulesUpdateManyMutationInput = {
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sectionsCreateInput = {
    name: string
    courses?: coursesCreateNestedManyWithoutSectionsInput
    groups?: groupsCreateNestedManyWithoutSectionsInput
    academic_years?: academic_yearsCreateNestedOneWithoutSectionsInput
    students?: studentsCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUncheckedCreateInput = {
    id?: number
    name: string
    academic_year_id?: number | null
    courses?: coursesUncheckedCreateNestedManyWithoutSectionsInput
    groups?: groupsUncheckedCreateNestedManyWithoutSectionsInput
    students?: studentsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    courses?: coursesUpdateManyWithoutSectionsNestedInput
    groups?: groupsUpdateManyWithoutSectionsNestedInput
    academic_years?: academic_yearsUpdateOneWithoutSectionsNestedInput
    students?: studentsUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    academic_year_id?: NullableIntFieldUpdateOperationsInput | number | null
    courses?: coursesUncheckedUpdateManyWithoutSectionsNestedInput
    groups?: groupsUncheckedUpdateManyWithoutSectionsNestedInput
    students?: studentsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsCreateManyInput = {
    id?: number
    name: string
    academic_year_id?: number | null
  }

  export type sectionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type sectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    academic_year_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studentsCreateInput = {
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    attendance?: attendanceCreateNestedManyWithoutStudentsInput
    groups?: groupsCreateNestedOneWithoutStudentsInput
    sections?: sectionsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    group_id?: number | null
    section_id?: number | null
    status?: string | null
    created_at?: Date | string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: attendanceUpdateManyWithoutStudentsNestedInput
    groups?: groupsUpdateOneWithoutStudentsNestedInput
    sections?: sectionsUpdateOneWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsCreateManyInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    group_id?: number | null
    section_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type studentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SectionsListRelationFilter = {
    every?: sectionsWhereInput
    some?: sectionsWhereInput
    none?: sectionsWhereInput
  }

  export type sectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type academic_yearsCountOrderByAggregateInput = {
    id?: SortOrder
    annee?: SortOrder
    specialite?: SortOrder
    faculte?: SortOrder
  }

  export type academic_yearsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type academic_yearsMaxOrderByAggregateInput = {
    id?: SortOrder
    annee?: SortOrder
    specialite?: SortOrder
    faculte?: SortOrder
  }

  export type academic_yearsMinOrderByAggregateInput = {
    id?: SortOrder
    annee?: SortOrder
    specialite?: SortOrder
    faculte?: SortOrder
  }

  export type academic_yearsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type adminsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type adminsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type adminsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ClassroomsNullableScalarRelationFilter = {
    is?: classroomsWhereInput | null
    isNot?: classroomsWhereInput | null
  }

  export type CoursesNullableScalarRelationFilter = {
    is?: coursesWhereInput | null
    isNot?: coursesWhereInput | null
  }

  export type StudentsNullableScalarRelationFilter = {
    is?: studentsWhereInput | null
    isNot?: studentsWhereInput | null
  }

  export type attendanceStudent_idClassroom_idCourse_idTimestampCompoundUniqueInput = {
    student_id: number
    classroom_id: number
    course_id: number
    timestamp: Date | string
  }

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    course_id?: SortOrder
    timestamp?: SortOrder
    statut?: SortOrder
    verified?: SortOrder
  }

  export type attendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    course_id?: SortOrder
  }

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    course_id?: SortOrder
    timestamp?: SortOrder
    statut?: SortOrder
    verified?: SortOrder
  }

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    course_id?: SortOrder
    timestamp?: SortOrder
    statut?: SortOrder
    verified?: SortOrder
  }

  export type attendanceSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    course_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput
    some?: attendanceWhereInput
    none?: attendanceWhereInput
  }

  export type Professor_classroom_accessListRelationFilter = {
    every?: professor_classroom_accessWhereInput
    some?: professor_classroom_accessWhereInput
    none?: professor_classroom_accessWhereInput
  }

  export type SchedulesListRelationFilter = {
    every?: schedulesWhereInput
    some?: schedulesWhereInput
    none?: schedulesWhereInput
  }

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type professor_classroom_accessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type schedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type classroomsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
  }

  export type classroomsAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type classroomsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
  }

  export type classroomsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
  }

  export type classroomsSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type ProfessorsNullableScalarRelationFilter = {
    is?: professorsWhereInput | null
    isNot?: professorsWhereInput | null
  }

  export type SectionsNullableScalarRelationFilter = {
    is?: sectionsWhereInput | null
    isNot?: sectionsWhereInput | null
  }

  export type coursesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    professeur_id?: SortOrder
    room?: SortOrder
  }

  export type coursesAvgOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
    professeur_id?: SortOrder
  }

  export type coursesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    professeur_id?: SortOrder
    room?: SortOrder
  }

  export type coursesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    professeur_id?: SortOrder
    room?: SortOrder
  }

  export type coursesSumOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
    professeur_id?: SortOrder
  }

  export type StudentsListRelationFilter = {
    every?: studentsWhereInput
    some?: studentsWhereInput
    none?: studentsWhereInput
  }

  export type studentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
  }

  export type groupsAvgOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
  }

  export type groupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
  }

  export type groupsSumOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type professor_classroom_accessCountOrderByAggregateInput = {
    id?: SortOrder
    professor_id?: SortOrder
    classroom_id?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    verified?: SortOrder
  }

  export type professor_classroom_accessAvgOrderByAggregateInput = {
    id?: SortOrder
    professor_id?: SortOrder
    classroom_id?: SortOrder
  }

  export type professor_classroom_accessMaxOrderByAggregateInput = {
    id?: SortOrder
    professor_id?: SortOrder
    classroom_id?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    verified?: SortOrder
  }

  export type professor_classroom_accessMinOrderByAggregateInput = {
    id?: SortOrder
    professor_id?: SortOrder
    classroom_id?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    verified?: SortOrder
  }

  export type professor_classroom_accessSumOrderByAggregateInput = {
    id?: SortOrder
    professor_id?: SortOrder
    classroom_id?: SortOrder
  }

  export type CoursesListRelationFilter = {
    every?: coursesWhereInput
    some?: coursesWhereInput
    none?: coursesWhereInput
  }

  export type coursesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type professorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type professorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type professorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type professorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type professorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type schedulesCountOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    classroom_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type schedulesAvgOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    classroom_id?: SortOrder
  }

  export type schedulesMaxOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    classroom_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type schedulesMinOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    classroom_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type schedulesSumOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    classroom_id?: SortOrder
  }

  export type GroupsListRelationFilter = {
    every?: groupsWhereInput
    some?: groupsWhereInput
    none?: groupsWhereInput
  }

  export type Academic_yearsNullableScalarRelationFilter = {
    is?: academic_yearsWhereInput | null
    isNot?: academic_yearsWhereInput | null
  }

  export type groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sectionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    academic_year_id?: SortOrder
  }

  export type sectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    academic_year_id?: SortOrder
  }

  export type sectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    academic_year_id?: SortOrder
  }

  export type sectionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    academic_year_id?: SortOrder
  }

  export type sectionsSumOrderByAggregateInput = {
    id?: SortOrder
    academic_year_id?: SortOrder
  }

  export type GroupsNullableScalarRelationFilter = {
    is?: groupsWhereInput | null
    isNot?: groupsWhereInput | null
  }

  export type studentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    group_id?: SortOrder
    section_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type studentsAvgOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    section_id?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    group_id?: SortOrder
    section_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fingerprint_id?: SortOrder
    group_id?: SortOrder
    section_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type studentsSumOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    section_id?: SortOrder
  }

  export type sectionsCreateNestedManyWithoutAcademic_yearsInput = {
    create?: XOR<sectionsCreateWithoutAcademic_yearsInput, sectionsUncheckedCreateWithoutAcademic_yearsInput> | sectionsCreateWithoutAcademic_yearsInput[] | sectionsUncheckedCreateWithoutAcademic_yearsInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutAcademic_yearsInput | sectionsCreateOrConnectWithoutAcademic_yearsInput[]
    createMany?: sectionsCreateManyAcademic_yearsInputEnvelope
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
  }

  export type sectionsUncheckedCreateNestedManyWithoutAcademic_yearsInput = {
    create?: XOR<sectionsCreateWithoutAcademic_yearsInput, sectionsUncheckedCreateWithoutAcademic_yearsInput> | sectionsCreateWithoutAcademic_yearsInput[] | sectionsUncheckedCreateWithoutAcademic_yearsInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutAcademic_yearsInput | sectionsCreateOrConnectWithoutAcademic_yearsInput[]
    createMany?: sectionsCreateManyAcademic_yearsInputEnvelope
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type sectionsUpdateManyWithoutAcademic_yearsNestedInput = {
    create?: XOR<sectionsCreateWithoutAcademic_yearsInput, sectionsUncheckedCreateWithoutAcademic_yearsInput> | sectionsCreateWithoutAcademic_yearsInput[] | sectionsUncheckedCreateWithoutAcademic_yearsInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutAcademic_yearsInput | sectionsCreateOrConnectWithoutAcademic_yearsInput[]
    upsert?: sectionsUpsertWithWhereUniqueWithoutAcademic_yearsInput | sectionsUpsertWithWhereUniqueWithoutAcademic_yearsInput[]
    createMany?: sectionsCreateManyAcademic_yearsInputEnvelope
    set?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    disconnect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    delete?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    update?: sectionsUpdateWithWhereUniqueWithoutAcademic_yearsInput | sectionsUpdateWithWhereUniqueWithoutAcademic_yearsInput[]
    updateMany?: sectionsUpdateManyWithWhereWithoutAcademic_yearsInput | sectionsUpdateManyWithWhereWithoutAcademic_yearsInput[]
    deleteMany?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sectionsUncheckedUpdateManyWithoutAcademic_yearsNestedInput = {
    create?: XOR<sectionsCreateWithoutAcademic_yearsInput, sectionsUncheckedCreateWithoutAcademic_yearsInput> | sectionsCreateWithoutAcademic_yearsInput[] | sectionsUncheckedCreateWithoutAcademic_yearsInput[]
    connectOrCreate?: sectionsCreateOrConnectWithoutAcademic_yearsInput | sectionsCreateOrConnectWithoutAcademic_yearsInput[]
    upsert?: sectionsUpsertWithWhereUniqueWithoutAcademic_yearsInput | sectionsUpsertWithWhereUniqueWithoutAcademic_yearsInput[]
    createMany?: sectionsCreateManyAcademic_yearsInputEnvelope
    set?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    disconnect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    delete?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    connect?: sectionsWhereUniqueInput | sectionsWhereUniqueInput[]
    update?: sectionsUpdateWithWhereUniqueWithoutAcademic_yearsInput | sectionsUpdateWithWhereUniqueWithoutAcademic_yearsInput[]
    updateMany?: sectionsUpdateManyWithWhereWithoutAcademic_yearsInput | sectionsUpdateManyWithWhereWithoutAcademic_yearsInput[]
    deleteMany?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type classroomsCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<classroomsCreateWithoutAttendanceInput, classroomsUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutAttendanceInput
    connect?: classroomsWhereUniqueInput
  }

  export type coursesCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<coursesCreateWithoutAttendanceInput, coursesUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: coursesCreateOrConnectWithoutAttendanceInput
    connect?: coursesWhereUniqueInput
  }

  export type studentsCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<studentsCreateWithoutAttendanceInput, studentsUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: studentsCreateOrConnectWithoutAttendanceInput
    connect?: studentsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type classroomsUpdateOneWithoutAttendanceNestedInput = {
    create?: XOR<classroomsCreateWithoutAttendanceInput, classroomsUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutAttendanceInput
    upsert?: classroomsUpsertWithoutAttendanceInput
    disconnect?: classroomsWhereInput | boolean
    delete?: classroomsWhereInput | boolean
    connect?: classroomsWhereUniqueInput
    update?: XOR<XOR<classroomsUpdateToOneWithWhereWithoutAttendanceInput, classroomsUpdateWithoutAttendanceInput>, classroomsUncheckedUpdateWithoutAttendanceInput>
  }

  export type coursesUpdateOneWithoutAttendanceNestedInput = {
    create?: XOR<coursesCreateWithoutAttendanceInput, coursesUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: coursesCreateOrConnectWithoutAttendanceInput
    upsert?: coursesUpsertWithoutAttendanceInput
    disconnect?: coursesWhereInput | boolean
    delete?: coursesWhereInput | boolean
    connect?: coursesWhereUniqueInput
    update?: XOR<XOR<coursesUpdateToOneWithWhereWithoutAttendanceInput, coursesUpdateWithoutAttendanceInput>, coursesUncheckedUpdateWithoutAttendanceInput>
  }

  export type studentsUpdateOneWithoutAttendanceNestedInput = {
    create?: XOR<studentsCreateWithoutAttendanceInput, studentsUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: studentsCreateOrConnectWithoutAttendanceInput
    upsert?: studentsUpsertWithoutAttendanceInput
    disconnect?: studentsWhereInput | boolean
    delete?: studentsWhereInput | boolean
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutAttendanceInput, studentsUpdateWithoutAttendanceInput>, studentsUncheckedUpdateWithoutAttendanceInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type attendanceCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<attendanceCreateWithoutClassroomsInput, attendanceUncheckedCreateWithoutClassroomsInput> | attendanceCreateWithoutClassroomsInput[] | attendanceUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClassroomsInput | attendanceCreateOrConnectWithoutClassroomsInput[]
    createMany?: attendanceCreateManyClassroomsInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type professor_classroom_accessCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<professor_classroom_accessCreateWithoutClassroomsInput, professor_classroom_accessUncheckedCreateWithoutClassroomsInput> | professor_classroom_accessCreateWithoutClassroomsInput[] | professor_classroom_accessUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutClassroomsInput | professor_classroom_accessCreateOrConnectWithoutClassroomsInput[]
    createMany?: professor_classroom_accessCreateManyClassroomsInputEnvelope
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
  }

  export type schedulesCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<schedulesCreateWithoutClassroomsInput, schedulesUncheckedCreateWithoutClassroomsInput> | schedulesCreateWithoutClassroomsInput[] | schedulesUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutClassroomsInput | schedulesCreateOrConnectWithoutClassroomsInput[]
    createMany?: schedulesCreateManyClassroomsInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<attendanceCreateWithoutClassroomsInput, attendanceUncheckedCreateWithoutClassroomsInput> | attendanceCreateWithoutClassroomsInput[] | attendanceUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClassroomsInput | attendanceCreateOrConnectWithoutClassroomsInput[]
    createMany?: attendanceCreateManyClassroomsInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type professor_classroom_accessUncheckedCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<professor_classroom_accessCreateWithoutClassroomsInput, professor_classroom_accessUncheckedCreateWithoutClassroomsInput> | professor_classroom_accessCreateWithoutClassroomsInput[] | professor_classroom_accessUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutClassroomsInput | professor_classroom_accessCreateOrConnectWithoutClassroomsInput[]
    createMany?: professor_classroom_accessCreateManyClassroomsInputEnvelope
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
  }

  export type schedulesUncheckedCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<schedulesCreateWithoutClassroomsInput, schedulesUncheckedCreateWithoutClassroomsInput> | schedulesCreateWithoutClassroomsInput[] | schedulesUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutClassroomsInput | schedulesCreateOrConnectWithoutClassroomsInput[]
    createMany?: schedulesCreateManyClassroomsInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type attendanceUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<attendanceCreateWithoutClassroomsInput, attendanceUncheckedCreateWithoutClassroomsInput> | attendanceCreateWithoutClassroomsInput[] | attendanceUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClassroomsInput | attendanceCreateOrConnectWithoutClassroomsInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutClassroomsInput | attendanceUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: attendanceCreateManyClassroomsInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutClassroomsInput | attendanceUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutClassroomsInput | attendanceUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type professor_classroom_accessUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<professor_classroom_accessCreateWithoutClassroomsInput, professor_classroom_accessUncheckedCreateWithoutClassroomsInput> | professor_classroom_accessCreateWithoutClassroomsInput[] | professor_classroom_accessUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutClassroomsInput | professor_classroom_accessCreateOrConnectWithoutClassroomsInput[]
    upsert?: professor_classroom_accessUpsertWithWhereUniqueWithoutClassroomsInput | professor_classroom_accessUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: professor_classroom_accessCreateManyClassroomsInputEnvelope
    set?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    disconnect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    delete?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    update?: professor_classroom_accessUpdateWithWhereUniqueWithoutClassroomsInput | professor_classroom_accessUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: professor_classroom_accessUpdateManyWithWhereWithoutClassroomsInput | professor_classroom_accessUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: professor_classroom_accessScalarWhereInput | professor_classroom_accessScalarWhereInput[]
  }

  export type schedulesUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<schedulesCreateWithoutClassroomsInput, schedulesUncheckedCreateWithoutClassroomsInput> | schedulesCreateWithoutClassroomsInput[] | schedulesUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutClassroomsInput | schedulesCreateOrConnectWithoutClassroomsInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutClassroomsInput | schedulesUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: schedulesCreateManyClassroomsInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutClassroomsInput | schedulesUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutClassroomsInput | schedulesUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<attendanceCreateWithoutClassroomsInput, attendanceUncheckedCreateWithoutClassroomsInput> | attendanceCreateWithoutClassroomsInput[] | attendanceUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClassroomsInput | attendanceCreateOrConnectWithoutClassroomsInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutClassroomsInput | attendanceUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: attendanceCreateManyClassroomsInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutClassroomsInput | attendanceUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutClassroomsInput | attendanceUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type professor_classroom_accessUncheckedUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<professor_classroom_accessCreateWithoutClassroomsInput, professor_classroom_accessUncheckedCreateWithoutClassroomsInput> | professor_classroom_accessCreateWithoutClassroomsInput[] | professor_classroom_accessUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutClassroomsInput | professor_classroom_accessCreateOrConnectWithoutClassroomsInput[]
    upsert?: professor_classroom_accessUpsertWithWhereUniqueWithoutClassroomsInput | professor_classroom_accessUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: professor_classroom_accessCreateManyClassroomsInputEnvelope
    set?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    disconnect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    delete?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    update?: professor_classroom_accessUpdateWithWhereUniqueWithoutClassroomsInput | professor_classroom_accessUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: professor_classroom_accessUpdateManyWithWhereWithoutClassroomsInput | professor_classroom_accessUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: professor_classroom_accessScalarWhereInput | professor_classroom_accessScalarWhereInput[]
  }

  export type schedulesUncheckedUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<schedulesCreateWithoutClassroomsInput, schedulesUncheckedCreateWithoutClassroomsInput> | schedulesCreateWithoutClassroomsInput[] | schedulesUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutClassroomsInput | schedulesCreateOrConnectWithoutClassroomsInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutClassroomsInput | schedulesUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: schedulesCreateManyClassroomsInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutClassroomsInput | schedulesUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutClassroomsInput | schedulesUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type attendanceCreateNestedManyWithoutCoursesInput = {
    create?: XOR<attendanceCreateWithoutCoursesInput, attendanceUncheckedCreateWithoutCoursesInput> | attendanceCreateWithoutCoursesInput[] | attendanceUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCoursesInput | attendanceCreateOrConnectWithoutCoursesInput[]
    createMany?: attendanceCreateManyCoursesInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type professorsCreateNestedOneWithoutCoursesInput = {
    create?: XOR<professorsCreateWithoutCoursesInput, professorsUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: professorsCreateOrConnectWithoutCoursesInput
    connect?: professorsWhereUniqueInput
  }

  export type sectionsCreateNestedOneWithoutCoursesInput = {
    create?: XOR<sectionsCreateWithoutCoursesInput, sectionsUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutCoursesInput
    connect?: sectionsWhereUniqueInput
  }

  export type schedulesCreateNestedManyWithoutCoursesInput = {
    create?: XOR<schedulesCreateWithoutCoursesInput, schedulesUncheckedCreateWithoutCoursesInput> | schedulesCreateWithoutCoursesInput[] | schedulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCoursesInput | schedulesCreateOrConnectWithoutCoursesInput[]
    createMany?: schedulesCreateManyCoursesInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<attendanceCreateWithoutCoursesInput, attendanceUncheckedCreateWithoutCoursesInput> | attendanceCreateWithoutCoursesInput[] | attendanceUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCoursesInput | attendanceCreateOrConnectWithoutCoursesInput[]
    createMany?: attendanceCreateManyCoursesInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type schedulesUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<schedulesCreateWithoutCoursesInput, schedulesUncheckedCreateWithoutCoursesInput> | schedulesCreateWithoutCoursesInput[] | schedulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCoursesInput | schedulesCreateOrConnectWithoutCoursesInput[]
    createMany?: schedulesCreateManyCoursesInputEnvelope
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
  }

  export type attendanceUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<attendanceCreateWithoutCoursesInput, attendanceUncheckedCreateWithoutCoursesInput> | attendanceCreateWithoutCoursesInput[] | attendanceUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCoursesInput | attendanceCreateOrConnectWithoutCoursesInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutCoursesInput | attendanceUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: attendanceCreateManyCoursesInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutCoursesInput | attendanceUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutCoursesInput | attendanceUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type professorsUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<professorsCreateWithoutCoursesInput, professorsUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: professorsCreateOrConnectWithoutCoursesInput
    upsert?: professorsUpsertWithoutCoursesInput
    disconnect?: professorsWhereInput | boolean
    delete?: professorsWhereInput | boolean
    connect?: professorsWhereUniqueInput
    update?: XOR<XOR<professorsUpdateToOneWithWhereWithoutCoursesInput, professorsUpdateWithoutCoursesInput>, professorsUncheckedUpdateWithoutCoursesInput>
  }

  export type sectionsUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<sectionsCreateWithoutCoursesInput, sectionsUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutCoursesInput
    upsert?: sectionsUpsertWithoutCoursesInput
    disconnect?: sectionsWhereInput | boolean
    delete?: sectionsWhereInput | boolean
    connect?: sectionsWhereUniqueInput
    update?: XOR<XOR<sectionsUpdateToOneWithWhereWithoutCoursesInput, sectionsUpdateWithoutCoursesInput>, sectionsUncheckedUpdateWithoutCoursesInput>
  }

  export type schedulesUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<schedulesCreateWithoutCoursesInput, schedulesUncheckedCreateWithoutCoursesInput> | schedulesCreateWithoutCoursesInput[] | schedulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCoursesInput | schedulesCreateOrConnectWithoutCoursesInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutCoursesInput | schedulesUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: schedulesCreateManyCoursesInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutCoursesInput | schedulesUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutCoursesInput | schedulesUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<attendanceCreateWithoutCoursesInput, attendanceUncheckedCreateWithoutCoursesInput> | attendanceCreateWithoutCoursesInput[] | attendanceUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCoursesInput | attendanceCreateOrConnectWithoutCoursesInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutCoursesInput | attendanceUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: attendanceCreateManyCoursesInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutCoursesInput | attendanceUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutCoursesInput | attendanceUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type schedulesUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<schedulesCreateWithoutCoursesInput, schedulesUncheckedCreateWithoutCoursesInput> | schedulesCreateWithoutCoursesInput[] | schedulesUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: schedulesCreateOrConnectWithoutCoursesInput | schedulesCreateOrConnectWithoutCoursesInput[]
    upsert?: schedulesUpsertWithWhereUniqueWithoutCoursesInput | schedulesUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: schedulesCreateManyCoursesInputEnvelope
    set?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    disconnect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    delete?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    connect?: schedulesWhereUniqueInput | schedulesWhereUniqueInput[]
    update?: schedulesUpdateWithWhereUniqueWithoutCoursesInput | schedulesUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: schedulesUpdateManyWithWhereWithoutCoursesInput | schedulesUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
  }

  export type sectionsCreateNestedOneWithoutGroupsInput = {
    create?: XOR<sectionsCreateWithoutGroupsInput, sectionsUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutGroupsInput
    connect?: sectionsWhereUniqueInput
  }

  export type studentsCreateNestedManyWithoutGroupsInput = {
    create?: XOR<studentsCreateWithoutGroupsInput, studentsUncheckedCreateWithoutGroupsInput> | studentsCreateWithoutGroupsInput[] | studentsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutGroupsInput | studentsCreateOrConnectWithoutGroupsInput[]
    createMany?: studentsCreateManyGroupsInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type studentsUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<studentsCreateWithoutGroupsInput, studentsUncheckedCreateWithoutGroupsInput> | studentsCreateWithoutGroupsInput[] | studentsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutGroupsInput | studentsCreateOrConnectWithoutGroupsInput[]
    createMany?: studentsCreateManyGroupsInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type sectionsUpdateOneWithoutGroupsNestedInput = {
    create?: XOR<sectionsCreateWithoutGroupsInput, sectionsUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutGroupsInput
    upsert?: sectionsUpsertWithoutGroupsInput
    disconnect?: sectionsWhereInput | boolean
    delete?: sectionsWhereInput | boolean
    connect?: sectionsWhereUniqueInput
    update?: XOR<XOR<sectionsUpdateToOneWithWhereWithoutGroupsInput, sectionsUpdateWithoutGroupsInput>, sectionsUncheckedUpdateWithoutGroupsInput>
  }

  export type studentsUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<studentsCreateWithoutGroupsInput, studentsUncheckedCreateWithoutGroupsInput> | studentsCreateWithoutGroupsInput[] | studentsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutGroupsInput | studentsCreateOrConnectWithoutGroupsInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutGroupsInput | studentsUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: studentsCreateManyGroupsInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutGroupsInput | studentsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutGroupsInput | studentsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type studentsUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<studentsCreateWithoutGroupsInput, studentsUncheckedCreateWithoutGroupsInput> | studentsCreateWithoutGroupsInput[] | studentsUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutGroupsInput | studentsCreateOrConnectWithoutGroupsInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutGroupsInput | studentsUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: studentsCreateManyGroupsInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutGroupsInput | studentsUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutGroupsInput | studentsUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type classroomsCreateNestedOneWithoutProfessor_classroom_accessInput = {
    create?: XOR<classroomsCreateWithoutProfessor_classroom_accessInput, classroomsUncheckedCreateWithoutProfessor_classroom_accessInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutProfessor_classroom_accessInput
    connect?: classroomsWhereUniqueInput
  }

  export type professorsCreateNestedOneWithoutProfessor_classroom_accessInput = {
    create?: XOR<professorsCreateWithoutProfessor_classroom_accessInput, professorsUncheckedCreateWithoutProfessor_classroom_accessInput>
    connectOrCreate?: professorsCreateOrConnectWithoutProfessor_classroom_accessInput
    connect?: professorsWhereUniqueInput
  }

  export type classroomsUpdateOneWithoutProfessor_classroom_accessNestedInput = {
    create?: XOR<classroomsCreateWithoutProfessor_classroom_accessInput, classroomsUncheckedCreateWithoutProfessor_classroom_accessInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutProfessor_classroom_accessInput
    upsert?: classroomsUpsertWithoutProfessor_classroom_accessInput
    disconnect?: classroomsWhereInput | boolean
    delete?: classroomsWhereInput | boolean
    connect?: classroomsWhereUniqueInput
    update?: XOR<XOR<classroomsUpdateToOneWithWhereWithoutProfessor_classroom_accessInput, classroomsUpdateWithoutProfessor_classroom_accessInput>, classroomsUncheckedUpdateWithoutProfessor_classroom_accessInput>
  }

  export type professorsUpdateOneWithoutProfessor_classroom_accessNestedInput = {
    create?: XOR<professorsCreateWithoutProfessor_classroom_accessInput, professorsUncheckedCreateWithoutProfessor_classroom_accessInput>
    connectOrCreate?: professorsCreateOrConnectWithoutProfessor_classroom_accessInput
    upsert?: professorsUpsertWithoutProfessor_classroom_accessInput
    disconnect?: professorsWhereInput | boolean
    delete?: professorsWhereInput | boolean
    connect?: professorsWhereUniqueInput
    update?: XOR<XOR<professorsUpdateToOneWithWhereWithoutProfessor_classroom_accessInput, professorsUpdateWithoutProfessor_classroom_accessInput>, professorsUncheckedUpdateWithoutProfessor_classroom_accessInput>
  }

  export type coursesCreateNestedManyWithoutProfessorsInput = {
    create?: XOR<coursesCreateWithoutProfessorsInput, coursesUncheckedCreateWithoutProfessorsInput> | coursesCreateWithoutProfessorsInput[] | coursesUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutProfessorsInput | coursesCreateOrConnectWithoutProfessorsInput[]
    createMany?: coursesCreateManyProfessorsInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type professor_classroom_accessCreateNestedManyWithoutProfessorsInput = {
    create?: XOR<professor_classroom_accessCreateWithoutProfessorsInput, professor_classroom_accessUncheckedCreateWithoutProfessorsInput> | professor_classroom_accessCreateWithoutProfessorsInput[] | professor_classroom_accessUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutProfessorsInput | professor_classroom_accessCreateOrConnectWithoutProfessorsInput[]
    createMany?: professor_classroom_accessCreateManyProfessorsInputEnvelope
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
  }

  export type coursesUncheckedCreateNestedManyWithoutProfessorsInput = {
    create?: XOR<coursesCreateWithoutProfessorsInput, coursesUncheckedCreateWithoutProfessorsInput> | coursesCreateWithoutProfessorsInput[] | coursesUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutProfessorsInput | coursesCreateOrConnectWithoutProfessorsInput[]
    createMany?: coursesCreateManyProfessorsInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type professor_classroom_accessUncheckedCreateNestedManyWithoutProfessorsInput = {
    create?: XOR<professor_classroom_accessCreateWithoutProfessorsInput, professor_classroom_accessUncheckedCreateWithoutProfessorsInput> | professor_classroom_accessCreateWithoutProfessorsInput[] | professor_classroom_accessUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutProfessorsInput | professor_classroom_accessCreateOrConnectWithoutProfessorsInput[]
    createMany?: professor_classroom_accessCreateManyProfessorsInputEnvelope
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
  }

  export type coursesUpdateManyWithoutProfessorsNestedInput = {
    create?: XOR<coursesCreateWithoutProfessorsInput, coursesUncheckedCreateWithoutProfessorsInput> | coursesCreateWithoutProfessorsInput[] | coursesUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutProfessorsInput | coursesCreateOrConnectWithoutProfessorsInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutProfessorsInput | coursesUpsertWithWhereUniqueWithoutProfessorsInput[]
    createMany?: coursesCreateManyProfessorsInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutProfessorsInput | coursesUpdateWithWhereUniqueWithoutProfessorsInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutProfessorsInput | coursesUpdateManyWithWhereWithoutProfessorsInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type professor_classroom_accessUpdateManyWithoutProfessorsNestedInput = {
    create?: XOR<professor_classroom_accessCreateWithoutProfessorsInput, professor_classroom_accessUncheckedCreateWithoutProfessorsInput> | professor_classroom_accessCreateWithoutProfessorsInput[] | professor_classroom_accessUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutProfessorsInput | professor_classroom_accessCreateOrConnectWithoutProfessorsInput[]
    upsert?: professor_classroom_accessUpsertWithWhereUniqueWithoutProfessorsInput | professor_classroom_accessUpsertWithWhereUniqueWithoutProfessorsInput[]
    createMany?: professor_classroom_accessCreateManyProfessorsInputEnvelope
    set?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    disconnect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    delete?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    update?: professor_classroom_accessUpdateWithWhereUniqueWithoutProfessorsInput | professor_classroom_accessUpdateWithWhereUniqueWithoutProfessorsInput[]
    updateMany?: professor_classroom_accessUpdateManyWithWhereWithoutProfessorsInput | professor_classroom_accessUpdateManyWithWhereWithoutProfessorsInput[]
    deleteMany?: professor_classroom_accessScalarWhereInput | professor_classroom_accessScalarWhereInput[]
  }

  export type coursesUncheckedUpdateManyWithoutProfessorsNestedInput = {
    create?: XOR<coursesCreateWithoutProfessorsInput, coursesUncheckedCreateWithoutProfessorsInput> | coursesCreateWithoutProfessorsInput[] | coursesUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutProfessorsInput | coursesCreateOrConnectWithoutProfessorsInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutProfessorsInput | coursesUpsertWithWhereUniqueWithoutProfessorsInput[]
    createMany?: coursesCreateManyProfessorsInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutProfessorsInput | coursesUpdateWithWhereUniqueWithoutProfessorsInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutProfessorsInput | coursesUpdateManyWithWhereWithoutProfessorsInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type professor_classroom_accessUncheckedUpdateManyWithoutProfessorsNestedInput = {
    create?: XOR<professor_classroom_accessCreateWithoutProfessorsInput, professor_classroom_accessUncheckedCreateWithoutProfessorsInput> | professor_classroom_accessCreateWithoutProfessorsInput[] | professor_classroom_accessUncheckedCreateWithoutProfessorsInput[]
    connectOrCreate?: professor_classroom_accessCreateOrConnectWithoutProfessorsInput | professor_classroom_accessCreateOrConnectWithoutProfessorsInput[]
    upsert?: professor_classroom_accessUpsertWithWhereUniqueWithoutProfessorsInput | professor_classroom_accessUpsertWithWhereUniqueWithoutProfessorsInput[]
    createMany?: professor_classroom_accessCreateManyProfessorsInputEnvelope
    set?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    disconnect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    delete?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    connect?: professor_classroom_accessWhereUniqueInput | professor_classroom_accessWhereUniqueInput[]
    update?: professor_classroom_accessUpdateWithWhereUniqueWithoutProfessorsInput | professor_classroom_accessUpdateWithWhereUniqueWithoutProfessorsInput[]
    updateMany?: professor_classroom_accessUpdateManyWithWhereWithoutProfessorsInput | professor_classroom_accessUpdateManyWithWhereWithoutProfessorsInput[]
    deleteMany?: professor_classroom_accessScalarWhereInput | professor_classroom_accessScalarWhereInput[]
  }

  export type classroomsCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<classroomsCreateWithoutSchedulesInput, classroomsUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutSchedulesInput
    connect?: classroomsWhereUniqueInput
  }

  export type coursesCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<coursesCreateWithoutSchedulesInput, coursesUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: coursesCreateOrConnectWithoutSchedulesInput
    connect?: coursesWhereUniqueInput
  }

  export type classroomsUpdateOneWithoutSchedulesNestedInput = {
    create?: XOR<classroomsCreateWithoutSchedulesInput, classroomsUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutSchedulesInput
    upsert?: classroomsUpsertWithoutSchedulesInput
    disconnect?: classroomsWhereInput | boolean
    delete?: classroomsWhereInput | boolean
    connect?: classroomsWhereUniqueInput
    update?: XOR<XOR<classroomsUpdateToOneWithWhereWithoutSchedulesInput, classroomsUpdateWithoutSchedulesInput>, classroomsUncheckedUpdateWithoutSchedulesInput>
  }

  export type coursesUpdateOneWithoutSchedulesNestedInput = {
    create?: XOR<coursesCreateWithoutSchedulesInput, coursesUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: coursesCreateOrConnectWithoutSchedulesInput
    upsert?: coursesUpsertWithoutSchedulesInput
    disconnect?: coursesWhereInput | boolean
    delete?: coursesWhereInput | boolean
    connect?: coursesWhereUniqueInput
    update?: XOR<XOR<coursesUpdateToOneWithWhereWithoutSchedulesInput, coursesUpdateWithoutSchedulesInput>, coursesUncheckedUpdateWithoutSchedulesInput>
  }

  export type coursesCreateNestedManyWithoutSectionsInput = {
    create?: XOR<coursesCreateWithoutSectionsInput, coursesUncheckedCreateWithoutSectionsInput> | coursesCreateWithoutSectionsInput[] | coursesUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutSectionsInput | coursesCreateOrConnectWithoutSectionsInput[]
    createMany?: coursesCreateManySectionsInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type groupsCreateNestedManyWithoutSectionsInput = {
    create?: XOR<groupsCreateWithoutSectionsInput, groupsUncheckedCreateWithoutSectionsInput> | groupsCreateWithoutSectionsInput[] | groupsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutSectionsInput | groupsCreateOrConnectWithoutSectionsInput[]
    createMany?: groupsCreateManySectionsInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type academic_yearsCreateNestedOneWithoutSectionsInput = {
    create?: XOR<academic_yearsCreateWithoutSectionsInput, academic_yearsUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: academic_yearsCreateOrConnectWithoutSectionsInput
    connect?: academic_yearsWhereUniqueInput
  }

  export type studentsCreateNestedManyWithoutSectionsInput = {
    create?: XOR<studentsCreateWithoutSectionsInput, studentsUncheckedCreateWithoutSectionsInput> | studentsCreateWithoutSectionsInput[] | studentsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSectionsInput | studentsCreateOrConnectWithoutSectionsInput[]
    createMany?: studentsCreateManySectionsInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type coursesUncheckedCreateNestedManyWithoutSectionsInput = {
    create?: XOR<coursesCreateWithoutSectionsInput, coursesUncheckedCreateWithoutSectionsInput> | coursesCreateWithoutSectionsInput[] | coursesUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutSectionsInput | coursesCreateOrConnectWithoutSectionsInput[]
    createMany?: coursesCreateManySectionsInputEnvelope
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
  }

  export type groupsUncheckedCreateNestedManyWithoutSectionsInput = {
    create?: XOR<groupsCreateWithoutSectionsInput, groupsUncheckedCreateWithoutSectionsInput> | groupsCreateWithoutSectionsInput[] | groupsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutSectionsInput | groupsCreateOrConnectWithoutSectionsInput[]
    createMany?: groupsCreateManySectionsInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type studentsUncheckedCreateNestedManyWithoutSectionsInput = {
    create?: XOR<studentsCreateWithoutSectionsInput, studentsUncheckedCreateWithoutSectionsInput> | studentsCreateWithoutSectionsInput[] | studentsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSectionsInput | studentsCreateOrConnectWithoutSectionsInput[]
    createMany?: studentsCreateManySectionsInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type coursesUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<coursesCreateWithoutSectionsInput, coursesUncheckedCreateWithoutSectionsInput> | coursesCreateWithoutSectionsInput[] | coursesUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutSectionsInput | coursesCreateOrConnectWithoutSectionsInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutSectionsInput | coursesUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: coursesCreateManySectionsInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutSectionsInput | coursesUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutSectionsInput | coursesUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type groupsUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<groupsCreateWithoutSectionsInput, groupsUncheckedCreateWithoutSectionsInput> | groupsCreateWithoutSectionsInput[] | groupsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutSectionsInput | groupsCreateOrConnectWithoutSectionsInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutSectionsInput | groupsUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: groupsCreateManySectionsInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutSectionsInput | groupsUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutSectionsInput | groupsUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type academic_yearsUpdateOneWithoutSectionsNestedInput = {
    create?: XOR<academic_yearsCreateWithoutSectionsInput, academic_yearsUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: academic_yearsCreateOrConnectWithoutSectionsInput
    upsert?: academic_yearsUpsertWithoutSectionsInput
    disconnect?: academic_yearsWhereInput | boolean
    delete?: academic_yearsWhereInput | boolean
    connect?: academic_yearsWhereUniqueInput
    update?: XOR<XOR<academic_yearsUpdateToOneWithWhereWithoutSectionsInput, academic_yearsUpdateWithoutSectionsInput>, academic_yearsUncheckedUpdateWithoutSectionsInput>
  }

  export type studentsUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<studentsCreateWithoutSectionsInput, studentsUncheckedCreateWithoutSectionsInput> | studentsCreateWithoutSectionsInput[] | studentsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSectionsInput | studentsCreateOrConnectWithoutSectionsInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutSectionsInput | studentsUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: studentsCreateManySectionsInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutSectionsInput | studentsUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutSectionsInput | studentsUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type coursesUncheckedUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<coursesCreateWithoutSectionsInput, coursesUncheckedCreateWithoutSectionsInput> | coursesCreateWithoutSectionsInput[] | coursesUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: coursesCreateOrConnectWithoutSectionsInput | coursesCreateOrConnectWithoutSectionsInput[]
    upsert?: coursesUpsertWithWhereUniqueWithoutSectionsInput | coursesUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: coursesCreateManySectionsInputEnvelope
    set?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    disconnect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    delete?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    connect?: coursesWhereUniqueInput | coursesWhereUniqueInput[]
    update?: coursesUpdateWithWhereUniqueWithoutSectionsInput | coursesUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: coursesUpdateManyWithWhereWithoutSectionsInput | coursesUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: coursesScalarWhereInput | coursesScalarWhereInput[]
  }

  export type groupsUncheckedUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<groupsCreateWithoutSectionsInput, groupsUncheckedCreateWithoutSectionsInput> | groupsCreateWithoutSectionsInput[] | groupsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutSectionsInput | groupsCreateOrConnectWithoutSectionsInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutSectionsInput | groupsUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: groupsCreateManySectionsInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutSectionsInput | groupsUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutSectionsInput | groupsUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type studentsUncheckedUpdateManyWithoutSectionsNestedInput = {
    create?: XOR<studentsCreateWithoutSectionsInput, studentsUncheckedCreateWithoutSectionsInput> | studentsCreateWithoutSectionsInput[] | studentsUncheckedCreateWithoutSectionsInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSectionsInput | studentsCreateOrConnectWithoutSectionsInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutSectionsInput | studentsUpsertWithWhereUniqueWithoutSectionsInput[]
    createMany?: studentsCreateManySectionsInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutSectionsInput | studentsUpdateWithWhereUniqueWithoutSectionsInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutSectionsInput | studentsUpdateManyWithWhereWithoutSectionsInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type attendanceCreateNestedManyWithoutStudentsInput = {
    create?: XOR<attendanceCreateWithoutStudentsInput, attendanceUncheckedCreateWithoutStudentsInput> | attendanceCreateWithoutStudentsInput[] | attendanceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentsInput | attendanceCreateOrConnectWithoutStudentsInput[]
    createMany?: attendanceCreateManyStudentsInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type groupsCreateNestedOneWithoutStudentsInput = {
    create?: XOR<groupsCreateWithoutStudentsInput, groupsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutStudentsInput
    connect?: groupsWhereUniqueInput
  }

  export type sectionsCreateNestedOneWithoutStudentsInput = {
    create?: XOR<sectionsCreateWithoutStudentsInput, sectionsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutStudentsInput
    connect?: sectionsWhereUniqueInput
  }

  export type attendanceUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<attendanceCreateWithoutStudentsInput, attendanceUncheckedCreateWithoutStudentsInput> | attendanceCreateWithoutStudentsInput[] | attendanceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentsInput | attendanceCreateOrConnectWithoutStudentsInput[]
    createMany?: attendanceCreateManyStudentsInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type attendanceUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<attendanceCreateWithoutStudentsInput, attendanceUncheckedCreateWithoutStudentsInput> | attendanceCreateWithoutStudentsInput[] | attendanceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentsInput | attendanceCreateOrConnectWithoutStudentsInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentsInput | attendanceUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: attendanceCreateManyStudentsInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutStudentsInput | attendanceUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentsInput | attendanceUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type groupsUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<groupsCreateWithoutStudentsInput, groupsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutStudentsInput
    upsert?: groupsUpsertWithoutStudentsInput
    disconnect?: groupsWhereInput | boolean
    delete?: groupsWhereInput | boolean
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutStudentsInput, groupsUpdateWithoutStudentsInput>, groupsUncheckedUpdateWithoutStudentsInput>
  }

  export type sectionsUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<sectionsCreateWithoutStudentsInput, sectionsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: sectionsCreateOrConnectWithoutStudentsInput
    upsert?: sectionsUpsertWithoutStudentsInput
    disconnect?: sectionsWhereInput | boolean
    delete?: sectionsWhereInput | boolean
    connect?: sectionsWhereUniqueInput
    update?: XOR<XOR<sectionsUpdateToOneWithWhereWithoutStudentsInput, sectionsUpdateWithoutStudentsInput>, sectionsUncheckedUpdateWithoutStudentsInput>
  }

  export type attendanceUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<attendanceCreateWithoutStudentsInput, attendanceUncheckedCreateWithoutStudentsInput> | attendanceCreateWithoutStudentsInput[] | attendanceUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentsInput | attendanceCreateOrConnectWithoutStudentsInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentsInput | attendanceUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: attendanceCreateManyStudentsInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutStudentsInput | attendanceUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentsInput | attendanceUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type sectionsCreateWithoutAcademic_yearsInput = {
    name: string
    courses?: coursesCreateNestedManyWithoutSectionsInput
    groups?: groupsCreateNestedManyWithoutSectionsInput
    students?: studentsCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUncheckedCreateWithoutAcademic_yearsInput = {
    id?: number
    name: string
    courses?: coursesUncheckedCreateNestedManyWithoutSectionsInput
    groups?: groupsUncheckedCreateNestedManyWithoutSectionsInput
    students?: studentsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsCreateOrConnectWithoutAcademic_yearsInput = {
    where: sectionsWhereUniqueInput
    create: XOR<sectionsCreateWithoutAcademic_yearsInput, sectionsUncheckedCreateWithoutAcademic_yearsInput>
  }

  export type sectionsCreateManyAcademic_yearsInputEnvelope = {
    data: sectionsCreateManyAcademic_yearsInput | sectionsCreateManyAcademic_yearsInput[]
    skipDuplicates?: boolean
  }

  export type sectionsUpsertWithWhereUniqueWithoutAcademic_yearsInput = {
    where: sectionsWhereUniqueInput
    update: XOR<sectionsUpdateWithoutAcademic_yearsInput, sectionsUncheckedUpdateWithoutAcademic_yearsInput>
    create: XOR<sectionsCreateWithoutAcademic_yearsInput, sectionsUncheckedCreateWithoutAcademic_yearsInput>
  }

  export type sectionsUpdateWithWhereUniqueWithoutAcademic_yearsInput = {
    where: sectionsWhereUniqueInput
    data: XOR<sectionsUpdateWithoutAcademic_yearsInput, sectionsUncheckedUpdateWithoutAcademic_yearsInput>
  }

  export type sectionsUpdateManyWithWhereWithoutAcademic_yearsInput = {
    where: sectionsScalarWhereInput
    data: XOR<sectionsUpdateManyMutationInput, sectionsUncheckedUpdateManyWithoutAcademic_yearsInput>
  }

  export type sectionsScalarWhereInput = {
    AND?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
    OR?: sectionsScalarWhereInput[]
    NOT?: sectionsScalarWhereInput | sectionsScalarWhereInput[]
    id?: IntFilter<"sections"> | number
    name?: StringFilter<"sections"> | string
    academic_year_id?: IntNullableFilter<"sections"> | number | null
  }

  export type classroomsCreateWithoutAttendanceInput = {
    name: string
    capacity?: number | null
    status?: string | null
    professor_classroom_access?: professor_classroom_accessCreateNestedManyWithoutClassroomsInput
    schedules?: schedulesCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateWithoutAttendanceInput = {
    id?: number
    name: string
    capacity?: number | null
    status?: string | null
    professor_classroom_access?: professor_classroom_accessUncheckedCreateNestedManyWithoutClassroomsInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsCreateOrConnectWithoutAttendanceInput = {
    where: classroomsWhereUniqueInput
    create: XOR<classroomsCreateWithoutAttendanceInput, classroomsUncheckedCreateWithoutAttendanceInput>
  }

  export type coursesCreateWithoutAttendanceInput = {
    name: string
    room: string
    professors?: professorsCreateNestedOneWithoutCoursesInput
    sections?: sectionsCreateNestedOneWithoutCoursesInput
    schedules?: schedulesCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutAttendanceInput = {
    id?: number
    name: string
    section_id?: number | null
    professeur_id?: number | null
    room: string
    schedules?: schedulesUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutAttendanceInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutAttendanceInput, coursesUncheckedCreateWithoutAttendanceInput>
  }

  export type studentsCreateWithoutAttendanceInput = {
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    groups?: groupsCreateNestedOneWithoutStudentsInput
    sections?: sectionsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutAttendanceInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    group_id?: number | null
    section_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type studentsCreateOrConnectWithoutAttendanceInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutAttendanceInput, studentsUncheckedCreateWithoutAttendanceInput>
  }

  export type classroomsUpsertWithoutAttendanceInput = {
    update: XOR<classroomsUpdateWithoutAttendanceInput, classroomsUncheckedUpdateWithoutAttendanceInput>
    create: XOR<classroomsCreateWithoutAttendanceInput, classroomsUncheckedCreateWithoutAttendanceInput>
    where?: classroomsWhereInput
  }

  export type classroomsUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: classroomsWhereInput
    data: XOR<classroomsUpdateWithoutAttendanceInput, classroomsUncheckedUpdateWithoutAttendanceInput>
  }

  export type classroomsUpdateWithoutAttendanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    professor_classroom_access?: professor_classroom_accessUpdateManyWithoutClassroomsNestedInput
    schedules?: schedulesUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    professor_classroom_access?: professor_classroom_accessUncheckedUpdateManyWithoutClassroomsNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type coursesUpsertWithoutAttendanceInput = {
    update: XOR<coursesUpdateWithoutAttendanceInput, coursesUncheckedUpdateWithoutAttendanceInput>
    create: XOR<coursesCreateWithoutAttendanceInput, coursesUncheckedCreateWithoutAttendanceInput>
    where?: coursesWhereInput
  }

  export type coursesUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: coursesWhereInput
    data: XOR<coursesUpdateWithoutAttendanceInput, coursesUncheckedUpdateWithoutAttendanceInput>
  }

  export type coursesUpdateWithoutAttendanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    professors?: professorsUpdateOneWithoutCoursesNestedInput
    sections?: sectionsUpdateOneWithoutCoursesNestedInput
    schedules?: schedulesUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    professeur_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
    schedules?: schedulesUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type studentsUpsertWithoutAttendanceInput = {
    update: XOR<studentsUpdateWithoutAttendanceInput, studentsUncheckedUpdateWithoutAttendanceInput>
    create: XOR<studentsCreateWithoutAttendanceInput, studentsUncheckedCreateWithoutAttendanceInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutAttendanceInput, studentsUncheckedUpdateWithoutAttendanceInput>
  }

  export type studentsUpdateWithoutAttendanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneWithoutStudentsNestedInput
    sections?: sectionsUpdateOneWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendanceCreateWithoutClassroomsInput = {
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
    courses?: coursesCreateNestedOneWithoutAttendanceInput
    students?: studentsCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateWithoutClassroomsInput = {
    id?: number
    student_id?: number | null
    course_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type attendanceCreateOrConnectWithoutClassroomsInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutClassroomsInput, attendanceUncheckedCreateWithoutClassroomsInput>
  }

  export type attendanceCreateManyClassroomsInputEnvelope = {
    data: attendanceCreateManyClassroomsInput | attendanceCreateManyClassroomsInput[]
    skipDuplicates?: boolean
  }

  export type professor_classroom_accessCreateWithoutClassroomsInput = {
    timestamp: Date | string
    action: string
    verified?: boolean | null
    professors?: professorsCreateNestedOneWithoutProfessor_classroom_accessInput
  }

  export type professor_classroom_accessUncheckedCreateWithoutClassroomsInput = {
    id?: number
    professor_id?: number | null
    timestamp: Date | string
    action: string
    verified?: boolean | null
  }

  export type professor_classroom_accessCreateOrConnectWithoutClassroomsInput = {
    where: professor_classroom_accessWhereUniqueInput
    create: XOR<professor_classroom_accessCreateWithoutClassroomsInput, professor_classroom_accessUncheckedCreateWithoutClassroomsInput>
  }

  export type professor_classroom_accessCreateManyClassroomsInputEnvelope = {
    data: professor_classroom_accessCreateManyClassroomsInput | professor_classroom_accessCreateManyClassroomsInput[]
    skipDuplicates?: boolean
  }

  export type schedulesCreateWithoutClassroomsInput = {
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    courses?: coursesCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateWithoutClassroomsInput = {
    id?: number
    course?: number | null
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
  }

  export type schedulesCreateOrConnectWithoutClassroomsInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutClassroomsInput, schedulesUncheckedCreateWithoutClassroomsInput>
  }

  export type schedulesCreateManyClassroomsInputEnvelope = {
    data: schedulesCreateManyClassroomsInput | schedulesCreateManyClassroomsInput[]
    skipDuplicates?: boolean
  }

  export type attendanceUpsertWithWhereUniqueWithoutClassroomsInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutClassroomsInput, attendanceUncheckedUpdateWithoutClassroomsInput>
    create: XOR<attendanceCreateWithoutClassroomsInput, attendanceUncheckedCreateWithoutClassroomsInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutClassroomsInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutClassroomsInput, attendanceUncheckedUpdateWithoutClassroomsInput>
  }

  export type attendanceUpdateManyWithWhereWithoutClassroomsInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutClassroomsInput>
  }

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    OR?: attendanceScalarWhereInput[]
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    id?: IntFilter<"attendance"> | number
    student_id?: IntNullableFilter<"attendance"> | number | null
    classroom_id?: IntNullableFilter<"attendance"> | number | null
    course_id?: IntNullableFilter<"attendance"> | number | null
    timestamp?: DateTimeFilter<"attendance"> | Date | string
    statut?: StringNullableFilter<"attendance"> | string | null
    verified?: BoolNullableFilter<"attendance"> | boolean | null
  }

  export type professor_classroom_accessUpsertWithWhereUniqueWithoutClassroomsInput = {
    where: professor_classroom_accessWhereUniqueInput
    update: XOR<professor_classroom_accessUpdateWithoutClassroomsInput, professor_classroom_accessUncheckedUpdateWithoutClassroomsInput>
    create: XOR<professor_classroom_accessCreateWithoutClassroomsInput, professor_classroom_accessUncheckedCreateWithoutClassroomsInput>
  }

  export type professor_classroom_accessUpdateWithWhereUniqueWithoutClassroomsInput = {
    where: professor_classroom_accessWhereUniqueInput
    data: XOR<professor_classroom_accessUpdateWithoutClassroomsInput, professor_classroom_accessUncheckedUpdateWithoutClassroomsInput>
  }

  export type professor_classroom_accessUpdateManyWithWhereWithoutClassroomsInput = {
    where: professor_classroom_accessScalarWhereInput
    data: XOR<professor_classroom_accessUpdateManyMutationInput, professor_classroom_accessUncheckedUpdateManyWithoutClassroomsInput>
  }

  export type professor_classroom_accessScalarWhereInput = {
    AND?: professor_classroom_accessScalarWhereInput | professor_classroom_accessScalarWhereInput[]
    OR?: professor_classroom_accessScalarWhereInput[]
    NOT?: professor_classroom_accessScalarWhereInput | professor_classroom_accessScalarWhereInput[]
    id?: IntFilter<"professor_classroom_access"> | number
    professor_id?: IntNullableFilter<"professor_classroom_access"> | number | null
    classroom_id?: IntNullableFilter<"professor_classroom_access"> | number | null
    timestamp?: DateTimeFilter<"professor_classroom_access"> | Date | string
    action?: StringFilter<"professor_classroom_access"> | string
    verified?: BoolNullableFilter<"professor_classroom_access"> | boolean | null
  }

  export type schedulesUpsertWithWhereUniqueWithoutClassroomsInput = {
    where: schedulesWhereUniqueInput
    update: XOR<schedulesUpdateWithoutClassroomsInput, schedulesUncheckedUpdateWithoutClassroomsInput>
    create: XOR<schedulesCreateWithoutClassroomsInput, schedulesUncheckedCreateWithoutClassroomsInput>
  }

  export type schedulesUpdateWithWhereUniqueWithoutClassroomsInput = {
    where: schedulesWhereUniqueInput
    data: XOR<schedulesUpdateWithoutClassroomsInput, schedulesUncheckedUpdateWithoutClassroomsInput>
  }

  export type schedulesUpdateManyWithWhereWithoutClassroomsInput = {
    where: schedulesScalarWhereInput
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyWithoutClassroomsInput>
  }

  export type schedulesScalarWhereInput = {
    AND?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
    OR?: schedulesScalarWhereInput[]
    NOT?: schedulesScalarWhereInput | schedulesScalarWhereInput[]
    id?: IntFilter<"schedules"> | number
    course?: IntNullableFilter<"schedules"> | number | null
    classroom_id?: IntNullableFilter<"schedules"> | number | null
    day_of_week?: StringFilter<"schedules"> | string
    start_time?: DateTimeFilter<"schedules"> | Date | string
    end_time?: DateTimeFilter<"schedules"> | Date | string
  }

  export type attendanceCreateWithoutCoursesInput = {
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
    classrooms?: classroomsCreateNestedOneWithoutAttendanceInput
    students?: studentsCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateWithoutCoursesInput = {
    id?: number
    student_id?: number | null
    classroom_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type attendanceCreateOrConnectWithoutCoursesInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutCoursesInput, attendanceUncheckedCreateWithoutCoursesInput>
  }

  export type attendanceCreateManyCoursesInputEnvelope = {
    data: attendanceCreateManyCoursesInput | attendanceCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type professorsCreateWithoutCoursesInput = {
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    professor_classroom_access?: professor_classroom_accessCreateNestedManyWithoutProfessorsInput
  }

  export type professorsUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    professor_classroom_access?: professor_classroom_accessUncheckedCreateNestedManyWithoutProfessorsInput
  }

  export type professorsCreateOrConnectWithoutCoursesInput = {
    where: professorsWhereUniqueInput
    create: XOR<professorsCreateWithoutCoursesInput, professorsUncheckedCreateWithoutCoursesInput>
  }

  export type sectionsCreateWithoutCoursesInput = {
    name: string
    groups?: groupsCreateNestedManyWithoutSectionsInput
    academic_years?: academic_yearsCreateNestedOneWithoutSectionsInput
    students?: studentsCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    academic_year_id?: number | null
    groups?: groupsUncheckedCreateNestedManyWithoutSectionsInput
    students?: studentsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsCreateOrConnectWithoutCoursesInput = {
    where: sectionsWhereUniqueInput
    create: XOR<sectionsCreateWithoutCoursesInput, sectionsUncheckedCreateWithoutCoursesInput>
  }

  export type schedulesCreateWithoutCoursesInput = {
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
    classrooms?: classroomsCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateWithoutCoursesInput = {
    id?: number
    classroom_id?: number | null
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
  }

  export type schedulesCreateOrConnectWithoutCoursesInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutCoursesInput, schedulesUncheckedCreateWithoutCoursesInput>
  }

  export type schedulesCreateManyCoursesInputEnvelope = {
    data: schedulesCreateManyCoursesInput | schedulesCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type attendanceUpsertWithWhereUniqueWithoutCoursesInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutCoursesInput, attendanceUncheckedUpdateWithoutCoursesInput>
    create: XOR<attendanceCreateWithoutCoursesInput, attendanceUncheckedCreateWithoutCoursesInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutCoursesInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutCoursesInput, attendanceUncheckedUpdateWithoutCoursesInput>
  }

  export type attendanceUpdateManyWithWhereWithoutCoursesInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutCoursesInput>
  }

  export type professorsUpsertWithoutCoursesInput = {
    update: XOR<professorsUpdateWithoutCoursesInput, professorsUncheckedUpdateWithoutCoursesInput>
    create: XOR<professorsCreateWithoutCoursesInput, professorsUncheckedCreateWithoutCoursesInput>
    where?: professorsWhereInput
  }

  export type professorsUpdateToOneWithWhereWithoutCoursesInput = {
    where?: professorsWhereInput
    data: XOR<professorsUpdateWithoutCoursesInput, professorsUncheckedUpdateWithoutCoursesInput>
  }

  export type professorsUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    professor_classroom_access?: professor_classroom_accessUpdateManyWithoutProfessorsNestedInput
  }

  export type professorsUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    professor_classroom_access?: professor_classroom_accessUncheckedUpdateManyWithoutProfessorsNestedInput
  }

  export type sectionsUpsertWithoutCoursesInput = {
    update: XOR<sectionsUpdateWithoutCoursesInput, sectionsUncheckedUpdateWithoutCoursesInput>
    create: XOR<sectionsCreateWithoutCoursesInput, sectionsUncheckedCreateWithoutCoursesInput>
    where?: sectionsWhereInput
  }

  export type sectionsUpdateToOneWithWhereWithoutCoursesInput = {
    where?: sectionsWhereInput
    data: XOR<sectionsUpdateWithoutCoursesInput, sectionsUncheckedUpdateWithoutCoursesInput>
  }

  export type sectionsUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    groups?: groupsUpdateManyWithoutSectionsNestedInput
    academic_years?: academic_yearsUpdateOneWithoutSectionsNestedInput
    students?: studentsUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    academic_year_id?: NullableIntFieldUpdateOperationsInput | number | null
    groups?: groupsUncheckedUpdateManyWithoutSectionsNestedInput
    students?: studentsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type schedulesUpsertWithWhereUniqueWithoutCoursesInput = {
    where: schedulesWhereUniqueInput
    update: XOR<schedulesUpdateWithoutCoursesInput, schedulesUncheckedUpdateWithoutCoursesInput>
    create: XOR<schedulesCreateWithoutCoursesInput, schedulesUncheckedCreateWithoutCoursesInput>
  }

  export type schedulesUpdateWithWhereUniqueWithoutCoursesInput = {
    where: schedulesWhereUniqueInput
    data: XOR<schedulesUpdateWithoutCoursesInput, schedulesUncheckedUpdateWithoutCoursesInput>
  }

  export type schedulesUpdateManyWithWhereWithoutCoursesInput = {
    where: schedulesScalarWhereInput
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyWithoutCoursesInput>
  }

  export type sectionsCreateWithoutGroupsInput = {
    name: string
    courses?: coursesCreateNestedManyWithoutSectionsInput
    academic_years?: academic_yearsCreateNestedOneWithoutSectionsInput
    students?: studentsCreateNestedManyWithoutSectionsInput
  }

  export type sectionsUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    academic_year_id?: number | null
    courses?: coursesUncheckedCreateNestedManyWithoutSectionsInput
    students?: studentsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsCreateOrConnectWithoutGroupsInput = {
    where: sectionsWhereUniqueInput
    create: XOR<sectionsCreateWithoutGroupsInput, sectionsUncheckedCreateWithoutGroupsInput>
  }

  export type studentsCreateWithoutGroupsInput = {
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    attendance?: attendanceCreateNestedManyWithoutStudentsInput
    sections?: sectionsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    section_id?: number | null
    status?: string | null
    created_at?: Date | string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutGroupsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutGroupsInput, studentsUncheckedCreateWithoutGroupsInput>
  }

  export type studentsCreateManyGroupsInputEnvelope = {
    data: studentsCreateManyGroupsInput | studentsCreateManyGroupsInput[]
    skipDuplicates?: boolean
  }

  export type sectionsUpsertWithoutGroupsInput = {
    update: XOR<sectionsUpdateWithoutGroupsInput, sectionsUncheckedUpdateWithoutGroupsInput>
    create: XOR<sectionsCreateWithoutGroupsInput, sectionsUncheckedCreateWithoutGroupsInput>
    where?: sectionsWhereInput
  }

  export type sectionsUpdateToOneWithWhereWithoutGroupsInput = {
    where?: sectionsWhereInput
    data: XOR<sectionsUpdateWithoutGroupsInput, sectionsUncheckedUpdateWithoutGroupsInput>
  }

  export type sectionsUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    courses?: coursesUpdateManyWithoutSectionsNestedInput
    academic_years?: academic_yearsUpdateOneWithoutSectionsNestedInput
    students?: studentsUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    academic_year_id?: NullableIntFieldUpdateOperationsInput | number | null
    courses?: coursesUncheckedUpdateManyWithoutSectionsNestedInput
    students?: studentsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type studentsUpsertWithWhereUniqueWithoutGroupsInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutGroupsInput, studentsUncheckedUpdateWithoutGroupsInput>
    create: XOR<studentsCreateWithoutGroupsInput, studentsUncheckedCreateWithoutGroupsInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutGroupsInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutGroupsInput, studentsUncheckedUpdateWithoutGroupsInput>
  }

  export type studentsUpdateManyWithWhereWithoutGroupsInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutGroupsInput>
  }

  export type studentsScalarWhereInput = {
    AND?: studentsScalarWhereInput | studentsScalarWhereInput[]
    OR?: studentsScalarWhereInput[]
    NOT?: studentsScalarWhereInput | studentsScalarWhereInput[]
    id?: IntFilter<"students"> | number
    name?: StringFilter<"students"> | string
    email?: StringFilter<"students"> | string
    password_hash?: StringFilter<"students"> | string
    fingerprint_id?: StringFilter<"students"> | string
    group_id?: IntNullableFilter<"students"> | number | null
    section_id?: IntNullableFilter<"students"> | number | null
    status?: StringNullableFilter<"students"> | string | null
    created_at?: DateTimeNullableFilter<"students"> | Date | string | null
  }

  export type classroomsCreateWithoutProfessor_classroom_accessInput = {
    name: string
    capacity?: number | null
    status?: string | null
    attendance?: attendanceCreateNestedManyWithoutClassroomsInput
    schedules?: schedulesCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateWithoutProfessor_classroom_accessInput = {
    id?: number
    name: string
    capacity?: number | null
    status?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClassroomsInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsCreateOrConnectWithoutProfessor_classroom_accessInput = {
    where: classroomsWhereUniqueInput
    create: XOR<classroomsCreateWithoutProfessor_classroom_accessInput, classroomsUncheckedCreateWithoutProfessor_classroom_accessInput>
  }

  export type professorsCreateWithoutProfessor_classroom_accessInput = {
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    courses?: coursesCreateNestedManyWithoutProfessorsInput
  }

  export type professorsUncheckedCreateWithoutProfessor_classroom_accessInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    courses?: coursesUncheckedCreateNestedManyWithoutProfessorsInput
  }

  export type professorsCreateOrConnectWithoutProfessor_classroom_accessInput = {
    where: professorsWhereUniqueInput
    create: XOR<professorsCreateWithoutProfessor_classroom_accessInput, professorsUncheckedCreateWithoutProfessor_classroom_accessInput>
  }

  export type classroomsUpsertWithoutProfessor_classroom_accessInput = {
    update: XOR<classroomsUpdateWithoutProfessor_classroom_accessInput, classroomsUncheckedUpdateWithoutProfessor_classroom_accessInput>
    create: XOR<classroomsCreateWithoutProfessor_classroom_accessInput, classroomsUncheckedCreateWithoutProfessor_classroom_accessInput>
    where?: classroomsWhereInput
  }

  export type classroomsUpdateToOneWithWhereWithoutProfessor_classroom_accessInput = {
    where?: classroomsWhereInput
    data: XOR<classroomsUpdateWithoutProfessor_classroom_accessInput, classroomsUncheckedUpdateWithoutProfessor_classroom_accessInput>
  }

  export type classroomsUpdateWithoutProfessor_classroom_accessInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutClassroomsNestedInput
    schedules?: schedulesUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateWithoutProfessor_classroom_accessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutClassroomsNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type professorsUpsertWithoutProfessor_classroom_accessInput = {
    update: XOR<professorsUpdateWithoutProfessor_classroom_accessInput, professorsUncheckedUpdateWithoutProfessor_classroom_accessInput>
    create: XOR<professorsCreateWithoutProfessor_classroom_accessInput, professorsUncheckedCreateWithoutProfessor_classroom_accessInput>
    where?: professorsWhereInput
  }

  export type professorsUpdateToOneWithWhereWithoutProfessor_classroom_accessInput = {
    where?: professorsWhereInput
    data: XOR<professorsUpdateWithoutProfessor_classroom_accessInput, professorsUncheckedUpdateWithoutProfessor_classroom_accessInput>
  }

  export type professorsUpdateWithoutProfessor_classroom_accessInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUpdateManyWithoutProfessorsNestedInput
  }

  export type professorsUncheckedUpdateWithoutProfessor_classroom_accessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courses?: coursesUncheckedUpdateManyWithoutProfessorsNestedInput
  }

  export type coursesCreateWithoutProfessorsInput = {
    name: string
    room: string
    attendance?: attendanceCreateNestedManyWithoutCoursesInput
    sections?: sectionsCreateNestedOneWithoutCoursesInput
    schedules?: schedulesCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutProfessorsInput = {
    id?: number
    name: string
    section_id?: number | null
    room: string
    attendance?: attendanceUncheckedCreateNestedManyWithoutCoursesInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutProfessorsInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutProfessorsInput, coursesUncheckedCreateWithoutProfessorsInput>
  }

  export type coursesCreateManyProfessorsInputEnvelope = {
    data: coursesCreateManyProfessorsInput | coursesCreateManyProfessorsInput[]
    skipDuplicates?: boolean
  }

  export type professor_classroom_accessCreateWithoutProfessorsInput = {
    timestamp: Date | string
    action: string
    verified?: boolean | null
    classrooms?: classroomsCreateNestedOneWithoutProfessor_classroom_accessInput
  }

  export type professor_classroom_accessUncheckedCreateWithoutProfessorsInput = {
    id?: number
    classroom_id?: number | null
    timestamp: Date | string
    action: string
    verified?: boolean | null
  }

  export type professor_classroom_accessCreateOrConnectWithoutProfessorsInput = {
    where: professor_classroom_accessWhereUniqueInput
    create: XOR<professor_classroom_accessCreateWithoutProfessorsInput, professor_classroom_accessUncheckedCreateWithoutProfessorsInput>
  }

  export type professor_classroom_accessCreateManyProfessorsInputEnvelope = {
    data: professor_classroom_accessCreateManyProfessorsInput | professor_classroom_accessCreateManyProfessorsInput[]
    skipDuplicates?: boolean
  }

  export type coursesUpsertWithWhereUniqueWithoutProfessorsInput = {
    where: coursesWhereUniqueInput
    update: XOR<coursesUpdateWithoutProfessorsInput, coursesUncheckedUpdateWithoutProfessorsInput>
    create: XOR<coursesCreateWithoutProfessorsInput, coursesUncheckedCreateWithoutProfessorsInput>
  }

  export type coursesUpdateWithWhereUniqueWithoutProfessorsInput = {
    where: coursesWhereUniqueInput
    data: XOR<coursesUpdateWithoutProfessorsInput, coursesUncheckedUpdateWithoutProfessorsInput>
  }

  export type coursesUpdateManyWithWhereWithoutProfessorsInput = {
    where: coursesScalarWhereInput
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyWithoutProfessorsInput>
  }

  export type coursesScalarWhereInput = {
    AND?: coursesScalarWhereInput | coursesScalarWhereInput[]
    OR?: coursesScalarWhereInput[]
    NOT?: coursesScalarWhereInput | coursesScalarWhereInput[]
    id?: IntFilter<"courses"> | number
    name?: StringFilter<"courses"> | string
    section_id?: IntNullableFilter<"courses"> | number | null
    professeur_id?: IntNullableFilter<"courses"> | number | null
    room?: StringFilter<"courses"> | string
  }

  export type professor_classroom_accessUpsertWithWhereUniqueWithoutProfessorsInput = {
    where: professor_classroom_accessWhereUniqueInput
    update: XOR<professor_classroom_accessUpdateWithoutProfessorsInput, professor_classroom_accessUncheckedUpdateWithoutProfessorsInput>
    create: XOR<professor_classroom_accessCreateWithoutProfessorsInput, professor_classroom_accessUncheckedCreateWithoutProfessorsInput>
  }

  export type professor_classroom_accessUpdateWithWhereUniqueWithoutProfessorsInput = {
    where: professor_classroom_accessWhereUniqueInput
    data: XOR<professor_classroom_accessUpdateWithoutProfessorsInput, professor_classroom_accessUncheckedUpdateWithoutProfessorsInput>
  }

  export type professor_classroom_accessUpdateManyWithWhereWithoutProfessorsInput = {
    where: professor_classroom_accessScalarWhereInput
    data: XOR<professor_classroom_accessUpdateManyMutationInput, professor_classroom_accessUncheckedUpdateManyWithoutProfessorsInput>
  }

  export type classroomsCreateWithoutSchedulesInput = {
    name: string
    capacity?: number | null
    status?: string | null
    attendance?: attendanceCreateNestedManyWithoutClassroomsInput
    professor_classroom_access?: professor_classroom_accessCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    capacity?: number | null
    status?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClassroomsInput
    professor_classroom_access?: professor_classroom_accessUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsCreateOrConnectWithoutSchedulesInput = {
    where: classroomsWhereUniqueInput
    create: XOR<classroomsCreateWithoutSchedulesInput, classroomsUncheckedCreateWithoutSchedulesInput>
  }

  export type coursesCreateWithoutSchedulesInput = {
    name: string
    room: string
    attendance?: attendanceCreateNestedManyWithoutCoursesInput
    professors?: professorsCreateNestedOneWithoutCoursesInput
    sections?: sectionsCreateNestedOneWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    section_id?: number | null
    professeur_id?: number | null
    room: string
    attendance?: attendanceUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutSchedulesInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutSchedulesInput, coursesUncheckedCreateWithoutSchedulesInput>
  }

  export type classroomsUpsertWithoutSchedulesInput = {
    update: XOR<classroomsUpdateWithoutSchedulesInput, classroomsUncheckedUpdateWithoutSchedulesInput>
    create: XOR<classroomsCreateWithoutSchedulesInput, classroomsUncheckedCreateWithoutSchedulesInput>
    where?: classroomsWhereInput
  }

  export type classroomsUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: classroomsWhereInput
    data: XOR<classroomsUpdateWithoutSchedulesInput, classroomsUncheckedUpdateWithoutSchedulesInput>
  }

  export type classroomsUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutClassroomsNestedInput
    professor_classroom_access?: professor_classroom_accessUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutClassroomsNestedInput
    professor_classroom_access?: professor_classroom_accessUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type coursesUpsertWithoutSchedulesInput = {
    update: XOR<coursesUpdateWithoutSchedulesInput, coursesUncheckedUpdateWithoutSchedulesInput>
    create: XOR<coursesCreateWithoutSchedulesInput, coursesUncheckedCreateWithoutSchedulesInput>
    where?: coursesWhereInput
  }

  export type coursesUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: coursesWhereInput
    data: XOR<coursesUpdateWithoutSchedulesInput, coursesUncheckedUpdateWithoutSchedulesInput>
  }

  export type coursesUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUpdateManyWithoutCoursesNestedInput
    professors?: professorsUpdateOneWithoutCoursesNestedInput
    sections?: sectionsUpdateOneWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    professeur_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type coursesCreateWithoutSectionsInput = {
    name: string
    room: string
    attendance?: attendanceCreateNestedManyWithoutCoursesInput
    professors?: professorsCreateNestedOneWithoutCoursesInput
    schedules?: schedulesCreateNestedManyWithoutCoursesInput
  }

  export type coursesUncheckedCreateWithoutSectionsInput = {
    id?: number
    name: string
    professeur_id?: number | null
    room: string
    attendance?: attendanceUncheckedCreateNestedManyWithoutCoursesInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type coursesCreateOrConnectWithoutSectionsInput = {
    where: coursesWhereUniqueInput
    create: XOR<coursesCreateWithoutSectionsInput, coursesUncheckedCreateWithoutSectionsInput>
  }

  export type coursesCreateManySectionsInputEnvelope = {
    data: coursesCreateManySectionsInput | coursesCreateManySectionsInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutSectionsInput = {
    name: string
    students?: studentsCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutSectionsInput = {
    id?: number
    name: string
    students?: studentsUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutSectionsInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutSectionsInput, groupsUncheckedCreateWithoutSectionsInput>
  }

  export type groupsCreateManySectionsInputEnvelope = {
    data: groupsCreateManySectionsInput | groupsCreateManySectionsInput[]
    skipDuplicates?: boolean
  }

  export type academic_yearsCreateWithoutSectionsInput = {
    annee: string
    specialite: string
    faculte: string
  }

  export type academic_yearsUncheckedCreateWithoutSectionsInput = {
    id?: number
    annee: string
    specialite: string
    faculte: string
  }

  export type academic_yearsCreateOrConnectWithoutSectionsInput = {
    where: academic_yearsWhereUniqueInput
    create: XOR<academic_yearsCreateWithoutSectionsInput, academic_yearsUncheckedCreateWithoutSectionsInput>
  }

  export type studentsCreateWithoutSectionsInput = {
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    status?: string | null
    created_at?: Date | string | null
    attendance?: attendanceCreateNestedManyWithoutStudentsInput
    groups?: groupsCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutSectionsInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    group_id?: number | null
    status?: string | null
    created_at?: Date | string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutSectionsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutSectionsInput, studentsUncheckedCreateWithoutSectionsInput>
  }

  export type studentsCreateManySectionsInputEnvelope = {
    data: studentsCreateManySectionsInput | studentsCreateManySectionsInput[]
    skipDuplicates?: boolean
  }

  export type coursesUpsertWithWhereUniqueWithoutSectionsInput = {
    where: coursesWhereUniqueInput
    update: XOR<coursesUpdateWithoutSectionsInput, coursesUncheckedUpdateWithoutSectionsInput>
    create: XOR<coursesCreateWithoutSectionsInput, coursesUncheckedCreateWithoutSectionsInput>
  }

  export type coursesUpdateWithWhereUniqueWithoutSectionsInput = {
    where: coursesWhereUniqueInput
    data: XOR<coursesUpdateWithoutSectionsInput, coursesUncheckedUpdateWithoutSectionsInput>
  }

  export type coursesUpdateManyWithWhereWithoutSectionsInput = {
    where: coursesScalarWhereInput
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyWithoutSectionsInput>
  }

  export type groupsUpsertWithWhereUniqueWithoutSectionsInput = {
    where: groupsWhereUniqueInput
    update: XOR<groupsUpdateWithoutSectionsInput, groupsUncheckedUpdateWithoutSectionsInput>
    create: XOR<groupsCreateWithoutSectionsInput, groupsUncheckedCreateWithoutSectionsInput>
  }

  export type groupsUpdateWithWhereUniqueWithoutSectionsInput = {
    where: groupsWhereUniqueInput
    data: XOR<groupsUpdateWithoutSectionsInput, groupsUncheckedUpdateWithoutSectionsInput>
  }

  export type groupsUpdateManyWithWhereWithoutSectionsInput = {
    where: groupsScalarWhereInput
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyWithoutSectionsInput>
  }

  export type groupsScalarWhereInput = {
    AND?: groupsScalarWhereInput | groupsScalarWhereInput[]
    OR?: groupsScalarWhereInput[]
    NOT?: groupsScalarWhereInput | groupsScalarWhereInput[]
    id?: IntFilter<"groups"> | number
    name?: StringFilter<"groups"> | string
    section_id?: IntNullableFilter<"groups"> | number | null
  }

  export type academic_yearsUpsertWithoutSectionsInput = {
    update: XOR<academic_yearsUpdateWithoutSectionsInput, academic_yearsUncheckedUpdateWithoutSectionsInput>
    create: XOR<academic_yearsCreateWithoutSectionsInput, academic_yearsUncheckedCreateWithoutSectionsInput>
    where?: academic_yearsWhereInput
  }

  export type academic_yearsUpdateToOneWithWhereWithoutSectionsInput = {
    where?: academic_yearsWhereInput
    data: XOR<academic_yearsUpdateWithoutSectionsInput, academic_yearsUncheckedUpdateWithoutSectionsInput>
  }

  export type academic_yearsUpdateWithoutSectionsInput = {
    annee?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
  }

  export type academic_yearsUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    annee?: StringFieldUpdateOperationsInput | string
    specialite?: StringFieldUpdateOperationsInput | string
    faculte?: StringFieldUpdateOperationsInput | string
  }

  export type studentsUpsertWithWhereUniqueWithoutSectionsInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutSectionsInput, studentsUncheckedUpdateWithoutSectionsInput>
    create: XOR<studentsCreateWithoutSectionsInput, studentsUncheckedCreateWithoutSectionsInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutSectionsInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutSectionsInput, studentsUncheckedUpdateWithoutSectionsInput>
  }

  export type studentsUpdateManyWithWhereWithoutSectionsInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutSectionsInput>
  }

  export type attendanceCreateWithoutStudentsInput = {
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
    classrooms?: classroomsCreateNestedOneWithoutAttendanceInput
    courses?: coursesCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateWithoutStudentsInput = {
    id?: number
    classroom_id?: number | null
    course_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type attendanceCreateOrConnectWithoutStudentsInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutStudentsInput, attendanceUncheckedCreateWithoutStudentsInput>
  }

  export type attendanceCreateManyStudentsInputEnvelope = {
    data: attendanceCreateManyStudentsInput | attendanceCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutStudentsInput = {
    name: string
    sections?: sectionsCreateNestedOneWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    section_id?: number | null
  }

  export type groupsCreateOrConnectWithoutStudentsInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutStudentsInput, groupsUncheckedCreateWithoutStudentsInput>
  }

  export type sectionsCreateWithoutStudentsInput = {
    name: string
    courses?: coursesCreateNestedManyWithoutSectionsInput
    groups?: groupsCreateNestedManyWithoutSectionsInput
    academic_years?: academic_yearsCreateNestedOneWithoutSectionsInput
  }

  export type sectionsUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    academic_year_id?: number | null
    courses?: coursesUncheckedCreateNestedManyWithoutSectionsInput
    groups?: groupsUncheckedCreateNestedManyWithoutSectionsInput
  }

  export type sectionsCreateOrConnectWithoutStudentsInput = {
    where: sectionsWhereUniqueInput
    create: XOR<sectionsCreateWithoutStudentsInput, sectionsUncheckedCreateWithoutStudentsInput>
  }

  export type attendanceUpsertWithWhereUniqueWithoutStudentsInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutStudentsInput, attendanceUncheckedUpdateWithoutStudentsInput>
    create: XOR<attendanceCreateWithoutStudentsInput, attendanceUncheckedCreateWithoutStudentsInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutStudentsInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutStudentsInput, attendanceUncheckedUpdateWithoutStudentsInput>
  }

  export type attendanceUpdateManyWithWhereWithoutStudentsInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutStudentsInput>
  }

  export type groupsUpsertWithoutStudentsInput = {
    update: XOR<groupsUpdateWithoutStudentsInput, groupsUncheckedUpdateWithoutStudentsInput>
    create: XOR<groupsCreateWithoutStudentsInput, groupsUncheckedCreateWithoutStudentsInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutStudentsInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutStudentsInput, groupsUncheckedUpdateWithoutStudentsInput>
  }

  export type groupsUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sections?: sectionsUpdateOneWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sectionsUpsertWithoutStudentsInput = {
    update: XOR<sectionsUpdateWithoutStudentsInput, sectionsUncheckedUpdateWithoutStudentsInput>
    create: XOR<sectionsCreateWithoutStudentsInput, sectionsUncheckedCreateWithoutStudentsInput>
    where?: sectionsWhereInput
  }

  export type sectionsUpdateToOneWithWhereWithoutStudentsInput = {
    where?: sectionsWhereInput
    data: XOR<sectionsUpdateWithoutStudentsInput, sectionsUncheckedUpdateWithoutStudentsInput>
  }

  export type sectionsUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    courses?: coursesUpdateManyWithoutSectionsNestedInput
    groups?: groupsUpdateManyWithoutSectionsNestedInput
    academic_years?: academic_yearsUpdateOneWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    academic_year_id?: NullableIntFieldUpdateOperationsInput | number | null
    courses?: coursesUncheckedUpdateManyWithoutSectionsNestedInput
    groups?: groupsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsCreateManyAcademic_yearsInput = {
    id?: number
    name: string
  }

  export type sectionsUpdateWithoutAcademic_yearsInput = {
    name?: StringFieldUpdateOperationsInput | string
    courses?: coursesUpdateManyWithoutSectionsNestedInput
    groups?: groupsUpdateManyWithoutSectionsNestedInput
    students?: studentsUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateWithoutAcademic_yearsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courses?: coursesUncheckedUpdateManyWithoutSectionsNestedInput
    groups?: groupsUncheckedUpdateManyWithoutSectionsNestedInput
    students?: studentsUncheckedUpdateManyWithoutSectionsNestedInput
  }

  export type sectionsUncheckedUpdateManyWithoutAcademic_yearsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type attendanceCreateManyClassroomsInput = {
    id?: number
    student_id?: number | null
    course_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type professor_classroom_accessCreateManyClassroomsInput = {
    id?: number
    professor_id?: number | null
    timestamp: Date | string
    action: string
    verified?: boolean | null
  }

  export type schedulesCreateManyClassroomsInput = {
    id?: number
    course?: number | null
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
  }

  export type attendanceUpdateWithoutClassroomsInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    courses?: coursesUpdateOneWithoutAttendanceNestedInput
    students?: studentsUpdateOneWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type attendanceUncheckedUpdateManyWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type professor_classroom_accessUpdateWithoutClassroomsInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    professors?: professorsUpdateOneWithoutProfessor_classroom_accessNestedInput
  }

  export type professor_classroom_accessUncheckedUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type professor_classroom_accessUncheckedUpdateManyWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    professor_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type schedulesUpdateWithoutClassroomsInput = {
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: coursesUpdateOneWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesUncheckedUpdateManyWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendanceCreateManyCoursesInput = {
    id?: number
    student_id?: number | null
    classroom_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type schedulesCreateManyCoursesInput = {
    id?: number
    classroom_id?: number | null
    day_of_week: string
    start_time: Date | string
    end_time: Date | string
  }

  export type attendanceUpdateWithoutCoursesInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classrooms?: classroomsUpdateOneWithoutAttendanceNestedInput
    students?: studentsUpdateOneWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type attendanceUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: NullableIntFieldUpdateOperationsInput | number | null
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type schedulesUpdateWithoutCoursesInput = {
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    classrooms?: classroomsUpdateOneWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schedulesUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentsCreateManyGroupsInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    section_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type studentsUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: attendanceUpdateManyWithoutStudentsNestedInput
    sections?: sectionsUpdateOneWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type coursesCreateManyProfessorsInput = {
    id?: number
    name: string
    section_id?: number | null
    room: string
  }

  export type professor_classroom_accessCreateManyProfessorsInput = {
    id?: number
    classroom_id?: number | null
    timestamp: Date | string
    action: string
    verified?: boolean | null
  }

  export type coursesUpdateWithoutProfessorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUpdateManyWithoutCoursesNestedInput
    sections?: sectionsUpdateOneWithoutCoursesNestedInput
    schedules?: schedulesUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutProfessorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUncheckedUpdateManyWithoutCoursesNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateManyWithoutProfessorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
  }

  export type professor_classroom_accessUpdateWithoutProfessorsInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classrooms?: classroomsUpdateOneWithoutProfessor_classroom_accessNestedInput
  }

  export type professor_classroom_accessUncheckedUpdateWithoutProfessorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type professor_classroom_accessUncheckedUpdateManyWithoutProfessorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type coursesCreateManySectionsInput = {
    id?: number
    name: string
    professeur_id?: number | null
    room: string
  }

  export type groupsCreateManySectionsInput = {
    id?: number
    name: string
  }

  export type studentsCreateManySectionsInput = {
    id?: number
    name: string
    email: string
    password_hash: string
    fingerprint_id: string
    group_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type coursesUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUpdateManyWithoutCoursesNestedInput
    professors?: professorsUpdateOneWithoutCoursesNestedInput
    schedules?: schedulesUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    professeur_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
    attendance?: attendanceUncheckedUpdateManyWithoutCoursesNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type coursesUncheckedUpdateManyWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    professeur_id?: NullableIntFieldUpdateOperationsInput | number | null
    room?: StringFieldUpdateOperationsInput | string
  }

  export type groupsUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    students?: studentsUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    students?: studentsUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateManyWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type studentsUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: attendanceUpdateManyWithoutStudentsNestedInput
    groups?: groupsUpdateOneWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateManyWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendanceCreateManyStudentsInput = {
    id?: number
    classroom_id?: number | null
    course_id?: number | null
    timestamp: Date | string
    statut?: string | null
    verified?: boolean | null
  }

  export type attendanceUpdateWithoutStudentsInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classrooms?: classroomsUpdateOneWithoutAttendanceNestedInput
    courses?: coursesUpdateOneWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type attendanceUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: NullableIntFieldUpdateOperationsInput | number | null
    course_id?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}