// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------

/**
 * @apiDefine TokenError
 * @apiVersion 0.1.0
 *
 * @apiError Unauthorized Only authenticated users can access the data.
 *
 * @apiErrorExample  Unauthorized
 *     HTTP/1.1 401
 *     {
 *       "message": "Unauthenticated"
 *     }
 */
/**
 * @apiDefine APIPermissionError
 * @apiVersion 0.1.0
 *
 * @apiError APIPermissionRequired User should have API permission.
 *
 * @apiErrorExample  APIPermissionRequired
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 0,
 *       "errorCode": "APIPermissionRequired",
 *       "errorMessage": "You don't have permission to this API function"
 *     }
 */

/**
 * @apiDefine InvalIdClientError
 * @apiVersion 0.1.0
 *
 * @apiError InvalIdClient InvalId client.
 *
 * @apiErrorExample  InvalIdClient
 *     HTTP/1.1 401
 *     {
 *       "error":"Invalid_client",
 *       "message":"Client authentication failed"
 *     }
 */

/**
 * @apiDefine InvalIdCredentialsError
 * @apiVersion 0.1.0
 *
 * @apiError InvalIdCredentials The user credentials were incorrect.
 *
 * @apiErrorExample  InvalIdCredentials
 *     HTTP/1.1 401
 *     {
 *       "error":"Invalid_credentials",
 *       "message":"The user credentials were incorrect"
 *     }
 */

/**
 * @apiDefine UnauthorizedError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError UnauthorizedUser Facility Id required to validate the user.
 *
 * @apiErrorExample  UnauthorizedUser
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "UnauthorizedUser",
 *       "status": 0,
 *       "errorMessage": "The user has no access to the facility"
 *     }
 */

/**
 * @apiDefine NodataFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError NodataFound Empty request data.
 *
 * @apiErrorExample  NodataFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "NodataFoundError",
 *       "status": 0,
 *       "errorMessage": "Empty data found"
 *     }
 */

/**
 * @apiDefine FacilityIdRequiredError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError FacilityIdRequired Facility Id required to validate the user.
 *
 * @apiErrorExample  FacilityIdRequired
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "FacilityIdRequired",
 *       "status": 0,
 *       "errorMessage": "Facility Id required in the request"
 *     }
 */

/**
 * @apiDefine ResidentNotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError ResidentNotFound resident not found.
 *
 * @apiErrorExample  ResidentNotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "ResidentNotFound",
 *       "status": 0,
 *       "errorMessage": "resident not found"
 *     }
 */

/**
 * @apiDefine UnitNotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError UnitNotFound Unit not found.
 *
 * @apiErrorExample  UnitNotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "UnitNotFound",
 *       "status": 0,
 *       "errorMessage": "Unit not found"
 *     }
 */

/**
 * @apiDefine BedNotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError BedNotFound Bed not found.
 *
 * @apiErrorExample  BedNotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "BedNotFound",
 *       "status": 0,
 *       "errorMessage": "Bed not found"
 *     }
 */

/**
 * @apiDefine RoomNotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError RoomNotFound Room not found.
 *
 * @apiErrorExample  RoomNotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "RoomNotFound",
 *       "status": 0,
 *       "errorMessage": "Room not found"
 *     }
 */

/**
 * @apiDefine BedLimitReachedError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError BedLimitReached If facility subscription payment type is `per bed` basis, and total number of beds exceeds the limit, further bed addition will not be allowed.
 *
 * @apiErrorExample  BedLimitReached
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "BedLimitReached",
 *       "status": 0,
 *       "errorMessage": "The maximum number of beds allocated to your facility has been reached. Please contact SoupedUp on (03) 9543 4052 to discuss."
 *     }
 */

/**
 * @apiDefine SubunitNotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError SubunitNotFound Subunit not found.
 *
 * @apiErrorExample  SubunitNotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "SubunitNotFound",
 *       "status": 0,
 *       "errorMessage": "Subunit not found"
 *     }
 */

/**
 * @apiDefine FacilityNotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError FacilityNotFound Facility not found.
 *
 * @apiErrorExample  FacilityNotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "FacilityNotFound",
 *       "status": 0,
 *       "errorMessage": "Facility not found"
 *     }
 */

