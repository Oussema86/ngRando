"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HikeService = (function () {
    function HikeService() {
        this.hikes = [
            {
                "name": "Saint-Aubin-du-Cormier",
                "region": "Bretagne",
                "area": "Ille-et-Vilaine",
                "startingPoint": "Plan d'eau",
                "distance": 12.8,
                "distanceUnit": "km",
                "duration": 240,
                "heightDifference": 267,
                "description": "(depuis HikeService) Randonnée sympa, à démarrer par le plan d'eau pour finir sur les hauteurs de Saint Aubin. Rochers imposants et des arbres magnifiques sont effectivement au rendez-vous. Bonne balade",
                "evaluation": [4, 5, 3]
            },
            {
                "name": "Vallée du Couesnon",
                "region": "Bretagne",
                "area": "Ille-et-Vilaine",
                "startingPoint": "Château de la ville olivier",
                "distance": 15.6,
                "distanceUnit": "km",
                "duration": 270,
                "heightDifference": 200,
                "description": "(depuis HikeService) Il faut être en forme pour cette rando car il y a beaucoup de dénivelés. Mais le jeu en vaut la chandelle car admirer les bords du Couesnon est un régal. Bonne randonnée ",
                "evaluation": [5, 5]
            }
        ];
    }
    HikeService.prototype.getHikes = function () {
        return this.hikes;
    };
    return HikeService;
}());
HikeService = __decorate([
    core_1.Injectable()
], HikeService);
exports.HikeService = HikeService;
//# sourceMappingURL=hike.service.js.map