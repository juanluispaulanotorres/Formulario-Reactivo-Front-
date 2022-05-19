export interface Persona {
    id:              string;
    usuario:         string;
    nombre:          string;
    apellido:        string;
    password:        string;
    rPasswd:         string;
    correo_empresa:  string;
    correo_personal: string;
    ciudad:          string;
    activo:          string;
    f_creacion:      Date;
    f_finalizacion:  Date;
    urlImagen:       string;
}