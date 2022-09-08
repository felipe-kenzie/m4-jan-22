"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistSongs = void 0;
const typeorm_1 = require("typeorm");
const playlist_entity_1 = require("./playlist.entity");
const song_entity_1 = require("./song.entity");
let PlaylistSongs = class PlaylistSongs {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlaylistSongs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PlaylistSongs.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => playlist_entity_1.Playlist),
    __metadata("design:type", playlist_entity_1.Playlist)
], PlaylistSongs.prototype, "playlist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => song_entity_1.Song, { eager: true }),
    __metadata("design:type", song_entity_1.Song)
], PlaylistSongs.prototype, "song", void 0);
PlaylistSongs = __decorate([
    (0, typeorm_1.Entity)('playlist_songs')
], PlaylistSongs);
exports.PlaylistSongs = PlaylistSongs;
