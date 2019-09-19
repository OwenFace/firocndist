var referenceChart = {
    "layout": "s",
    "charts": [{
        "panes": [{
            "sources": [{
                "type": "MainSeries",
                "id": "cd230b4c-d534-4aac-85f0-78a9238e6aa9",
                "state": {
                    "style": 1,
                    "esdShowDividends": true,
                    "esdShowSplits": true,
                    "esdShowEarnings": true,
                    "esdShowBreaks": false,
                    "esdBreaksStyle": {
                        "color": "#E2745B",
                        "style": 2,
                        "width": 1
                    },
                    "esdFlagSize": 2,
                    "showCountdown": true,
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "silentIntervalChange": false,
                    "showPriceLine": true,
                    "priceLineWidth": 1,
                    "lockScale": false,
                    "minTick": "default",
                    "extendedHours": false,
                    "sessVis": false,
                    "candleStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "drawWick": true,
                        "drawBorder": true,
                        "borderColor": "#378658",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "wickColor": "#737375",
                        "barColorsOnPrevClose": false
                    },
                    "hollowCandleStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "drawWick": true,
                        "drawBorder": true,
                        "borderColor": "#378658",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "wickColor": "#737375"
                    },
                    "haStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "drawWick": true,
                        "drawBorder": true,
                        "borderColor": "#378658",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "wickColor": "#737375",
                        "barColorsOnPrevClose": false
                    },
                    "barStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "barColorsOnPrevClose": false,
                        "dontDrawOpen": false
                    },
                    "lineStyle": {
                        "color": "#3C78D8",
                        "linestyle": 0,
                        "linewidth": 1,
                        "priceSource": "close",
                        "styleType": 2
                    },
                    "areaStyle": {
                        "color1": "#606090",
                        "color2": "#01F6F5",
                        "linecolor": "#0094FF",
                        "linestyle": 0,
                        "linewidth": 1,
                        "priceSource": "close",
                        "transparency": 50
                    },
                    "priceAxisProperties": {
                        "autoScale": true,
                        "autoScaleDisabled": false,
                        "percentage": false,
                        "percentageDisabled": false,
                        "log": false,
                        "logDisabled": false,
                        "showSymbolLabels": false
                    },
                    "renkoStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "borderUpColorProjection": "#225437",
                        "borderDownColorProjection": "#5b1a13",
                        "inputs": {
                            "source": "close",
                            "boxSize": 3,
                            "style": "ATR",
                            "atrLength": 14
                        },
                        "inputInfo": {
                            "source": {
                                "name": "Source"
                            },
                            "boxSize": {
                                "name": "Box size"
                            },
                            "style": {
                                "name": "Style"
                            },
                            "atrLength": {
                                "name": "ATR Length"
                            }
                        }
                    },
                    "pbStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "borderUpColorProjection": "#225437",
                        "borderDownColorProjection": "#5b1a13",
                        "inputs": {
                            "source": "close",
                            "lb": 3
                        },
                        "inputInfo": {
                            "source": {
                                "name": "Source"
                            },
                            "lb": {
                                "name": "Number of line"
                            }
                        }
                    },
                    "kagiStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "inputs": {
                            "source": "close",
                            "reversalAmount": 1
                        },
                        "inputInfo": {
                            "source": {
                                "name": "Source"
                            },
                            "reversalAmount": {
                                "name": "Reversal amount"
                            }
                        }
                    },
                    "pnfStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "inputs": {
                            "sources": "HL",
                            "reversalAmount": 3,
                            "boxSize": 1,
                            "style": "ATR",
                            "atrLength": 14
                        },
                        "inputInfo": {
                            "sources": {
                                "name": "Source"
                            },
                            "boxSize": {
                                "name": "Box size"
                            },
                            "reversalAmount": {
                                "name": "Reversal amount"
                            },
                            "style": {
                                "name": "Style"
                            },
                            "atrLength": {
                                "name": "ATR Length"
                            }
                        }
                    },
                    "symbol": "NasdaqNM:AAPL",
                    "timeframe": "",
                    "onWidget": false,
                    "interval": "D",
                    "shortName": "AAPL"
                },
                "zorder": -1
            }, {
                "type": "Study",
                "id": "546650f5-c32f-4eb6-8770-c304e5bb3e4d",
                "state": {
                    "styles": {
                        "vol": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 5,
                            "trackPrice": false,
                            "transparency": 65,
                            "visible": true,
                            "color": "#000080",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Volume MA"
                        },
                        "vol_ma": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 4,
                            "trackPrice": false,
                            "transparency": 65,
                            "visible": true,
                            "color": "#0496FF",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Volume"
                        }
                    },
                    "precision": "default",
                    "palettes": {
                        "volumePalette": {
                            "colors": {
                                "0": {
                                    "color": "#FF0000",
                                    "width": 1,
                                    "style": 0,
                                    "name": "Color 0"
                                },
                                "1": {
                                    "color": "#008000",
                                    "width": 1,
                                    "style": 0,
                                    "name": "Color 1"
                                }
                            }
                        }
                    },
                    "inputs": {
                        "0": {
                            "id": "showMA",
                            "name": "showMA",
                            "defval": false,
                            "type": "bool"
                        },
                        "showMA": true
                    },
                    "bands": {},
                    "area": {},
                    "graphics": {},
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "showStudyArguments": true,
                    "plots": {
                        "0": {
                            "id": "vol",
                            "type": "line"
                        },
                        "1": {
                            "id": "volumePalette",
                            "palette": "volumePalette",
                            "target": "vol",
                            "type": "colorer"
                        },
                        "2": {
                            "id": "vol_ma",
                            "type": "line"
                        }
                    },
                    "_metainfoVersion": 15,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "transparency": 65,
                    "description": "Volume",
                    "shortDescription": "Volume",
                    "is_price_study": false,
                    "id": "Volume@tv-basicstudies",
                    "shortId": "Volume",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Volume@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Volume@tv-basicstudies"
                },
                "zorder": -2,
                "metaInfo": {
                    "palettes": {
                        "volumePalette": {
                            "colors": {
                                "0": {
                                    "name": "Color 0"
                                },
                                "1": {
                                    "name": "Color 1"
                                }
                            }
                        }
                    },
                    "inputs": [{
                        "id": "showMA",
                        "name": "showMA",
                        "defval": false,
                        "type": "bool"
                    }],
                    "plots": [{
                        "id": "vol",
                        "type": "line"
                    }, {
                        "id": "volumePalette",
                        "palette": "volumePalette",
                        "target": "vol",
                        "type": "colorer"
                    }, {
                        "id": "vol_ma",
                        "type": "line"
                    }],
                    "graphics": {},
                    "defaults": {
                        "styles": {
                            "vol": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 5,
                                "trackPrice": false,
                                "transparency": 65,
                                "visible": true,
                                "color": "#000080"
                            },
                            "vol_ma": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 4,
                                "trackPrice": false,
                                "transparency": 65,
                                "visible": true,
                                "color": "#0496FF"
                            }
                        },
                        "precision": 0,
                        "palettes": {
                            "volumePalette": {
                                "colors": {
                                    "0": {
                                        "color": "#FF0000",
                                        "width": 1,
                                        "style": 0
                                    },
                                    "1": {
                                        "color": "#008000",
                                        "width": 1,
                                        "style": 0
                                    }
                                }
                            }
                        },
                        "inputs": {
                            "showMA": true
                        }
                    },
                    "_metainfoVersion": 15,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "transparency": 65,
                    "styles": {
                        "vol": {
                            "title": "Volume MA",
                            "histogramBase": 0
                        },
                        "vol_ma": {
                            "title": "Volume",
                            "histogramBase": 0
                        }
                    },
                    "description": "Volume",
                    "shortDescription": "Volume",
                    "is_price_study": false,
                    "id": "Volume@tv-basicstudies-1",
                    "shortId": "Volume",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Volume@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Volume@tv-basicstudies"
                }
            }, {
                "type": "LineToolTrendLine",
                "id": "50c72b6a-f18d-4381-8c0e-7132e750e222",
                "state": {
                    "clonable": true,
                    "linecolor": "#ff0000",
                    "linewidth": 4,
                    "linestyle": 0,
                    "extendLeft": false,
                    "extendRight": false,
                    "leftEnd": 0,
                    "rightEnd": 0,
                    "font": "Verdana",
                    "textcolor": "#157760",
                    "fontsize": 12,
                    "bold": false,
                    "italic": false,
                    "snapTo45Degrees": true,
                    "alwaysShowStats": false,
                    "showPriceRange": false,
                    "showBarsRange": false,
                    "showDateTimeRange": false,
                    "showDistance": false,
                    "showAngle": false,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1407402000,
                    "offset": 0,
                    "price": 16.54324809951624
                }, {
                    "time_t": 1408525200,
                    "offset": 0,
                    "price": 16.68677263303386
                }],
                "zorder": -3,
                "ownerSource": "cd230b4c-d534-4aac-85f0-78a9238e6aa9"
            }, {
                "type": "LineToolTrendLine",
                "id": "31c823ba-d91f-402d-8ec5-d002764db616",
                "state": {
                    "clonable": true,
                    "linecolor": "#159980",
                    "linewidth": 4,
                    "linestyle": 0,
                    "extendLeft": false,
                    "extendRight": false,
                    "leftEnd": 0,
                    "rightEnd": 0,
                    "font": "Verdana",
                    "textcolor": "#157760",
                    "fontsize": 12,
                    "bold": false,
                    "italic": false,
                    "snapTo45Degrees": true,
                    "alwaysShowStats": false,
                    "showPriceRange": false,
                    "showBarsRange": false,
                    "showDateTimeRange": false,
                    "showDistance": false,
                    "showAngle": false,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1408525200,
                    "offset": 0,
                    "price": 16.689205252246026
                }, {
                    "time_t": 1409821200,
                    "offset": 0,
                    "price": 17.348445058742225
                }],
                "zorder": -4,
                "ownerSource": "cd230b4c-d534-4aac-85f0-78a9238e6aa9"
            }, {
                "type": "LineToolTrendLine",
                "id": "6a08c404-87bf-4e8f-ad49-314eb6fce6aa",
                "state": {
                    "clonable": true,
                    "linecolor": "#ff0000",
                    "linewidth": 4,
                    "linestyle": 0,
                    "extendLeft": false,
                    "extendRight": false,
                    "leftEnd": 0,
                    "rightEnd": 0,
                    "font": "Verdana",
                    "textcolor": "#157760",
                    "fontsize": 12,
                    "bold": false,
                    "italic": false,
                    "snapTo45Degrees": true,
                    "alwaysShowStats": false,
                    "showPriceRange": false,
                    "showBarsRange": false,
                    "showDateTimeRange": false,
                    "showDistance": false,
                    "showAngle": false,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1410426000,
                    "offset": 0,
                    "price": 16.830297166551485
                }, {
                    "time_t": 1408698000,
                    "offset": 0,
                    "price": 16.241603317208018
                }],
                "zorder": -5,
                "ownerSource": "cd230b4c-d534-4aac-85f0-78a9238e6aa9"
            }, {
                "type": "LineToolTrendLine",
                "id": "06643592-a0a3-46c0-8714-848efc7c90df",
                "state": {
                    "clonable": true,
                    "linecolor": "#159980",
                    "linewidth": 4,
                    "linestyle": 0,
                    "extendLeft": false,
                    "extendRight": false,
                    "leftEnd": 0,
                    "rightEnd": 0,
                    "font": "Verdana",
                    "textcolor": "#157760",
                    "fontsize": 12,
                    "bold": false,
                    "italic": false,
                    "snapTo45Degrees": true,
                    "alwaysShowStats": false,
                    "showPriceRange": false,
                    "showBarsRange": false,
                    "showDateTimeRange": false,
                    "showDistance": false,
                    "showAngle": false,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1407488400,
                    "offset": 0,
                    "price": 15.60912232204561
                }, {
                    "time_t": 1408698000,
                    "offset": 0,
                    "price": 16.246468555632344
                }],
                "zorder": -6,
                "ownerSource": "cd230b4c-d534-4aac-85f0-78a9238e6aa9"
            }, {
                "type": "Study",
                "id": "aef08fdc-2f28-4279-8552-2ac6afb4c267",
                "state": {
                    "styles": {
                        "plot_0": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#FF0000",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Short"
                        },
                        "plot_1": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#008000",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Long"
                        },
                        "plot_2": {
                            "linestyle": 0,
                            "linewidth": 4,
                            "plottype": 3,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#000080",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Crosses"
                        }
                    },
                    "precision": "default",
                    "inputs": {
                        "0": {
                            "id": "in_0",
                            "name": "Short",
                            "defval": 9,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "1": {
                            "id": "in_1",
                            "name": "Long",
                            "defval": 26,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "in_0": 9,
                        "in_1": 26
                    },
                    "palettes": {},
                    "bands": {},
                    "area": {},
                    "graphics": {},
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "showStudyArguments": true,
                    "plots": {
                        "0": {
                            "id": "plot_0",
                            "type": "line"
                        },
                        "1": {
                            "id": "plot_1",
                            "type": "line"
                        },
                        "2": {
                            "id": "plot_2",
                            "type": "line"
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "description": "MA Cross",
                    "shortDescription": "MA Cross",
                    "is_price_study": true,
                    "id": "MA Cross@tv-basicstudies",
                    "shortId": "MA Cross",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "MA Cross@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "MA Cross@tv-basicstudies"
                },
                "zorder": -7,
                "metaInfo": {
                    "palettes": {},
                    "inputs": [{
                        "id": "in_0",
                        "name": "Short",
                        "defval": 9,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }, {
                        "id": "in_1",
                        "name": "Long",
                        "defval": 26,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }],
                    "plots": [{
                        "id": "plot_0",
                        "type": "line"
                    }, {
                        "id": "plot_1",
                        "type": "line"
                    }, {
                        "id": "plot_2",
                        "type": "line"
                    }],
                    "graphics": {},
                    "defaults": {
                        "styles": {
                            "plot_0": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#FF0000"
                            },
                            "plot_1": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#008000"
                            },
                            "plot_2": {
                                "linestyle": 0,
                                "linewidth": 4,
                                "plottype": 3,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#000080"
                            }
                        },
                        "precision": 4,
                        "inputs": {
                            "in_0": 9,
                            "in_1": 26
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "styles": {
                        "plot_0": {
                            "title": "Short",
                            "histogramBase": 0,
                            "joinPoints": false
                        },
                        "plot_1": {
                            "title": "Long",
                            "histogramBase": 0,
                            "joinPoints": false
                        },
                        "plot_2": {
                            "title": "Crosses",
                            "histogramBase": 0,
                            "joinPoints": false
                        }
                    },
                    "description": "MA Cross",
                    "shortDescription": "MA Cross",
                    "is_price_study": true,
                    "id": "MA Cross@tv-basicstudies-1",
                    "shortId": "MA Cross",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "MA Cross@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "MA Cross@tv-basicstudies"
                }
            }, {
                "type": "LineToolParallelChannel",
                "id": "25ee6f22-31c8-4b2d-bf95-639764fdca65",
                "state": {
                    "clonable": true,
                    "linecolor": "#773499",
                    "linewidth": 1,
                    "linestyle": 0,
                    "extendLeft": false,
                    "extendRight": false,
                    "fillBackground": true,
                    "backgroundColor": "#b4a7d6",
                    "transparency": 50,
                    "showMidline": false,
                    "midlinecolor": "#773499",
                    "midlinewidth": 1,
                    "midlinestyle": 2,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1404378000,
                    "offset": 0,
                    "price": 15.159939024390244
                }, {
                    "time_t": 1406106000,
                    "offset": 0,
                    "price": 17.453841463414633
                }, {
                    "time_t": 1404378000,
                    "offset": 0,
                    "price": 14.30262195121951
                }],
                "zorder": -8,
                "ownerSource": "cd230b4c-d534-4aac-85f0-78a9238e6aa9",
                "priceOffset": -0.8573170731707336
            }],
            "leftAxisState": {
                "m_priceRange": {
                    "m_minValue": -0.5,
                    "m_maxValue": 0.5
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 402,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "leftAxisSources": [],
            "rightAxisState": {
                "m_priceRange": {
                    "m_minValue": 13.18,
                    "m_maxValue": 17.36
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 402,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "rightAxisSources": ["cd230b4c-d534-4aac-85f0-78a9238e6aa9",
                "50c72b6a-f18d-4381-8c0e-7132e750e222", "31c823ba-d91f-402d-8ec5-d002764db616",
                "6a08c404-87bf-4e8f-ad49-314eb6fce6aa", "06643592-a0a3-46c0-8714-848efc7c90df",
                "aef08fdc-2f28-4279-8552-2ac6afb4c267", "25ee6f22-31c8-4b2d-bf95-639764fdca65"],
            "overlayPriceScales": {
                "546650f5-c32f-4eb6-8770-c304e5bb3e4d": {
                    "m_priceRange": {
                        "m_minValue": 0,
                        "m_maxValue": 54283500
                    },
                    "m_isAutoScale": true,
                    "m_isPercentage": false,
                    "m_isLog": false,
                    "m_height": 402,
                    "m_topMargin": 0.75,
                    "m_bottomMargin": 0,
                    "m_showSymbolLabels": false
                }
            },
            "stretchFactor": 2000,
            "mainSourceId": "cd230b4c-d534-4aac-85f0-78a9238e6aa9"
        }, {
            "sources": [{
                "type": "Study",
                "id": "2812d462-e5ee-4805-96e9-c530fb01e6ae",
                "state": {
                    "styles": {
                        "plot_0": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#FF6A00",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Upper"
                        },
                        "plot_1": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#0094FF",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Lower"
                        }
                    },
                    "precision": "default",
                    "inputs": {
                        "0": {
                            "id": "in_0",
                            "name": "length",
                            "defval": 14,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "in_0": 14
                    },
                    "palettes": {},
                    "bands": {},
                    "area": {},
                    "graphics": {},
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "showStudyArguments": true,
                    "plots": {
                        "0": {
                            "id": "plot_0",
                            "type": "line"
                        },
                        "1": {
                            "id": "plot_1",
                            "type": "line"
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "description": "Aroon",
                    "shortDescription": "Aroon",
                    "is_price_study": false,
                    "id": "Aroon@tv-basicstudies",
                    "shortId": "Aroon",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Aroon@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Aroon@tv-basicstudies"
                },
                "zorder": -1,
                "metaInfo": {
                    "palettes": {},
                    "inputs": [{
                        "id": "in_0",
                        "name": "length",
                        "defval": 14,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }],
                    "plots": [{
                        "id": "plot_0",
                        "type": "line"
                    }, {
                        "id": "plot_1",
                        "type": "line"
                    }],
                    "graphics": {},
                    "defaults": {
                        "styles": {
                            "plot_0": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#FF6A00"
                            },
                            "plot_1": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#0094FF"
                            }
                        },
                        "precision": 4,
                        "inputs": {
                            "in_0": 14
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "styles": {
                        "plot_0": {
                            "title": "Upper",
                            "histogramBase": 0,
                            "joinPoints": false
                        },
                        "plot_1": {
                            "title": "Lower",
                            "histogramBase": 0,
                            "joinPoints": false
                        }
                    },
                    "description": "Aroon",
                    "shortDescription": "Aroon",
                    "is_price_study": false,
                    "id": "Aroon@tv-basicstudies-1",
                    "shortId": "Aroon",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Aroon@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Aroon@tv-basicstudies"
                }
            }],
            "leftAxisState": {
                "m_priceRange": {
                    "m_minValue": -0.5,
                    "m_maxValue": 0.5
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 201,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "leftAxisSources": [],
            "rightAxisState": {
                "m_priceRange": {
                    "m_minValue": 0,
                    "m_maxValue": 100
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 201,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "rightAxisSources": ["2812d462-e5ee-4805-96e9-c530fb01e6ae"],
            "overlayPriceScales": {},
            "stretchFactor": 1000,
            "mainSourceId": "2812d462-e5ee-4805-96e9-c530fb01e6ae"
        }, {
            "sources": [{
                "type": "Study",
                "id": "85fda86c-7a8a-4ecb-8066-336852fba636",
                "state": {
                    "styles": {
                        "plot_0": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 1,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#FF0000",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Histogram"
                        },
                        "plot_1": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#0000FF",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "MACD"
                        },
                        "plot_2": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#FF0000",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Signal"
                        }
                    },
                    "precision": "default",
                    "inputs": {
                        "0": {
                            "id": "in_0",
                            "name": "fastLength",
                            "defval": 12,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "1": {
                            "id": "in_1",
                            "name": "slowLength",
                            "defval": 26,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "2": {
                            "id": "in_2",
                            "name": "signalLength",
                            "defval": 9,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "in_0": 12,
                        "in_1": 26,
                        "in_2": 9
                    },
                    "palettes": {},
                    "bands": {},
                    "area": {},
                    "graphics": {},
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "showStudyArguments": true,
                    "plots": {
                        "0": {
                            "id": "plot_0",
                            "type": "line"
                        },
                        "1": {
                            "id": "plot_1",
                            "type": "line"
                        },
                        "2": {
                            "id": "plot_2",
                            "type": "line"
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "description": "Moving Average Convergence/Divergence",
                    "shortDescription": "MACD",
                    "is_price_study": false,
                    "id": "Moving Average Convergence/Divergence@tv-basicstudies",
                    "shortId": "Moving Average Convergence/Divergence",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Moving Average Convergence/Divergence@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Moving Average Convergence/Divergence@tv-basicstudies"
                },
                "zorder": -1,
                "metaInfo": {
                    "palettes": {},
                    "inputs": [{
                        "id": "in_0",
                        "name": "fastLength",
                        "defval": 12,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }, {
                        "id": "in_1",
                        "name": "slowLength",
                        "defval": 26,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }, {
                        "id": "in_2",
                        "name": "signalLength",
                        "defval": 9,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }],
                    "plots": [{
                        "id": "plot_0",
                        "type": "line"
                    }, {
                        "id": "plot_1",
                        "type": "line"
                    }, {
                        "id": "plot_2",
                        "type": "line"
                    }],
                    "graphics": {},
                    "defaults": {
                        "styles": {
                            "plot_0": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 1,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#FF0000"
                            },
                            "plot_1": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#0000FF"
                            },
                            "plot_2": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#FF0000"
                            }
                        },
                        "precision": 4,
                        "inputs": {
                            "in_0": 12,
                            "in_1": 26,
                            "in_2": 9
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "styles": {
                        "plot_0": {
                            "title": "Histogram",
                            "histogramBase": 0,
                            "joinPoints": false
                        },
                        "plot_1": {
                            "title": "MACD",
                            "histogramBase": 0,
                            "joinPoints": false
                        },
                        "plot_2": {
                            "title": "Signal",
                            "histogramBase": 0,
                            "joinPoints": false
                        }
                    },
                    "description": "Moving Average Convergence/Divergence",
                    "shortDescription": "MACD",
                    "is_price_study": false,
                    "id": "Moving Average Convergence/Divergence@tv-basicstudies-1",
                    "shortId": "Moving Average Convergence/Divergence",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Moving Average Convergence/Divergence@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Moving Average Convergence/Divergence@tv-basicstudies"
                }
            }],
            "leftAxisState": {
                "m_priceRange": {
                    "m_minValue": -0.5,
                    "m_maxValue": 0.5
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 201,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "leftAxisSources": [],
            "rightAxisState": {
                "m_priceRange": {
                    "m_minValue": -0.19489314851238426,
                    "m_maxValue": 0.6836151513925035
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 201,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "rightAxisSources": ["85fda86c-7a8a-4ecb-8066-336852fba636"],
            "overlayPriceScales": {},
            "stretchFactor": 1000,
            "mainSourceId": "85fda86c-7a8a-4ecb-8066-336852fba636"
        }],
        "timeScale": {
            "m_barSpacing": 16.349546630354396,
            "m_rightOffset": 2.9044817844617223
        },
        "chartProperties": {
            "paneProperties": {
                "background": "#ffffff",
                "gridProperties": {
                    "color": "#E6E6E6",
                    "style": 0
                },
                "crossHairProperties": {
                    "color": "#B7B7B7",
                    "style": 2,
                    "transparency": 0,
                    "width": 1
                },
                "topMargin": 5,
                "bottomMargin": 5,
                "leftAxisProperties": {
                    "autoScale": true,
                    "autoScaleDisabled": false,
                    "percentage": false,
                    "percentageDisabled": false,
                    "log": false,
                    "logDisabled": false,
                    "showSymbolLabels": false
                },
                "rightAxisProperties": {
                    "autoScale": true,
                    "autoScaleDisabled": false,
                    "percentage": false,
                    "percentageDisabled": false,
                    "log": false,
                    "logDisabled": false,
                    "showSymbolLabels": false
                },
                "overlayPropreties": {
                    "autoScale": true,
                    "autoScaleDisabled": false,
                    "percentage": false,
                    "percentageDisabled": false,
                    "log": false,
                    "logDisabled": false,
                    "showSymbolLabels": false
                }
            },
            "scalesProperties": {
                "showLeftScale": false,
                "showRightScale": true,
                "backgroundColor": "#ffffff",
                "lineColor": "#555",
                "textColor": "#555",
                "scaleSeriesOnly": false
            }
        },
        "version": 2,
        "timezone": "UTC"
    }]
};

var referenceChart2 = {
    "layout": "s",
    "charts": [{
        "panes": [{
            "sources": [{
                "type": "MainSeries",
                "id": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd",
                "state": {
                    "style": 1,
                    "esdShowDividends": true,
                    "esdShowSplits": true,
                    "esdShowEarnings": true,
                    "esdShowBreaks": false,
                    "esdBreaksStyle": {
                        "color": "#E2745B",
                        "style": 2,
                        "width": 1
                    },
                    "esdFlagSize": 2,
                    "showCountdown": true,
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "silentIntervalChange": false,
                    "showPriceLine": true,
                    "priceLineWidth": 1,
                    "lockScale": false,
                    "minTick": "default",
                    "extendedHours": false,
                    "sessVis": false,
                    "candleStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "drawWick": true,
                        "drawBorder": true,
                        "borderColor": "#378658",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "wickColor": "#737375",
                        "barColorsOnPrevClose": false
                    },
                    "hollowCandleStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "drawWick": true,
                        "drawBorder": true,
                        "borderColor": "#378658",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "wickColor": "#737375"
                    },
                    "haStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "drawWick": true,
                        "drawBorder": true,
                        "borderColor": "#378658",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "wickColor": "#737375",
                        "barColorsOnPrevClose": false
                    },
                    "barStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "barColorsOnPrevClose": false,
                        "dontDrawOpen": false
                    },
                    "lineStyle": {
                        "color": "#3C78D8",
                        "linestyle": 0,
                        "linewidth": 1,
                        "priceSource": "close",
                        "styleType": 2
                    },
                    "areaStyle": {
                        "color1": "#606090",
                        "color2": "#01F6F5",
                        "linecolor": "#0094FF",
                        "linestyle": 0,
                        "linewidth": 1,
                        "priceSource": "close",
                        "transparency": 50
                    },
                    "priceAxisProperties": {
                        "autoScale": true,
                        "autoScaleDisabled": false,
                        "percentage": false,
                        "percentageDisabled": false,
                        "log": false,
                        "logDisabled": false,
                        "showSymbolLabels": false
                    },
                    "renkoStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "borderUpColorProjection": "#225437",
                        "borderDownColorProjection": "#5b1a13",
                        "inputs": {
                            "source": "close",
                            "boxSize": 3,
                            "style": "ATR",
                            "atrLength": 14
                        },
                        "inputInfo": {
                            "source": {
                                "name": "Source"
                            },
                            "boxSize": {
                                "name": "Box size"
                            },
                            "style": {
                                "name": "Style"
                            },
                            "atrLength": {
                                "name": "ATR Length"
                            }
                        }
                    },
                    "pbStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "borderUpColor": "#225437",
                        "borderDownColor": "#5b1a13",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "borderUpColorProjection": "#225437",
                        "borderDownColorProjection": "#5b1a13",
                        "inputs": {
                            "source": "close",
                            "lb": 3
                        },
                        "inputInfo": {
                            "source": {
                                "name": "Source"
                            },
                            "lb": {
                                "name": "Number of line"
                            }
                        }
                    },
                    "kagiStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "inputs": {
                            "source": "close",
                            "reversalAmount": 1
                        },
                        "inputInfo": {
                            "source": {
                                "name": "Source"
                            },
                            "reversalAmount": {
                                "name": "Reversal amount"
                            }
                        }
                    },
                    "pnfStyle": {
                        "upColor": "#6ba583",
                        "downColor": "#d75442",
                        "upColorProjection": "#4ad6be",
                        "downColorProjection": "#d649cf",
                        "inputs": {
                            "sources": "HL",
                            "reversalAmount": 3,
                            "boxSize": 1,
                            "style": "ATR",
                            "atrLength": 14
                        },
                        "inputInfo": {
                            "sources": {
                                "name": "Source"
                            },
                            "boxSize": {
                                "name": "Box size"
                            },
                            "reversalAmount": {
                                "name": "Reversal amount"
                            },
                            "style": {
                                "name": "Style"
                            },
                            "atrLength": {
                                "name": "ATR Length"
                            }
                        }
                    },
                    "symbol": "NasdaqNM:AAPL",
                    "timeframe": "",
                    "onWidget": false,
                    "interval": "D",
                    "shortName": "AAPL"
                },
                "zorder": -1
            }, {
                "type": "Study",
                "id": "49e81c50-29a7-412c-af84-29ffaa9a2d0b",
                "state": {
                    "styles": {
                        "vol": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 5,
                            "trackPrice": false,
                            "transparency": 65,
                            "visible": true,
                            "color": "#000080",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Volume MA"
                        },
                        "vol_ma": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 4,
                            "trackPrice": false,
                            "transparency": 65,
                            "visible": true,
                            "color": "#0496FF",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Volume"
                        }
                    },
                    "precision": "default",
                    "palettes": {
                        "volumePalette": {
                            "colors": {
                                "0": {
                                    "color": "#FF0000",
                                    "width": 1,
                                    "style": 0,
                                    "name": "Color 0"
                                },
                                "1": {
                                    "color": "#008000",
                                    "width": 1,
                                    "style": 0,
                                    "name": "Color 1"
                                }
                            }
                        }
                    },
                    "inputs": {
                        "0": {
                            "id": "showMA",
                            "name": "showMA",
                            "defval": false,
                            "type": "bool"
                        },
                        "showMA": true
                    },
                    "bands": {},
                    "area": {},
                    "graphics": {},
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "showStudyArguments": true,
                    "plots": {
                        "0": {
                            "id": "vol",
                            "type": "line"
                        },
                        "1": {
                            "id": "volumePalette",
                            "palette": "volumePalette",
                            "target": "vol",
                            "type": "colorer"
                        },
                        "2": {
                            "id": "vol_ma",
                            "type": "line"
                        }
                    },
                    "_metainfoVersion": 15,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "transparency": 65,
                    "description": "Volume",
                    "shortDescription": "Volume",
                    "is_price_study": false,
                    "id": "Volume@tv-basicstudies",
                    "shortId": "Volume",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Volume@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Volume@tv-basicstudies"
                },
                "zorder": -2,
                "metaInfo": {
                    "palettes": {
                        "volumePalette": {
                            "colors": {
                                "0": {
                                    "name": "Color 0"
                                },
                                "1": {
                                    "name": "Color 1"
                                }
                            }
                        }
                    },
                    "inputs": [{
                        "id": "showMA",
                        "name": "showMA",
                        "defval": false,
                        "type": "bool"
                    }],
                    "plots": [{
                        "id": "vol",
                        "type": "line"
                    }, {
                        "id": "volumePalette",
                        "palette": "volumePalette",
                        "target": "vol",
                        "type": "colorer"
                    }, {
                        "id": "vol_ma",
                        "type": "line"
                    }],
                    "graphics": {},
                    "defaults": {
                        "styles": {
                            "vol": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 5,
                                "trackPrice": false,
                                "transparency": 65,
                                "visible": true,
                                "color": "#000080"
                            },
                            "vol_ma": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 4,
                                "trackPrice": false,
                                "transparency": 65,
                                "visible": true,
                                "color": "#0496FF"
                            }
                        },
                        "precision": 0,
                        "palettes": {
                            "volumePalette": {
                                "colors": {
                                    "0": {
                                        "color": "#FF0000",
                                        "width": 1,
                                        "style": 0
                                    },
                                    "1": {
                                        "color": "#008000",
                                        "width": 1,
                                        "style": 0
                                    }
                                }
                            }
                        },
                        "inputs": {
                            "showMA": true
                        }
                    },
                    "_metainfoVersion": 15,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "transparency": 65,
                    "styles": {
                        "vol": {
                            "title": "Volume MA",
                            "histogramBase": 0
                        },
                        "vol_ma": {
                            "title": "Volume",
                            "histogramBase": 0
                        }
                    },
                    "description": "Volume",
                    "shortDescription": "Volume",
                    "is_price_study": false,
                    "id": "Volume@tv-basicstudies-1",
                    "shortId": "Volume",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Volume@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Volume@tv-basicstudies"
                }
            }, {
                "type": "Study",
                "id": "00dfe526-bc98-447f-af9a-6c1b020ab97c",
                "state": {
                    "styles": {
                        "plot_0": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#FF0000",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Median"
                        },
                        "plot_1": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#0000FF",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Upper"
                        },
                        "plot_2": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#0000FF",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Lower"
                        }
                    },
                    "precision": "default",
                    "filledAreasStyle": {
                        "fill_0": {
                            "color": "#000080",
                            "transparency": 90,
                            "visible": true
                        }
                    },
                    "inputs": {
                        "0": {
                            "id": "in_0",
                            "name": "length",
                            "defval": 20,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "1": {
                            "id": "in_1",
                            "name": "mult",
                            "defval": 2,
                            "type": "float",
                            "min": 0.001,
                            "max": 50
                        },
                        "in_0": 20,
                        "in_1": 2
                    },
                    "palettes": {},
                    "bands": {},
                    "area": {},
                    "graphics": {},
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "showStudyArguments": true,
                    "plots": {
                        "0": {
                            "id": "plot_0",
                            "type": "line"
                        },
                        "1": {
                            "id": "plot_1",
                            "type": "line"
                        },
                        "2": {
                            "id": "plot_2",
                            "type": "line"
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "description": "Bollinger Bands",
                    "shortDescription": "BB",
                    "is_price_study": true,
                    "filledAreas": {
                        "0": {
                            "id": "fill_0",
                            "objAId": "plot_1",
                            "objBId": "plot_2",
                            "type": "plot_plot",
                            "title": "Plots Background"
                        }
                    },
                    "id": "BB@tv-basicstudies",
                    "shortId": "BB",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "BB@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "BB@tv-basicstudies"
                },
                "zorder": -3,
                "metaInfo": {
                    "palettes": {},
                    "inputs": [{
                        "id": "in_0",
                        "name": "length",
                        "defval": 20,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }, {
                        "id": "in_1",
                        "name": "mult",
                        "defval": 2,
                        "type": "float",
                        "min": 0.001,
                        "max": 50
                    }],
                    "plots": [{
                        "id": "plot_0",
                        "type": "line"
                    }, {
                        "id": "plot_1",
                        "type": "line"
                    }, {
                        "id": "plot_2",
                        "type": "line"
                    }],
                    "graphics": {},
                    "defaults": {
                        "styles": {
                            "plot_0": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#FF0000"
                            },
                            "plot_1": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#0000FF"
                            },
                            "plot_2": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#0000FF"
                            }
                        },
                        "precision": 4,
                        "filledAreasStyle": {
                            "fill_0": {
                                "color": "#000080",
                                "transparency": 90,
                                "visible": true
                            }
                        },
                        "inputs": {
                            "in_0": 20,
                            "in_1": 2
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "styles": {
                        "plot_0": {
                            "title": "Median",
                            "histogramBase": 0,
                            "joinPoints": false
                        },
                        "plot_1": {
                            "title": "Upper",
                            "histogramBase": 0,
                            "joinPoints": false
                        },
                        "plot_2": {
                            "title": "Lower",
                            "histogramBase": 0,
                            "joinPoints": false
                        }
                    },
                    "description": "Bollinger Bands",
                    "shortDescription": "BB",
                    "is_price_study": true,
                    "filledAreas": [{
                        "id": "fill_0",
                        "objAId": "plot_1",
                        "objBId": "plot_2",
                        "type": "plot_plot",
                        "title": "Plots Background"
                    }],
                    "id": "BB@tv-basicstudies-1",
                    "shortId": "BB",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "BB@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "BB@tv-basicstudies"
                }
            }, {
                "type": "Study",
                "id": "67661ca9-874f-46fe-bf04-f9a8a0de28c2",
                "state": {
                    "styles": {
                        "plot_0": {
                            "linestyle": 0,
                            "linewidth": 1,
                            "plottype": 0,
                            "trackPrice": false,
                            "transparency": 35,
                            "visible": true,
                            "color": "#000080",
                            "histogramBase": 0,
                            "joinPoints": false,
                            "title": "Plot"
                        }
                    },
                    "precision": "default",
                    "inputs": {
                        "0": {
                            "id": "in_0",
                            "name": "length",
                            "defval": 9,
                            "type": "integer",
                            "min": 1,
                            "max": 1000000000000
                        },
                        "in_0": 9
                    },
                    "palettes": {},
                    "bands": {},
                    "area": {},
                    "graphics": {},
                    "showInDataWindow": true,
                    "showLastValue": true,
                    "visible": true,
                    "showStudyArguments": true,
                    "plots": {
                        "0": {
                            "id": "plot_0",
                            "type": "line"
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "description": "Hull MA",
                    "shortDescription": "HMA",
                    "is_price_study": true,
                    "id": "Hull MA@tv-basicstudies",
                    "shortId": "Hull MA",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Hull MA@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Hull MA@tv-basicstudies"
                },
                "zorder": -4,
                "metaInfo": {
                    "palettes": {},
                    "inputs": [{
                        "id": "in_0",
                        "name": "length",
                        "defval": 9,
                        "type": "integer",
                        "min": 1,
                        "max": 1000000000000
                    }],
                    "plots": [{
                        "id": "plot_0",
                        "type": "line"
                    }],
                    "graphics": {},
                    "defaults": {
                        "styles": {
                            "plot_0": {
                                "linestyle": 0,
                                "linewidth": 1,
                                "plottype": 0,
                                "trackPrice": false,
                                "transparency": 35,
                                "visible": true,
                                "color": "#000080"
                            }
                        },
                        "precision": 4,
                        "inputs": {
                            "in_0": 9
                        }
                    },
                    "_metainfoVersion": 23,
                    "isTVScript": false,
                    "isTVScriptStub": false,
                    "is_hidden_study": false,
                    "styles": {
                        "plot_0": {
                            "title": "Plot",
                            "histogramBase": 0,
                            "joinPoints": false
                        }
                    },
                    "description": "Hull MA",
                    "shortDescription": "HMA",
                    "is_price_study": true,
                    "id": "Hull MA@tv-basicstudies-1",
                    "shortId": "Hull MA",
                    "packageId": "tv-basicstudies",
                    "version": "1",
                    "fullId": "Hull MA@tv-basicstudies-1",
                    "productId": "tv-basicstudies",
                    "name": "Hull MA@tv-basicstudies"
                }
            }, {
                "type": "LineToolBrush",
                "id": "2a3a1752-1ccc-44df-ac81-7c0ab08e9b7f",
                "state": {
                    "clonable": true,
                    "linecolor": "#353535",
                    "linewidth": 2,
                    "linestyle": 0,
                    "smooth": 5,
                    "fillBackground": false,
                    "backgroundColor": "#153899",
                    "transparency": 50,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1483390800,
                    "offset": 28,
                    "price": 153.69514443994777
                }, {
                    "time_t": 1483390800,
                    "offset": 27,
                    "price": 153.0949750679611
                }, {
                    "time_t": 1483390800,
                    "offset": 27,
                    "price": 152.64484803897108
                }, {
                    "time_t": 1483390800,
                    "offset": 26,
                    "price": 152.19472100998127
                }, {
                    "time_t": 1483390800,
                    "offset": 25,
                    "price": 151.59455163799458
                }, {
                    "time_t": 1483390800,
                    "offset": 24,
                    "price": 150.9943822660079
                }, {
                    "time_t": 1483390800,
                    "offset": 23,
                    "price": 150.5442552370181
                }, {
                    "time_t": 1483390800,
                    "offset": 22,
                    "price": 149.7190223505365
                }, {
                    "time_t": 1483390800,
                    "offset": 20,
                    "price": 148.96881063555315
                }, {
                    "time_t": 1483390800,
                    "offset": 19,
                    "price": 148.36864126356647
                }, {
                    "time_t": 1483390800,
                    "offset": 17,
                    "price": 147.91851423457666
                }, {
                    "time_t": 1483390800,
                    "offset": 16,
                    "price": 147.46838720558665
                }, {
                    "time_t": 1483390800,
                    "offset": 14,
                    "price": 147.09328134809508
                }, {
                    "time_t": 1483390800,
                    "offset": 13,
                    "price": 146.86821783359997
                }, {
                    "time_t": 1483390800,
                    "offset": 12,
                    "price": 146.56813314760663
                }, {
                    "time_t": 1483390800,
                    "offset": 10,
                    "price": 146.2680484616135
                }, {
                    "time_t": 1483390800,
                    "offset": 8,
                    "price": 145.74290026112504
                }, {
                    "time_t": 1483390800,
                    "offset": 6,
                    "price": 145.51783674663014
                }, {
                    "time_t": 1483390800,
                    "offset": 3,
                    "price": 145.06770971764013
                }, {
                    "time_t": 1483390800,
                    "offset": 1,
                    "price": 144.61758268865032
                }, {
                    "time_t": 1483304400,
                    "offset": 0,
                    "price": 144.3925191741552
                }, {
                    "time_t": 1482872400,
                    "offset": 0,
                    "price": 144.09243448816187
                }, {
                    "time_t": 1482699600,
                    "offset": 0,
                    "price": 143.79234980216853
                }, {
                    "time_t": 1482267600,
                    "offset": 0,
                    "price": 143.64230745917206
                }, {
                    "time_t": 1481835600,
                    "offset": 0,
                    "price": 143.4922651161754
                }, {
                    "time_t": 1481662800,
                    "offset": 0,
                    "price": 143.34222277317872
                }, {
                    "time_t": 1481230800,
                    "offset": 0,
                    "price": 143.34222277317872
                }, {
                    "time_t": 1480971600,
                    "offset": 0,
                    "price": 143.26720160168028
                }, {
                    "time_t": 1480539600,
                    "offset": 0,
                    "price": 143.26720160168028
                }, {
                    "time_t": 1480021200,
                    "offset": 0,
                    "price": 143.26720160168028
                }, {
                    "time_t": 1479762000,
                    "offset": 0,
                    "price": 143.4922651161754
                }, {
                    "time_t": 1479243600,
                    "offset": 0,
                    "price": 143.64230745917206
                }, {
                    "time_t": 1478811600,
                    "offset": 0,
                    "price": 143.79234980216853
                }, {
                    "time_t": 1478552400,
                    "offset": 0,
                    "price": 144.01741331666364
                }, {
                    "time_t": 1478206800,
                    "offset": 0,
                    "price": 144.24247683115854
                }, {
                    "time_t": 1478034000,
                    "offset": 0,
                    "price": 144.46754034565365
                }, {
                    "time_t": 1477602000,
                    "offset": 0,
                    "price": 144.91766737464346
                }, {
                    "time_t": 1477256400,
                    "offset": 0,
                    "price": 145.29277323213523
                }, {
                    "time_t": 1476651600,
                    "offset": 0,
                    "price": 145.81792143262348
                }, {
                    "time_t": 1476133200,
                    "offset": 0,
                    "price": 146.19302729011505
                }, {
                    "time_t": 1475614800,
                    "offset": 0,
                    "price": 146.56813314760663
                }, {
                    "time_t": 1475010000,
                    "offset": 0,
                    "price": 146.9432390050984
                }, {
                    "time_t": 1474405200,
                    "offset": 0,
                    "price": 147.39336603408822
                }, {
                    "time_t": 1473800400,
                    "offset": 0,
                    "price": 147.76847189158
                }, {
                    "time_t": 1473195600,
                    "offset": 0,
                    "price": 147.9935354060749
                }, {
                    "time_t": 1472677200,
                    "offset": 0,
                    "price": 148.2185989205698
                }, {
                    "time_t": 1472158800,
                    "offset": 0,
                    "price": 148.29362009206824
                }, {
                    "time_t": 1471467600,
                    "offset": 0,
                    "price": 148.29362009206824
                }, {
                    "time_t": 1470949200,
                    "offset": 0,
                    "price": 148.29362009206824
                }, {
                    "time_t": 1470603600,
                    "offset": 0,
                    "price": 148.29362009206824
                }, {
                    "time_t": 1469998800,
                    "offset": 0,
                    "price": 148.29362009206824
                }, {
                    "time_t": 1469566800,
                    "offset": 0,
                    "price": 148.2185989205698
                }, {
                    "time_t": 1469048400,
                    "offset": 0,
                    "price": 148.06855657757313
                }, {
                    "time_t": 1468530000,
                    "offset": 0,
                    "price": 147.84349306307823
                }, {
                    "time_t": 1468357200,
                    "offset": 0,
                    "price": 147.69345072008156
                }, {
                    "time_t": 1468184400,
                    "offset": 0,
                    "price": 147.5434083770849
                }, {
                    "time_t": 1467666000,
                    "offset": 0,
                    "price": 147.39336603408822
                }, {
                    "time_t": 1467320400,
                    "offset": 0,
                    "price": 147.1683025195933
                }, {
                    "time_t": 1467320400,
                    "offset": 0,
                    "price": 147.01826017659664
                }, {
                    "time_t": 1467147600,
                    "offset": 0,
                    "price": 146.7181754906033
                }, {
                    "time_t": 1467234000,
                    "offset": 0,
                    "price": 146.7181754906033
                }, {
                    "time_t": 1467234000,
                    "offset": 0,
                    "price": 147.01826017659664
                }, {
                    "time_t": 1467234000,
                    "offset": 0,
                    "price": 147.1683025195933
                }, {
                    "time_t": 1467234000,
                    "offset": 0,
                    "price": 147.46838720558665
                }, {
                    "time_t": 1467320400,
                    "offset": 0,
                    "price": 147.84349306307823
                }, {
                    "time_t": 1467579600,
                    "offset": 0,
                    "price": 148.06855657757313
                }, {
                    "time_t": 1467579600,
                    "offset": 0,
                    "price": 148.29362009206824
                }, {
                    "time_t": 1467666000,
                    "offset": 0,
                    "price": 148.59370477806158
                }, {
                    "time_t": 1467752400,
                    "offset": 0,
                    "price": 149.0438318070514
                }, {
                    "time_t": 1467838800,
                    "offset": 0,
                    "price": 149.34391649304473
                }, {
                    "time_t": 1467838800,
                    "offset": 0,
                    "price": 149.4939588360414
                }, {
                    "time_t": 1467925200,
                    "offset": 0,
                    "price": 149.86906469353318
                }, {
                    "time_t": 1467925200,
                    "offset": 0,
                    "price": 150.09412820802808
                }, {
                    "time_t": 1467925200,
                    "offset": 0,
                    "price": 150.24417055102475
                }, {
                    "time_t": 1468184400,
                    "offset": 0,
                    "price": 150.319191722523
                }, {
                    "time_t": 1468270800,
                    "offset": 0,
                    "price": 150.46923406551966
                }, {
                    "time_t": 1468357200,
                    "offset": 0,
                    "price": 150.46923406551966
                }, {
                    "time_t": 1468530000,
                    "offset": 0,
                    "price": 150.46923406551966
                }, {
                    "time_t": 1468875600,
                    "offset": 0,
                    "price": 150.46923406551966
                }, {
                    "time_t": 1469048400,
                    "offset": 0,
                    "price": 150.39421289402142
                }, {
                    "time_t": 1469134800,
                    "offset": 0,
                    "price": 150.319191722523
                }, {
                    "time_t": 1469394000,
                    "offset": 0,
                    "price": 150.09412820802808
                }, {
                    "time_t": 1469480400,
                    "offset": 0,
                    "price": 149.64400117903807
                }, {
                    "time_t": 1469566800,
                    "offset": 0,
                    "price": 149.4939588360414
                }, {
                    "time_t": 1469653200,
                    "offset": 0,
                    "price": 149.2688953215465
                }, {
                    "time_t": 1469739600,
                    "offset": 0,
                    "price": 149.11885297854982
                }, {
                    "time_t": 1469998800,
                    "offset": 0,
                    "price": 148.96881063555315
                }],
                "zorder": -5,
                "ownerSource": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
            }, {
                "type": "LineToolBrush",
                "id": "b220bd31-235e-472c-a7f4-2cfa9f3fa3b6",
                "state": {
                    "clonable": true,
                    "linecolor": "#353535",
                    "linewidth": 2,
                    "linestyle": 0,
                    "smooth": 5,
                    "fillBackground": false,
                    "backgroundColor": "#153899",
                    "transparency": 50,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1468270800,
                    "offset": 0,
                    "price": 150.91936109450967
                }, {
                    "time_t": 1468270800,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1468357200,
                    "offset": 0,
                    "price": 151.4445092949979
                }, {
                    "time_t": 1468443600,
                    "offset": 0,
                    "price": 151.4445092949979
                }, {
                    "time_t": 1468357200,
                    "offset": 0,
                    "price": 151.74459398099125
                }, {
                    "time_t": 1468270800,
                    "offset": 0,
                    "price": 151.8196151524895
                }, {
                    "time_t": 1468184400,
                    "offset": 0,
                    "price": 151.89463632398792
                }, {
                    "time_t": 1467752400,
                    "offset": 0,
                    "price": 151.89463632398792
                }, {
                    "time_t": 1467838800,
                    "offset": 0,
                    "price": 151.96965749548616
                }, {
                    "time_t": 1467925200,
                    "offset": 0,
                    "price": 151.96965749548616
                }, {
                    "time_t": 1468270800,
                    "offset": 0,
                    "price": 151.89463632398792
                }, {
                    "time_t": 1468357200,
                    "offset": 0,
                    "price": 151.74459398099125
                }, {
                    "time_t": 1468443600,
                    "offset": 0,
                    "price": 151.59455163799458
                }, {
                    "time_t": 1468530000,
                    "offset": 0,
                    "price": 151.4445092949979
                }, {
                    "time_t": 1468530000,
                    "offset": 0,
                    "price": 151.29446695200124
                }, {
                    "time_t": 1468789200,
                    "offset": 0,
                    "price": 151.14442460900457
                }, {
                    "time_t": 1468875600,
                    "offset": 0,
                    "price": 151.14442460900457
                }, {
                    "time_t": 1468962000,
                    "offset": 0,
                    "price": 151.06940343750634
                }, {
                    "time_t": 1469048400,
                    "offset": 0,
                    "price": 150.91936109450967
                }, {
                    "time_t": 1469134800,
                    "offset": 0,
                    "price": 150.769318751513
                }, {
                    "time_t": 1469394000,
                    "offset": 0,
                    "price": 150.69429758001456
                }, {
                    "time_t": 1469480400,
                    "offset": 0,
                    "price": 150.61927640851633
                }, {
                    "time_t": 1469566800,
                    "offset": 0,
                    "price": 150.46923406551966
                }, {
                    "time_t": 1469739600,
                    "offset": 0,
                    "price": 150.24417055102475
                }, {
                    "time_t": 1469998800,
                    "offset": 0,
                    "price": 150.24417055102475
                }, {
                    "time_t": 1470085200,
                    "offset": 0,
                    "price": 150.24417055102475
                }, {
                    "time_t": 1470171600,
                    "offset": 0,
                    "price": 150.24417055102475
                }, {
                    "time_t": 1470258000,
                    "offset": 0,
                    "price": 150.24417055102475
                }, {
                    "time_t": 1470603600,
                    "offset": 0,
                    "price": 150.24417055102475
                }, {
                    "time_t": 1470776400,
                    "offset": 0,
                    "price": 150.319191722523
                }, {
                    "time_t": 1470862800,
                    "offset": 0,
                    "price": 150.39421289402142
                }, {
                    "time_t": 1471208400,
                    "offset": 0,
                    "price": 150.39421289402142
                }, {
                    "time_t": 1471294800,
                    "offset": 0,
                    "price": 150.5442552370181
                }, {
                    "time_t": 1471554000,
                    "offset": 0,
                    "price": 150.69429758001456
                }, {
                    "time_t": 1471813200,
                    "offset": 0,
                    "price": 150.769318751513
                }, {
                    "time_t": 1471899600,
                    "offset": 0,
                    "price": 150.84433992301123
                }, {
                    "time_t": 1472158800,
                    "offset": 0,
                    "price": 151.06940343750634
                }, {
                    "time_t": 1472504400,
                    "offset": 0,
                    "price": 151.219445780503
                }, {
                    "time_t": 1472590800,
                    "offset": 0,
                    "price": 151.29446695200124
                }, {
                    "time_t": 1472763600,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1473022800,
                    "offset": 0,
                    "price": 151.51953046649635
                }, {
                    "time_t": 1473195600,
                    "offset": 0,
                    "price": 151.59455163799458
                }, {
                    "time_t": 1473282000,
                    "offset": 0,
                    "price": 151.66957280949282
                }, {
                    "time_t": 1473368400,
                    "offset": 0,
                    "price": 151.66957280949282
                }, {
                    "time_t": 1473886800,
                    "offset": 0,
                    "price": 151.89463632398792
                }, {
                    "time_t": 1474318800,
                    "offset": 0,
                    "price": 152.11969983848283
                }, {
                    "time_t": 1474491600,
                    "offset": 0,
                    "price": 152.2697421814795
                }, {
                    "time_t": 1474578000,
                    "offset": 0,
                    "price": 152.41978452447617
                }, {
                    "time_t": 1474923600,
                    "offset": 0,
                    "price": 152.7198692104695
                }, {
                    "time_t": 1475096400,
                    "offset": 0,
                    "price": 152.86991155346618
                }, {
                    "time_t": 1475442000,
                    "offset": 0,
                    "price": 153.01995389646285
                }, {
                    "time_t": 1475614800,
                    "offset": 0,
                    "price": 153.16999623945952
                }, {
                    "time_t": 1475701200,
                    "offset": 0,
                    "price": 153.39505975395443
                }, {
                    "time_t": 1476133200,
                    "offset": 0,
                    "price": 153.62012326844933
                }, {
                    "time_t": 1476392400,
                    "offset": 0,
                    "price": 153.84518678294444
                }, {
                    "time_t": 1476738000,
                    "offset": 0,
                    "price": 153.92020795444267
                }, {
                    "time_t": 1477256400,
                    "offset": 0,
                    "price": 154.220292640436
                }, {
                    "time_t": 1477515600,
                    "offset": 0,
                    "price": 154.29531381193425
                }, {
                    "time_t": 1478034000,
                    "offset": 0,
                    "price": 154.5953984979276
                }, {
                    "time_t": 1478638800,
                    "offset": 0,
                    "price": 154.89548318392093
                }, {
                    "time_t": 1478811600,
                    "offset": 0,
                    "price": 155.12054669841584
                }, {
                    "time_t": 1479243600,
                    "offset": 0,
                    "price": 155.2705890414125
                }, {
                    "time_t": 1479675600,
                    "offset": 0,
                    "price": 155.4956525559076
                }, {
                    "time_t": 1480280400,
                    "offset": 0,
                    "price": 155.64569489890428
                }, {
                    "time_t": 1480539600,
                    "offset": 0,
                    "price": 155.72071607040252
                }, {
                    "time_t": 1481058000,
                    "offset": 0,
                    "price": 155.79573724190095
                }, {
                    "time_t": 1481490000,
                    "offset": 0,
                    "price": 155.79573724190095
                }, {
                    "time_t": 1481835600,
                    "offset": 0,
                    "price": 155.94577958489742
                }, {
                    "time_t": 1482440400,
                    "offset": 0,
                    "price": 155.94577958489742
                }, {
                    "time_t": 1482958800,
                    "offset": 0,
                    "price": 155.94577958489742
                }, {
                    "time_t": 1483390800,
                    "offset": 2,
                    "price": 155.79573724190095
                }, {
                    "time_t": 1483390800,
                    "offset": 5,
                    "price": 155.79573724190095
                }, {
                    "time_t": 1483390800,
                    "offset": 9,
                    "price": 155.72071607040252
                }, {
                    "time_t": 1483390800,
                    "offset": 13,
                    "price": 155.4956525559076
                }, {
                    "time_t": 1483390800,
                    "offset": 15,
                    "price": 155.34561021291094
                }, {
                    "time_t": 1483390800,
                    "offset": 16,
                    "price": 155.19556786991427
                }, {
                    "time_t": 1483390800,
                    "offset": 19,
                    "price": 154.97050435541917
                }, {
                    "time_t": 1483390800,
                    "offset": 22,
                    "price": 154.8204620124227
                }, {
                    "time_t": 1483390800,
                    "offset": 22,
                    "price": 154.67041966942602
                }, {
                    "time_t": 1483390800,
                    "offset": 23,
                    "price": 154.5953984979276
                }, {
                    "time_t": 1483390800,
                    "offset": 25,
                    "price": 154.44535615493092
                }, {
                    "time_t": 1483390800,
                    "offset": 26,
                    "price": 154.44535615493092
                }, {
                    "time_t": 1483390800,
                    "offset": 26,
                    "price": 154.29531381193425
                }, {
                    "time_t": 1483390800,
                    "offset": 27,
                    "price": 154.29531381193425
                }, {
                    "time_t": 1483390800,
                    "offset": 28,
                    "price": 154.14527146893778
                }, {
                    "time_t": 1483390800,
                    "offset": 28,
                    "price": 153.92020795444267
                }, {
                    "time_t": 1483390800,
                    "offset": 28,
                    "price": 153.770165611446
                }, {
                    "time_t": 1483390800,
                    "offset": 28,
                    "price": 153.62012326844933
                }, {
                    "time_t": 1483390800,
                    "offset": 28,
                    "price": 153.47008092545266
                }],
                "zorder": -6,
                "ownerSource": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
            }, {
                "type": "LineToolBrush",
                "id": "6eabf797-a01d-462d-aa3f-06b602790f6d",
                "state": {
                    "clonable": true,
                    "linecolor": "#353535",
                    "linewidth": 2,
                    "linestyle": 0,
                    "smooth": 5,
                    "fillBackground": false,
                    "backgroundColor": "#153899",
                    "transparency": 50,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1483390800,
                    "offset": 27,
                    "price": 153.47008092545266
                }, {
                    "time_t": 1483390800,
                    "offset": 23,
                    "price": 152.79489038196775
                }, {
                    "time_t": 1483390800,
                    "offset": 20,
                    "price": 152.56982686747284
                }, {
                    "time_t": 1483390800,
                    "offset": 15,
                    "price": 152.34476335297794
                }, {
                    "time_t": 1483390800,
                    "offset": 12,
                    "price": 152.11969983848283
                }, {
                    "time_t": 1483390800,
                    "offset": 9,
                    "price": 152.0446786669846
                }, {
                    "time_t": 1483390800,
                    "offset": 7,
                    "price": 151.89463632398792
                }, {
                    "time_t": 1483390800,
                    "offset": 4,
                    "price": 151.74459398099125
                }, {
                    "time_t": 1483390800,
                    "offset": 1,
                    "price": 151.66957280949282
                }, {
                    "time_t": 1483045200,
                    "offset": 0,
                    "price": 151.66957280949282
                }, {
                    "time_t": 1482786000,
                    "offset": 0,
                    "price": 151.59455163799458
                }, {
                    "time_t": 1482267600,
                    "offset": 0,
                    "price": 151.51953046649635
                }, {
                    "time_t": 1481749200,
                    "offset": 0,
                    "price": 151.4445092949979
                }, {
                    "time_t": 1481144400,
                    "offset": 0,
                    "price": 151.4445092949979
                }, {
                    "time_t": 1480885200,
                    "offset": 0,
                    "price": 151.4445092949979
                }, {
                    "time_t": 1480366800,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1479934800,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1479675600,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1479330000,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1479157200,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1479070800,
                    "offset": 0,
                    "price": 151.36948812349968
                }, {
                    "time_t": 1478811600,
                    "offset": 0,
                    "price": 151.36948812349968
                }],
                "zorder": -7,
                "ownerSource": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
            }, {
                "type": "LineToolBrush",
                "id": "234fd494-f46d-42bc-901c-1561ee02e909",
                "state": {
                    "clonable": true,
                    "linecolor": "#353535",
                    "linewidth": 2,
                    "linestyle": 0,
                    "smooth": 5,
                    "fillBackground": false,
                    "backgroundColor": "#153899",
                    "transparency": 50,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1483390800,
                    "offset": 13,
                    "price": 153.84518678294444
                }, {
                    "time_t": 1483390800,
                    "offset": 15,
                    "price": 153.39505975395443
                }, {
                    "time_t": 1483390800,
                    "offset": 15,
                    "price": 153.24501741095776
                }, {
                    "time_t": 1483390800,
                    "offset": 16,
                    "price": 153.24501741095776
                }, {
                    "time_t": 1483390800,
                    "offset": 16,
                    "price": 153.47008092545266
                }, {
                    "time_t": 1483390800,
                    "offset": 17,
                    "price": 153.92020795444267
                }, {
                    "time_t": 1483390800,
                    "offset": 17,
                    "price": 154.14527146893778
                }, {
                    "time_t": 1483390800,
                    "offset": 17,
                    "price": 154.44535615493092
                }, {
                    "time_t": 1483390800,
                    "offset": 16,
                    "price": 154.5953984979276
                }, {
                    "time_t": 1483390800,
                    "offset": 15,
                    "price": 154.74544084092426
                }, {
                    "time_t": 1483390800,
                    "offset": 14,
                    "price": 154.74544084092426
                }, {
                    "time_t": 1483390800,
                    "offset": 13,
                    "price": 154.67041966942602
                }, {
                    "time_t": 1483390800,
                    "offset": 13,
                    "price": 154.29531381193425
                }, {
                    "time_t": 1483390800,
                    "offset": 13,
                    "price": 153.9952291259411
                }, {
                    "time_t": 1483390800,
                    "offset": 13,
                    "price": 153.770165611446
                }, {
                    "time_t": 1483390800,
                    "offset": 14,
                    "price": 153.5451020969511
                }],
                "zorder": -8,
                "ownerSource": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
            }, {
                "type": "LineToolBrush",
                "id": "2e3946a5-f259-4e85-b0c7-55989c2e095b",
                "state": {
                    "clonable": true,
                    "linecolor": "#353535",
                    "linewidth": 2,
                    "linestyle": 0,
                    "smooth": 5,
                    "fillBackground": false,
                    "backgroundColor": "#153899",
                    "transparency": 50,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1483390800,
                    "offset": 1,
                    "price": 146.86821783359997
                }, {
                    "time_t": 1482440400,
                    "offset": 0,
                    "price": 146.2680484616135
                }, {
                    "time_t": 1480626000,
                    "offset": 0,
                    "price": 146.2680484616135
                }, {
                    "time_t": 1479934800,
                    "offset": 0,
                    "price": 146.41809080460996
                }, {
                    "time_t": 1479243600,
                    "offset": 0,
                    "price": 146.9432390050984
                }, {
                    "time_t": 1478466000,
                    "offset": 0,
                    "price": 147.24332369109175
                }, {
                    "time_t": 1478034000,
                    "offset": 0,
                    "price": 147.31834486258998
                }, {
                    "time_t": 1477947600,
                    "offset": 0,
                    "price": 147.31834486258998
                }],
                "zorder": -9,
                "ownerSource": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
            }, {
                "type": "LineToolBrush",
                "id": "de4477a1-7671-4eb2-9bf0-5d6009c0981d",
                "state": {
                    "clonable": true,
                    "linecolor": "#353535",
                    "linewidth": 2,
                    "linestyle": 0,
                    "smooth": 5,
                    "fillBackground": false,
                    "backgroundColor": "#153899",
                    "transparency": 50,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1483390800,
                    "offset": 0,
                    "price": 145.81792143262348
                }, {
                    "time_t": 1481576400,
                    "offset": 0,
                    "price": 145.14273088913856
                }, {
                    "time_t": 1480626000,
                    "offset": 0,
                    "price": 144.91766737464346
                }, {
                    "time_t": 1479848400,
                    "offset": 0,
                    "price": 144.9926885461419
                }, {
                    "time_t": 1479157200,
                    "offset": 0,
                    "price": 145.29277323213523
                }, {
                    "time_t": 1478552400,
                    "offset": 0,
                    "price": 145.4428155751317
                }, {
                    "time_t": 1477947600,
                    "offset": 0,
                    "price": 145.81792143262348
                }, {
                    "time_t": 1477256400,
                    "offset": 0,
                    "price": 146.7181754906033
                }, {
                    "time_t": 1476219600,
                    "offset": 0,
                    "price": 147.5434083770849
                }, {
                    "time_t": 1475614800,
                    "offset": 0,
                    "price": 147.91851423457666
                }, {
                    "time_t": 1475528400,
                    "offset": 0,
                    "price": 147.9935354060749
                }],
                "zorder": -10,
                "ownerSource": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
            }, {
                "type": "LineToolBrush",
                "id": "28341f8b-f15d-4d3c-a6b8-38774ccac3b4",
                "state": {
                    "clonable": true,
                    "linecolor": "#353535",
                    "linewidth": 2,
                    "linestyle": 0,
                    "smooth": 5,
                    "fillBackground": false,
                    "backgroundColor": "#153899",
                    "transparency": 50,
                    "frozen": false,
                    "visible": true,
                    "symbol": "NasdaqNM:AAPL",
                    "symbolInfo": {
                        "listed_exchange": {},
                        "short_name": "AAPL"
                    },
                    "interval": "D"
                },
                "points": [{
                    "time_t": 1483390800,
                    "offset": 0,
                    "price": 148.06855657757313
                }, {
                    "time_t": 1482267600,
                    "offset": 0,
                    "price": 147.69345072008156
                }, {
                    "time_t": 1481749200,
                    "offset": 0,
                    "price": 147.69345072008156
                }, {
                    "time_t": 1481230800,
                    "offset": 0,
                    "price": 147.69345072008156
                }, {
                    "time_t": 1480885200,
                    "offset": 0,
                    "price": 147.69345072008156
                }, {
                    "time_t": 1480453200,
                    "offset": 0,
                    "price": 147.84349306307823
                }, {
                    "time_t": 1480280400,
                    "offset": 0,
                    "price": 147.84349306307823
                }, {
                    "time_t": 1480021200,
                    "offset": 0,
                    "price": 147.91851423457666
                }, {
                    "time_t": 1479934800,
                    "offset": 0,
                    "price": 147.91851423457666
                }, {
                    "time_t": 1479848400,
                    "offset": 0,
                    "price": 147.9935354060749
                }],
                "zorder": -11,
                "ownerSource": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
            }],
            "leftAxisState": {
                "m_priceRange": {
                    "m_minValue": -0.5,
                    "m_maxValue": 0.5
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 724,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "leftAxisSources": [],
            "rightAxisState": {
                "m_priceRange": {
                    "m_minValue": 10.745705285527201,
                    "m_maxValue": 17.718387310785946
                },
                "m_isAutoScale": true,
                "m_isPercentage": false,
                "m_isLog": false,
                "m_height": 724,
                "m_topMargin": 0.05,
                "m_bottomMargin": 0.05,
                "m_showSymbolLabels": false
            },
            "rightAxisSources": ["a53ffe99-d8dd-44e5-9dd2-0ad4712018dd",
                "00dfe526-bc98-447f-af9a-6c1b020ab97c", "67661ca9-874f-46fe-bf04-f9a8a0de28c2",
                "2a3a1752-1ccc-44df-ac81-7c0ab08e9b7f", "b220bd31-235e-472c-a7f4-2cfa9f3fa3b6",
                "6eabf797-a01d-462d-aa3f-06b602790f6d", "234fd494-f46d-42bc-901c-1561ee02e909",
                "2e3946a5-f259-4e85-b0c7-55989c2e095b", "de4477a1-7671-4eb2-9bf0-5d6009c0981d",
                "28341f8b-f15d-4d3c-a6b8-38774ccac3b4"],
            "overlayPriceScales": {
                "49e81c50-29a7-412c-af84-29ffaa9a2d0b": {
                    "m_priceRange": {
                        "m_minValue": 0,
                        "m_maxValue": 54283500
                    },
                    "m_isAutoScale": true,
                    "m_isPercentage": false,
                    "m_isLog": false,
                    "m_height": 724,
                    "m_topMargin": 0.75,
                    "m_bottomMargin": 0,
                    "m_showSymbolLabels": false
                }
            },
            "stretchFactor": 2000,
            "mainSourceId": "a53ffe99-d8dd-44e5-9dd2-0ad4712018dd"
        }],
        "timeScale": {
            "m_barSpacing": 6,
            "m_rightOffset": 54
        },
        "chartProperties": {
            "paneProperties": {
                "background": "#ffffff",
                "gridProperties": {
                    "color": "#E6E6E6",
                    "style": 0
                },
                "crossHairProperties": {
                    "color": "#B7B7B7",
                    "style": 2,
                    "transparency": 0,
                    "width": 1
                },
                "topMargin": 5,
                "bottomMargin": 5,
                "leftAxisProperties": {
                    "autoScale": true,
                    "autoScaleDisabled": false,
                    "percentage": false,
                    "percentageDisabled": false,
                    "log": false,
                    "logDisabled": false,
                    "showSymbolLabels": false
                },
                "rightAxisProperties": {
                    "autoScale": true,
                    "autoScaleDisabled": false,
                    "percentage": false,
                    "percentageDisabled": false,
                    "log": false,
                    "logDisabled": false,
                    "showSymbolLabels": false
                },
                "overlayPropreties": {
                    "autoScale": true,
                    "autoScaleDisabled": false,
                    "percentage": false,
                    "percentageDisabled": false,
                    "log": false,
                    "logDisabled": false,
                    "showSymbolLabels": false
                }
            },
            "scalesProperties": {
                "showLeftScale": false,
                "showRightScale": true,
                "backgroundColor": "#ffffff",
                "lineColor": "#555",
                "textColor": "#555",
                "scaleSeriesOnly": false
            }
        },
        "version": 2,
        "timezone": "UTC"
    }]
};