/**
 * @apiDefine NameRequiredError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError NameRequired Name required.
 *
 * @apiErrorExample  NameRequired
 *    HTTP/1.1 200 OK
 *     {
 *       "errorCode": "NameRequired",
 *       "status": 0,
 *       "errorMessage": "Name required"
 *     }
 */

/**
 * @apiDefine RoomIdRequiredError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError RoomIdRequired Room id required.
 *
 * @apiErrorExample  RoomIdRequired
 *    HTTP/1.1 200 OK
 *     {
 *       "errorCode": "RoomIdRequired",
 *       "status": 0,
 *       "errorMessage": "RoomId required in the request"
 *     }
 */

/**
 * @apiDefine UnitIdRequiredError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError UnitIdRequired Unit id required.
 *
 * @apiErrorExample  UnitIdRequired
 *    HTTP/1.1 200 OK
 *     {
 *       "errorCode": "UnitIdRequired",
 *       "status": 0,
 *       "errorMessage": "UnitId required in the request"
 *     }
 */

/**
 * @apiDefine SubunitIdRequiredError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError SubunitIdRequired Subunit id required.
 *
 * @apiErrorExample  SubunitIdRequired
 *    HTTP/1.1 200 OK
 *     {
 *       "errorCode": "SubunitIdRequired",
 *       "status": 0,
 *       "errorMessage": "SubunitId required in the request"
 *     }
 */

/**
 * @apiDefine BedIdRequiredError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError BedIdRequired Bed id required.
 *
 * @apiErrorExample  BedIdRequired
 *    HTTP/1.1 200 OK
 *     {
 *       "errorCode": "BedIdRequired",
 *       "status": 0,
 *       "errorMessage": "BedId required in the request"
 *     }
 */

/**
 * @apiDefine NotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError NotFound Unit/Room/Bed not Found.
 *
 * @apiErrorExample  NotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "NotFound",
 *       "status": 0,
 *       "errorMessage": "Unit/Room/Bed not found"
 *     }
 */

/**
 * @apiDefine SwapNotFoundError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError SwapNotFound resident with Id provIded for swapping not found.
 *
 * @apiErrorExample  SwapNotFound
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "SwapNotFound",
 *       "status": 0,
 *       "errorMessage": "resident with Id provIded for swapping not found"
 *     }
 */

/**
 * @apiDefine BedExistError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError BedExist Bed already exists.
 *
 * @apiErrorExample  BedExist
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "BedExist",
 *       "status": 0,
 *       "errorMessage": "Bed already exists"
 *     }
 */

/**
 * @apiDefine RoomExistError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError RoomExist Room already exists.
 *
 * @apiErrorExample  RoomExist
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "RoomExist",
 *       "status": 0,
 *       "errorMessage": "Room already exists"
 *     }
 */

/**
 * @apiDefine UnitExistError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError UnitExist Unit already exists.
 *
 * @apiErrorExample  UnitExist
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "UnitExist",
 *       "status": 0,
 *       "errorMessage": "Unit already exists"
 *     }
 */

/**
 * @apiDefine SubunitExistError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError SubunitExist Subunit already exists.
 *
 * @apiErrorExample  SubunitExist
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "SubunitExist",
 *       "status": 0,
 *       "errorMessage": "Subunit already exists"
 *     }
 */

/**
 * @apiDefine residentExistError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError residentExist resident already exists.
 *
 * @apiErrorExample  residentExist
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "residentExist",
 *       "status": 0,
 *       "errorMessage": "resident already exists"
 *     }
 */

/**
 * @apiDefine residentIdExistError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError residentIdExist resident with the given Id already exists.
 *
 * @apiErrorExample  residentIdExist
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "residentIdExist",
 *       "status": 0,
 *       "errorMessage": "resident with the given Id already exists"
 *     }
 */

/**
 * @apiDefine BedOccupiedError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError BedOccupied Bed coccupied by another resident.
 *
 * @apiErrorExample  BedOccupied
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "BedOccupied",
 *       "status": 0,
 *       "errorMessage": "Bed occupied by another resident"
 *     }
 */

