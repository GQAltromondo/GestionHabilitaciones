sap.ui.jsview("transener.GestionHabilitaciones.view.Main", {
    getControllerName: function () {
        return "transener.GestionHabilitaciones.controller.Main";
    },
    createContent: function (oController) {
        var oPage = new sap.m.Page({
            title: "{i18n>appTitle}",
            showHeader: false,
            backgroundDesign: sap.m.PageBackgroundDesign.Solid,
            content: [],
            footer: new sap.m.Bar({
                contentLeft: [
                    new sap.m.Button({
                        icon: "sap-icon://information",
                        type: "Emphasized",
                        press: [oController.onAbout, oController]
                    })
                ],
                contentRight: [
                    new sap.m.Button({
                        icon: "sap-icon://download",
                        type: "Emphasized",
                        text: "{i18n>Descargar}",
                        press: [oController.exportTable, oController]
                    })
                ]
            })
        });
        var oContent = new sap.m.VBox({
            items: [
                new sap.m.Title({
                    text: "{i18n>appTitle}",
                    titleStyle: sap.ui.core.TitleLevel.H3,
                    level: sap.ui.core.TitleLevel.H3
                }).addStyleClass("textBlue"),
                new sap.m.Panel({
                    expandable: true,
                    expanded: false,
                    headerToolbar: new sap.m.Toolbar({
                        content: [
                            new sap.ui.core.Icon({
                                src: "sap-icon://filter"
                            }).addStyleClass("textBlue"),
                            new sap.m.Title({
                                titleStyle: sap.ui.core.TitleLevel.H5,
                                level: sap.ui.core.TitleLevel.H5,
                                text: "{i18n>Filtros}"
                            }).addStyleClass("textBlue")
                        ]
                    }),
                    content: [
                        new sap.ui.layout.form.Form({
                            editable: true,
                            layout: new sap.ui.layout.form.ResponsiveGridLayout(),
                            formContainers: [
                                new sap.ui.layout.form.FormContainer({
                                    formElements: []
                                }),
                                new sap.ui.layout.form.FormContainer({
                                    formElements: [
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Empresa}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.Input({
                                                    valueLiveUpdate: true,
                                                    placeholder: "{i18n>Empresa}",
                                                    value: "{FiltersModel>/Empresa}",
                                                    liveChange: [oController.onSearch, oController]
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>func}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.ComboBox({
                                                    //selectedKey: "{FiltersModel>/Tipohab}",
                                                    placeholder: "Seleccionar",
                                                    selectedKey: "{FiltersModel>/Lote}",
                                                    change: [oController.onSearch, oController],
                                                    items: {
                                                        path: "FuncionOptionsModel>/funciones",
                                                        template: new sap.ui.core.Item({
                                                            key: "{FuncionOptionsModel>key}",
                                                            text: "{FuncionOptionsModel>text}"
                                                        })
                                                    }
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Nombre}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.Input({
                                                    valueLiveUpdate: true,
                                                    placeholder: "{i18n>Nombre}",
                                                    value: "{FiltersModel>/Nombre}",
                                                    liveChange: [oController.onSearch, oController]
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>textRegion}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.ComboBox({
                                                    selectedKey: "{FiltersModel>/Area}",
                                                    change: [oController.onSearch, oController],
                                                    placeholder: "Seleccionar",
                                                    items: {
                                                        path: "AllRegiones>/Regiones",
                                                        template: new sap.ui.core.Item({
                                                            key: "{AllRegiones>Codigo}",
                                                            text: "{AllRegiones>Region}"
                                                        })
                                                    }
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>VencimientoDeHabilitacion}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.DatePicker({
                                                    //dateValue: "{FiltersModel>/VigenciaDate}",
                                                    dateValue: "{FiltersModel>/Vigencia}",
                                                    placeholder: "{i18n>VencimientoDeHabilitacion}",
                                                    displayFormat: "dd/MM/yyyy",
                                                    change: [oController.onSearch, oController]
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Estado}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.ComboBox({
                                                    selectedKey: "{FiltersModel>/Estado}",
                                                    change: [oController.onSearch, oController],
                                                    items: [
                                                        new sap.ui.core.Item({
                                                            key: "N",
                                                            text: "Nueva Habilitacion"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "H",
                                                            text: "Habilitado"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "D",
                                                            text: "Revocado"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "S",
                                                            text: "Suspendido"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "P",
                                                            text: "Pendiente Gestion de Calidad"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "F",
                                                            text: "Finalizado"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "A",
                                                            text: "Pendiente Auditoria Externa"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "C",
                                                            text: "Cancelado"
                                                        })
                                                    ],
                                                    placeholder: "Seleccionar"
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Base}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.ComboBox({
                                                    selectedKey: "{FiltersModel>/Base}",
                                                    change: [oController.onSearch, oController],
                                                    placeholder: "Seleccionar",
                                                    items: {
                                                        path: "EstacionModel>/Estaciones",
                                                        template: new sap.ui.core.Item({
                                                            key: "{EstacionModel>Estacion}",
                                                            text: "{EstacionModel>Codigo} - {EstacionModel>Descripcion}"
                                                        })
                                                    }
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>FechaCreacion}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.DatePicker({
                                                    dateValue: "{FiltersModel>/FechaCreacion}",
                                                    placeholder: "{i18n>FechaCreacion}",
                                                    displayFormat: "dd/MM/yyyy",
                                                    change: [oController.onSearch, oController]
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>VtoApto}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.DatePicker({
                                                    dateValue: "{FiltersModel>/VtoApto}",
                                                    placeholder: "{i18n>VtoApto}",
                                                    displayFormat: "dd/MM/yyyy",
                                                    change: [oController.onSearch, oController]
                                                })
                                            ]
                                        }),
                                        // Fecha Creación
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>FechaRegistro}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.DateRangeSelection({
                                                    dateValue: "{BackFiltersModel>/FechaRegistroDesde}",
                                                    secondDateValue: "{BackFiltersModel>/RangoRegistroHasta}",
                                                    placeholder: "{i18n>FechaRegistro}",
                                                    displayFormat: "MM/yyyy",
                                                    change: [oController.onSearch, oController]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }).addStyleClass("customPanel"),
                // Panel para filtros fijos del backend
                new sap.m.Panel({
                    expandable: false,
                    expanded: true,
                    content: [
                        new sap.ui.layout.form.Form({
                            editable: true,
                            layout: new sap.ui.layout.form.ResponsiveGridLayout(),
                            formContainers: [
                                new sap.ui.layout.form.FormContainer({
                                    formElements: []
                                }),
                                new sap.ui.layout.form.FormContainer({
                                    formElements: [
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Tipo}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.ComboBox({
                                                    selectedKey: "{BackFiltersModel>/Clasehab}",
                                                    placeholder: "Seleccionar",
                                                    items: [
                                                        new sap.ui.core.Item({
                                                            key: "H0002",
                                                            text: "TCT"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "H0001",
                                                            text: "Mantenimiento"
                                                        }),
                                                        new sap.ui.core.Item({
                                                            key: "H0003",
                                                            text: "PT15"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Idhabilitacion}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.Input({
                                                    valueLiveUpdate: true,
                                                    placeholder: "{i18n>Idhabilitacion}",
                                                    value: "{BackFiltersModel>/Idhabilitacion}"
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>DNI}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.Input({
                                                    valueLiveUpdate: true,
                                                    placeholder: "{i18n>DNI}",
                                                    value: "{BackFiltersModel>/Documento}"
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Apellido}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.Input({
                                                    valueLiveUpdate: true,
                                                    placeholder: "{i18n>Apellido}",
                                                    value: "{BackFiltersModel>/Apellido}",
                                                    liveChange: [oController.onSearch, oController]
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "{i18n>Legajo}",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: [
                                                new sap.m.Input({
                                                    valueLiveUpdate: true,
                                                    placeholder: "{i18n>Legajo}",
                                                    value: "{BackFiltersModel>/Legajo}"
                                                })
                                            ]
                                        }),
                                        new sap.ui.layout.form.FormElement({
                                            label: new sap.m.Label({
                                                text: "",
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                            fields: new sap.m.Button({
                                                icon: "sap-icon://search",
                                                text: "{i18n>BT_BuscarSolic}",
                                                press: [oController.onBackSearch, oController],
                                                layoutData: new sap.ui.layout.GridData({
                                                    span: "L4 M4 S12"
                                                })
                                            }),
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }).addStyleClass("customPanel"),
                new sap.m.Table(this.createId("tblHabilitaciones"), {
                    busy: "{Habilitaciones>/Busy}",
                    busyIndicatorDelay: 0,
                    mode: sap.m.ListMode.MultiSelect,
                    growing: "true",
                    growingThreshold: 50,
                    growingScrollToLoad: true,
                    columns: [
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>Idhabilitacion}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>Estado}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>Empresa}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>func}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>NombreApellido}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>textRegion}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>DNI}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>VtoDeHab}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>FechaCreacion}"
                                })
                            ]
                        }),
                        new sap.m.Column({
                            header: [
                                new sap.m.Label({
                                    text: "{i18n>VtoApto}"
                                })
                            ]
                        })
                    ]
                }).bindItems({
                    path: "Habilitaciones>/Habilitaciones",
                    template: new sap.m.ColumnListItem({
                        type: sap.m.ListType.Navigation,
                        press: [oController.onSelectHabilitacion, oController],
                        cells: [
                            new sap.m.Text({
                                text: "{Habilitaciones>Idhabilitacion}"
                            }),
                            new sap.m.Text({
                                text: {
                                    parts: [{
                                        path: 'Habilitaciones>Estado'
                                    }, {
                                        path: 'Habilitaciones>Lote'
                                    }],                                 
                                        formatter: oController.formatEstado.bind(oController)
                                    }
                                
                            }),
                            new sap.m.Text({
                                text: "{Habilitaciones>Empresa}"
                            }),
                            new sap.m.HBox({
                                items: [
                                    new sap.m.Text({ //Cuando la licencia es TCT se muestra este campo que muestra la "Funcion" por el campo Lote
                                        visible: {
                                            path: "Habilitaciones>Clasehab",
                                            formatter: function (Clasehab) {
                                                if (Clasehab === "H0002") {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                        },
                                        text: "{Habilitaciones>Lote}"
                                    }),
                                    new sap.m.Text({ //Cuando la licencia es PT15/Mantenimiento se muestra este campo que muestra la "Funcion" por el campo Tipohab y tipoHabs
                                        visible: {
                                            path: "Habilitaciones>Clasehab",
                                            formatter: function (Clasehab) {
                                                if (Clasehab !== "H0002") {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                        },
                                        text: {
                                            parts: ["Habilitaciones>Tipohab", "TipoHabsModel>/tipoHabs"],
                                            formatter: oController.formatFuncion.bind(oController)
                                        }
                                    })
                                ]
                            }),
                            new sap.m.Text({
                                text: "{Habilitaciones>Nombre} {Habilitaciones>Apellido}"
                            }),
                            new sap.m.Text({
                                text: {
                                    parts: ["Habilitaciones>Area", "AllRegiones>/Regiones"],
                                    formatter: oController.formatRegion
                                }
                            }),
                            new sap.m.Text({
                                text: "{Habilitaciones>Documento}"
                            }),
                            new sap.m.Text({
                                text: {
                                    path: "Habilitaciones>VigenciaDate",
                                    formatter: oController.formatFechas
                                },
                                visible: {
                                    path: "Habilitaciones>Estado",
                                    formatter: oController.formatVisibilityVigencia
                                }
                            }),
                            new sap.m.Text({
                                text: {
                                    path: "Habilitaciones>FechaCreacion",
                                    formatter: oController.formatFechas
                                },
                                visible: {
                                    path: "Habilitaciones>Estado",
                                    formatter: oController.formatVisibilityVigencia
                                }
                            }),
                            new sap.m.Text({
                                text: {
                                    path: "Habilitaciones>VtoApto",
                                    formatter: oController.formatFechas
                                }
                            })
                        ]
                    })
                })
            ]
        }).addStyleClass("sapUiMediumMargin customTable ");
        oPage.addContent(oContent);
        return oPage;
    }
});