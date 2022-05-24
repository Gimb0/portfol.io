import React from 'react';
import Select, { components, createFilter } from 'react-select';
import { FixedSizeList as List } from "react-window";

const Placeholder = props => {
    return <components.Placeholder {...props} />;
};

class ShareSelect extends React.Component {

    state = {
            selectedOption: null,
            shares: [
                {
                    "value": "A",
                    "label": "A"
                },
                {
                    "value": "AA",
                    "label": "AA"
                },
                {
                    "value": "AAN",
                    "label": "AAN"
                },
                {
                    "value": "AAP",
                    "label": "AAP"
                },
                {
                    "value": "AAT",
                    "label": "AAT"
                },
                {
                    "value": "AB",
                    "label": "AB"
                },
                {
                    "value": "ABB",
                    "label": "ABB"
                },
                {
                    "value": "ABBV",
                    "label": "ABBV"
                },
                {
                    "value": "ABC",
                    "label": "ABC"
                },
                {
                    "value": "ABEV",
                    "label": "ABEV"
                },
                {
                    "value": "ABG",
                    "label": "ABG"
                },
                {
                    "value": "ABM",
                    "label": "ABM"
                },
                {
                    "value": "ABR",
                    "label": "ABR"
                },
                {
                    "value": "ABR-A",
                    "label": "ABR-A"
                },
                {
                    "value": "ABR-B",
                    "label": "ABR-B"
                },
                {
                    "value": "ABR-C",
                    "label": "ABR-C"
                },
                {
                    "value": "ABT",
                    "label": "ABT"
                },
                {
                    "value": "AC",
                    "label": "AC"
                },
                {
                    "value": "ACA",
                    "label": "ACA"
                },
                {
                    "value": "ACB",
                    "label": "ACB"
                },
                {
                    "value": "ACC",
                    "label": "ACC"
                },
                {
                    "value": "ACCO",
                    "label": "ACCO"
                },
                {
                    "value": "ACE.W",
                    "label": "ACE.W"
                },
                {
                    "value": "ACEL",
                    "label": "ACEL"
                },
                {
                    "value": "ACH",
                    "label": "ACH"
                },
                {
                    "value": "ACI",
                    "label": "ACI"
                },
                {
                    "value": "ACM",
                    "label": "ACM"
                },
                {
                    "value": "ACN",
                    "label": "ACN"
                },
                {
                    "value": "ACP",
                    "label": "ACP"
                },
                {
                    "value": "ACRE",
                    "label": "ACRE"
                },
                {
                    "value": "ACV",
                    "label": "ACV"
                },
                {
                    "value": "ADC",
                    "label": "ADC"
                },
                {
                    "value": "ADCT",
                    "label": "ADCT"
                },
                {
                    "value": "ADM",
                    "label": "ADM"
                },
                {
                    "value": "ADNT",
                    "label": "ADNT"
                },
                {
                    "value": "ADS",
                    "label": "ADS"
                },
                {
                    "value": "ADSW",
                    "label": "ADSW"
                },
                {
                    "value": "ADT",
                    "label": "ADT"
                },
                {
                    "value": "ADX",
                    "label": "ADX"
                },
                {
                    "value": "AEB",
                    "label": "AEB"
                },
                {
                    "value": "AEE",
                    "label": "AEE"
                },
                {
                    "value": "AEFC",
                    "label": "AEFC"
                },
                {
                    "value": "AEG",
                    "label": "AEG"
                },
                {
                    "value": "AEL",
                    "label": "AEL"
                },
                {
                    "value": "AEL-A",
                    "label": "AEL-A"
                },
                {
                    "value": "AEL-B",
                    "label": "AEL-B"
                },
                {
                    "value": "AEM",
                    "label": "AEM"
                },
                {
                    "value": "AEO",
                    "label": "AEO"
                },
                {
                    "value": "AEP",
                    "label": "AEP"
                },
                {
                    "value": "AEP-B",
                    "label": "AEP-B"
                },
                {
                    "value": "AER",
                    "label": "AER"
                },
                {
                    "value": "AES",
                    "label": "AES"
                },
                {
                    "value": "AFB",
                    "label": "AFB"
                },
                {
                    "value": "AFC",
                    "label": "AFC"
                },
                {
                    "value": "AFG",
                    "label": "AFG"
                },
                {
                    "value": "AFGB",
                    "label": "AFGB"
                },
                {
                    "value": "AFGC",
                    "label": "AFGC"
                },
                {
                    "value": "AFGD",
                    "label": "AFGD"
                },
                {
                    "value": "AFGH",
                    "label": "AFGH"
                },
                {
                    "value": "AFI",
                    "label": "AFI"
                },
                {
                    "value": "AFL",
                    "label": "AFL"
                },
                {
                    "value": "AFT",
                    "label": "AFT"
                },
                {
                    "value": "AG",
                    "label": "AG"
                },
                {
                    "value": "AGCO",
                    "label": "AGCO"
                },
                {
                    "value": "AGD",
                    "label": "AGD"
                },
                {
                    "value": "AGI",
                    "label": "AGI"
                },
                {
                    "value": "AGM",
                    "label": "AGM"
                },
                {
                    "value": "AGM-A",
                    "label": "AGM-A"
                },
                {
                    "value": "AGM-C",
                    "label": "AGM-C"
                },
                {
                    "value": "AGM-D",
                    "label": "AGM-D"
                },
                {
                    "value": "AGM-E",
                    "label": "AGM-E"
                },
                {
                    "value": "AGM.A",
                    "label": "AGM.A"
                },
                {
                    "value": "AGO",
                    "label": "AGO"
                },
                {
                    "value": "AGO-B",
                    "label": "AGO-B"
                },
                {
                    "value": "AGO-E",
                    "label": "AGO-E"
                },
                {
                    "value": "AGO-F",
                    "label": "AGO-F"
                },
                {
                    "value": "AGR",
                    "label": "AGR"
                },
                {
                    "value": "AGRO",
                    "label": "AGRO"
                },
                {
                    "value": "AGS",
                    "label": "AGS"
                },
                {
                    "value": "AGX",
                    "label": "AGX"
                },
                {
                    "value": "AHC",
                    "label": "AHC"
                },
                {
                    "value": "AHH",
                    "label": "AHH"
                },
                {
                    "value": "AHH-A",
                    "label": "AHH-A"
                },
                {
                    "value": "AHL-C",
                    "label": "AHL-C"
                },
                {
                    "value": "AHL-D",
                    "label": "AHL-D"
                },
                {
                    "value": "AHL-E",
                    "label": "AHL-E"
                },
                {
                    "value": "AHT",
                    "label": "AHT"
                },
                {
                    "value": "AHT-D",
                    "label": "AHT-D"
                },
                {
                    "value": "AHT-F",
                    "label": "AHT-F"
                },
                {
                    "value": "AHT-G",
                    "label": "AHT-G"
                },
                {
                    "value": "AHT-H",
                    "label": "AHT-H"
                },
                {
                    "value": "AHT-I",
                    "label": "AHT-I"
                },
                {
                    "value": "AI",
                    "label": "AI"
                },
                {
                    "value": "AI-B",
                    "label": "AI-B"
                },
                {
                    "value": "AI-C",
                    "label": "AI-C"
                },
                {
                    "value": "AIC",
                    "label": "AIC"
                },
                {
                    "value": "AIF",
                    "label": "AIF"
                },
                {
                    "value": "AIG",
                    "label": "AIG"
                },
                {
                    "value": "AIG-A",
                    "label": "AIG-A"
                },
                {
                    "value": "AIG.W",
                    "label": "AIG.W"
                },
                {
                    "value": "AIN",
                    "label": "AIN"
                },
                {
                    "value": "AIO",
                    "label": "AIO"
                },
                {
                    "value": "AIR",
                    "label": "AIR"
                },
                {
                    "value": "AIT",
                    "label": "AIT"
                },
                {
                    "value": "AIV",
                    "label": "AIV"
                },
                {
                    "value": "AIW",
                    "label": "AIW"
                },
                {
                    "value": "AIZ",
                    "label": "AIZ"
                },
                {
                    "value": "AIZP",
                    "label": "AIZP"
                },
                {
                    "value": "AJG",
                    "label": "AJG"
                },
                {
                    "value": "AJRD",
                    "label": "AJRD"
                },
                {
                    "value": "AJX",
                    "label": "AJX"
                },
                {
                    "value": "AJXA",
                    "label": "AJXA"
                },
                {
                    "value": "AKO.A",
                    "label": "AKO.A"
                },
                {
                    "value": "AKO.B",
                    "label": "AKO.B"
                },
                {
                    "value": "AKR",
                    "label": "AKR"
                },
                {
                    "value": "AL",
                    "label": "AL"
                },
                {
                    "value": "AL-A",
                    "label": "AL-A"
                },
                {
                    "value": "ALB",
                    "label": "ALB"
                },
                {
                    "value": "ALC",
                    "label": "ALC"
                },
                {
                    "value": "ALE",
                    "label": "ALE"
                },
                {
                    "value": "ALEX",
                    "label": "ALEX"
                },
                {
                    "value": "ALG",
                    "label": "ALG"
                },
                {
                    "value": "ALI-A",
                    "label": "ALI-A"
                },
                {
                    "value": "ALI-B",
                    "label": "ALI-B"
                },
                {
                    "value": "ALI-E",
                    "label": "ALI-E"
                },
                {
                    "value": "ALK",
                    "label": "ALK"
                },
                {
                    "value": "ALL",
                    "label": "ALL"
                },
                {
                    "value": "ALL-B",
                    "label": "ALL-B"
                },
                {
                    "value": "ALL-G",
                    "label": "ALL-G"
                },
                {
                    "value": "ALL-H",
                    "label": "ALL-H"
                },
                {
                    "value": "ALL-I",
                    "label": "ALL-I"
                },
                {
                    "value": "ALL-Y",
                    "label": "ALL-Y"
                },
                {
                    "value": "ALLE",
                    "label": "ALLE"
                },
                {
                    "value": "ALLY",
                    "label": "ALLY"
                },
                {
                    "value": "ALP-Q",
                    "label": "ALP-Q"
                },
                {
                    "value": "ALSN",
                    "label": "ALSN"
                },
                {
                    "value": "ALT.W",
                    "label": "ALT.W"
                },
                {
                    "value": "ALTG",
                    "label": "ALTG"
                },
                {
                    "value": "ALU.U",
                    "label": "ALU.U"
                },
                {
                    "value": "ALU.W",
                    "label": "ALU.W"
                },
                {
                    "value": "ALUS",
                    "label": "ALUS"
                },
                {
                    "value": "ALV",
                    "label": "ALV"
                },
                {
                    "value": "ALX",
                    "label": "ALX"
                },
                {
                    "value": "AM",
                    "label": "AM"
                },
                {
                    "value": "AMB.W",
                    "label": "AMB.W"
                },
                {
                    "value": "AMBC",
                    "label": "AMBC"
                },
                {
                    "value": "AMC",
                    "label": "AMC"
                },
                {
                    "value": "AMCR",
                    "label": "AMCR"
                },
                {
                    "value": "AME",
                    "label": "AME"
                },
                {
                    "value": "AMG",
                    "label": "AMG"
                },
                {
                    "value": "AMH",
                    "label": "AMH"
                },
                {
                    "value": "AMH-D",
                    "label": "AMH-D"
                },
                {
                    "value": "AMH-E",
                    "label": "AMH-E"
                },
                {
                    "value": "AMH-F",
                    "label": "AMH-F"
                },
                {
                    "value": "AMH-G",
                    "label": "AMH-G"
                },
                {
                    "value": "AMH-H",
                    "label": "AMH-H"
                },
                {
                    "value": "AMK",
                    "label": "AMK"
                },
                {
                    "value": "AMN",
                    "label": "AMN"
                },
                {
                    "value": "AMOV",
                    "label": "AMOV"
                },
                {
                    "value": "AMP",
                    "label": "AMP"
                },
                {
                    "value": "AMPY",
                    "label": "AMPY"
                },
                {
                    "value": "AMRC",
                    "label": "AMRC"
                },
                {
                    "value": "AMRX",
                    "label": "AMRX"
                },
                {
                    "value": "AMT",
                    "label": "AMT"
                },
                {
                    "value": "AMX",
                    "label": "AMX"
                },
                {
                    "value": "AN",
                    "label": "AN"
                },
                {
                    "value": "ANET",
                    "label": "ANET"
                },
                {
                    "value": "ANF",
                    "label": "ANF"
                },
                {
                    "value": "ANH",
                    "label": "ANH"
                },
                {
                    "value": "ANH-A",
                    "label": "ANH-A"
                },
                {
                    "value": "ANH-B",
                    "label": "ANH-B"
                },
                {
                    "value": "ANH-C",
                    "label": "ANH-C"
                },
                {
                    "value": "ANTM",
                    "label": "ANTM"
                },
                {
                    "value": "AOD",
                    "label": "AOD"
                },
                {
                    "value": "AON",
                    "label": "AON"
                },
                {
                    "value": "AOS",
                    "label": "AOS"
                },
                {
                    "value": "AP",
                    "label": "AP"
                },
                {
                    "value": "APA",
                    "label": "APA"
                },
                {
                    "value": "APAM",
                    "label": "APAM"
                },
                {
                    "value": "APD",
                    "label": "APD"
                },
                {
                    "value": "APG",
                    "label": "APG"
                },
                {
                    "value": "APH",
                    "label": "APH"
                },
                {
                    "value": "APHA",
                    "label": "APHA"
                },
                {
                    "value": "APLE",
                    "label": "APLE"
                },
                {
                    "value": "APO",
                    "label": "APO"
                },
                {
                    "value": "APO-A",
                    "label": "APO-A"
                },
                {
                    "value": "APO-B",
                    "label": "APO-B"
                },
                {
                    "value": "APRN",
                    "label": "APRN"
                },
                {
                    "value": "APT-A",
                    "label": "APT-A"
                },
                {
                    "value": "APTS",
                    "label": "APTS"
                },
                {
                    "value": "APTV",
                    "label": "APTV"
                },
                {
                    "value": "APY",
                    "label": "APY"
                },
                {
                    "value": "AQN",
                    "label": "AQN"
                },
                {
                    "value": "AQNA",
                    "label": "AQNA"
                },
                {
                    "value": "AQNB",
                    "label": "AQNB"
                },
                {
                    "value": "AQUA",
                    "label": "AQUA"
                },
                {
                    "value": "AR",
                    "label": "AR"
                },
                {
                    "value": "ARA",
                    "label": "ARA"
                },
                {
                    "value": "ARC",
                    "label": "ARC"
                },
                {
                    "value": "ARCH",
                    "label": "ARCH"
                },
                {
                    "value": "ARCO",
                    "label": "ARCO"
                },
                {
                    "value": "ARD",
                    "label": "ARD"
                },
                {
                    "value": "ARDC",
                    "label": "ARDC"
                },
                {
                    "value": "ARE",
                    "label": "ARE"
                },
                {
                    "value": "ARE-A",
                    "label": "ARE-A"
                },
                {
                    "value": "ARES",
                    "label": "ARES"
                },
                {
                    "value": "ARGD",
                    "label": "ARGD"
                },
                {
                    "value": "ARGO",
                    "label": "ARGO"
                },
                {
                    "value": "ARI",
                    "label": "ARI"
                },
                {
                    "value": "ARL",
                    "label": "ARL"
                },
                {
                    "value": "ARLO",
                    "label": "ARLO"
                },
                {
                    "value": "ARMK",
                    "label": "ARMK"
                },
                {
                    "value": "ARNC",
                    "label": "ARNC"
                },
                {
                    "value": "AROC",
                    "label": "AROC"
                },
                {
                    "value": "ARR",
                    "label": "ARR"
                },
                {
                    "value": "ARR-C",
                    "label": "ARR-C"
                },
                {
                    "value": "ARW",
                    "label": "ARW"
                },
                {
                    "value": "ASA",
                    "label": "ASA"
                },
                {
                    "value": "ASB",
                    "label": "ASB"
                },
                {
                    "value": "ASB-C",
                    "label": "ASB-C"
                },
                {
                    "value": "ASB-D",
                    "label": "ASB-D"
                },
                {
                    "value": "ASB-E",
                    "label": "ASB-E"
                },
                {
                    "value": "ASB-F",
                    "label": "ASB-F"
                },
                {
                    "value": "ASC",
                    "label": "ASC"
                },
                {
                    "value": "ASG",
                    "label": "ASG"
                },
                {
                    "value": "ASGN",
                    "label": "ASGN"
                },
                {
                    "value": "ASH",
                    "label": "ASH"
                },
                {
                    "value": "ASIX",
                    "label": "ASIX"
                },
                {
                    "value": "ASPN",
                    "label": "ASPN"
                },
                {
                    "value": "ASR",
                    "label": "ASR"
                },
                {
                    "value": "ASX",
                    "label": "ASX"
                },
                {
                    "value": "AT",
                    "label": "AT"
                },
                {
                    "value": "ATC-D",
                    "label": "ATC-D"
                },
                {
                    "value": "ATC-E",
                    "label": "ATC-E"
                },
                {
                    "value": "ATC-G",
                    "label": "ATC-G"
                },
                {
                    "value": "ATC-H",
                    "label": "ATC-H"
                },
                {
                    "value": "ATC-I",
                    "label": "ATC-I"
                },
                {
                    "value": "ATCO",
                    "label": "ATCO"
                },
                {
                    "value": "ATEN",
                    "label": "ATEN"
                },
                {
                    "value": "ATGE",
                    "label": "ATGE"
                },
                {
                    "value": "ATH",
                    "label": "ATH"
                },
                {
                    "value": "ATH-A",
                    "label": "ATH-A"
                },
                {
                    "value": "ATH-B",
                    "label": "ATH-B"
                },
                {
                    "value": "ATH-C",
                    "label": "ATH-C"
                },
                {
                    "value": "ATHM",
                    "label": "ATHM"
                },
                {
                    "value": "ATI",
                    "label": "ATI"
                },
                {
                    "value": "ATKR",
                    "label": "ATKR"
                },
                {
                    "value": "ATO",
                    "label": "ATO"
                },
                {
                    "value": "ATR",
                    "label": "ATR"
                },
                {
                    "value": "ATTO",
                    "label": "ATTO"
                },
                {
                    "value": "ATUS",
                    "label": "ATUS"
                },
                {
                    "value": "ATV",
                    "label": "ATV"
                },
                {
                    "value": "AU",
                    "label": "AU"
                },
                {
                    "value": "AUY",
                    "label": "AUY"
                },
                {
                    "value": "AVA",
                    "label": "AVA"
                },
                {
                    "value": "AVAL",
                    "label": "AVAL"
                },
                {
                    "value": "AVB",
                    "label": "AVB"
                },
                {
                    "value": "AVD",
                    "label": "AVD"
                },
                {
                    "value": "AVK",
                    "label": "AVK"
                },
                {
                    "value": "AVLR",
                    "label": "AVLR"
                },
                {
                    "value": "AVNS",
                    "label": "AVNS"
                },
                {
                    "value": "AVT-A",
                    "label": "AVT-A"
                },
                {
                    "value": "AVTR",
                    "label": "AVTR"
                },
                {
                    "value": "AVY",
                    "label": "AVY"
                },
                {
                    "value": "AVYA",
                    "label": "AVYA"
                },
                {
                    "value": "AWF",
                    "label": "AWF"
                },
                {
                    "value": "AWI",
                    "label": "AWI"
                },
                {
                    "value": "AWK",
                    "label": "AWK"
                },
                {
                    "value": "AWP",
                    "label": "AWP"
                },
                {
                    "value": "AWR",
                    "label": "AWR"
                },
                {
                    "value": "AX",
                    "label": "AX"
                },
                {
                    "value": "AXE",
                    "label": "AXE"
                },
                {
                    "value": "AXL",
                    "label": "AXL"
                },
                {
                    "value": "AXO",
                    "label": "AXO"
                },
                {
                    "value": "AXP",
                    "label": "AXP"
                },
                {
                    "value": "AXR",
                    "label": "AXR"
                },
                {
                    "value": "AXS",
                    "label": "AXS"
                },
                {
                    "value": "AXS-E",
                    "label": "AXS-E"
                },
                {
                    "value": "AXTA",
                    "label": "AXTA"
                },
                {
                    "value": "AYI",
                    "label": "AYI"
                },
                {
                    "value": "AYX",
                    "label": "AYX"
                },
                {
                    "value": "AZEK",
                    "label": "AZEK"
                },
                {
                    "value": "AZN",
                    "label": "AZN"
                },
                {
                    "value": "AZO",
                    "label": "AZO"
                },
                {
                    "value": "AZRE",
                    "label": "AZRE"
                },
                {
                    "value": "AZUL",
                    "label": "AZUL"
                },
                {
                    "value": "AZZ",
                    "label": "AZZ"
                },
                {
                    "value": "B",
                    "label": "B"
                },
                {
                    "value": "BA",
                    "label": "BA"
                },
                {
                    "value": "BABA",
                    "label": "BABA"
                },
                {
                    "value": "BAC",
                    "label": "BAC"
                },
                {
                    "value": "BAC-A",
                    "label": "BAC-A"
                },
                {
                    "value": "BAC-B",
                    "label": "BAC-B"
                },
                {
                    "value": "BAC-C",
                    "label": "BAC-C"
                },
                {
                    "value": "BAC-E",
                    "label": "BAC-E"
                },
                {
                    "value": "BAC-K",
                    "label": "BAC-K"
                },
                {
                    "value": "BAC-L",
                    "label": "BAC-L"
                },
                {
                    "value": "BAC-M",
                    "label": "BAC-M"
                },
                {
                    "value": "BAC-N",
                    "label": "BAC-N"
                },
                {
                    "value": "BAF",
                    "label": "BAF"
                },
                {
                    "value": "BAH",
                    "label": "BAH"
                },
                {
                    "value": "BAK",
                    "label": "BAK"
                },
                {
                    "value": "BAM",
                    "label": "BAM"
                },
                {
                    "value": "BAN-D",
                    "label": "BAN-D"
                },
                {
                    "value": "BAN-E",
                    "label": "BAN-E"
                },
                {
                    "value": "BANC",
                    "label": "BANC"
                },
                {
                    "value": "BAP",
                    "label": "BAP"
                },
                {
                    "value": "BAX",
                    "label": "BAX"
                },
                {
                    "value": "BB",
                    "label": "BB"
                },
                {
                    "value": "BBAR",
                    "label": "BBAR"
                },
                {
                    "value": "BBD",
                    "label": "BBD"
                },
                {
                    "value": "BBDC",
                    "label": "BBDC"
                },
                {
                    "value": "BBDO",
                    "label": "BBDO"
                },
                {
                    "value": "BBF",
                    "label": "BBF"
                },
                {
                    "value": "BBK",
                    "label": "BBK"
                },
                {
                    "value": "BBL",
                    "label": "BBL"
                },
                {
                    "value": "BBN",
                    "label": "BBN"
                },
                {
                    "value": "BBU",
                    "label": "BBU"
                },
                {
                    "value": "BBVA",
                    "label": "BBVA"
                },
                {
                    "value": "BBW",
                    "label": "BBW"
                },
                {
                    "value": "BBX",
                    "label": "BBX"
                },
                {
                    "value": "BBY",
                    "label": "BBY"
                },
                {
                    "value": "BC",
                    "label": "BC"
                },
                {
                    "value": "BC-A",
                    "label": "BC-A"
                },
                {
                    "value": "BC-B",
                    "label": "BC-B"
                },
                {
                    "value": "BC-C",
                    "label": "BC-C"
                },
                {
                    "value": "BCC",
                    "label": "BCC"
                },
                {
                    "value": "BCE",
                    "label": "BCE"
                },
                {
                    "value": "BCEI",
                    "label": "BCEI"
                },
                {
                    "value": "BCH",
                    "label": "BCH"
                },
                {
                    "value": "BCO",
                    "label": "BCO"
                },
                {
                    "value": "BCS",
                    "label": "BCS"
                },
                {
                    "value": "BCS.P",
                    "label": "BCS.P"
                },
                {
                    "value": "BCSF",
                    "label": "BCSF"
                },
                {
                    "value": "BCX",
                    "label": "BCX"
                },
                {
                    "value": "BDC",
                    "label": "BDC"
                },
                {
                    "value": "BDJ",
                    "label": "BDJ"
                },
                {
                    "value": "BDN",
                    "label": "BDN"
                },
                {
                    "value": "BDX",
                    "label": "BDX"
                },
                {
                    "value": "BDXB",
                    "label": "BDXB"
                },
                {
                    "value": "BE",
                    "label": "BE"
                },
                {
                    "value": "BEDU",
                    "label": "BEDU"
                },
                {
                    "value": "BEN",
                    "label": "BEN"
                },
                {
                    "value": "BEP",
                    "label": "BEP"
                },
                {
                    "value": "BEP-A",
                    "label": "BEP-A"
                },
                {
                    "value": "BERY",
                    "label": "BERY"
                },
                {
                    "value": "BEST",
                    "label": "BEST"
                },
                {
                    "value": "BF.A",
                    "label": "BF.A"
                },
                {
                    "value": "BF.B",
                    "label": "BF.B"
                },
                {
                    "value": "BFAM",
                    "label": "BFAM"
                },
                {
                    "value": "BFK",
                    "label": "BFK"
                },
                {
                    "value": "BFO",
                    "label": "BFO"
                },
                {
                    "value": "BFS",
                    "label": "BFS"
                },
                {
                    "value": "BFS-D",
                    "label": "BFS-D"
                },
                {
                    "value": "BFS-E",
                    "label": "BFS-E"
                },
                {
                    "value": "BFY",
                    "label": "BFY"
                },
                {
                    "value": "BFZ",
                    "label": "BFZ"
                },
                {
                    "value": "BG",
                    "label": "BG"
                },
                {
                    "value": "BGB",
                    "label": "BGB"
                },
                {
                    "value": "BGG",
                    "label": "BGG"
                },
                {
                    "value": "BGH",
                    "label": "BGH"
                },
                {
                    "value": "BGIO",
                    "label": "BGIO"
                },
                {
                    "value": "BGR",
                    "label": "BGR"
                },
                {
                    "value": "BGS",
                    "label": "BGS"
                },
                {
                    "value": "BGSF",
                    "label": "BGSF"
                },
                {
                    "value": "BGT",
                    "label": "BGT"
                },
                {
                    "value": "BGX",
                    "label": "BGX"
                },
                {
                    "value": "BGY",
                    "label": "BGY"
                },
                {
                    "value": "BH",
                    "label": "BH"
                },
                {
                    "value": "BH.A",
                    "label": "BH.A"
                },
                {
                    "value": "BHC",
                    "label": "BHC"
                },
                {
                    "value": "BHE",
                    "label": "BHE"
                },
                {
                    "value": "BHK",
                    "label": "BHK"
                },
                {
                    "value": "BHLB",
                    "label": "BHLB"
                },
                {
                    "value": "BHP",
                    "label": "BHP"
                },
                {
                    "value": "BHR",
                    "label": "BHR"
                },
                {
                    "value": "BHR-B",
                    "label": "BHR-B"
                },
                {
                    "value": "BHR-D",
                    "label": "BHR-D"
                },
                {
                    "value": "BHV",
                    "label": "BHV"
                },
                {
                    "value": "BHVN",
                    "label": "BHVN"
                },
                {
                    "value": "BIF",
                    "label": "BIF"
                },
                {
                    "value": "BIG",
                    "label": "BIG"
                },
                {
                    "value": "BILL",
                    "label": "BILL"
                },
                {
                    "value": "BIO",
                    "label": "BIO"
                },
                {
                    "value": "BIO.B",
                    "label": "BIO.B"
                },
                {
                    "value": "BIP",
                    "label": "BIP"
                },
                {
                    "value": "BIPC",
                    "label": "BIPC"
                },
                {
                    "value": "BIT",
                    "label": "BIT"
                },
                {
                    "value": "BITA",
                    "label": "BITA"
                },
                {
                    "value": "BJ",
                    "label": "BJ"
                },
                {
                    "value": "BK",
                    "label": "BK"
                },
                {
                    "value": "BK-C",
                    "label": "BK-C"
                },
                {
                    "value": "BKD",
                    "label": "BKD"
                },
                {
                    "value": "BKE",
                    "label": "BKE"
                },
                {
                    "value": "BKH",
                    "label": "BKH"
                },
                {
                    "value": "BKI",
                    "label": "BKI"
                },
                {
                    "value": "BKK",
                    "label": "BKK"
                },
                {
                    "value": "BKN",
                    "label": "BKN"
                },
                {
                    "value": "BKR",
                    "label": "BKR"
                },
                {
                    "value": "BKT",
                    "label": "BKT"
                },
                {
                    "value": "BKU",
                    "label": "BKU"
                },
                {
                    "value": "BLD",
                    "label": "BLD"
                },
                {
                    "value": "BLE",
                    "label": "BLE"
                },
                {
                    "value": "BLK",
                    "label": "BLK"
                },
                {
                    "value": "BLL",
                    "label": "BLL"
                },
                {
                    "value": "BLW",
                    "label": "BLW"
                },
                {
                    "value": "BLX",
                    "label": "BLX"
                },
                {
                    "value": "BMA",
                    "label": "BMA"
                },
                {
                    "value": "BME",
                    "label": "BME"
                },
                {
                    "value": "BMEZ",
                    "label": "BMEZ"
                },
                {
                    "value": "BMI",
                    "label": "BMI"
                },
                {
                    "value": "BML-G",
                    "label": "BML-G"
                },
                {
                    "value": "BML-H",
                    "label": "BML-H"
                },
                {
                    "value": "BML-J",
                    "label": "BML-J"
                },
                {
                    "value": "BML-L",
                    "label": "BML-L"
                },
                {
                    "value": "BMO",
                    "label": "BMO"
                },
                {
                    "value": "BMR.U",
                    "label": "BMR.U"
                },
                {
                    "value": "BMR.W",
                    "label": "BMR.W"
                },
                {
                    "value": "BMRG",
                    "label": "BMRG"
                },
                {
                    "value": "BMY",
                    "label": "BMY"
                },
                {
                    "value": "BMY.P",
                    "label": "BMY.P"
                },
                {
                    "value": "BNED",
                    "label": "BNED"
                },
                {
                    "value": "BNS",
                    "label": "BNS"
                },
                {
                    "value": "BNY",
                    "label": "BNY"
                },
                {
                    "value": "BOE",
                    "label": "BOE"
                },
                {
                    "value": "BOH",
                    "label": "BOH"
                },
                {
                    "value": "BOOT",
                    "label": "BOOT"
                },
                {
                    "value": "BORR",
                    "label": "BORR"
                },
                {
                    "value": "BOX",
                    "label": "BOX"
                },
                {
                    "value": "BP",
                    "label": "BP"
                },
                {
                    "value": "BPMP",
                    "label": "BPMP"
                },
                {
                    "value": "BPT",
                    "label": "BPT"
                },
                {
                    "value": "BQH",
                    "label": "BQH"
                },
                {
                    "value": "BR",
                    "label": "BR"
                },
                {
                    "value": "BRBR",
                    "label": "BRBR"
                },
                {
                    "value": "BRC",
                    "label": "BRC"
                },
                {
                    "value": "BRFS",
                    "label": "BRFS"
                },
                {
                    "value": "BRK.A",
                    "label": "BRK.A"
                },
                {
                    "value": "BRK.B",
                    "label": "BRK.B"
                },
                {
                    "value": "BRMK",
                    "label": "BRMK"
                },
                {
                    "value": "BRO",
                    "label": "BRO"
                },
                {
                    "value": "BRT",
                    "label": "BRT"
                },
                {
                    "value": "BRX",
                    "label": "BRX"
                },
                {
                    "value": "BSA",
                    "label": "BSA"
                },
                {
                    "value": "BSAC",
                    "label": "BSAC"
                },
                {
                    "value": "BSBR",
                    "label": "BSBR"
                },
                {
                    "value": "BSD",
                    "label": "BSD"
                },
                {
                    "value": "BSE",
                    "label": "BSE"
                },
                {
                    "value": "BSIG",
                    "label": "BSIG"
                },
                {
                    "value": "BSL",
                    "label": "BSL"
                },
                {
                    "value": "BSM",
                    "label": "BSM"
                },
                {
                    "value": "BSMX",
                    "label": "BSMX"
                },
                {
                    "value": "BST",
                    "label": "BST"
                },
                {
                    "value": "BSTZ",
                    "label": "BSTZ"
                },
                {
                    "value": "BSX",
                    "label": "BSX"
                },
                {
                    "value": "BSX-A",
                    "label": "BSX-A"
                },
                {
                    "value": "BTA",
                    "label": "BTA"
                },
                {
                    "value": "BTE",
                    "label": "BTE"
                },
                {
                    "value": "BTI",
                    "label": "BTI"
                },
                {
                    "value": "BTO",
                    "label": "BTO"
                },
                {
                    "value": "BTT",
                    "label": "BTT"
                },
                {
                    "value": "BTU",
                    "label": "BTU"
                },
                {
                    "value": "BTZ",
                    "label": "BTZ"
                },
                {
                    "value": "BUD",
                    "label": "BUD"
                },
                {
                    "value": "BUI",
                    "label": "BUI"
                },
                {
                    "value": "BURL",
                    "label": "BURL"
                },
                {
                    "value": "BV",
                    "label": "BV"
                },
                {
                    "value": "BVN",
                    "label": "BVN"
                },
                {
                    "value": "BW",
                    "label": "BW"
                },
                {
                    "value": "BWA",
                    "label": "BWA"
                },
                {
                    "value": "BWG",
                    "label": "BWG"
                },
                {
                    "value": "BWXT",
                    "label": "BWXT"
                },
                {
                    "value": "BX",
                    "label": "BX"
                },
                {
                    "value": "BXC",
                    "label": "BXC"
                },
                {
                    "value": "BXG",
                    "label": "BXG"
                },
                {
                    "value": "BXMT",
                    "label": "BXMT"
                },
                {
                    "value": "BXMX",
                    "label": "BXMX"
                },
                {
                    "value": "BXP",
                    "label": "BXP"
                },
                {
                    "value": "BXP-B",
                    "label": "BXP-B"
                },
                {
                    "value": "BXS",
                    "label": "BXS"
                },
                {
                    "value": "BXS-A",
                    "label": "BXS-A"
                },
                {
                    "value": "BY",
                    "label": "BY"
                },
                {
                    "value": "BYD",
                    "label": "BYD"
                },
                {
                    "value": "BYM",
                    "label": "BYM"
                },
                {
                    "value": "BZH",
                    "label": "BZH"
                },
                {
                    "value": "BZM",
                    "label": "BZM"
                },
                {
                    "value": "C",
                    "label": "C"
                },
                {
                    "value": "C-J",
                    "label": "C-J"
                },
                {
                    "value": "C-K",
                    "label": "C-K"
                },
                {
                    "value": "C-N",
                    "label": "C-N"
                },
                {
                    "value": "C-S",
                    "label": "C-S"
                },
                {
                    "value": "CAAP",
                    "label": "CAAP"
                },
                {
                    "value": "CABO",
                    "label": "CABO"
                },
                {
                    "value": "CACI",
                    "label": "CACI"
                },
                {
                    "value": "CADE",
                    "label": "CADE"
                },
                {
                    "value": "CAE",
                    "label": "CAE"
                },
                {
                    "value": "CAF",
                    "label": "CAF"
                },
                {
                    "value": "CAG",
                    "label": "CAG"
                },
                {
                    "value": "CAH",
                    "label": "CAH"
                },
                {
                    "value": "CAI",
                    "label": "CAI"
                },
                {
                    "value": "CAI-A",
                    "label": "CAI-A"
                },
                {
                    "value": "CAI-B",
                    "label": "CAI-B"
                },
                {
                    "value": "CAJ",
                    "label": "CAJ"
                },
                {
                    "value": "CAL",
                    "label": "CAL"
                },
                {
                    "value": "CALX",
                    "label": "CALX"
                },
                {
                    "value": "CANG",
                    "label": "CANG"
                },
                {
                    "value": "CAPL",
                    "label": "CAPL"
                },
                {
                    "value": "CARR",
                    "label": "CARR"
                },
                {
                    "value": "CARS",
                    "label": "CARS"
                },
                {
                    "value": "CAT",
                    "label": "CAT"
                },
                {
                    "value": "CATO",
                    "label": "CATO"
                },
                {
                    "value": "CB",
                    "label": "CB"
                },
                {
                    "value": "CBB",
                    "label": "CBB"
                },
                {
                    "value": "CBB-B",
                    "label": "CBB-B"
                },
                {
                    "value": "CBD",
                    "label": "CBD"
                },
                {
                    "value": "CBH",
                    "label": "CBH"
                },
                {
                    "value": "CBL",
                    "label": "CBL"
                },
                {
                    "value": "CBL-D",
                    "label": "CBL-D"
                },
                {
                    "value": "CBL-E",
                    "label": "CBL-E"
                },
                {
                    "value": "CBRE",
                    "label": "CBRE"
                },
                {
                    "value": "CBT",
                    "label": "CBT"
                },
                {
                    "value": "CBU",
                    "label": "CBU"
                },
                {
                    "value": "CBZ",
                    "label": "CBZ"
                },
                {
                    "value": "CC",
                    "label": "CC"
                },
                {
                    "value": "CCA.U",
                    "label": "CCA.U"
                },
                {
                    "value": "CCA.W",
                    "label": "CCA.W"
                },
                {
                    "value": "CCAC",
                    "label": "CCAC"
                },
                {
                    "value": "CCC",
                    "label": "CCC"
                },
                {
                    "value": "CCEP",
                    "label": "CCEP"
                },
                {
                    "value": "CCH",
                    "label": "CCH"
                },
                {
                    "value": "CCH.U",
                    "label": "CCH.U"
                },
                {
                    "value": "CCH.W",
                    "label": "CCH.W"
                },
                {
                    "value": "CCI",
                    "label": "CCI"
                },
                {
                    "value": "CCI-A",
                    "label": "CCI-A"
                },
                {
                    "value": "CCJ",
                    "label": "CCJ"
                },
                {
                    "value": "CCK",
                    "label": "CCK"
                },
                {
                    "value": "CCL",
                    "label": "CCL"
                },
                {
                    "value": "CCM",
                    "label": "CCM"
                },
                {
                    "value": "CCO",
                    "label": "CCO"
                },
                {
                    "value": "CCR",
                    "label": "CCR"
                },
                {
                    "value": "CCS",
                    "label": "CCS"
                },
                {
                    "value": "CCU",
                    "label": "CCU"
                },
                {
                    "value": "CCX",
                    "label": "CCX"
                },
                {
                    "value": "CCX.U",
                    "label": "CCX.U"
                },
                {
                    "value": "CCX.W",
                    "label": "CCX.W"
                },
                {
                    "value": "CCXX",
                    "label": "CCXX"
                },
                {
                    "value": "CCZ",
                    "label": "CCZ"
                },
                {
                    "value": "CDAY",
                    "label": "CDAY"
                },
                {
                    "value": "CDE",
                    "label": "CDE"
                },
                {
                    "value": "CDR",
                    "label": "CDR"
                },
                {
                    "value": "CDR-B",
                    "label": "CDR-B"
                },
                {
                    "value": "CDR-C",
                    "label": "CDR-C"
                },
                {
                    "value": "CE",
                    "label": "CE"
                },
                {
                    "value": "CEA",
                    "label": "CEA"
                },
                {
                    "value": "CEE",
                    "label": "CEE"
                },
                {
                    "value": "CEIX",
                    "label": "CEIX"
                },
                {
                    "value": "CEL",
                    "label": "CEL"
                },
                {
                    "value": "CEL.P",
                    "label": "CEL.P"
                },
                {
                    "value": "CELP",
                    "label": "CELP"
                },
                {
                    "value": "CEM",
                    "label": "CEM"
                },
                {
                    "value": "CEN",
                    "label": "CEN"
                },
                {
                    "value": "CEO",
                    "label": "CEO"
                },
                {
                    "value": "CEPU",
                    "label": "CEPU"
                },
                {
                    "value": "CEQ.P",
                    "label": "CEQ.P"
                },
                {
                    "value": "CEQP",
                    "label": "CEQP"
                },
                {
                    "value": "CF",
                    "label": "CF"
                },
                {
                    "value": "CFG",
                    "label": "CFG"
                },
                {
                    "value": "CFG-D",
                    "label": "CFG-D"
                },
                {
                    "value": "CFG-E",
                    "label": "CFG-E"
                },
                {
                    "value": "CFR",
                    "label": "CFR"
                },
                {
                    "value": "CFX",
                    "label": "CFX"
                },
                {
                    "value": "CFXA",
                    "label": "CFXA"
                },
                {
                    "value": "CGA",
                    "label": "CGA"
                },
                {
                    "value": "CGC",
                    "label": "CGC"
                },
                {
                    "value": "CHA",
                    "label": "CHA"
                },
                {
                    "value": "CHAP",
                    "label": "CHAP"
                },
                {
                    "value": "CHCT",
                    "label": "CHCT"
                },
                {
                    "value": "CHD",
                    "label": "CHD"
                },
                {
                    "value": "CHE",
                    "label": "CHE"
                },
                {
                    "value": "CHGG",
                    "label": "CHGG"
                },
                {
                    "value": "CHH",
                    "label": "CHH"
                },
                {
                    "value": "CHK",
                    "label": "CHK"
                },
                {
                    "value": "CHK-D",
                    "label": "CHK-D"
                },
                {
                    "value": "CHL",
                    "label": "CHL"
                },
                {
                    "value": "CHM-A",
                    "label": "CHM-A"
                },
                {
                    "value": "CHM-B",
                    "label": "CHM-B"
                },
                {
                    "value": "CHMI",
                    "label": "CHMI"
                },
                {
                    "value": "CHN",
                    "label": "CHN"
                },
                {
                    "value": "CHRA",
                    "label": "CHRA"
                },
                {
                    "value": "CHS",
                    "label": "CHS"
                },
                {
                    "value": "CHT",
                    "label": "CHT"
                },
                {
                    "value": "CHU",
                    "label": "CHU"
                },
                {
                    "value": "CHWY",
                    "label": "CHWY"
                },
                {
                    "value": "CHX",
                    "label": "CHX"
                },
                {
                    "value": "CHX.P",
                    "label": "CHX.P"
                },
                {
                    "value": "CI",
                    "label": "CI"
                },
                {
                    "value": "CIA",
                    "label": "CIA"
                },
                {
                    "value": "CIB",
                    "label": "CIB"
                },
                {
                    "value": "CIEN",
                    "label": "CIEN"
                },
                {
                    "value": "CIF",
                    "label": "CIF"
                },
                {
                    "value": "CIG",
                    "label": "CIG"
                },
                {
                    "value": "CIG.C",
                    "label": "CIG.C"
                },
                {
                    "value": "CII",
                    "label": "CII"
                },
                {
                    "value": "CIM",
                    "label": "CIM"
                },
                {
                    "value": "CIM-A",
                    "label": "CIM-A"
                },
                {
                    "value": "CIM-B",
                    "label": "CIM-B"
                },
                {
                    "value": "CIM-C",
                    "label": "CIM-C"
                },
                {
                    "value": "CIM-D",
                    "label": "CIM-D"
                },
                {
                    "value": "CINR",
                    "label": "CINR"
                },
                {
                    "value": "CIO",
                    "label": "CIO"
                },
                {
                    "value": "CIO-A",
                    "label": "CIO-A"
                },
                {
                    "value": "CIR",
                    "label": "CIR"
                },
                {
                    "value": "CIT",
                    "label": "CIT"
                },
                {
                    "value": "CIT-B",
                    "label": "CIT-B"
                },
                {
                    "value": "CKH",
                    "label": "CKH"
                },
                {
                    "value": "CL",
                    "label": "CL"
                },
                {
                    "value": "CLB",
                    "label": "CLB"
                },
                {
                    "value": "CLDR",
                    "label": "CLDR"
                },
                {
                    "value": "CLDT",
                    "label": "CLDT"
                },
                {
                    "value": "CLF",
                    "label": "CLF"
                },
                {
                    "value": "CLGX",
                    "label": "CLGX"
                },
                {
                    "value": "CLH",
                    "label": "CLH"
                },
                {
                    "value": "CLI",
                    "label": "CLI"
                },
                {
                    "value": "CLN-G",
                    "label": "CLN-G"
                },
                {
                    "value": "CLN-H",
                    "label": "CLN-H"
                },
                {
                    "value": "CLN-I",
                    "label": "CLN-I"
                },
                {
                    "value": "CLN-J",
                    "label": "CLN-J"
                },
                {
                    "value": "CLNC",
                    "label": "CLNC"
                },
                {
                    "value": "CLNY",
                    "label": "CLNY"
                },
                {
                    "value": "CLPR",
                    "label": "CLPR"
                },
                {
                    "value": "CLR",
                    "label": "CLR"
                },
                {
                    "value": "CLS",
                    "label": "CLS"
                },
                {
                    "value": "CLW",
                    "label": "CLW"
                },
                {
                    "value": "CLX",
                    "label": "CLX"
                },
                {
                    "value": "CM",
                    "label": "CM"
                },
                {
                    "value": "CMA",
                    "label": "CMA"
                },
                {
                    "value": "CMC",
                    "label": "CMC"
                },
                {
                    "value": "CMCM",
                    "label": "CMCM"
                },
                {
                    "value": "CMD",
                    "label": "CMD"
                },
                {
                    "value": "CMG",
                    "label": "CMG"
                },
                {
                    "value": "CMI",
                    "label": "CMI"
                },
                {
                    "value": "CMO",
                    "label": "CMO"
                },
                {
                    "value": "CMO-E",
                    "label": "CMO-E"
                },
                {
                    "value": "CMP",
                    "label": "CMP"
                },
                {
                    "value": "CMR-B",
                    "label": "CMR-B"
                },
                {
                    "value": "CMR-C",
                    "label": "CMR-C"
                },
                {
                    "value": "CMR-D",
                    "label": "CMR-D"
                },
                {
                    "value": "CMR-E",
                    "label": "CMR-E"
                },
                {
                    "value": "CMRE",
                    "label": "CMRE"
                },
                {
                    "value": "CMS",
                    "label": "CMS"
                },
                {
                    "value": "CMS-B",
                    "label": "CMS-B"
                },
                {
                    "value": "CMSA",
                    "label": "CMSA"
                },
                {
                    "value": "CMSC",
                    "label": "CMSC"
                },
                {
                    "value": "CMSD",
                    "label": "CMSD"
                },
                {
                    "value": "CMU",
                    "label": "CMU"
                },
                {
                    "value": "CNA",
                    "label": "CNA"
                },
                {
                    "value": "CNC",
                    "label": "CNC"
                },
                {
                    "value": "CNF",
                    "label": "CNF"
                },
                {
                    "value": "CNHI",
                    "label": "CNHI"
                },
                {
                    "value": "CNI",
                    "label": "CNI"
                },
                {
                    "value": "CNK",
                    "label": "CNK"
                },
                {
                    "value": "CNMD",
                    "label": "CNMD"
                },
                {
                    "value": "CNNE",
                    "label": "CNNE"
                },
                {
                    "value": "CNO",
                    "label": "CNO"
                },
                {
                    "value": "CNP",
                    "label": "CNP"
                },
                {
                    "value": "CNP-B",
                    "label": "CNP-B"
                },
                {
                    "value": "CNQ",
                    "label": "CNQ"
                },
                {
                    "value": "CNR",
                    "label": "CNR"
                },
                {
                    "value": "CNS",
                    "label": "CNS"
                },
                {
                    "value": "CNX",
                    "label": "CNX"
                },
                {
                    "value": "CNXM",
                    "label": "CNXM"
                },
                {
                    "value": "CO",
                    "label": "CO"
                },
                {
                    "value": "COD-A",
                    "label": "COD-A"
                },
                {
                    "value": "COD-B",
                    "label": "COD-B"
                },
                {
                    "value": "COD-C",
                    "label": "COD-C"
                },
                {
                    "value": "CODI",
                    "label": "CODI"
                },
                {
                    "value": "COE",
                    "label": "COE"
                },
                {
                    "value": "COF",
                    "label": "COF"
                },
                {
                    "value": "COF-F",
                    "label": "COF-F"
                },
                {
                    "value": "COF-G",
                    "label": "COF-G"
                },
                {
                    "value": "COF-H",
                    "label": "COF-H"
                },
                {
                    "value": "COF-I",
                    "label": "COF-I"
                },
                {
                    "value": "COF-J",
                    "label": "COF-J"
                },
                {
                    "value": "COG",
                    "label": "COG"
                },
                {
                    "value": "COLD",
                    "label": "COLD"
                },
                {
                    "value": "COO",
                    "label": "COO"
                },
                {
                    "value": "COP",
                    "label": "COP"
                },
                {
                    "value": "COR",
                    "label": "COR"
                },
                {
                    "value": "COR-Z",
                    "label": "COR-Z"
                },
                {
                    "value": "CORR",
                    "label": "CORR"
                },
                {
                    "value": "COTY",
                    "label": "COTY"
                },
                {
                    "value": "CP",
                    "label": "CP"
                },
                {
                    "value": "CPA",
                    "label": "CPA"
                },
                {
                    "value": "CPAC",
                    "label": "CPAC"
                },
                {
                    "value": "CPB",
                    "label": "CPB"
                },
                {
                    "value": "CPE",
                    "label": "CPE"
                },
                {
                    "value": "CPF",
                    "label": "CPF"
                },
                {
                    "value": "CPG",
                    "label": "CPG"
                },
                {
                    "value": "CPK",
                    "label": "CPK"
                },
                {
                    "value": "CPLG",
                    "label": "CPLG"
                },
                {
                    "value": "CPRI",
                    "label": "CPRI"
                },
                {
                    "value": "CPS",
                    "label": "CPS"
                },
                {
                    "value": "CPT",
                    "label": "CPT"
                },
                {
                    "value": "CR",
                    "label": "CR"
                },
                {
                    "value": "CRC",
                    "label": "CRC"
                },
                {
                    "value": "CRD.A",
                    "label": "CRD.A"
                },
                {
                    "value": "CRD.B",
                    "label": "CRD.B"
                },
                {
                    "value": "CRH",
                    "label": "CRH"
                },
                {
                    "value": "CRI",
                    "label": "CRI"
                },
                {
                    "value": "CRK",
                    "label": "CRK"
                },
                {
                    "value": "CRL",
                    "label": "CRL"
                },
                {
                    "value": "CRM",
                    "label": "CRM"
                },
                {
                    "value": "CRS",
                    "label": "CRS"
                },
                {
                    "value": "CRT",
                    "label": "CRT"
                },
                {
                    "value": "CRY",
                    "label": "CRY"
                },
                {
                    "value": "CS",
                    "label": "CS"
                },
                {
                    "value": "CSL",
                    "label": "CSL"
                },
                {
                    "value": "CSLT",
                    "label": "CSLT"
                },
                {
                    "value": "CSPR",
                    "label": "CSPR"
                },
                {
                    "value": "CSTM",
                    "label": "CSTM"
                },
                {
                    "value": "CSU",
                    "label": "CSU"
                },
                {
                    "value": "CSV",
                    "label": "CSV"
                },
                {
                    "value": "CTA-A",
                    "label": "CTA-A"
                },
                {
                    "value": "CTA-B",
                    "label": "CTA-B"
                },
                {
                    "value": "CTAA",
                    "label": "CTAA"
                },
                {
                    "value": "CTB",
                    "label": "CTB"
                },
                {
                    "value": "CTBB",
                    "label": "CTBB"
                },
                {
                    "value": "CTDD",
                    "label": "CTDD"
                },
                {
                    "value": "CTK",
                    "label": "CTK"
                },
                {
                    "value": "CTL",
                    "label": "CTL"
                },
                {
                    "value": "CTLT",
                    "label": "CTLT"
                },
                {
                    "value": "CTR",
                    "label": "CTR"
                },
                {
                    "value": "CTRA",
                    "label": "CTRA"
                },
                {
                    "value": "CTS",
                    "label": "CTS"
                },
                {
                    "value": "CTT",
                    "label": "CTT"
                },
                {
                    "value": "CTV",
                    "label": "CTV"
                },
                {
                    "value": "CTVA",
                    "label": "CTVA"
                },
                {
                    "value": "CTY",
                    "label": "CTY"
                },
                {
                    "value": "CTZ",
                    "label": "CTZ"
                },
                {
                    "value": "CUB",
                    "label": "CUB"
                },
                {
                    "value": "CUB-C",
                    "label": "CUB-C"
                },
                {
                    "value": "CUB-D",
                    "label": "CUB-D"
                },
                {
                    "value": "CUB-E",
                    "label": "CUB-E"
                },
                {
                    "value": "CUB-F",
                    "label": "CUB-F"
                },
                {
                    "value": "CUBB",
                    "label": "CUBB"
                },
                {
                    "value": "CUBE",
                    "label": "CUBE"
                },
                {
                    "value": "CUBI",
                    "label": "CUBI"
                },
                {
                    "value": "CUK",
                    "label": "CUK"
                },
                {
                    "value": "CULP",
                    "label": "CULP"
                },
                {
                    "value": "CURO",
                    "label": "CURO"
                },
                {
                    "value": "CUZ",
                    "label": "CUZ"
                },
                {
                    "value": "CVA",
                    "label": "CVA"
                },
                {
                    "value": "CVE",
                    "label": "CVE"
                },
                {
                    "value": "CVEO",
                    "label": "CVEO"
                },
                {
                    "value": "CVI",
                    "label": "CVI"
                },
                {
                    "value": "CVIA",
                    "label": "CVIA"
                },
                {
                    "value": "CVNA",
                    "label": "CVNA"
                },
                {
                    "value": "CVS",
                    "label": "CVS"
                },
                {
                    "value": "CVX",
                    "label": "CVX"
                },
                {
                    "value": "CW",
                    "label": "CW"
                },
                {
                    "value": "CWE.A",
                    "label": "CWE.A"
                },
                {
                    "value": "CWEN",
                    "label": "CWEN"
                },
                {
                    "value": "CWH",
                    "label": "CWH"
                },
                {
                    "value": "CWK",
                    "label": "CWK"
                },
                {
                    "value": "CWT",
                    "label": "CWT"
                },
                {
                    "value": "CX",
                    "label": "CX"
                },
                {
                    "value": "CXE",
                    "label": "CXE"
                },
                {
                    "value": "CXH",
                    "label": "CXH"
                },
                {
                    "value": "CXO",
                    "label": "CXO"
                },
                {
                    "value": "CXP",
                    "label": "CXP"
                },
                {
                    "value": "CXW",
                    "label": "CXW"
                },
                {
                    "value": "CYD",
                    "label": "CYD"
                },
                {
                    "value": "CYH",
                    "label": "CYH"
                },
                {
                    "value": "CZZ",
                    "label": "CZZ"
                },
                {
                    "value": "D",
                    "label": "D"
                },
                {
                    "value": "DAC",
                    "label": "DAC"
                },
                {
                    "value": "DAL",
                    "label": "DAL"
                },
                {
                    "value": "DAN",
                    "label": "DAN"
                },
                {
                    "value": "DAO",
                    "label": "DAO"
                },
                {
                    "value": "DAR",
                    "label": "DAR"
                },
                {
                    "value": "DAVA",
                    "label": "DAVA"
                },
                {
                    "value": "DB",
                    "label": "DB"
                },
                {
                    "value": "DBD",
                    "label": "DBD"
                },
                {
                    "value": "DBI",
                    "label": "DBI"
                },
                {
                    "value": "DBL",
                    "label": "DBL"
                },
                {
                    "value": "DCF",
                    "label": "DCF"
                },
                {
                    "value": "DCI",
                    "label": "DCI"
                },
                {
                    "value": "DCO",
                    "label": "DCO"
                },
                {
                    "value": "DCP",
                    "label": "DCP"
                },
                {
                    "value": "DCP-B",
                    "label": "DCP-B"
                },
                {
                    "value": "DCP-C",
                    "label": "DCP-C"
                },
                {
                    "value": "DCUE",
                    "label": "DCUE"
                },
                {
                    "value": "DD",
                    "label": "DD"
                },
                {
                    "value": "DDD",
                    "label": "DDD"
                },
                {
                    "value": "DDF",
                    "label": "DDF"
                },
                {
                    "value": "DDS",
                    "label": "DDS"
                },
                {
                    "value": "DDT",
                    "label": "DDT"
                },
                {
                    "value": "DE",
                    "label": "DE"
                },
                {
                    "value": "DEA",
                    "label": "DEA"
                },
                {
                    "value": "DECK",
                    "label": "DECK"
                },
                {
                    "value": "DEI",
                    "label": "DEI"
                },
                {
                    "value": "DELL",
                    "label": "DELL"
                },
                {
                    "value": "DEO",
                    "label": "DEO"
                },
                {
                    "value": "DESP",
                    "label": "DESP"
                },
                {
                    "value": "DEX",
                    "label": "DEX"
                },
                {
                    "value": "DFIN",
                    "label": "DFIN"
                },
                {
                    "value": "DFN.U",
                    "label": "DFN.U"
                },
                {
                    "value": "DFN.W",
                    "label": "DFN.W"
                },
                {
                    "value": "DFNS",
                    "label": "DFNS"
                },
                {
                    "value": "DFP",
                    "label": "DFP"
                },
                {
                    "value": "DFS",
                    "label": "DFS"
                },
                {
                    "value": "DG",
                    "label": "DG"
                },
                {
                    "value": "DGX",
                    "label": "DGX"
                },
                {
                    "value": "DHF",
                    "label": "DHF"
                },
                {
                    "value": "DHI",
                    "label": "DHI"
                },
                {
                    "value": "DHR",
                    "label": "DHR"
                },
                {
                    "value": "DHR-A",
                    "label": "DHR-A"
                },
                {
                    "value": "DHR-B",
                    "label": "DHR-B"
                },
                {
                    "value": "DHT",
                    "label": "DHT"
                },
                {
                    "value": "DHX",
                    "label": "DHX"
                },
                {
                    "value": "DIAX",
                    "label": "DIAX"
                },
                {
                    "value": "DIN",
                    "label": "DIN"
                },
                {
                    "value": "DIS",
                    "label": "DIS"
                },
                {
                    "value": "DK",
                    "label": "DK"
                },
                {
                    "value": "DKL",
                    "label": "DKL"
                },
                {
                    "value": "DKS",
                    "label": "DKS"
                },
                {
                    "value": "DL",
                    "label": "DL"
                },
                {
                    "value": "DLB",
                    "label": "DLB"
                },
                {
                    "value": "DLN-A",
                    "label": "DLN-A"
                },
                {
                    "value": "DLN-B",
                    "label": "DLN-B"
                },
                {
                    "value": "DLNG",
                    "label": "DLNG"
                },
                {
                    "value": "DLPH",
                    "label": "DLPH"
                },
                {
                    "value": "DLR",
                    "label": "DLR"
                },
                {
                    "value": "DLR-C",
                    "label": "DLR-C"
                },
                {
                    "value": "DLR-G",
                    "label": "DLR-G"
                },
                {
                    "value": "DLR-I",
                    "label": "DLR-I"
                },
                {
                    "value": "DLR-J",
                    "label": "DLR-J"
                },
                {
                    "value": "DLR-K",
                    "label": "DLR-K"
                },
                {
                    "value": "DLR-L",
                    "label": "DLR-L"
                },
                {
                    "value": "DLX",
                    "label": "DLX"
                },
                {
                    "value": "DLY",
                    "label": "DLY"
                },
                {
                    "value": "DMB",
                    "label": "DMB"
                },
                {
                    "value": "DMO",
                    "label": "DMO"
                },
                {
                    "value": "DMY.U",
                    "label": "DMY.U"
                },
                {
                    "value": "DMY.W",
                    "label": "DMY.W"
                },
                {
                    "value": "DMYT",
                    "label": "DMYT"
                },
                {
                    "value": "DNI",
                    "label": "DNI"
                },
                {
                    "value": "DNK",
                    "label": "DNK"
                },
                {
                    "value": "DNOW",
                    "label": "DNOW"
                },
                {
                    "value": "DNP",
                    "label": "DNP"
                },
                {
                    "value": "DNR",
                    "label": "DNR"
                },
                {
                    "value": "DOC",
                    "label": "DOC"
                },
                {
                    "value": "DOOR",
                    "label": "DOOR"
                },
                {
                    "value": "DOV",
                    "label": "DOV"
                },
                {
                    "value": "DOW",
                    "label": "DOW"
                },
                {
                    "value": "DPG",
                    "label": "DPG"
                },
                {
                    "value": "DPZ",
                    "label": "DPZ"
                },
                {
                    "value": "DQ",
                    "label": "DQ"
                },
                {
                    "value": "DRD",
                    "label": "DRD"
                },
                {
                    "value": "DRE",
                    "label": "DRE"
                },
                {
                    "value": "DRH",
                    "label": "DRH"
                },
                {
                    "value": "DRI",
                    "label": "DRI"
                },
                {
                    "value": "DRQ",
                    "label": "DRQ"
                },
                {
                    "value": "DRUA",
                    "label": "DRUA"
                },
                {
                    "value": "DS",
                    "label": "DS"
                },
                {
                    "value": "DS-B",
                    "label": "DS-B"
                },
                {
                    "value": "DS-C",
                    "label": "DS-C"
                },
                {
                    "value": "DS-D",
                    "label": "DS-D"
                },
                {
                    "value": "DSE",
                    "label": "DSE"
                },
                {
                    "value": "DSL",
                    "label": "DSL"
                },
                {
                    "value": "DSM",
                    "label": "DSM"
                },
                {
                    "value": "DSSI",
                    "label": "DSSI"
                },
                {
                    "value": "DSU",
                    "label": "DSU"
                },
                {
                    "value": "DSX",
                    "label": "DSX"
                },
                {
                    "value": "DSX-B",
                    "label": "DSX-B"
                },
                {
                    "value": "DT",
                    "label": "DT"
                },
                {
                    "value": "DTE",
                    "label": "DTE"
                },
                {
                    "value": "DTF",
                    "label": "DTF"
                },
                {
                    "value": "DTJ",
                    "label": "DTJ"
                },
                {
                    "value": "DTL.P",
                    "label": "DTL.P"
                },
                {
                    "value": "DTP",
                    "label": "DTP"
                },
                {
                    "value": "DTQ",
                    "label": "DTQ"
                },
                {
                    "value": "DTW",
                    "label": "DTW"
                },
                {
                    "value": "DTY",
                    "label": "DTY"
                },
                {
                    "value": "DUC",
                    "label": "DUC"
                },
                {
                    "value": "DUK",
                    "label": "DUK"
                },
                {
                    "value": "DUK-A",
                    "label": "DUK-A"
                },
                {
                    "value": "DUKB",
                    "label": "DUKB"
                },
                {
                    "value": "DUKH",
                    "label": "DUKH"
                },
                {
                    "value": "DVA",
                    "label": "DVA"
                },
                {
                    "value": "DVD",
                    "label": "DVD"
                },
                {
                    "value": "DVN",
                    "label": "DVN"
                },
                {
                    "value": "DX",
                    "label": "DX"
                },
                {
                    "value": "DX-B",
                    "label": "DX-B"
                },
                {
                    "value": "DX-C",
                    "label": "DX-C"
                },
                {
                    "value": "DXC",
                    "label": "DXC"
                },
                {
                    "value": "DY",
                    "label": "DY"
                },
                {
                    "value": "E",
                    "label": "E"
                },
                {
                    "value": "EAB",
                    "label": "EAB"
                },
                {
                    "value": "EAE",
                    "label": "EAE"
                },
                {
                    "value": "EAF",
                    "label": "EAF"
                },
                {
                    "value": "EAI",
                    "label": "EAI"
                },
                {
                    "value": "EARN",
                    "label": "EARN"
                },
                {
                    "value": "EAT",
                    "label": "EAT"
                },
                {
                    "value": "EB",
                    "label": "EB"
                },
                {
                    "value": "EBF",
                    "label": "EBF"
                },
                {
                    "value": "EBR",
                    "label": "EBR"
                },
                {
                    "value": "EBR.B",
                    "label": "EBR.B"
                },
                {
                    "value": "EBS",
                    "label": "EBS"
                },
                {
                    "value": "EC",
                    "label": "EC"
                },
                {
                    "value": "ECC",
                    "label": "ECC"
                },
                {
                    "value": "ECCB",
                    "label": "ECCB"
                },
                {
                    "value": "ECCX",
                    "label": "ECCX"
                },
                {
                    "value": "ECCY",
                    "label": "ECCY"
                },
                {
                    "value": "ECL",
                    "label": "ECL"
                },
                {
                    "value": "ECOM",
                    "label": "ECOM"
                },
                {
                    "value": "ECT",
                    "label": "ECT"
                },
                {
                    "value": "ED",
                    "label": "ED"
                },
                {
                    "value": "EDD",
                    "label": "EDD"
                },
                {
                    "value": "EDF",
                    "label": "EDF"
                },
                {
                    "value": "EDI",
                    "label": "EDI"
                },
                {
                    "value": "EDN",
                    "label": "EDN"
                },
                {
                    "value": "EDU",
                    "label": "EDU"
                },
                {
                    "value": "EE",
                    "label": "EE"
                },
                {
                    "value": "EEA",
                    "label": "EEA"
                },
                {
                    "value": "EEX",
                    "label": "EEX"
                },
                {
                    "value": "EFC",
                    "label": "EFC"
                },
                {
                    "value": "EFC-A",
                    "label": "EFC-A"
                },
                {
                    "value": "EFF",
                    "label": "EFF"
                },
                {
                    "value": "EFL",
                    "label": "EFL"
                },
                {
                    "value": "EFR",
                    "label": "EFR"
                },
                {
                    "value": "EFT",
                    "label": "EFT"
                },
                {
                    "value": "EFX",
                    "label": "EFX"
                },
                {
                    "value": "EGF",
                    "label": "EGF"
                },
                {
                    "value": "EGHT",
                    "label": "EGHT"
                },
                {
                    "value": "EGIF",
                    "label": "EGIF"
                },
                {
                    "value": "EGO",
                    "label": "EGO"
                },
                {
                    "value": "EGP",
                    "label": "EGP"
                },
                {
                    "value": "EGY",
                    "label": "EGY"
                },
                {
                    "value": "EHC",
                    "label": "EHC"
                },
                {
                    "value": "EHI",
                    "label": "EHI"
                },
                {
                    "value": "EHT",
                    "label": "EHT"
                },
                {
                    "value": "EIC",
                    "label": "EIC"
                },
                {
                    "value": "EIG",
                    "label": "EIG"
                },
                {
                    "value": "EIX",
                    "label": "EIX"
                },
                {
                    "value": "EL",
                    "label": "EL"
                },
                {
                    "value": "ELAN",
                    "label": "ELAN"
                },
                {
                    "value": "ELAT",
                    "label": "ELAT"
                },
                {
                    "value": "ELC",
                    "label": "ELC"
                },
                {
                    "value": "ELF",
                    "label": "ELF"
                },
                {
                    "value": "ELJ",
                    "label": "ELJ"
                },
                {
                    "value": "ELP",
                    "label": "ELP"
                },
                {
                    "value": "ELS",
                    "label": "ELS"
                },
                {
                    "value": "ELU",
                    "label": "ELU"
                },
                {
                    "value": "ELVT",
                    "label": "ELVT"
                },
                {
                    "value": "ELY",
                    "label": "ELY"
                },
                {
                    "value": "EMD",
                    "label": "EMD"
                },
                {
                    "value": "EME",
                    "label": "EME"
                },
                {
                    "value": "EMF",
                    "label": "EMF"
                },
                {
                    "value": "EMN",
                    "label": "EMN"
                },
                {
                    "value": "EMO",
                    "label": "EMO"
                },
                {
                    "value": "EMP",
                    "label": "EMP"
                },
                {
                    "value": "EMR",
                    "label": "EMR"
                },
                {
                    "value": "ENB",
                    "label": "ENB"
                },
                {
                    "value": "ENBA",
                    "label": "ENBA"
                },
                {
                    "value": "ENBL",
                    "label": "ENBL"
                },
                {
                    "value": "ENIA",
                    "label": "ENIA"
                },
                {
                    "value": "ENIC",
                    "label": "ENIC"
                },
                {
                    "value": "ENJ",
                    "label": "ENJ"
                },
                {
                    "value": "ENLC",
                    "label": "ENLC"
                },
                {
                    "value": "ENO",
                    "label": "ENO"
                },
                {
                    "value": "ENR",
                    "label": "ENR"
                },
                {
                    "value": "ENR-A",
                    "label": "ENR-A"
                },
                {
                    "value": "ENS",
                    "label": "ENS"
                },
                {
                    "value": "ENV",
                    "label": "ENV"
                },
                {
                    "value": "ENVA",
                    "label": "ENVA"
                },
                {
                    "value": "ENZ",
                    "label": "ENZ"
                },
                {
                    "value": "EOD",
                    "label": "EOD"
                },
                {
                    "value": "EOG",
                    "label": "EOG"
                },
                {
                    "value": "EOI",
                    "label": "EOI"
                },
                {
                    "value": "EOS",
                    "label": "EOS"
                },
                {
                    "value": "EOT",
                    "label": "EOT"
                },
                {
                    "value": "EP-C",
                    "label": "EP-C"
                },
                {
                    "value": "EPAC",
                    "label": "EPAC"
                },
                {
                    "value": "EPAM",
                    "label": "EPAM"
                },
                {
                    "value": "EPC",
                    "label": "EPC"
                },
                {
                    "value": "EPD",
                    "label": "EPD"
                },
                {
                    "value": "EPR",
                    "label": "EPR"
                },
                {
                    "value": "EPR-C",
                    "label": "EPR-C"
                },
                {
                    "value": "EPR-E",
                    "label": "EPR-E"
                },
                {
                    "value": "EPR-G",
                    "label": "EPR-G"
                },
                {
                    "value": "EPRT",
                    "label": "EPRT"
                },
                {
                    "value": "EQC",
                    "label": "EQC"
                },
                {
                    "value": "EQC-D",
                    "label": "EQC-D"
                },
                {
                    "value": "EQH",
                    "label": "EQH"
                },
                {
                    "value": "EQH-A",
                    "label": "EQH-A"
                },
                {
                    "value": "EQM",
                    "label": "EQM"
                },
                {
                    "value": "EQNR",
                    "label": "EQNR"
                },
                {
                    "value": "EQR",
                    "label": "EQR"
                },
                {
                    "value": "EQS",
                    "label": "EQS"
                },
                {
                    "value": "EQT",
                    "label": "EQT"
                },
                {
                    "value": "ERA",
                    "label": "ERA"
                },
                {
                    "value": "ERF",
                    "label": "ERF"
                },
                {
                    "value": "ERJ",
                    "label": "ERJ"
                },
                {
                    "value": "EROS",
                    "label": "EROS"
                },
                {
                    "value": "ES",
                    "label": "ES"
                },
                {
                    "value": "ESE",
                    "label": "ESE"
                },
                {
                    "value": "ESI",
                    "label": "ESI"
                },
                {
                    "value": "ESNT",
                    "label": "ESNT"
                },
                {
                    "value": "ESRT",
                    "label": "ESRT"
                },
                {
                    "value": "ESS",
                    "label": "ESS"
                },
                {
                    "value": "ESTC",
                    "label": "ESTC"
                },
                {
                    "value": "ESTE",
                    "label": "ESTE"
                },
                {
                    "value": "ET",
                    "label": "ET"
                },
                {
                    "value": "ETB",
                    "label": "ETB"
                },
                {
                    "value": "ETG",
                    "label": "ETG"
                },
                {
                    "value": "ETH",
                    "label": "ETH"
                },
                {
                    "value": "ETI.P",
                    "label": "ETI.P"
                },
                {
                    "value": "ETJ",
                    "label": "ETJ"
                },
                {
                    "value": "ETM",
                    "label": "ETM"
                },
                {
                    "value": "ETN",
                    "label": "ETN"
                },
                {
                    "value": "ETO",
                    "label": "ETO"
                },
                {
                    "value": "ETP-C",
                    "label": "ETP-C"
                },
                {
                    "value": "ETP-D",
                    "label": "ETP-D"
                },
                {
                    "value": "ETP-E",
                    "label": "ETP-E"
                },
                {
                    "value": "ETR",
                    "label": "ETR"
                },
                {
                    "value": "ETRN",
                    "label": "ETRN"
                },
                {
                    "value": "ETV",
                    "label": "ETV"
                },
                {
                    "value": "ETW",
                    "label": "ETW"
                },
                {
                    "value": "ETX",
                    "label": "ETX"
                },
                {
                    "value": "ETY",
                    "label": "ETY"
                },
                {
                    "value": "EURN",
                    "label": "EURN"
                },
                {
                    "value": "EV",
                    "label": "EV"
                },
                {
                    "value": "EVA",
                    "label": "EVA"
                },
                {
                    "value": "EVC",
                    "label": "EVC"
                },
                {
                    "value": "EVF",
                    "label": "EVF"
                },
                {
                    "value": "EVG",
                    "label": "EVG"
                },
                {
                    "value": "EVH",
                    "label": "EVH"
                },
                {
                    "value": "EVN",
                    "label": "EVN"
                },
                {
                    "value": "EVR",
                    "label": "EVR"
                },
                {
                    "value": "EVRG",
                    "label": "EVRG"
                },
                {
                    "value": "EVRI",
                    "label": "EVRI"
                },
                {
                    "value": "EVT",
                    "label": "EVT"
                },
                {
                    "value": "EVTC",
                    "label": "EVTC"
                },
                {
                    "value": "EW",
                    "label": "EW"
                },
                {
                    "value": "EXD",
                    "label": "EXD"
                },
                {
                    "value": "EXG",
                    "label": "EXG"
                },
                {
                    "value": "EXK",
                    "label": "EXK"
                },
                {
                    "value": "EXP",
                    "label": "EXP"
                },
                {
                    "value": "EXPR",
                    "label": "EXPR"
                },
                {
                    "value": "EXR",
                    "label": "EXR"
                },
                {
                    "value": "EXTN",
                    "label": "EXTN"
                },
                {
                    "value": "EZT",
                    "label": "EZT"
                },
                {
                    "value": "F",
                    "label": "F"
                },
                {
                    "value": "F-B",
                    "label": "F-B"
                },
                {
                    "value": "F-C",
                    "label": "F-C"
                },
                {
                    "value": "FAF",
                    "label": "FAF"
                },
                {
                    "value": "FAM",
                    "label": "FAM"
                },
                {
                    "value": "FBC",
                    "label": "FBC"
                },
                {
                    "value": "FBHS",
                    "label": "FBHS"
                },
                {
                    "value": "FBK",
                    "label": "FBK"
                },
                {
                    "value": "FBM",
                    "label": "FBM"
                },
                {
                    "value": "FBP",
                    "label": "FBP"
                },
                {
                    "value": "FC",
                    "label": "FC"
                },
                {
                    "value": "FCAU",
                    "label": "FCAU"
                },
                {
                    "value": "FCF",
                    "label": "FCF"
                },
                {
                    "value": "FCN",
                    "label": "FCN"
                },
                {
                    "value": "FCPT",
                    "label": "FCPT"
                },
                {
                    "value": "FCT",
                    "label": "FCT"
                },
                {
                    "value": "FCX",
                    "label": "FCX"
                },
                {
                    "value": "FDEU",
                    "label": "FDEU"
                },
                {
                    "value": "FDP",
                    "label": "FDP"
                },
                {
                    "value": "FDS",
                    "label": "FDS"
                },
                {
                    "value": "FDX",
                    "label": "FDX"
                },
                {
                    "value": "FE",
                    "label": "FE"
                },
                {
                    "value": "FEA.U",
                    "label": "FEA.U"
                },
                {
                    "value": "FEA.W",
                    "label": "FEA.W"
                },
                {
                    "value": "FEAC",
                    "label": "FEAC"
                },
                {
                    "value": "FEDU",
                    "label": "FEDU"
                },
                {
                    "value": "FEI",
                    "label": "FEI"
                },
                {
                    "value": "FENG",
                    "label": "FENG"
                },
                {
                    "value": "FEO",
                    "label": "FEO"
                },
                {
                    "value": "FET",
                    "label": "FET"
                },
                {
                    "value": "FF",
                    "label": "FF"
                },
                {
                    "value": "FFA",
                    "label": "FFA"
                },
                {
                    "value": "FFC",
                    "label": "FFC"
                },
                {
                    "value": "FFG",
                    "label": "FFG"
                },
                {
                    "value": "FG",
                    "label": "FG"
                },
                {
                    "value": "FG.W",
                    "label": "FG.W"
                },
                {
                    "value": "FGB",
                    "label": "FGB"
                },
                {
                    "value": "FHI",
                    "label": "FHI"
                },
                {
                    "value": "FHN",
                    "label": "FHN"
                },
                {
                    "value": "FHN-A",
                    "label": "FHN-A"
                },
                {
                    "value": "FHN-E",
                    "label": "FHN-E"
                },
                {
                    "value": "FI",
                    "label": "FI"
                },
                {
                    "value": "FICO",
                    "label": "FICO"
                },
                {
                    "value": "FIF",
                    "label": "FIF"
                },
                {
                    "value": "FINS",
                    "label": "FINS"
                },
                {
                    "value": "FINV",
                    "label": "FINV"
                },
                {
                    "value": "FIS",
                    "label": "FIS"
                },
                {
                    "value": "FIT",
                    "label": "FIT"
                },
                {
                    "value": "FIV",
                    "label": "FIV"
                },
                {
                    "value": "FIX",
                    "label": "FIX"
                },
                {
                    "value": "FL",
                    "label": "FL"
                },
                {
                    "value": "FLC",
                    "label": "FLC"
                },
                {
                    "value": "FLNG",
                    "label": "FLNG"
                },
                {
                    "value": "FLO",
                    "label": "FLO"
                },
                {
                    "value": "FLOW",
                    "label": "FLOW"
                },
                {
                    "value": "FLR",
                    "label": "FLR"
                },
                {
                    "value": "FLS",
                    "label": "FLS"
                },
                {
                    "value": "FLT",
                    "label": "FLT"
                },
                {
                    "value": "FLY",
                    "label": "FLY"
                },
                {
                    "value": "FMC",
                    "label": "FMC"
                },
                {
                    "value": "FMN",
                    "label": "FMN"
                },
                {
                    "value": "FMO",
                    "label": "FMO"
                },
                {
                    "value": "FMS",
                    "label": "FMS"
                },
                {
                    "value": "FMX",
                    "label": "FMX"
                },
                {
                    "value": "FMY",
                    "label": "FMY"
                },
                {
                    "value": "FN",
                    "label": "FN"
                },
                {
                    "value": "FNB",
                    "label": "FNB"
                },
                {
                    "value": "FNB-E",
                    "label": "FNB-E"
                },
                {
                    "value": "FND",
                    "label": "FND"
                },
                {
                    "value": "FNF",
                    "label": "FNF"
                },
                {
                    "value": "FNV",
                    "label": "FNV"
                },
                {
                    "value": "FOE",
                    "label": "FOE"
                },
                {
                    "value": "FOF",
                    "label": "FOF"
                },
                {
                    "value": "FOR",
                    "label": "FOR"
                },
                {
                    "value": "FOUR",
                    "label": "FOUR"
                },
                {
                    "value": "FPA.U",
                    "label": "FPA.U"
                },
                {
                    "value": "FPA.W",
                    "label": "FPA.W"
                },
                {
                    "value": "FPAC",
                    "label": "FPAC"
                },
                {
                    "value": "FPF",
                    "label": "FPF"
                },
                {
                    "value": "FPH",
                    "label": "FPH"
                },
                {
                    "value": "FPI",
                    "label": "FPI"
                },
                {
                    "value": "FPI-B",
                    "label": "FPI-B"
                },
                {
                    "value": "FPL",
                    "label": "FPL"
                },
                {
                    "value": "FR",
                    "label": "FR"
                },
                {
                    "value": "FRA",
                    "label": "FRA"
                },
                {
                    "value": "FRC",
                    "label": "FRC"
                },
                {
                    "value": "FRC-F",
                    "label": "FRC-F"
                },
                {
                    "value": "FRC-G",
                    "label": "FRC-G"
                },
                {
                    "value": "FRC-H",
                    "label": "FRC-H"
                },
                {
                    "value": "FRC-I",
                    "label": "FRC-I"
                },
                {
                    "value": "FRC-J",
                    "label": "FRC-J"
                },
                {
                    "value": "FRO",
                    "label": "FRO"
                },
                {
                    "value": "FRT",
                    "label": "FRT"
                },
                {
                    "value": "FRT-C",
                    "label": "FRT-C"
                },
                {
                    "value": "FSB",
                    "label": "FSB"
                },
                {
                    "value": "FSD",
                    "label": "FSD"
                },
                {
                    "value": "FSK",
                    "label": "FSK"
                },
                {
                    "value": "FSKR",
                    "label": "FSKR"
                },
                {
                    "value": "FSLF",
                    "label": "FSLF"
                },
                {
                    "value": "FSLY",
                    "label": "FSLY"
                },
                {
                    "value": "FSM",
                    "label": "FSM"
                },
                {
                    "value": "FSS",
                    "label": "FSS"
                },
                {
                    "value": "FT",
                    "label": "FT"
                },
                {
                    "value": "FTA-A",
                    "label": "FTA-A"
                },
                {
                    "value": "FTA-B",
                    "label": "FTA-B"
                },
                {
                    "value": "FTAI",
                    "label": "FTAI"
                },
                {
                    "value": "FTCH",
                    "label": "FTCH"
                },
                {
                    "value": "FTI",
                    "label": "FTI"
                },
                {
                    "value": "FTK",
                    "label": "FTK"
                },
                {
                    "value": "FTS",
                    "label": "FTS"
                },
                {
                    "value": "FTV",
                    "label": "FTV"
                },
                {
                    "value": "FTV-A",
                    "label": "FTV-A"
                },
                {
                    "value": "FUL",
                    "label": "FUL"
                },
                {
                    "value": "FUN",
                    "label": "FUN"
                },
                {
                    "value": "FVA.U",
                    "label": "FVA.U"
                },
                {
                    "value": "FVAC",
                    "label": "FVAC"
                },
                {
                    "value": "FVRR",
                    "label": "FVRR"
                },
                {
                    "value": "G",
                    "label": "G"
                },
                {
                    "value": "GAB",
                    "label": "GAB"
                },
                {
                    "value": "GAB-G",
                    "label": "GAB-G"
                },
                {
                    "value": "GAB-H",
                    "label": "GAB-H"
                },
                {
                    "value": "GAB-J",
                    "label": "GAB-J"
                },
                {
                    "value": "GAB-K",
                    "label": "GAB-K"
                },
                {
                    "value": "GAM",
                    "label": "GAM"
                },
                {
                    "value": "GAM-B",
                    "label": "GAM-B"
                },
                {
                    "value": "GATX",
                    "label": "GATX"
                },
                {
                    "value": "GBAB",
                    "label": "GBAB"
                },
                {
                    "value": "GBL",
                    "label": "GBL"
                },
                {
                    "value": "GBX",
                    "label": "GBX"
                },
                {
                    "value": "GCAP",
                    "label": "GCAP"
                },
                {
                    "value": "GCI",
                    "label": "GCI"
                },
                {
                    "value": "GCO",
                    "label": "GCO"
                },
                {
                    "value": "GCP",
                    "label": "GCP"
                },
                {
                    "value": "GCV",
                    "label": "GCV"
                },
                {
                    "value": "GD",
                    "label": "GD"
                },
                {
                    "value": "GDDY",
                    "label": "GDDY"
                },
                {
                    "value": "GDL",
                    "label": "GDL"
                },
                {
                    "value": "GDL-C",
                    "label": "GDL-C"
                },
                {
                    "value": "GDO",
                    "label": "GDO"
                },
                {
                    "value": "GDOT",
                    "label": "GDOT"
                },
                {
                    "value": "GDV",
                    "label": "GDV"
                },
                {
                    "value": "GDV-A",
                    "label": "GDV-A"
                },
                {
                    "value": "GDV-G",
                    "label": "GDV-G"
                },
                {
                    "value": "GDV-H",
                    "label": "GDV-H"
                },
                {
                    "value": "GE",
                    "label": "GE"
                },
                {
                    "value": "GEF",
                    "label": "GEF"
                },
                {
                    "value": "GEF.B",
                    "label": "GEF.B"
                },
                {
                    "value": "GEL",
                    "label": "GEL"
                },
                {
                    "value": "GEN",
                    "label": "GEN"
                },
                {
                    "value": "GEO",
                    "label": "GEO"
                },
                {
                    "value": "GER",
                    "label": "GER"
                },
                {
                    "value": "GES",
                    "label": "GES"
                },
                {
                    "value": "GF",
                    "label": "GF"
                },
                {
                    "value": "GFF",
                    "label": "GFF"
                },
                {
                    "value": "GFI",
                    "label": "GFI"
                },
                {
                    "value": "GFL",
                    "label": "GFL"
                },
                {
                    "value": "GFLU",
                    "label": "GFLU"
                },
                {
                    "value": "GFY",
                    "label": "GFY"
                },
                {
                    "value": "GGB",
                    "label": "GGB"
                },
                {
                    "value": "GGG",
                    "label": "GGG"
                },
                {
                    "value": "GGM",
                    "label": "GGM"
                },
                {
                    "value": "GGT",
                    "label": "GGT"
                },
                {
                    "value": "GGT-E",
                    "label": "GGT-E"
                },
                {
                    "value": "GGT-G",
                    "label": "GGT-G"
                },
                {
                    "value": "GGZ",
                    "label": "GGZ"
                },
                {
                    "value": "GGZ-A",
                    "label": "GGZ-A"
                },
                {
                    "value": "GHC",
                    "label": "GHC"
                },
                {
                    "value": "GHG",
                    "label": "GHG"
                },
                {
                    "value": "GHL",
                    "label": "GHL"
                },
                {
                    "value": "GHM",
                    "label": "GHM"
                },
                {
                    "value": "GHY",
                    "label": "GHY"
                },
                {
                    "value": "GIB",
                    "label": "GIB"
                },
                {
                    "value": "GIK.U",
                    "label": "GIK.U"
                },
                {
                    "value": "GIL",
                    "label": "GIL"
                },
                {
                    "value": "GIM",
                    "label": "GIM"
                },
                {
                    "value": "GIS",
                    "label": "GIS"
                },
                {
                    "value": "GIX",
                    "label": "GIX"
                },
                {
                    "value": "GIX.P",
                    "label": "GIX.P"
                },
                {
                    "value": "GIX.U",
                    "label": "GIX.U"
                },
                {
                    "value": "GIX.W",
                    "label": "GIX.W"
                },
                {
                    "value": "GJH",
                    "label": "GJH"
                },
                {
                    "value": "GJO",
                    "label": "GJO"
                },
                {
                    "value": "GJP",
                    "label": "GJP"
                },
                {
                    "value": "GJR",
                    "label": "GJR"
                },
                {
                    "value": "GJS",
                    "label": "GJS"
                },
                {
                    "value": "GJT",
                    "label": "GJT"
                },
                {
                    "value": "GKOS",
                    "label": "GKOS"
                },
                {
                    "value": "GL",
                    "label": "GL"
                },
                {
                    "value": "GL-C",
                    "label": "GL-C"
                },
                {
                    "value": "GLE.U",
                    "label": "GLE.U"
                },
                {
                    "value": "GLE.W",
                    "label": "GLE.W"
                },
                {
                    "value": "GLEO",
                    "label": "GLEO"
                },
                {
                    "value": "GLO-A",
                    "label": "GLO-A"
                },
                {
                    "value": "GLO-B",
                    "label": "GLO-B"
                },
                {
                    "value": "GLO-C",
                    "label": "GLO-C"
                },
                {
                    "value": "GLO-G",
                    "label": "GLO-G"
                },
                {
                    "value": "GLOB",
                    "label": "GLOB"
                },
                {
                    "value": "GLOG",
                    "label": "GLOG"
                },
                {
                    "value": "GLOP",
                    "label": "GLOP"
                },
                {
                    "value": "GLP",
                    "label": "GLP"
                },
                {
                    "value": "GLP-A",
                    "label": "GLP-A"
                },
                {
                    "value": "GLT",
                    "label": "GLT"
                },
                {
                    "value": "GLW",
                    "label": "GLW"
                },
                {
                    "value": "GM",
                    "label": "GM"
                },
                {
                    "value": "GME",
                    "label": "GME"
                },
                {
                    "value": "GMED",
                    "label": "GMED"
                },
                {
                    "value": "GMR-A",
                    "label": "GMR-A"
                },
                {
                    "value": "GMRE",
                    "label": "GMRE"
                },
                {
                    "value": "GMS",
                    "label": "GMS"
                },
                {
                    "value": "GMTA",
                    "label": "GMTA"
                },
                {
                    "value": "GMZ",
                    "label": "GMZ"
                },
                {
                    "value": "GNC",
                    "label": "GNC"
                },
                {
                    "value": "GNE",
                    "label": "GNE"
                },
                {
                    "value": "GNE-A",
                    "label": "GNE-A"
                },
                {
                    "value": "GNK",
                    "label": "GNK"
                },
                {
                    "value": "GNL",
                    "label": "GNL"
                },
                {
                    "value": "GNL-A",
                    "label": "GNL-A"
                },
                {
                    "value": "GNL-B",
                    "label": "GNL-B"
                },
                {
                    "value": "GNRC",
                    "label": "GNRC"
                },
                {
                    "value": "GNT",
                    "label": "GNT"
                },
                {
                    "value": "GNT-A",
                    "label": "GNT-A"
                },
                {
                    "value": "GNW",
                    "label": "GNW"
                },
                {
                    "value": "GOF",
                    "label": "GOF"
                },
                {
                    "value": "GOL",
                    "label": "GOL"
                },
                {
                    "value": "GOLD",
                    "label": "GOLD"
                },
                {
                    "value": "GOLF",
                    "label": "GOLF"
                },
                {
                    "value": "GOOS",
                    "label": "GOOS"
                },
                {
                    "value": "GPC",
                    "label": "GPC"
                },
                {
                    "value": "GPI",
                    "label": "GPI"
                },
                {
                    "value": "GPJA",
                    "label": "GPJA"
                },
                {
                    "value": "GPK",
                    "label": "GPK"
                },
                {
                    "value": "GPM",
                    "label": "GPM"
                },
                {
                    "value": "GPMT",
                    "label": "GPMT"
                },
                {
                    "value": "GPN",
                    "label": "GPN"
                },
                {
                    "value": "GPRK",
                    "label": "GPRK"
                },
                {
                    "value": "GPS",
                    "label": "GPS"
                },
                {
                    "value": "GPX",
                    "label": "GPX"
                },
                {
                    "value": "GRA",
                    "label": "GRA"
                },
                {
                    "value": "GRA.U",
                    "label": "GRA.U"
                },
                {
                    "value": "GRA.W",
                    "label": "GRA.W"
                },
                {
                    "value": "GRAF",
                    "label": "GRAF"
                },
                {
                    "value": "GRAM",
                    "label": "GRAM"
                },
                {
                    "value": "GRC",
                    "label": "GRC"
                },
                {
                    "value": "GRP.U",
                    "label": "GRP.U"
                },
                {
                    "value": "GRUB",
                    "label": "GRUB"
                },
                {
                    "value": "GRX",
                    "label": "GRX"
                },
                {
                    "value": "GRX-B",
                    "label": "GRX-B"
                },
                {
                    "value": "GS",
                    "label": "GS"
                },
                {
                    "value": "GS-A",
                    "label": "GS-A"
                },
                {
                    "value": "GS-C",
                    "label": "GS-C"
                },
                {
                    "value": "GS-D",
                    "label": "GS-D"
                },
                {
                    "value": "GS-J",
                    "label": "GS-J"
                },
                {
                    "value": "GS-K",
                    "label": "GS-K"
                },
                {
                    "value": "GS-N",
                    "label": "GS-N"
                },
                {
                    "value": "GSBD",
                    "label": "GSBD"
                },
                {
                    "value": "GSH",
                    "label": "GSH"
                },
                {
                    "value": "GSK",
                    "label": "GSK"
                },
                {
                    "value": "GSL",
                    "label": "GSL"
                },
                {
                    "value": "GSL-B",
                    "label": "GSL-B"
                },
                {
                    "value": "GSLD",
                    "label": "GSLD"
                },
                {
                    "value": "GSX",
                    "label": "GSX"
                },
                {
                    "value": "GTES",
                    "label": "GTES"
                },
                {
                    "value": "GTN",
                    "label": "GTN"
                },
                {
                    "value": "GTN.A",
                    "label": "GTN.A"
                },
                {
                    "value": "GTS",
                    "label": "GTS"
                },
                {
                    "value": "GTT",
                    "label": "GTT"
                },
                {
                    "value": "GTX",
                    "label": "GTX"
                },
                {
                    "value": "GTY",
                    "label": "GTY"
                },
                {
                    "value": "GUT",
                    "label": "GUT"
                },
                {
                    "value": "GUT-A",
                    "label": "GUT-A"
                },
                {
                    "value": "GUT-C",
                    "label": "GUT-C"
                },
                {
                    "value": "GVA",
                    "label": "GVA"
                },
                {
                    "value": "GWB",
                    "label": "GWB"
                },
                {
                    "value": "GWRE",
                    "label": "GWRE"
                },
                {
                    "value": "GWW",
                    "label": "GWW"
                },
                {
                    "value": "GYC",
                    "label": "GYC"
                },
                {
                    "value": "H",
                    "label": "H"
                },
                {
                    "value": "HAE",
                    "label": "HAE"
                },
                {
                    "value": "HAL",
                    "label": "HAL"
                },
                {
                    "value": "HASI",
                    "label": "HASI"
                },
                {
                    "value": "HBB",
                    "label": "HBB"
                },
                {
                    "value": "HBI",
                    "label": "HBI"
                },
                {
                    "value": "HBM",
                    "label": "HBM"
                },
                {
                    "value": "HCA",
                    "label": "HCA"
                },
                {
                    "value": "HCC",
                    "label": "HCC"
                },
                {
                    "value": "HCFT",
                    "label": "HCFT"
                },
                {
                    "value": "HCHC",
                    "label": "HCHC"
                },
                {
                    "value": "HCI",
                    "label": "HCI"
                },
                {
                    "value": "HCR",
                    "label": "HCR"
                },
                {
                    "value": "HCXY",
                    "label": "HCXY"
                },
                {
                    "value": "HCXZ",
                    "label": "HCXZ"
                },
                {
                    "value": "HD",
                    "label": "HD"
                },
                {
                    "value": "HDB",
                    "label": "HDB"
                },
                {
                    "value": "HE",
                    "label": "HE"
                },
                {
                    "value": "HEI",
                    "label": "HEI"
                },
                {
                    "value": "HEI.A",
                    "label": "HEI.A"
                },
                {
                    "value": "HEP",
                    "label": "HEP"
                },
                {
                    "value": "HEQ",
                    "label": "HEQ"
                },
                {
                    "value": "HES",
                    "label": "HES"
                },
                {
                    "value": "HESM",
                    "label": "HESM"
                },
                {
                    "value": "HEXO",
                    "label": "HEXO"
                },
                {
                    "value": "HFC",
                    "label": "HFC"
                },
                {
                    "value": "HFR-A",
                    "label": "HFR-A"
                },
                {
                    "value": "HFRO",
                    "label": "HFRO"
                },
                {
                    "value": "HGH",
                    "label": "HGH"
                },
                {
                    "value": "HGLB",
                    "label": "HGLB"
                },
                {
                    "value": "HGV",
                    "label": "HGV"
                },
                {
                    "value": "HHC",
                    "label": "HHC"
                },
                {
                    "value": "HHS",
                    "label": "HHS"
                },
                {
                    "value": "HI",
                    "label": "HI"
                },
                {
                    "value": "HIE",
                    "label": "HIE"
                },
                {
                    "value": "HIG",
                    "label": "HIG"
                },
                {
                    "value": "HIG-G",
                    "label": "HIG-G"
                },
                {
                    "value": "HII",
                    "label": "HII"
                },
                {
                    "value": "HIL",
                    "label": "HIL"
                },
                {
                    "value": "HIO",
                    "label": "HIO"
                },
                {
                    "value": "HIW",
                    "label": "HIW"
                },
                {
                    "value": "HIX",
                    "label": "HIX"
                },
                {
                    "value": "HKIB",
                    "label": "HKIB"
                },
                {
                    "value": "HL",
                    "label": "HL"
                },
                {
                    "value": "HL-B",
                    "label": "HL-B"
                },
                {
                    "value": "HLF",
                    "label": "HLF"
                },
                {
                    "value": "HLI",
                    "label": "HLI"
                },
                {
                    "value": "HLT",
                    "label": "HLT"
                },
                {
                    "value": "HLX",
                    "label": "HLX"
                },
                {
                    "value": "HMC",
                    "label": "HMC"
                },
                {
                    "value": "HMI",
                    "label": "HMI"
                },
                {
                    "value": "HML-A",
                    "label": "HML-A"
                },
                {
                    "value": "HMLP",
                    "label": "HMLP"
                },
                {
                    "value": "HMN",
                    "label": "HMN"
                },
                {
                    "value": "HMY",
                    "label": "HMY"
                },
                {
                    "value": "HNGR",
                    "label": "HNGR"
                },
                {
                    "value": "HNI",
                    "label": "HNI"
                },
                {
                    "value": "HNP",
                    "label": "HNP"
                },
                {
                    "value": "HOG",
                    "label": "HOG"
                },
                {
                    "value": "HOME",
                    "label": "HOME"
                },
                {
                    "value": "HON",
                    "label": "HON"
                },
                {
                    "value": "HOV",
                    "label": "HOV"
                },
                {
                    "value": "HP",
                    "label": "HP"
                },
                {
                    "value": "HPE",
                    "label": "HPE"
                },
                {
                    "value": "HPF",
                    "label": "HPF"
                },
                {
                    "value": "HPI",
                    "label": "HPI"
                },
                {
                    "value": "HPP",
                    "label": "HPP"
                },
                {
                    "value": "HPQ",
                    "label": "HPQ"
                },
                {
                    "value": "HPR",
                    "label": "HPR"
                },
                {
                    "value": "HPS",
                    "label": "HPS"
                },
                {
                    "value": "HQH",
                    "label": "HQH"
                },
                {
                    "value": "HQL",
                    "label": "HQL"
                },
                {
                    "value": "HR",
                    "label": "HR"
                },
                {
                    "value": "HRB",
                    "label": "HRB"
                },
                {
                    "value": "HRC",
                    "label": "HRC"
                },
                {
                    "value": "HRI",
                    "label": "HRI"
                },
                {
                    "value": "HRL",
                    "label": "HRL"
                },
                {
                    "value": "HRTG",
                    "label": "HRTG"
                },
                {
                    "value": "HSB-A",
                    "label": "HSB-A"
                },
                {
                    "value": "HSBC",
                    "label": "HSBC"
                },
                {
                    "value": "HSC",
                    "label": "HSC"
                },
                {
                    "value": "HST",
                    "label": "HST"
                },
                {
                    "value": "HSY",
                    "label": "HSY"
                },
                {
                    "value": "HT",
                    "label": "HT"
                },
                {
                    "value": "HT-C",
                    "label": "HT-C"
                },
                {
                    "value": "HT-D",
                    "label": "HT-D"
                },
                {
                    "value": "HT-E",
                    "label": "HT-E"
                },
                {
                    "value": "HTA",
                    "label": "HTA"
                },
                {
                    "value": "HTD",
                    "label": "HTD"
                },
                {
                    "value": "HTFA",
                    "label": "HTFA"
                },
                {
                    "value": "HTGC",
                    "label": "HTGC"
                },
                {
                    "value": "HTH",
                    "label": "HTH"
                },
                {
                    "value": "HTY",
                    "label": "HTY"
                },
                {
                    "value": "HTZ",
                    "label": "HTZ"
                },
                {
                    "value": "HUBB",
                    "label": "HUBB"
                },
                {
                    "value": "HUBS",
                    "label": "HUBS"
                },
                {
                    "value": "HUD",
                    "label": "HUD"
                },
                {
                    "value": "HUM",
                    "label": "HUM"
                },
                {
                    "value": "HUN",
                    "label": "HUN"
                },
                {
                    "value": "HUYA",
                    "label": "HUYA"
                },
                {
                    "value": "HVT",
                    "label": "HVT"
                },
                {
                    "value": "HVT.A",
                    "label": "HVT.A"
                },
                {
                    "value": "HWM",
                    "label": "HWM"
                },
                {
                    "value": "HXL",
                    "label": "HXL"
                },
                {
                    "value": "HY",
                    "label": "HY"
                },
                {
                    "value": "HYB",
                    "label": "HYB"
                },
                {
                    "value": "HYI",
                    "label": "HYI"
                },
                {
                    "value": "HYT",
                    "label": "HYT"
                },
                {
                    "value": "HZN",
                    "label": "HZN"
                },
                {
                    "value": "HZO",
                    "label": "HZO"
                },
                {
                    "value": "IAA",
                    "label": "IAA"
                },
                {
                    "value": "IAE",
                    "label": "IAE"
                },
                {
                    "value": "IAG",
                    "label": "IAG"
                },
                {
                    "value": "IBA",
                    "label": "IBA"
                },
                {
                    "value": "IBM",
                    "label": "IBM"
                },
                {
                    "value": "IBN",
                    "label": "IBN"
                },
                {
                    "value": "IBP",
                    "label": "IBP"
                },
                {
                    "value": "ICD",
                    "label": "ICD"
                },
                {
                    "value": "ICE",
                    "label": "ICE"
                },
                {
                    "value": "ICL",
                    "label": "ICL"
                },
                {
                    "value": "IDA",
                    "label": "IDA"
                },
                {
                    "value": "IDE",
                    "label": "IDE"
                },
                {
                    "value": "IDT",
                    "label": "IDT"
                },
                {
                    "value": "IEX",
                    "label": "IEX"
                },
                {
                    "value": "IFF",
                    "label": "IFF"
                },
                {
                    "value": "IFFT",
                    "label": "IFFT"
                },
                {
                    "value": "IFN",
                    "label": "IFN"
                },
                {
                    "value": "IFS",
                    "label": "IFS"
                },
                {
                    "value": "IGA",
                    "label": "IGA"
                },
                {
                    "value": "IGD",
                    "label": "IGD"
                },
                {
                    "value": "IGI",
                    "label": "IGI"
                },
                {
                    "value": "IGR",
                    "label": "IGR"
                },
                {
                    "value": "IGT",
                    "label": "IGT"
                },
                {
                    "value": "IHC",
                    "label": "IHC"
                },
                {
                    "value": "IHD",
                    "label": "IHD"
                },
                {
                    "value": "IHG",
                    "label": "IHG"
                },
                {
                    "value": "IHIT",
                    "label": "IHIT"
                },
                {
                    "value": "IHTA",
                    "label": "IHTA"
                },
                {
                    "value": "IID",
                    "label": "IID"
                },
                {
                    "value": "IIF",
                    "label": "IIF"
                },
                {
                    "value": "IIM",
                    "label": "IIM"
                },
                {
                    "value": "IIP-A",
                    "label": "IIP-A"
                },
                {
                    "value": "IIPR",
                    "label": "IIPR"
                },
                {
                    "value": "IMAX",
                    "label": "IMAX"
                },
                {
                    "value": "INFO",
                    "label": "INFO"
                },
                {
                    "value": "INFY",
                    "label": "INFY"
                },
                {
                    "value": "ING",
                    "label": "ING"
                },
                {
                    "value": "INGR",
                    "label": "INGR"
                },
                {
                    "value": "INN",
                    "label": "INN"
                },
                {
                    "value": "INN-D",
                    "label": "INN-D"
                },
                {
                    "value": "INN-E",
                    "label": "INN-E"
                },
                {
                    "value": "INS-A",
                    "label": "INS-A"
                },
                {
                    "value": "INSI",
                    "label": "INSI"
                },
                {
                    "value": "INSP",
                    "label": "INSP"
                },
                {
                    "value": "INSW",
                    "label": "INSW"
                },
                {
                    "value": "INT",
                    "label": "INT"
                },
                {
                    "value": "INVH",
                    "label": "INVH"
                },
                {
                    "value": "IO",
                    "label": "IO"
                },
                {
                    "value": "IP",
                    "label": "IP"
                },
                {
                    "value": "IPG",
                    "label": "IPG"
                },
                {
                    "value": "IPHI",
                    "label": "IPHI"
                },
                {
                    "value": "IPI",
                    "label": "IPI"
                },
                {
                    "value": "IPO.U",
                    "label": "IPO.U"
                },
                {
                    "value": "IPO.W",
                    "label": "IPO.W"
                },
                {
                    "value": "IPOB",
                    "label": "IPOB"
                },
                {
                    "value": "IPOC",
                    "label": "IPOC"
                },
                {
                    "value": "IPV",
                    "label": "IPV"
                },
                {
                    "value": "IPV.U",
                    "label": "IPV.U"
                },
                {
                    "value": "IPV.W",
                    "label": "IPV.W"
                },
                {
                    "value": "IQI",
                    "label": "IQI"
                },
                {
                    "value": "IQV",
                    "label": "IQV"
                },
                {
                    "value": "IR",
                    "label": "IR"
                },
                {
                    "value": "IRE-C",
                    "label": "IRE-C"
                },
                {
                    "value": "IRET",
                    "label": "IRET"
                },
                {
                    "value": "IRL",
                    "label": "IRL"
                },
                {
                    "value": "IRM",
                    "label": "IRM"
                },
                {
                    "value": "IRR",
                    "label": "IRR"
                },
                {
                    "value": "IRS",
                    "label": "IRS"
                },
                {
                    "value": "IRT",
                    "label": "IRT"
                },
                {
                    "value": "ISD",
                    "label": "ISD"
                },
                {
                    "value": "IT",
                    "label": "IT"
                },
                {
                    "value": "ITCB",
                    "label": "ITCB"
                },
                {
                    "value": "ITGR",
                    "label": "ITGR"
                },
                {
                    "value": "ITT",
                    "label": "ITT"
                },
                {
                    "value": "ITUB",
                    "label": "ITUB"
                },
                {
                    "value": "ITW",
                    "label": "ITW"
                },
                {
                    "value": "IVC",
                    "label": "IVC"
                },
                {
                    "value": "IVH",
                    "label": "IVH"
                },
                {
                    "value": "IVR",
                    "label": "IVR"
                },
                {
                    "value": "IVR-A",
                    "label": "IVR-A"
                },
                {
                    "value": "IVR-B",
                    "label": "IVR-B"
                },
                {
                    "value": "IVR-C",
                    "label": "IVR-C"
                },
                {
                    "value": "IVZ",
                    "label": "IVZ"
                },
                {
                    "value": "IX",
                    "label": "IX"
                },
                {
                    "value": "J",
                    "label": "J"
                },
                {
                    "value": "JAX",
                    "label": "JAX"
                },
                {
                    "value": "JBGS",
                    "label": "JBGS"
                },
                {
                    "value": "JBK",
                    "label": "JBK"
                },
                {
                    "value": "JBL",
                    "label": "JBL"
                },
                {
                    "value": "JBT",
                    "label": "JBT"
                },
                {
                    "value": "JCA-B",
                    "label": "JCA-B"
                },
                {
                    "value": "JCAP",
                    "label": "JCAP"
                },
                {
                    "value": "JCE",
                    "label": "JCE"
                },
                {
                    "value": "JCI",
                    "label": "JCI"
                },
                {
                    "value": "JCO",
                    "label": "JCO"
                },
                {
                    "value": "JDD",
                    "label": "JDD"
                },
                {
                    "value": "JE",
                    "label": "JE"
                },
                {
                    "value": "JE-A",
                    "label": "JE-A"
                },
                {
                    "value": "JEF",
                    "label": "JEF"
                },
                {
                    "value": "JELD",
                    "label": "JELD"
                },
                {
                    "value": "JEMD",
                    "label": "JEMD"
                },
                {
                    "value": "JEQ",
                    "label": "JEQ"
                },
                {
                    "value": "JFR",
                    "label": "JFR"
                },
                {
                    "value": "JGH",
                    "label": "JGH"
                },
                {
                    "value": "JHAA",
                    "label": "JHAA"
                },
                {
                    "value": "JHB",
                    "label": "JHB"
                },
                {
                    "value": "JHG",
                    "label": "JHG"
                },
                {
                    "value": "JHI",
                    "label": "JHI"
                },
                {
                    "value": "JHS",
                    "label": "JHS"
                },
                {
                    "value": "JHX",
                    "label": "JHX"
                },
                {
                    "value": "JHY",
                    "label": "JHY"
                },
                {
                    "value": "JIH",
                    "label": "JIH"
                },
                {
                    "value": "JIH.U",
                    "label": "JIH.U"
                },
                {
                    "value": "JIH.W",
                    "label": "JIH.W"
                },
                {
                    "value": "JILL",
                    "label": "JILL"
                },
                {
                    "value": "JKS",
                    "label": "JKS"
                },
                {
                    "value": "JLL",
                    "label": "JLL"
                },
                {
                    "value": "JLS",
                    "label": "JLS"
                },
                {
                    "value": "JMIA",
                    "label": "JMIA"
                },
                {
                    "value": "JMM",
                    "label": "JMM"
                },
                {
                    "value": "JMP",
                    "label": "JMP"
                },
                {
                    "value": "JNJ",
                    "label": "JNJ"
                },
                {
                    "value": "JNPR",
                    "label": "JNPR"
                },
                {
                    "value": "JOE",
                    "label": "JOE"
                },
                {
                    "value": "JOF",
                    "label": "JOF"
                },
                {
                    "value": "JP",
                    "label": "JP"
                },
                {
                    "value": "JPC",
                    "label": "JPC"
                },
                {
                    "value": "JPI",
                    "label": "JPI"
                },
                {
                    "value": "JPM",
                    "label": "JPM"
                },
                {
                    "value": "JPM-C",
                    "label": "JPM-C"
                },
                {
                    "value": "JPM-D",
                    "label": "JPM-D"
                },
                {
                    "value": "JPM-G",
                    "label": "JPM-G"
                },
                {
                    "value": "JPM-H",
                    "label": "JPM-H"
                },
                {
                    "value": "JPM-J",
                    "label": "JPM-J"
                },
                {
                    "value": "JPS",
                    "label": "JPS"
                },
                {
                    "value": "JPT",
                    "label": "JPT"
                },
                {
                    "value": "JQC",
                    "label": "JQC"
                },
                {
                    "value": "JRI",
                    "label": "JRI"
                },
                {
                    "value": "JRO",
                    "label": "JRO"
                },
                {
                    "value": "JRS",
                    "label": "JRS"
                },
                {
                    "value": "JSD",
                    "label": "JSD"
                },
                {
                    "value": "JT",
                    "label": "JT"
                },
                {
                    "value": "JTA",
                    "label": "JTA"
                },
                {
                    "value": "JTD",
                    "label": "JTD"
                },
                {
                    "value": "JW.A",
                    "label": "JW.A"
                },
                {
                    "value": "JW.B",
                    "label": "JW.B"
                },
                {
                    "value": "JWN",
                    "label": "JWN"
                },
                {
                    "value": "JWS.U",
                    "label": "JWS.U"
                },
                {
                    "value": "K",
                    "label": "K"
                },
                {
                    "value": "KAI",
                    "label": "KAI"
                },
                {
                    "value": "KAMN",
                    "label": "KAMN"
                },
                {
                    "value": "KAR",
                    "label": "KAR"
                },
                {
                    "value": "KB",
                    "label": "KB"
                },
                {
                    "value": "KBH",
                    "label": "KBH"
                },
                {
                    "value": "KBR",
                    "label": "KBR"
                },
                {
                    "value": "KDMN",
                    "label": "KDMN"
                },
                {
                    "value": "KDP",
                    "label": "KDP"
                },
                {
                    "value": "KEM",
                    "label": "KEM"
                },
                {
                    "value": "KEN",
                    "label": "KEN"
                },
                {
                    "value": "KEP",
                    "label": "KEP"
                },
                {
                    "value": "KEX",
                    "label": "KEX"
                },
                {
                    "value": "KEY",
                    "label": "KEY"
                },
                {
                    "value": "KEY-I",
                    "label": "KEY-I"
                },
                {
                    "value": "KEY-J",
                    "label": "KEY-J"
                },
                {
                    "value": "KEY-K",
                    "label": "KEY-K"
                },
                {
                    "value": "KEYS",
                    "label": "KEYS"
                },
                {
                    "value": "KF",
                    "label": "KF"
                },
                {
                    "value": "KFS",
                    "label": "KFS"
                },
                {
                    "value": "KFY",
                    "label": "KFY"
                },
                {
                    "value": "KGC",
                    "label": "KGC"
                },
                {
                    "value": "KIM",
                    "label": "KIM"
                },
                {
                    "value": "KIM-L",
                    "label": "KIM-L"
                },
                {
                    "value": "KIM-M",
                    "label": "KIM-M"
                },
                {
                    "value": "KIO",
                    "label": "KIO"
                },
                {
                    "value": "KKR",
                    "label": "KKR"
                },
                {
                    "value": "KKR-A",
                    "label": "KKR-A"
                },
                {
                    "value": "KKR-B",
                    "label": "KKR-B"
                },
                {
                    "value": "KL",
                    "label": "KL"
                },
                {
                    "value": "KMB",
                    "label": "KMB"
                },
                {
                    "value": "KMF",
                    "label": "KMF"
                },
                {
                    "value": "KMI",
                    "label": "KMI"
                },
                {
                    "value": "KMPR",
                    "label": "KMPR"
                },
                {
                    "value": "KMT",
                    "label": "KMT"
                },
                {
                    "value": "KMX",
                    "label": "KMX"
                },
                {
                    "value": "KN",
                    "label": "KN"
                },
                {
                    "value": "KNL",
                    "label": "KNL"
                },
                {
                    "value": "KNOP",
                    "label": "KNOP"
                },
                {
                    "value": "KNX",
                    "label": "KNX"
                },
                {
                    "value": "KO",
                    "label": "KO"
                },
                {
                    "value": "KODK",
                    "label": "KODK"
                },
                {
                    "value": "KOF",
                    "label": "KOF"
                },
                {
                    "value": "KOP",
                    "label": "KOP"
                },
                {
                    "value": "KOS",
                    "label": "KOS"
                },
                {
                    "value": "KR",
                    "label": "KR"
                },
                {
                    "value": "KRA",
                    "label": "KRA"
                },
                {
                    "value": "KRC",
                    "label": "KRC"
                },
                {
                    "value": "KREF",
                    "label": "KREF"
                },
                {
                    "value": "KRG",
                    "label": "KRG"
                },
                {
                    "value": "KRO",
                    "label": "KRO"
                },
                {
                    "value": "KRP",
                    "label": "KRP"
                },
                {
                    "value": "KSM",
                    "label": "KSM"
                },
                {
                    "value": "KSS",
                    "label": "KSS"
                },
                {
                    "value": "KSU",
                    "label": "KSU"
                },
                {
                    "value": "KSU.P",
                    "label": "KSU.P"
                },
                {
                    "value": "KT",
                    "label": "KT"
                },
                {
                    "value": "KTB",
                    "label": "KTB"
                },
                {
                    "value": "KTF",
                    "label": "KTF"
                },
                {
                    "value": "KTH",
                    "label": "KTH"
                },
                {
                    "value": "KTN",
                    "label": "KTN"
                },
                {
                    "value": "KW",
                    "label": "KW"
                },
                {
                    "value": "KWR",
                    "label": "KWR"
                },
                {
                    "value": "KYN",
                    "label": "KYN"
                },
                {
                    "value": "L",
                    "label": "L"
                },
                {
                    "value": "LAC",
                    "label": "LAC"
                },
                {
                    "value": "LAD",
                    "label": "LAD"
                },
                {
                    "value": "LADR",
                    "label": "LADR"
                },
                {
                    "value": "LAIX",
                    "label": "LAIX"
                },
                {
                    "value": "LAZ",
                    "label": "LAZ"
                },
                {
                    "value": "LB",
                    "label": "LB"
                },
                {
                    "value": "LBRT",
                    "label": "LBRT"
                },
                {
                    "value": "LC",
                    "label": "LC"
                },
                {
                    "value": "LCI",
                    "label": "LCI"
                },
                {
                    "value": "LCII",
                    "label": "LCII"
                },
                {
                    "value": "LDL",
                    "label": "LDL"
                },
                {
                    "value": "LDOS",
                    "label": "LDOS"
                },
                {
                    "value": "LDP",
                    "label": "LDP"
                },
                {
                    "value": "LEA",
                    "label": "LEA"
                },
                {
                    "value": "LEAF",
                    "label": "LEAF"
                },
                {
                    "value": "LEE",
                    "label": "LEE"
                },
                {
                    "value": "LEG",
                    "label": "LEG"
                },
                {
                    "value": "LEJU",
                    "label": "LEJU"
                },
                {
                    "value": "LEN",
                    "label": "LEN"
                },
                {
                    "value": "LEN.B",
                    "label": "LEN.B"
                },
                {
                    "value": "LEO",
                    "label": "LEO"
                },
                {
                    "value": "LEVI",
                    "label": "LEVI"
                },
                {
                    "value": "LFC",
                    "label": "LFC"
                },
                {
                    "value": "LGC",
                    "label": "LGC"
                },
                {
                    "value": "LGC.U",
                    "label": "LGC.U"
                },
                {
                    "value": "LGC.W",
                    "label": "LGC.W"
                },
                {
                    "value": "LGF.A",
                    "label": "LGF.A"
                },
                {
                    "value": "LGF.B",
                    "label": "LGF.B"
                },
                {
                    "value": "LGI",
                    "label": "LGI"
                },
                {
                    "value": "LGV.U",
                    "label": "LGV.U"
                },
                {
                    "value": "LH",
                    "label": "LH"
                },
                {
                    "value": "LHC",
                    "label": "LHC"
                },
                {
                    "value": "LHC.U",
                    "label": "LHC.U"
                },
                {
                    "value": "LHC.W",
                    "label": "LHC.W"
                },
                {
                    "value": "LHX",
                    "label": "LHX"
                },
                {
                    "value": "LII",
                    "label": "LII"
                },
                {
                    "value": "LIN",
                    "label": "LIN"
                },
                {
                    "value": "LINX",
                    "label": "LINX"
                },
                {
                    "value": "LITB",
                    "label": "LITB"
                },
                {
                    "value": "LL",
                    "label": "LL"
                },
                {
                    "value": "LLY",
                    "label": "LLY"
                },
                {
                    "value": "LM",
                    "label": "LM"
                },
                {
                    "value": "LMHA",
                    "label": "LMHA"
                },
                {
                    "value": "LMHB",
                    "label": "LMHB"
                },
                {
                    "value": "LMT",
                    "label": "LMT"
                },
                {
                    "value": "LN",
                    "label": "LN"
                },
                {
                    "value": "LNC",
                    "label": "LNC"
                },
                {
                    "value": "LND",
                    "label": "LND"
                },
                {
                    "value": "LNN",
                    "label": "LNN"
                },
                {
                    "value": "LOA.U",
                    "label": "LOA.U"
                },
                {
                    "value": "LOA.W",
                    "label": "LOA.W"
                },
                {
                    "value": "LOAK",
                    "label": "LOAK"
                },
                {
                    "value": "LOMA",
                    "label": "LOMA"
                },
                {
                    "value": "LOW",
                    "label": "LOW"
                },
                {
                    "value": "LPG",
                    "label": "LPG"
                },
                {
                    "value": "LPI",
                    "label": "LPI"
                },
                {
                    "value": "LPL",
                    "label": "LPL"
                },
                {
                    "value": "LPX",
                    "label": "LPX"
                },
                {
                    "value": "LRN",
                    "label": "LRN"
                },
                {
                    "value": "LSI",
                    "label": "LSI"
                },
                {
                    "value": "LTC",
                    "label": "LTC"
                },
                {
                    "value": "LTHM",
                    "label": "LTHM"
                },
                {
                    "value": "LTM",
                    "label": "LTM"
                },
                {
                    "value": "LUB",
                    "label": "LUB"
                },
                {
                    "value": "LUV",
                    "label": "LUV"
                },
                {
                    "value": "LVS",
                    "label": "LVS"
                },
                {
                    "value": "LW",
                    "label": "LW"
                },
                {
                    "value": "LXFR",
                    "label": "LXFR"
                },
                {
                    "value": "LXP",
                    "label": "LXP"
                },
                {
                    "value": "LXP-C",
                    "label": "LXP-C"
                },
                {
                    "value": "LXU",
                    "label": "LXU"
                },
                {
                    "value": "LYB",
                    "label": "LYB"
                },
                {
                    "value": "LYG",
                    "label": "LYG"
                },
                {
                    "value": "LYV",
                    "label": "LYV"
                },
                {
                    "value": "LZB",
                    "label": "LZB"
                },
                {
                    "value": "M",
                    "label": "M"
                },
                {
                    "value": "MA",
                    "label": "MA"
                },
                {
                    "value": "MAA",
                    "label": "MAA"
                },
                {
                    "value": "MAA-I",
                    "label": "MAA-I"
                },
                {
                    "value": "MAC",
                    "label": "MAC"
                },
                {
                    "value": "MAIN",
                    "label": "MAIN"
                },
                {
                    "value": "MAN",
                    "label": "MAN"
                },
                {
                    "value": "MANU",
                    "label": "MANU"
                },
                {
                    "value": "MAS",
                    "label": "MAS"
                },
                {
                    "value": "MATX",
                    "label": "MATX"
                },
                {
                    "value": "MAV",
                    "label": "MAV"
                },
                {
                    "value": "MAXR",
                    "label": "MAXR"
                },
                {
                    "value": "MBI",
                    "label": "MBI"
                },
                {
                    "value": "MBT",
                    "label": "MBT"
                },
                {
                    "value": "MC",
                    "label": "MC"
                },
                {
                    "value": "MCA",
                    "label": "MCA"
                },
                {
                    "value": "MCB",
                    "label": "MCB"
                },
                {
                    "value": "MCC",
                    "label": "MCC"
                },
                {
                    "value": "MCD",
                    "label": "MCD"
                },
                {
                    "value": "MCI",
                    "label": "MCI"
                },
                {
                    "value": "MCK",
                    "label": "MCK"
                },
                {
                    "value": "MCN",
                    "label": "MCN"
                },
                {
                    "value": "MCO",
                    "label": "MCO"
                },
                {
                    "value": "MCR",
                    "label": "MCR"
                },
                {
                    "value": "MCS",
                    "label": "MCS"
                },
                {
                    "value": "MCV",
                    "label": "MCV"
                },
                {
                    "value": "MCX",
                    "label": "MCX"
                },
                {
                    "value": "MCY",
                    "label": "MCY"
                },
                {
                    "value": "MD",
                    "label": "MD"
                },
                {
                    "value": "MDC",
                    "label": "MDC"
                },
                {
                    "value": "MDLA",
                    "label": "MDLA"
                },
                {
                    "value": "MDLQ",
                    "label": "MDLQ"
                },
                {
                    "value": "MDLX",
                    "label": "MDLX"
                },
                {
                    "value": "MDLY",
                    "label": "MDLY"
                },
                {
                    "value": "MDP",
                    "label": "MDP"
                },
                {
                    "value": "MDT",
                    "label": "MDT"
                },
                {
                    "value": "MDU",
                    "label": "MDU"
                },
                {
                    "value": "MEC",
                    "label": "MEC"
                },
                {
                    "value": "MED",
                    "label": "MED"
                },
                {
                    "value": "MEI",
                    "label": "MEI"
                },
                {
                    "value": "MEN",
                    "label": "MEN"
                },
                {
                    "value": "MER-K",
                    "label": "MER-K"
                },
                {
                    "value": "MET",
                    "label": "MET"
                },
                {
                    "value": "MET-A",
                    "label": "MET-A"
                },
                {
                    "value": "MET-E",
                    "label": "MET-E"
                },
                {
                    "value": "MET-F",
                    "label": "MET-F"
                },
                {
                    "value": "MFA",
                    "label": "MFA"
                },
                {
                    "value": "MFA-B",
                    "label": "MFA-B"
                },
                {
                    "value": "MFA-C",
                    "label": "MFA-C"
                },
                {
                    "value": "MFA.U",
                    "label": "MFA.U"
                },
                {
                    "value": "MFA.W",
                    "label": "MFA.W"
                },
                {
                    "value": "MFAC",
                    "label": "MFAC"
                },
                {
                    "value": "MFC",
                    "label": "MFC"
                },
                {
                    "value": "MFD",
                    "label": "MFD"
                },
                {
                    "value": "MFG",
                    "label": "MFG"
                },
                {
                    "value": "MFGP",
                    "label": "MFGP"
                },
                {
                    "value": "MFL",
                    "label": "MFL"
                },
                {
                    "value": "MFM",
                    "label": "MFM"
                },
                {
                    "value": "MFO",
                    "label": "MFO"
                },
                {
                    "value": "MFT",
                    "label": "MFT"
                },
                {
                    "value": "MFV",
                    "label": "MFV"
                },
                {
                    "value": "MG",
                    "label": "MG"
                },
                {
                    "value": "MGA",
                    "label": "MGA"
                },
                {
                    "value": "MGF",
                    "label": "MGF"
                },
                {
                    "value": "MGM",
                    "label": "MGM"
                },
                {
                    "value": "MGP",
                    "label": "MGP"
                },
                {
                    "value": "MGR",
                    "label": "MGR"
                },
                {
                    "value": "MGU",
                    "label": "MGU"
                },
                {
                    "value": "MGY",
                    "label": "MGY"
                },
                {
                    "value": "MH-A",
                    "label": "MH-A"
                },
                {
                    "value": "MH-C",
                    "label": "MH-C"
                },
                {
                    "value": "MH-D",
                    "label": "MH-D"
                },
                {
                    "value": "MHD",
                    "label": "MHD"
                },
                {
                    "value": "MHE",
                    "label": "MHE"
                },
                {
                    "value": "MHF",
                    "label": "MHF"
                },
                {
                    "value": "MHI",
                    "label": "MHI"
                },
                {
                    "value": "MHK",
                    "label": "MHK"
                },
                {
                    "value": "MHLA",
                    "label": "MHLA"
                },
                {
                    "value": "MHN",
                    "label": "MHN"
                },
                {
                    "value": "MHNC",
                    "label": "MHNC"
                },
                {
                    "value": "MHO",
                    "label": "MHO"
                },
                {
                    "value": "MIC",
                    "label": "MIC"
                },
                {
                    "value": "MIE",
                    "label": "MIE"
                },
                {
                    "value": "MIN",
                    "label": "MIN"
                },
                {
                    "value": "MIT-A",
                    "label": "MIT-A"
                },
                {
                    "value": "MIT-B",
                    "label": "MIT-B"
                },
                {
                    "value": "MIT-C",
                    "label": "MIT-C"
                },
                {
                    "value": "MITT",
                    "label": "MITT"
                },
                {
                    "value": "MIXT",
                    "label": "MIXT"
                },
                {
                    "value": "MIY",
                    "label": "MIY"
                },
                {
                    "value": "MKC",
                    "label": "MKC"
                },
                {
                    "value": "MKC.V",
                    "label": "MKC.V"
                },
                {
                    "value": "MKL",
                    "label": "MKL"
                },
                {
                    "value": "MLI",
                    "label": "MLI"
                },
                {
                    "value": "MLM",
                    "label": "MLM"
                },
                {
                    "value": "MLP",
                    "label": "MLP"
                },
                {
                    "value": "MLR",
                    "label": "MLR"
                },
                {
                    "value": "MMC",
                    "label": "MMC"
                },
                {
                    "value": "MMD",
                    "label": "MMD"
                },
                {
                    "value": "MMI",
                    "label": "MMI"
                },
                {
                    "value": "MMM",
                    "label": "MMM"
                },
                {
                    "value": "MMP",
                    "label": "MMP"
                },
                {
                    "value": "MMS",
                    "label": "MMS"
                },
                {
                    "value": "MMT",
                    "label": "MMT"
                },
                {
                    "value": "MMU",
                    "label": "MMU"
                },
                {
                    "value": "MN",
                    "label": "MN"
                },
                {
                    "value": "MNE",
                    "label": "MNE"
                },
                {
                    "value": "MNK",
                    "label": "MNK"
                },
                {
                    "value": "MNP",
                    "label": "MNP"
                },
                {
                    "value": "MNR",
                    "label": "MNR"
                },
                {
                    "value": "MNR-C",
                    "label": "MNR-C"
                },
                {
                    "value": "MNRL",
                    "label": "MNRL"
                },
                {
                    "value": "MO",
                    "label": "MO"
                },
                {
                    "value": "MOD",
                    "label": "MOD"
                },
                {
                    "value": "MODN",
                    "label": "MODN"
                },
                {
                    "value": "MOG.A",
                    "label": "MOG.A"
                },
                {
                    "value": "MOG.B",
                    "label": "MOG.B"
                },
                {
                    "value": "MOGU",
                    "label": "MOGU"
                },
                {
                    "value": "MOH",
                    "label": "MOH"
                },
                {
                    "value": "MOS",
                    "label": "MOS"
                },
                {
                    "value": "MOV",
                    "label": "MOV"
                },
                {
                    "value": "MPA",
                    "label": "MPA"
                },
                {
                    "value": "MPC",
                    "label": "MPC"
                },
                {
                    "value": "MPLX",
                    "label": "MPLX"
                },
                {
                    "value": "MPV",
                    "label": "MPV"
                },
                {
                    "value": "MPW",
                    "label": "MPW"
                },
                {
                    "value": "MPX",
                    "label": "MPX"
                },
                {
                    "value": "MQT",
                    "label": "MQT"
                },
                {
                    "value": "MQY",
                    "label": "MQY"
                },
                {
                    "value": "MR",
                    "label": "MR"
                },
                {
                    "value": "MRC",
                    "label": "MRC"
                },
                {
                    "value": "MRK",
                    "label": "MRK"
                },
                {
                    "value": "MRO",
                    "label": "MRO"
                },
                {
                    "value": "MS",
                    "label": "MS"
                },
                {
                    "value": "MS-A",
                    "label": "MS-A"
                },
                {
                    "value": "MS-E",
                    "label": "MS-E"
                },
                {
                    "value": "MS-F",
                    "label": "MS-F"
                },
                {
                    "value": "MS-I",
                    "label": "MS-I"
                },
                {
                    "value": "MS-K",
                    "label": "MS-K"
                },
                {
                    "value": "MS-L",
                    "label": "MS-L"
                },
                {
                    "value": "MSA",
                    "label": "MSA"
                },
                {
                    "value": "MSB",
                    "label": "MSB"
                },
                {
                    "value": "MSC",
                    "label": "MSC"
                },
                {
                    "value": "MSCI",
                    "label": "MSCI"
                },
                {
                    "value": "MSD",
                    "label": "MSD"
                },
                {
                    "value": "MSGE",
                    "label": "MSGE"
                },
                {
                    "value": "MSGN",
                    "label": "MSGN"
                },
                {
                    "value": "MSGS",
                    "label": "MSGS"
                },
                {
                    "value": "MSI",
                    "label": "MSI"
                },
                {
                    "value": "MSM",
                    "label": "MSM"
                },
                {
                    "value": "MT",
                    "label": "MT"
                },
                {
                    "value": "MTB",
                    "label": "MTB"
                },
                {
                    "value": "MTCN",
                    "label": "MTCN"
                },
                {
                    "value": "MTD",
                    "label": "MTD"
                },
                {
                    "value": "MTDR",
                    "label": "MTDR"
                },
                {
                    "value": "MTG",
                    "label": "MTG"
                },
                {
                    "value": "MTH",
                    "label": "MTH"
                },
                {
                    "value": "MTL",
                    "label": "MTL"
                },
                {
                    "value": "MTL.P",
                    "label": "MTL.P"
                },
                {
                    "value": "MTN",
                    "label": "MTN"
                },
                {
                    "value": "MTOR",
                    "label": "MTOR"
                },
                {
                    "value": "MTR",
                    "label": "MTR"
                },
                {
                    "value": "MTRN",
                    "label": "MTRN"
                },
                {
                    "value": "MTT",
                    "label": "MTT"
                },
                {
                    "value": "MTW",
                    "label": "MTW"
                },
                {
                    "value": "MTX",
                    "label": "MTX"
                },
                {
                    "value": "MTZ",
                    "label": "MTZ"
                },
                {
                    "value": "MUA",
                    "label": "MUA"
                },
                {
                    "value": "MUC",
                    "label": "MUC"
                },
                {
                    "value": "MUE",
                    "label": "MUE"
                },
                {
                    "value": "MUFG",
                    "label": "MUFG"
                },
                {
                    "value": "MUH",
                    "label": "MUH"
                },
                {
                    "value": "MUI",
                    "label": "MUI"
                },
                {
                    "value": "MUJ",
                    "label": "MUJ"
                },
                {
                    "value": "MUR",
                    "label": "MUR"
                },
                {
                    "value": "MUS",
                    "label": "MUS"
                },
                {
                    "value": "MUSA",
                    "label": "MUSA"
                },
                {
                    "value": "MUX",
                    "label": "MUX"
                },
                {
                    "value": "MVC",
                    "label": "MVC"
                },
                {
                    "value": "MVCD",
                    "label": "MVCD"
                },
                {
                    "value": "MVF",
                    "label": "MVF"
                },
                {
                    "value": "MVO",
                    "label": "MVO"
                },
                {
                    "value": "MVT",
                    "label": "MVT"
                },
                {
                    "value": "MWA",
                    "label": "MWA"
                },
                {
                    "value": "MX",
                    "label": "MX"
                },
                {
                    "value": "MXE",
                    "label": "MXE"
                },
                {
                    "value": "MXF",
                    "label": "MXF"
                },
                {
                    "value": "MXL",
                    "label": "MXL"
                },
                {
                    "value": "MYC",
                    "label": "MYC"
                },
                {
                    "value": "MYD",
                    "label": "MYD"
                },
                {
                    "value": "MYE",
                    "label": "MYE"
                },
                {
                    "value": "MYF",
                    "label": "MYF"
                },
                {
                    "value": "MYI",
                    "label": "MYI"
                },
                {
                    "value": "MYJ",
                    "label": "MYJ"
                },
                {
                    "value": "MYN",
                    "label": "MYN"
                },
                {
                    "value": "MYOV",
                    "label": "MYOV"
                },
                {
                    "value": "MZA",
                    "label": "MZA"
                },
                {
                    "value": "NAC",
                    "label": "NAC"
                },
                {
                    "value": "NAD",
                    "label": "NAD"
                },
                {
                    "value": "NAN",
                    "label": "NAN"
                },
                {
                    "value": "NAT",
                    "label": "NAT"
                },
                {
                    "value": "NAV",
                    "label": "NAV"
                },
                {
                    "value": "NAV-D",
                    "label": "NAV-D"
                },
                {
                    "value": "NAZ",
                    "label": "NAZ"
                },
                {
                    "value": "NBB",
                    "label": "NBB"
                },
                {
                    "value": "NBHC",
                    "label": "NBHC"
                },
                {
                    "value": "NBR",
                    "label": "NBR"
                },
                {
                    "value": "NBR-A",
                    "label": "NBR-A"
                },
                {
                    "value": "NC",
                    "label": "NC"
                },
                {
                    "value": "NCA",
                    "label": "NCA"
                },
                {
                    "value": "NCB",
                    "label": "NCB"
                },
                {
                    "value": "NCLH",
                    "label": "NCLH"
                },
                {
                    "value": "NCR",
                    "label": "NCR"
                },
                {
                    "value": "NCV",
                    "label": "NCV"
                },
                {
                    "value": "NCV-A",
                    "label": "NCV-A"
                },
                {
                    "value": "NCZ",
                    "label": "NCZ"
                },
                {
                    "value": "NCZ-A",
                    "label": "NCZ-A"
                },
                {
                    "value": "NDP",
                    "label": "NDP"
                },
                {
                    "value": "NE",
                    "label": "NE"
                },
                {
                    "value": "NEA",
                    "label": "NEA"
                },
                {
                    "value": "NEE",
                    "label": "NEE"
                },
                {
                    "value": "NEE-I",
                    "label": "NEE-I"
                },
                {
                    "value": "NEE-J",
                    "label": "NEE-J"
                },
                {
                    "value": "NEE-K",
                    "label": "NEE-K"
                },
                {
                    "value": "NEE-N",
                    "label": "NEE-N"
                },
                {
                    "value": "NEE-O",
                    "label": "NEE-O"
                },
                {
                    "value": "NEE-P",
                    "label": "NEE-P"
                },
                {
                    "value": "NEM",
                    "label": "NEM"
                },
                {
                    "value": "NEP",
                    "label": "NEP"
                },
                {
                    "value": "NET",
                    "label": "NET"
                },
                {
                    "value": "NEU",
                    "label": "NEU"
                },
                {
                    "value": "NEV",
                    "label": "NEV"
                },
                {
                    "value": "NEW",
                    "label": "NEW"
                },
                {
                    "value": "NEWR",
                    "label": "NEWR"
                },
                {
                    "value": "NEX",
                    "label": "NEX"
                },
                {
                    "value": "NEXA",
                    "label": "NEXA"
                },
                {
                    "value": "NFG",
                    "label": "NFG"
                },
                {
                    "value": "NFH",
                    "label": "NFH"
                },
                {
                    "value": "NFH.W",
                    "label": "NFH.W"
                },
                {
                    "value": "NFJ",
                    "label": "NFJ"
                },
                {
                    "value": "NGG",
                    "label": "NGG"
                },
                {
                    "value": "NGL",
                    "label": "NGL"
                },
                {
                    "value": "NGL-A",
                    "label": "NGL-A"
                },
                {
                    "value": "NGL-B",
                    "label": "NGL-B"
                },
                {
                    "value": "NGL-C",
                    "label": "NGL-C"
                },
                {
                    "value": "NGS",
                    "label": "NGS"
                },
                {
                    "value": "NGVC",
                    "label": "NGVC"
                },
                {
                    "value": "NGVT",
                    "label": "NGVT"
                },
                {
                    "value": "NHA",
                    "label": "NHA"
                },
                {
                    "value": "NHF",
                    "label": "NHF"
                },
                {
                    "value": "NHI",
                    "label": "NHI"
                },
                {
                    "value": "NI",
                    "label": "NI"
                },
                {
                    "value": "NI-B",
                    "label": "NI-B"
                },
                {
                    "value": "NID",
                    "label": "NID"
                },
                {
                    "value": "NIE",
                    "label": "NIE"
                },
                {
                    "value": "NIM",
                    "label": "NIM"
                },
                {
                    "value": "NINE",
                    "label": "NINE"
                },
                {
                    "value": "NIO",
                    "label": "NIO"
                },
                {
                    "value": "NIQ",
                    "label": "NIQ"
                },
                {
                    "value": "NJR",
                    "label": "NJR"
                },
                {
                    "value": "NJV",
                    "label": "NJV"
                },
                {
                    "value": "NKE",
                    "label": "NKE"
                },
                {
                    "value": "NKG",
                    "label": "NKG"
                },
                {
                    "value": "NKX",
                    "label": "NKX"
                },
                {
                    "value": "NL",
                    "label": "NL"
                },
                {
                    "value": "NLS",
                    "label": "NLS"
                },
                {
                    "value": "NLSN",
                    "label": "NLSN"
                },
                {
                    "value": "NLY",
                    "label": "NLY"
                },
                {
                    "value": "NLY-D",
                    "label": "NLY-D"
                },
                {
                    "value": "NLY-F",
                    "label": "NLY-F"
                },
                {
                    "value": "NLY-G",
                    "label": "NLY-G"
                },
                {
                    "value": "NLY-I",
                    "label": "NLY-I"
                },
                {
                    "value": "NM",
                    "label": "NM"
                },
                {
                    "value": "NM-G",
                    "label": "NM-G"
                },
                {
                    "value": "NM-H",
                    "label": "NM-H"
                },
                {
                    "value": "NMCO",
                    "label": "NMCO"
                },
                {
                    "value": "NMFC",
                    "label": "NMFC"
                },
                {
                    "value": "NMFX",
                    "label": "NMFX"
                },
                {
                    "value": "NMI",
                    "label": "NMI"
                },
                {
                    "value": "NMK-B",
                    "label": "NMK-B"
                },
                {
                    "value": "NMK-C",
                    "label": "NMK-C"
                },
                {
                    "value": "NMM",
                    "label": "NMM"
                },
                {
                    "value": "NMR",
                    "label": "NMR"
                },
                {
                    "value": "NMS",
                    "label": "NMS"
                },
                {
                    "value": "NMT",
                    "label": "NMT"
                },
                {
                    "value": "NMY",
                    "label": "NMY"
                },
                {
                    "value": "NMZ",
                    "label": "NMZ"
                },
                {
                    "value": "NNA",
                    "label": "NNA"
                },
                {
                    "value": "NNI",
                    "label": "NNI"
                },
                {
                    "value": "NNN",
                    "label": "NNN"
                },
                {
                    "value": "NNN-F",
                    "label": "NNN-F"
                },
                {
                    "value": "NNY",
                    "label": "NNY"
                },
                {
                    "value": "NOA",
                    "label": "NOA"
                },
                {
                    "value": "NOAH",
                    "label": "NOAH"
                },
                {
                    "value": "NOC",
                    "label": "NOC"
                },
                {
                    "value": "NOK",
                    "label": "NOK"
                },
                {
                    "value": "NOM",
                    "label": "NOM"
                },
                {
                    "value": "NOMD",
                    "label": "NOMD"
                },
                {
                    "value": "NOV",
                    "label": "NOV"
                },
                {
                    "value": "NOVA",
                    "label": "NOVA"
                },
                {
                    "value": "NOW",
                    "label": "NOW"
                },
                {
                    "value": "NP",
                    "label": "NP"
                },
                {
                    "value": "NPK",
                    "label": "NPK"
                },
                {
                    "value": "NPN",
                    "label": "NPN"
                },
                {
                    "value": "NPO",
                    "label": "NPO"
                },
                {
                    "value": "NPTN",
                    "label": "NPTN"
                },
                {
                    "value": "NPV",
                    "label": "NPV"
                },
                {
                    "value": "NQP",
                    "label": "NQP"
                },
                {
                    "value": "NR",
                    "label": "NR"
                },
                {
                    "value": "NREF",
                    "label": "NREF"
                },
                {
                    "value": "NRG",
                    "label": "NRG"
                },
                {
                    "value": "NRGX",
                    "label": "NRGX"
                },
                {
                    "value": "NRK",
                    "label": "NRK"
                },
                {
                    "value": "NRP",
                    "label": "NRP"
                },
                {
                    "value": "NRT",
                    "label": "NRT"
                },
                {
                    "value": "NRUC",
                    "label": "NRUC"
                },
                {
                    "value": "NRZ",
                    "label": "NRZ"
                },
                {
                    "value": "NRZ-A",
                    "label": "NRZ-A"
                },
                {
                    "value": "NRZ-B",
                    "label": "NRZ-B"
                },
                {
                    "value": "NRZ-C",
                    "label": "NRZ-C"
                },
                {
                    "value": "NS",
                    "label": "NS"
                },
                {
                    "value": "NS-A",
                    "label": "NS-A"
                },
                {
                    "value": "NS-B",
                    "label": "NS-B"
                },
                {
                    "value": "NS-C",
                    "label": "NS-C"
                },
                {
                    "value": "NSA",
                    "label": "NSA"
                },
                {
                    "value": "NSA-A",
                    "label": "NSA-A"
                },
                {
                    "value": "NSC",
                    "label": "NSC"
                },
                {
                    "value": "NSC.W",
                    "label": "NSC.W"
                },
                {
                    "value": "NSCO",
                    "label": "NSCO"
                },
                {
                    "value": "NSL",
                    "label": "NSL"
                },
                {
                    "value": "NSP",
                    "label": "NSP"
                },
                {
                    "value": "NSS",
                    "label": "NSS"
                },
                {
                    "value": "NTB",
                    "label": "NTB"
                },
                {
                    "value": "NTCO",
                    "label": "NTCO"
                },
                {
                    "value": "NTEST.I",
                    "label": "NTEST.I"
                },
                {
                    "value": "NTEST.J",
                    "label": "NTEST.J"
                },
                {
                    "value": "NTEST.K",
                    "label": "NTEST.K"
                },
                {
                    "value": "NTG",
                    "label": "NTG"
                },
                {
                    "value": "NTP",
                    "label": "NTP"
                },
                {
                    "value": "NTR",
                    "label": "NTR"
                },
                {
                    "value": "NTZ",
                    "label": "NTZ"
                },
                {
                    "value": "NUE",
                    "label": "NUE"
                },
                {
                    "value": "NUM",
                    "label": "NUM"
                },
                {
                    "value": "NUO",
                    "label": "NUO"
                },
                {
                    "value": "NUS",
                    "label": "NUS"
                },
                {
                    "value": "NUV",
                    "label": "NUV"
                },
                {
                    "value": "NUW",
                    "label": "NUW"
                },
                {
                    "value": "NVG",
                    "label": "NVG"
                },
                {
                    "value": "NVGS",
                    "label": "NVGS"
                },
                {
                    "value": "NVO",
                    "label": "NVO"
                },
                {
                    "value": "NVR",
                    "label": "NVR"
                },
                {
                    "value": "NVRO",
                    "label": "NVRO"
                },
                {
                    "value": "NVS",
                    "label": "NVS"
                },
                {
                    "value": "NVST",
                    "label": "NVST"
                },
                {
                    "value": "NVT",
                    "label": "NVT"
                },
                {
                    "value": "NVTA",
                    "label": "NVTA"
                },
                {
                    "value": "NWE",
                    "label": "NWE"
                },
                {
                    "value": "NWHM",
                    "label": "NWHM"
                },
                {
                    "value": "NWN",
                    "label": "NWN"
                },
                {
                    "value": "NX",
                    "label": "NX"
                },
                {
                    "value": "NXC",
                    "label": "NXC"
                },
                {
                    "value": "NXJ",
                    "label": "NXJ"
                },
                {
                    "value": "NXN",
                    "label": "NXN"
                },
                {
                    "value": "NXP",
                    "label": "NXP"
                },
                {
                    "value": "NXQ",
                    "label": "NXQ"
                },
                {
                    "value": "NXR",
                    "label": "NXR"
                },
                {
                    "value": "NXRT",
                    "label": "NXRT"
                },
                {
                    "value": "NYC-A",
                    "label": "NYC-A"
                },
                {
                    "value": "NYC-U",
                    "label": "NYC-U"
                },
                {
                    "value": "NYCB",
                    "label": "NYCB"
                },
                {
                    "value": "NYT",
                    "label": "NYT"
                },
                {
                    "value": "NYV",
                    "label": "NYV"
                },
                {
                    "value": "NZF",
                    "label": "NZF"
                },
                {
                    "value": "O",
                    "label": "O"
                },
                {
                    "value": "OAC",
                    "label": "OAC"
                },
                {
                    "value": "OAC.U",
                    "label": "OAC.U"
                },
                {
                    "value": "OAC.W",
                    "label": "OAC.W"
                },
                {
                    "value": "OAK-A",
                    "label": "OAK-A"
                },
                {
                    "value": "OAK-B",
                    "label": "OAK-B"
                },
                {
                    "value": "OC",
                    "label": "OC"
                },
                {
                    "value": "OCFT",
                    "label": "OCFT"
                },
                {
                    "value": "OCN",
                    "label": "OCN"
                },
                {
                    "value": "ODC",
                    "label": "ODC"
                },
                {
                    "value": "OEC",
                    "label": "OEC"
                },
                {
                    "value": "OFC",
                    "label": "OFC"
                },
                {
                    "value": "OFG",
                    "label": "OFG"
                },
                {
                    "value": "OFG-A",
                    "label": "OFG-A"
                },
                {
                    "value": "OFG-B",
                    "label": "OFG-B"
                },
                {
                    "value": "OFG-D",
                    "label": "OFG-D"
                },
                {
                    "value": "OGE",
                    "label": "OGE"
                },
                {
                    "value": "OGS",
                    "label": "OGS"
                },
                {
                    "value": "OHI",
                    "label": "OHI"
                },
                {
                    "value": "OI",
                    "label": "OI"
                },
                {
                    "value": "OIA",
                    "label": "OIA"
                },
                {
                    "value": "OIB.C",
                    "label": "OIB.C"
                },
                {
                    "value": "OII",
                    "label": "OII"
                },
                {
                    "value": "OIS",
                    "label": "OIS"
                },
                {
                    "value": "OKE",
                    "label": "OKE"
                },
                {
                    "value": "OLN",
                    "label": "OLN"
                },
                {
                    "value": "OLP",
                    "label": "OLP"
                },
                {
                    "value": "OMC",
                    "label": "OMC"
                },
                {
                    "value": "OMF",
                    "label": "OMF"
                },
                {
                    "value": "OMI",
                    "label": "OMI"
                },
                {
                    "value": "ONDK",
                    "label": "ONDK"
                },
                {
                    "value": "ONE",
                    "label": "ONE"
                },
                {
                    "value": "ONTO",
                    "label": "ONTO"
                },
                {
                    "value": "OOMA",
                    "label": "OOMA"
                },
                {
                    "value": "OPP",
                    "label": "OPP"
                },
                {
                    "value": "OPY",
                    "label": "OPY"
                },
                {
                    "value": "OR",
                    "label": "OR"
                },
                {
                    "value": "ORA",
                    "label": "ORA"
                },
                {
                    "value": "ORAN",
                    "label": "ORAN"
                },
                {
                    "value": "ORC",
                    "label": "ORC"
                },
                {
                    "value": "ORCC",
                    "label": "ORCC"
                },
                {
                    "value": "ORCL",
                    "label": "ORCL"
                },
                {
                    "value": "ORI",
                    "label": "ORI"
                },
                {
                    "value": "ORN",
                    "label": "ORN"
                },
                {
                    "value": "OSB",
                    "label": "OSB"
                },
                {
                    "value": "OSG",
                    "label": "OSG"
                },
                {
                    "value": "OSK",
                    "label": "OSK"
                },
                {
                    "value": "OTIS",
                    "label": "OTIS"
                },
                {
                    "value": "OUT",
                    "label": "OUT"
                },
                {
                    "value": "OVV",
                    "label": "OVV"
                },
                {
                    "value": "OXM",
                    "label": "OXM"
                },
                {
                    "value": "OXY",
                    "label": "OXY"
                },
                {
                    "value": "PAA",
                    "label": "PAA"
                },
                {
                    "value": "PAC",
                    "label": "PAC"
                },
                {
                    "value": "PAC.W",
                    "label": "PAC.W"
                },
                {
                    "value": "PACD",
                    "label": "PACD"
                },
                {
                    "value": "PACK",
                    "label": "PACK"
                },
                {
                    "value": "PAG",
                    "label": "PAG"
                },
                {
                    "value": "PAGP",
                    "label": "PAGP"
                },
                {
                    "value": "PAGS",
                    "label": "PAGS"
                },
                {
                    "value": "PAI",
                    "label": "PAI"
                },
                {
                    "value": "PAM",
                    "label": "PAM"
                },
                {
                    "value": "PANW",
                    "label": "PANW"
                },
                {
                    "value": "PAR",
                    "label": "PAR"
                },
                {
                    "value": "PARR",
                    "label": "PARR"
                },
                {
                    "value": "PAYC",
                    "label": "PAYC"
                },
                {
                    "value": "PB",
                    "label": "PB"
                },
                {
                    "value": "PBA",
                    "label": "PBA"
                },
                {
                    "value": "PBB",
                    "label": "PBB"
                },
                {
                    "value": "PBC",
                    "label": "PBC"
                },
                {
                    "value": "PBF",
                    "label": "PBF"
                },
                {
                    "value": "PBFX",
                    "label": "PBFX"
                },
                {
                    "value": "PBH",
                    "label": "PBH"
                },
                {
                    "value": "PBI",
                    "label": "PBI"
                },
                {
                    "value": "PBI-B",
                    "label": "PBI-B"
                },
                {
                    "value": "PBR",
                    "label": "PBR"
                },
                {
                    "value": "PBR.A",
                    "label": "PBR.A"
                },
                {
                    "value": "PBT",
                    "label": "PBT"
                },
                {
                    "value": "PBY",
                    "label": "PBY"
                },
                {
                    "value": "PCF",
                    "label": "PCF"
                },
                {
                    "value": "PCG",
                    "label": "PCG"
                },
                {
                    "value": "PCI",
                    "label": "PCI"
                },
                {
                    "value": "PCK",
                    "label": "PCK"
                },
                {
                    "value": "PCM",
                    "label": "PCM"
                },
                {
                    "value": "PCN",
                    "label": "PCN"
                },
                {
                    "value": "PCP.U",
                    "label": "PCP.U"
                },
                {
                    "value": "PCPL",
                    "label": "PCPL"
                },
                {
                    "value": "PCQ",
                    "label": "PCQ"
                },
                {
                    "value": "PD",
                    "label": "PD"
                },
                {
                    "value": "PDI",
                    "label": "PDI"
                },
                {
                    "value": "PDM",
                    "label": "PDM"
                },
                {
                    "value": "PDS",
                    "label": "PDS"
                },
                {
                    "value": "PDT",
                    "label": "PDT"
                },
                {
                    "value": "PE",
                    "label": "PE"
                },
                {
                    "value": "PEAK",
                    "label": "PEAK"
                },
                {
                    "value": "PEB",
                    "label": "PEB"
                },
                {
                    "value": "PEB-C",
                    "label": "PEB-C"
                },
                {
                    "value": "PEB-D",
                    "label": "PEB-D"
                },
                {
                    "value": "PEB-E",
                    "label": "PEB-E"
                },
                {
                    "value": "PEB-F",
                    "label": "PEB-F"
                },
                {
                    "value": "PEG",
                    "label": "PEG"
                },
                {
                    "value": "PEI",
                    "label": "PEI"
                },
                {
                    "value": "PEI-B",
                    "label": "PEI-B"
                },
                {
                    "value": "PEI-C",
                    "label": "PEI-C"
                },
                {
                    "value": "PEI-D",
                    "label": "PEI-D"
                },
                {
                    "value": "PEN",
                    "label": "PEN"
                },
                {
                    "value": "PEO",
                    "label": "PEO"
                },
                {
                    "value": "PER",
                    "label": "PER"
                },
                {
                    "value": "PFD",
                    "label": "PFD"
                },
                {
                    "value": "PFE",
                    "label": "PFE"
                },
                {
                    "value": "PFGC",
                    "label": "PFGC"
                },
                {
                    "value": "PFL",
                    "label": "PFL"
                },
                {
                    "value": "PFN",
                    "label": "PFN"
                },
                {
                    "value": "PFO",
                    "label": "PFO"
                },
                {
                    "value": "PFS",
                    "label": "PFS"
                },
                {
                    "value": "PFSI",
                    "label": "PFSI"
                },
                {
                    "value": "PG",
                    "label": "PG"
                },
                {
                    "value": "PGP",
                    "label": "PGP"
                },
                {
                    "value": "PGR",
                    "label": "PGR"
                },
                {
                    "value": "PGRE",
                    "label": "PGRE"
                },
                {
                    "value": "PGTI",
                    "label": "PGTI"
                },
                {
                    "value": "PGZ",
                    "label": "PGZ"
                },
                {
                    "value": "PH",
                    "label": "PH"
                },
                {
                    "value": "PHD",
                    "label": "PHD"
                },
                {
                    "value": "PHG",
                    "label": "PHG"
                },
                {
                    "value": "PHI",
                    "label": "PHI"
                },
                {
                    "value": "PHK",
                    "label": "PHK"
                },
                {
                    "value": "PHM",
                    "label": "PHM"
                },
                {
                    "value": "PHR",
                    "label": "PHR"
                },
                {
                    "value": "PHT",
                    "label": "PHT"
                },
                {
                    "value": "PHX",
                    "label": "PHX"
                },
                {
                    "value": "PIC",
                    "label": "PIC"
                },
                {
                    "value": "PIC.U",
                    "label": "PIC.U"
                },
                {
                    "value": "PIC.W",
                    "label": "PIC.W"
                },
                {
                    "value": "PII",
                    "label": "PII"
                },
                {
                    "value": "PIM",
                    "label": "PIM"
                },
                {
                    "value": "PINE",
                    "label": "PINE"
                },
                {
                    "value": "PING",
                    "label": "PING"
                },
                {
                    "value": "PINS",
                    "label": "PINS"
                },
                {
                    "value": "PIPR",
                    "label": "PIPR"
                },
                {
                    "value": "PJH",
                    "label": "PJH"
                },
                {
                    "value": "PJT",
                    "label": "PJT"
                },
                {
                    "value": "PK",
                    "label": "PK"
                },
                {
                    "value": "PKE",
                    "label": "PKE"
                },
                {
                    "value": "PKG",
                    "label": "PKG"
                },
                {
                    "value": "PKI",
                    "label": "PKI"
                },
                {
                    "value": "PKO",
                    "label": "PKO"
                },
                {
                    "value": "PKX",
                    "label": "PKX"
                },
                {
                    "value": "PLAN",
                    "label": "PLAN"
                },
                {
                    "value": "PLD",
                    "label": "PLD"
                },
                {
                    "value": "PLNT",
                    "label": "PLNT"
                },
                {
                    "value": "PLOW",
                    "label": "PLOW"
                },
                {
                    "value": "PLT",
                    "label": "PLT"
                },
                {
                    "value": "PLYM",
                    "label": "PLYM"
                },
                {
                    "value": "PM",
                    "label": "PM"
                },
                {
                    "value": "PMF",
                    "label": "PMF"
                },
                {
                    "value": "PML",
                    "label": "PML"
                },
                {
                    "value": "PMM",
                    "label": "PMM"
                },
                {
                    "value": "PMO",
                    "label": "PMO"
                },
                {
                    "value": "PMT",
                    "label": "PMT"
                },
                {
                    "value": "PMT-A",
                    "label": "PMT-A"
                },
                {
                    "value": "PMT-B",
                    "label": "PMT-B"
                },
                {
                    "value": "PMX",
                    "label": "PMX"
                },
                {
                    "value": "PNC",
                    "label": "PNC"
                },
                {
                    "value": "PNC-P",
                    "label": "PNC-P"
                },
                {
                    "value": "PNC-Q",
                    "label": "PNC-Q"
                },
                {
                    "value": "PNF",
                    "label": "PNF"
                },
                {
                    "value": "PNI",
                    "label": "PNI"
                },
                {
                    "value": "PNM",
                    "label": "PNM"
                },
                {
                    "value": "PNR",
                    "label": "PNR"
                },
                {
                    "value": "PNW",
                    "label": "PNW"
                },
                {
                    "value": "POL",
                    "label": "POL"
                },
                {
                    "value": "POR",
                    "label": "POR"
                },
                {
                    "value": "POST",
                    "label": "POST"
                },
                {
                    "value": "PPG",
                    "label": "PPG"
                },
                {
                    "value": "PPL",
                    "label": "PPL"
                },
                {
                    "value": "PPR",
                    "label": "PPR"
                },
                {
                    "value": "PPT",
                    "label": "PPT"
                },
                {
                    "value": "PPX",
                    "label": "PPX"
                },
                {
                    "value": "PQG",
                    "label": "PQG"
                },
                {
                    "value": "PRA",
                    "label": "PRA"
                },
                {
                    "value": "PRE-F",
                    "label": "PRE-F"
                },
                {
                    "value": "PRE-G",
                    "label": "PRE-G"
                },
                {
                    "value": "PRE-H",
                    "label": "PRE-H"
                },
                {
                    "value": "PRE-I",
                    "label": "PRE-I"
                },
                {
                    "value": "PRGO",
                    "label": "PRGO"
                },
                {
                    "value": "PRH",
                    "label": "PRH"
                },
                {
                    "value": "PRI",
                    "label": "PRI"
                },
                {
                    "value": "PRI-A",
                    "label": "PRI-A"
                },
                {
                    "value": "PRI-B",
                    "label": "PRI-B"
                },
                {
                    "value": "PRI-C",
                    "label": "PRI-C"
                },
                {
                    "value": "PRI-D",
                    "label": "PRI-D"
                },
                {
                    "value": "PRI-E",
                    "label": "PRI-E"
                },
                {
                    "value": "PRI-F",
                    "label": "PRI-F"
                },
                {
                    "value": "PRLB",
                    "label": "PRLB"
                },
                {
                    "value": "PRMW",
                    "label": "PRMW"
                },
                {
                    "value": "PRO",
                    "label": "PRO"
                },
                {
                    "value": "PROS",
                    "label": "PROS"
                },
                {
                    "value": "PRS",
                    "label": "PRS"
                },
                {
                    "value": "PRSP",
                    "label": "PRSP"
                },
                {
                    "value": "PRT",
                    "label": "PRT"
                },
                {
                    "value": "PRTY",
                    "label": "PRTY"
                },
                {
                    "value": "PRU",
                    "label": "PRU"
                },
                {
                    "value": "PSA",
                    "label": "PSA"
                },
                {
                    "value": "PSA-B",
                    "label": "PSA-B"
                },
                {
                    "value": "PSA-C",
                    "label": "PSA-C"
                },
                {
                    "value": "PSA-D",
                    "label": "PSA-D"
                },
                {
                    "value": "PSA-E",
                    "label": "PSA-E"
                },
                {
                    "value": "PSA-F",
                    "label": "PSA-F"
                },
                {
                    "value": "PSA-G",
                    "label": "PSA-G"
                },
                {
                    "value": "PSA-H",
                    "label": "PSA-H"
                },
                {
                    "value": "PSA-I",
                    "label": "PSA-I"
                },
                {
                    "value": "PSA-J",
                    "label": "PSA-J"
                },
                {
                    "value": "PSA-K",
                    "label": "PSA-K"
                },
                {
                    "value": "PSA-L",
                    "label": "PSA-L"
                },
                {
                    "value": "PSA-V",
                    "label": "PSA-V"
                },
                {
                    "value": "PSA-W",
                    "label": "PSA-W"
                },
                {
                    "value": "PSA-X",
                    "label": "PSA-X"
                },
                {
                    "value": "PSB",
                    "label": "PSB"
                },
                {
                    "value": "PSB-W",
                    "label": "PSB-W"
                },
                {
                    "value": "PSB-X",
                    "label": "PSB-X"
                },
                {
                    "value": "PSB-Y",
                    "label": "PSB-Y"
                },
                {
                    "value": "PSB-Z",
                    "label": "PSB-Z"
                },
                {
                    "value": "PSF",
                    "label": "PSF"
                },
                {
                    "value": "PSN",
                    "label": "PSN"
                },
                {
                    "value": "PSO",
                    "label": "PSO"
                },
                {
                    "value": "PSTG",
                    "label": "PSTG"
                },
                {
                    "value": "PSTL",
                    "label": "PSTL"
                },
                {
                    "value": "PSV",
                    "label": "PSV"
                },
                {
                    "value": "PSX",
                    "label": "PSX"
                },
                {
                    "value": "PSXP",
                    "label": "PSXP"
                },
                {
                    "value": "PTR",
                    "label": "PTR"
                },
                {
                    "value": "PTY",
                    "label": "PTY"
                },
                {
                    "value": "PUK",
                    "label": "PUK"
                },
                {
                    "value": "PUK-A",
                    "label": "PUK-A"
                },
                {
                    "value": "PUK.P",
                    "label": "PUK.P"
                },
                {
                    "value": "PUMP",
                    "label": "PUMP"
                },
                {
                    "value": "PVG",
                    "label": "PVG"
                },
                {
                    "value": "PVH",
                    "label": "PVH"
                },
                {
                    "value": "PVL",
                    "label": "PVL"
                },
                {
                    "value": "PWR",
                    "label": "PWR"
                },
                {
                    "value": "PXD",
                    "label": "PXD"
                },
                {
                    "value": "PYN",
                    "label": "PYN"
                },
                {
                    "value": "PYS",
                    "label": "PYS"
                },
                {
                    "value": "PYT",
                    "label": "PYT"
                },
                {
                    "value": "PYX",
                    "label": "PYX"
                },
                {
                    "value": "PZC",
                    "label": "PZC"
                },
                {
                    "value": "PZN",
                    "label": "PZN"
                },
                {
                    "value": "QD",
                    "label": "QD"
                },
                {
                    "value": "QEP",
                    "label": "QEP"
                },
                {
                    "value": "QES",
                    "label": "QES"
                },
                {
                    "value": "QGEN",
                    "label": "QGEN"
                },
                {
                    "value": "QSR",
                    "label": "QSR"
                },
                {
                    "value": "QTS",
                    "label": "QTS"
                },
                {
                    "value": "QTS-A",
                    "label": "QTS-A"
                },
                {
                    "value": "QTS-B",
                    "label": "QTS-B"
                },
                {
                    "value": "QTWO",
                    "label": "QTWO"
                },
                {
                    "value": "QUAD",
                    "label": "QUAD"
                },
                {
                    "value": "QUOT",
                    "label": "QUOT"
                },
                {
                    "value": "QVCC",
                    "label": "QVCC"
                },
                {
                    "value": "QVCD",
                    "label": "QVCD"
                },
                {
                    "value": "R",
                    "label": "R"
                },
                {
                    "value": "RA",
                    "label": "RA"
                },
                {
                    "value": "RACE",
                    "label": "RACE"
                },
                {
                    "value": "RAD",
                    "label": "RAD"
                },
                {
                    "value": "RAMP",
                    "label": "RAMP"
                },
                {
                    "value": "RBA",
                    "label": "RBA"
                },
                {
                    "value": "RBC",
                    "label": "RBC"
                },
                {
                    "value": "RBS",
                    "label": "RBS"
                },
                {
                    "value": "RC",
                    "label": "RC"
                },
                {
                    "value": "RCA",
                    "label": "RCA"
                },
                {
                    "value": "RCB",
                    "label": "RCB"
                },
                {
                    "value": "RCI",
                    "label": "RCI"
                },
                {
                    "value": "RCL",
                    "label": "RCL"
                },
                {
                    "value": "RCP",
                    "label": "RCP"
                },
                {
                    "value": "RCS",
                    "label": "RCS"
                },
                {
                    "value": "RCUS",
                    "label": "RCUS"
                },
                {
                    "value": "RDN",
                    "label": "RDN"
                },
                {
                    "value": "RDS.A",
                    "label": "RDS.A"
                },
                {
                    "value": "RDS.B",
                    "label": "RDS.B"
                },
                {
                    "value": "RDY",
                    "label": "RDY"
                },
                {
                    "value": "RE",
                    "label": "RE"
                },
                {
                    "value": "RELX",
                    "label": "RELX"
                },
                {
                    "value": "RENN",
                    "label": "RENN"
                },
                {
                    "value": "RES",
                    "label": "RES"
                },
                {
                    "value": "RESI",
                    "label": "RESI"
                },
                {
                    "value": "REV",
                    "label": "REV"
                },
                {
                    "value": "REVG",
                    "label": "REVG"
                },
                {
                    "value": "REX",
                    "label": "REX"
                },
                {
                    "value": "REX-A",
                    "label": "REX-A"
                },
                {
                    "value": "REX-B",
                    "label": "REX-B"
                },
                {
                    "value": "REX-C",
                    "label": "REX-C"
                },
                {
                    "value": "REXR",
                    "label": "REXR"
                },
                {
                    "value": "REZI",
                    "label": "REZI"
                },
                {
                    "value": "RF",
                    "label": "RF"
                },
                {
                    "value": "RF-A",
                    "label": "RF-A"
                },
                {
                    "value": "RF-B",
                    "label": "RF-B"
                },
                {
                    "value": "RF-C",
                    "label": "RF-C"
                },
                {
                    "value": "RFI",
                    "label": "RFI"
                },
                {
                    "value": "RFL",
                    "label": "RFL"
                },
                {
                    "value": "RFM",
                    "label": "RFM"
                },
                {
                    "value": "RFP",
                    "label": "RFP"
                },
                {
                    "value": "RGA",
                    "label": "RGA"
                },
                {
                    "value": "RGR",
                    "label": "RGR"
                },
                {
                    "value": "RGS",
                    "label": "RGS"
                },
                {
                    "value": "RGT",
                    "label": "RGT"
                },
                {
                    "value": "RH",
                    "label": "RH"
                },
                {
                    "value": "RHI",
                    "label": "RHI"
                },
                {
                    "value": "RHP",
                    "label": "RHP"
                },
                {
                    "value": "RIG",
                    "label": "RIG"
                },
                {
                    "value": "RIO",
                    "label": "RIO"
                },
                {
                    "value": "RIV",
                    "label": "RIV"
                },
                {
                    "value": "RJF",
                    "label": "RJF"
                },
                {
                    "value": "RL",
                    "label": "RL"
                },
                {
                    "value": "RLGY",
                    "label": "RLGY"
                },
                {
                    "value": "RLH",
                    "label": "RLH"
                },
                {
                    "value": "RLI",
                    "label": "RLI"
                },
                {
                    "value": "RLJ",
                    "label": "RLJ"
                },
                {
                    "value": "RLJ-A",
                    "label": "RLJ-A"
                },
                {
                    "value": "RM",
                    "label": "RM"
                },
                {
                    "value": "RMAX",
                    "label": "RMAX"
                },
                {
                    "value": "RMD",
                    "label": "RMD"
                },
                {
                    "value": "RMED",
                    "label": "RMED"
                },
                {
                    "value": "RMG",
                    "label": "RMG"
                },
                {
                    "value": "RMG.U",
                    "label": "RMG.U"
                },
                {
                    "value": "RMG.W",
                    "label": "RMG.W"
                },
                {
                    "value": "RMI",
                    "label": "RMI"
                },
                {
                    "value": "RMM",
                    "label": "RMM"
                },
                {
                    "value": "RMP.P",
                    "label": "RMP.P"
                },
                {
                    "value": "RMT",
                    "label": "RMT"
                },
                {
                    "value": "RNG",
                    "label": "RNG"
                },
                {
                    "value": "RNGR",
                    "label": "RNGR"
                },
                {
                    "value": "RNP",
                    "label": "RNP"
                },
                {
                    "value": "RNR",
                    "label": "RNR"
                },
                {
                    "value": "RNR-E",
                    "label": "RNR-E"
                },
                {
                    "value": "RNR-F",
                    "label": "RNR-F"
                },
                {
                    "value": "ROG",
                    "label": "ROG"
                },
                {
                    "value": "ROK",
                    "label": "ROK"
                },
                {
                    "value": "ROL",
                    "label": "ROL"
                },
                {
                    "value": "ROP",
                    "label": "ROP"
                },
                {
                    "value": "ROYT",
                    "label": "ROYT"
                },
                {
                    "value": "RPAI",
                    "label": "RPAI"
                },
                {
                    "value": "RPL.U",
                    "label": "RPL.U"
                },
                {
                    "value": "RPL.W",
                    "label": "RPL.W"
                },
                {
                    "value": "RPLA",
                    "label": "RPLA"
                },
                {
                    "value": "RPM",
                    "label": "RPM"
                },
                {
                    "value": "RPT",
                    "label": "RPT"
                },
                {
                    "value": "RPT-D",
                    "label": "RPT-D"
                },
                {
                    "value": "RQI",
                    "label": "RQI"
                },
                {
                    "value": "RRC",
                    "label": "RRC"
                },
                {
                    "value": "RRD",
                    "label": "RRD"
                },
                {
                    "value": "RS",
                    "label": "RS"
                },
                {
                    "value": "RSF",
                    "label": "RSF"
                },
                {
                    "value": "RSG",
                    "label": "RSG"
                },
                {
                    "value": "RST",
                    "label": "RST"
                },
                {
                    "value": "RTW",
                    "label": "RTW"
                },
                {
                    "value": "RTX",
                    "label": "RTX"
                },
                {
                    "value": "RUBI",
                    "label": "RUBI"
                },
                {
                    "value": "RVI",
                    "label": "RVI"
                },
                {
                    "value": "RVLV",
                    "label": "RVLV"
                },
                {
                    "value": "RVT",
                    "label": "RVT"
                },
                {
                    "value": "RWT",
                    "label": "RWT"
                },
                {
                    "value": "RXN",
                    "label": "RXN"
                },
                {
                    "value": "RY",
                    "label": "RY"
                },
                {
                    "value": "RY-T",
                    "label": "RY-T"
                },
                {
                    "value": "RYAM",
                    "label": "RYAM"
                },
                {
                    "value": "RYB",
                    "label": "RYB"
                },
                {
                    "value": "RYCE",
                    "label": "RYCE"
                },
                {
                    "value": "RYI",
                    "label": "RYI"
                },
                {
                    "value": "RYN",
                    "label": "RYN"
                },
                {
                    "value": "RZA",
                    "label": "RZA"
                },
                {
                    "value": "RZB",
                    "label": "RZB"
                },
                {
                    "value": "SA",
                    "label": "SA"
                },
                {
                    "value": "SAF",
                    "label": "SAF"
                },
                {
                    "value": "SAFE",
                    "label": "SAFE"
                },
                {
                    "value": "SAH",
                    "label": "SAH"
                },
                {
                    "value": "SAIC",
                    "label": "SAIC"
                },
                {
                    "value": "SAIL",
                    "label": "SAIL"
                },
                {
                    "value": "SALT",
                    "label": "SALT"
                },
                {
                    "value": "SAM",
                    "label": "SAM"
                },
                {
                    "value": "SAN",
                    "label": "SAN"
                },
                {
                    "value": "SAN-B",
                    "label": "SAN-B"
                },
                {
                    "value": "SAND",
                    "label": "SAND"
                },
                {
                    "value": "SAP",
                    "label": "SAP"
                },
                {
                    "value": "SAR",
                    "label": "SAR"
                },
                {
                    "value": "SAVE",
                    "label": "SAVE"
                },
                {
                    "value": "SB",
                    "label": "SB"
                },
                {
                    "value": "SB-C",
                    "label": "SB-C"
                },
                {
                    "value": "SB-D",
                    "label": "SB-D"
                },
                {
                    "value": "SBBA",
                    "label": "SBBA"
                },
                {
                    "value": "SBE",
                    "label": "SBE"
                },
                {
                    "value": "SBE.U",
                    "label": "SBE.U"
                },
                {
                    "value": "SBE.W",
                    "label": "SBE.W"
                },
                {
                    "value": "SBH",
                    "label": "SBH"
                },
                {
                    "value": "SBI",
                    "label": "SBI"
                },
                {
                    "value": "SBOW",
                    "label": "SBOW"
                },
                {
                    "value": "SBR",
                    "label": "SBR"
                },
                {
                    "value": "SBS",
                    "label": "SBS"
                },
                {
                    "value": "SBSW",
                    "label": "SBSW"
                },
                {
                    "value": "SC",
                    "label": "SC"
                },
                {
                    "value": "SCA",
                    "label": "SCA"
                },
                {
                    "value": "SCCO",
                    "label": "SCCO"
                },
                {
                    "value": "SCD",
                    "label": "SCD"
                },
                {
                    "value": "SCE-G",
                    "label": "SCE-G"
                },
                {
                    "value": "SCE-H",
                    "label": "SCE-H"
                },
                {
                    "value": "SCE-J",
                    "label": "SCE-J"
                },
                {
                    "value": "SCE-K",
                    "label": "SCE-K"
                },
                {
                    "value": "SCE-L",
                    "label": "SCE-L"
                },
                {
                    "value": "SCH-C",
                    "label": "SCH-C"
                },
                {
                    "value": "SCH-D",
                    "label": "SCH-D"
                },
                {
                    "value": "SCHW",
                    "label": "SCHW"
                },
                {
                    "value": "SCI",
                    "label": "SCI"
                },
                {
                    "value": "SCL",
                    "label": "SCL"
                },
                {
                    "value": "SCM",
                    "label": "SCM"
                },
                {
                    "value": "SCP.U",
                    "label": "SCP.U"
                },
                {
                    "value": "SCP.W",
                    "label": "SCP.W"
                },
                {
                    "value": "SCPE",
                    "label": "SCPE"
                },
                {
                    "value": "SCS",
                    "label": "SCS"
                },
                {
                    "value": "SCU",
                    "label": "SCU"
                },
                {
                    "value": "SCV.U",
                    "label": "SCV.U"
                },
                {
                    "value": "SCV.W",
                    "label": "SCV.W"
                },
                {
                    "value": "SCVX",
                    "label": "SCVX"
                },
                {
                    "value": "SCX",
                    "label": "SCX"
                },
                {
                    "value": "SD",
                    "label": "SD"
                },
                {
                    "value": "SDRL",
                    "label": "SDRL"
                },
                {
                    "value": "SE",
                    "label": "SE"
                },
                {
                    "value": "SEAS",
                    "label": "SEAS"
                },
                {
                    "value": "SEE",
                    "label": "SEE"
                },
                {
                    "value": "SEM",
                    "label": "SEM"
                },
                {
                    "value": "SERV",
                    "label": "SERV"
                },
                {
                    "value": "SF",
                    "label": "SF"
                },
                {
                    "value": "SF-A",
                    "label": "SF-A"
                },
                {
                    "value": "SF-B",
                    "label": "SF-B"
                },
                {
                    "value": "SF-C",
                    "label": "SF-C"
                },
                {
                    "value": "SFB",
                    "label": "SFB"
                },
                {
                    "value": "SFE",
                    "label": "SFE"
                },
                {
                    "value": "SFL",
                    "label": "SFL"
                },
                {
                    "value": "SFT.U",
                    "label": "SFT.U"
                },
                {
                    "value": "SFT.W",
                    "label": "SFT.W"
                },
                {
                    "value": "SFTW",
                    "label": "SFTW"
                },
                {
                    "value": "SFUN",
                    "label": "SFUN"
                },
                {
                    "value": "SGU",
                    "label": "SGU"
                },
                {
                    "value": "SHAK",
                    "label": "SHAK"
                },
                {
                    "value": "SHG",
                    "label": "SHG"
                },
                {
                    "value": "SHI",
                    "label": "SHI"
                },
                {
                    "value": "SHL.U",
                    "label": "SHL.U"
                },
                {
                    "value": "SHL.W",
                    "label": "SHL.W"
                },
                {
                    "value": "SHLL",
                    "label": "SHLL"
                },
                {
                    "value": "SHLX",
                    "label": "SHLX"
                },
                {
                    "value": "SHO",
                    "label": "SHO"
                },
                {
                    "value": "SHO-E",
                    "label": "SHO-E"
                },
                {
                    "value": "SHO-F",
                    "label": "SHO-F"
                },
                {
                    "value": "SHOP",
                    "label": "SHOP"
                },
                {
                    "value": "SHW",
                    "label": "SHW"
                },
                {
                    "value": "SI",
                    "label": "SI"
                },
                {
                    "value": "SID",
                    "label": "SID"
                },
                {
                    "value": "SIG",
                    "label": "SIG"
                },
                {
                    "value": "SII",
                    "label": "SII"
                },
                {
                    "value": "SIT-A",
                    "label": "SIT-A"
                },
                {
                    "value": "SIT-K",
                    "label": "SIT-K"
                },
                {
                    "value": "SITC",
                    "label": "SITC"
                },
                {
                    "value": "SITE",
                    "label": "SITE"
                },
                {
                    "value": "SIX",
                    "label": "SIX"
                },
                {
                    "value": "SJI",
                    "label": "SJI"
                },
                {
                    "value": "SJIJ",
                    "label": "SJIJ"
                },
                {
                    "value": "SJIU",
                    "label": "SJIU"
                },
                {
                    "value": "SJM",
                    "label": "SJM"
                },
                {
                    "value": "SJR",
                    "label": "SJR"
                },
                {
                    "value": "SJT",
                    "label": "SJT"
                },
                {
                    "value": "SJW",
                    "label": "SJW"
                },
                {
                    "value": "SKM",
                    "label": "SKM"
                },
                {
                    "value": "SKT",
                    "label": "SKT"
                },
                {
                    "value": "SKX",
                    "label": "SKX"
                },
                {
                    "value": "SKY",
                    "label": "SKY"
                },
                {
                    "value": "SLB",
                    "label": "SLB"
                },
                {
                    "value": "SLCA",
                    "label": "SLCA"
                },
                {
                    "value": "SLF",
                    "label": "SLF"
                },
                {
                    "value": "SLG",
                    "label": "SLG"
                },
                {
                    "value": "SLG-I",
                    "label": "SLG-I"
                },
                {
                    "value": "SLQT",
                    "label": "SLQT"
                },
                {
                    "value": "SM",
                    "label": "SM"
                },
                {
                    "value": "SMAR",
                    "label": "SMAR"
                },
                {
                    "value": "SMFG",
                    "label": "SMFG"
                },
                {
                    "value": "SMG",
                    "label": "SMG"
                },
                {
                    "value": "SMHI",
                    "label": "SMHI"
                },
                {
                    "value": "SMLP",
                    "label": "SMLP"
                },
                {
                    "value": "SMM",
                    "label": "SMM"
                },
                {
                    "value": "SMP",
                    "label": "SMP"
                },
                {
                    "value": "SNA",
                    "label": "SNA"
                },
                {
                    "value": "SNAP",
                    "label": "SNAP"
                },
                {
                    "value": "SNDR",
                    "label": "SNDR"
                },
                {
                    "value": "SNE",
                    "label": "SNE"
                },
                {
                    "value": "SNN",
                    "label": "SNN"
                },
                {
                    "value": "SNP",
                    "label": "SNP"
                },
                {
                    "value": "SNR",
                    "label": "SNR"
                },
                {
                    "value": "SNV",
                    "label": "SNV"
                },
                {
                    "value": "SNV-D",
                    "label": "SNV-D"
                },
                {
                    "value": "SNV-E",
                    "label": "SNV-E"
                },
                {
                    "value": "SNX",
                    "label": "SNX"
                },
                {
                    "value": "SO",
                    "label": "SO"
                },
                {
                    "value": "SOA.U",
                    "label": "SOA.U"
                },
                {
                    "value": "SOA.W",
                    "label": "SOA.W"
                },
                {
                    "value": "SOGO",
                    "label": "SOGO"
                },
                {
                    "value": "SOI",
                    "label": "SOI"
                },
                {
                    "value": "SOJA",
                    "label": "SOJA"
                },
                {
                    "value": "SOJB",
                    "label": "SOJB"
                },
                {
                    "value": "SOJC",
                    "label": "SOJC"
                },
                {
                    "value": "SOJD",
                    "label": "SOJD"
                },
                {
                    "value": "SOL",
                    "label": "SOL"
                },
                {
                    "value": "SOLN",
                    "label": "SOLN"
                },
                {
                    "value": "SON",
                    "label": "SON"
                },
                {
                    "value": "SOR",
                    "label": "SOR"
                },
                {
                    "value": "SPA.U",
                    "label": "SPA.U"
                },
                {
                    "value": "SPA.W",
                    "label": "SPA.W"
                },
                {
                    "value": "SPAQ",
                    "label": "SPAQ"
                },
                {
                    "value": "SPB",
                    "label": "SPB"
                },
                {
                    "value": "SPCE",
                    "label": "SPCE"
                },
                {
                    "value": "SPE",
                    "label": "SPE"
                },
                {
                    "value": "SPE-B",
                    "label": "SPE-B"
                },
                {
                    "value": "SPG",
                    "label": "SPG"
                },
                {
                    "value": "SPG-J",
                    "label": "SPG-J"
                },
                {
                    "value": "SPGI",
                    "label": "SPGI"
                },
                {
                    "value": "SPH",
                    "label": "SPH"
                },
                {
                    "value": "SPL-A",
                    "label": "SPL-A"
                },
                {
                    "value": "SPLP",
                    "label": "SPLP"
                },
                {
                    "value": "SPN",
                    "label": "SPN"
                },
                {
                    "value": "SPOT",
                    "label": "SPOT"
                },
                {
                    "value": "SPR",
                    "label": "SPR"
                },
                {
                    "value": "SPXC",
                    "label": "SPXC"
                },
                {
                    "value": "SPXX",
                    "label": "SPXX"
                },
                {
                    "value": "SQ",
                    "label": "SQ"
                },
                {
                    "value": "SQM",
                    "label": "SQM"
                },
                {
                    "value": "SQNS",
                    "label": "SQNS"
                },
                {
                    "value": "SR",
                    "label": "SR"
                },
                {
                    "value": "SR-A",
                    "label": "SR-A"
                },
                {
                    "value": "SRC",
                    "label": "SRC"
                },
                {
                    "value": "SRC-A",
                    "label": "SRC-A"
                },
                {
                    "value": "SRE",
                    "label": "SRE"
                },
                {
                    "value": "SRE-A",
                    "label": "SRE-A"
                },
                {
                    "value": "SRE-B",
                    "label": "SRE-B"
                },
                {
                    "value": "SREA",
                    "label": "SREA"
                },
                {
                    "value": "SRG",
                    "label": "SRG"
                },
                {
                    "value": "SRG-A",
                    "label": "SRG-A"
                },
                {
                    "value": "SRI",
                    "label": "SRI"
                },
                {
                    "value": "SRL",
                    "label": "SRL"
                },
                {
                    "value": "SRLP",
                    "label": "SRLP"
                },
                {
                    "value": "SRT",
                    "label": "SRT"
                },
                {
                    "value": "SRV",
                    "label": "SRV"
                },
                {
                    "value": "SSD",
                    "label": "SSD"
                },
                {
                    "value": "SSL",
                    "label": "SSL"
                },
                {
                    "value": "SSTK",
                    "label": "SSTK"
                },
                {
                    "value": "ST",
                    "label": "ST"
                },
                {
                    "value": "STA-C",
                    "label": "STA-C"
                },
                {
                    "value": "STA-D",
                    "label": "STA-D"
                },
                {
                    "value": "STA-G",
                    "label": "STA-G"
                },
                {
                    "value": "STA-I",
                    "label": "STA-I"
                },
                {
                    "value": "STAG",
                    "label": "STAG"
                },
                {
                    "value": "STAR",
                    "label": "STAR"
                },
                {
                    "value": "STC",
                    "label": "STC"
                },
                {
                    "value": "STE",
                    "label": "STE"
                },
                {
                    "value": "STG",
                    "label": "STG"
                },
                {
                    "value": "STK",
                    "label": "STK"
                },
                {
                    "value": "STL",
                    "label": "STL"
                },
                {
                    "value": "STL-A",
                    "label": "STL-A"
                },
                {
                    "value": "STM",
                    "label": "STM"
                },
                {
                    "value": "STN",
                    "label": "STN"
                },
                {
                    "value": "STNG",
                    "label": "STNG"
                },
                {
                    "value": "STON",
                    "label": "STON"
                },
                {
                    "value": "STOR",
                    "label": "STOR"
                },
                {
                    "value": "STT",
                    "label": "STT"
                },
                {
                    "value": "STT-D",
                    "label": "STT-D"
                },
                {
                    "value": "STT-G",
                    "label": "STT-G"
                },
                {
                    "value": "STWD",
                    "label": "STWD"
                },
                {
                    "value": "STZ",
                    "label": "STZ"
                },
                {
                    "value": "STZ.B",
                    "label": "STZ.B"
                },
                {
                    "value": "SU",
                    "label": "SU"
                },
                {
                    "value": "SUI",
                    "label": "SUI"
                },
                {
                    "value": "SUM",
                    "label": "SUM"
                },
                {
                    "value": "SUN",
                    "label": "SUN"
                },
                {
                    "value": "SUP",
                    "label": "SUP"
                },
                {
                    "value": "SUPV",
                    "label": "SUPV"
                },
                {
                    "value": "SUZ",
                    "label": "SUZ"
                },
                {
                    "value": "SWCH",
                    "label": "SWCH"
                },
                {
                    "value": "SWI",
                    "label": "SWI"
                },
                {
                    "value": "SWK",
                    "label": "SWK"
                },
                {
                    "value": "SWM",
                    "label": "SWM"
                },
                {
                    "value": "SWN",
                    "label": "SWN"
                },
                {
                    "value": "SWT",
                    "label": "SWT"
                },
                {
                    "value": "SWX",
                    "label": "SWX"
                },
                {
                    "value": "SWZ",
                    "label": "SWZ"
                },
                {
                    "value": "SXC",
                    "label": "SXC"
                },
                {
                    "value": "SXI",
                    "label": "SXI"
                },
                {
                    "value": "SXT",
                    "label": "SXT"
                },
                {
                    "value": "SYF",
                    "label": "SYF"
                },
                {
                    "value": "SYF-A",
                    "label": "SYF-A"
                },
                {
                    "value": "SYK",
                    "label": "SYK"
                },
                {
                    "value": "SYX",
                    "label": "SYX"
                },
                {
                    "value": "SYY",
                    "label": "SYY"
                },
                {
                    "value": "SZC",
                    "label": "SZC"
                },
                {
                    "value": "T",
                    "label": "T"
                },
                {
                    "value": "T-A",
                    "label": "T-A"
                },
                {
                    "value": "T-C",
                    "label": "T-C"
                },
                {
                    "value": "TAC",
                    "label": "TAC"
                },
                {
                    "value": "TAK",
                    "label": "TAK"
                },
                {
                    "value": "TAL",
                    "label": "TAL"
                },
                {
                    "value": "TALO",
                    "label": "TALO"
                },
                {
                    "value": "TAP",
                    "label": "TAP"
                },
                {
                    "value": "TAP.A",
                    "label": "TAP.A"
                },
                {
                    "value": "TARO",
                    "label": "TARO"
                },
                {
                    "value": "TBB",
                    "label": "TBB"
                },
                {
                    "value": "TBC",
                    "label": "TBC"
                },
                {
                    "value": "TBI",
                    "label": "TBI"
                },
                {
                    "value": "TCI",
                    "label": "TCI"
                },
                {
                    "value": "TCO",
                    "label": "TCO"
                },
                {
                    "value": "TCO-J",
                    "label": "TCO-J"
                },
                {
                    "value": "TCO-K",
                    "label": "TCO-K"
                },
                {
                    "value": "TCP",
                    "label": "TCP"
                },
                {
                    "value": "TCRW",
                    "label": "TCRW"
                },
                {
                    "value": "TCRZ",
                    "label": "TCRZ"
                },
                {
                    "value": "TCS",
                    "label": "TCS"
                },
                {
                    "value": "TD",
                    "label": "TD"
                },
                {
                    "value": "TDA",
                    "label": "TDA"
                },
                {
                    "value": "TDC",
                    "label": "TDC"
                },
                {
                    "value": "TDE",
                    "label": "TDE"
                },
                {
                    "value": "TDF",
                    "label": "TDF"
                },
                {
                    "value": "TDG",
                    "label": "TDG"
                },
                {
                    "value": "TDI",
                    "label": "TDI"
                },
                {
                    "value": "TDJ",
                    "label": "TDJ"
                },
                {
                    "value": "TDOC",
                    "label": "TDOC"
                },
                {
                    "value": "TDS",
                    "label": "TDS"
                },
                {
                    "value": "TDW",
                    "label": "TDW"
                },
                {
                    "value": "TDW.A",
                    "label": "TDW.A"
                },
                {
                    "value": "TDW.B",
                    "label": "TDW.B"
                },
                {
                    "value": "TDY",
                    "label": "TDY"
                },
                {
                    "value": "TEAF",
                    "label": "TEAF"
                },
                {
                    "value": "TECK",
                    "label": "TECK"
                },
                {
                    "value": "TEF",
                    "label": "TEF"
                },
                {
                    "value": "TEI",
                    "label": "TEI"
                },
                {
                    "value": "TEL",
                    "label": "TEL"
                },
                {
                    "value": "TEN",
                    "label": "TEN"
                },
                {
                    "value": "TEO",
                    "label": "TEO"
                },
                {
                    "value": "TEVA",
                    "label": "TEVA"
                },
                {
                    "value": "TEX",
                    "label": "TEX"
                },
                {
                    "value": "TFC",
                    "label": "TFC"
                },
                {
                    "value": "TFC-F",
                    "label": "TFC-F"
                },
                {
                    "value": "TFC-G",
                    "label": "TFC-G"
                },
                {
                    "value": "TFC-H",
                    "label": "TFC-H"
                },
                {
                    "value": "TFC-I",
                    "label": "TFC-I"
                },
                {
                    "value": "TFC-O",
                    "label": "TFC-O"
                },
                {
                    "value": "TFII",
                    "label": "TFII"
                },
                {
                    "value": "TFX",
                    "label": "TFX"
                },
                {
                    "value": "TG",
                    "label": "TG"
                },
                {
                    "value": "TGH",
                    "label": "TGH"
                },
                {
                    "value": "TGI",
                    "label": "TGI"
                },
                {
                    "value": "TGNA",
                    "label": "TGNA"
                },
                {
                    "value": "TGP",
                    "label": "TGP"
                },
                {
                    "value": "TGP-A",
                    "label": "TGP-A"
                },
                {
                    "value": "TGP-B",
                    "label": "TGP-B"
                },
                {
                    "value": "TGS",
                    "label": "TGS"
                },
                {
                    "value": "TGT",
                    "label": "TGT"
                },
                {
                    "value": "THC",
                    "label": "THC"
                },
                {
                    "value": "THG",
                    "label": "THG"
                },
                {
                    "value": "THGA",
                    "label": "THGA"
                },
                {
                    "value": "THO",
                    "label": "THO"
                },
                {
                    "value": "THQ",
                    "label": "THQ"
                },
                {
                    "value": "THR",
                    "label": "THR"
                },
                {
                    "value": "THS",
                    "label": "THS"
                },
                {
                    "value": "THW",
                    "label": "THW"
                },
                {
                    "value": "TIF",
                    "label": "TIF"
                },
                {
                    "value": "TISI",
                    "label": "TISI"
                },
                {
                    "value": "TJX",
                    "label": "TJX"
                },
                {
                    "value": "TK",
                    "label": "TK"
                },
                {
                    "value": "TKC",
                    "label": "TKC"
                },
                {
                    "value": "TKR",
                    "label": "TKR"
                },
                {
                    "value": "TLI",
                    "label": "TLI"
                },
                {
                    "value": "TLK",
                    "label": "TLK"
                },
                {
                    "value": "TLRD",
                    "label": "TLRD"
                },
                {
                    "value": "TLYS",
                    "label": "TLYS"
                },
                {
                    "value": "TM",
                    "label": "TM"
                },
                {
                    "value": "TME",
                    "label": "TME"
                },
                {
                    "value": "TMHC",
                    "label": "TMHC"
                },
                {
                    "value": "TMO",
                    "label": "TMO"
                },
                {
                    "value": "TMST",
                    "label": "TMST"
                },
                {
                    "value": "TNC",
                    "label": "TNC"
                },
                {
                    "value": "TNET",
                    "label": "TNET"
                },
                {
                    "value": "TNK",
                    "label": "TNK"
                },
                {
                    "value": "TNP",
                    "label": "TNP"
                },
                {
                    "value": "TNP-C",
                    "label": "TNP-C"
                },
                {
                    "value": "TNP-D",
                    "label": "TNP-D"
                },
                {
                    "value": "TNP-E",
                    "label": "TNP-E"
                },
                {
                    "value": "TNP-F",
                    "label": "TNP-F"
                },
                {
                    "value": "TOL",
                    "label": "TOL"
                },
                {
                    "value": "TOT",
                    "label": "TOT"
                },
                {
                    "value": "TPB",
                    "label": "TPB"
                },
                {
                    "value": "TPC",
                    "label": "TPC"
                },
                {
                    "value": "TPH",
                    "label": "TPH"
                },
                {
                    "value": "TPL",
                    "label": "TPL"
                },
                {
                    "value": "TPR",
                    "label": "TPR"
                },
                {
                    "value": "TPRE",
                    "label": "TPRE"
                },
                {
                    "value": "TPVG",
                    "label": "TPVG"
                },
                {
                    "value": "TPVY",
                    "label": "TPVY"
                },
                {
                    "value": "TPX",
                    "label": "TPX"
                },
                {
                    "value": "TPZ",
                    "label": "TPZ"
                },
                {
                    "value": "TR",
                    "label": "TR"
                },
                {
                    "value": "TRC",
                    "label": "TRC"
                },
                {
                    "value": "TREC",
                    "label": "TREC"
                },
                {
                    "value": "TREX",
                    "label": "TREX"
                },
                {
                    "value": "TRGP",
                    "label": "TRGP"
                },
                {
                    "value": "TRI",
                    "label": "TRI"
                },
                {
                    "value": "TRN",
                    "label": "TRN"
                },
                {
                    "value": "TRN.U",
                    "label": "TRN.U"
                },
                {
                    "value": "TRN.W",
                    "label": "TRN.W"
                },
                {
                    "value": "TRNE",
                    "label": "TRNE"
                },
                {
                    "value": "TRNO",
                    "label": "TRNO"
                },
                {
                    "value": "TROX",
                    "label": "TROX"
                },
                {
                    "value": "TRP",
                    "label": "TRP"
                },
                {
                    "value": "TRQ",
                    "label": "TRQ"
                },
                {
                    "value": "TRT-A",
                    "label": "TRT-A"
                },
                {
                    "value": "TRT-B",
                    "label": "TRT-B"
                },
                {
                    "value": "TRT-C",
                    "label": "TRT-C"
                },
                {
                    "value": "TRT-D",
                    "label": "TRT-D"
                },
                {
                    "value": "TRTN",
                    "label": "TRTN"
                },
                {
                    "value": "TRTX",
                    "label": "TRTX"
                },
                {
                    "value": "TRU",
                    "label": "TRU"
                },
                {
                    "value": "TRV",
                    "label": "TRV"
                },
                {
                    "value": "TRWH",
                    "label": "TRWH"
                },
                {
                    "value": "TS",
                    "label": "TS"
                },
                {
                    "value": "TSE",
                    "label": "TSE"
                },
                {
                    "value": "TSI",
                    "label": "TSI"
                },
                {
                    "value": "TSLA",
                    "label": "TSLA"
                },
                {
                    "value": "TSLX",
                    "label": "TSLX"
                },
                {
                    "value": "TSM",
                    "label": "TSM"
                },
                {
                    "value": "TSN",
                    "label": "TSN"
                },
                {
                    "value": "TSQ",
                    "label": "TSQ"
                },
                {
                    "value": "TSU",
                    "label": "TSU"
                },
                {
                    "value": "TT",
                    "label": "TT"
                },
                {
                    "value": "TTC",
                    "label": "TTC"
                },
                {
                    "value": "TTI",
                    "label": "TTI"
                },
                {
                    "value": "TTM",
                    "label": "TTM"
                },
                {
                    "value": "TTP",
                    "label": "TTP"
                },
                {
                    "value": "TU",
                    "label": "TU"
                },
                {
                    "value": "TUFN",
                    "label": "TUFN"
                },
                {
                    "value": "TUP",
                    "label": "TUP"
                },
                {
                    "value": "TV",
                    "label": "TV"
                },
                {
                    "value": "TVC",
                    "label": "TVC"
                },
                {
                    "value": "TVE",
                    "label": "TVE"
                },
                {
                    "value": "TWI",
                    "label": "TWI"
                },
                {
                    "value": "TWLO",
                    "label": "TWLO"
                },
                {
                    "value": "TWN",
                    "label": "TWN"
                },
                {
                    "value": "TWO",
                    "label": "TWO"
                },
                {
                    "value": "TWO-A",
                    "label": "TWO-A"
                },
                {
                    "value": "TWO-B",
                    "label": "TWO-B"
                },
                {
                    "value": "TWO-C",
                    "label": "TWO-C"
                },
                {
                    "value": "TWO-D",
                    "label": "TWO-D"
                },
                {
                    "value": "TWO-E",
                    "label": "TWO-E"
                },
                {
                    "value": "TWTR",
                    "label": "TWTR"
                },
                {
                    "value": "TX",
                    "label": "TX"
                },
                {
                    "value": "TXT",
                    "label": "TXT"
                },
                {
                    "value": "TY",
                    "label": "TY"
                },
                {
                    "value": "TY.P",
                    "label": "TY.P"
                },
                {
                    "value": "TYG",
                    "label": "TYG"
                },
                {
                    "value": "TYL",
                    "label": "TYL"
                },
                {
                    "value": "UA",
                    "label": "UA"
                },
                {
                    "value": "UAA",
                    "label": "UAA"
                },
                {
                    "value": "UAN",
                    "label": "UAN"
                },
                {
                    "value": "UBA",
                    "label": "UBA"
                },
                {
                    "value": "UBER",
                    "label": "UBER"
                },
                {
                    "value": "UBP",
                    "label": "UBP"
                },
                {
                    "value": "UBP-H",
                    "label": "UBP-H"
                },
                {
                    "value": "UBP-K",
                    "label": "UBP-K"
                },
                {
                    "value": "UBS",
                    "label": "UBS"
                },
                {
                    "value": "UDR",
                    "label": "UDR"
                },
                {
                    "value": "UE",
                    "label": "UE"
                },
                {
                    "value": "UFI",
                    "label": "UFI"
                },
                {
                    "value": "UFS",
                    "label": "UFS"
                },
                {
                    "value": "UGI",
                    "label": "UGI"
                },
                {
                    "value": "UGP",
                    "label": "UGP"
                },
                {
                    "value": "UHS",
                    "label": "UHS"
                },
                {
                    "value": "UHT",
                    "label": "UHT"
                },
                {
                    "value": "UI",
                    "label": "UI"
                },
                {
                    "value": "UIS",
                    "label": "UIS"
                },
                {
                    "value": "UL",
                    "label": "UL"
                },
                {
                    "value": "UMC",
                    "label": "UMC"
                },
                {
                    "value": "UMH",
                    "label": "UMH"
                },
                {
                    "value": "UMH-B",
                    "label": "UMH-B"
                },
                {
                    "value": "UMH-C",
                    "label": "UMH-C"
                },
                {
                    "value": "UMH-D",
                    "label": "UMH-D"
                },
                {
                    "value": "UN",
                    "label": "UN"
                },
                {
                    "value": "UNF",
                    "label": "UNF"
                },
                {
                    "value": "UNFI",
                    "label": "UNFI"
                },
                {
                    "value": "UNH",
                    "label": "UNH"
                },
                {
                    "value": "UNM",
                    "label": "UNM"
                },
                {
                    "value": "UNMA",
                    "label": "UNMA"
                },
                {
                    "value": "UNP",
                    "label": "UNP"
                },
                {
                    "value": "UNVR",
                    "label": "UNVR"
                },
                {
                    "value": "UPS",
                    "label": "UPS"
                },
                {
                    "value": "URI",
                    "label": "URI"
                },
                {
                    "value": "USA",
                    "label": "USA"
                },
                {
                    "value": "USAC",
                    "label": "USAC"
                },
                {
                    "value": "USB",
                    "label": "USB"
                },
                {
                    "value": "USB-A",
                    "label": "USB-A"
                },
                {
                    "value": "USB-H",
                    "label": "USB-H"
                },
                {
                    "value": "USB-M",
                    "label": "USB-M"
                },
                {
                    "value": "USB-O",
                    "label": "USB-O"
                },
                {
                    "value": "USB-P",
                    "label": "USB-P"
                },
                {
                    "value": "USDP",
                    "label": "USDP"
                },
                {
                    "value": "USFD",
                    "label": "USFD"
                },
                {
                    "value": "USM",
                    "label": "USM"
                },
                {
                    "value": "USNA",
                    "label": "USNA"
                },
                {
                    "value": "USPH",
                    "label": "USPH"
                },
                {
                    "value": "USX",
                    "label": "USX"
                },
                {
                    "value": "UTF",
                    "label": "UTF"
                },
                {
                    "value": "UTI",
                    "label": "UTI"
                },
                {
                    "value": "UTL",
                    "label": "UTL"
                },
                {
                    "value": "UVE",
                    "label": "UVE"
                },
                {
                    "value": "UVV",
                    "label": "UVV"
                },
                {
                    "value": "UZA",
                    "label": "UZA"
                },
                {
                    "value": "UZB",
                    "label": "UZB"
                },
                {
                    "value": "UZC",
                    "label": "UZC"
                },
                {
                    "value": "V",
                    "label": "V"
                },
                {
                    "value": "VAC",
                    "label": "VAC"
                },
                {
                    "value": "VAL",
                    "label": "VAL"
                },
                {
                    "value": "VALE",
                    "label": "VALE"
                },
                {
                    "value": "VAM",
                    "label": "VAM"
                },
                {
                    "value": "VAPO",
                    "label": "VAPO"
                },
                {
                    "value": "VAR",
                    "label": "VAR"
                },
                {
                    "value": "VBF",
                    "label": "VBF"
                },
                {
                    "value": "VCIF",
                    "label": "VCIF"
                },
                {
                    "value": "VCRA",
                    "label": "VCRA"
                },
                {
                    "value": "VCV",
                    "label": "VCV"
                },
                {
                    "value": "VEC",
                    "label": "VEC"
                },
                {
                    "value": "VEDL",
                    "label": "VEDL"
                },
                {
                    "value": "VEEV",
                    "label": "VEEV"
                },
                {
                    "value": "VEL",
                    "label": "VEL"
                },
                {
                    "value": "VER",
                    "label": "VER"
                },
                {
                    "value": "VER-F",
                    "label": "VER-F"
                },
                {
                    "value": "VER.U",
                    "label": "VER.U"
                },
                {
                    "value": "VET",
                    "label": "VET"
                },
                {
                    "value": "VFC",
                    "label": "VFC"
                },
                {
                    "value": "VGI",
                    "label": "VGI"
                },
                {
                    "value": "VGM",
                    "label": "VGM"
                },
                {
                    "value": "VGR",
                    "label": "VGR"
                },
                {
                    "value": "VHI",
                    "label": "VHI"
                },
                {
                    "value": "VICI",
                    "label": "VICI"
                },
                {
                    "value": "VIPS",
                    "label": "VIPS"
                },
                {
                    "value": "VIST",
                    "label": "VIST"
                },
                {
                    "value": "VIV",
                    "label": "VIV"
                },
                {
                    "value": "VJET",
                    "label": "VJET"
                },
                {
                    "value": "VKQ",
                    "label": "VKQ"
                },
                {
                    "value": "VLO",
                    "label": "VLO"
                },
                {
                    "value": "VLRS",
                    "label": "VLRS"
                },
                {
                    "value": "VLT",
                    "label": "VLT"
                },
                {
                    "value": "VMC",
                    "label": "VMC"
                },
                {
                    "value": "VMI",
                    "label": "VMI"
                },
                {
                    "value": "VMO",
                    "label": "VMO"
                },
                {
                    "value": "VMW",
                    "label": "VMW"
                },
                {
                    "value": "VNCE",
                    "label": "VNCE"
                },
                {
                    "value": "VNE",
                    "label": "VNE"
                },
                {
                    "value": "VNO",
                    "label": "VNO"
                },
                {
                    "value": "VNO-K",
                    "label": "VNO-K"
                },
                {
                    "value": "VNO-L",
                    "label": "VNO-L"
                },
                {
                    "value": "VNO-M",
                    "label": "VNO-M"
                },
                {
                    "value": "VNTR",
                    "label": "VNTR"
                },
                {
                    "value": "VOC",
                    "label": "VOC"
                },
                {
                    "value": "VOY-B",
                    "label": "VOY-B"
                },
                {
                    "value": "VOYA",
                    "label": "VOYA"
                },
                {
                    "value": "VPG",
                    "label": "VPG"
                },
                {
                    "value": "VPV",
                    "label": "VPV"
                },
                {
                    "value": "VRS",
                    "label": "VRS"
                },
                {
                    "value": "VRT",
                    "label": "VRT"
                },
                {
                    "value": "VRT.W",
                    "label": "VRT.W"
                },
                {
                    "value": "VRTV",
                    "label": "VRTV"
                },
                {
                    "value": "VSH",
                    "label": "VSH"
                },
                {
                    "value": "VSLR",
                    "label": "VSLR"
                },
                {
                    "value": "VST",
                    "label": "VST"
                },
                {
                    "value": "VST.A",
                    "label": "VST.A"
                },
                {
                    "value": "VSTO",
                    "label": "VSTO"
                },
                {
                    "value": "VTA",
                    "label": "VTA"
                },
                {
                    "value": "VTN",
                    "label": "VTN"
                },
                {
                    "value": "VTOL",
                    "label": "VTOL"
                },
                {
                    "value": "VTR",
                    "label": "VTR"
                },
                {
                    "value": "VVI",
                    "label": "VVI"
                },
                {
                    "value": "VVN.W",
                    "label": "VVN.W"
                },
                {
                    "value": "VVNT",
                    "label": "VVNT"
                },
                {
                    "value": "VVR",
                    "label": "VVR"
                },
                {
                    "value": "VVV",
                    "label": "VVV"
                },
                {
                    "value": "VZ",
                    "label": "VZ"
                },
                {
                    "value": "W",
                    "label": "W"
                },
                {
                    "value": "WAB",
                    "label": "WAB"
                },
                {
                    "value": "WAL",
                    "label": "WAL"
                },
                {
                    "value": "WALA",
                    "label": "WALA"
                },
                {
                    "value": "WAT",
                    "label": "WAT"
                },
                {
                    "value": "WBAI",
                    "label": "WBAI"
                },
                {
                    "value": "WBK",
                    "label": "WBK"
                },
                {
                    "value": "WBS",
                    "label": "WBS"
                },
                {
                    "value": "WBS-F",
                    "label": "WBS-F"
                },
                {
                    "value": "WBT",
                    "label": "WBT"
                },
                {
                    "value": "WCC",
                    "label": "WCC"
                },
                {
                    "value": "WCC-A",
                    "label": "WCC-A"
                },
                {
                    "value": "WCN",
                    "label": "WCN"
                },
                {
                    "value": "WD",
                    "label": "WD"
                },
                {
                    "value": "WDR",
                    "label": "WDR"
                },
                {
                    "value": "WEA",
                    "label": "WEA"
                },
                {
                    "value": "WEC",
                    "label": "WEC"
                },
                {
                    "value": "WEI",
                    "label": "WEI"
                },
                {
                    "value": "WELL",
                    "label": "WELL"
                },
                {
                    "value": "WES",
                    "label": "WES"
                },
                {
                    "value": "WEX",
                    "label": "WEX"
                },
                {
                    "value": "WF",
                    "label": "WF"
                },
                {
                    "value": "WFC",
                    "label": "WFC"
                },
                {
                    "value": "WFC-L",
                    "label": "WFC-L"
                },
                {
                    "value": "WFC-N",
                    "label": "WFC-N"
                },
                {
                    "value": "WFC-O",
                    "label": "WFC-O"
                },
                {
                    "value": "WFC-P",
                    "label": "WFC-P"
                },
                {
                    "value": "WFC-Q",
                    "label": "WFC-Q"
                },
                {
                    "value": "WFC-R",
                    "label": "WFC-R"
                },
                {
                    "value": "WFC-T",
                    "label": "WFC-T"
                },
                {
                    "value": "WFC-V",
                    "label": "WFC-V"
                },
                {
                    "value": "WFC-W",
                    "label": "WFC-W"
                },
                {
                    "value": "WFC-X",
                    "label": "WFC-X"
                },
                {
                    "value": "WFC-Y",
                    "label": "WFC-Y"
                },
                {
                    "value": "WFC-Z",
                    "label": "WFC-Z"
                },
                {
                    "value": "WGO",
                    "label": "WGO"
                },
                {
                    "value": "WH",
                    "label": "WH"
                },
                {
                    "value": "WHD",
                    "label": "WHD"
                },
                {
                    "value": "WHG",
                    "label": "WHG"
                },
                {
                    "value": "WHR",
                    "label": "WHR"
                },
                {
                    "value": "WIA",
                    "label": "WIA"
                },
                {
                    "value": "WIT",
                    "label": "WIT"
                },
                {
                    "value": "WIW",
                    "label": "WIW"
                },
                {
                    "value": "WK",
                    "label": "WK"
                },
                {
                    "value": "WLK",
                    "label": "WLK"
                },
                {
                    "value": "WLKP",
                    "label": "WLKP"
                },
                {
                    "value": "WLL",
                    "label": "WLL"
                },
                {
                    "value": "WM",
                    "label": "WM"
                },
                {
                    "value": "WMB",
                    "label": "WMB"
                },
                {
                    "value": "WMC",
                    "label": "WMC"
                },
                {
                    "value": "WMK",
                    "label": "WMK"
                },
                {
                    "value": "WMS",
                    "label": "WMS"
                },
                {
                    "value": "WMT",
                    "label": "WMT"
                },
                {
                    "value": "WNC",
                    "label": "WNC"
                },
                {
                    "value": "WNS",
                    "label": "WNS"
                },
                {
                    "value": "WOR",
                    "label": "WOR"
                },
                {
                    "value": "WORK",
                    "label": "WORK"
                },
                {
                    "value": "WOW",
                    "label": "WOW"
                },
                {
                    "value": "WPC",
                    "label": "WPC"
                },
                {
                    "value": "WPF.U",
                    "label": "WPF.U"
                },
                {
                    "value": "WPG",
                    "label": "WPG"
                },
                {
                    "value": "WPG-H",
                    "label": "WPG-H"
                },
                {
                    "value": "WPG-I",
                    "label": "WPG-I"
                },
                {
                    "value": "WPM",
                    "label": "WPM"
                },
                {
                    "value": "WPP",
                    "label": "WPP"
                },
                {
                    "value": "WPX",
                    "label": "WPX"
                },
                {
                    "value": "WRB",
                    "label": "WRB"
                },
                {
                    "value": "WRB-B",
                    "label": "WRB-B"
                },
                {
                    "value": "WRB-C",
                    "label": "WRB-C"
                },
                {
                    "value": "WRB-D",
                    "label": "WRB-D"
                },
                {
                    "value": "WRB-E",
                    "label": "WRB-E"
                },
                {
                    "value": "WRB-F",
                    "label": "WRB-F"
                },
                {
                    "value": "WRE",
                    "label": "WRE"
                },
                {
                    "value": "WRI",
                    "label": "WRI"
                },
                {
                    "value": "WRK",
                    "label": "WRK"
                },
                {
                    "value": "WSM",
                    "label": "WSM"
                },
                {
                    "value": "WSO",
                    "label": "WSO"
                },
                {
                    "value": "WSO.B",
                    "label": "WSO.B"
                },
                {
                    "value": "WSR",
                    "label": "WSR"
                },
                {
                    "value": "WST",
                    "label": "WST"
                },
                {
                    "value": "WTI",
                    "label": "WTI"
                },
                {
                    "value": "WTM",
                    "label": "WTM"
                },
                {
                    "value": "WTRG",
                    "label": "WTRG"
                },
                {
                    "value": "WTRU",
                    "label": "WTRU"
                },
                {
                    "value": "WTS",
                    "label": "WTS"
                },
                {
                    "value": "WTTR",
                    "label": "WTTR"
                },
                {
                    "value": "WU",
                    "label": "WU"
                },
                {
                    "value": "WUBA",
                    "label": "WUBA"
                },
                {
                    "value": "WWE",
                    "label": "WWE"
                },
                {
                    "value": "WWW",
                    "label": "WWW"
                },
                {
                    "value": "WY",
                    "label": "WY"
                },
                {
                    "value": "WYND",
                    "label": "WYND"
                },
                {
                    "value": "X",
                    "label": "X"
                },
                {
                    "value": "XAN",
                    "label": "XAN"
                },
                {
                    "value": "XAN-C",
                    "label": "XAN-C"
                },
                {
                    "value": "XEC",
                    "label": "XEC"
                },
                {
                    "value": "XFLT",
                    "label": "XFLT"
                },
                {
                    "value": "XHR",
                    "label": "XHR"
                },
                {
                    "value": "XIN",
                    "label": "XIN"
                },
                {
                    "value": "XOM",
                    "label": "XOM"
                },
                {
                    "value": "XPO",
                    "label": "XPO"
                },
                {
                    "value": "XRF",
                    "label": "XRF"
                },
                {
                    "value": "XRX",
                    "label": "XRX"
                },
                {
                    "value": "XYF",
                    "label": "XYF"
                },
                {
                    "value": "XYL",
                    "label": "XYL"
                },
                {
                    "value": "Y",
                    "label": "Y"
                },
                {
                    "value": "YELP",
                    "label": "YELP"
                },
                {
                    "value": "YETI",
                    "label": "YETI"
                },
                {
                    "value": "YEXT",
                    "label": "YEXT"
                },
                {
                    "value": "YPF",
                    "label": "YPF"
                },
                {
                    "value": "YRD",
                    "label": "YRD"
                },
                {
                    "value": "YUM",
                    "label": "YUM"
                },
                {
                    "value": "YUMC",
                    "label": "YUMC"
                },
                {
                    "value": "ZBH",
                    "label": "ZBH"
                },
                {
                    "value": "ZEN",
                    "label": "ZEN"
                },
                {
                    "value": "ZNH",
                    "label": "ZNH"
                },
                {
                    "value": "ZTO",
                    "label": "ZTO"
                },
                {
                    "value": "ZTR",
                    "label": "ZTR"
                },
                {
                    "value": "ZTS",
                    "label": "ZTS"
                },
                {
                    "value": "ZUO",
                    "label": "ZUO"
                },
                {
                    "value": "ZYME",
                    "label": "ZYME"
                },
                {
                    "value": ""
                }
            ]
    }

    handleChange = selectedOption => {
        this.setState({selectedOption});
    };

    render() {
        return (
            <div className="wrap-input100">
                <Select
                    value={this.state.selectedOption}
                    name="shareTicker"
                    onChange={this.handleChange}
                    filterOption={createFilter({ ignoreAccents: false })}
                    components={{ MenuList }}
                    placeholder={'Select Share...'}
                    styles={{
                        placeholder: base => ({
                            ...base,
                            fontSize: '16px',
                            fontWeight: 400,

                        }),
                    }}
                    options={this.state.shares} />
            </div>
        );
    }
}

export default ShareSelect;

const height = 35;
const options = [
    {
        "value": "A",
        "label": "A"
    },
    {
        "value": "AA",
        "label": "AA"
    },
    {
        "value": "AAN",
        "label": "AAN"
    },
    {
        "value": "AAP",
        "label": "AAP"
    },
    {
        "value": "AAT",
        "label": "AAT"
    },
    {
        "value": "AB",
        "label": "AB"
    },
    {
        "value": "ABB",
        "label": "ABB"
    },
    {
        "value": "ABBV",
        "label": "ABBV"
    },
    {
        "value": "ABC",
        "label": "ABC"
    },
    {
        "value": "ABEV",
        "label": "ABEV"
    },
    {
        "value": "ABG",
        "label": "ABG"
    },
    {
        "value": "ABM",
        "label": "ABM"
    },
    {
        "value": "ABR",
        "label": "ABR"
    },
    {
        "value": "ABR-A",
        "label": "ABR-A"
    },
    {
        "value": "ABR-B",
        "label": "ABR-B"
    },
    {
        "value": "ABR-C",
        "label": "ABR-C"
    },
    {
        "value": "ABT",
        "label": "ABT"
    },
    {
        "value": "AC",
        "label": "AC"
    },
    {
        "value": "ACA",
        "label": "ACA"
    },
    {
        "value": "ACB",
        "label": "ACB"
    },
    {
        "value": "ACC",
        "label": "ACC"
    },
    {
        "value": "ACCO",
        "label": "ACCO"
    },
    {
        "value": "ACE.W",
        "label": "ACE.W"
    },
    {
        "value": "ACEL",
        "label": "ACEL"
    },
    {
        "value": "ACH",
        "label": "ACH"
    },
    {
        "value": "ACI",
        "label": "ACI"
    },
    {
        "value": "ACM",
        "label": "ACM"
    },
    {
        "value": "ACN",
        "label": "ACN"
    },
    {
        "value": "ACP",
        "label": "ACP"
    },
    {
        "value": "ACRE",
        "label": "ACRE"
    },
    {
        "value": "ACV",
        "label": "ACV"
    },
    {
        "value": "ADC",
        "label": "ADC"
    },
    {
        "value": "ADCT",
        "label": "ADCT"
    },
    {
        "value": "ADM",
        "label": "ADM"
    },
    {
        "value": "ADNT",
        "label": "ADNT"
    },
    {
        "value": "ADS",
        "label": "ADS"
    },
    {
        "value": "ADSW",
        "label": "ADSW"
    },
    {
        "value": "ADT",
        "label": "ADT"
    },
    {
        "value": "ADX",
        "label": "ADX"
    },
    {
        "value": "AEB",
        "label": "AEB"
    },
    {
        "value": "AEE",
        "label": "AEE"
    },
    {
        "value": "AEFC",
        "label": "AEFC"
    },
    {
        "value": "AEG",
        "label": "AEG"
    },
    {
        "value": "AEL",
        "label": "AEL"
    },
    {
        "value": "AEL-A",
        "label": "AEL-A"
    },
    {
        "value": "AEL-B",
        "label": "AEL-B"
    },
    {
        "value": "AEM",
        "label": "AEM"
    },
    {
        "value": "AEO",
        "label": "AEO"
    },
    {
        "value": "AEP",
        "label": "AEP"
    },
    {
        "value": "AEP-B",
        "label": "AEP-B"
    },
    {
        "value": "AER",
        "label": "AER"
    },
    {
        "value": "AES",
        "label": "AES"
    },
    {
        "value": "AFB",
        "label": "AFB"
    },
    {
        "value": "AFC",
        "label": "AFC"
    },
    {
        "value": "AFG",
        "label": "AFG"
    },
    {
        "value": "AFGB",
        "label": "AFGB"
    },
    {
        "value": "AFGC",
        "label": "AFGC"
    },
    {
        "value": "AFGD",
        "label": "AFGD"
    },
    {
        "value": "AFGH",
        "label": "AFGH"
    },
    {
        "value": "AFI",
        "label": "AFI"
    },
    {
        "value": "AFL",
        "label": "AFL"
    },
    {
        "value": "AFT",
        "label": "AFT"
    },
    {
        "value": "AG",
        "label": "AG"
    },
    {
        "value": "AGCO",
        "label": "AGCO"
    },
    {
        "value": "AGD",
        "label": "AGD"
    },
    {
        "value": "AGI",
        "label": "AGI"
    },
    {
        "value": "AGM",
        "label": "AGM"
    },
    {
        "value": "AGM-A",
        "label": "AGM-A"
    },
    {
        "value": "AGM-C",
        "label": "AGM-C"
    },
    {
        "value": "AGM-D",
        "label": "AGM-D"
    },
    {
        "value": "AGM-E",
        "label": "AGM-E"
    },
    {
        "value": "AGM.A",
        "label": "AGM.A"
    },
    {
        "value": "AGO",
        "label": "AGO"
    },
    {
        "value": "AGO-B",
        "label": "AGO-B"
    },
    {
        "value": "AGO-E",
        "label": "AGO-E"
    },
    {
        "value": "AGO-F",
        "label": "AGO-F"
    },
    {
        "value": "AGR",
        "label": "AGR"
    },
    {
        "value": "AGRO",
        "label": "AGRO"
    },
    {
        "value": "AGS",
        "label": "AGS"
    },
    {
        "value": "AGX",
        "label": "AGX"
    },
    {
        "value": "AHC",
        "label": "AHC"
    },
    {
        "value": "AHH",
        "label": "AHH"
    },
    {
        "value": "AHH-A",
        "label": "AHH-A"
    },
    {
        "value": "AHL-C",
        "label": "AHL-C"
    },
    {
        "value": "AHL-D",
        "label": "AHL-D"
    },
    {
        "value": "AHL-E",
        "label": "AHL-E"
    },
    {
        "value": "AHT",
        "label": "AHT"
    },
    {
        "value": "AHT-D",
        "label": "AHT-D"
    },
    {
        "value": "AHT-F",
        "label": "AHT-F"
    },
    {
        "value": "AHT-G",
        "label": "AHT-G"
    },
    {
        "value": "AHT-H",
        "label": "AHT-H"
    },
    {
        "value": "AHT-I",
        "label": "AHT-I"
    },
    {
        "value": "AI",
        "label": "AI"
    },
    {
        "value": "AI-B",
        "label": "AI-B"
    },
    {
        "value": "AI-C",
        "label": "AI-C"
    },
    {
        "value": "AIC",
        "label": "AIC"
    },
    {
        "value": "AIF",
        "label": "AIF"
    },
    {
        "value": "AIG",
        "label": "AIG"
    },
    {
        "value": "AIG-A",
        "label": "AIG-A"
    },
    {
        "value": "AIG.W",
        "label": "AIG.W"
    },
    {
        "value": "AIN",
        "label": "AIN"
    },
    {
        "value": "AIO",
        "label": "AIO"
    },
    {
        "value": "AIR",
        "label": "AIR"
    },
    {
        "value": "AIT",
        "label": "AIT"
    },
    {
        "value": "AIV",
        "label": "AIV"
    },
    {
        "value": "AIW",
        "label": "AIW"
    },
    {
        "value": "AIZ",
        "label": "AIZ"
    },
    {
        "value": "AIZP",
        "label": "AIZP"
    },
    {
        "value": "AJG",
        "label": "AJG"
    },
    {
        "value": "AJRD",
        "label": "AJRD"
    },
    {
        "value": "AJX",
        "label": "AJX"
    },
    {
        "value": "AJXA",
        "label": "AJXA"
    },
    {
        "value": "AKO.A",
        "label": "AKO.A"
    },
    {
        "value": "AKO.B",
        "label": "AKO.B"
    },
    {
        "value": "AKR",
        "label": "AKR"
    },
    {
        "value": "AL",
        "label": "AL"
    },
    {
        "value": "AL-A",
        "label": "AL-A"
    },
    {
        "value": "ALB",
        "label": "ALB"
    },
    {
        "value": "ALC",
        "label": "ALC"
    },
    {
        "value": "ALE",
        "label": "ALE"
    },
    {
        "value": "ALEX",
        "label": "ALEX"
    },
    {
        "value": "ALG",
        "label": "ALG"
    },
    {
        "value": "ALI-A",
        "label": "ALI-A"
    },
    {
        "value": "ALI-B",
        "label": "ALI-B"
    },
    {
        "value": "ALI-E",
        "label": "ALI-E"
    },
    {
        "value": "ALK",
        "label": "ALK"
    },
    {
        "value": "ALL",
        "label": "ALL"
    },
    {
        "value": "ALL-B",
        "label": "ALL-B"
    },
    {
        "value": "ALL-G",
        "label": "ALL-G"
    },
    {
        "value": "ALL-H",
        "label": "ALL-H"
    },
    {
        "value": "ALL-I",
        "label": "ALL-I"
    },
    {
        "value": "ALL-Y",
        "label": "ALL-Y"
    },
    {
        "value": "ALLE",
        "label": "ALLE"
    },
    {
        "value": "ALLY",
        "label": "ALLY"
    },
    {
        "value": "ALP-Q",
        "label": "ALP-Q"
    },
    {
        "value": "ALSN",
        "label": "ALSN"
    },
    {
        "value": "ALT.W",
        "label": "ALT.W"
    },
    {
        "value": "ALTG",
        "label": "ALTG"
    },
    {
        "value": "ALU.U",
        "label": "ALU.U"
    },
    {
        "value": "ALU.W",
        "label": "ALU.W"
    },
    {
        "value": "ALUS",
        "label": "ALUS"
    },
    {
        "value": "ALV",
        "label": "ALV"
    },
    {
        "value": "ALX",
        "label": "ALX"
    },
    {
        "value": "AM",
        "label": "AM"
    },
    {
        "value": "AMB.W",
        "label": "AMB.W"
    },
    {
        "value": "AMBC",
        "label": "AMBC"
    },
    {
        "value": "AMC",
        "label": "AMC"
    },
    {
        "value": "AMCR",
        "label": "AMCR"
    },
    {
        "value": "AME",
        "label": "AME"
    },
    {
        "value": "AMG",
        "label": "AMG"
    },
    {
        "value": "AMH",
        "label": "AMH"
    },
    {
        "value": "AMH-D",
        "label": "AMH-D"
    },
    {
        "value": "AMH-E",
        "label": "AMH-E"
    },
    {
        "value": "AMH-F",
        "label": "AMH-F"
    },
    {
        "value": "AMH-G",
        "label": "AMH-G"
    },
    {
        "value": "AMH-H",
        "label": "AMH-H"
    },
    {
        "value": "AMK",
        "label": "AMK"
    },
    {
        "value": "AMN",
        "label": "AMN"
    },
    {
        "value": "AMOV",
        "label": "AMOV"
    },
    {
        "value": "AMP",
        "label": "AMP"
    },
    {
        "value": "AMPY",
        "label": "AMPY"
    },
    {
        "value": "AMRC",
        "label": "AMRC"
    },
    {
        "value": "AMRX",
        "label": "AMRX"
    },
    {
        "value": "AMT",
        "label": "AMT"
    },
    {
        "value": "AMX",
        "label": "AMX"
    },
    {
        "value": "AN",
        "label": "AN"
    },
    {
        "value": "ANET",
        "label": "ANET"
    },
    {
        "value": "ANF",
        "label": "ANF"
    },
    {
        "value": "ANH",
        "label": "ANH"
    },
    {
        "value": "ANH-A",
        "label": "ANH-A"
    },
    {
        "value": "ANH-B",
        "label": "ANH-B"
    },
    {
        "value": "ANH-C",
        "label": "ANH-C"
    },
    {
        "value": "ANTM",
        "label": "ANTM"
    },
    {
        "value": "AOD",
        "label": "AOD"
    },
    {
        "value": "AON",
        "label": "AON"
    },
    {
        "value": "AOS",
        "label": "AOS"
    },
    {
        "value": "AP",
        "label": "AP"
    },
    {
        "value": "APA",
        "label": "APA"
    },
    {
        "value": "APAM",
        "label": "APAM"
    },
    {
        "value": "APD",
        "label": "APD"
    },
    {
        "value": "APG",
        "label": "APG"
    },
    {
        "value": "APH",
        "label": "APH"
    },
    {
        "value": "APHA",
        "label": "APHA"
    },
    {
        "value": "APLE",
        "label": "APLE"
    },
    {
        "value": "APO",
        "label": "APO"
    },
    {
        "value": "APO-A",
        "label": "APO-A"
    },
    {
        "value": "APO-B",
        "label": "APO-B"
    },
    {
        "value": "APRN",
        "label": "APRN"
    },
    {
        "value": "APT-A",
        "label": "APT-A"
    },
    {
        "value": "APTS",
        "label": "APTS"
    },
    {
        "value": "APTV",
        "label": "APTV"
    },
    {
        "value": "APY",
        "label": "APY"
    },
    {
        "value": "AQN",
        "label": "AQN"
    },
    {
        "value": "AQNA",
        "label": "AQNA"
    },
    {
        "value": "AQNB",
        "label": "AQNB"
    },
    {
        "value": "AQUA",
        "label": "AQUA"
    },
    {
        "value": "AR",
        "label": "AR"
    },
    {
        "value": "ARA",
        "label": "ARA"
    },
    {
        "value": "ARC",
        "label": "ARC"
    },
    {
        "value": "ARCH",
        "label": "ARCH"
    },
    {
        "value": "ARCO",
        "label": "ARCO"
    },
    {
        "value": "ARD",
        "label": "ARD"
    },
    {
        "value": "ARDC",
        "label": "ARDC"
    },
    {
        "value": "ARE",
        "label": "ARE"
    },
    {
        "value": "ARE-A",
        "label": "ARE-A"
    },
    {
        "value": "ARES",
        "label": "ARES"
    },
    {
        "value": "ARGD",
        "label": "ARGD"
    },
    {
        "value": "ARGO",
        "label": "ARGO"
    },
    {
        "value": "ARI",
        "label": "ARI"
    },
    {
        "value": "ARL",
        "label": "ARL"
    },
    {
        "value": "ARLO",
        "label": "ARLO"
    },
    {
        "value": "ARMK",
        "label": "ARMK"
    },
    {
        "value": "ARNC",
        "label": "ARNC"
    },
    {
        "value": "AROC",
        "label": "AROC"
    },
    {
        "value": "ARR",
        "label": "ARR"
    },
    {
        "value": "ARR-C",
        "label": "ARR-C"
    },
    {
        "value": "ARW",
        "label": "ARW"
    },
    {
        "value": "ASA",
        "label": "ASA"
    },
    {
        "value": "ASB",
        "label": "ASB"
    },
    {
        "value": "ASB-C",
        "label": "ASB-C"
    },
    {
        "value": "ASB-D",
        "label": "ASB-D"
    },
    {
        "value": "ASB-E",
        "label": "ASB-E"
    },
    {
        "value": "ASB-F",
        "label": "ASB-F"
    },
    {
        "value": "ASC",
        "label": "ASC"
    },
    {
        "value": "ASG",
        "label": "ASG"
    },
    {
        "value": "ASGN",
        "label": "ASGN"
    },
    {
        "value": "ASH",
        "label": "ASH"
    },
    {
        "value": "ASIX",
        "label": "ASIX"
    },
    {
        "value": "ASPN",
        "label": "ASPN"
    },
    {
        "value": "ASR",
        "label": "ASR"
    },
    {
        "value": "ASX",
        "label": "ASX"
    },
    {
        "value": "AT",
        "label": "AT"
    },
    {
        "value": "ATC-D",
        "label": "ATC-D"
    },
    {
        "value": "ATC-E",
        "label": "ATC-E"
    },
    {
        "value": "ATC-G",
        "label": "ATC-G"
    },
    {
        "value": "ATC-H",
        "label": "ATC-H"
    },
    {
        "value": "ATC-I",
        "label": "ATC-I"
    },
    {
        "value": "ATCO",
        "label": "ATCO"
    },
    {
        "value": "ATEN",
        "label": "ATEN"
    },
    {
        "value": "ATGE",
        "label": "ATGE"
    },
    {
        "value": "ATH",
        "label": "ATH"
    },
    {
        "value": "ATH-A",
        "label": "ATH-A"
    },
    {
        "value": "ATH-B",
        "label": "ATH-B"
    },
    {
        "value": "ATH-C",
        "label": "ATH-C"
    },
    {
        "value": "ATHM",
        "label": "ATHM"
    },
    {
        "value": "ATI",
        "label": "ATI"
    },
    {
        "value": "ATKR",
        "label": "ATKR"
    },
    {
        "value": "ATO",
        "label": "ATO"
    },
    {
        "value": "ATR",
        "label": "ATR"
    },
    {
        "value": "ATTO",
        "label": "ATTO"
    },
    {
        "value": "ATUS",
        "label": "ATUS"
    },
    {
        "value": "ATV",
        "label": "ATV"
    },
    {
        "value": "AU",
        "label": "AU"
    },
    {
        "value": "AUY",
        "label": "AUY"
    },
    {
        "value": "AVA",
        "label": "AVA"
    },
    {
        "value": "AVAL",
        "label": "AVAL"
    },
    {
        "value": "AVB",
        "label": "AVB"
    },
    {
        "value": "AVD",
        "label": "AVD"
    },
    {
        "value": "AVK",
        "label": "AVK"
    },
    {
        "value": "AVLR",
        "label": "AVLR"
    },
    {
        "value": "AVNS",
        "label": "AVNS"
    },
    {
        "value": "AVT-A",
        "label": "AVT-A"
    },
    {
        "value": "AVTR",
        "label": "AVTR"
    },
    {
        "value": "AVY",
        "label": "AVY"
    },
    {
        "value": "AVYA",
        "label": "AVYA"
    },
    {
        "value": "AWF",
        "label": "AWF"
    },
    {
        "value": "AWI",
        "label": "AWI"
    },
    {
        "value": "AWK",
        "label": "AWK"
    },
    {
        "value": "AWP",
        "label": "AWP"
    },
    {
        "value": "AWR",
        "label": "AWR"
    },
    {
        "value": "AX",
        "label": "AX"
    },
    {
        "value": "AXE",
        "label": "AXE"
    },
    {
        "value": "AXL",
        "label": "AXL"
    },
    {
        "value": "AXO",
        "label": "AXO"
    },
    {
        "value": "AXP",
        "label": "AXP"
    },
    {
        "value": "AXR",
        "label": "AXR"
    },
    {
        "value": "AXS",
        "label": "AXS"
    },
    {
        "value": "AXS-E",
        "label": "AXS-E"
    },
    {
        "value": "AXTA",
        "label": "AXTA"
    },
    {
        "value": "AYI",
        "label": "AYI"
    },
    {
        "value": "AYX",
        "label": "AYX"
    },
    {
        "value": "AZEK",
        "label": "AZEK"
    },
    {
        "value": "AZN",
        "label": "AZN"
    },
    {
        "value": "AZO",
        "label": "AZO"
    },
    {
        "value": "AZRE",
        "label": "AZRE"
    },
    {
        "value": "AZUL",
        "label": "AZUL"
    },
    {
        "value": "AZZ",
        "label": "AZZ"
    },
    {
        "value": "B",
        "label": "B"
    },
    {
        "value": "BA",
        "label": "BA"
    },
    {
        "value": "BABA",
        "label": "BABA"
    },
    {
        "value": "BAC",
        "label": "BAC"
    },
    {
        "value": "BAC-A",
        "label": "BAC-A"
    },
    {
        "value": "BAC-B",
        "label": "BAC-B"
    },
    {
        "value": "BAC-C",
        "label": "BAC-C"
    },
    {
        "value": "BAC-E",
        "label": "BAC-E"
    },
    {
        "value": "BAC-K",
        "label": "BAC-K"
    },
    {
        "value": "BAC-L",
        "label": "BAC-L"
    },
    {
        "value": "BAC-M",
        "label": "BAC-M"
    },
    {
        "value": "BAC-N",
        "label": "BAC-N"
    },
    {
        "value": "BAF",
        "label": "BAF"
    },
    {
        "value": "BAH",
        "label": "BAH"
    },
    {
        "value": "BAK",
        "label": "BAK"
    },
    {
        "value": "BAM",
        "label": "BAM"
    },
    {
        "value": "BAN-D",
        "label": "BAN-D"
    },
    {
        "value": "BAN-E",
        "label": "BAN-E"
    },
    {
        "value": "BANC",
        "label": "BANC"
    },
    {
        "value": "BAP",
        "label": "BAP"
    },
    {
        "value": "BAX",
        "label": "BAX"
    },
    {
        "value": "BB",
        "label": "BB"
    },
    {
        "value": "BBAR",
        "label": "BBAR"
    },
    {
        "value": "BBD",
        "label": "BBD"
    },
    {
        "value": "BBDC",
        "label": "BBDC"
    },
    {
        "value": "BBDO",
        "label": "BBDO"
    },
    {
        "value": "BBF",
        "label": "BBF"
    },
    {
        "value": "BBK",
        "label": "BBK"
    },
    {
        "value": "BBL",
        "label": "BBL"
    },
    {
        "value": "BBN",
        "label": "BBN"
    },
    {
        "value": "BBU",
        "label": "BBU"
    },
    {
        "value": "BBVA",
        "label": "BBVA"
    },
    {
        "value": "BBW",
        "label": "BBW"
    },
    {
        "value": "BBX",
        "label": "BBX"
    },
    {
        "value": "BBY",
        "label": "BBY"
    },
    {
        "value": "BC",
        "label": "BC"
    },
    {
        "value": "BC-A",
        "label": "BC-A"
    },
    {
        "value": "BC-B",
        "label": "BC-B"
    },
    {
        "value": "BC-C",
        "label": "BC-C"
    },
    {
        "value": "BCC",
        "label": "BCC"
    },
    {
        "value": "BCE",
        "label": "BCE"
    },
    {
        "value": "BCEI",
        "label": "BCEI"
    },
    {
        "value": "BCH",
        "label": "BCH"
    },
    {
        "value": "BCO",
        "label": "BCO"
    },
    {
        "value": "BCS",
        "label": "BCS"
    },
    {
        "value": "BCS.P",
        "label": "BCS.P"
    },
    {
        "value": "BCSF",
        "label": "BCSF"
    },
    {
        "value": "BCX",
        "label": "BCX"
    },
    {
        "value": "BDC",
        "label": "BDC"
    },
    {
        "value": "BDJ",
        "label": "BDJ"
    },
    {
        "value": "BDN",
        "label": "BDN"
    },
    {
        "value": "BDX",
        "label": "BDX"
    },
    {
        "value": "BDXB",
        "label": "BDXB"
    },
    {
        "value": "BE",
        "label": "BE"
    },
    {
        "value": "BEDU",
        "label": "BEDU"
    },
    {
        "value": "BEN",
        "label": "BEN"
    },
    {
        "value": "BEP",
        "label": "BEP"
    },
    {
        "value": "BEP-A",
        "label": "BEP-A"
    },
    {
        "value": "BERY",
        "label": "BERY"
    },
    {
        "value": "BEST",
        "label": "BEST"
    },
    {
        "value": "BF.A",
        "label": "BF.A"
    },
    {
        "value": "BF.B",
        "label": "BF.B"
    },
    {
        "value": "BFAM",
        "label": "BFAM"
    },
    {
        "value": "BFK",
        "label": "BFK"
    },
    {
        "value": "BFO",
        "label": "BFO"
    },
    {
        "value": "BFS",
        "label": "BFS"
    },
    {
        "value": "BFS-D",
        "label": "BFS-D"
    },
    {
        "value": "BFS-E",
        "label": "BFS-E"
    },
    {
        "value": "BFY",
        "label": "BFY"
    },
    {
        "value": "BFZ",
        "label": "BFZ"
    },
    {
        "value": "BG",
        "label": "BG"
    },
    {
        "value": "BGB",
        "label": "BGB"
    },
    {
        "value": "BGG",
        "label": "BGG"
    },
    {
        "value": "BGH",
        "label": "BGH"
    },
    {
        "value": "BGIO",
        "label": "BGIO"
    },
    {
        "value": "BGR",
        "label": "BGR"
    },
    {
        "value": "BGS",
        "label": "BGS"
    },
    {
        "value": "BGSF",
        "label": "BGSF"
    },
    {
        "value": "BGT",
        "label": "BGT"
    },
    {
        "value": "BGX",
        "label": "BGX"
    },
    {
        "value": "BGY",
        "label": "BGY"
    },
    {
        "value": "BH",
        "label": "BH"
    },
    {
        "value": "BH.A",
        "label": "BH.A"
    },
    {
        "value": "BHC",
        "label": "BHC"
    },
    {
        "value": "BHE",
        "label": "BHE"
    },
    {
        "value": "BHK",
        "label": "BHK"
    },
    {
        "value": "BHLB",
        "label": "BHLB"
    },
    {
        "value": "BHP",
        "label": "BHP"
    },
    {
        "value": "BHR",
        "label": "BHR"
    },
    {
        "value": "BHR-B",
        "label": "BHR-B"
    },
    {
        "value": "BHR-D",
        "label": "BHR-D"
    },
    {
        "value": "BHV",
        "label": "BHV"
    },
    {
        "value": "BHVN",
        "label": "BHVN"
    },
    {
        "value": "BIF",
        "label": "BIF"
    },
    {
        "value": "BIG",
        "label": "BIG"
    },
    {
        "value": "BILL",
        "label": "BILL"
    },
    {
        "value": "BIO",
        "label": "BIO"
    },
    {
        "value": "BIO.B",
        "label": "BIO.B"
    },
    {
        "value": "BIP",
        "label": "BIP"
    },
    {
        "value": "BIPC",
        "label": "BIPC"
    },
    {
        "value": "BIT",
        "label": "BIT"
    },
    {
        "value": "BITA",
        "label": "BITA"
    },
    {
        "value": "BJ",
        "label": "BJ"
    },
    {
        "value": "BK",
        "label": "BK"
    },
    {
        "value": "BK-C",
        "label": "BK-C"
    },
    {
        "value": "BKD",
        "label": "BKD"
    },
    {
        "value": "BKE",
        "label": "BKE"
    },
    {
        "value": "BKH",
        "label": "BKH"
    },
    {
        "value": "BKI",
        "label": "BKI"
    },
    {
        "value": "BKK",
        "label": "BKK"
    },
    {
        "value": "BKN",
        "label": "BKN"
    },
    {
        "value": "BKR",
        "label": "BKR"
    },
    {
        "value": "BKT",
        "label": "BKT"
    },
    {
        "value": "BKU",
        "label": "BKU"
    },
    {
        "value": "BLD",
        "label": "BLD"
    },
    {
        "value": "BLE",
        "label": "BLE"
    },
    {
        "value": "BLK",
        "label": "BLK"
    },
    {
        "value": "BLL",
        "label": "BLL"
    },
    {
        "value": "BLW",
        "label": "BLW"
    },
    {
        "value": "BLX",
        "label": "BLX"
    },
    {
        "value": "BMA",
        "label": "BMA"
    },
    {
        "value": "BME",
        "label": "BME"
    },
    {
        "value": "BMEZ",
        "label": "BMEZ"
    },
    {
        "value": "BMI",
        "label": "BMI"
    },
    {
        "value": "BML-G",
        "label": "BML-G"
    },
    {
        "value": "BML-H",
        "label": "BML-H"
    },
    {
        "value": "BML-J",
        "label": "BML-J"
    },
    {
        "value": "BML-L",
        "label": "BML-L"
    },
    {
        "value": "BMO",
        "label": "BMO"
    },
    {
        "value": "BMR.U",
        "label": "BMR.U"
    },
    {
        "value": "BMR.W",
        "label": "BMR.W"
    },
    {
        "value": "BMRG",
        "label": "BMRG"
    },
    {
        "value": "BMY",
        "label": "BMY"
    },
    {
        "value": "BMY.P",
        "label": "BMY.P"
    },
    {
        "value": "BNED",
        "label": "BNED"
    },
    {
        "value": "BNS",
        "label": "BNS"
    },
    {
        "value": "BNY",
        "label": "BNY"
    },
    {
        "value": "BOE",
        "label": "BOE"
    },
    {
        "value": "BOH",
        "label": "BOH"
    },
    {
        "value": "BOOT",
        "label": "BOOT"
    },
    {
        "value": "BORR",
        "label": "BORR"
    },
    {
        "value": "BOX",
        "label": "BOX"
    },
    {
        "value": "BP",
        "label": "BP"
    },
    {
        "value": "BPMP",
        "label": "BPMP"
    },
    {
        "value": "BPT",
        "label": "BPT"
    },
    {
        "value": "BQH",
        "label": "BQH"
    },
    {
        "value": "BR",
        "label": "BR"
    },
    {
        "value": "BRBR",
        "label": "BRBR"
    },
    {
        "value": "BRC",
        "label": "BRC"
    },
    {
        "value": "BRFS",
        "label": "BRFS"
    },
    {
        "value": "BRK.A",
        "label": "BRK.A"
    },
    {
        "value": "BRK.B",
        "label": "BRK.B"
    },
    {
        "value": "BRMK",
        "label": "BRMK"
    },
    {
        "value": "BRO",
        "label": "BRO"
    },
    {
        "value": "BRT",
        "label": "BRT"
    },
    {
        "value": "BRX",
        "label": "BRX"
    },
    {
        "value": "BSA",
        "label": "BSA"
    },
    {
        "value": "BSAC",
        "label": "BSAC"
    },
    {
        "value": "BSBR",
        "label": "BSBR"
    },
    {
        "value": "BSD",
        "label": "BSD"
    },
    {
        "value": "BSE",
        "label": "BSE"
    },
    {
        "value": "BSIG",
        "label": "BSIG"
    },
    {
        "value": "BSL",
        "label": "BSL"
    },
    {
        "value": "BSM",
        "label": "BSM"
    },
    {
        "value": "BSMX",
        "label": "BSMX"
    },
    {
        "value": "BST",
        "label": "BST"
    },
    {
        "value": "BSTZ",
        "label": "BSTZ"
    },
    {
        "value": "BSX",
        "label": "BSX"
    },
    {
        "value": "BSX-A",
        "label": "BSX-A"
    },
    {
        "value": "BTA",
        "label": "BTA"
    },
    {
        "value": "BTE",
        "label": "BTE"
    },
    {
        "value": "BTI",
        "label": "BTI"
    },
    {
        "value": "BTO",
        "label": "BTO"
    },
    {
        "value": "BTT",
        "label": "BTT"
    },
    {
        "value": "BTU",
        "label": "BTU"
    },
    {
        "value": "BTZ",
        "label": "BTZ"
    },
    {
        "value": "BUD",
        "label": "BUD"
    },
    {
        "value": "BUI",
        "label": "BUI"
    },
    {
        "value": "BURL",
        "label": "BURL"
    },
    {
        "value": "BV",
        "label": "BV"
    },
    {
        "value": "BVN",
        "label": "BVN"
    },
    {
        "value": "BW",
        "label": "BW"
    },
    {
        "value": "BWA",
        "label": "BWA"
    },
    {
        "value": "BWG",
        "label": "BWG"
    },
    {
        "value": "BWXT",
        "label": "BWXT"
    },
    {
        "value": "BX",
        "label": "BX"
    },
    {
        "value": "BXC",
        "label": "BXC"
    },
    {
        "value": "BXG",
        "label": "BXG"
    },
    {
        "value": "BXMT",
        "label": "BXMT"
    },
    {
        "value": "BXMX",
        "label": "BXMX"
    },
    {
        "value": "BXP",
        "label": "BXP"
    },
    {
        "value": "BXP-B",
        "label": "BXP-B"
    },
    {
        "value": "BXS",
        "label": "BXS"
    },
    {
        "value": "BXS-A",
        "label": "BXS-A"
    },
    {
        "value": "BY",
        "label": "BY"
    },
    {
        "value": "BYD",
        "label": "BYD"
    },
    {
        "value": "BYM",
        "label": "BYM"
    },
    {
        "value": "BZH",
        "label": "BZH"
    },
    {
        "value": "BZM",
        "label": "BZM"
    },
    {
        "value": "C",
        "label": "C"
    },
    {
        "value": "C-J",
        "label": "C-J"
    },
    {
        "value": "C-K",
        "label": "C-K"
    },
    {
        "value": "C-N",
        "label": "C-N"
    },
    {
        "value": "C-S",
        "label": "C-S"
    },
    {
        "value": "CAAP",
        "label": "CAAP"
    },
    {
        "value": "CABO",
        "label": "CABO"
    },
    {
        "value": "CACI",
        "label": "CACI"
    },
    {
        "value": "CADE",
        "label": "CADE"
    },
    {
        "value": "CAE",
        "label": "CAE"
    },
    {
        "value": "CAF",
        "label": "CAF"
    },
    {
        "value": "CAG",
        "label": "CAG"
    },
    {
        "value": "CAH",
        "label": "CAH"
    },
    {
        "value": "CAI",
        "label": "CAI"
    },
    {
        "value": "CAI-A",
        "label": "CAI-A"
    },
    {
        "value": "CAI-B",
        "label": "CAI-B"
    },
    {
        "value": "CAJ",
        "label": "CAJ"
    },
    {
        "value": "CAL",
        "label": "CAL"
    },
    {
        "value": "CALX",
        "label": "CALX"
    },
    {
        "value": "CANG",
        "label": "CANG"
    },
    {
        "value": "CAPL",
        "label": "CAPL"
    },
    {
        "value": "CARR",
        "label": "CARR"
    },
    {
        "value": "CARS",
        "label": "CARS"
    },
    {
        "value": "CAT",
        "label": "CAT"
    },
    {
        "value": "CATO",
        "label": "CATO"
    },
    {
        "value": "CB",
        "label": "CB"
    },
    {
        "value": "CBB",
        "label": "CBB"
    },
    {
        "value": "CBB-B",
        "label": "CBB-B"
    },
    {
        "value": "CBD",
        "label": "CBD"
    },
    {
        "value": "CBH",
        "label": "CBH"
    },
    {
        "value": "CBL",
        "label": "CBL"
    },
    {
        "value": "CBL-D",
        "label": "CBL-D"
    },
    {
        "value": "CBL-E",
        "label": "CBL-E"
    },
    {
        "value": "CBRE",
        "label": "CBRE"
    },
    {
        "value": "CBT",
        "label": "CBT"
    },
    {
        "value": "CBU",
        "label": "CBU"
    },
    {
        "value": "CBZ",
        "label": "CBZ"
    },
    {
        "value": "CC",
        "label": "CC"
    },
    {
        "value": "CCA.U",
        "label": "CCA.U"
    },
    {
        "value": "CCA.W",
        "label": "CCA.W"
    },
    {
        "value": "CCAC",
        "label": "CCAC"
    },
    {
        "value": "CCC",
        "label": "CCC"
    },
    {
        "value": "CCEP",
        "label": "CCEP"
    },
    {
        "value": "CCH",
        "label": "CCH"
    },
    {
        "value": "CCH.U",
        "label": "CCH.U"
    },
    {
        "value": "CCH.W",
        "label": "CCH.W"
    },
    {
        "value": "CCI",
        "label": "CCI"
    },
    {
        "value": "CCI-A",
        "label": "CCI-A"
    },
    {
        "value": "CCJ",
        "label": "CCJ"
    },
    {
        "value": "CCK",
        "label": "CCK"
    },
    {
        "value": "CCL",
        "label": "CCL"
    },
    {
        "value": "CCM",
        "label": "CCM"
    },
    {
        "value": "CCO",
        "label": "CCO"
    },
    {
        "value": "CCR",
        "label": "CCR"
    },
    {
        "value": "CCS",
        "label": "CCS"
    },
    {
        "value": "CCU",
        "label": "CCU"
    },
    {
        "value": "CCX",
        "label": "CCX"
    },
    {
        "value": "CCX.U",
        "label": "CCX.U"
    },
    {
        "value": "CCX.W",
        "label": "CCX.W"
    },
    {
        "value": "CCXX",
        "label": "CCXX"
    },
    {
        "value": "CCZ",
        "label": "CCZ"
    },
    {
        "value": "CDAY",
        "label": "CDAY"
    },
    {
        "value": "CDE",
        "label": "CDE"
    },
    {
        "value": "CDR",
        "label": "CDR"
    },
    {
        "value": "CDR-B",
        "label": "CDR-B"
    },
    {
        "value": "CDR-C",
        "label": "CDR-C"
    },
    {
        "value": "CE",
        "label": "CE"
    },
    {
        "value": "CEA",
        "label": "CEA"
    },
    {
        "value": "CEE",
        "label": "CEE"
    },
    {
        "value": "CEIX",
        "label": "CEIX"
    },
    {
        "value": "CEL",
        "label": "CEL"
    },
    {
        "value": "CEL.P",
        "label": "CEL.P"
    },
    {
        "value": "CELP",
        "label": "CELP"
    },
    {
        "value": "CEM",
        "label": "CEM"
    },
    {
        "value": "CEN",
        "label": "CEN"
    },
    {
        "value": "CEO",
        "label": "CEO"
    },
    {
        "value": "CEPU",
        "label": "CEPU"
    },
    {
        "value": "CEQ.P",
        "label": "CEQ.P"
    },
    {
        "value": "CEQP",
        "label": "CEQP"
    },
    {
        "value": "CF",
        "label": "CF"
    },
    {
        "value": "CFG",
        "label": "CFG"
    },
    {
        "value": "CFG-D",
        "label": "CFG-D"
    },
    {
        "value": "CFG-E",
        "label": "CFG-E"
    },
    {
        "value": "CFR",
        "label": "CFR"
    },
    {
        "value": "CFX",
        "label": "CFX"
    },
    {
        "value": "CFXA",
        "label": "CFXA"
    },
    {
        "value": "CGA",
        "label": "CGA"
    },
    {
        "value": "CGC",
        "label": "CGC"
    },
    {
        "value": "CHA",
        "label": "CHA"
    },
    {
        "value": "CHAP",
        "label": "CHAP"
    },
    {
        "value": "CHCT",
        "label": "CHCT"
    },
    {
        "value": "CHD",
        "label": "CHD"
    },
    {
        "value": "CHE",
        "label": "CHE"
    },
    {
        "value": "CHGG",
        "label": "CHGG"
    },
    {
        "value": "CHH",
        "label": "CHH"
    },
    {
        "value": "CHK",
        "label": "CHK"
    },
    {
        "value": "CHK-D",
        "label": "CHK-D"
    },
    {
        "value": "CHL",
        "label": "CHL"
    },
    {
        "value": "CHM-A",
        "label": "CHM-A"
    },
    {
        "value": "CHM-B",
        "label": "CHM-B"
    },
    {
        "value": "CHMI",
        "label": "CHMI"
    },
    {
        "value": "CHN",
        "label": "CHN"
    },
    {
        "value": "CHRA",
        "label": "CHRA"
    },
    {
        "value": "CHS",
        "label": "CHS"
    },
    {
        "value": "CHT",
        "label": "CHT"
    },
    {
        "value": "CHU",
        "label": "CHU"
    },
    {
        "value": "CHWY",
        "label": "CHWY"
    },
    {
        "value": "CHX",
        "label": "CHX"
    },
    {
        "value": "CHX.P",
        "label": "CHX.P"
    },
    {
        "value": "CI",
        "label": "CI"
    },
    {
        "value": "CIA",
        "label": "CIA"
    },
    {
        "value": "CIB",
        "label": "CIB"
    },
    {
        "value": "CIEN",
        "label": "CIEN"
    },
    {
        "value": "CIF",
        "label": "CIF"
    },
    {
        "value": "CIG",
        "label": "CIG"
    },
    {
        "value": "CIG.C",
        "label": "CIG.C"
    },
    {
        "value": "CII",
        "label": "CII"
    },
    {
        "value": "CIM",
        "label": "CIM"
    },
    {
        "value": "CIM-A",
        "label": "CIM-A"
    },
    {
        "value": "CIM-B",
        "label": "CIM-B"
    },
    {
        "value": "CIM-C",
        "label": "CIM-C"
    },
    {
        "value": "CIM-D",
        "label": "CIM-D"
    },
    {
        "value": "CINR",
        "label": "CINR"
    },
    {
        "value": "CIO",
        "label": "CIO"
    },
    {
        "value": "CIO-A",
        "label": "CIO-A"
    },
    {
        "value": "CIR",
        "label": "CIR"
    },
    {
        "value": "CIT",
        "label": "CIT"
    },
    {
        "value": "CIT-B",
        "label": "CIT-B"
    },
    {
        "value": "CKH",
        "label": "CKH"
    },
    {
        "value": "CL",
        "label": "CL"
    },
    {
        "value": "CLB",
        "label": "CLB"
    },
    {
        "value": "CLDR",
        "label": "CLDR"
    },
    {
        "value": "CLDT",
        "label": "CLDT"
    },
    {
        "value": "CLF",
        "label": "CLF"
    },
    {
        "value": "CLGX",
        "label": "CLGX"
    },
    {
        "value": "CLH",
        "label": "CLH"
    },
    {
        "value": "CLI",
        "label": "CLI"
    },
    {
        "value": "CLN-G",
        "label": "CLN-G"
    },
    {
        "value": "CLN-H",
        "label": "CLN-H"
    },
    {
        "value": "CLN-I",
        "label": "CLN-I"
    },
    {
        "value": "CLN-J",
        "label": "CLN-J"
    },
    {
        "value": "CLNC",
        "label": "CLNC"
    },
    {
        "value": "CLNY",
        "label": "CLNY"
    },
    {
        "value": "CLPR",
        "label": "CLPR"
    },
    {
        "value": "CLR",
        "label": "CLR"
    },
    {
        "value": "CLS",
        "label": "CLS"
    },
    {
        "value": "CLW",
        "label": "CLW"
    },
    {
        "value": "CLX",
        "label": "CLX"
    },
    {
        "value": "CM",
        "label": "CM"
    },
    {
        "value": "CMA",
        "label": "CMA"
    },
    {
        "value": "CMC",
        "label": "CMC"
    },
    {
        "value": "CMCM",
        "label": "CMCM"
    },
    {
        "value": "CMD",
        "label": "CMD"
    },
    {
        "value": "CMG",
        "label": "CMG"
    },
    {
        "value": "CMI",
        "label": "CMI"
    },
    {
        "value": "CMO",
        "label": "CMO"
    },
    {
        "value": "CMO-E",
        "label": "CMO-E"
    },
    {
        "value": "CMP",
        "label": "CMP"
    },
    {
        "value": "CMR-B",
        "label": "CMR-B"
    },
    {
        "value": "CMR-C",
        "label": "CMR-C"
    },
    {
        "value": "CMR-D",
        "label": "CMR-D"
    },
    {
        "value": "CMR-E",
        "label": "CMR-E"
    },
    {
        "value": "CMRE",
        "label": "CMRE"
    },
    {
        "value": "CMS",
        "label": "CMS"
    },
    {
        "value": "CMS-B",
        "label": "CMS-B"
    },
    {
        "value": "CMSA",
        "label": "CMSA"
    },
    {
        "value": "CMSC",
        "label": "CMSC"
    },
    {
        "value": "CMSD",
        "label": "CMSD"
    },
    {
        "value": "CMU",
        "label": "CMU"
    },
    {
        "value": "CNA",
        "label": "CNA"
    },
    {
        "value": "CNC",
        "label": "CNC"
    },
    {
        "value": "CNF",
        "label": "CNF"
    },
    {
        "value": "CNHI",
        "label": "CNHI"
    },
    {
        "value": "CNI",
        "label": "CNI"
    },
    {
        "value": "CNK",
        "label": "CNK"
    },
    {
        "value": "CNMD",
        "label": "CNMD"
    },
    {
        "value": "CNNE",
        "label": "CNNE"
    },
    {
        "value": "CNO",
        "label": "CNO"
    },
    {
        "value": "CNP",
        "label": "CNP"
    },
    {
        "value": "CNP-B",
        "label": "CNP-B"
    },
    {
        "value": "CNQ",
        "label": "CNQ"
    },
    {
        "value": "CNR",
        "label": "CNR"
    },
    {
        "value": "CNS",
        "label": "CNS"
    },
    {
        "value": "CNX",
        "label": "CNX"
    },
    {
        "value": "CNXM",
        "label": "CNXM"
    },
    {
        "value": "CO",
        "label": "CO"
    },
    {
        "value": "COD-A",
        "label": "COD-A"
    },
    {
        "value": "COD-B",
        "label": "COD-B"
    },
    {
        "value": "COD-C",
        "label": "COD-C"
    },
    {
        "value": "CODI",
        "label": "CODI"
    },
    {
        "value": "COE",
        "label": "COE"
    },
    {
        "value": "COF",
        "label": "COF"
    },
    {
        "value": "COF-F",
        "label": "COF-F"
    },
    {
        "value": "COF-G",
        "label": "COF-G"
    },
    {
        "value": "COF-H",
        "label": "COF-H"
    },
    {
        "value": "COF-I",
        "label": "COF-I"
    },
    {
        "value": "COF-J",
        "label": "COF-J"
    },
    {
        "value": "COG",
        "label": "COG"
    },
    {
        "value": "COLD",
        "label": "COLD"
    },
    {
        "value": "COO",
        "label": "COO"
    },
    {
        "value": "COP",
        "label": "COP"
    },
    {
        "value": "COR",
        "label": "COR"
    },
    {
        "value": "COR-Z",
        "label": "COR-Z"
    },
    {
        "value": "CORR",
        "label": "CORR"
    },
    {
        "value": "COTY",
        "label": "COTY"
    },
    {
        "value": "CP",
        "label": "CP"
    },
    {
        "value": "CPA",
        "label": "CPA"
    },
    {
        "value": "CPAC",
        "label": "CPAC"
    },
    {
        "value": "CPB",
        "label": "CPB"
    },
    {
        "value": "CPE",
        "label": "CPE"
    },
    {
        "value": "CPF",
        "label": "CPF"
    },
    {
        "value": "CPG",
        "label": "CPG"
    },
    {
        "value": "CPK",
        "label": "CPK"
    },
    {
        "value": "CPLG",
        "label": "CPLG"
    },
    {
        "value": "CPRI",
        "label": "CPRI"
    },
    {
        "value": "CPS",
        "label": "CPS"
    },
    {
        "value": "CPT",
        "label": "CPT"
    },
    {
        "value": "CR",
        "label": "CR"
    },
    {
        "value": "CRC",
        "label": "CRC"
    },
    {
        "value": "CRD.A",
        "label": "CRD.A"
    },
    {
        "value": "CRD.B",
        "label": "CRD.B"
    },
    {
        "value": "CRH",
        "label": "CRH"
    },
    {
        "value": "CRI",
        "label": "CRI"
    },
    {
        "value": "CRK",
        "label": "CRK"
    },
    {
        "value": "CRL",
        "label": "CRL"
    },
    {
        "value": "CRM",
        "label": "CRM"
    },
    {
        "value": "CRS",
        "label": "CRS"
    },
    {
        "value": "CRT",
        "label": "CRT"
    },
    {
        "value": "CRY",
        "label": "CRY"
    },
    {
        "value": "CS",
        "label": "CS"
    },
    {
        "value": "CSL",
        "label": "CSL"
    },
    {
        "value": "CSLT",
        "label": "CSLT"
    },
    {
        "value": "CSPR",
        "label": "CSPR"
    },
    {
        "value": "CSTM",
        "label": "CSTM"
    },
    {
        "value": "CSU",
        "label": "CSU"
    },
    {
        "value": "CSV",
        "label": "CSV"
    },
    {
        "value": "CTA-A",
        "label": "CTA-A"
    },
    {
        "value": "CTA-B",
        "label": "CTA-B"
    },
    {
        "value": "CTAA",
        "label": "CTAA"
    },
    {
        "value": "CTB",
        "label": "CTB"
    },
    {
        "value": "CTBB",
        "label": "CTBB"
    },
    {
        "value": "CTDD",
        "label": "CTDD"
    },
    {
        "value": "CTK",
        "label": "CTK"
    },
    {
        "value": "CTL",
        "label": "CTL"
    },
    {
        "value": "CTLT",
        "label": "CTLT"
    },
    {
        "value": "CTR",
        "label": "CTR"
    },
    {
        "value": "CTRA",
        "label": "CTRA"
    },
    {
        "value": "CTS",
        "label": "CTS"
    },
    {
        "value": "CTT",
        "label": "CTT"
    },
    {
        "value": "CTV",
        "label": "CTV"
    },
    {
        "value": "CTVA",
        "label": "CTVA"
    },
    {
        "value": "CTY",
        "label": "CTY"
    },
    {
        "value": "CTZ",
        "label": "CTZ"
    },
    {
        "value": "CUB",
        "label": "CUB"
    },
    {
        "value": "CUB-C",
        "label": "CUB-C"
    },
    {
        "value": "CUB-D",
        "label": "CUB-D"
    },
    {
        "value": "CUB-E",
        "label": "CUB-E"
    },
    {
        "value": "CUB-F",
        "label": "CUB-F"
    },
    {
        "value": "CUBB",
        "label": "CUBB"
    },
    {
        "value": "CUBE",
        "label": "CUBE"
    },
    {
        "value": "CUBI",
        "label": "CUBI"
    },
    {
        "value": "CUK",
        "label": "CUK"
    },
    {
        "value": "CULP",
        "label": "CULP"
    },
    {
        "value": "CURO",
        "label": "CURO"
    },
    {
        "value": "CUZ",
        "label": "CUZ"
    },
    {
        "value": "CVA",
        "label": "CVA"
    },
    {
        "value": "CVE",
        "label": "CVE"
    },
    {
        "value": "CVEO",
        "label": "CVEO"
    },
    {
        "value": "CVI",
        "label": "CVI"
    },
    {
        "value": "CVIA",
        "label": "CVIA"
    },
    {
        "value": "CVNA",
        "label": "CVNA"
    },
    {
        "value": "CVS",
        "label": "CVS"
    },
    {
        "value": "CVX",
        "label": "CVX"
    },
    {
        "value": "CW",
        "label": "CW"
    },
    {
        "value": "CWE.A",
        "label": "CWE.A"
    },
    {
        "value": "CWEN",
        "label": "CWEN"
    },
    {
        "value": "CWH",
        "label": "CWH"
    },
    {
        "value": "CWK",
        "label": "CWK"
    },
    {
        "value": "CWT",
        "label": "CWT"
    },
    {
        "value": "CX",
        "label": "CX"
    },
    {
        "value": "CXE",
        "label": "CXE"
    },
    {
        "value": "CXH",
        "label": "CXH"
    },
    {
        "value": "CXO",
        "label": "CXO"
    },
    {
        "value": "CXP",
        "label": "CXP"
    },
    {
        "value": "CXW",
        "label": "CXW"
    },
    {
        "value": "CYD",
        "label": "CYD"
    },
    {
        "value": "CYH",
        "label": "CYH"
    },
    {
        "value": "CZZ",
        "label": "CZZ"
    },
    {
        "value": "D",
        "label": "D"
    },
    {
        "value": "DAC",
        "label": "DAC"
    },
    {
        "value": "DAL",
        "label": "DAL"
    },
    {
        "value": "DAN",
        "label": "DAN"
    },
    {
        "value": "DAO",
        "label": "DAO"
    },
    {
        "value": "DAR",
        "label": "DAR"
    },
    {
        "value": "DAVA",
        "label": "DAVA"
    },
    {
        "value": "DB",
        "label": "DB"
    },
    {
        "value": "DBD",
        "label": "DBD"
    },
    {
        "value": "DBI",
        "label": "DBI"
    },
    {
        "value": "DBL",
        "label": "DBL"
    },
    {
        "value": "DCF",
        "label": "DCF"
    },
    {
        "value": "DCI",
        "label": "DCI"
    },
    {
        "value": "DCO",
        "label": "DCO"
    },
    {
        "value": "DCP",
        "label": "DCP"
    },
    {
        "value": "DCP-B",
        "label": "DCP-B"
    },
    {
        "value": "DCP-C",
        "label": "DCP-C"
    },
    {
        "value": "DCUE",
        "label": "DCUE"
    },
    {
        "value": "DD",
        "label": "DD"
    },
    {
        "value": "DDD",
        "label": "DDD"
    },
    {
        "value": "DDF",
        "label": "DDF"
    },
    {
        "value": "DDS",
        "label": "DDS"
    },
    {
        "value": "DDT",
        "label": "DDT"
    },
    {
        "value": "DE",
        "label": "DE"
    },
    {
        "value": "DEA",
        "label": "DEA"
    },
    {
        "value": "DECK",
        "label": "DECK"
    },
    {
        "value": "DEI",
        "label": "DEI"
    },
    {
        "value": "DELL",
        "label": "DELL"
    },
    {
        "value": "DEO",
        "label": "DEO"
    },
    {
        "value": "DESP",
        "label": "DESP"
    },
    {
        "value": "DEX",
        "label": "DEX"
    },
    {
        "value": "DFIN",
        "label": "DFIN"
    },
    {
        "value": "DFN.U",
        "label": "DFN.U"
    },
    {
        "value": "DFN.W",
        "label": "DFN.W"
    },
    {
        "value": "DFNS",
        "label": "DFNS"
    },
    {
        "value": "DFP",
        "label": "DFP"
    },
    {
        "value": "DFS",
        "label": "DFS"
    },
    {
        "value": "DG",
        "label": "DG"
    },
    {
        "value": "DGX",
        "label": "DGX"
    },
    {
        "value": "DHF",
        "label": "DHF"
    },
    {
        "value": "DHI",
        "label": "DHI"
    },
    {
        "value": "DHR",
        "label": "DHR"
    },
    {
        "value": "DHR-A",
        "label": "DHR-A"
    },
    {
        "value": "DHR-B",
        "label": "DHR-B"
    },
    {
        "value": "DHT",
        "label": "DHT"
    },
    {
        "value": "DHX",
        "label": "DHX"
    },
    {
        "value": "DIAX",
        "label": "DIAX"
    },
    {
        "value": "DIN",
        "label": "DIN"
    },
    {
        "value": "DIS",
        "label": "DIS"
    },
    {
        "value": "DK",
        "label": "DK"
    },
    {
        "value": "DKL",
        "label": "DKL"
    },
    {
        "value": "DKS",
        "label": "DKS"
    },
    {
        "value": "DL",
        "label": "DL"
    },
    {
        "value": "DLB",
        "label": "DLB"
    },
    {
        "value": "DLN-A",
        "label": "DLN-A"
    },
    {
        "value": "DLN-B",
        "label": "DLN-B"
    },
    {
        "value": "DLNG",
        "label": "DLNG"
    },
    {
        "value": "DLPH",
        "label": "DLPH"
    },
    {
        "value": "DLR",
        "label": "DLR"
    },
    {
        "value": "DLR-C",
        "label": "DLR-C"
    },
    {
        "value": "DLR-G",
        "label": "DLR-G"
    },
    {
        "value": "DLR-I",
        "label": "DLR-I"
    },
    {
        "value": "DLR-J",
        "label": "DLR-J"
    },
    {
        "value": "DLR-K",
        "label": "DLR-K"
    },
    {
        "value": "DLR-L",
        "label": "DLR-L"
    },
    {
        "value": "DLX",
        "label": "DLX"
    },
    {
        "value": "DLY",
        "label": "DLY"
    },
    {
        "value": "DMB",
        "label": "DMB"
    },
    {
        "value": "DMO",
        "label": "DMO"
    },
    {
        "value": "DMY.U",
        "label": "DMY.U"
    },
    {
        "value": "DMY.W",
        "label": "DMY.W"
    },
    {
        "value": "DMYT",
        "label": "DMYT"
    },
    {
        "value": "DNI",
        "label": "DNI"
    },
    {
        "value": "DNK",
        "label": "DNK"
    },
    {
        "value": "DNOW",
        "label": "DNOW"
    },
    {
        "value": "DNP",
        "label": "DNP"
    },
    {
        "value": "DNR",
        "label": "DNR"
    },
    {
        "value": "DOC",
        "label": "DOC"
    },
    {
        "value": "DOOR",
        "label": "DOOR"
    },
    {
        "value": "DOV",
        "label": "DOV"
    },
    {
        "value": "DOW",
        "label": "DOW"
    },
    {
        "value": "DPG",
        "label": "DPG"
    },
    {
        "value": "DPZ",
        "label": "DPZ"
    },
    {
        "value": "DQ",
        "label": "DQ"
    },
    {
        "value": "DRD",
        "label": "DRD"
    },
    {
        "value": "DRE",
        "label": "DRE"
    },
    {
        "value": "DRH",
        "label": "DRH"
    },
    {
        "value": "DRI",
        "label": "DRI"
    },
    {
        "value": "DRQ",
        "label": "DRQ"
    },
    {
        "value": "DRUA",
        "label": "DRUA"
    },
    {
        "value": "DS",
        "label": "DS"
    },
    {
        "value": "DS-B",
        "label": "DS-B"
    },
    {
        "value": "DS-C",
        "label": "DS-C"
    },
    {
        "value": "DS-D",
        "label": "DS-D"
    },
    {
        "value": "DSE",
        "label": "DSE"
    },
    {
        "value": "DSL",
        "label": "DSL"
    },
    {
        "value": "DSM",
        "label": "DSM"
    },
    {
        "value": "DSSI",
        "label": "DSSI"
    },
    {
        "value": "DSU",
        "label": "DSU"
    },
    {
        "value": "DSX",
        "label": "DSX"
    },
    {
        "value": "DSX-B",
        "label": "DSX-B"
    },
    {
        "value": "DT",
        "label": "DT"
    },
    {
        "value": "DTE",
        "label": "DTE"
    },
    {
        "value": "DTF",
        "label": "DTF"
    },
    {
        "value": "DTJ",
        "label": "DTJ"
    },
    {
        "value": "DTL.P",
        "label": "DTL.P"
    },
    {
        "value": "DTP",
        "label": "DTP"
    },
    {
        "value": "DTQ",
        "label": "DTQ"
    },
    {
        "value": "DTW",
        "label": "DTW"
    },
    {
        "value": "DTY",
        "label": "DTY"
    },
    {
        "value": "DUC",
        "label": "DUC"
    },
    {
        "value": "DUK",
        "label": "DUK"
    },
    {
        "value": "DUK-A",
        "label": "DUK-A"
    },
    {
        "value": "DUKB",
        "label": "DUKB"
    },
    {
        "value": "DUKH",
        "label": "DUKH"
    },
    {
        "value": "DVA",
        "label": "DVA"
    },
    {
        "value": "DVD",
        "label": "DVD"
    },
    {
        "value": "DVN",
        "label": "DVN"
    },
    {
        "value": "DX",
        "label": "DX"
    },
    {
        "value": "DX-B",
        "label": "DX-B"
    },
    {
        "value": "DX-C",
        "label": "DX-C"
    },
    {
        "value": "DXC",
        "label": "DXC"
    },
    {
        "value": "DY",
        "label": "DY"
    },
    {
        "value": "E",
        "label": "E"
    },
    {
        "value": "EAB",
        "label": "EAB"
    },
    {
        "value": "EAE",
        "label": "EAE"
    },
    {
        "value": "EAF",
        "label": "EAF"
    },
    {
        "value": "EAI",
        "label": "EAI"
    },
    {
        "value": "EARN",
        "label": "EARN"
    },
    {
        "value": "EAT",
        "label": "EAT"
    },
    {
        "value": "EB",
        "label": "EB"
    },
    {
        "value": "EBF",
        "label": "EBF"
    },
    {
        "value": "EBR",
        "label": "EBR"
    },
    {
        "value": "EBR.B",
        "label": "EBR.B"
    },
    {
        "value": "EBS",
        "label": "EBS"
    },
    {
        "value": "EC",
        "label": "EC"
    },
    {
        "value": "ECC",
        "label": "ECC"
    },
    {
        "value": "ECCB",
        "label": "ECCB"
    },
    {
        "value": "ECCX",
        "label": "ECCX"
    },
    {
        "value": "ECCY",
        "label": "ECCY"
    },
    {
        "value": "ECL",
        "label": "ECL"
    },
    {
        "value": "ECOM",
        "label": "ECOM"
    },
    {
        "value": "ECT",
        "label": "ECT"
    },
    {
        "value": "ED",
        "label": "ED"
    },
    {
        "value": "EDD",
        "label": "EDD"
    },
    {
        "value": "EDF",
        "label": "EDF"
    },
    {
        "value": "EDI",
        "label": "EDI"
    },
    {
        "value": "EDN",
        "label": "EDN"
    },
    {
        "value": "EDU",
        "label": "EDU"
    },
    {
        "value": "EE",
        "label": "EE"
    },
    {
        "value": "EEA",
        "label": "EEA"
    },
    {
        "value": "EEX",
        "label": "EEX"
    },
    {
        "value": "EFC",
        "label": "EFC"
    },
    {
        "value": "EFC-A",
        "label": "EFC-A"
    },
    {
        "value": "EFF",
        "label": "EFF"
    },
    {
        "value": "EFL",
        "label": "EFL"
    },
    {
        "value": "EFR",
        "label": "EFR"
    },
    {
        "value": "EFT",
        "label": "EFT"
    },
    {
        "value": "EFX",
        "label": "EFX"
    },
    {
        "value": "EGF",
        "label": "EGF"
    },
    {
        "value": "EGHT",
        "label": "EGHT"
    },
    {
        "value": "EGIF",
        "label": "EGIF"
    },
    {
        "value": "EGO",
        "label": "EGO"
    },
    {
        "value": "EGP",
        "label": "EGP"
    },
    {
        "value": "EGY",
        "label": "EGY"
    },
    {
        "value": "EHC",
        "label": "EHC"
    },
    {
        "value": "EHI",
        "label": "EHI"
    },
    {
        "value": "EHT",
        "label": "EHT"
    },
    {
        "value": "EIC",
        "label": "EIC"
    },
    {
        "value": "EIG",
        "label": "EIG"
    },
    {
        "value": "EIX",
        "label": "EIX"
    },
    {
        "value": "EL",
        "label": "EL"
    },
    {
        "value": "ELAN",
        "label": "ELAN"
    },
    {
        "value": "ELAT",
        "label": "ELAT"
    },
    {
        "value": "ELC",
        "label": "ELC"
    },
    {
        "value": "ELF",
        "label": "ELF"
    },
    {
        "value": "ELJ",
        "label": "ELJ"
    },
    {
        "value": "ELP",
        "label": "ELP"
    },
    {
        "value": "ELS",
        "label": "ELS"
    },
    {
        "value": "ELU",
        "label": "ELU"
    },
    {
        "value": "ELVT",
        "label": "ELVT"
    },
    {
        "value": "ELY",
        "label": "ELY"
    },
    {
        "value": "EMD",
        "label": "EMD"
    },
    {
        "value": "EME",
        "label": "EME"
    },
    {
        "value": "EMF",
        "label": "EMF"
    },
    {
        "value": "EMN",
        "label": "EMN"
    },
    {
        "value": "EMO",
        "label": "EMO"
    },
    {
        "value": "EMP",
        "label": "EMP"
    },
    {
        "value": "EMR",
        "label": "EMR"
    },
    {
        "value": "ENB",
        "label": "ENB"
    },
    {
        "value": "ENBA",
        "label": "ENBA"
    },
    {
        "value": "ENBL",
        "label": "ENBL"
    },
    {
        "value": "ENIA",
        "label": "ENIA"
    },
    {
        "value": "ENIC",
        "label": "ENIC"
    },
    {
        "value": "ENJ",
        "label": "ENJ"
    },
    {
        "value": "ENLC",
        "label": "ENLC"
    },
    {
        "value": "ENO",
        "label": "ENO"
    },
    {
        "value": "ENR",
        "label": "ENR"
    },
    {
        "value": "ENR-A",
        "label": "ENR-A"
    },
    {
        "value": "ENS",
        "label": "ENS"
    },
    {
        "value": "ENV",
        "label": "ENV"
    },
    {
        "value": "ENVA",
        "label": "ENVA"
    },
    {
        "value": "ENZ",
        "label": "ENZ"
    },
    {
        "value": "EOD",
        "label": "EOD"
    },
    {
        "value": "EOG",
        "label": "EOG"
    },
    {
        "value": "EOI",
        "label": "EOI"
    },
    {
        "value": "EOS",
        "label": "EOS"
    },
    {
        "value": "EOT",
        "label": "EOT"
    },
    {
        "value": "EP-C",
        "label": "EP-C"
    },
    {
        "value": "EPAC",
        "label": "EPAC"
    },
    {
        "value": "EPAM",
        "label": "EPAM"
    },
    {
        "value": "EPC",
        "label": "EPC"
    },
    {
        "value": "EPD",
        "label": "EPD"
    },
    {
        "value": "EPR",
        "label": "EPR"
    },
    {
        "value": "EPR-C",
        "label": "EPR-C"
    },
    {
        "value": "EPR-E",
        "label": "EPR-E"
    },
    {
        "value": "EPR-G",
        "label": "EPR-G"
    },
    {
        "value": "EPRT",
        "label": "EPRT"
    },
    {
        "value": "EQC",
        "label": "EQC"
    },
    {
        "value": "EQC-D",
        "label": "EQC-D"
    },
    {
        "value": "EQH",
        "label": "EQH"
    },
    {
        "value": "EQH-A",
        "label": "EQH-A"
    },
    {
        "value": "EQM",
        "label": "EQM"
    },
    {
        "value": "EQNR",
        "label": "EQNR"
    },
    {
        "value": "EQR",
        "label": "EQR"
    },
    {
        "value": "EQS",
        "label": "EQS"
    },
    {
        "value": "EQT",
        "label": "EQT"
    },
    {
        "value": "ERA",
        "label": "ERA"
    },
    {
        "value": "ERF",
        "label": "ERF"
    },
    {
        "value": "ERJ",
        "label": "ERJ"
    },
    {
        "value": "EROS",
        "label": "EROS"
    },
    {
        "value": "ES",
        "label": "ES"
    },
    {
        "value": "ESE",
        "label": "ESE"
    },
    {
        "value": "ESI",
        "label": "ESI"
    },
    {
        "value": "ESNT",
        "label": "ESNT"
    },
    {
        "value": "ESRT",
        "label": "ESRT"
    },
    {
        "value": "ESS",
        "label": "ESS"
    },
    {
        "value": "ESTC",
        "label": "ESTC"
    },
    {
        "value": "ESTE",
        "label": "ESTE"
    },
    {
        "value": "ET",
        "label": "ET"
    },
    {
        "value": "ETB",
        "label": "ETB"
    },
    {
        "value": "ETG",
        "label": "ETG"
    },
    {
        "value": "ETH",
        "label": "ETH"
    },
    {
        "value": "ETI.P",
        "label": "ETI.P"
    },
    {
        "value": "ETJ",
        "label": "ETJ"
    },
    {
        "value": "ETM",
        "label": "ETM"
    },
    {
        "value": "ETN",
        "label": "ETN"
    },
    {
        "value": "ETO",
        "label": "ETO"
    },
    {
        "value": "ETP-C",
        "label": "ETP-C"
    },
    {
        "value": "ETP-D",
        "label": "ETP-D"
    },
    {
        "value": "ETP-E",
        "label": "ETP-E"
    },
    {
        "value": "ETR",
        "label": "ETR"
    },
    {
        "value": "ETRN",
        "label": "ETRN"
    },
    {
        "value": "ETV",
        "label": "ETV"
    },
    {
        "value": "ETW",
        "label": "ETW"
    },
    {
        "value": "ETX",
        "label": "ETX"
    },
    {
        "value": "ETY",
        "label": "ETY"
    },
    {
        "value": "EURN",
        "label": "EURN"
    },
    {
        "value": "EV",
        "label": "EV"
    },
    {
        "value": "EVA",
        "label": "EVA"
    },
    {
        "value": "EVC",
        "label": "EVC"
    },
    {
        "value": "EVF",
        "label": "EVF"
    },
    {
        "value": "EVG",
        "label": "EVG"
    },
    {
        "value": "EVH",
        "label": "EVH"
    },
    {
        "value": "EVN",
        "label": "EVN"
    },
    {
        "value": "EVR",
        "label": "EVR"
    },
    {
        "value": "EVRG",
        "label": "EVRG"
    },
    {
        "value": "EVRI",
        "label": "EVRI"
    },
    {
        "value": "EVT",
        "label": "EVT"
    },
    {
        "value": "EVTC",
        "label": "EVTC"
    },
    {
        "value": "EW",
        "label": "EW"
    },
    {
        "value": "EXD",
        "label": "EXD"
    },
    {
        "value": "EXG",
        "label": "EXG"
    },
    {
        "value": "EXK",
        "label": "EXK"
    },
    {
        "value": "EXP",
        "label": "EXP"
    },
    {
        "value": "EXPR",
        "label": "EXPR"
    },
    {
        "value": "EXR",
        "label": "EXR"
    },
    {
        "value": "EXTN",
        "label": "EXTN"
    },
    {
        "value": "EZT",
        "label": "EZT"
    },
    {
        "value": "F",
        "label": "F"
    },
    {
        "value": "F-B",
        "label": "F-B"
    },
    {
        "value": "F-C",
        "label": "F-C"
    },
    {
        "value": "FAF",
        "label": "FAF"
    },
    {
        "value": "FAM",
        "label": "FAM"
    },
    {
        "value": "FBC",
        "label": "FBC"
    },
    {
        "value": "FBHS",
        "label": "FBHS"
    },
    {
        "value": "FBK",
        "label": "FBK"
    },
    {
        "value": "FBM",
        "label": "FBM"
    },
    {
        "value": "FBP",
        "label": "FBP"
    },
    {
        "value": "FC",
        "label": "FC"
    },
    {
        "value": "FCAU",
        "label": "FCAU"
    },
    {
        "value": "FCF",
        "label": "FCF"
    },
    {
        "value": "FCN",
        "label": "FCN"
    },
    {
        "value": "FCPT",
        "label": "FCPT"
    },
    {
        "value": "FCT",
        "label": "FCT"
    },
    {
        "value": "FCX",
        "label": "FCX"
    },
    {
        "value": "FDEU",
        "label": "FDEU"
    },
    {
        "value": "FDP",
        "label": "FDP"
    },
    {
        "value": "FDS",
        "label": "FDS"
    },
    {
        "value": "FDX",
        "label": "FDX"
    },
    {
        "value": "FE",
        "label": "FE"
    },
    {
        "value": "FEA.U",
        "label": "FEA.U"
    },
    {
        "value": "FEA.W",
        "label": "FEA.W"
    },
    {
        "value": "FEAC",
        "label": "FEAC"
    },
    {
        "value": "FEDU",
        "label": "FEDU"
    },
    {
        "value": "FEI",
        "label": "FEI"
    },
    {
        "value": "FENG",
        "label": "FENG"
    },
    {
        "value": "FEO",
        "label": "FEO"
    },
    {
        "value": "FET",
        "label": "FET"
    },
    {
        "value": "FF",
        "label": "FF"
    },
    {
        "value": "FFA",
        "label": "FFA"
    },
    {
        "value": "FFC",
        "label": "FFC"
    },
    {
        "value": "FFG",
        "label": "FFG"
    },
    {
        "value": "FG",
        "label": "FG"
    },
    {
        "value": "FG.W",
        "label": "FG.W"
    },
    {
        "value": "FGB",
        "label": "FGB"
    },
    {
        "value": "FHI",
        "label": "FHI"
    },
    {
        "value": "FHN",
        "label": "FHN"
    },
    {
        "value": "FHN-A",
        "label": "FHN-A"
    },
    {
        "value": "FHN-E",
        "label": "FHN-E"
    },
    {
        "value": "FI",
        "label": "FI"
    },
    {
        "value": "FICO",
        "label": "FICO"
    },
    {
        "value": "FIF",
        "label": "FIF"
    },
    {
        "value": "FINS",
        "label": "FINS"
    },
    {
        "value": "FINV",
        "label": "FINV"
    },
    {
        "value": "FIS",
        "label": "FIS"
    },
    {
        "value": "FIT",
        "label": "FIT"
    },
    {
        "value": "FIV",
        "label": "FIV"
    },
    {
        "value": "FIX",
        "label": "FIX"
    },
    {
        "value": "FL",
        "label": "FL"
    },
    {
        "value": "FLC",
        "label": "FLC"
    },
    {
        "value": "FLNG",
        "label": "FLNG"
    },
    {
        "value": "FLO",
        "label": "FLO"
    },
    {
        "value": "FLOW",
        "label": "FLOW"
    },
    {
        "value": "FLR",
        "label": "FLR"
    },
    {
        "value": "FLS",
        "label": "FLS"
    },
    {
        "value": "FLT",
        "label": "FLT"
    },
    {
        "value": "FLY",
        "label": "FLY"
    },
    {
        "value": "FMC",
        "label": "FMC"
    },
    {
        "value": "FMN",
        "label": "FMN"
    },
    {
        "value": "FMO",
        "label": "FMO"
    },
    {
        "value": "FMS",
        "label": "FMS"
    },
    {
        "value": "FMX",
        "label": "FMX"
    },
    {
        "value": "FMY",
        "label": "FMY"
    },
    {
        "value": "FN",
        "label": "FN"
    },
    {
        "value": "FNB",
        "label": "FNB"
    },
    {
        "value": "FNB-E",
        "label": "FNB-E"
    },
    {
        "value": "FND",
        "label": "FND"
    },
    {
        "value": "FNF",
        "label": "FNF"
    },
    {
        "value": "FNV",
        "label": "FNV"
    },
    {
        "value": "FOE",
        "label": "FOE"
    },
    {
        "value": "FOF",
        "label": "FOF"
    },
    {
        "value": "FOR",
        "label": "FOR"
    },
    {
        "value": "FOUR",
        "label": "FOUR"
    },
    {
        "value": "FPA.U",
        "label": "FPA.U"
    },
    {
        "value": "FPA.W",
        "label": "FPA.W"
    },
    {
        "value": "FPAC",
        "label": "FPAC"
    },
    {
        "value": "FPF",
        "label": "FPF"
    },
    {
        "value": "FPH",
        "label": "FPH"
    },
    {
        "value": "FPI",
        "label": "FPI"
    },
    {
        "value": "FPI-B",
        "label": "FPI-B"
    },
    {
        "value": "FPL",
        "label": "FPL"
    },
    {
        "value": "FR",
        "label": "FR"
    },
    {
        "value": "FRA",
        "label": "FRA"
    },
    {
        "value": "FRC",
        "label": "FRC"
    },
    {
        "value": "FRC-F",
        "label": "FRC-F"
    },
    {
        "value": "FRC-G",
        "label": "FRC-G"
    },
    {
        "value": "FRC-H",
        "label": "FRC-H"
    },
    {
        "value": "FRC-I",
        "label": "FRC-I"
    },
    {
        "value": "FRC-J",
        "label": "FRC-J"
    },
    {
        "value": "FRO",
        "label": "FRO"
    },
    {
        "value": "FRT",
        "label": "FRT"
    },
    {
        "value": "FRT-C",
        "label": "FRT-C"
    },
    {
        "value": "FSB",
        "label": "FSB"
    },
    {
        "value": "FSD",
        "label": "FSD"
    },
    {
        "value": "FSK",
        "label": "FSK"
    },
    {
        "value": "FSKR",
        "label": "FSKR"
    },
    {
        "value": "FSLF",
        "label": "FSLF"
    },
    {
        "value": "FSLY",
        "label": "FSLY"
    },
    {
        "value": "FSM",
        "label": "FSM"
    },
    {
        "value": "FSS",
        "label": "FSS"
    },
    {
        "value": "FT",
        "label": "FT"
    },
    {
        "value": "FTA-A",
        "label": "FTA-A"
    },
    {
        "value": "FTA-B",
        "label": "FTA-B"
    },
    {
        "value": "FTAI",
        "label": "FTAI"
    },
    {
        "value": "FTCH",
        "label": "FTCH"
    },
    {
        "value": "FTI",
        "label": "FTI"
    },
    {
        "value": "FTK",
        "label": "FTK"
    },
    {
        "value": "FTS",
        "label": "FTS"
    },
    {
        "value": "FTV",
        "label": "FTV"
    },
    {
        "value": "FTV-A",
        "label": "FTV-A"
    },
    {
        "value": "FUL",
        "label": "FUL"
    },
    {
        "value": "FUN",
        "label": "FUN"
    },
    {
        "value": "FVA.U",
        "label": "FVA.U"
    },
    {
        "value": "FVAC",
        "label": "FVAC"
    },
    {
        "value": "FVRR",
        "label": "FVRR"
    },
    {
        "value": "G",
        "label": "G"
    },
    {
        "value": "GAB",
        "label": "GAB"
    },
    {
        "value": "GAB-G",
        "label": "GAB-G"
    },
    {
        "value": "GAB-H",
        "label": "GAB-H"
    },
    {
        "value": "GAB-J",
        "label": "GAB-J"
    },
    {
        "value": "GAB-K",
        "label": "GAB-K"
    },
    {
        "value": "GAM",
        "label": "GAM"
    },
    {
        "value": "GAM-B",
        "label": "GAM-B"
    },
    {
        "value": "GATX",
        "label": "GATX"
    },
    {
        "value": "GBAB",
        "label": "GBAB"
    },
    {
        "value": "GBL",
        "label": "GBL"
    },
    {
        "value": "GBX",
        "label": "GBX"
    },
    {
        "value": "GCAP",
        "label": "GCAP"
    },
    {
        "value": "GCI",
        "label": "GCI"
    },
    {
        "value": "GCO",
        "label": "GCO"
    },
    {
        "value": "GCP",
        "label": "GCP"
    },
    {
        "value": "GCV",
        "label": "GCV"
    },
    {
        "value": "GD",
        "label": "GD"
    },
    {
        "value": "GDDY",
        "label": "GDDY"
    },
    {
        "value": "GDL",
        "label": "GDL"
    },
    {
        "value": "GDL-C",
        "label": "GDL-C"
    },
    {
        "value": "GDO",
        "label": "GDO"
    },
    {
        "value": "GDOT",
        "label": "GDOT"
    },
    {
        "value": "GDV",
        "label": "GDV"
    },
    {
        "value": "GDV-A",
        "label": "GDV-A"
    },
    {
        "value": "GDV-G",
        "label": "GDV-G"
    },
    {
        "value": "GDV-H",
        "label": "GDV-H"
    },
    {
        "value": "GE",
        "label": "GE"
    },
    {
        "value": "GEF",
        "label": "GEF"
    },
    {
        "value": "GEF.B",
        "label": "GEF.B"
    },
    {
        "value": "GEL",
        "label": "GEL"
    },
    {
        "value": "GEN",
        "label": "GEN"
    },
    {
        "value": "GEO",
        "label": "GEO"
    },
    {
        "value": "GER",
        "label": "GER"
    },
    {
        "value": "GES",
        "label": "GES"
    },
    {
        "value": "GF",
        "label": "GF"
    },
    {
        "value": "GFF",
        "label": "GFF"
    },
    {
        "value": "GFI",
        "label": "GFI"
    },
    {
        "value": "GFL",
        "label": "GFL"
    },
    {
        "value": "GFLU",
        "label": "GFLU"
    },
    {
        "value": "GFY",
        "label": "GFY"
    },
    {
        "value": "GGB",
        "label": "GGB"
    },
    {
        "value": "GGG",
        "label": "GGG"
    },
    {
        "value": "GGM",
        "label": "GGM"
    },
    {
        "value": "GGT",
        "label": "GGT"
    },
    {
        "value": "GGT-E",
        "label": "GGT-E"
    },
    {
        "value": "GGT-G",
        "label": "GGT-G"
    },
    {
        "value": "GGZ",
        "label": "GGZ"
    },
    {
        "value": "GGZ-A",
        "label": "GGZ-A"
    },
    {
        "value": "GHC",
        "label": "GHC"
    },
    {
        "value": "GHG",
        "label": "GHG"
    },
    {
        "value": "GHL",
        "label": "GHL"
    },
    {
        "value": "GHM",
        "label": "GHM"
    },
    {
        "value": "GHY",
        "label": "GHY"
    },
    {
        "value": "GIB",
        "label": "GIB"
    },
    {
        "value": "GIK.U",
        "label": "GIK.U"
    },
    {
        "value": "GIL",
        "label": "GIL"
    },
    {
        "value": "GIM",
        "label": "GIM"
    },
    {
        "value": "GIS",
        "label": "GIS"
    },
    {
        "value": "GIX",
        "label": "GIX"
    },
    {
        "value": "GIX.P",
        "label": "GIX.P"
    },
    {
        "value": "GIX.U",
        "label": "GIX.U"
    },
    {
        "value": "GIX.W",
        "label": "GIX.W"
    },
    {
        "value": "GJH",
        "label": "GJH"
    },
    {
        "value": "GJO",
        "label": "GJO"
    },
    {
        "value": "GJP",
        "label": "GJP"
    },
    {
        "value": "GJR",
        "label": "GJR"
    },
    {
        "value": "GJS",
        "label": "GJS"
    },
    {
        "value": "GJT",
        "label": "GJT"
    },
    {
        "value": "GKOS",
        "label": "GKOS"
    },
    {
        "value": "GL",
        "label": "GL"
    },
    {
        "value": "GL-C",
        "label": "GL-C"
    },
    {
        "value": "GLE.U",
        "label": "GLE.U"
    },
    {
        "value": "GLE.W",
        "label": "GLE.W"
    },
    {
        "value": "GLEO",
        "label": "GLEO"
    },
    {
        "value": "GLO-A",
        "label": "GLO-A"
    },
    {
        "value": "GLO-B",
        "label": "GLO-B"
    },
    {
        "value": "GLO-C",
        "label": "GLO-C"
    },
    {
        "value": "GLO-G",
        "label": "GLO-G"
    },
    {
        "value": "GLOB",
        "label": "GLOB"
    },
    {
        "value": "GLOG",
        "label": "GLOG"
    },
    {
        "value": "GLOP",
        "label": "GLOP"
    },
    {
        "value": "GLP",
        "label": "GLP"
    },
    {
        "value": "GLP-A",
        "label": "GLP-A"
    },
    {
        "value": "GLT",
        "label": "GLT"
    },
    {
        "value": "GLW",
        "label": "GLW"
    },
    {
        "value": "GM",
        "label": "GM"
    },
    {
        "value": "GME",
        "label": "GME"
    },
    {
        "value": "GMED",
        "label": "GMED"
    },
    {
        "value": "GMR-A",
        "label": "GMR-A"
    },
    {
        "value": "GMRE",
        "label": "GMRE"
    },
    {
        "value": "GMS",
        "label": "GMS"
    },
    {
        "value": "GMTA",
        "label": "GMTA"
    },
    {
        "value": "GMZ",
        "label": "GMZ"
    },
    {
        "value": "GNC",
        "label": "GNC"
    },
    {
        "value": "GNE",
        "label": "GNE"
    },
    {
        "value": "GNE-A",
        "label": "GNE-A"
    },
    {
        "value": "GNK",
        "label": "GNK"
    },
    {
        "value": "GNL",
        "label": "GNL"
    },
    {
        "value": "GNL-A",
        "label": "GNL-A"
    },
    {
        "value": "GNL-B",
        "label": "GNL-B"
    },
    {
        "value": "GNRC",
        "label": "GNRC"
    },
    {
        "value": "GNT",
        "label": "GNT"
    },
    {
        "value": "GNT-A",
        "label": "GNT-A"
    },
    {
        "value": "GNW",
        "label": "GNW"
    },
    {
        "value": "GOF",
        "label": "GOF"
    },
    {
        "value": "GOL",
        "label": "GOL"
    },
    {
        "value": "GOLD",
        "label": "GOLD"
    },
    {
        "value": "GOLF",
        "label": "GOLF"
    },
    {
        "value": "GOOS",
        "label": "GOOS"
    },
    {
        "value": "GPC",
        "label": "GPC"
    },
    {
        "value": "GPI",
        "label": "GPI"
    },
    {
        "value": "GPJA",
        "label": "GPJA"
    },
    {
        "value": "GPK",
        "label": "GPK"
    },
    {
        "value": "GPM",
        "label": "GPM"
    },
    {
        "value": "GPMT",
        "label": "GPMT"
    },
    {
        "value": "GPN",
        "label": "GPN"
    },
    {
        "value": "GPRK",
        "label": "GPRK"
    },
    {
        "value": "GPS",
        "label": "GPS"
    },
    {
        "value": "GPX",
        "label": "GPX"
    },
    {
        "value": "GRA",
        "label": "GRA"
    },
    {
        "value": "GRA.U",
        "label": "GRA.U"
    },
    {
        "value": "GRA.W",
        "label": "GRA.W"
    },
    {
        "value": "GRAF",
        "label": "GRAF"
    },
    {
        "value": "GRAM",
        "label": "GRAM"
    },
    {
        "value": "GRC",
        "label": "GRC"
    },
    {
        "value": "GRP.U",
        "label": "GRP.U"
    },
    {
        "value": "GRUB",
        "label": "GRUB"
    },
    {
        "value": "GRX",
        "label": "GRX"
    },
    {
        "value": "GRX-B",
        "label": "GRX-B"
    },
    {
        "value": "GS",
        "label": "GS"
    },
    {
        "value": "GS-A",
        "label": "GS-A"
    },
    {
        "value": "GS-C",
        "label": "GS-C"
    },
    {
        "value": "GS-D",
        "label": "GS-D"
    },
    {
        "value": "GS-J",
        "label": "GS-J"
    },
    {
        "value": "GS-K",
        "label": "GS-K"
    },
    {
        "value": "GS-N",
        "label": "GS-N"
    },
    {
        "value": "GSBD",
        "label": "GSBD"
    },
    {
        "value": "GSH",
        "label": "GSH"
    },
    {
        "value": "GSK",
        "label": "GSK"
    },
    {
        "value": "GSL",
        "label": "GSL"
    },
    {
        "value": "GSL-B",
        "label": "GSL-B"
    },
    {
        "value": "GSLD",
        "label": "GSLD"
    },
    {
        "value": "GSX",
        "label": "GSX"
    },
    {
        "value": "GTES",
        "label": "GTES"
    },
    {
        "value": "GTN",
        "label": "GTN"
    },
    {
        "value": "GTN.A",
        "label": "GTN.A"
    },
    {
        "value": "GTS",
        "label": "GTS"
    },
    {
        "value": "GTT",
        "label": "GTT"
    },
    {
        "value": "GTX",
        "label": "GTX"
    },
    {
        "value": "GTY",
        "label": "GTY"
    },
    {
        "value": "GUT",
        "label": "GUT"
    },
    {
        "value": "GUT-A",
        "label": "GUT-A"
    },
    {
        "value": "GUT-C",
        "label": "GUT-C"
    },
    {
        "value": "GVA",
        "label": "GVA"
    },
    {
        "value": "GWB",
        "label": "GWB"
    },
    {
        "value": "GWRE",
        "label": "GWRE"
    },
    {
        "value": "GWW",
        "label": "GWW"
    },
    {
        "value": "GYC",
        "label": "GYC"
    },
    {
        "value": "H",
        "label": "H"
    },
    {
        "value": "HAE",
        "label": "HAE"
    },
    {
        "value": "HAL",
        "label": "HAL"
    },
    {
        "value": "HASI",
        "label": "HASI"
    },
    {
        "value": "HBB",
        "label": "HBB"
    },
    {
        "value": "HBI",
        "label": "HBI"
    },
    {
        "value": "HBM",
        "label": "HBM"
    },
    {
        "value": "HCA",
        "label": "HCA"
    },
    {
        "value": "HCC",
        "label": "HCC"
    },
    {
        "value": "HCFT",
        "label": "HCFT"
    },
    {
        "value": "HCHC",
        "label": "HCHC"
    },
    {
        "value": "HCI",
        "label": "HCI"
    },
    {
        "value": "HCR",
        "label": "HCR"
    },
    {
        "value": "HCXY",
        "label": "HCXY"
    },
    {
        "value": "HCXZ",
        "label": "HCXZ"
    },
    {
        "value": "HD",
        "label": "HD"
    },
    {
        "value": "HDB",
        "label": "HDB"
    },
    {
        "value": "HE",
        "label": "HE"
    },
    {
        "value": "HEI",
        "label": "HEI"
    },
    {
        "value": "HEI.A",
        "label": "HEI.A"
    },
    {
        "value": "HEP",
        "label": "HEP"
    },
    {
        "value": "HEQ",
        "label": "HEQ"
    },
    {
        "value": "HES",
        "label": "HES"
    },
    {
        "value": "HESM",
        "label": "HESM"
    },
    {
        "value": "HEXO",
        "label": "HEXO"
    },
    {
        "value": "HFC",
        "label": "HFC"
    },
    {
        "value": "HFR-A",
        "label": "HFR-A"
    },
    {
        "value": "HFRO",
        "label": "HFRO"
    },
    {
        "value": "HGH",
        "label": "HGH"
    },
    {
        "value": "HGLB",
        "label": "HGLB"
    },
    {
        "value": "HGV",
        "label": "HGV"
    },
    {
        "value": "HHC",
        "label": "HHC"
    },
    {
        "value": "HHS",
        "label": "HHS"
    },
    {
        "value": "HI",
        "label": "HI"
    },
    {
        "value": "HIE",
        "label": "HIE"
    },
    {
        "value": "HIG",
        "label": "HIG"
    },
    {
        "value": "HIG-G",
        "label": "HIG-G"
    },
    {
        "value": "HII",
        "label": "HII"
    },
    {
        "value": "HIL",
        "label": "HIL"
    },
    {
        "value": "HIO",
        "label": "HIO"
    },
    {
        "value": "HIW",
        "label": "HIW"
    },
    {
        "value": "HIX",
        "label": "HIX"
    },
    {
        "value": "HKIB",
        "label": "HKIB"
    },
    {
        "value": "HL",
        "label": "HL"
    },
    {
        "value": "HL-B",
        "label": "HL-B"
    },
    {
        "value": "HLF",
        "label": "HLF"
    },
    {
        "value": "HLI",
        "label": "HLI"
    },
    {
        "value": "HLT",
        "label": "HLT"
    },
    {
        "value": "HLX",
        "label": "HLX"
    },
    {
        "value": "HMC",
        "label": "HMC"
    },
    {
        "value": "HMI",
        "label": "HMI"
    },
    {
        "value": "HML-A",
        "label": "HML-A"
    },
    {
        "value": "HMLP",
        "label": "HMLP"
    },
    {
        "value": "HMN",
        "label": "HMN"
    },
    {
        "value": "HMY",
        "label": "HMY"
    },
    {
        "value": "HNGR",
        "label": "HNGR"
    },
    {
        "value": "HNI",
        "label": "HNI"
    },
    {
        "value": "HNP",
        "label": "HNP"
    },
    {
        "value": "HOG",
        "label": "HOG"
    },
    {
        "value": "HOME",
        "label": "HOME"
    },
    {
        "value": "HON",
        "label": "HON"
    },
    {
        "value": "HOV",
        "label": "HOV"
    },
    {
        "value": "HP",
        "label": "HP"
    },
    {
        "value": "HPE",
        "label": "HPE"
    },
    {
        "value": "HPF",
        "label": "HPF"
    },
    {
        "value": "HPI",
        "label": "HPI"
    },
    {
        "value": "HPP",
        "label": "HPP"
    },
    {
        "value": "HPQ",
        "label": "HPQ"
    },
    {
        "value": "HPR",
        "label": "HPR"
    },
    {
        "value": "HPS",
        "label": "HPS"
    },
    {
        "value": "HQH",
        "label": "HQH"
    },
    {
        "value": "HQL",
        "label": "HQL"
    },
    {
        "value": "HR",
        "label": "HR"
    },
    {
        "value": "HRB",
        "label": "HRB"
    },
    {
        "value": "HRC",
        "label": "HRC"
    },
    {
        "value": "HRI",
        "label": "HRI"
    },
    {
        "value": "HRL",
        "label": "HRL"
    },
    {
        "value": "HRTG",
        "label": "HRTG"
    },
    {
        "value": "HSB-A",
        "label": "HSB-A"
    },
    {
        "value": "HSBC",
        "label": "HSBC"
    },
    {
        "value": "HSC",
        "label": "HSC"
    },
    {
        "value": "HST",
        "label": "HST"
    },
    {
        "value": "HSY",
        "label": "HSY"
    },
    {
        "value": "HT",
        "label": "HT"
    },
    {
        "value": "HT-C",
        "label": "HT-C"
    },
    {
        "value": "HT-D",
        "label": "HT-D"
    },
    {
        "value": "HT-E",
        "label": "HT-E"
    },
    {
        "value": "HTA",
        "label": "HTA"
    },
    {
        "value": "HTD",
        "label": "HTD"
    },
    {
        "value": "HTFA",
        "label": "HTFA"
    },
    {
        "value": "HTGC",
        "label": "HTGC"
    },
    {
        "value": "HTH",
        "label": "HTH"
    },
    {
        "value": "HTY",
        "label": "HTY"
    },
    {
        "value": "HTZ",
        "label": "HTZ"
    },
    {
        "value": "HUBB",
        "label": "HUBB"
    },
    {
        "value": "HUBS",
        "label": "HUBS"
    },
    {
        "value": "HUD",
        "label": "HUD"
    },
    {
        "value": "HUM",
        "label": "HUM"
    },
    {
        "value": "HUN",
        "label": "HUN"
    },
    {
        "value": "HUYA",
        "label": "HUYA"
    },
    {
        "value": "HVT",
        "label": "HVT"
    },
    {
        "value": "HVT.A",
        "label": "HVT.A"
    },
    {
        "value": "HWM",
        "label": "HWM"
    },
    {
        "value": "HXL",
        "label": "HXL"
    },
    {
        "value": "HY",
        "label": "HY"
    },
    {
        "value": "HYB",
        "label": "HYB"
    },
    {
        "value": "HYI",
        "label": "HYI"
    },
    {
        "value": "HYT",
        "label": "HYT"
    },
    {
        "value": "HZN",
        "label": "HZN"
    },
    {
        "value": "HZO",
        "label": "HZO"
    },
    {
        "value": "IAA",
        "label": "IAA"
    },
    {
        "value": "IAE",
        "label": "IAE"
    },
    {
        "value": "IAG",
        "label": "IAG"
    },
    {
        "value": "IBA",
        "label": "IBA"
    },
    {
        "value": "IBM",
        "label": "IBM"
    },
    {
        "value": "IBN",
        "label": "IBN"
    },
    {
        "value": "IBP",
        "label": "IBP"
    },
    {
        "value": "ICD",
        "label": "ICD"
    },
    {
        "value": "ICE",
        "label": "ICE"
    },
    {
        "value": "ICL",
        "label": "ICL"
    },
    {
        "value": "IDA",
        "label": "IDA"
    },
    {
        "value": "IDE",
        "label": "IDE"
    },
    {
        "value": "IDT",
        "label": "IDT"
    },
    {
        "value": "IEX",
        "label": "IEX"
    },
    {
        "value": "IFF",
        "label": "IFF"
    },
    {
        "value": "IFFT",
        "label": "IFFT"
    },
    {
        "value": "IFN",
        "label": "IFN"
    },
    {
        "value": "IFS",
        "label": "IFS"
    },
    {
        "value": "IGA",
        "label": "IGA"
    },
    {
        "value": "IGD",
        "label": "IGD"
    },
    {
        "value": "IGI",
        "label": "IGI"
    },
    {
        "value": "IGR",
        "label": "IGR"
    },
    {
        "value": "IGT",
        "label": "IGT"
    },
    {
        "value": "IHC",
        "label": "IHC"
    },
    {
        "value": "IHD",
        "label": "IHD"
    },
    {
        "value": "IHG",
        "label": "IHG"
    },
    {
        "value": "IHIT",
        "label": "IHIT"
    },
    {
        "value": "IHTA",
        "label": "IHTA"
    },
    {
        "value": "IID",
        "label": "IID"
    },
    {
        "value": "IIF",
        "label": "IIF"
    },
    {
        "value": "IIM",
        "label": "IIM"
    },
    {
        "value": "IIP-A",
        "label": "IIP-A"
    },
    {
        "value": "IIPR",
        "label": "IIPR"
    },
    {
        "value": "IMAX",
        "label": "IMAX"
    },
    {
        "value": "INFO",
        "label": "INFO"
    },
    {
        "value": "INFY",
        "label": "INFY"
    },
    {
        "value": "ING",
        "label": "ING"
    },
    {
        "value": "INGR",
        "label": "INGR"
    },
    {
        "value": "INN",
        "label": "INN"
    },
    {
        "value": "INN-D",
        "label": "INN-D"
    },
    {
        "value": "INN-E",
        "label": "INN-E"
    },
    {
        "value": "INS-A",
        "label": "INS-A"
    },
    {
        "value": "INSI",
        "label": "INSI"
    },
    {
        "value": "INSP",
        "label": "INSP"
    },
    {
        "value": "INSW",
        "label": "INSW"
    },
    {
        "value": "INT",
        "label": "INT"
    },
    {
        "value": "INVH",
        "label": "INVH"
    },
    {
        "value": "IO",
        "label": "IO"
    },
    {
        "value": "IP",
        "label": "IP"
    },
    {
        "value": "IPG",
        "label": "IPG"
    },
    {
        "value": "IPHI",
        "label": "IPHI"
    },
    {
        "value": "IPI",
        "label": "IPI"
    },
    {
        "value": "IPO.U",
        "label": "IPO.U"
    },
    {
        "value": "IPO.W",
        "label": "IPO.W"
    },
    {
        "value": "IPOB",
        "label": "IPOB"
    },
    {
        "value": "IPOC",
        "label": "IPOC"
    },
    {
        "value": "IPV",
        "label": "IPV"
    },
    {
        "value": "IPV.U",
        "label": "IPV.U"
    },
    {
        "value": "IPV.W",
        "label": "IPV.W"
    },
    {
        "value": "IQI",
        "label": "IQI"
    },
    {
        "value": "IQV",
        "label": "IQV"
    },
    {
        "value": "IR",
        "label": "IR"
    },
    {
        "value": "IRE-C",
        "label": "IRE-C"
    },
    {
        "value": "IRET",
        "label": "IRET"
    },
    {
        "value": "IRL",
        "label": "IRL"
    },
    {
        "value": "IRM",
        "label": "IRM"
    },
    {
        "value": "IRR",
        "label": "IRR"
    },
    {
        "value": "IRS",
        "label": "IRS"
    },
    {
        "value": "IRT",
        "label": "IRT"
    },
    {
        "value": "ISD",
        "label": "ISD"
    },
    {
        "value": "IT",
        "label": "IT"
    },
    {
        "value": "ITCB",
        "label": "ITCB"
    },
    {
        "value": "ITGR",
        "label": "ITGR"
    },
    {
        "value": "ITT",
        "label": "ITT"
    },
    {
        "value": "ITUB",
        "label": "ITUB"
    },
    {
        "value": "ITW",
        "label": "ITW"
    },
    {
        "value": "IVC",
        "label": "IVC"
    },
    {
        "value": "IVH",
        "label": "IVH"
    },
    {
        "value": "IVR",
        "label": "IVR"
    },
    {
        "value": "IVR-A",
        "label": "IVR-A"
    },
    {
        "value": "IVR-B",
        "label": "IVR-B"
    },
    {
        "value": "IVR-C",
        "label": "IVR-C"
    },
    {
        "value": "IVZ",
        "label": "IVZ"
    },
    {
        "value": "IX",
        "label": "IX"
    },
    {
        "value": "J",
        "label": "J"
    },
    {
        "value": "JAX",
        "label": "JAX"
    },
    {
        "value": "JBGS",
        "label": "JBGS"
    },
    {
        "value": "JBK",
        "label": "JBK"
    },
    {
        "value": "JBL",
        "label": "JBL"
    },
    {
        "value": "JBT",
        "label": "JBT"
    },
    {
        "value": "JCA-B",
        "label": "JCA-B"
    },
    {
        "value": "JCAP",
        "label": "JCAP"
    },
    {
        "value": "JCE",
        "label": "JCE"
    },
    {
        "value": "JCI",
        "label": "JCI"
    },
    {
        "value": "JCO",
        "label": "JCO"
    },
    {
        "value": "JDD",
        "label": "JDD"
    },
    {
        "value": "JE",
        "label": "JE"
    },
    {
        "value": "JE-A",
        "label": "JE-A"
    },
    {
        "value": "JEF",
        "label": "JEF"
    },
    {
        "value": "JELD",
        "label": "JELD"
    },
    {
        "value": "JEMD",
        "label": "JEMD"
    },
    {
        "value": "JEQ",
        "label": "JEQ"
    },
    {
        "value": "JFR",
        "label": "JFR"
    },
    {
        "value": "JGH",
        "label": "JGH"
    },
    {
        "value": "JHAA",
        "label": "JHAA"
    },
    {
        "value": "JHB",
        "label": "JHB"
    },
    {
        "value": "JHG",
        "label": "JHG"
    },
    {
        "value": "JHI",
        "label": "JHI"
    },
    {
        "value": "JHS",
        "label": "JHS"
    },
    {
        "value": "JHX",
        "label": "JHX"
    },
    {
        "value": "JHY",
        "label": "JHY"
    },
    {
        "value": "JIH",
        "label": "JIH"
    },
    {
        "value": "JIH.U",
        "label": "JIH.U"
    },
    {
        "value": "JIH.W",
        "label": "JIH.W"
    },
    {
        "value": "JILL",
        "label": "JILL"
    },
    {
        "value": "JKS",
        "label": "JKS"
    },
    {
        "value": "JLL",
        "label": "JLL"
    },
    {
        "value": "JLS",
        "label": "JLS"
    },
    {
        "value": "JMIA",
        "label": "JMIA"
    },
    {
        "value": "JMM",
        "label": "JMM"
    },
    {
        "value": "JMP",
        "label": "JMP"
    },
    {
        "value": "JNJ",
        "label": "JNJ"
    },
    {
        "value": "JNPR",
        "label": "JNPR"
    },
    {
        "value": "JOE",
        "label": "JOE"
    },
    {
        "value": "JOF",
        "label": "JOF"
    },
    {
        "value": "JP",
        "label": "JP"
    },
    {
        "value": "JPC",
        "label": "JPC"
    },
    {
        "value": "JPI",
        "label": "JPI"
    },
    {
        "value": "JPM",
        "label": "JPM"
    },
    {
        "value": "JPM-C",
        "label": "JPM-C"
    },
    {
        "value": "JPM-D",
        "label": "JPM-D"
    },
    {
        "value": "JPM-G",
        "label": "JPM-G"
    },
    {
        "value": "JPM-H",
        "label": "JPM-H"
    },
    {
        "value": "JPM-J",
        "label": "JPM-J"
    },
    {
        "value": "JPS",
        "label": "JPS"
    },
    {
        "value": "JPT",
        "label": "JPT"
    },
    {
        "value": "JQC",
        "label": "JQC"
    },
    {
        "value": "JRI",
        "label": "JRI"
    },
    {
        "value": "JRO",
        "label": "JRO"
    },
    {
        "value": "JRS",
        "label": "JRS"
    },
    {
        "value": "JSD",
        "label": "JSD"
    },
    {
        "value": "JT",
        "label": "JT"
    },
    {
        "value": "JTA",
        "label": "JTA"
    },
    {
        "value": "JTD",
        "label": "JTD"
    },
    {
        "value": "JW.A",
        "label": "JW.A"
    },
    {
        "value": "JW.B",
        "label": "JW.B"
    },
    {
        "value": "JWN",
        "label": "JWN"
    },
    {
        "value": "JWS.U",
        "label": "JWS.U"
    },
    {
        "value": "K",
        "label": "K"
    },
    {
        "value": "KAI",
        "label": "KAI"
    },
    {
        "value": "KAMN",
        "label": "KAMN"
    },
    {
        "value": "KAR",
        "label": "KAR"
    },
    {
        "value": "KB",
        "label": "KB"
    },
    {
        "value": "KBH",
        "label": "KBH"
    },
    {
        "value": "KBR",
        "label": "KBR"
    },
    {
        "value": "KDMN",
        "label": "KDMN"
    },
    {
        "value": "KDP",
        "label": "KDP"
    },
    {
        "value": "KEM",
        "label": "KEM"
    },
    {
        "value": "KEN",
        "label": "KEN"
    },
    {
        "value": "KEP",
        "label": "KEP"
    },
    {
        "value": "KEX",
        "label": "KEX"
    },
    {
        "value": "KEY",
        "label": "KEY"
    },
    {
        "value": "KEY-I",
        "label": "KEY-I"
    },
    {
        "value": "KEY-J",
        "label": "KEY-J"
    },
    {
        "value": "KEY-K",
        "label": "KEY-K"
    },
    {
        "value": "KEYS",
        "label": "KEYS"
    },
    {
        "value": "KF",
        "label": "KF"
    },
    {
        "value": "KFS",
        "label": "KFS"
    },
    {
        "value": "KFY",
        "label": "KFY"
    },
    {
        "value": "KGC",
        "label": "KGC"
    },
    {
        "value": "KIM",
        "label": "KIM"
    },
    {
        "value": "KIM-L",
        "label": "KIM-L"
    },
    {
        "value": "KIM-M",
        "label": "KIM-M"
    },
    {
        "value": "KIO",
        "label": "KIO"
    },
    {
        "value": "KKR",
        "label": "KKR"
    },
    {
        "value": "KKR-A",
        "label": "KKR-A"
    },
    {
        "value": "KKR-B",
        "label": "KKR-B"
    },
    {
        "value": "KL",
        "label": "KL"
    },
    {
        "value": "KMB",
        "label": "KMB"
    },
    {
        "value": "KMF",
        "label": "KMF"
    },
    {
        "value": "KMI",
        "label": "KMI"
    },
    {
        "value": "KMPR",
        "label": "KMPR"
    },
    {
        "value": "KMT",
        "label": "KMT"
    },
    {
        "value": "KMX",
        "label": "KMX"
    },
    {
        "value": "KN",
        "label": "KN"
    },
    {
        "value": "KNL",
        "label": "KNL"
    },
    {
        "value": "KNOP",
        "label": "KNOP"
    },
    {
        "value": "KNX",
        "label": "KNX"
    },
    {
        "value": "KO",
        "label": "KO"
    },
    {
        "value": "KODK",
        "label": "KODK"
    },
    {
        "value": "KOF",
        "label": "KOF"
    },
    {
        "value": "KOP",
        "label": "KOP"
    },
    {
        "value": "KOS",
        "label": "KOS"
    },
    {
        "value": "KR",
        "label": "KR"
    },
    {
        "value": "KRA",
        "label": "KRA"
    },
    {
        "value": "KRC",
        "label": "KRC"
    },
    {
        "value": "KREF",
        "label": "KREF"
    },
    {
        "value": "KRG",
        "label": "KRG"
    },
    {
        "value": "KRO",
        "label": "KRO"
    },
    {
        "value": "KRP",
        "label": "KRP"
    },
    {
        "value": "KSM",
        "label": "KSM"
    },
    {
        "value": "KSS",
        "label": "KSS"
    },
    {
        "value": "KSU",
        "label": "KSU"
    },
    {
        "value": "KSU.P",
        "label": "KSU.P"
    },
    {
        "value": "KT",
        "label": "KT"
    },
    {
        "value": "KTB",
        "label": "KTB"
    },
    {
        "value": "KTF",
        "label": "KTF"
    },
    {
        "value": "KTH",
        "label": "KTH"
    },
    {
        "value": "KTN",
        "label": "KTN"
    },
    {
        "value": "KW",
        "label": "KW"
    },
    {
        "value": "KWR",
        "label": "KWR"
    },
    {
        "value": "KYN",
        "label": "KYN"
    },
    {
        "value": "L",
        "label": "L"
    },
    {
        "value": "LAC",
        "label": "LAC"
    },
    {
        "value": "LAD",
        "label": "LAD"
    },
    {
        "value": "LADR",
        "label": "LADR"
    },
    {
        "value": "LAIX",
        "label": "LAIX"
    },
    {
        "value": "LAZ",
        "label": "LAZ"
    },
    {
        "value": "LB",
        "label": "LB"
    },
    {
        "value": "LBRT",
        "label": "LBRT"
    },
    {
        "value": "LC",
        "label": "LC"
    },
    {
        "value": "LCI",
        "label": "LCI"
    },
    {
        "value": "LCII",
        "label": "LCII"
    },
    {
        "value": "LDL",
        "label": "LDL"
    },
    {
        "value": "LDOS",
        "label": "LDOS"
    },
    {
        "value": "LDP",
        "label": "LDP"
    },
    {
        "value": "LEA",
        "label": "LEA"
    },
    {
        "value": "LEAF",
        "label": "LEAF"
    },
    {
        "value": "LEE",
        "label": "LEE"
    },
    {
        "value": "LEG",
        "label": "LEG"
    },
    {
        "value": "LEJU",
        "label": "LEJU"
    },
    {
        "value": "LEN",
        "label": "LEN"
    },
    {
        "value": "LEN.B",
        "label": "LEN.B"
    },
    {
        "value": "LEO",
        "label": "LEO"
    },
    {
        "value": "LEVI",
        "label": "LEVI"
    },
    {
        "value": "LFC",
        "label": "LFC"
    },
    {
        "value": "LGC",
        "label": "LGC"
    },
    {
        "value": "LGC.U",
        "label": "LGC.U"
    },
    {
        "value": "LGC.W",
        "label": "LGC.W"
    },
    {
        "value": "LGF.A",
        "label": "LGF.A"
    },
    {
        "value": "LGF.B",
        "label": "LGF.B"
    },
    {
        "value": "LGI",
        "label": "LGI"
    },
    {
        "value": "LGV.U",
        "label": "LGV.U"
    },
    {
        "value": "LH",
        "label": "LH"
    },
    {
        "value": "LHC",
        "label": "LHC"
    },
    {
        "value": "LHC.U",
        "label": "LHC.U"
    },
    {
        "value": "LHC.W",
        "label": "LHC.W"
    },
    {
        "value": "LHX",
        "label": "LHX"
    },
    {
        "value": "LII",
        "label": "LII"
    },
    {
        "value": "LIN",
        "label": "LIN"
    },
    {
        "value": "LINX",
        "label": "LINX"
    },
    {
        "value": "LITB",
        "label": "LITB"
    },
    {
        "value": "LL",
        "label": "LL"
    },
    {
        "value": "LLY",
        "label": "LLY"
    },
    {
        "value": "LM",
        "label": "LM"
    },
    {
        "value": "LMHA",
        "label": "LMHA"
    },
    {
        "value": "LMHB",
        "label": "LMHB"
    },
    {
        "value": "LMT",
        "label": "LMT"
    },
    {
        "value": "LN",
        "label": "LN"
    },
    {
        "value": "LNC",
        "label": "LNC"
    },
    {
        "value": "LND",
        "label": "LND"
    },
    {
        "value": "LNN",
        "label": "LNN"
    },
    {
        "value": "LOA.U",
        "label": "LOA.U"
    },
    {
        "value": "LOA.W",
        "label": "LOA.W"
    },
    {
        "value": "LOAK",
        "label": "LOAK"
    },
    {
        "value": "LOMA",
        "label": "LOMA"
    },
    {
        "value": "LOW",
        "label": "LOW"
    },
    {
        "value": "LPG",
        "label": "LPG"
    },
    {
        "value": "LPI",
        "label": "LPI"
    },
    {
        "value": "LPL",
        "label": "LPL"
    },
    {
        "value": "LPX",
        "label": "LPX"
    },
    {
        "value": "LRN",
        "label": "LRN"
    },
    {
        "value": "LSI",
        "label": "LSI"
    },
    {
        "value": "LTC",
        "label": "LTC"
    },
    {
        "value": "LTHM",
        "label": "LTHM"
    },
    {
        "value": "LTM",
        "label": "LTM"
    },
    {
        "value": "LUB",
        "label": "LUB"
    },
    {
        "value": "LUV",
        "label": "LUV"
    },
    {
        "value": "LVS",
        "label": "LVS"
    },
    {
        "value": "LW",
        "label": "LW"
    },
    {
        "value": "LXFR",
        "label": "LXFR"
    },
    {
        "value": "LXP",
        "label": "LXP"
    },
    {
        "value": "LXP-C",
        "label": "LXP-C"
    },
    {
        "value": "LXU",
        "label": "LXU"
    },
    {
        "value": "LYB",
        "label": "LYB"
    },
    {
        "value": "LYG",
        "label": "LYG"
    },
    {
        "value": "LYV",
        "label": "LYV"
    },
    {
        "value": "LZB",
        "label": "LZB"
    },
    {
        "value": "M",
        "label": "M"
    },
    {
        "value": "MA",
        "label": "MA"
    },
    {
        "value": "MAA",
        "label": "MAA"
    },
    {
        "value": "MAA-I",
        "label": "MAA-I"
    },
    {
        "value": "MAC",
        "label": "MAC"
    },
    {
        "value": "MAIN",
        "label": "MAIN"
    },
    {
        "value": "MAN",
        "label": "MAN"
    },
    {
        "value": "MANU",
        "label": "MANU"
    },
    {
        "value": "MAS",
        "label": "MAS"
    },
    {
        "value": "MATX",
        "label": "MATX"
    },
    {
        "value": "MAV",
        "label": "MAV"
    },
    {
        "value": "MAXR",
        "label": "MAXR"
    },
    {
        "value": "MBI",
        "label": "MBI"
    },
    {
        "value": "MBT",
        "label": "MBT"
    },
    {
        "value": "MC",
        "label": "MC"
    },
    {
        "value": "MCA",
        "label": "MCA"
    },
    {
        "value": "MCB",
        "label": "MCB"
    },
    {
        "value": "MCC",
        "label": "MCC"
    },
    {
        "value": "MCD",
        "label": "MCD"
    },
    {
        "value": "MCI",
        "label": "MCI"
    },
    {
        "value": "MCK",
        "label": "MCK"
    },
    {
        "value": "MCN",
        "label": "MCN"
    },
    {
        "value": "MCO",
        "label": "MCO"
    },
    {
        "value": "MCR",
        "label": "MCR"
    },
    {
        "value": "MCS",
        "label": "MCS"
    },
    {
        "value": "MCV",
        "label": "MCV"
    },
    {
        "value": "MCX",
        "label": "MCX"
    },
    {
        "value": "MCY",
        "label": "MCY"
    },
    {
        "value": "MD",
        "label": "MD"
    },
    {
        "value": "MDC",
        "label": "MDC"
    },
    {
        "value": "MDLA",
        "label": "MDLA"
    },
    {
        "value": "MDLQ",
        "label": "MDLQ"
    },
    {
        "value": "MDLX",
        "label": "MDLX"
    },
    {
        "value": "MDLY",
        "label": "MDLY"
    },
    {
        "value": "MDP",
        "label": "MDP"
    },
    {
        "value": "MDT",
        "label": "MDT"
    },
    {
        "value": "MDU",
        "label": "MDU"
    },
    {
        "value": "MEC",
        "label": "MEC"
    },
    {
        "value": "MED",
        "label": "MED"
    },
    {
        "value": "MEI",
        "label": "MEI"
    },
    {
        "value": "MEN",
        "label": "MEN"
    },
    {
        "value": "MER-K",
        "label": "MER-K"
    },
    {
        "value": "MET",
        "label": "MET"
    },
    {
        "value": "MET-A",
        "label": "MET-A"
    },
    {
        "value": "MET-E",
        "label": "MET-E"
    },
    {
        "value": "MET-F",
        "label": "MET-F"
    },
    {
        "value": "MFA",
        "label": "MFA"
    },
    {
        "value": "MFA-B",
        "label": "MFA-B"
    },
    {
        "value": "MFA-C",
        "label": "MFA-C"
    },
    {
        "value": "MFA.U",
        "label": "MFA.U"
    },
    {
        "value": "MFA.W",
        "label": "MFA.W"
    },
    {
        "value": "MFAC",
        "label": "MFAC"
    },
    {
        "value": "MFC",
        "label": "MFC"
    },
    {
        "value": "MFD",
        "label": "MFD"
    },
    {
        "value": "MFG",
        "label": "MFG"
    },
    {
        "value": "MFGP",
        "label": "MFGP"
    },
    {
        "value": "MFL",
        "label": "MFL"
    },
    {
        "value": "MFM",
        "label": "MFM"
    },
    {
        "value": "MFO",
        "label": "MFO"
    },
    {
        "value": "MFT",
        "label": "MFT"
    },
    {
        "value": "MFV",
        "label": "MFV"
    },
    {
        "value": "MG",
        "label": "MG"
    },
    {
        "value": "MGA",
        "label": "MGA"
    },
    {
        "value": "MGF",
        "label": "MGF"
    },
    {
        "value": "MGM",
        "label": "MGM"
    },
    {
        "value": "MGP",
        "label": "MGP"
    },
    {
        "value": "MGR",
        "label": "MGR"
    },
    {
        "value": "MGU",
        "label": "MGU"
    },
    {
        "value": "MGY",
        "label": "MGY"
    },
    {
        "value": "MH-A",
        "label": "MH-A"
    },
    {
        "value": "MH-C",
        "label": "MH-C"
    },
    {
        "value": "MH-D",
        "label": "MH-D"
    },
    {
        "value": "MHD",
        "label": "MHD"
    },
    {
        "value": "MHE",
        "label": "MHE"
    },
    {
        "value": "MHF",
        "label": "MHF"
    },
    {
        "value": "MHI",
        "label": "MHI"
    },
    {
        "value": "MHK",
        "label": "MHK"
    },
    {
        "value": "MHLA",
        "label": "MHLA"
    },
    {
        "value": "MHN",
        "label": "MHN"
    },
    {
        "value": "MHNC",
        "label": "MHNC"
    },
    {
        "value": "MHO",
        "label": "MHO"
    },
    {
        "value": "MIC",
        "label": "MIC"
    },
    {
        "value": "MIE",
        "label": "MIE"
    },
    {
        "value": "MIN",
        "label": "MIN"
    },
    {
        "value": "MIT-A",
        "label": "MIT-A"
    },
    {
        "value": "MIT-B",
        "label": "MIT-B"
    },
    {
        "value": "MIT-C",
        "label": "MIT-C"
    },
    {
        "value": "MITT",
        "label": "MITT"
    },
    {
        "value": "MIXT",
        "label": "MIXT"
    },
    {
        "value": "MIY",
        "label": "MIY"
    },
    {
        "value": "MKC",
        "label": "MKC"
    },
    {
        "value": "MKC.V",
        "label": "MKC.V"
    },
    {
        "value": "MKL",
        "label": "MKL"
    },
    {
        "value": "MLI",
        "label": "MLI"
    },
    {
        "value": "MLM",
        "label": "MLM"
    },
    {
        "value": "MLP",
        "label": "MLP"
    },
    {
        "value": "MLR",
        "label": "MLR"
    },
    {
        "value": "MMC",
        "label": "MMC"
    },
    {
        "value": "MMD",
        "label": "MMD"
    },
    {
        "value": "MMI",
        "label": "MMI"
    },
    {
        "value": "MMM",
        "label": "MMM"
    },
    {
        "value": "MMP",
        "label": "MMP"
    },
    {
        "value": "MMS",
        "label": "MMS"
    },
    {
        "value": "MMT",
        "label": "MMT"
    },
    {
        "value": "MMU",
        "label": "MMU"
    },
    {
        "value": "MN",
        "label": "MN"
    },
    {
        "value": "MNE",
        "label": "MNE"
    },
    {
        "value": "MNK",
        "label": "MNK"
    },
    {
        "value": "MNP",
        "label": "MNP"
    },
    {
        "value": "MNR",
        "label": "MNR"
    },
    {
        "value": "MNR-C",
        "label": "MNR-C"
    },
    {
        "value": "MNRL",
        "label": "MNRL"
    },
    {
        "value": "MO",
        "label": "MO"
    },
    {
        "value": "MOD",
        "label": "MOD"
    },
    {
        "value": "MODN",
        "label": "MODN"
    },
    {
        "value": "MOG.A",
        "label": "MOG.A"
    },
    {
        "value": "MOG.B",
        "label": "MOG.B"
    },
    {
        "value": "MOGU",
        "label": "MOGU"
    },
    {
        "value": "MOH",
        "label": "MOH"
    },
    {
        "value": "MOS",
        "label": "MOS"
    },
    {
        "value": "MOV",
        "label": "MOV"
    },
    {
        "value": "MPA",
        "label": "MPA"
    },
    {
        "value": "MPC",
        "label": "MPC"
    },
    {
        "value": "MPLX",
        "label": "MPLX"
    },
    {
        "value": "MPV",
        "label": "MPV"
    },
    {
        "value": "MPW",
        "label": "MPW"
    },
    {
        "value": "MPX",
        "label": "MPX"
    },
    {
        "value": "MQT",
        "label": "MQT"
    },
    {
        "value": "MQY",
        "label": "MQY"
    },
    {
        "value": "MR",
        "label": "MR"
    },
    {
        "value": "MRC",
        "label": "MRC"
    },
    {
        "value": "MRK",
        "label": "MRK"
    },
    {
        "value": "MRO",
        "label": "MRO"
    },
    {
        "value": "MS",
        "label": "MS"
    },
    {
        "value": "MS-A",
        "label": "MS-A"
    },
    {
        "value": "MS-E",
        "label": "MS-E"
    },
    {
        "value": "MS-F",
        "label": "MS-F"
    },
    {
        "value": "MS-I",
        "label": "MS-I"
    },
    {
        "value": "MS-K",
        "label": "MS-K"
    },
    {
        "value": "MS-L",
        "label": "MS-L"
    },
    {
        "value": "MSA",
        "label": "MSA"
    },
    {
        "value": "MSB",
        "label": "MSB"
    },
    {
        "value": "MSC",
        "label": "MSC"
    },
    {
        "value": "MSCI",
        "label": "MSCI"
    },
    {
        "value": "MSD",
        "label": "MSD"
    },
    {
        "value": "MSGE",
        "label": "MSGE"
    },
    {
        "value": "MSGN",
        "label": "MSGN"
    },
    {
        "value": "MSGS",
        "label": "MSGS"
    },
    {
        "value": "MSI",
        "label": "MSI"
    },
    {
        "value": "MSM",
        "label": "MSM"
    },
    {
        "value": "MT",
        "label": "MT"
    },
    {
        "value": "MTB",
        "label": "MTB"
    },
    {
        "value": "MTCN",
        "label": "MTCN"
    },
    {
        "value": "MTD",
        "label": "MTD"
    },
    {
        "value": "MTDR",
        "label": "MTDR"
    },
    {
        "value": "MTG",
        "label": "MTG"
    },
    {
        "value": "MTH",
        "label": "MTH"
    },
    {
        "value": "MTL",
        "label": "MTL"
    },
    {
        "value": "MTL.P",
        "label": "MTL.P"
    },
    {
        "value": "MTN",
        "label": "MTN"
    },
    {
        "value": "MTOR",
        "label": "MTOR"
    },
    {
        "value": "MTR",
        "label": "MTR"
    },
    {
        "value": "MTRN",
        "label": "MTRN"
    },
    {
        "value": "MTT",
        "label": "MTT"
    },
    {
        "value": "MTW",
        "label": "MTW"
    },
    {
        "value": "MTX",
        "label": "MTX"
    },
    {
        "value": "MTZ",
        "label": "MTZ"
    },
    {
        "value": "MUA",
        "label": "MUA"
    },
    {
        "value": "MUC",
        "label": "MUC"
    },
    {
        "value": "MUE",
        "label": "MUE"
    },
    {
        "value": "MUFG",
        "label": "MUFG"
    },
    {
        "value": "MUH",
        "label": "MUH"
    },
    {
        "value": "MUI",
        "label": "MUI"
    },
    {
        "value": "MUJ",
        "label": "MUJ"
    },
    {
        "value": "MUR",
        "label": "MUR"
    },
    {
        "value": "MUS",
        "label": "MUS"
    },
    {
        "value": "MUSA",
        "label": "MUSA"
    },
    {
        "value": "MUX",
        "label": "MUX"
    },
    {
        "value": "MVC",
        "label": "MVC"
    },
    {
        "value": "MVCD",
        "label": "MVCD"
    },
    {
        "value": "MVF",
        "label": "MVF"
    },
    {
        "value": "MVO",
        "label": "MVO"
    },
    {
        "value": "MVT",
        "label": "MVT"
    },
    {
        "value": "MWA",
        "label": "MWA"
    },
    {
        "value": "MX",
        "label": "MX"
    },
    {
        "value": "MXE",
        "label": "MXE"
    },
    {
        "value": "MXF",
        "label": "MXF"
    },
    {
        "value": "MXL",
        "label": "MXL"
    },
    {
        "value": "MYC",
        "label": "MYC"
    },
    {
        "value": "MYD",
        "label": "MYD"
    },
    {
        "value": "MYE",
        "label": "MYE"
    },
    {
        "value": "MYF",
        "label": "MYF"
    },
    {
        "value": "MYI",
        "label": "MYI"
    },
    {
        "value": "MYJ",
        "label": "MYJ"
    },
    {
        "value": "MYN",
        "label": "MYN"
    },
    {
        "value": "MYOV",
        "label": "MYOV"
    },
    {
        "value": "MZA",
        "label": "MZA"
    },
    {
        "value": "NAC",
        "label": "NAC"
    },
    {
        "value": "NAD",
        "label": "NAD"
    },
    {
        "value": "NAN",
        "label": "NAN"
    },
    {
        "value": "NAT",
        "label": "NAT"
    },
    {
        "value": "NAV",
        "label": "NAV"
    },
    {
        "value": "NAV-D",
        "label": "NAV-D"
    },
    {
        "value": "NAZ",
        "label": "NAZ"
    },
    {
        "value": "NBB",
        "label": "NBB"
    },
    {
        "value": "NBHC",
        "label": "NBHC"
    },
    {
        "value": "NBR",
        "label": "NBR"
    },
    {
        "value": "NBR-A",
        "label": "NBR-A"
    },
    {
        "value": "NC",
        "label": "NC"
    },
    {
        "value": "NCA",
        "label": "NCA"
    },
    {
        "value": "NCB",
        "label": "NCB"
    },
    {
        "value": "NCLH",
        "label": "NCLH"
    },
    {
        "value": "NCR",
        "label": "NCR"
    },
    {
        "value": "NCV",
        "label": "NCV"
    },
    {
        "value": "NCV-A",
        "label": "NCV-A"
    },
    {
        "value": "NCZ",
        "label": "NCZ"
    },
    {
        "value": "NCZ-A",
        "label": "NCZ-A"
    },
    {
        "value": "NDP",
        "label": "NDP"
    },
    {
        "value": "NE",
        "label": "NE"
    },
    {
        "value": "NEA",
        "label": "NEA"
    },
    {
        "value": "NEE",
        "label": "NEE"
    },
    {
        "value": "NEE-I",
        "label": "NEE-I"
    },
    {
        "value": "NEE-J",
        "label": "NEE-J"
    },
    {
        "value": "NEE-K",
        "label": "NEE-K"
    },
    {
        "value": "NEE-N",
        "label": "NEE-N"
    },
    {
        "value": "NEE-O",
        "label": "NEE-O"
    },
    {
        "value": "NEE-P",
        "label": "NEE-P"
    },
    {
        "value": "NEM",
        "label": "NEM"
    },
    {
        "value": "NEP",
        "label": "NEP"
    },
    {
        "value": "NET",
        "label": "NET"
    },
    {
        "value": "NEU",
        "label": "NEU"
    },
    {
        "value": "NEV",
        "label": "NEV"
    },
    {
        "value": "NEW",
        "label": "NEW"
    },
    {
        "value": "NEWR",
        "label": "NEWR"
    },
    {
        "value": "NEX",
        "label": "NEX"
    },
    {
        "value": "NEXA",
        "label": "NEXA"
    },
    {
        "value": "NFG",
        "label": "NFG"
    },
    {
        "value": "NFH",
        "label": "NFH"
    },
    {
        "value": "NFH.W",
        "label": "NFH.W"
    },
    {
        "value": "NFJ",
        "label": "NFJ"
    },
    {
        "value": "NGG",
        "label": "NGG"
    },
    {
        "value": "NGL",
        "label": "NGL"
    },
    {
        "value": "NGL-A",
        "label": "NGL-A"
    },
    {
        "value": "NGL-B",
        "label": "NGL-B"
    },
    {
        "value": "NGL-C",
        "label": "NGL-C"
    },
    {
        "value": "NGS",
        "label": "NGS"
    },
    {
        "value": "NGVC",
        "label": "NGVC"
    },
    {
        "value": "NGVT",
        "label": "NGVT"
    },
    {
        "value": "NHA",
        "label": "NHA"
    },
    {
        "value": "NHF",
        "label": "NHF"
    },
    {
        "value": "NHI",
        "label": "NHI"
    },
    {
        "value": "NI",
        "label": "NI"
    },
    {
        "value": "NI-B",
        "label": "NI-B"
    },
    {
        "value": "NID",
        "label": "NID"
    },
    {
        "value": "NIE",
        "label": "NIE"
    },
    {
        "value": "NIM",
        "label": "NIM"
    },
    {
        "value": "NINE",
        "label": "NINE"
    },
    {
        "value": "NIO",
        "label": "NIO"
    },
    {
        "value": "NIQ",
        "label": "NIQ"
    },
    {
        "value": "NJR",
        "label": "NJR"
    },
    {
        "value": "NJV",
        "label": "NJV"
    },
    {
        "value": "NKE",
        "label": "NKE"
    },
    {
        "value": "NKG",
        "label": "NKG"
    },
    {
        "value": "NKX",
        "label": "NKX"
    },
    {
        "value": "NL",
        "label": "NL"
    },
    {
        "value": "NLS",
        "label": "NLS"
    },
    {
        "value": "NLSN",
        "label": "NLSN"
    },
    {
        "value": "NLY",
        "label": "NLY"
    },
    {
        "value": "NLY-D",
        "label": "NLY-D"
    },
    {
        "value": "NLY-F",
        "label": "NLY-F"
    },
    {
        "value": "NLY-G",
        "label": "NLY-G"
    },
    {
        "value": "NLY-I",
        "label": "NLY-I"
    },
    {
        "value": "NM",
        "label": "NM"
    },
    {
        "value": "NM-G",
        "label": "NM-G"
    },
    {
        "value": "NM-H",
        "label": "NM-H"
    },
    {
        "value": "NMCO",
        "label": "NMCO"
    },
    {
        "value": "NMFC",
        "label": "NMFC"
    },
    {
        "value": "NMFX",
        "label": "NMFX"
    },
    {
        "value": "NMI",
        "label": "NMI"
    },
    {
        "value": "NMK-B",
        "label": "NMK-B"
    },
    {
        "value": "NMK-C",
        "label": "NMK-C"
    },
    {
        "value": "NMM",
        "label": "NMM"
    },
    {
        "value": "NMR",
        "label": "NMR"
    },
    {
        "value": "NMS",
        "label": "NMS"
    },
    {
        "value": "NMT",
        "label": "NMT"
    },
    {
        "value": "NMY",
        "label": "NMY"
    },
    {
        "value": "NMZ",
        "label": "NMZ"
    },
    {
        "value": "NNA",
        "label": "NNA"
    },
    {
        "value": "NNI",
        "label": "NNI"
    },
    {
        "value": "NNN",
        "label": "NNN"
    },
    {
        "value": "NNN-F",
        "label": "NNN-F"
    },
    {
        "value": "NNY",
        "label": "NNY"
    },
    {
        "value": "NOA",
        "label": "NOA"
    },
    {
        "value": "NOAH",
        "label": "NOAH"
    },
    {
        "value": "NOC",
        "label": "NOC"
    },
    {
        "value": "NOK",
        "label": "NOK"
    },
    {
        "value": "NOM",
        "label": "NOM"
    },
    {
        "value": "NOMD",
        "label": "NOMD"
    },
    {
        "value": "NOV",
        "label": "NOV"
    },
    {
        "value": "NOVA",
        "label": "NOVA"
    },
    {
        "value": "NOW",
        "label": "NOW"
    },
    {
        "value": "NP",
        "label": "NP"
    },
    {
        "value": "NPK",
        "label": "NPK"
    },
    {
        "value": "NPN",
        "label": "NPN"
    },
    {
        "value": "NPO",
        "label": "NPO"
    },
    {
        "value": "NPTN",
        "label": "NPTN"
    },
    {
        "value": "NPV",
        "label": "NPV"
    },
    {
        "value": "NQP",
        "label": "NQP"
    },
    {
        "value": "NR",
        "label": "NR"
    },
    {
        "value": "NREF",
        "label": "NREF"
    },
    {
        "value": "NRG",
        "label": "NRG"
    },
    {
        "value": "NRGX",
        "label": "NRGX"
    },
    {
        "value": "NRK",
        "label": "NRK"
    },
    {
        "value": "NRP",
        "label": "NRP"
    },
    {
        "value": "NRT",
        "label": "NRT"
    },
    {
        "value": "NRUC",
        "label": "NRUC"
    },
    {
        "value": "NRZ",
        "label": "NRZ"
    },
    {
        "value": "NRZ-A",
        "label": "NRZ-A"
    },
    {
        "value": "NRZ-B",
        "label": "NRZ-B"
    },
    {
        "value": "NRZ-C",
        "label": "NRZ-C"
    },
    {
        "value": "NS",
        "label": "NS"
    },
    {
        "value": "NS-A",
        "label": "NS-A"
    },
    {
        "value": "NS-B",
        "label": "NS-B"
    },
    {
        "value": "NS-C",
        "label": "NS-C"
    },
    {
        "value": "NSA",
        "label": "NSA"
    },
    {
        "value": "NSA-A",
        "label": "NSA-A"
    },
    {
        "value": "NSC",
        "label": "NSC"
    },
    {
        "value": "NSC.W",
        "label": "NSC.W"
    },
    {
        "value": "NSCO",
        "label": "NSCO"
    },
    {
        "value": "NSL",
        "label": "NSL"
    },
    {
        "value": "NSP",
        "label": "NSP"
    },
    {
        "value": "NSS",
        "label": "NSS"
    },
    {
        "value": "NTB",
        "label": "NTB"
    },
    {
        "value": "NTCO",
        "label": "NTCO"
    },
    {
        "value": "NTEST.I",
        "label": "NTEST.I"
    },
    {
        "value": "NTEST.J",
        "label": "NTEST.J"
    },
    {
        "value": "NTEST.K",
        "label": "NTEST.K"
    },
    {
        "value": "NTG",
        "label": "NTG"
    },
    {
        "value": "NTP",
        "label": "NTP"
    },
    {
        "value": "NTR",
        "label": "NTR"
    },
    {
        "value": "NTZ",
        "label": "NTZ"
    },
    {
        "value": "NUE",
        "label": "NUE"
    },
    {
        "value": "NUM",
        "label": "NUM"
    },
    {
        "value": "NUO",
        "label": "NUO"
    },
    {
        "value": "NUS",
        "label": "NUS"
    },
    {
        "value": "NUV",
        "label": "NUV"
    },
    {
        "value": "NUW",
        "label": "NUW"
    },
    {
        "value": "NVG",
        "label": "NVG"
    },
    {
        "value": "NVGS",
        "label": "NVGS"
    },
    {
        "value": "NVO",
        "label": "NVO"
    },
    {
        "value": "NVR",
        "label": "NVR"
    },
    {
        "value": "NVRO",
        "label": "NVRO"
    },
    {
        "value": "NVS",
        "label": "NVS"
    },
    {
        "value": "NVST",
        "label": "NVST"
    },
    {
        "value": "NVT",
        "label": "NVT"
    },
    {
        "value": "NVTA",
        "label": "NVTA"
    },
    {
        "value": "NWE",
        "label": "NWE"
    },
    {
        "value": "NWHM",
        "label": "NWHM"
    },
    {
        "value": "NWN",
        "label": "NWN"
    },
    {
        "value": "NX",
        "label": "NX"
    },
    {
        "value": "NXC",
        "label": "NXC"
    },
    {
        "value": "NXJ",
        "label": "NXJ"
    },
    {
        "value": "NXN",
        "label": "NXN"
    },
    {
        "value": "NXP",
        "label": "NXP"
    },
    {
        "value": "NXQ",
        "label": "NXQ"
    },
    {
        "value": "NXR",
        "label": "NXR"
    },
    {
        "value": "NXRT",
        "label": "NXRT"
    },
    {
        "value": "NYC-A",
        "label": "NYC-A"
    },
    {
        "value": "NYC-U",
        "label": "NYC-U"
    },
    {
        "value": "NYCB",
        "label": "NYCB"
    },
    {
        "value": "NYT",
        "label": "NYT"
    },
    {
        "value": "NYV",
        "label": "NYV"
    },
    {
        "value": "NZF",
        "label": "NZF"
    },
    {
        "value": "O",
        "label": "O"
    },
    {
        "value": "OAC",
        "label": "OAC"
    },
    {
        "value": "OAC.U",
        "label": "OAC.U"
    },
    {
        "value": "OAC.W",
        "label": "OAC.W"
    },
    {
        "value": "OAK-A",
        "label": "OAK-A"
    },
    {
        "value": "OAK-B",
        "label": "OAK-B"
    },
    {
        "value": "OC",
        "label": "OC"
    },
    {
        "value": "OCFT",
        "label": "OCFT"
    },
    {
        "value": "OCN",
        "label": "OCN"
    },
    {
        "value": "ODC",
        "label": "ODC"
    },
    {
        "value": "OEC",
        "label": "OEC"
    },
    {
        "value": "OFC",
        "label": "OFC"
    },
    {
        "value": "OFG",
        "label": "OFG"
    },
    {
        "value": "OFG-A",
        "label": "OFG-A"
    },
    {
        "value": "OFG-B",
        "label": "OFG-B"
    },
    {
        "value": "OFG-D",
        "label": "OFG-D"
    },
    {
        "value": "OGE",
        "label": "OGE"
    },
    {
        "value": "OGS",
        "label": "OGS"
    },
    {
        "value": "OHI",
        "label": "OHI"
    },
    {
        "value": "OI",
        "label": "OI"
    },
    {
        "value": "OIA",
        "label": "OIA"
    },
    {
        "value": "OIB.C",
        "label": "OIB.C"
    },
    {
        "value": "OII",
        "label": "OII"
    },
    {
        "value": "OIS",
        "label": "OIS"
    },
    {
        "value": "OKE",
        "label": "OKE"
    },
    {
        "value": "OLN",
        "label": "OLN"
    },
    {
        "value": "OLP",
        "label": "OLP"
    },
    {
        "value": "OMC",
        "label": "OMC"
    },
    {
        "value": "OMF",
        "label": "OMF"
    },
    {
        "value": "OMI",
        "label": "OMI"
    },
    {
        "value": "ONDK",
        "label": "ONDK"
    },
    {
        "value": "ONE",
        "label": "ONE"
    },
    {
        "value": "ONTO",
        "label": "ONTO"
    },
    {
        "value": "OOMA",
        "label": "OOMA"
    },
    {
        "value": "OPP",
        "label": "OPP"
    },
    {
        "value": "OPY",
        "label": "OPY"
    },
    {
        "value": "OR",
        "label": "OR"
    },
    {
        "value": "ORA",
        "label": "ORA"
    },
    {
        "value": "ORAN",
        "label": "ORAN"
    },
    {
        "value": "ORC",
        "label": "ORC"
    },
    {
        "value": "ORCC",
        "label": "ORCC"
    },
    {
        "value": "ORCL",
        "label": "ORCL"
    },
    {
        "value": "ORI",
        "label": "ORI"
    },
    {
        "value": "ORN",
        "label": "ORN"
    },
    {
        "value": "OSB",
        "label": "OSB"
    },
    {
        "value": "OSG",
        "label": "OSG"
    },
    {
        "value": "OSK",
        "label": "OSK"
    },
    {
        "value": "OTIS",
        "label": "OTIS"
    },
    {
        "value": "OUT",
        "label": "OUT"
    },
    {
        "value": "OVV",
        "label": "OVV"
    },
    {
        "value": "OXM",
        "label": "OXM"
    },
    {
        "value": "OXY",
        "label": "OXY"
    },
    {
        "value": "PAA",
        "label": "PAA"
    },
    {
        "value": "PAC",
        "label": "PAC"
    },
    {
        "value": "PAC.W",
        "label": "PAC.W"
    },
    {
        "value": "PACD",
        "label": "PACD"
    },
    {
        "value": "PACK",
        "label": "PACK"
    },
    {
        "value": "PAG",
        "label": "PAG"
    },
    {
        "value": "PAGP",
        "label": "PAGP"
    },
    {
        "value": "PAGS",
        "label": "PAGS"
    },
    {
        "value": "PAI",
        "label": "PAI"
    },
    {
        "value": "PAM",
        "label": "PAM"
    },
    {
        "value": "PANW",
        "label": "PANW"
    },
    {
        "value": "PAR",
        "label": "PAR"
    },
    {
        "value": "PARR",
        "label": "PARR"
    },
    {
        "value": "PAYC",
        "label": "PAYC"
    },
    {
        "value": "PB",
        "label": "PB"
    },
    {
        "value": "PBA",
        "label": "PBA"
    },
    {
        "value": "PBB",
        "label": "PBB"
    },
    {
        "value": "PBC",
        "label": "PBC"
    },
    {
        "value": "PBF",
        "label": "PBF"
    },
    {
        "value": "PBFX",
        "label": "PBFX"
    },
    {
        "value": "PBH",
        "label": "PBH"
    },
    {
        "value": "PBI",
        "label": "PBI"
    },
    {
        "value": "PBI-B",
        "label": "PBI-B"
    },
    {
        "value": "PBR",
        "label": "PBR"
    },
    {
        "value": "PBR.A",
        "label": "PBR.A"
    },
    {
        "value": "PBT",
        "label": "PBT"
    },
    {
        "value": "PBY",
        "label": "PBY"
    },
    {
        "value": "PCF",
        "label": "PCF"
    },
    {
        "value": "PCG",
        "label": "PCG"
    },
    {
        "value": "PCI",
        "label": "PCI"
    },
    {
        "value": "PCK",
        "label": "PCK"
    },
    {
        "value": "PCM",
        "label": "PCM"
    },
    {
        "value": "PCN",
        "label": "PCN"
    },
    {
        "value": "PCP.U",
        "label": "PCP.U"
    },
    {
        "value": "PCPL",
        "label": "PCPL"
    },
    {
        "value": "PCQ",
        "label": "PCQ"
    },
    {
        "value": "PD",
        "label": "PD"
    },
    {
        "value": "PDI",
        "label": "PDI"
    },
    {
        "value": "PDM",
        "label": "PDM"
    },
    {
        "value": "PDS",
        "label": "PDS"
    },
    {
        "value": "PDT",
        "label": "PDT"
    },
    {
        "value": "PE",
        "label": "PE"
    },
    {
        "value": "PEAK",
        "label": "PEAK"
    },
    {
        "value": "PEB",
        "label": "PEB"
    },
    {
        "value": "PEB-C",
        "label": "PEB-C"
    },
    {
        "value": "PEB-D",
        "label": "PEB-D"
    },
    {
        "value": "PEB-E",
        "label": "PEB-E"
    },
    {
        "value": "PEB-F",
        "label": "PEB-F"
    },
    {
        "value": "PEG",
        "label": "PEG"
    },
    {
        "value": "PEI",
        "label": "PEI"
    },
    {
        "value": "PEI-B",
        "label": "PEI-B"
    },
    {
        "value": "PEI-C",
        "label": "PEI-C"
    },
    {
        "value": "PEI-D",
        "label": "PEI-D"
    },
    {
        "value": "PEN",
        "label": "PEN"
    },
    {
        "value": "PEO",
        "label": "PEO"
    },
    {
        "value": "PER",
        "label": "PER"
    },
    {
        "value": "PFD",
        "label": "PFD"
    },
    {
        "value": "PFE",
        "label": "PFE"
    },
    {
        "value": "PFGC",
        "label": "PFGC"
    },
    {
        "value": "PFL",
        "label": "PFL"
    },
    {
        "value": "PFN",
        "label": "PFN"
    },
    {
        "value": "PFO",
        "label": "PFO"
    },
    {
        "value": "PFS",
        "label": "PFS"
    },
    {
        "value": "PFSI",
        "label": "PFSI"
    },
    {
        "value": "PG",
        "label": "PG"
    },
    {
        "value": "PGP",
        "label": "PGP"
    },
    {
        "value": "PGR",
        "label": "PGR"
    },
    {
        "value": "PGRE",
        "label": "PGRE"
    },
    {
        "value": "PGTI",
        "label": "PGTI"
    },
    {
        "value": "PGZ",
        "label": "PGZ"
    },
    {
        "value": "PH",
        "label": "PH"
    },
    {
        "value": "PHD",
        "label": "PHD"
    },
    {
        "value": "PHG",
        "label": "PHG"
    },
    {
        "value": "PHI",
        "label": "PHI"
    },
    {
        "value": "PHK",
        "label": "PHK"
    },
    {
        "value": "PHM",
        "label": "PHM"
    },
    {
        "value": "PHR",
        "label": "PHR"
    },
    {
        "value": "PHT",
        "label": "PHT"
    },
    {
        "value": "PHX",
        "label": "PHX"
    },
    {
        "value": "PIC",
        "label": "PIC"
    },
    {
        "value": "PIC.U",
        "label": "PIC.U"
    },
    {
        "value": "PIC.W",
        "label": "PIC.W"
    },
    {
        "value": "PII",
        "label": "PII"
    },
    {
        "value": "PIM",
        "label": "PIM"
    },
    {
        "value": "PINE",
        "label": "PINE"
    },
    {
        "value": "PING",
        "label": "PING"
    },
    {
        "value": "PINS",
        "label": "PINS"
    },
    {
        "value": "PIPR",
        "label": "PIPR"
    },
    {
        "value": "PJH",
        "label": "PJH"
    },
    {
        "value": "PJT",
        "label": "PJT"
    },
    {
        "value": "PK",
        "label": "PK"
    },
    {
        "value": "PKE",
        "label": "PKE"
    },
    {
        "value": "PKG",
        "label": "PKG"
    },
    {
        "value": "PKI",
        "label": "PKI"
    },
    {
        "value": "PKO",
        "label": "PKO"
    },
    {
        "value": "PKX",
        "label": "PKX"
    },
    {
        "value": "PLAN",
        "label": "PLAN"
    },
    {
        "value": "PLD",
        "label": "PLD"
    },
    {
        "value": "PLNT",
        "label": "PLNT"
    },
    {
        "value": "PLOW",
        "label": "PLOW"
    },
    {
        "value": "PLT",
        "label": "PLT"
    },
    {
        "value": "PLYM",
        "label": "PLYM"
    },
    {
        "value": "PM",
        "label": "PM"
    },
    {
        "value": "PMF",
        "label": "PMF"
    },
    {
        "value": "PML",
        "label": "PML"
    },
    {
        "value": "PMM",
        "label": "PMM"
    },
    {
        "value": "PMO",
        "label": "PMO"
    },
    {
        "value": "PMT",
        "label": "PMT"
    },
    {
        "value": "PMT-A",
        "label": "PMT-A"
    },
    {
        "value": "PMT-B",
        "label": "PMT-B"
    },
    {
        "value": "PMX",
        "label": "PMX"
    },
    {
        "value": "PNC",
        "label": "PNC"
    },
    {
        "value": "PNC-P",
        "label": "PNC-P"
    },
    {
        "value": "PNC-Q",
        "label": "PNC-Q"
    },
    {
        "value": "PNF",
        "label": "PNF"
    },
    {
        "value": "PNI",
        "label": "PNI"
    },
    {
        "value": "PNM",
        "label": "PNM"
    },
    {
        "value": "PNR",
        "label": "PNR"
    },
    {
        "value": "PNW",
        "label": "PNW"
    },
    {
        "value": "POL",
        "label": "POL"
    },
    {
        "value": "POR",
        "label": "POR"
    },
    {
        "value": "POST",
        "label": "POST"
    },
    {
        "value": "PPG",
        "label": "PPG"
    },
    {
        "value": "PPL",
        "label": "PPL"
    },
    {
        "value": "PPR",
        "label": "PPR"
    },
    {
        "value": "PPT",
        "label": "PPT"
    },
    {
        "value": "PPX",
        "label": "PPX"
    },
    {
        "value": "PQG",
        "label": "PQG"
    },
    {
        "value": "PRA",
        "label": "PRA"
    },
    {
        "value": "PRE-F",
        "label": "PRE-F"
    },
    {
        "value": "PRE-G",
        "label": "PRE-G"
    },
    {
        "value": "PRE-H",
        "label": "PRE-H"
    },
    {
        "value": "PRE-I",
        "label": "PRE-I"
    },
    {
        "value": "PRGO",
        "label": "PRGO"
    },
    {
        "value": "PRH",
        "label": "PRH"
    },
    {
        "value": "PRI",
        "label": "PRI"
    },
    {
        "value": "PRI-A",
        "label": "PRI-A"
    },
    {
        "value": "PRI-B",
        "label": "PRI-B"
    },
    {
        "value": "PRI-C",
        "label": "PRI-C"
    },
    {
        "value": "PRI-D",
        "label": "PRI-D"
    },
    {
        "value": "PRI-E",
        "label": "PRI-E"
    },
    {
        "value": "PRI-F",
        "label": "PRI-F"
    },
    {
        "value": "PRLB",
        "label": "PRLB"
    },
    {
        "value": "PRMW",
        "label": "PRMW"
    },
    {
        "value": "PRO",
        "label": "PRO"
    },
    {
        "value": "PROS",
        "label": "PROS"
    },
    {
        "value": "PRS",
        "label": "PRS"
    },
    {
        "value": "PRSP",
        "label": "PRSP"
    },
    {
        "value": "PRT",
        "label": "PRT"
    },
    {
        "value": "PRTY",
        "label": "PRTY"
    },
    {
        "value": "PRU",
        "label": "PRU"
    },
    {
        "value": "PSA",
        "label": "PSA"
    },
    {
        "value": "PSA-B",
        "label": "PSA-B"
    },
    {
        "value": "PSA-C",
        "label": "PSA-C"
    },
    {
        "value": "PSA-D",
        "label": "PSA-D"
    },
    {
        "value": "PSA-E",
        "label": "PSA-E"
    },
    {
        "value": "PSA-F",
        "label": "PSA-F"
    },
    {
        "value": "PSA-G",
        "label": "PSA-G"
    },
    {
        "value": "PSA-H",
        "label": "PSA-H"
    },
    {
        "value": "PSA-I",
        "label": "PSA-I"
    },
    {
        "value": "PSA-J",
        "label": "PSA-J"
    },
    {
        "value": "PSA-K",
        "label": "PSA-K"
    },
    {
        "value": "PSA-L",
        "label": "PSA-L"
    },
    {
        "value": "PSA-V",
        "label": "PSA-V"
    },
    {
        "value": "PSA-W",
        "label": "PSA-W"
    },
    {
        "value": "PSA-X",
        "label": "PSA-X"
    },
    {
        "value": "PSB",
        "label": "PSB"
    },
    {
        "value": "PSB-W",
        "label": "PSB-W"
    },
    {
        "value": "PSB-X",
        "label": "PSB-X"
    },
    {
        "value": "PSB-Y",
        "label": "PSB-Y"
    },
    {
        "value": "PSB-Z",
        "label": "PSB-Z"
    },
    {
        "value": "PSF",
        "label": "PSF"
    },
    {
        "value": "PSN",
        "label": "PSN"
    },
    {
        "value": "PSO",
        "label": "PSO"
    },
    {
        "value": "PSTG",
        "label": "PSTG"
    },
    {
        "value": "PSTL",
        "label": "PSTL"
    },
    {
        "value": "PSV",
        "label": "PSV"
    },
    {
        "value": "PSX",
        "label": "PSX"
    },
    {
        "value": "PSXP",
        "label": "PSXP"
    },
    {
        "value": "PTR",
        "label": "PTR"
    },
    {
        "value": "PTY",
        "label": "PTY"
    },
    {
        "value": "PUK",
        "label": "PUK"
    },
    {
        "value": "PUK-A",
        "label": "PUK-A"
    },
    {
        "value": "PUK.P",
        "label": "PUK.P"
    },
    {
        "value": "PUMP",
        "label": "PUMP"
    },
    {
        "value": "PVG",
        "label": "PVG"
    },
    {
        "value": "PVH",
        "label": "PVH"
    },
    {
        "value": "PVL",
        "label": "PVL"
    },
    {
        "value": "PWR",
        "label": "PWR"
    },
    {
        "value": "PXD",
        "label": "PXD"
    },
    {
        "value": "PYN",
        "label": "PYN"
    },
    {
        "value": "PYS",
        "label": "PYS"
    },
    {
        "value": "PYT",
        "label": "PYT"
    },
    {
        "value": "PYX",
        "label": "PYX"
    },
    {
        "value": "PZC",
        "label": "PZC"
    },
    {
        "value": "PZN",
        "label": "PZN"
    },
    {
        "value": "QD",
        "label": "QD"
    },
    {
        "value": "QEP",
        "label": "QEP"
    },
    {
        "value": "QES",
        "label": "QES"
    },
    {
        "value": "QGEN",
        "label": "QGEN"
    },
    {
        "value": "QSR",
        "label": "QSR"
    },
    {
        "value": "QTS",
        "label": "QTS"
    },
    {
        "value": "QTS-A",
        "label": "QTS-A"
    },
    {
        "value": "QTS-B",
        "label": "QTS-B"
    },
    {
        "value": "QTWO",
        "label": "QTWO"
    },
    {
        "value": "QUAD",
        "label": "QUAD"
    },
    {
        "value": "QUOT",
        "label": "QUOT"
    },
    {
        "value": "QVCC",
        "label": "QVCC"
    },
    {
        "value": "QVCD",
        "label": "QVCD"
    },
    {
        "value": "R",
        "label": "R"
    },
    {
        "value": "RA",
        "label": "RA"
    },
    {
        "value": "RACE",
        "label": "RACE"
    },
    {
        "value": "RAD",
        "label": "RAD"
    },
    {
        "value": "RAMP",
        "label": "RAMP"
    },
    {
        "value": "RBA",
        "label": "RBA"
    },
    {
        "value": "RBC",
        "label": "RBC"
    },
    {
        "value": "RBS",
        "label": "RBS"
    },
    {
        "value": "RC",
        "label": "RC"
    },
    {
        "value": "RCA",
        "label": "RCA"
    },
    {
        "value": "RCB",
        "label": "RCB"
    },
    {
        "value": "RCI",
        "label": "RCI"
    },
    {
        "value": "RCL",
        "label": "RCL"
    },
    {
        "value": "RCP",
        "label": "RCP"
    },
    {
        "value": "RCS",
        "label": "RCS"
    },
    {
        "value": "RCUS",
        "label": "RCUS"
    },
    {
        "value": "RDN",
        "label": "RDN"
    },
    {
        "value": "RDS.A",
        "label": "RDS.A"
    },
    {
        "value": "RDS.B",
        "label": "RDS.B"
    },
    {
        "value": "RDY",
        "label": "RDY"
    },
    {
        "value": "RE",
        "label": "RE"
    },
    {
        "value": "RELX",
        "label": "RELX"
    },
    {
        "value": "RENN",
        "label": "RENN"
    },
    {
        "value": "RES",
        "label": "RES"
    },
    {
        "value": "RESI",
        "label": "RESI"
    },
    {
        "value": "REV",
        "label": "REV"
    },
    {
        "value": "REVG",
        "label": "REVG"
    },
    {
        "value": "REX",
        "label": "REX"
    },
    {
        "value": "REX-A",
        "label": "REX-A"
    },
    {
        "value": "REX-B",
        "label": "REX-B"
    },
    {
        "value": "REX-C",
        "label": "REX-C"
    },
    {
        "value": "REXR",
        "label": "REXR"
    },
    {
        "value": "REZI",
        "label": "REZI"
    },
    {
        "value": "RF",
        "label": "RF"
    },
    {
        "value": "RF-A",
        "label": "RF-A"
    },
    {
        "value": "RF-B",
        "label": "RF-B"
    },
    {
        "value": "RF-C",
        "label": "RF-C"
    },
    {
        "value": "RFI",
        "label": "RFI"
    },
    {
        "value": "RFL",
        "label": "RFL"
    },
    {
        "value": "RFM",
        "label": "RFM"
    },
    {
        "value": "RFP",
        "label": "RFP"
    },
    {
        "value": "RGA",
        "label": "RGA"
    },
    {
        "value": "RGR",
        "label": "RGR"
    },
    {
        "value": "RGS",
        "label": "RGS"
    },
    {
        "value": "RGT",
        "label": "RGT"
    },
    {
        "value": "RH",
        "label": "RH"
    },
    {
        "value": "RHI",
        "label": "RHI"
    },
    {
        "value": "RHP",
        "label": "RHP"
    },
    {
        "value": "RIG",
        "label": "RIG"
    },
    {
        "value": "RIO",
        "label": "RIO"
    },
    {
        "value": "RIV",
        "label": "RIV"
    },
    {
        "value": "RJF",
        "label": "RJF"
    },
    {
        "value": "RL",
        "label": "RL"
    },
    {
        "value": "RLGY",
        "label": "RLGY"
    },
    {
        "value": "RLH",
        "label": "RLH"
    },
    {
        "value": "RLI",
        "label": "RLI"
    },
    {
        "value": "RLJ",
        "label": "RLJ"
    },
    {
        "value": "RLJ-A",
        "label": "RLJ-A"
    },
    {
        "value": "RM",
        "label": "RM"
    },
    {
        "value": "RMAX",
        "label": "RMAX"
    },
    {
        "value": "RMD",
        "label": "RMD"
    },
    {
        "value": "RMED",
        "label": "RMED"
    },
    {
        "value": "RMG",
        "label": "RMG"
    },
    {
        "value": "RMG.U",
        "label": "RMG.U"
    },
    {
        "value": "RMG.W",
        "label": "RMG.W"
    },
    {
        "value": "RMI",
        "label": "RMI"
    },
    {
        "value": "RMM",
        "label": "RMM"
    },
    {
        "value": "RMP.P",
        "label": "RMP.P"
    },
    {
        "value": "RMT",
        "label": "RMT"
    },
    {
        "value": "RNG",
        "label": "RNG"
    },
    {
        "value": "RNGR",
        "label": "RNGR"
    },
    {
        "value": "RNP",
        "label": "RNP"
    },
    {
        "value": "RNR",
        "label": "RNR"
    },
    {
        "value": "RNR-E",
        "label": "RNR-E"
    },
    {
        "value": "RNR-F",
        "label": "RNR-F"
    },
    {
        "value": "ROG",
        "label": "ROG"
    },
    {
        "value": "ROK",
        "label": "ROK"
    },
    {
        "value": "ROL",
        "label": "ROL"
    },
    {
        "value": "ROP",
        "label": "ROP"
    },
    {
        "value": "ROYT",
        "label": "ROYT"
    },
    {
        "value": "RPAI",
        "label": "RPAI"
    },
    {
        "value": "RPL.U",
        "label": "RPL.U"
    },
    {
        "value": "RPL.W",
        "label": "RPL.W"
    },
    {
        "value": "RPLA",
        "label": "RPLA"
    },
    {
        "value": "RPM",
        "label": "RPM"
    },
    {
        "value": "RPT",
        "label": "RPT"
    },
    {
        "value": "RPT-D",
        "label": "RPT-D"
    },
    {
        "value": "RQI",
        "label": "RQI"
    },
    {
        "value": "RRC",
        "label": "RRC"
    },
    {
        "value": "RRD",
        "label": "RRD"
    },
    {
        "value": "RS",
        "label": "RS"
    },
    {
        "value": "RSF",
        "label": "RSF"
    },
    {
        "value": "RSG",
        "label": "RSG"
    },
    {
        "value": "RST",
        "label": "RST"
    },
    {
        "value": "RTW",
        "label": "RTW"
    },
    {
        "value": "RTX",
        "label": "RTX"
    },
    {
        "value": "RUBI",
        "label": "RUBI"
    },
    {
        "value": "RVI",
        "label": "RVI"
    },
    {
        "value": "RVLV",
        "label": "RVLV"
    },
    {
        "value": "RVT",
        "label": "RVT"
    },
    {
        "value": "RWT",
        "label": "RWT"
    },
    {
        "value": "RXN",
        "label": "RXN"
    },
    {
        "value": "RY",
        "label": "RY"
    },
    {
        "value": "RY-T",
        "label": "RY-T"
    },
    {
        "value": "RYAM",
        "label": "RYAM"
    },
    {
        "value": "RYB",
        "label": "RYB"
    },
    {
        "value": "RYCE",
        "label": "RYCE"
    },
    {
        "value": "RYI",
        "label": "RYI"
    },
    {
        "value": "RYN",
        "label": "RYN"
    },
    {
        "value": "RZA",
        "label": "RZA"
    },
    {
        "value": "RZB",
        "label": "RZB"
    },
    {
        "value": "SA",
        "label": "SA"
    },
    {
        "value": "SAF",
        "label": "SAF"
    },
    {
        "value": "SAFE",
        "label": "SAFE"
    },
    {
        "value": "SAH",
        "label": "SAH"
    },
    {
        "value": "SAIC",
        "label": "SAIC"
    },
    {
        "value": "SAIL",
        "label": "SAIL"
    },
    {
        "value": "SALT",
        "label": "SALT"
    },
    {
        "value": "SAM",
        "label": "SAM"
    },
    {
        "value": "SAN",
        "label": "SAN"
    },
    {
        "value": "SAN-B",
        "label": "SAN-B"
    },
    {
        "value": "SAND",
        "label": "SAND"
    },
    {
        "value": "SAP",
        "label": "SAP"
    },
    {
        "value": "SAR",
        "label": "SAR"
    },
    {
        "value": "SAVE",
        "label": "SAVE"
    },
    {
        "value": "SB",
        "label": "SB"
    },
    {
        "value": "SB-C",
        "label": "SB-C"
    },
    {
        "value": "SB-D",
        "label": "SB-D"
    },
    {
        "value": "SBBA",
        "label": "SBBA"
    },
    {
        "value": "SBE",
        "label": "SBE"
    },
    {
        "value": "SBE.U",
        "label": "SBE.U"
    },
    {
        "value": "SBE.W",
        "label": "SBE.W"
    },
    {
        "value": "SBH",
        "label": "SBH"
    },
    {
        "value": "SBI",
        "label": "SBI"
    },
    {
        "value": "SBOW",
        "label": "SBOW"
    },
    {
        "value": "SBR",
        "label": "SBR"
    },
    {
        "value": "SBS",
        "label": "SBS"
    },
    {
        "value": "SBSW",
        "label": "SBSW"
    },
    {
        "value": "SC",
        "label": "SC"
    },
    {
        "value": "SCA",
        "label": "SCA"
    },
    {
        "value": "SCCO",
        "label": "SCCO"
    },
    {
        "value": "SCD",
        "label": "SCD"
    },
    {
        "value": "SCE-G",
        "label": "SCE-G"
    },
    {
        "value": "SCE-H",
        "label": "SCE-H"
    },
    {
        "value": "SCE-J",
        "label": "SCE-J"
    },
    {
        "value": "SCE-K",
        "label": "SCE-K"
    },
    {
        "value": "SCE-L",
        "label": "SCE-L"
    },
    {
        "value": "SCH-C",
        "label": "SCH-C"
    },
    {
        "value": "SCH-D",
        "label": "SCH-D"
    },
    {
        "value": "SCHW",
        "label": "SCHW"
    },
    {
        "value": "SCI",
        "label": "SCI"
    },
    {
        "value": "SCL",
        "label": "SCL"
    },
    {
        "value": "SCM",
        "label": "SCM"
    },
    {
        "value": "SCP.U",
        "label": "SCP.U"
    },
    {
        "value": "SCP.W",
        "label": "SCP.W"
    },
    {
        "value": "SCPE",
        "label": "SCPE"
    },
    {
        "value": "SCS",
        "label": "SCS"
    },
    {
        "value": "SCU",
        "label": "SCU"
    },
    {
        "value": "SCV.U",
        "label": "SCV.U"
    },
    {
        "value": "SCV.W",
        "label": "SCV.W"
    },
    {
        "value": "SCVX",
        "label": "SCVX"
    },
    {
        "value": "SCX",
        "label": "SCX"
    },
    {
        "value": "SD",
        "label": "SD"
    },
    {
        "value": "SDRL",
        "label": "SDRL"
    },
    {
        "value": "SE",
        "label": "SE"
    },
    {
        "value": "SEAS",
        "label": "SEAS"
    },
    {
        "value": "SEE",
        "label": "SEE"
    },
    {
        "value": "SEM",
        "label": "SEM"
    },
    {
        "value": "SERV",
        "label": "SERV"
    },
    {
        "value": "SF",
        "label": "SF"
    },
    {
        "value": "SF-A",
        "label": "SF-A"
    },
    {
        "value": "SF-B",
        "label": "SF-B"
    },
    {
        "value": "SF-C",
        "label": "SF-C"
    },
    {
        "value": "SFB",
        "label": "SFB"
    },
    {
        "value": "SFE",
        "label": "SFE"
    },
    {
        "value": "SFL",
        "label": "SFL"
    },
    {
        "value": "SFT.U",
        "label": "SFT.U"
    },
    {
        "value": "SFT.W",
        "label": "SFT.W"
    },
    {
        "value": "SFTW",
        "label": "SFTW"
    },
    {
        "value": "SFUN",
        "label": "SFUN"
    },
    {
        "value": "SGU",
        "label": "SGU"
    },
    {
        "value": "SHAK",
        "label": "SHAK"
    },
    {
        "value": "SHG",
        "label": "SHG"
    },
    {
        "value": "SHI",
        "label": "SHI"
    },
    {
        "value": "SHL.U",
        "label": "SHL.U"
    },
    {
        "value": "SHL.W",
        "label": "SHL.W"
    },
    {
        "value": "SHLL",
        "label": "SHLL"
    },
    {
        "value": "SHLX",
        "label": "SHLX"
    },
    {
        "value": "SHO",
        "label": "SHO"
    },
    {
        "value": "SHO-E",
        "label": "SHO-E"
    },
    {
        "value": "SHO-F",
        "label": "SHO-F"
    },
    {
        "value": "SHOP",
        "label": "SHOP"
    },
    {
        "value": "SHW",
        "label": "SHW"
    },
    {
        "value": "SI",
        "label": "SI"
    },
    {
        "value": "SID",
        "label": "SID"
    },
    {
        "value": "SIG",
        "label": "SIG"
    },
    {
        "value": "SII",
        "label": "SII"
    },
    {
        "value": "SIT-A",
        "label": "SIT-A"
    },
    {
        "value": "SIT-K",
        "label": "SIT-K"
    },
    {
        "value": "SITC",
        "label": "SITC"
    },
    {
        "value": "SITE",
        "label": "SITE"
    },
    {
        "value": "SIX",
        "label": "SIX"
    },
    {
        "value": "SJI",
        "label": "SJI"
    },
    {
        "value": "SJIJ",
        "label": "SJIJ"
    },
    {
        "value": "SJIU",
        "label": "SJIU"
    },
    {
        "value": "SJM",
        "label": "SJM"
    },
    {
        "value": "SJR",
        "label": "SJR"
    },
    {
        "value": "SJT",
        "label": "SJT"
    },
    {
        "value": "SJW",
        "label": "SJW"
    },
    {
        "value": "SKM",
        "label": "SKM"
    },
    {
        "value": "SKT",
        "label": "SKT"
    },
    {
        "value": "SKX",
        "label": "SKX"
    },
    {
        "value": "SKY",
        "label": "SKY"
    },
    {
        "value": "SLB",
        "label": "SLB"
    },
    {
        "value": "SLCA",
        "label": "SLCA"
    },
    {
        "value": "SLF",
        "label": "SLF"
    },
    {
        "value": "SLG",
        "label": "SLG"
    },
    {
        "value": "SLG-I",
        "label": "SLG-I"
    },
    {
        "value": "SLQT",
        "label": "SLQT"
    },
    {
        "value": "SM",
        "label": "SM"
    },
    {
        "value": "SMAR",
        "label": "SMAR"
    },
    {
        "value": "SMFG",
        "label": "SMFG"
    },
    {
        "value": "SMG",
        "label": "SMG"
    },
    {
        "value": "SMHI",
        "label": "SMHI"
    },
    {
        "value": "SMLP",
        "label": "SMLP"
    },
    {
        "value": "SMM",
        "label": "SMM"
    },
    {
        "value": "SMP",
        "label": "SMP"
    },
    {
        "value": "SNA",
        "label": "SNA"
    },
    {
        "value": "SNAP",
        "label": "SNAP"
    },
    {
        "value": "SNDR",
        "label": "SNDR"
    },
    {
        "value": "SNE",
        "label": "SNE"
    },
    {
        "value": "SNN",
        "label": "SNN"
    },
    {
        "value": "SNP",
        "label": "SNP"
    },
    {
        "value": "SNR",
        "label": "SNR"
    },
    {
        "value": "SNV",
        "label": "SNV"
    },
    {
        "value": "SNV-D",
        "label": "SNV-D"
    },
    {
        "value": "SNV-E",
        "label": "SNV-E"
    },
    {
        "value": "SNX",
        "label": "SNX"
    },
    {
        "value": "SO",
        "label": "SO"
    },
    {
        "value": "SOA.U",
        "label": "SOA.U"
    },
    {
        "value": "SOA.W",
        "label": "SOA.W"
    },
    {
        "value": "SOGO",
        "label": "SOGO"
    },
    {
        "value": "SOI",
        "label": "SOI"
    },
    {
        "value": "SOJA",
        "label": "SOJA"
    },
    {
        "value": "SOJB",
        "label": "SOJB"
    },
    {
        "value": "SOJC",
        "label": "SOJC"
    },
    {
        "value": "SOJD",
        "label": "SOJD"
    },
    {
        "value": "SOL",
        "label": "SOL"
    },
    {
        "value": "SOLN",
        "label": "SOLN"
    },
    {
        "value": "SON",
        "label": "SON"
    },
    {
        "value": "SOR",
        "label": "SOR"
    },
    {
        "value": "SPA.U",
        "label": "SPA.U"
    },
    {
        "value": "SPA.W",
        "label": "SPA.W"
    },
    {
        "value": "SPAQ",
        "label": "SPAQ"
    },
    {
        "value": "SPB",
        "label": "SPB"
    },
    {
        "value": "SPCE",
        "label": "SPCE"
    },
    {
        "value": "SPE",
        "label": "SPE"
    },
    {
        "value": "SPE-B",
        "label": "SPE-B"
    },
    {
        "value": "SPG",
        "label": "SPG"
    },
    {
        "value": "SPG-J",
        "label": "SPG-J"
    },
    {
        "value": "SPGI",
        "label": "SPGI"
    },
    {
        "value": "SPH",
        "label": "SPH"
    },
    {
        "value": "SPL-A",
        "label": "SPL-A"
    },
    {
        "value": "SPLP",
        "label": "SPLP"
    },
    {
        "value": "SPN",
        "label": "SPN"
    },
    {
        "value": "SPOT",
        "label": "SPOT"
    },
    {
        "value": "SPR",
        "label": "SPR"
    },
    {
        "value": "SPXC",
        "label": "SPXC"
    },
    {
        "value": "SPXX",
        "label": "SPXX"
    },
    {
        "value": "SQ",
        "label": "SQ"
    },
    {
        "value": "SQM",
        "label": "SQM"
    },
    {
        "value": "SQNS",
        "label": "SQNS"
    },
    {
        "value": "SR",
        "label": "SR"
    },
    {
        "value": "SR-A",
        "label": "SR-A"
    },
    {
        "value": "SRC",
        "label": "SRC"
    },
    {
        "value": "SRC-A",
        "label": "SRC-A"
    },
    {
        "value": "SRE",
        "label": "SRE"
    },
    {
        "value": "SRE-A",
        "label": "SRE-A"
    },
    {
        "value": "SRE-B",
        "label": "SRE-B"
    },
    {
        "value": "SREA",
        "label": "SREA"
    },
    {
        "value": "SRG",
        "label": "SRG"
    },
    {
        "value": "SRG-A",
        "label": "SRG-A"
    },
    {
        "value": "SRI",
        "label": "SRI"
    },
    {
        "value": "SRL",
        "label": "SRL"
    },
    {
        "value": "SRLP",
        "label": "SRLP"
    },
    {
        "value": "SRT",
        "label": "SRT"
    },
    {
        "value": "SRV",
        "label": "SRV"
    },
    {
        "value": "SSD",
        "label": "SSD"
    },
    {
        "value": "SSL",
        "label": "SSL"
    },
    {
        "value": "SSTK",
        "label": "SSTK"
    },
    {
        "value": "ST",
        "label": "ST"
    },
    {
        "value": "STA-C",
        "label": "STA-C"
    },
    {
        "value": "STA-D",
        "label": "STA-D"
    },
    {
        "value": "STA-G",
        "label": "STA-G"
    },
    {
        "value": "STA-I",
        "label": "STA-I"
    },
    {
        "value": "STAG",
        "label": "STAG"
    },
    {
        "value": "STAR",
        "label": "STAR"
    },
    {
        "value": "STC",
        "label": "STC"
    },
    {
        "value": "STE",
        "label": "STE"
    },
    {
        "value": "STG",
        "label": "STG"
    },
    {
        "value": "STK",
        "label": "STK"
    },
    {
        "value": "STL",
        "label": "STL"
    },
    {
        "value": "STL-A",
        "label": "STL-A"
    },
    {
        "value": "STM",
        "label": "STM"
    },
    {
        "value": "STN",
        "label": "STN"
    },
    {
        "value": "STNG",
        "label": "STNG"
    },
    {
        "value": "STON",
        "label": "STON"
    },
    {
        "value": "STOR",
        "label": "STOR"
    },
    {
        "value": "STT",
        "label": "STT"
    },
    {
        "value": "STT-D",
        "label": "STT-D"
    },
    {
        "value": "STT-G",
        "label": "STT-G"
    },
    {
        "value": "STWD",
        "label": "STWD"
    },
    {
        "value": "STZ",
        "label": "STZ"
    },
    {
        "value": "STZ.B",
        "label": "STZ.B"
    },
    {
        "value": "SU",
        "label": "SU"
    },
    {
        "value": "SUI",
        "label": "SUI"
    },
    {
        "value": "SUM",
        "label": "SUM"
    },
    {
        "value": "SUN",
        "label": "SUN"
    },
    {
        "value": "SUP",
        "label": "SUP"
    },
    {
        "value": "SUPV",
        "label": "SUPV"
    },
    {
        "value": "SUZ",
        "label": "SUZ"
    },
    {
        "value": "SWCH",
        "label": "SWCH"
    },
    {
        "value": "SWI",
        "label": "SWI"
    },
    {
        "value": "SWK",
        "label": "SWK"
    },
    {
        "value": "SWM",
        "label": "SWM"
    },
    {
        "value": "SWN",
        "label": "SWN"
    },
    {
        "value": "SWT",
        "label": "SWT"
    },
    {
        "value": "SWX",
        "label": "SWX"
    },
    {
        "value": "SWZ",
        "label": "SWZ"
    },
    {
        "value": "SXC",
        "label": "SXC"
    },
    {
        "value": "SXI",
        "label": "SXI"
    },
    {
        "value": "SXT",
        "label": "SXT"
    },
    {
        "value": "SYF",
        "label": "SYF"
    },
    {
        "value": "SYF-A",
        "label": "SYF-A"
    },
    {
        "value": "SYK",
        "label": "SYK"
    },
    {
        "value": "SYX",
        "label": "SYX"
    },
    {
        "value": "SYY",
        "label": "SYY"
    },
    {
        "value": "SZC",
        "label": "SZC"
    },
    {
        "value": "T",
        "label": "T"
    },
    {
        "value": "T-A",
        "label": "T-A"
    },
    {
        "value": "T-C",
        "label": "T-C"
    },
    {
        "value": "TAC",
        "label": "TAC"
    },
    {
        "value": "TAK",
        "label": "TAK"
    },
    {
        "value": "TAL",
        "label": "TAL"
    },
    {
        "value": "TALO",
        "label": "TALO"
    },
    {
        "value": "TAP",
        "label": "TAP"
    },
    {
        "value": "TAP.A",
        "label": "TAP.A"
    },
    {
        "value": "TARO",
        "label": "TARO"
    },
    {
        "value": "TBB",
        "label": "TBB"
    },
    {
        "value": "TBC",
        "label": "TBC"
    },
    {
        "value": "TBI",
        "label": "TBI"
    },
    {
        "value": "TCI",
        "label": "TCI"
    },
    {
        "value": "TCO",
        "label": "TCO"
    },
    {
        "value": "TCO-J",
        "label": "TCO-J"
    },
    {
        "value": "TCO-K",
        "label": "TCO-K"
    },
    {
        "value": "TCP",
        "label": "TCP"
    },
    {
        "value": "TCRW",
        "label": "TCRW"
    },
    {
        "value": "TCRZ",
        "label": "TCRZ"
    },
    {
        "value": "TCS",
        "label": "TCS"
    },
    {
        "value": "TD",
        "label": "TD"
    },
    {
        "value": "TDA",
        "label": "TDA"
    },
    {
        "value": "TDC",
        "label": "TDC"
    },
    {
        "value": "TDE",
        "label": "TDE"
    },
    {
        "value": "TDF",
        "label": "TDF"
    },
    {
        "value": "TDG",
        "label": "TDG"
    },
    {
        "value": "TDI",
        "label": "TDI"
    },
    {
        "value": "TDJ",
        "label": "TDJ"
    },
    {
        "value": "TDOC",
        "label": "TDOC"
    },
    {
        "value": "TDS",
        "label": "TDS"
    },
    {
        "value": "TDW",
        "label": "TDW"
    },
    {
        "value": "TDW.A",
        "label": "TDW.A"
    },
    {
        "value": "TDW.B",
        "label": "TDW.B"
    },
    {
        "value": "TDY",
        "label": "TDY"
    },
    {
        "value": "TEAF",
        "label": "TEAF"
    },
    {
        "value": "TECK",
        "label": "TECK"
    },
    {
        "value": "TEF",
        "label": "TEF"
    },
    {
        "value": "TEI",
        "label": "TEI"
    },
    {
        "value": "TEL",
        "label": "TEL"
    },
    {
        "value": "TEN",
        "label": "TEN"
    },
    {
        "value": "TEO",
        "label": "TEO"
    },
    {
        "value": "TEVA",
        "label": "TEVA"
    },
    {
        "value": "TEX",
        "label": "TEX"
    },
    {
        "value": "TFC",
        "label": "TFC"
    },
    {
        "value": "TFC-F",
        "label": "TFC-F"
    },
    {
        "value": "TFC-G",
        "label": "TFC-G"
    },
    {
        "value": "TFC-H",
        "label": "TFC-H"
    },
    {
        "value": "TFC-I",
        "label": "TFC-I"
    },
    {
        "value": "TFC-O",
        "label": "TFC-O"
    },
    {
        "value": "TFII",
        "label": "TFII"
    },
    {
        "value": "TFX",
        "label": "TFX"
    },
    {
        "value": "TG",
        "label": "TG"
    },
    {
        "value": "TGH",
        "label": "TGH"
    },
    {
        "value": "TGI",
        "label": "TGI"
    },
    {
        "value": "TGNA",
        "label": "TGNA"
    },
    {
        "value": "TGP",
        "label": "TGP"
    },
    {
        "value": "TGP-A",
        "label": "TGP-A"
    },
    {
        "value": "TGP-B",
        "label": "TGP-B"
    },
    {
        "value": "TGS",
        "label": "TGS"
    },
    {
        "value": "TGT",
        "label": "TGT"
    },
    {
        "value": "THC",
        "label": "THC"
    },
    {
        "value": "THG",
        "label": "THG"
    },
    {
        "value": "THGA",
        "label": "THGA"
    },
    {
        "value": "THO",
        "label": "THO"
    },
    {
        "value": "THQ",
        "label": "THQ"
    },
    {
        "value": "THR",
        "label": "THR"
    },
    {
        "value": "THS",
        "label": "THS"
    },
    {
        "value": "THW",
        "label": "THW"
    },
    {
        "value": "TIF",
        "label": "TIF"
    },
    {
        "value": "TISI",
        "label": "TISI"
    },
    {
        "value": "TJX",
        "label": "TJX"
    },
    {
        "value": "TK",
        "label": "TK"
    },
    {
        "value": "TKC",
        "label": "TKC"
    },
    {
        "value": "TKR",
        "label": "TKR"
    },
    {
        "value": "TLI",
        "label": "TLI"
    },
    {
        "value": "TLK",
        "label": "TLK"
    },
    {
        "value": "TLRD",
        "label": "TLRD"
    },
    {
        "value": "TLYS",
        "label": "TLYS"
    },
    {
        "value": "TM",
        "label": "TM"
    },
    {
        "value": "TME",
        "label": "TME"
    },
    {
        "value": "TMHC",
        "label": "TMHC"
    },
    {
        "value": "TMO",
        "label": "TMO"
    },
    {
        "value": "TMST",
        "label": "TMST"
    },
    {
        "value": "TNC",
        "label": "TNC"
    },
    {
        "value": "TNET",
        "label": "TNET"
    },
    {
        "value": "TNK",
        "label": "TNK"
    },
    {
        "value": "TNP",
        "label": "TNP"
    },
    {
        "value": "TNP-C",
        "label": "TNP-C"
    },
    {
        "value": "TNP-D",
        "label": "TNP-D"
    },
    {
        "value": "TNP-E",
        "label": "TNP-E"
    },
    {
        "value": "TNP-F",
        "label": "TNP-F"
    },
    {
        "value": "TOL",
        "label": "TOL"
    },
    {
        "value": "TOT",
        "label": "TOT"
    },
    {
        "value": "TPB",
        "label": "TPB"
    },
    {
        "value": "TPC",
        "label": "TPC"
    },
    {
        "value": "TPH",
        "label": "TPH"
    },
    {
        "value": "TPL",
        "label": "TPL"
    },
    {
        "value": "TPR",
        "label": "TPR"
    },
    {
        "value": "TPRE",
        "label": "TPRE"
    },
    {
        "value": "TPVG",
        "label": "TPVG"
    },
    {
        "value": "TPVY",
        "label": "TPVY"
    },
    {
        "value": "TPX",
        "label": "TPX"
    },
    {
        "value": "TPZ",
        "label": "TPZ"
    },
    {
        "value": "TR",
        "label": "TR"
    },
    {
        "value": "TRC",
        "label": "TRC"
    },
    {
        "value": "TREC",
        "label": "TREC"
    },
    {
        "value": "TREX",
        "label": "TREX"
    },
    {
        "value": "TRGP",
        "label": "TRGP"
    },
    {
        "value": "TRI",
        "label": "TRI"
    },
    {
        "value": "TRN",
        "label": "TRN"
    },
    {
        "value": "TRN.U",
        "label": "TRN.U"
    },
    {
        "value": "TRN.W",
        "label": "TRN.W"
    },
    {
        "value": "TRNE",
        "label": "TRNE"
    },
    {
        "value": "TRNO",
        "label": "TRNO"
    },
    {
        "value": "TROX",
        "label": "TROX"
    },
    {
        "value": "TRP",
        "label": "TRP"
    },
    {
        "value": "TRQ",
        "label": "TRQ"
    },
    {
        "value": "TRT-A",
        "label": "TRT-A"
    },
    {
        "value": "TRT-B",
        "label": "TRT-B"
    },
    {
        "value": "TRT-C",
        "label": "TRT-C"
    },
    {
        "value": "TRT-D",
        "label": "TRT-D"
    },
    {
        "value": "TRTN",
        "label": "TRTN"
    },
    {
        "value": "TRTX",
        "label": "TRTX"
    },
    {
        "value": "TRU",
        "label": "TRU"
    },
    {
        "value": "TRV",
        "label": "TRV"
    },
    {
        "value": "TRWH",
        "label": "TRWH"
    },
    {
        "value": "TS",
        "label": "TS"
    },
    {
        "value": "TSE",
        "label": "TSE"
    },
    {
        "value": "TSI",
        "label": "TSI"
    },
    {
        "value": "TSLX",
        "label": "TSLX"
    },
    {
        "value": "TSM",
        "label": "TSM"
    },
    {
        "value": "TSN",
        "label": "TSN"
    },
    {
        "value": "TSQ",
        "label": "TSQ"
    },
    {
        "value": "TSU",
        "label": "TSU"
    },
    {
        "value": "TT",
        "label": "TT"
    },
    {
        "value": "TTC",
        "label": "TTC"
    },
    {
        "value": "TTI",
        "label": "TTI"
    },
    {
        "value": "TTM",
        "label": "TTM"
    },
    {
        "value": "TTP",
        "label": "TTP"
    },
    {
        "value": "TU",
        "label": "TU"
    },
    {
        "value": "TUFN",
        "label": "TUFN"
    },
    {
        "value": "TUP",
        "label": "TUP"
    },
    {
        "value": "TV",
        "label": "TV"
    },
    {
        "value": "TVC",
        "label": "TVC"
    },
    {
        "value": "TVE",
        "label": "TVE"
    },
    {
        "value": "TWI",
        "label": "TWI"
    },
    {
        "value": "TWLO",
        "label": "TWLO"
    },
    {
        "value": "TWN",
        "label": "TWN"
    },
    {
        "value": "TWO",
        "label": "TWO"
    },
    {
        "value": "TWO-A",
        "label": "TWO-A"
    },
    {
        "value": "TWO-B",
        "label": "TWO-B"
    },
    {
        "value": "TWO-C",
        "label": "TWO-C"
    },
    {
        "value": "TWO-D",
        "label": "TWO-D"
    },
    {
        "value": "TWO-E",
        "label": "TWO-E"
    },
    {
        "value": "TWTR",
        "label": "TWTR"
    },
    {
        "value": "TX",
        "label": "TX"
    },
    {
        "value": "TXT",
        "label": "TXT"
    },
    {
        "value": "TY",
        "label": "TY"
    },
    {
        "value": "TY.P",
        "label": "TY.P"
    },
    {
        "value": "TYG",
        "label": "TYG"
    },
    {
        "value": "TYL",
        "label": "TYL"
    },
    {
        "value": "UA",
        "label": "UA"
    },
    {
        "value": "UAA",
        "label": "UAA"
    },
    {
        "value": "UAN",
        "label": "UAN"
    },
    {
        "value": "UBA",
        "label": "UBA"
    },
    {
        "value": "UBER",
        "label": "UBER"
    },
    {
        "value": "UBP",
        "label": "UBP"
    },
    {
        "value": "UBP-H",
        "label": "UBP-H"
    },
    {
        "value": "UBP-K",
        "label": "UBP-K"
    },
    {
        "value": "UBS",
        "label": "UBS"
    },
    {
        "value": "UDR",
        "label": "UDR"
    },
    {
        "value": "UE",
        "label": "UE"
    },
    {
        "value": "UFI",
        "label": "UFI"
    },
    {
        "value": "UFS",
        "label": "UFS"
    },
    {
        "value": "UGI",
        "label": "UGI"
    },
    {
        "value": "UGP",
        "label": "UGP"
    },
    {
        "value": "UHS",
        "label": "UHS"
    },
    {
        "value": "UHT",
        "label": "UHT"
    },
    {
        "value": "UI",
        "label": "UI"
    },
    {
        "value": "UIS",
        "label": "UIS"
    },
    {
        "value": "UL",
        "label": "UL"
    },
    {
        "value": "UMC",
        "label": "UMC"
    },
    {
        "value": "UMH",
        "label": "UMH"
    },
    {
        "value": "UMH-B",
        "label": "UMH-B"
    },
    {
        "value": "UMH-C",
        "label": "UMH-C"
    },
    {
        "value": "UMH-D",
        "label": "UMH-D"
    },
    {
        "value": "UN",
        "label": "UN"
    },
    {
        "value": "UNF",
        "label": "UNF"
    },
    {
        "value": "UNFI",
        "label": "UNFI"
    },
    {
        "value": "UNH",
        "label": "UNH"
    },
    {
        "value": "UNM",
        "label": "UNM"
    },
    {
        "value": "UNMA",
        "label": "UNMA"
    },
    {
        "value": "UNP",
        "label": "UNP"
    },
    {
        "value": "UNVR",
        "label": "UNVR"
    },
    {
        "value": "UPS",
        "label": "UPS"
    },
    {
        "value": "URI",
        "label": "URI"
    },
    {
        "value": "USA",
        "label": "USA"
    },
    {
        "value": "USAC",
        "label": "USAC"
    },
    {
        "value": "USB",
        "label": "USB"
    },
    {
        "value": "USB-A",
        "label": "USB-A"
    },
    {
        "value": "USB-H",
        "label": "USB-H"
    },
    {
        "value": "USB-M",
        "label": "USB-M"
    },
    {
        "value": "USB-O",
        "label": "USB-O"
    },
    {
        "value": "USB-P",
        "label": "USB-P"
    },
    {
        "value": "USDP",
        "label": "USDP"
    },
    {
        "value": "USFD",
        "label": "USFD"
    },
    {
        "value": "USM",
        "label": "USM"
    },
    {
        "value": "USNA",
        "label": "USNA"
    },
    {
        "value": "USPH",
        "label": "USPH"
    },
    {
        "value": "USX",
        "label": "USX"
    },
    {
        "value": "UTF",
        "label": "UTF"
    },
    {
        "value": "UTI",
        "label": "UTI"
    },
    {
        "value": "UTL",
        "label": "UTL"
    },
    {
        "value": "UVE",
        "label": "UVE"
    },
    {
        "value": "UVV",
        "label": "UVV"
    },
    {
        "value": "UZA",
        "label": "UZA"
    },
    {
        "value": "UZB",
        "label": "UZB"
    },
    {
        "value": "UZC",
        "label": "UZC"
    },
    {
        "value": "V",
        "label": "V"
    },
    {
        "value": "VAC",
        "label": "VAC"
    },
    {
        "value": "VAL",
        "label": "VAL"
    },
    {
        "value": "VALE",
        "label": "VALE"
    },
    {
        "value": "VAM",
        "label": "VAM"
    },
    {
        "value": "VAPO",
        "label": "VAPO"
    },
    {
        "value": "VAR",
        "label": "VAR"
    },
    {
        "value": "VBF",
        "label": "VBF"
    },
    {
        "value": "VCIF",
        "label": "VCIF"
    },
    {
        "value": "VCRA",
        "label": "VCRA"
    },
    {
        "value": "VCV",
        "label": "VCV"
    },
    {
        "value": "VEC",
        "label": "VEC"
    },
    {
        "value": "VEDL",
        "label": "VEDL"
    },
    {
        "value": "VEEV",
        "label": "VEEV"
    },
    {
        "value": "VEL",
        "label": "VEL"
    },
    {
        "value": "VER",
        "label": "VER"
    },
    {
        "value": "VER-F",
        "label": "VER-F"
    },
    {
        "value": "VER.U",
        "label": "VER.U"
    },
    {
        "value": "VET",
        "label": "VET"
    },
    {
        "value": "VFC",
        "label": "VFC"
    },
    {
        "value": "VGI",
        "label": "VGI"
    },
    {
        "value": "VGM",
        "label": "VGM"
    },
    {
        "value": "VGR",
        "label": "VGR"
    },
    {
        "value": "VHI",
        "label": "VHI"
    },
    {
        "value": "VICI",
        "label": "VICI"
    },
    {
        "value": "VIPS",
        "label": "VIPS"
    },
    {
        "value": "VIST",
        "label": "VIST"
    },
    {
        "value": "VIV",
        "label": "VIV"
    },
    {
        "value": "VJET",
        "label": "VJET"
    },
    {
        "value": "VKQ",
        "label": "VKQ"
    },
    {
        "value": "VLO",
        "label": "VLO"
    },
    {
        "value": "VLRS",
        "label": "VLRS"
    },
    {
        "value": "VLT",
        "label": "VLT"
    },
    {
        "value": "VMC",
        "label": "VMC"
    },
    {
        "value": "VMI",
        "label": "VMI"
    },
    {
        "value": "VMO",
        "label": "VMO"
    },
    {
        "value": "VMW",
        "label": "VMW"
    },
    {
        "value": "VNCE",
        "label": "VNCE"
    },
    {
        "value": "VNE",
        "label": "VNE"
    },
    {
        "value": "VNO",
        "label": "VNO"
    },
    {
        "value": "VNO-K",
        "label": "VNO-K"
    },
    {
        "value": "VNO-L",
        "label": "VNO-L"
    },
    {
        "value": "VNO-M",
        "label": "VNO-M"
    },
    {
        "value": "VNTR",
        "label": "VNTR"
    },
    {
        "value": "VOC",
        "label": "VOC"
    },
    {
        "value": "VOY-B",
        "label": "VOY-B"
    },
    {
        "value": "VOYA",
        "label": "VOYA"
    },
    {
        "value": "VPG",
        "label": "VPG"
    },
    {
        "value": "VPV",
        "label": "VPV"
    },
    {
        "value": "VRS",
        "label": "VRS"
    },
    {
        "value": "VRT",
        "label": "VRT"
    },
    {
        "value": "VRT.W",
        "label": "VRT.W"
    },
    {
        "value": "VRTV",
        "label": "VRTV"
    },
    {
        "value": "VSH",
        "label": "VSH"
    },
    {
        "value": "VSLR",
        "label": "VSLR"
    },
    {
        "value": "VST",
        "label": "VST"
    },
    {
        "value": "VST.A",
        "label": "VST.A"
    },
    {
        "value": "VSTO",
        "label": "VSTO"
    },
    {
        "value": "VTA",
        "label": "VTA"
    },
    {
        "value": "VTN",
        "label": "VTN"
    },
    {
        "value": "VTOL",
        "label": "VTOL"
    },
    {
        "value": "VTR",
        "label": "VTR"
    },
    {
        "value": "VVI",
        "label": "VVI"
    },
    {
        "value": "VVN.W",
        "label": "VVN.W"
    },
    {
        "value": "VVNT",
        "label": "VVNT"
    },
    {
        "value": "VVR",
        "label": "VVR"
    },
    {
        "value": "VVV",
        "label": "VVV"
    },
    {
        "value": "VZ",
        "label": "VZ"
    },
    {
        "value": "W",
        "label": "W"
    },
    {
        "value": "WAB",
        "label": "WAB"
    },
    {
        "value": "WAL",
        "label": "WAL"
    },
    {
        "value": "WALA",
        "label": "WALA"
    },
    {
        "value": "WAT",
        "label": "WAT"
    },
    {
        "value": "WBAI",
        "label": "WBAI"
    },
    {
        "value": "WBK",
        "label": "WBK"
    },
    {
        "value": "WBS",
        "label": "WBS"
    },
    {
        "value": "WBS-F",
        "label": "WBS-F"
    },
    {
        "value": "WBT",
        "label": "WBT"
    },
    {
        "value": "WCC",
        "label": "WCC"
    },
    {
        "value": "WCC-A",
        "label": "WCC-A"
    },
    {
        "value": "WCN",
        "label": "WCN"
    },
    {
        "value": "WD",
        "label": "WD"
    },
    {
        "value": "WDR",
        "label": "WDR"
    },
    {
        "value": "WEA",
        "label": "WEA"
    },
    {
        "value": "WEC",
        "label": "WEC"
    },
    {
        "value": "WEI",
        "label": "WEI"
    },
    {
        "value": "WELL",
        "label": "WELL"
    },
    {
        "value": "WES",
        "label": "WES"
    },
    {
        "value": "WEX",
        "label": "WEX"
    },
    {
        "value": "WF",
        "label": "WF"
    },
    {
        "value": "WFC",
        "label": "WFC"
    },
    {
        "value": "WFC-L",
        "label": "WFC-L"
    },
    {
        "value": "WFC-N",
        "label": "WFC-N"
    },
    {
        "value": "WFC-O",
        "label": "WFC-O"
    },
    {
        "value": "WFC-P",
        "label": "WFC-P"
    },
    {
        "value": "WFC-Q",
        "label": "WFC-Q"
    },
    {
        "value": "WFC-R",
        "label": "WFC-R"
    },
    {
        "value": "WFC-T",
        "label": "WFC-T"
    },
    {
        "value": "WFC-V",
        "label": "WFC-V"
    },
    {
        "value": "WFC-W",
        "label": "WFC-W"
    },
    {
        "value": "WFC-X",
        "label": "WFC-X"
    },
    {
        "value": "WFC-Y",
        "label": "WFC-Y"
    },
    {
        "value": "WFC-Z",
        "label": "WFC-Z"
    },
    {
        "value": "WGO",
        "label": "WGO"
    },
    {
        "value": "WH",
        "label": "WH"
    },
    {
        "value": "WHD",
        "label": "WHD"
    },
    {
        "value": "WHG",
        "label": "WHG"
    },
    {
        "value": "WHR",
        "label": "WHR"
    },
    {
        "value": "WIA",
        "label": "WIA"
    },
    {
        "value": "WIT",
        "label": "WIT"
    },
    {
        "value": "WIW",
        "label": "WIW"
    },
    {
        "value": "WK",
        "label": "WK"
    },
    {
        "value": "WLK",
        "label": "WLK"
    },
    {
        "value": "WLKP",
        "label": "WLKP"
    },
    {
        "value": "WLL",
        "label": "WLL"
    },
    {
        "value": "WM",
        "label": "WM"
    },
    {
        "value": "WMB",
        "label": "WMB"
    },
    {
        "value": "WMC",
        "label": "WMC"
    },
    {
        "value": "WMK",
        "label": "WMK"
    },
    {
        "value": "WMS",
        "label": "WMS"
    },
    {
        "value": "WMT",
        "label": "WMT"
    },
    {
        "value": "WNC",
        "label": "WNC"
    },
    {
        "value": "WNS",
        "label": "WNS"
    },
    {
        "value": "WOR",
        "label": "WOR"
    },
    {
        "value": "WORK",
        "label": "WORK"
    },
    {
        "value": "WOW",
        "label": "WOW"
    },
    {
        "value": "WPC",
        "label": "WPC"
    },
    {
        "value": "WPF.U",
        "label": "WPF.U"
    },
    {
        "value": "WPG",
        "label": "WPG"
    },
    {
        "value": "WPG-H",
        "label": "WPG-H"
    },
    {
        "value": "WPG-I",
        "label": "WPG-I"
    },
    {
        "value": "WPM",
        "label": "WPM"
    },
    {
        "value": "WPP",
        "label": "WPP"
    },
    {
        "value": "WPX",
        "label": "WPX"
    },
    {
        "value": "WRB",
        "label": "WRB"
    },
    {
        "value": "WRB-B",
        "label": "WRB-B"
    },
    {
        "value": "WRB-C",
        "label": "WRB-C"
    },
    {
        "value": "WRB-D",
        "label": "WRB-D"
    },
    {
        "value": "WRB-E",
        "label": "WRB-E"
    },
    {
        "value": "WRB-F",
        "label": "WRB-F"
    },
    {
        "value": "WRE",
        "label": "WRE"
    },
    {
        "value": "WRI",
        "label": "WRI"
    },
    {
        "value": "WRK",
        "label": "WRK"
    },
    {
        "value": "WSM",
        "label": "WSM"
    },
    {
        "value": "WSO",
        "label": "WSO"
    },
    {
        "value": "WSO.B",
        "label": "WSO.B"
    },
    {
        "value": "WSR",
        "label": "WSR"
    },
    {
        "value": "WST",
        "label": "WST"
    },
    {
        "value": "WTI",
        "label": "WTI"
    },
    {
        "value": "WTM",
        "label": "WTM"
    },
    {
        "value": "WTRG",
        "label": "WTRG"
    },
    {
        "value": "WTRU",
        "label": "WTRU"
    },
    {
        "value": "WTS",
        "label": "WTS"
    },
    {
        "value": "WTTR",
        "label": "WTTR"
    },
    {
        "value": "WU",
        "label": "WU"
    },
    {
        "value": "WUBA",
        "label": "WUBA"
    },
    {
        "value": "WWE",
        "label": "WWE"
    },
    {
        "value": "WWW",
        "label": "WWW"
    },
    {
        "value": "WY",
        "label": "WY"
    },
    {
        "value": "WYND",
        "label": "WYND"
    },
    {
        "value": "X",
        "label": "X"
    },
    {
        "value": "XAN",
        "label": "XAN"
    },
    {
        "value": "XAN-C",
        "label": "XAN-C"
    },
    {
        "value": "XEC",
        "label": "XEC"
    },
    {
        "value": "XFLT",
        "label": "XFLT"
    },
    {
        "value": "XHR",
        "label": "XHR"
    },
    {
        "value": "XIN",
        "label": "XIN"
    },
    {
        "value": "XOM",
        "label": "XOM"
    },
    {
        "value": "XPO",
        "label": "XPO"
    },
    {
        "value": "XRF",
        "label": "XRF"
    },
    {
        "value": "XRX",
        "label": "XRX"
    },
    {
        "value": "XYF",
        "label": "XYF"
    },
    {
        "value": "XYL",
        "label": "XYL"
    },
    {
        "value": "Y",
        "label": "Y"
    },
    {
        "value": "YELP",
        "label": "YELP"
    },
    {
        "value": "YETI",
        "label": "YETI"
    },
    {
        "value": "YEXT",
        "label": "YEXT"
    },
    {
        "value": "YPF",
        "label": "YPF"
    },
    {
        "value": "YRD",
        "label": "YRD"
    },
    {
        "value": "YUM",
        "label": "YUM"
    },
    {
        "value": "YUMC",
        "label": "YUMC"
    },
    {
        "value": "ZBH",
        "label": "ZBH"
    },
    {
        "value": "ZEN",
        "label": "ZEN"
    },
    {
        "value": "ZNH",
        "label": "ZNH"
    },
    {
        "value": "ZTO",
        "label": "ZTO"
    },
    {
        "value": "ZTR",
        "label": "ZTR"
    },
    {
        "value": "ZTS",
        "label": "ZTS"
    },
    {
        "value": "ZUO",
        "label": "ZUO"
    },
    {
        "value": "ZYME",
        "label": "ZYME"
    },
    {
        "value": ""
    }
]

class MenuList extends React.Component {
    render() {
        const { options, children, maxHeight, getValue } = this.props;
        const [value] = getValue();

        return (
            <List
              height={maxHeight}
              itemCount={children.length}
              itemSize={height}
            >
              {({ index, style }) => <div style={style}>{children[index]}</div>}
            </List>
          );
    }
}