/**
 * @apiDefine ValidationError
 * @apiGroup 200
 * @apiVersion 0.1.0
 *
 * @apiError RequiredFields All resident fields and values are required.
 *
 * @apiErrorExample  RequiredFields
 *     HTTP/1.1 200 OK
 *     {
 *       "errorCode": "RequiredFields",
 *       "status": 0,
 *       "errorMessage": "All resident fields and values are required"
 *     }
 */

/**
 * @apiDefine DateFormatError
 * @apiVersion 0.1.0
 *
 * @apiError DateFormatError Date format expetced is 'yyyy-mm-dd'.
 *
 * @apiErrorExample  DateFormatError
 *     HTTP/1.1 401
 *     {
 *       "errorCode": "DateFormatError",
 *       "status": 0,
 *       "errorMessage": "Date format expetced is 'yyyy-mm-dd'"
 *     }
 */

// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine FacilityUser Facility-user access rights needed.
 * Facilitywise authentication required.
 *
 *
 * facility_id (Facility Id of the resident.) required along with request parameters
 * @apiVersion 0.1.0
 */

/**
 * @apiDefine AccessToken API calls are secured with OAuth2 access tokens.
 * Oauth authentication can be achieved by including access token in the api call request.
 *
 * 'headers' => array('Authorization' => "Bearer [access-token]")
 *
 * @apiVersion 0.1.0
 */

/**
 * @api {post} oauth/token Access token request
 * @apiVersion 0.1.0
 * @apiName RequestToken
 * @apiGroup Authentication
 *
 * @apiDescription To get access token for the API calls
 *
 * @apiParam {Integer} client_id Client Id.
 * @apiParam {String} client_secret Client secret.
 * @apiParam {String} grant_type The only grant_type that is supported at this moment is 'password'.
 * @apiParam {String} username Username.
 * @apiParam {String} password Password.
 * @apiParam {String} scope Use an empty string for this parameter's value.
 *
 * @apiSuccess {String} msg   JSON containing access token
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *  {"token_type":"Bearer", "expires_in":3155673600, "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4","refresh_token":"jxWdmG3fAbTxKTt9JDR1lnl0FjBa5sqD7KRrnkvSrQQRjAJpDmGPvJa5y6UFI087BII+0uXa1ZHRmKtOA1ewC8AoHoPT\/XhC3B8fmalYVTdNN+Ttqvs+u9gZrus4U+F9+OQWuJA4YQFE4JBh1VjBPdXE1PjA0gvksWcVq9gESD5GomYJUme3EQ41FGNgVa4kPbpl4yS6zqbo7crDfz+fyoQXAlG+eMvFXSBygYLvkt1oPlEP+T5YwUxla1L3T\/CdhLOAOp\/nLv9vkFLoF3Lj43otwuRipT6xf\/mC5CKj1K3BgaXb+ZpFdRw5wjt06pEKOah296Xe\/EdsDLzkqgbUsKaAkdb0JJuS258H1BRoQFDIFDHTJgawHd916ipv2YrNlcsp2Liy3wKGygyRfRbmTvZAVDI6OCtC37X9pdXD8XesvIwJWqhof2bColu6INWp\/CSjfDHFv+OuA1AIttu6zpYrCvyobZLtDw8eE2ciX4VbDE\/cKm7q+a7xVqKDfcijjTA7LNGgfwEy2OaUgqTemRScyC0IuOlVksoYbhqd+SlTXA84lp7sz0I7h5jDk6Pt124ZJUF5u7u6HqGH6SzRe\/xu8zoKQ15ccOCzE0ZRgocM8Dq\/hv9J6H5ajbGFluHzBnBpoxrPyho6BmRQZMjDtUexCXrXz7miC9+zLOcbt3s="}
 *
 * @apiUse InvalIdClientError
 * @apiUse InvalIdCredentialsError
 *
 */

/**
 * @api {post} api/unit/add Add new unit
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName AddUnit
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription  To add new unit(Unit).
 *
 * @apiParam {Number} unit_id Id of the unit.
 * @apiParam {String} name Name of the unit.
 * @apiParam {Number} facility_id Facility Id of the location.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Unit added"
 *     }
 *
 * @apiUse TokenError
 * @apiUse FacilityNotFoundError
 * @apiUse FacilityIdRequiredError
 * @apiUse NameRequiredError
 * @apiUse UnitExistError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse UnitIdRequiredError
 *
 */

