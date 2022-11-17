import { titleCase } from "../components/ProfileCard";

describe("funciones dentro del componente ProfileCard", () => {
  describe("titleCase", () => {
    test("debe retornar un string", () => {
      const result = titleCase("un valor texto");
      expect(typeof result).toBe("string");
    });

    test("debe retornar el string transformado", () => {
      expect(titleCase("texto no mas pa hacer pruebas")).toBe(
        "Texto No Mas Pa Hacer Pruebas"
      );
    });

    test("debe devolver string vacio si se le manda un string vacio", () => {
      expect(titleCase("")).toBe("");
    });
  });
});
