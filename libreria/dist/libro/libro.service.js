"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroService = void 0;
const common_1 = require("@nestjs/common");
let LibroService = class LibroService {
    create(createLibroDto) {
        return 'This action adds a new libro';
    }
    findAll() {
        return `This action returns all libro`;
    }
    findOne(id) {
        return `This action returns a #${id} libro`;
    }
    update(id, updateLibroDto) {
        return `This action updates a #${id} libro`;
    }
    remove(id) {
        return `This action removes a #${id} libro`;
    }
};
exports.LibroService = LibroService;
exports.LibroService = LibroService = __decorate([
    (0, common_1.Injectable)()
], LibroService);
//# sourceMappingURL=libro.service.js.map