/**
 * @api {post} api/unit/:Id/edit Update unit
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName UpdateUnit
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription  To update existing unit(Unit).
 *
 * @apiParam {String} name Name of the unit.
 * @apiParam {Number} facility_id Facility Id of the location.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Unit updated"
 *     }
 *
 * @apiUse TokenError
 * @apiUse FacilityNotFoundError
 * @apiUse FacilityIdRequiredError
 * @apiUse UnitExistError
 * @apiUse NameRequiredError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 *
 */

/**
 * @api {post} api/subunit/add Add new subunit
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName AddSubunit
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription  To add new subunit(sub-Unit).
 *
 * @apiParam {Number} sub_unit_id Id of the subunit.
 * @apiParam {Number} unit_id Id of the unit.
 * @apiParam {String} name Name of the subunit.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Subunit added"
 *     }
 * @apiUse TokenError
 * @apiUse FacilityNotFoundError
 * @apiUse UnitNotFoundError
 * @apiUse NameRequiredError
 * @apiUse SubunitExistError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse UnitIdRequiredError
 * @apiUse SubunitIdRequiredError
 *
 */

/**
 * @api {post} api/subunit/:Id/edit Update subunit
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName UpdateSubunit
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription  To update existing subunit(sub-Unit).
 *
 * @apiParam {Number} unit_id Id of the unit.
 * @apiParam {String} name Name of the subunit.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Subunit updated"
 *     }
 * @apiUse TokenError
 * @apiUse FacilityNotFoundError
 * @apiUse UnitNotFoundError
 * @apiUse NameRequiredError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse SubunitExistError
 * @apiUse UnitIdRequiredError
 *
 */

/**
 * @api {post} api/room/add Add new room
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName AddRoom
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription  To add new room.
 *
 * @apiParam {Number} room_id Id of the room.
 * @apiParam {Number} sub_unit_id Id of the subunit.
 * @apiParam {String} name Name of the room.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Room added"
 *     }
 * @apiUse TokenError
 * @apiUse SubunitNotFoundError
 * @apiUse NameRequiredError
 * @apiUse RoomExistError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse SubunitIdRequiredError
 * @apiUse RoomIdRequiredError
 *
 */

/**
 * @api {post} api/room/:Id/edit Update room
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName UpdateRoom
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription  To update existing room.
 *
 * @apiParam {Number} sub_unit_id Id of the subunit.
 * @apiParam {String} name Name of the room.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Room updated"
 *     }
 * @apiUse TokenError
 * @apiUse SubunitNotFoundError
 * @apiUse NameRequiredError
 * @apiUse RoomExistError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse SubunitIdRequiredError
 *
 */

/**
 * @api {post} api/bed/add Add new bed
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName AddBed
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription Add new bed.
 *
 * @apiParam {Number} bed_id Id of the bed.
 * @apiParam {Number} room_id Id of the room.
 * @apiParam {String} name Name of the bed.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Bed added"
 *     }
 *
 * @apiUse TokenError
 * @apiUse RoomNotFoundError
 * @apiUse NameRequiredError
 * @apiUse BedExistError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse BedIdRequiredError
 * @apiUse RoomIdRequiredError
 * @apiUse BedLimitReachedError
 */

/**
 * @api {post} api/bed/:Id/edit Update bed
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName UpdateBed
 * @apiGroup Location
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription To update existing bed.
 *
 * @apiParam {Number} room_id Id of the room.
 * @apiParam {String} name Name of the bed.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "Bed updated"
 *     }
 * @apiUse TokenError
 * @apiUse RoomNotFoundError
 * @apiUse BedExistError
 * @apiUse NameRequiredError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse RoomIdRequiredError
 *
 */


