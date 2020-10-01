import * as FieldModules from "./FieldModules";

export function FilterAlgo(item) {
  return FieldModules.algo.includes(item.moduleCode);
}

export function FilterAI(item) {
  return FieldModules.ai.includes(item.moduleCode);
}

export function FilterGraphics(item) {
  return FieldModules.graphics.includes(item.moduleCode);
}

export function FilterSecurity(item) {
  return FieldModules.security.includes(item.moduleCode);
}

export function FilterDB(item) {
  return FieldModules.db.includes(item.moduleCode);
}

export function FilterMedia(item) {
  return FieldModules.media.includes(item.moduleCode);
}

export function FilterNetwork(item) {
  return FieldModules.network.includes(item.moduleCode);
}

export function FilterParallel(item) {
  return FieldModules.parallel.includes(item.moduleCode);
}

export function FilterLanguages(item) {
  return FieldModules.languages.includes(item.moduleCode);
}

export function FilterSE(item) {
  return FieldModules.se.includes(item.moduleCode);
}
