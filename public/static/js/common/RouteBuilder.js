class RouteBuilder {
	constructor(adapter) {
		this.adapter = adapter;
	}

	async getRoute(from, to) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(THIS_IS_ROUTE_EMITATION)
			}, 500)
		})
	}

	async buildRoute(from, to) {
		let data = await this.getRoute(from, to);
		let route = data.routes[0];
		let points = [];

		route.legs.forEach(leg => leg.steps.forEach(step => {
			let coordinatesArray = polyline.decode(step.geometry);
			points = points.concat(coordinatesArray);

			if (step.mode === 'ferry') {
				this.adapter.addPolyline(coordinatesArray, 'water')
			} else {
				this.adapter.addPolyline(coordinatesArray, 'road')
			}
		}));

		return points;
	}
}

const THIS_IS_ROUTE_EMITATION = {
	"code": "Ok", "routes": [{
		"legs": [{
			"summary": "п. Новый — Де-Фриз — Седанка — Патрокл, Университетский проспект",
			"weight": 46734.9,
			"duration": 6637.1,
			"steps": [{"intersections": [{"out": 0, "entry": [true], "bearings": [64], "location": [131.917373, 43.164528]}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [0, 75, 255], "location": [131.922197, 43.165329]}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [0, 90, 270], "location": [131.929071, 43.166769]}], "driving_side": "right", "geometry": "iqmfGqbddXKa@q@wCE[Ee@As@GmBCcACm@GoBIcCWcBY}AGc@s@oDCO[yAOu@q@gD]aB_@yBY{Ac@uBMw@DgC?A?mB@cB@_@FqB?sADcHI_AMYM_@IOGI[UoAE{@A]@Y?gA@m@Bc@A", "mode": "driving", "maneuver": {"bearing_after": 64, "bearing_before": 0, "location": [131.917373, 43.164528], "modifier": "right", "type": "depart"}, "weight": 158.2, "duration": 158.2, "name": "Бородинская улица", "distance": 1489.1}, {
				"intersections": [{"out": 0, "in": 1, "entry": [true, false, false], "bearings": [120, 180, 285], "location": [131.932537, 43.168864]}],
				"driving_side": "right",
				"geometry": "klnfGkagdXNq@",
				"mode": "driving",
				"maneuver": {"bearing_after": 115, "bearing_before": 0, "location": [131.932537, 43.168864], "modifier": "right", "type": "end of road"},
				"weight": 6.8,
				"duration": 6.8,
				"name": "Русская улица",
				"distance": 22.7
			}, {"intersections": [{"out": 0, "in": 1, "entry": [true, false, false], "bearings": [135, 300, 315], "location": [131.93279, 43.168776]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [90, 180, 285], "location": [131.933046, 43.168697]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [75, 150, 255], "location": [131.933245, 43.16872]}], "driving_side": "right", "geometry": "{knfG}bgdXDGBI@IBW?OAMAI?A", "mode": "driving", "rotary_name": "кольцо Багратиона", "maneuver": {"exit": 2, "bearing_after": 127, "bearing_before": 115, "location": [131.93279, 43.168776], "modifier": "straight", "type": "rotary"}, "weight": 2.5, "duration": 2.5, "name": "Русская улица", "distance": 40.4}, {
				"intersections": [{"out": 1, "in": 2, "entry": [true, true, false], "bearings": [60, 105, 255], "location": [131.933258, 43.168723]}, {"out": 0, "in": 1, "entry": [true, false, false], "bearings": [105, 285, 330], "location": [131.933771, 43.16867]}, {
					"out": 1,
					"in": 3,
					"entry": [true, true, true, false],
					"bearings": [30, 135, 210, 315],
					"location": [131.940261, 43.166784]
				}], "driving_side": "right", "geometry": "oknfG{egdXHeBBSHi@n@kFl@sED[RyAXyBTcBFa@R{ALs@Hc@Lg@Vs@Tm@DK@Aj@m@JORSlCiFl@iA", "mode": "driving", "maneuver": {"exit": 2, "bearing_after": 97, "bearing_before": 71, "location": [131.933258, 43.168723], "modifier": "slight right", "type": "exit rotary"}, "weight": 56.8, "duration": 56.9, "name": "Русская улица", "distance": 782.1
			}, {
				"intersections": [{"out": 0, "in": 2, "entry": [true, true, false], "bearings": [135, 150, 315], "location": [131.941802, 43.165839]}, {"out": 0, "in": 2, "entry": [true, false, false], "bearings": [135, 285, 315], "location": [131.942383, 43.165493]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [75, 150, 255], "location": [131.957846, 43.167353]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [75, 255, 345], "location": [131.959759, 43.167764]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [75, 165, 255], "location": [131.960891, 43.168059]}],
				"driving_side": "right",
				"geometry": "oymfGg{hdXdAsBRa@Rk@D]BYBmHAeHA[C]AKu@qDEWYuAKg@e@{BKm@WmB_AmLs@uICc@IiAE_@ScD[oEs@qIG}@E[s@qFWoB{@aFi@yCgA}F",
				"mode": "driving",
				"maneuver": {"bearing_after": 127, "bearing_before": 129, "location": [131.941802, 43.165839], "modifier": "straight", "type": "new name"},
				"weight": 107.7,
				"duration": 107.7,
				"name": "улица Адмирала Горшкова",
				"distance": 1792.2
			}, {"intersections": [{"out": 0, "in": 2, "entry": [true, true, false], "bearings": [75, 165, 255], "location": [131.962934, 43.168631]}], "driving_side": "right", "geometry": "}jnfGi_mdXs@mDs@qDIq@IiACw@FeAL{@ToAViAZ{APgAH_ADs@?{@EkA", "mode": "driving", "maneuver": {"bearing_after": 67, "bearing_before": 67, "location": [131.962934, 43.168631], "modifier": "straight", "type": "new name"}, "weight": 31.5, "duration": 31.5, "name": "", "distance": 523.9}, {
				"intersections": [{"out": 0, "in": 1, "entry": [true, false], "bearings": [75, 270], "location": [131.969085, 43.168647]}, {"out": 1, "in": 2, "entry": [false, true, false], "bearings": [60, 75, 255], "location": [131.969654, 43.168708]}],
				"driving_side": "right",
				"geometry": "aknfGyendXEq@E}@QoD_@}G",
				"mode": "driving",
				"maneuver": {"bearing_after": 80, "bearing_before": 82, "location": [131.969085, 43.168647], "modifier": "straight", "type": "on ramp"},
				"weight": 21.2,
				"duration": 21.2,
				"name": "",
				"distance": 235.6
			}, {"intersections": [{"out": 1, "in": 2, "entry": [true, true, false], "bearings": [90, 105, 255], "location": [131.971958, 43.168955]}], "driving_side": "right", "geometry": "_mnfGwwndXVcBVk@V_@`@a@b@Y", "mode": "driving", "maneuver": {"bearing_after": 105, "bearing_before": 81, "location": [131.971958, 43.168955], "modifier": "slight right", "type": "fork"}, "weight": 11.6, "duration": 11.6, "name": "", "distance": 129.8}, {"intersections": [{"out": 0, "in": 2, "entry": [true, true, false], "bearings": [165, 240, 330], "location": [131.973139, 43.16825]}], "driving_side": "right", "geometry": "qhnfGc_odXdDs@pFeAd@Q", "mode": "driving", "maneuver": {"bearing_after": 165, "bearing_before": 150, "location": [131.973139, 43.16825], "modifier": "straight", "type": "new name"}, "weight": 23, "duration": 23, "name": "", "distance": 254.9}, {
				"intersections": [{"out": 1, "in": 2, "entry": [false, true, false], "bearings": [0, 165, 345], "location": [131.973837, 43.166017]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [0, 180, 270], "location": [131.973299, 43.155939]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [165, 180, 345], "location": [131.998866, 43.135346]}, {"out": 0, "in": 2, "entry": [true, false, false], "bearings": [165, 330, 345], "location": [131.999201, 43.13464]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 195, 225], "location": [131.983205, 43.105522]}, {"out": 1, "in": 0, "entry": [false, true, false], "bearings": [15, 180, 330], "location": [131.982993, 43.1049]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [68, 248, 260], "location": [131.976217, 43.089788]}, {"out": 1, "in": 0, "entry": [false, true, false], "bearings": [15, 195, 345], "location": [131.970073, 43.085949]}, {
					"out": 1,
					"in": 0,
					"entry": [false, true, true],
					"bearings": [40, 221, 230],
					"location": [131.965526, 43.078827]
				}, {"out": 2, "in": 1, "entry": [false, false, true], "bearings": [30, 45, 240], "location": [131.964871, 43.078342]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [60, 240, 300], "location": [131.948154, 43.075195]}, {"out": 2, "in": 1, "entry": [false, false, true], "bearings": [45, 60, 240], "location": [131.94778, 43.075061]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [60, 240, 255], "location": [131.944366, 43.073795]}, {"out": 2, "in": 1, "entry": [false, false, true], "bearings": [45, 60, 240], "location": [131.940232, 43.072255]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [75, 255, 270], "location": [131.934979, 43.070724]}, {"out": 2, "in": 0, "entry": [false, false, true], "bearings": [69, 72, 254], "location": [131.933509, 43.070365]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [90, 270, 285], "location": [131.92657, 43.070257]}],
				"driving_side": "right",
				"geometry": "szmfGocodXn@Kp@S`B{@hAw@nCsBlC}Bn@g@n@]z@Y^Ib@Cj@C\\@ZBr@LTFTJ`@RNHTPd@b@dBrBJJ`AdAf@h@TPTJn@\\p@VlEzAj@PrBXnBN\\BZB\\B|@?l@Eh@Ef@Iv@Sv@Y|@c@f@[f@c@b@a@b@c@f@m@p@gAn@mAj@aBT{@Nu@RiANgAJ}AF{A@q@?q@Aw@Eq@IcBOqA[{A]yAi@{Ag@yAuAmDYw@SaAKaAGaACcABeAHy@Jw@Jk@Ni@Pg@Rg@pAuBbGcI^{@Z{@TaAPcAJ}ABoAAeE?kDFgANgAZoAb@iAZk@d@q@n@k@z@i@pA_@hDq@h@Oj@Qb@U`@Y^[^_@\\_@Ze@Xe@Ti@Vu@V}@t@gDZcAf@_APURSTYXU\\U`@SXMd@KdAOr@CpEKrDCx@At@Dz@Hv@NlCx@nGxBvBp@rARpAFj@?t@Cl@G~@MREn@MhBo@z@]lCaAj@Uz@UtA[r@Ip@?bAHZDpAb@n@VtAdAb@`@~@z@jAjAfB~Ax@r@f@Vj@VzErAz@Nv@H~@BtAFzGYl@?j@Dd@H^J\\Ld@Vd@`@f@f@X`@d@v@Td@Tl@X~AP~AJfBJrAHrAXtGTrDPzCPdCLdBHbADVVxAXx@Xn@PVt@bA~@|@lAr@PHpCr@dBd@nBp@jBv@v@ZnAp@PJnDjBn@\\JD~@b@THl@Lb@D`AF|CF`DBjB@xBAxC@xCMh@EbDg@x@Sr@Q|@S|@U`AUv@Sx@Uh@OZE^C~@@hAPf@Nj@Xj@`@tAjAXVXXd@\\v@Xh@JXDl@?b@ArAOf@Mf@Qd@WTQROp@s@tBeCx@s@h@]t@Uj@M~@Gt@Bf@Ld@Lf@Vv@b@l@`@t@z@vB|C^b@VZ\\\\\\Vt@`@d@N`@Fp@Jn@@fBUzBy@zCuAz@U~@K`A?~@JTFRHr@Zf@XXVv@z@jA~A`@t@vClFt@~A~@rBr@hB~@|C~@|D~@xEh@lC~@~DHRDNbAdCrEnJXn@@@j@r@p@t@~A|AjA`ATNp@XPFf@Jh@Ht@?z@EvDm@hAEhAHd@Hd@Ph@Vb@Xd@b@~L~OlFjGz@fAd@z@N^f@~ARfALhAFxA?bBCdDClA@rALnARfAXhAb@fAr@tAhAtBr@vA`@vAT~AF~@BjB]vPCjDDlBR|BRbBVfAnAhFd@hBf@tBNh@J^dBtGp@`CbBpGhA`EhFxRZjAdAhE`BlI~@vFTrAXhB`AlGBVJn@RhBHx@F`AFxBF`EGvFIzDIrCIpCE~@IjCAx@KfD",
				"mode": "driving",
				"maneuver": {"bearing_after": 168, "bearing_before": 160, "location": [131.973837, 43.166017], "modifier": "slight left", "type": "merge"},
				"weight": 746.9,
				"duration": 746.9,
				"name": "п. Новый — Де-Фриз — Седанка — Патрокл",
				"distance": 16608.7
			}, {"intersections": [{"out": 1, "in": 0, "entry": [false, true], "bearings": [90, 270], "location": [131.924738, 43.070379]}], "driving_side": "right", "geometry": "{d{eGspedXQnFKzDKrFArA@~@Bx@L|ATlBVrARz@V`Az@bCRb@f@bA~F|JbJ~ObHzL`IfN|HbN|GrLtSl^", "mode": "driving", "maneuver": {"bearing_after": 275, "bearing_before": 274, "location": [131.924738, 43.070379], "modifier": "straight", "type": "new name"}, "weight": 122.7, "duration": 122.7, "name": "Русский мост", "distance": 2723.1}, {"intersections": [{"out": 1, "in": 0, "entry": [false, true], "bearings": [45, 225], "location": [131.89818, 43.056992]}], "driving_side": "right", "geometry": "eqxeGsj`dXb@t@l@p@n@l@l@b@x@l@`@Rp@ZNHx@`@PHJD", "mode": "driving", "maneuver": {"bearing_after": 226, "bearing_before": 227, "location": [131.89818, 43.056992], "modifier": "straight", "type": "new name"}, "weight": 13, "duration": 13, "name": "Университетский проспект", "distance": 274.7}, {
				"intersections": [{
					"out": 2,
					"in": 0,
					"entry": [false, false, true],
					"bearings": [30, 105, 270],
					"location": [131.896482, 43.054884]
				}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 195, 300], "location": [131.896193, 43.054766]}], "driving_side": "right", "geometry": "_dxeG_``dXALBLBJFHFFH@H@HCFEFI", "mode": "driving", "maneuver": {"exit": 1, "bearing_after": 270, "bearing_before": 202, "location": [131.896482, 43.054884], "modifier": "right", "type": "roundabout"}, "weight": 3.3, "duration": 3.3, "name": "Университетский проспект", "distance": 56.8
			}, {
				"intersections": [{"out": 1, "in": 2, "entry": [true, true, false], "bearings": [120, 210, 315], "location": [131.896271, 43.054538]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [15, 105, 195], "location": [131.885971, 43.044486]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [0, 180, 195], "location": [131.885014, 43.041292]}, {"out": 2, "in": 0, "entry": [false, true, true, true], "bearings": [0, 120, 180, 315], "location": [131.884886, 43.040208]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [0, 90, 180], "location": [131.884282, 43.034927]}, {"out": 1, "in": 3, "entry": [true, true, true, false], "bearings": [45, 135, 210, 315], "location": [131.887496, 43.025334]}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [30, 135, 315], "location": [131.900534, 43.022219]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [135, 210, 315], "location": [131.901095, 43.021768]}, {
					"out": 1,
					"in": 2,
					"entry": [true, true, false],
					"bearings": [60, 150, 315],
					"location": [131.905224, 43.018493]
				}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [90, 180, 345], "location": [131.906362, 43.016246]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [15, 195, 285], "location": [131.906089, 43.01409]}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [30, 120, 300], "location": [131.910821, 43.004394]}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [60, 150, 330], "location": [131.919095, 43.000603]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [0, 90, 180], "location": [131.920096, 42.986319]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [30, 120, 210], "location": [131.902347, 42.974361]}, {"out": 2, "in": 0, "entry": [false, true, true, true], "bearings": [30, 105, 195, 300], "location": [131.901748, 42.973466]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [15, 105, 195], "location": [131.901444, 42.972583]}],
				"driving_side": "right",
				"geometry": "{axeGu~_dX\\PbOtHxBlAj@b@r@l@r@j@t@v@tAfBjAnB|@pBvAjD`BbEvBrFx@~AP^xAvBj@j@|@r@v@l@fBx@pDpAzAh@bCz@pAZ|@PnAR~DVvEVVBx@FnCPxCNZ@~@DTBvEVF?tAHl@B~CPl@FrKn@nBJzBJtCDx@C~AMDAr@Mz@Qp@Mv@Ux@WrAg@`By@d@W`Ao@r@g@pAgAtAwAVU~CsEBE^o@bAkB^}@v@sBHUb@uA^kAz@iDf@iDl@{GBq@@MFqA?OBkC@eBAcAMyFCqB@}@DeA@a@LsALy@VeAX{@Tk@P]T_@z@sAxAqB`CiD~B_DxAwB`B_CPUnAgBb@g@jAoA|AkAfBaApBs@d@O`BQfAIxCFrARzAXJBPD\\JbC~@pCbApHlChBf@bANvBH~AGzAUjAYpAi@t@[`Ao@r@q@v@{@dBgCb@{@p@eBdAmDfE}O~DoOdCgJPm@nAuEV{@|@uCp@_Bl@_Ax@{@|AmAr@a@v@_@v@W^GbAIdAEtOQ|@?bDEdLO`@?|CElII`FE`HKhHKjEBf@Bb@Bf@H`BVrCv@tB~@rAr@`@XdBvAvArAlA|ApAtBPZf@`An@tAv@vBl@tBdAnE`@fCt@rGbAvIZ~BPfBpAdKPjANj@XdAb@lAHRHNLVz@tApBbCzB|BnCtCpAjAVRnAz@x@d@f@TfA\\hB^|Cf@bAX\\P^T~@l@r@~@n@`Ah@hADL\\hAP~@NjALhBBxB@dCApBE|AKnAIp@Q|@Mj@Up@g@dAkCvF}HjPsGzMe@r@m@v@u@t@kAv@",
				"mode": "driving",
				"maneuver": {"exit": 1, "bearing_after": 202, "bearing_before": 135, "location": [131.896271, 43.054538], "modifier": "right", "type": "exit roundabout"},
				"weight": 703.9,
				"duration": 703.9,
				"name": "Университетский проспект",
				"distance": 13640.5
			}, {"intersections": [{"out": 0, "in": 1, "entry": [true, true, true], "bearings": [15, 195, 255], "location": [131.886397, 42.975017]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [45, 180, 240], "location": [131.887127, 42.975478]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [0, 75, 180], "location": [131.881153, 42.979166]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [15, 75, 210], "location": [131.882494, 42.98229]}], "driving_side": "right", "geometry": "{pheG_a~cXOEKK[s@c@kA_@o@g@_@wAi@YC]A}@BuBVo@PMJGRGl@iAvPk@zGo@nGIZMTa@Rg@DO?OA]Io@a@k@e@YWUO[Cu@CyB?k@Ak@Ka@W_BaBOG", "mode": "driving", "maneuver": {"bearing_after": 15, "bearing_before": 18, "location": [131.886397, 42.975017], "modifier": "straight", "type": "new name"}, "weight": 156, "duration": 156, "name": "", "distance": 1303}, {
				"intersections": [{"out": 0, "in": 1, "entry": [true, false], "bearings": [15, 195], "location": [131.882533, 42.982374]}],
				"driving_side": "right",
				"geometry": "y~ieGyh}cXUIWEM?QJIRCv@Aj@IfAQ~@y@hCiAxB]x@Od@If@A`@H|DJl@R^f@b@b@^b@d@^p@j@|AdArCf@nBb@bBz@tEHh@Df@Cj@E^Ol@[x@{@bB",
				"mode": "driving",
				"maneuver": {"bearing_after": 18, "bearing_before": 18, "location": [131.882533, 42.982374], "modifier": "straight", "type": "new name"},
				"weight": 126.3,
				"duration": 126.3,
				"name": "Кронштадтская улица",
				"distance": 1051.7
			}, {"intersections": [{"out": 2, "in": 0, "entry": [false, true, true], "bearings": [135, 285, 330], "location": [131.871849, 42.982235]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [0, 90, 180], "location": [131.870677, 42.988249]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [15, 90, 195], "location": [131.875346, 42.998419]}], "driving_side": "right", "geometry": "_~ieGaf{cXSNWDq@BiAFyAN]H_@V_@Xg@^]RgAZ}A^Y?]Ew@WUCg@BqCHwEXmAD_CHmE^oAJqABm@Gm@MaAUaAS_JmBe@OSKMQWa@gAuBs@sAe@s@]c@UW_@Wc@MaBO_@IUQeBiBe@[QIOCe@C[COCa@USUmAgBUUUKKAc@Ci@Bo@FqBj@w@^{@f@gAl@QROd@]zAQd@KRMJYF_@BcAO{B]QCS@OJKV@\\NvAN|AHdCBjAC\\MTUVYNkBVcBVm@VoDlA", "mode": "driving", "maneuver": {"bearing_after": 329, "bearing_before": 307, "location": [131.871849, 42.982235], "modifier": "slight right", "type": "fork"}, "weight": 357.3, "duration": 357.3, "name": "", "distance": 2975.8}, {
				"intersections": [{
					"out": 1,
					"in": 0,
					"entry": [false, true],
					"bearings": [165, 345],
					"location": [131.870085, 43.00498]
				}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [105, 165, 345], "location": [131.869311, 43.007015]}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [75, 180, 345], "location": [131.866073, 43.013989]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [0, 90, 180], "location": [131.86749, 43.016857]}], "driving_side": "right", "geometry": "clneGa{zcXk@PuBf@sBn@g@NG@m@Pc@Ly@XOFQJOVUrAk@vCITITUPc@XEBYJ]LuF|@eDPYBM@YDI@a@Dc@FcALaALoBXgBVuARm@HWBOBYBaAH{@DW?eA[eA_@y@c@QSIIoB{COI]IMAK?", "mode": "driving", "maneuver": {"bearing_after": 344, "bearing_before": 341, "location": [131.870085, 43.00498], "modifier": "straight", "type": "new name"}, "weight": 177.2, "duration": 177.2, "name": "Экипажная улица", "distance": 1474.3
			}, {
				"intersections": [{"out": 2, "in": 1, "entry": [true, false, true], "bearings": [15, 180, 345], "location": [131.867485, 43.016924]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [0, 165, 225], "location": [131.866392, 43.018665]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [0, 165, 240], "location": [131.864278, 43.021975]}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [0, 150, 330], "location": [131.863069, 43.023815]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [150, 210, 330], "location": [131.86228, 43.024863]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [150, 255, 345], "location": [131.861646, 43.025648]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [30, 210, 240], "location": [131.861686, 43.026488]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [45, 210, 270], "location": [131.862028, 43.026965]}, {
					"out": 2,
					"in": 0,
					"entry": [false, true, true],
					"bearings": [120, 240, 330],
					"location": [131.858271, 43.030691]
				}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [45, 150, 330], "location": [131.858051, 43.030945]}, {"out": 0, "in": 1, "entry": [true, false, true, true], "bearings": [0, 150, 195, 285], "location": [131.857907, 43.031176]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [15, 195, 270], "location": [131.85798, 43.032019]}, {"out": 0, "in": 2, "entry": [true, true, false], "bearings": [0, 105, 195], "location": [131.858113, 43.032415]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [135, 180, 315], "location": [131.857252, 43.034927]}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [60, 135, 315], "location": [131.857195, 43.034974]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [135, 240, 315], "location": [131.856446, 43.035517]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [45, 210, 330], "location": [131.855835, 43.037109]}, {
					"out": 0,
					"in": 1,
					"entry": [true, false, true],
					"bearings": [45, 225, 330],
					"location": [131.856682, 43.037706]
				}], "driving_side": "right", "geometry": "wvpeGyjzcXa@Nc@VcDrBQLo@`@OFa@FiAESDSFMLsAvAYVa@JE@qBLuABUFQHW`@k@lCO\\SRQDUDa@AYAUBg@Rq@d@}ArAeBbB_At@oCfBEBmAv@c@`@e@^k@Tm@@g@Ge@W_BcAEEKKu@_AeAaBgA{Ag@Kg@Fo@b@yBfGwC|DYv@a@tIw@rBKVQRa@VGDe@TO@YFi@CsAScAWKA_@?S@aCj@aBVaBNg@Da@VYVW^GHmBtCIN_@h@y@z@g@Xk@Na@?_@Em@QUMY[i@_As@kAk@cAaAyBQ_@OM_@Ig@@k@Ve@v@c@lAaBfEoAfDS|@Ox@OtAOtAa@dDg@xCwAzFw@pCgCbIYb@STkAhAKPEP@d@F`BDzBMrAUfAC`@?d@B\\XfC^`FJfDCp@M~@oAvIGj@Ap@@t@HtBBzAAjAOfAQx@GdACv@D`AV~BLdB?rBKzBWvDQdDKv@", "mode": "driving", "maneuver": {"bearing_after": 340, "bearing_before": 355, "location": [131.867485, 43.016924], "modifier": "straight", "type": "new name"}, "weight": 638.5, "duration": 638.5, "name": "", "distance": 5322.2
			}, {
				"intersections": [{"out": 2, "in": 1, "entry": [true, false, true], "bearings": [30, 105, 285], "location": [131.83207, 43.043639]}, {"out": 3, "in": 1, "entry": [true, false, true, true], "bearings": [45, 120, 225, 315], "location": [131.830322, 43.044407]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [135, 225, 315], "location": [131.829659, 43.044821]}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [30, 120, 270], "location": [131.82726, 43.04818]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [30, 90, 255], "location": [131.819724, 43.044592]}],
				"driving_side": "right",
				"geometry": "w}ueGmmscXKn@[lAe@vA[t@e@|@IRc@t@m@lAs@rA]^]X[X_@R]F{@Jg@Je@P]TeDvB_A^i@ZMHIJEP?VB\\Ft@?x@KhB?t@Bn@Nd@d@z@Z|@hA`FtAlEl@`ED`@J`AXrAXv@b@`@h@LxBJx@DVB\\Jj@XBT",
				"mode": "driving",
				"maneuver": {"bearing_after": 289, "bearing_before": 285, "location": [131.83207, 43.043639], "modifier": "straight", "type": "new name"},
				"weight": 180.9,
				"duration": 180.9,
				"name": "посёлок Подножье",
				"distance": 1503.5
			}, {
				"intersections": [{"out": 1, "in": 0, "entry": [false, true, true], "bearings": [75, 255, 315], "location": [131.819606, 43.044571]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [60, 225, 315], "location": [131.817618, 43.043809]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 210, 225], "location": [131.814903, 43.041347]}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [75, 165, 345], "location": [131.814829, 43.040419]}, {"out": 1, "in": 3, "entry": [true, true, true, false], "bearings": [120, 180, 315, 345], "location": [131.814935, 43.040101]}, {"out": 2, "in": 0, "entry": [false, true, true, true], "bearings": [0, 75, 180, 300], "location": [131.814901, 43.038182]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [0, 180, 240], "location": [131.81492, 43.036849]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [0, 135, 180], "location": [131.814849, 43.035841]}, {
					"out": 2,
					"in": 0,
					"entry": [false, true, true],
					"bearings": [45, 105, 210],
					"location": [131.81277, 43.033126]
				}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 210, 300], "location": [131.812013, 43.032196]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [0, 180, 195], "location": [131.810728, 43.030426]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [15, 120, 210], "location": [131.81051, 43.028908]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [45, 210, 270], "location": [131.807821, 43.026501]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 195, 285], "location": [131.805944, 43.023716]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [15, 195, 285], "location": [131.80585, 43.023538]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [15, 90, 195], "location": [131.805838, 43.023515]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [15, 195, 285], "location": [131.805683, 43.023199]}, {
					"out": 2,
					"in": 0,
					"entry": [false, true, true],
					"bearings": [45, 195, 225],
					"location": [131.805008, 43.021935]
				}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [0, 45, 225], "location": [131.802953, 43.020685]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [60, 150, 240], "location": [131.802335, 43.020361]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [75, 255, 345], "location": [131.800721, 43.020047]}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [0, 75, 255], "location": [131.799667, 43.019852]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [45, 210, 270], "location": [131.798149, 43.019291]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 210, 330], "location": [131.796746, 43.016923]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 210, 315], "location": [131.795055, 43.015071]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [30, 150, 210], "location": [131.794522, 43.014485]}],
				"driving_side": "right",
				"geometry": "qcveGq_qcXNjAT|ATt@bA~BVl@FNP\\^v@Xd@nApA\\`@V`@b@x@Zf@PTPNlDtBp@^`@FT?VC`@MTG\\I`@KzAAtFFl@@N?zBE`A@ZA^@hEL~CD`ADd@H`@X`@x@pCdFj@x@RTb@ZfCnBLJjFjETNDDRNTHb@BJ?bEDx@Lp@VD@fAj@xB|ArAlAV^^r@l@xAv@bBf@l@NP~AnAPLx@n@xA~@vAh@|DlBb@PB@HBt@Zd@PnAf@x@X~@^JP^j@~A|C`AtBv@zA^r@Xn@FTDRJp@XvCBNLtAZxCJv@LbAj@dC\\`AVb@`@^nEfBhA^lBhAn@d@RPXXlBbBdCxBnAfArBjBXRl@h@z@v@",
				"mode": "driving",
				"maneuver": {"bearing_after": 251, "bearing_before": 255, "location": [131.819606, 43.044571], "modifier": "right", "type": "turn"},
				"weight": 516.5,
				"duration": 516.5,
				"name": "",
				"distance": 4306.1
			}, {"intersections": [{"out": 1, "in": 0, "entry": [false, true, true], "bearings": [30, 180, 210], "location": [131.793934, 43.013832]}], "driving_side": "right", "geometry": "mcpeGa_lcXd@@Z@Z@PBND", "mode": "driving", "maneuver": {"bearing_after": 182, "bearing_before": 213, "location": [131.793934, 43.013832], "modifier": "slight left", "type": "turn"}, "weight": 17.4, "duration": 13.2, "name": "", "distance": 71.4}, {
				"intersections": [{"out": 1, "in": 0, "entry": [false, true, true], "bearings": [15, 150, 255], "location": [131.793853, 43.013194]}, {"out": 1, "in": 2, "entry": [true, true, false], "bearings": [105, 135, 315], "location": [131.795265, 43.011733]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [105, 300, 330], "location": [131.793874, 43.006887]}],
				"driving_side": "right",
				"geometry": "m_peGq~kcX\\UxA}@vAuArAqBb@i@V]v@k@j@[f@Ab@B|@`@`Br@h@\\\\\\^v@t@dB|BjEx@jAhAz@`@D\\KVi@\\mAb@uA@IT}BVcBj@{B\\o@f@a@tFaDRK",
				"mode": "driving",
				"maneuver": {"bearing_after": 153, "bearing_before": 191, "location": [131.793853, 43.013194], "modifier": "slight left", "type": "turn"},
				"weight": 316.3,
				"duration": 234.4,
				"name": "",
				"distance": 1279.9
			}, {"intersections": [{"out": 0, "in": 1, "entry": [true, false], "bearings": [120, 330], "location": [131.796896, 43.00476]}], "driving_side": "right", "geometry": "wjneGsqlcXFK?YI{A?g@AmBAkBPyCT{FPoCHg@|@aCR{@f@qCF[b@aAjC_E^k@VQh@?vCb@Z?ZI`@o@b@mAHkAA[GgA?{@@S?UCgAB_ANi@xBmEzFmMh@iAXk@bAy@jFgE~CeCpAQlAGbAT`@`@n@t@b@x@tAn@pBt@nDfA~Av@", "mode": "driving", "maneuver": {"bearing_after": 126, "bearing_before": 156, "location": [131.796896, 43.00476], "modifier": "slight left", "type": "new name"}, "weight": 568.7, "duration": 427.9, "name": "Кронштадтская улица", "distance": 2350.1}, {
				"intersections": [{"out": 2, "in": 0, "entry": [false, true, true], "bearings": [30, 150, 315], "location": [131.812015, 42.992332]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [60, 165, 255], "location": [131.799454, 42.989865]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [120, 225, 300], "location": [131.791283, 42.988961]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [75, 255, 345], "location": [131.782676, 42.990499]}, {"out": 3, "in": 1, "entry": [true, false, true, true], "bearings": [0, 45, 180, 225], "location": [131.782423, 42.990405]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [45, 180, 240], "location": [131.780314, 42.989507]}, {"out": 3, "in": 1, "entry": [true, false, true, true], "bearings": [0, 75, 180, 270], "location": [131.770757, 42.990422]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [60, 240, 315], "location": [131.760607, 42.99055]}],
				"driving_side": "right",
				"geometry": "a}keGcpocXqAnBs@~@c@nA_@rAW`BEbABp@`@xB^xAfAvEb@vC|AjFbBvEj@pBbAbCdDnLf@tCHb@V|@Nz@pAdIvBdLl@fD`@bCJpACx@iAtF[xAUp@St@w@bCiAhDM~@@z@Lv@JnAF`CBnBDlBAh@WnAQ~@]lBY|AOh@On@Sp@Q~@M|@GjA@RBXLXBB^n@J\\Kj@Ob@Ap@Rp@^b@dBjBFNFJA|@E~@@j@Hx@TbAV~@Bh@K|@I~@@pA@l@Fh@Hj@FhAFnADbCC\\G^WhAK\\Wj@IFYPWPQRKTI\\Kb@e@t@]r@GZ?h@?d@E~@GnB?n@Bf@B\\BxAEn@Kr@WbAE`@Bn@Hj@ZfBR~Ad@lDB\\@f@Ct@Qx@Qt@_A~BGZEz@Q|DO|BGhAMlA@n@?\\NhBNn@^bARr@BJXx@f@nARb@^n@NVL\\b@`DFx@Lx@Jr@Pf@RX^^r@n@NNVJ\\FNBNFLLHN",
				"mode": "driving",
				"maneuver": {"bearing_after": 315, "bearing_before": 202, "location": [131.812015, 42.992332], "modifier": "right", "type": "turn"},
				"weight": 1212.9,
				"duration": 910.6,
				"name": "",
				"distance": 5039.5
			}, {"intersections": [{"out": 1, "in": 0, "entry": [false, true, true], "bearings": [45, 150, 315], "location": [131.756404, 42.988198]}], "driving_side": "right", "geometry": "gckeGotdcXDGNIx@@^J`ARTHZJN\\DTD`@@TJVNLx@^dAdATZLZDVPRZn@NN^fA\\xA`@dCNpAn@dDHd@B^@fA?p@A|@", "mode": "driving", "maneuver": {"bearing_after": 149, "bearing_before": 225, "location": [131.756404, 42.988198], "modifier": "left", "type": "end of road"}, "weight": 2586.1, "duration": 260.6, "name": "", "distance": 717.7}, {"intersections": [{"out": 1, "in": 0, "entry": [false, true, true], "bearings": [90, 210, 300], "location": [131.750158, 42.984735]}], "driving_side": "right", "geometry": "smjeGomccXNH\\DXCd@Af@KP?JLHTLNf@^`@p@", "mode": "driving", "maneuver": {"bearing_after": 202, "bearing_before": 270, "location": [131.750158, 42.984735], "modifier": "left", "type": "turn"}, "weight": 638.6, "duration": 63.9, "name": "", "distance": 177.4}, {
				"intersections": [{
					"classes": ["ferry"],
					"out": 1,
					"in": 0,
					"entry": [false, true],
					"bearings": [45, 210],
					"location": [131.749501, 42.98335]
				}], "driving_side": "right", "geometry": "}djeGkiccX|LxGja@~Ed_@~Ed@]Xo@Fo@", "mode": "ferry", "maneuver": {"bearing_after": 203, "bearing_before": 225, "location": [131.749501, 42.98335], "modifier": "slight left", "type": "notification"}, "weight": 36975.3, "duration": 370.4, "name": "переправа Попова <=> Русский", "distance": 1540.6
			}, {
				"intersections": [{"out": 0, "in": 1, "entry": [true, false, true, true], "bearings": [165, 285, 315, 330], "location": [131.74648, 42.970109]}, {"out": 1, "in": 0, "entry": [false, true, true], "bearings": [0, 180, 270], "location": [131.746649, 42.969387]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [0, 180, 240], "location": [131.746639, 42.968957]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [60, 135, 285], "location": [131.746386, 42.968874]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [120, 210, 315], "location": [131.744171, 42.969461]}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [30, 135, 300], "location": [131.743852, 42.969644]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [120, 225, 300], "location": [131.743659, 42.969737]}, {"out": 2, "in": 1, "entry": [true, false, true], "bearings": [15, 120, 270], "location": [131.743227, 42.969972]}, {
					"out": 1,
					"in": 0,
					"entry": [false, true, true],
					"bearings": [75, 255, 345],
					"location": [131.742595, 42.969883]
				}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [75, 150, 270], "location": [131.742131, 42.969759]}, {"out": 2, "in": 0, "entry": [false, true, true], "bearings": [90, 150, 270], "location": [131.740088, 42.969827]}], "driving_side": "right", "geometry": "ergeGovbcXDMb@EvAML?tA@Pp@MfBEr@Bj@g@nB}@bCc@~@Sd@SZYx@?n@PlAV|A@\\CbDIbEAPCtA", "mode": "driving", "maneuver": {"bearing_after": 170, "bearing_before": 102, "location": [131.74648, 42.970109], "modifier": "right", "type": "turn"}, "weight": 178.4, "duration": 134.2, "name": "", "distance": 741.5
			}, {"intersections": [{"out": 2, "in": 0, "entry": [false, true, true], "bearings": [90, 240, 315], "location": [131.739662, 42.969849]}, {"out": 0, "in": 1, "entry": [true, false, true], "bearings": [0, 135, 195], "location": [131.739523, 42.969974]}], "driving_side": "right", "geometry": "qpgeG{kacXILMLk@Dw@H", "mode": "driving", "maneuver": {"bearing_after": 320, "bearing_before": 272, "location": [131.739662, 42.969849], "modifier": "right", "type": "turn"}, "weight": 19.1, "duration": 14.7, "name": "", "distance": 73.8}, {"intersections": [{"out": 1, "in": 0, "entry": [false, true, true], "bearings": [180, 300, 345], "location": [131.739441, 42.970471]}], "driving_side": "right", "geometry": "mtgeGojacXe@vBaAhDsBxF", "mode": "driving", "maneuver": {"bearing_after": 292, "bearing_before": 352, "location": [131.739441, 42.970471], "modifier": "left", "type": "new name"}, "weight": 60.3, "duration": 45.3, "name": "", "distance": 251.8}, {
				"intersections": [{
					"in": 0,
					"entry": [true],
					"bearings": [122],
					"location": [131.736741, 42.971567]
				}], "driving_side": "right", "geometry": "i{geGsy`cX", "mode": "driving", "maneuver": {"bearing_after": 0, "bearing_before": 302, "location": [131.736741, 42.971567], "modifier": "left", "type": "arrive"}, "weight": 0, "duration": 0, "name": "", "distance": 0
			}],
			"distance": 68754.8
		}], "weight_name": "routability", "weight": 46734.9, "duration": 6637.1, "distance": 68754.8
	}], "waypoints": [{"hint": "Tg8AgP___39FAAAAVQAAAAAAAABGAAAAXYiHQq2fakEAAAAAE0uJQkUAAABVAAAAAAAAAEYAAAApAAAAPebcB3CjkgJm5twHM6OSAgAADwRkch1Q", "distance": 7.552408, "name": "Бородинская улица", "location": [131.917373, 43.164528]}, {"hint": "Jx0CgC0dAoAhAQAAewAAADoBAAB2CQAAgsbxQiKRS0JISQNDsy18RNkAAABcAAAA7AAAABkHAAApAAAApSTaB6-xjwJ_I9oHW7CPAgIA7xJkch1Q", "distance": 44.742008, "name": "", "location": [131.736741, 42.971567]}]
};