/**
 * @api {post} api/resident/add Add a resident
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName Addresident
 * @apiGroup resident
 * @apiPermission FacilityUser
 *
 * @apiDescription Add a resident
 *
 * @apiParam {String} first_name First name of the resident.
 * @apiParam {String} last_name Last name of the resident.
 * @apiParam {String} gender Gender of the resident (Expected values - 'Male', 'Female', 'Intersex', 'Not_Specified', 'Not_specified', 'Not Specified', 'Undisclosed', 'Transgender').
 * @apiParam {String} preferred_name Preffered name of the resident.
 * @apiParam {String} dob date of birth of the resident (Date format expetced is 'yyyy-mm-dd').
 * @apiParam {Number} resident_id Id of the resident.
 * @apiParam {Number} facility_id Facility Id of the resident.
 * @apiParam {Number} room_id Room Id of the resident.
 * @apiParam {Number} bed_id Bed Id of the resident.
 * @apiParam {Number} sub_unit_id Subunit Id of the resident.
 * @apiParam {Number} unit_id Unit Id of the resident.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 * Success Example
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "resident Added"
 *     }
 * @apiUse TokenError
 * @apiUse FacilityNotFoundError
 * @apiUse RoomNotFoundError
 * @apiUse BedNotFoundError
 * @apiUse UnitNotFoundError
 * @apiUse SubunitNotFoundError
 * @apiUse FacilityIdRequiredError
 * @apiUse residentExistError
 * @apiUse BedOccupiedError
 * @apiUse residentIdExistError
 * @apiUse ValidationError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse DateFormatError
 *
 */

/**
 * @api {post} api/resident/:Id/edit Update resident details
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName Postresident
 * @apiGroup resident
 * @apiPermission FacilityUser
 *
 * @apiDescription Update resident details of a resident with Id specified in url
 *
 * @apiParam {String} first_name First name of the resident.
 * @apiParam {String} last_name Last name of the resident.
 * @apiParam {String} gender Gender of the resident (Expected values - 'Male', 'Female', 'Intersex', 'Not_Specified', 'Not_specified', 'Not Specified', 'Undisclosed', 'Transgender').
 * @apiParam {String} preferred_name Preffered name of the resident.
 * @apiParam {String} dob date of birth of the resident (Date format expetced is 'yyyy-mm-dd').
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "resident Updated"
 *     }
 * @apiUse TokenError
 * @apiUse ResidentNotFoundError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse DateFormatError
 *
 */

/**
 * @api {post} api/resident/:Id/archive Discharge a resident
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName archiveresident
 * @apiGroup resident
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription Discharge a resident , The resident is archived, does not occupy a bed and does not appear in catering reports.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "resident archived"
 *     }
 * @apiUse TokenError
 * @apiUse  ResidentNotFoundError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 *
 */

/**
 * @api {post} api/resident/:Id/restore Restoring a resident
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName RestoreResident
 * @apiGroup resident
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription Restore a resident , The resident will be checked against bed availability.
 *
 * @apiParam {Number} facility_id Facility Id of the resident.
 * @apiParam {Number} room_id Room Id of the resident.
 * @apiParam {Number} bed_id Bed Id of the resident.
 * @apiParam {Number} sub_unit_id Subunit Id of the resident.
 * @apiParam {Number} unit_id Unit Id of the resident.
 *
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "resident restored"
 *     }
 * @apiUse TokenError
 * @apiUse ResidentNotFoundError
 * @apiUse UnitNotFoundError
 * @apiUse SubunitNotFoundError
 * @apiUse RoomNotFoundError
 * @apiUse BedNotFoundError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse BedIdRequiredError
 * @apiUse RoomIdRequiredError
 * @apiUse UnitIdRequiredError
 * @apiUse SubunitIdRequiredError
 * @apiUse BedOccupiedError
 *
 */

/**
 * @api {post} api/resident/:Id/status To reserve Bed
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName ChangeStatus
 * @apiGroup resident
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription To make resident active or inactive and reserves bed.
 *
 * @apiParam {Number} status If status = 0, resident status changed to inactive, if status =1, then the resident made active. The resident's bed will be reserved when status made inactive.
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "resident made active"
 *     }
 * @apiUse TokenError
 * @apiUse ResidentNotFoundError
 * @apiUse FacilityNotFoundError
 * @apiUse BedNotFoundError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 *
 */


