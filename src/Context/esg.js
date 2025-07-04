import React, { createContext, useMemo } from "react";

const ESGData = createContext(null);

export const ESGContext = ({ children }) => {
    const [industry, setIndustry] = React.useState("All");

    const value = useMemo(() => {
        return [
            {
                "Company ID": "C001",
                "Company Name": "NovaTech Ltd.",
                "Industry": "Technology",
                "Environmental Score": 78,
                "Social Score": 85,
                "Governance Score": 80,
                "ESG Composite Score": 81,
                "ESG Composite Score (Prev. Year)": 66,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 52.7,
                    "Energy Usage (GW)": 4.7,
                    "Energy Efficiency": 62,
                    "Water Usage (Tonnes)": 5,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.36
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C002",
                "Company Name": "GreenFoods Inc.",
                "Industry": "Food & Beverage",
                "Environmental Score": 92,
                "Social Score": 76,
                "Governance Score": 70,
                "ESG Composite Score": 79.3,
                "ESG Composite Score (Prev. Year)": 53,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 33.4,
                    "Energy Usage (GW)": 6.4,
                    "Energy Efficiency": 88,
                    "Water Usage (Tonnes)": 9,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.8
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C003",
                "Company Name": "PowerGrid Corp.",
                "Industry": "Energy",
                "Environmental Score": 65,
                "Social Score": 60,
                "Governance Score": 72,
                "ESG Composite Score": 65.7,
                "ESG Composite Score (Prev. Year)": 73,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 90.08,
                    "Energy Usage (GW)": 3.4,
                    "Energy Efficiency": 73,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.6
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C004",
                "Company Name": "CleanAir Systems",
                "Industry": "Industrials",
                "Environmental Score": 88,
                "Social Score": 83,
                "Governance Score": 79,
                "ESG Composite Score": 83.3,
                "ESG Composite Score (Prev. Year)": 87,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 80.4,
                    "Energy Usage (GW)": 3.7,
                    "Energy Efficiency": 81,
                    "Water Usage (Tonnes)": 6,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.46
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C005",
                "Company Name": "FutureBank",
                "Industry": "Financials",
                "Environmental Score": 55,
                "Social Score": 80,
                "Governance Score": 90,
                "ESG Composite Score": 75,
                "ESG Composite Score (Prev. Year)": 44,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 26.5,
                    "Energy Usage (GW)": 2.5,
                    "Energy Efficiency": 73,
                    "Water Usage (Tonnes)": 8,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.89
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C006",
                "Company Name": "HealthPlus",
                "Industry": "Healthcare",
                "Environmental Score": 60,
                "Social Score": 88,
                "Governance Score": 85,
                "ESG Composite Score": 77.7,
                "ESG Composite Score (Prev. Year)": 78,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 31.9,
                    "Energy Usage (GW)": 3.1,
                    "Energy Efficiency": 76,
                    "Water Usage (Tonnes)": 9,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.48
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C007",
                "Company Name": "EcoBuilders Co.",
                "Industry": "Construction",
                "Environmental Score": 81,
                "Social Score": 70,
                "Governance Score": 65,
                "ESG Composite Score": 72,
                "ESG Composite Score (Prev. Year)": 67,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 33.7,
                    "Energy Usage (GW)": 7.2,
                    "Energy Efficiency": 86,
                    "Water Usage (Tonnes)": 9,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.55
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C008",
                "Company Name": "JetStream Air",
                "Industry": "Airlines",
                "Environmental Score": 48,
                "Social Score": 60,
                "Governance Score": 55,
                "ESG Composite Score": 54.3,
                "ESG Composite Score (Prev. Year)": 62,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 54.9,
                    "Energy Usage (GW)": 5.8,
                    "Energy Efficiency": 67,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.47
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C009",
                "Company Name": "SmartRetail Ltd.",
                "Industry": "Retail",
                "Environmental Score": 70,
                "Social Score": 72,
                "Governance Score": 74,
                "ESG Composite Score": 72,
                "ESG Composite Score (Prev. Year)": 77,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 22.7,
                    "Energy Usage (GW)": 3.6,
                    "Energy Efficiency": 70,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.71
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C010",
                "Company Name": "AgroGrowers",
                "Industry": "Agriculture",
                "Environmental Score": 85,
                "Social Score": 68,
                "Governance Score": 60,
                "ESG Composite Score": 71,
                "ESG Composite Score (Prev. Year)": 70,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 95.4,
                    "Energy Usage (GW)": 2.6,
                    "Energy Efficiency": 63,
                    "Water Usage (Tonnes)": 6,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.82
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C011",
                "Company Name": "GreenTech Solutions",
                "Industry": "Renewable Energy",
                "Environmental Score": 88,
                "Social Score": 75,
                "Governance Score": 80,
                "ESG Composite Score": 81,
                "ESG Composite Score (Prev. Year)": 89,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 63.2,
                    "Energy Usage (GW)": 5.8,
                    "Energy Efficiency": 71,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.64
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C012",
                "Company Name": "FutureFoods Inc.",
                "Industry": "Food & Beverage",
                "Environmental Score": 72,
                "Social Score": 85,
                "Governance Score": 78,
                "ESG Composite Score": 78,
                "ESG Composite Score (Prev. Year)": 71,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 79.9,
                    "Energy Usage (GW)": 3.5,
                    "Energy Efficiency": 90,
                    "Water Usage (Tonnes)": 6,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.33
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C013",
                "Company Name": "UrbanSolar Energy",
                "Industry": "Energy Utilities",
                "Environmental Score": 90,
                "Social Score": 70,
                "Governance Score": 65,
                "ESG Composite Score": 75,
                "ESG Composite Score (Prev. Year)": 69,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 34.8,
                    "Energy Usage (GW)": 3.1,
                    "Energy Efficiency": 76,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.25
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C014",
                "Company Name": "CloudCore Technologies",
                "Industry": "Information Technology",
                "Environmental Score": 60,
                "Social Score": 82,
                "Governance Score": 90,
                "ESG Composite Score": 77,
                "ESG Composite Score (Prev. Year)": 80,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 71.5,
                    "Energy Usage (GW)": 5.2,
                    "Energy Efficiency": 85,
                    "Water Usage (Tonnes)": 9,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.42
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C015",
                "Company Name": "MedicoHealth Ltd.",
                "Industry": "Healthcare",
                "Environmental Score": 65,
                "Social Score": 88,
                "Governance Score": 80,
                "ESG Composite Score": 78,
                "ESG Composite Score (Prev. Year)": 73,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 90.4,
                    "Energy Usage (GW)": 7.5,
                    "Energy Efficiency": 54,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.73
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C016",
                "Company Name": "Riverbank Financial",
                "Industry": "Financial Services",
                "Environmental Score": 50,
                "Social Score": 65,
                "Governance Score": 92,
                "ESG Composite Score": 69,
                "ESG Composite Score (Prev. Year)": 82,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 66.6,
                    "Energy Usage (GW)": 4.21,
                    "Energy Efficiency": 75,
                    "Water Usage (Tonnes)": 10,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.19
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C017",
                "Company Name": "EcoChain Logistics",
                "Industry": "Logistics & Transport",
                "Environmental Score": 75,
                "Social Score": 72,
                "Governance Score": 70,
                "ESG Composite Score": 72,
                "ESG Composite Score (Prev. Year)": 65,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 83.3,
                    "Energy Usage (GW)": 6.23,
                    "Energy Efficiency": 73,
                    "Water Usage (Tonnes)": 4,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.62
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C018",
                "Company Name": "NovaPharm Industries",
                "Industry": "Pharmaceuticals",
                "Environmental Score": 68,
                "Social Score": 80,
                "Governance Score": 76,
                "ESG Composite Score": 75,
                "ESG Composite Score (Prev. Year)": 60,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 57.5,
                    "Energy Usage (GW)": 8.3,
                    "Energy Efficiency": 82,
                    "Water Usage (Tonnes)": 9,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.55
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C019",
                "Company Name": "SustainWell Apparel",
                "Industry": "Textiles & Apparel",
                "Environmental Score": 82,
                "Social Score": 78,
                "Governance Score": 74,
                "ESG Composite Score": 78,
                "ESG Composite Score (Prev. Year)": 70,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 77.9,
                    "Energy Usage (GW)": 5.3,
                    "Energy Efficiency": 98,
                    "Water Usage (Tonnes)": 2,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.73
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C020",
                "Company Name": "ClearWaters Bottling",
                "Industry": "Consumer Goods",
                "Environmental Score": 84,
                "Social Score": 65,
                "Governance Score": 68,
                "ESG Composite Score": 72,
                "ESG Composite Score (Prev. Year)": 75,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 29.2,
                    "Energy Usage (GW)": 7.1,
                    "Energy Efficiency": 80,
                    "Water Usage (Tonnes)": 3,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.91
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C021",
                "Company Name": "AutoMotion EV",
                "Industry": "Automotive",
                "Environmental Score": 87,
                "Social Score": 73,
                "Governance Score": 60,
                "ESG Composite Score": 73,
                "ESG Composite Score (Prev. Year)": 79,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 33.7,
                    "Energy Usage (GW)": 6.3,
                    "Energy Efficiency": 98,
                    "Water Usage (Tonnes)": 10,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.62
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C022",
                "Company Name": "MetroBuild Construction",
                "Industry": "Construction",
                "Environmental Score": 70,
                "Social Score": 60,
                "Governance Score": 62,
                "ESG Composite Score": 64,
                "ESG Composite Score (Prev. Year)": 59,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 35.2,
                    "Energy Usage (GW)": 6.1,
                    "Energy Efficiency": 91,
                    "Water Usage (Tonnes)": 8,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.59
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C023",
                "Company Name": "AgroFuture Foods",
                "Industry": "Agriculture",
                "Environmental Score": 75,
                "Social Score": 77,
                "Governance Score": 70,
                "ESG Composite Score": 74,
                "ESG Composite Score (Prev. Year)": 65,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 44.1,
                    "Energy Usage (GW)": 7.2,
                    "Energy Efficiency": 98,
                    "Water Usage (Tonnes)": 9,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.9
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C024",
                "Company Name": "BrightPath Education",
                "Industry": "Education",
                "Environmental Score": 55,
                "Social Score": 90,
                "Governance Score": 75,
                "ESG Composite Score": 73,
                "ESG Composite Score (Prev. Year)": 68,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 31.8,
                    "Energy Usage (GW)": 4.2,
                    "Energy Efficiency": 64,
                    "Water Usage (Tonnes)": 6,
                    "Water Conservation": "No",
                    "Pollution Index (Out of 1)": 0.82
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "Yes"
                },
                "Governance": {
                    "Board Diversity": "Yes",
                    "Perfomance Based Compenation": "Yes",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C025",
                "Company Name": "TerraByte Semiconductors",
                "Industry": "Semiconductors",
                "Environmental Score": 66,
                "Social Score": 70,
                "Governance Score": 85,
                "ESG Composite Score": 74,
                "ESG Composite Score (Prev. Year)": 77,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 18.9,
                    "Energy Usage (GW)": 8.1,
                    "Energy Efficiency": 90,
                    "Water Usage (Tonnes)": 2,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.19
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C026",
                "Company Name": "BioHarvest Labs",
                "Industry": "Biotechnology",
                "Environmental Score": 80,
                "Social Score": 72,
                "Governance Score": 69,
                "ESG Composite Score": 74,
                "ESG Composite Score (Prev. Year)": 82,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 32.7,
                    "Energy Usage (GW)": 7.9,
                    "Energy Efficiency": 72,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.32
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "No",
                    "Regulatory Compliance": "No"
                }
            },
            {
                "Company ID": "C027",
                "Company Name": "EthicaBank",
                "Industry": "Banking",
                "Environmental Score": 60,
                "Social Score": 80,
                "Governance Score": 88,
                "ESG Composite Score": 76,
                "ESG Composite Score (Prev. Year)": 89,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 33.7,
                    "Energy Usage (GW)": 2.6,
                    "Energy Efficiency": 77,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.48
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C028",
                "Company Name": "Zenith Textiles",
                "Industry": "Manufacturing",
                "Environmental Score": 78,
                "Social Score": 75,
                "Governance Score": 60,
                "ESG Composite Score": 71,
                "ESG Composite Score (Prev. Year)": 78,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 52.8,
                    "Energy Usage (GW)": 7.9,
                    "Energy Efficiency": 83,
                    "Water Usage (Tonnes)": 1,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.52
                },
                "Social": {
                    "Diversity": "No",
                    "Data Privacy": "No",
                    "Supply Chain Responsibility": "No",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C029",
                "Company Name": "CleanRide Transport",
                "Industry": "Transportation",
                "Environmental Score": 85,
                "Social Score": 70,
                "Governance Score": 65,
                "ESG Composite Score": 73,
                "ESG Composite Score (Prev. Year)": 86,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 36.1,
                    "Energy Usage (GW)": 5.1,
                    "Energy Efficiency": 68,
                    "Water Usage (Tonnes)": 9,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.73
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            },
            {
                "Company ID": "C030",
                "Company Name": "SmartGrid Systems",
                "Industry": "Electrical Equipment",
                "Environmental Score": 82,
                "Social Score": 68,
                "Governance Score": 80,
                "ESG Composite Score": 77,
                "ESG Composite Score (Prev. Year)": 88,
                "Environment": {
                    "Carbon Emissions (Tonnes)": 29.9,
                    "Energy Usage (GW)": 2.6,
                    "Energy Efficiency": 77,
                    "Water Usage (Tonnes)": 4,
                    "Water Conservation": "Yes",
                    "Pollution Index (Out of 1)": 0.86
                },
                "Social": {
                    "Diversity": "Yes",
                    "Data Privacy": "Yes",
                    "Supply Chain Responsibility": "Yes",
                    "Community Engagement": "No"
                },
                "Governance": {
                    "Board Diversity": "No",
                    "Perfomance Based Compenation": "No",
                    "Transparency Score": "Yes",
                    "Regulatory Compliance": "Yes"
                }
            }
        ]
    }, [])

    const filteredData = useMemo(() => {
        if (industry === "All") {
            return value
        }
        return value.filter((it => it.Industry === industry))
    }, [industry, value])

    return <ESGData.Provider value={{ value, filteredData, setIndustry, industry }}>{children}</ESGData.Provider>;
};

export const withESGValue = Component => {
    return props => (
        <ESGContext {...props}>
            <Component />
        </ESGContext>
    );
};


export const useESGData = () => React.useContext(ESGData);