/**
 * @api {post} api/resident/:Id/transfer To transfer a resident
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName Transferresident
 * @apiGroup resident
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription  To transfer a resident within facility. If swap_resident_id >  0, the resident locations are swapped with the resident specified by this Id
 else if reserve_bed option is set to 1, then transfer resident to new location and current bed reserved.
 *
 * @apiParam {Number} unit_id Unit Id of the resident.
 * @apiParam {Number} sub_unit_id Id of the subunit.
 * @apiParam {Number} room_id Room Id of the resident.
 * @apiParam {Number} bed_id Bed Id of the resident.
 * @apiParam {Number} swap_resident_id resident Id with with locations to be swapped
 * @apiParam {Number} reserve_bed If 1, transfer resident to new location and reserve bed, else transfer, but do not reserve bed
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "resident location changed and bed reserved"
 *     }
 *
 * @apiUse TokenError
 * @apiUse ResidentNotFoundError
 * @apiUse SwapNotFoundError
 * @apiUse UnitNotFoundError
 * @apiUse SubunitNotFoundError
 * @apiUse RoomNotFoundError
 * @apiUse BedNotFoundError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 * @apiUse BedIdRequiredError
 * @apiUse RoomIdRequiredError
 * @apiUse UnitIdRequiredError
 * @apiUse SubunitIdRequiredError
 *
 */

/**
 * @api {post} api/resident/:Id/dietaryupdate Update dietary details
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName UpdateDiatary
 * @apiGroup resident
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription Update resident dietory details of a resident
 *
 * @apiParam {String} dp_lunch
 * @apiParam {String} supp_at
 * @apiParam {String} ds_afternoon_tea
 * @apiParam {String} supp_lunch
 * @apiParam {String} ds_supper
 * @apiParam {String} dp_dinner
 * @apiParam {String} ds_morning_snack
 * @apiParam {String} ds_afternoon_tea
 * @apiParam {String} supp_breakfast
 * @apiParam {String} bf_toast
 * @apiParam {String} dp_mt
 * @apiParam {String} ds_food_assistive_device
 * @apiParam {String} ds_dinner
 * @apiParam {String} lunch_dinner_comment
 * @apiParam {String} ds_beverage_assistive_device
 * @apiParam {String} bf_cereal
 * @apiParam {String} supp_mt
 * @apiParam {String} ds_lunch
 * @apiParam {String} likes
 * @apiParam {String} dislike
 * @apiParam {String} bf_fruits
 * @apiParam {String} supp_supper
 * @apiParam {String} bf_tea_coffee
 * @apiParam {String} bf_milk
 * @apiParam {String} bf_juice
 * @apiParam {String} ds_afternoon_snack
 * @apiParam {String} dp_breakfast
 * @apiParam {String} dp_at
 * @apiParam {String} dp_supper
 * @apiParam {String} bf_spread
 * @apiParam {String} bf_alternatives_comments
 * @apiParam {String} supp_dinner
 * @apiParam {String} alergies
 * @apiParam {String} intolerance
 * @apiParam {String} diabets_diet
 * @apiParam {String} individual_diets
 * @apiParam {String} ds_morning_tea
 * @apiParam {Number} thickened_fluid_id
 * @apiParam {Number} portion_size_id
 * @apiParam {Number} texture_id
 *
 * @apiSuccess {Number} status      0-failure 1-success
 * @apiSuccess {String} msg         Success message or failure message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 1,
 *       "msg": "resident dietary details updated"
 *     }
 *
 * @apiUse TokenError
 * @apiUse  ResidentNotFoundError
 * @apiUse UnauthorizedError
 * @apiUse NodataFoundError
 * @apiUse APIPermissionError
 *
 */

/**
 * @api {get} api/resident/:Id/dietarydetails Get dietory details
 * @apiHeader {String} Authorization Access token for authenticating user(See example).
 * @apiHeader {String} Accept application/json(See example).
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       'Authorization' : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdlZTg5YTJlNDI0NDQzMDcwZGMzMmFkYTk1OTZiYThmMWMzODEzMWY1MzczMDI0NzhjZTE3MDI1NTQwOThiYTZjODJmMzE1N2U1ZTk1YWI2In0.eyJhdWQiOiIxIiwianRpIjoiN2VlODlhMmU0MjQ0NDMwNzBkYzMyYWRhOTU5NmJhOGYxYzM4MTMxZjUzNzMwMjQ3OGNlMTcwMjU1NDA5OGJhNmM4MmYzMTU3ZTVlOTVhYjYiLCJpYXQiOjE0NzY2OTQzMjAsIm5iZiI6MTQ3NjY5NDMyMCwiZXhwIjo0NjMyMzY3OTIwLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.Pk7bC9ItImcXSVJ1PfT6djlheBRUNGWaTn_OQcNZgv5al0hT79KIGtjET-TijH9MxZW7Fr2EErJXKEy9kl_NutmNa4QqxBkyi-liECPWFGPtMNIaK6hg6_4m-LowqoHpqXnxM_38NZInMAxvLe5Dk8ZTXvHOaITg3vegtJTtQXHfA6a3ImO9_EG9QOZxgsEWzL1df90zs6VtuzjdYyzP7Dtclg8bRaJDD71lYEPOOikUih1QaXMHvvLw0vgs8V1HdrYxzoxkpPqGK3WkrW8zB7vXBodiRw0JjCtaEgnlE61EEE6DPY2odFgz975tnf84SdU0PiV1q94DGgzPpZ6mPN8qc1DsPyqy32BcTaZU2nWm_brLdIQN9uI0KiLkEWPyhtLxIj-93vzrZmwqHFe4YfzoH9UVNTW_JQqr82TLadaoaZD-o3M_qoSF70MgU4s8wMaheJEu6QQ16XRS_pN8G8jnT4C8clsj9BreKkL3QWHG_LzAiZAtq4MTFudATwg5KWJ3G8WpoDpq42ofyei4xsnFCwEDbPhwIP7mOs65uczLGVR1f0pkCPrE_VdgORz5fZLWicET88kvri1JdT1-zCWScfX7hLq0KFKO7ZL79Mpscphp8mTY_-sPF3yXHaNbEIixAUTYJHvnZrGc87fjb_G32Ap6crDVDq-9Gdv97E4",
 *       'Accept' :  'application/json'
 *     }
 * @apiVersion 0.1.0
 * @apiName Getresident
 * @apiGroup resident
 * @apiPermission FacilityUser
 * @apiPermission AccessToken
 *
 * @apiDescription Get resident dietary details of a resident
 *
 *
 * @apiSuccess {Json} data
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"thickened_fluid_id":2,"supp_at":"Supplement (afternoon tea)","dp_lunch":"Lunch","ds_afternoon_tea":"Sugar, Cordial","supp_lunch":"Supplement (lunch)","ds_supper":"Milo, \n Sugar, Tea","dp_dinner":"Dinner","ds_morning_snack":"Morning Tea Snack","supp_breakfast":"Supplement (breakfast)","bf_toast":"White, Wholemeal","dp_mt":"Morning Tea","ds_food_assistive_device":"Food Assistive Devices","ds_dinner":"Coffee, Equal, Cordial","lunch_dinner_comment":"Cultural\/Religious Specific Comments","ds_beverage_assistive_device":"Tumbler, Thermal Mug, Double handed mug","bf_cereal":"PorrIdge \/ oats, Corn flakes or similar","supp_mt":"Supplement (morning tea)","portion_size_id":1,"ds_lunch":"Equal,\n Milo","likes":"Food & drinks like","bf_fruits":"Prunes Whole X, Puree Prunes","supp_supper":"Supplement (supper)","bf_tea_coffee":"Tea, Coffee","bf_milk":"Hot, Cold","dislike":"Food & drinks dislike","bf_juice":"Orange, Apple","ds_afternoon_snack":"Snack 2","dp_breakfast":"Breakfast","dp_at":"Afternoon Tea","dp_supper":"Supper","bf_alternatives_comments":"Other Breakfast information","bf_spread":"Butter, Margarine","texture_id":1,"ds_morning_tea":"Tea, Milk, Sugar","individual_diets":"C, HC, LC, NA, DF, HE, LF, NFT, EG, HF, LFR, NMC, F, HFT, LFT, PEG, GF, HP, LP, V, H, K, LS, WRD","supp_dinner":"Supplement (dinner)","diabets_diet":"D1","alergies":"test","intolerance":"test"}
 *
 * @apiUse TokenError
 * @apiUse  ResidentNotFoundError
 * @apiUse UnauthorizedError
 * @apiUse APIPermissionError
 *
 */




