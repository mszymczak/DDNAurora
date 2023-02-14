// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        events:{"onReady":"_onready", "onRender":"_onrender"},
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout7")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "min" : 10,
                        "size" : 60,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 80
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "min" : 10,
                        "size" : 60,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs33")
                .setItems([
                    {
                        "id" : "b",
                        "caption" : "DDN Aurora Forward Sizing"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("6.095238095238095em")
                .setWidth("53.02857142857143em")
                .setHeight("53.79047619047619em")
                .setValue("b"),
                "main"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radioboxNodeDriveDevicePopulation")
                .setName("xui_ui_radioboxNodeDriveDevicePopulation")
                .setItems([
                    {
                        "id" : "P",
                        "caption" : "Partial (6)",
                        "imageClass" : ""
                    },
                    {
                        "id" : "F",
                        "caption" : "Full (12)",
                        "imageClass" : ""
                    }
                ])
                .setLeft("3.0476190476190474em")
                .setTop("13.866666666666667em")
                .setWidth("54.17142857142857em")
                .setHeight("4.571428571428571em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Node Drive Device Population")
                .setLabelHAlign("left")
                .setValue("F")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1401")
                .setLeft("1.5238095238095237em")
                .setTop("23.00952380952381em")
                .setWidth("86.17142857142858em")
                .setCaption("Technical Attributes")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radioboxNodeDriveDeviceType")
                .setName("xui_ui_radioboxNodeDriveDeviceType")
                .setItems([
                    {
                        "id" : "15",
                        "caption" : "15.36 TB QLC-E1.s-15360",
                        "imageClass" : ""
                    },
                    {
                        "id" : "30",
                        "caption" : "30.72 TB QLC-E1.s-30720",
                        "imageClass" : ""
                    }
                ])
                .setLeft("3.0476190476190474em")
                .setTop("18.20952380952381em")
                .setWidth("54.17142857142857em")
                .setHeight("4.571428571428571em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Drive Device Type")
                .setLabelHAlign("left")
                .setValue("30")
                .afterUIValueSet("_refresh_tab_forward_capacity")
                .setCustomStyle({
                    "KEY" : {
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_StarlingApplianceQty")
                .setName("xui_ui_comboinput_StarlingApplianceQty")
                .setLeft("22.095238095238095em")
                .setTop("11.352380952380953em")
                .setZIndex(1002)
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(6)
                .setMax(10000)
                .setValue(6)
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1402")
                .setLeft("1.5238095238095237em")
                .setTop("9.066666666666666em")
                .setWidth("86.17142857142858em")
                .setCaption("Technical Design")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1403")
                .setLeft("3.0476190476190474em")
                .setTop("11.6571em")
                .setWidth("28.64761904761905em")
                .setCaption("DDN Aurora Starling RS-7313 Appliance")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1404")
                .setLeft("32.76190476190476em")
                .setTop("11.657142857142857em")
                .setWidth("10.361904761904762em")
                .setCaption("Qty (Min 6)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1405")
                .setLeft("1.5238095238095237em")
                .setTop("35.733333333333334em")
                .setWidth("86.17142857142858em")
                .setCaption("Configuration")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1406")
                .setLeft("1.5238095238095237em")
                .setTop("41.06666666666667em")
                .setWidth("13.790476190476191em")
                .setCaption("RS-7313")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1407")
                .setLeft("1.5238095238095237em")
                .setTop("38.01904761904762em")
                .setWidth("14.552380952380952em")
                .setCaption("SKU")
                .setHAlign("center")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#696969"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1408")
                .setLeft("22.857142857142858em")
                .setTop("38.01904761904762em")
                .setWidth("66.36190476190477em")
                .setCaption("Description")
                .setHAlign("center")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#696969"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1409")
                .setLeft("16.761904761904763em")
                .setTop("38.01904761904762em")
                .setWidth("5.40952380952381em")
                .setCaption("Qty")
                .setHAlign("center")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#696969"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1410")
                .setLeft("22.857142857142858em")
                .setTop("41.06666666666667em")
                .setWidth("65.6em")
                .setCaption("Starling Appliance with 12x NVME u.2 slots, 4x HDR ports, power cables, rack mount kit.")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingApplianceQty")
                .setName("xui_ui_labelBOMStarlingApplianceQty")
                .setLeft("16.761904761904763em")
                .setTop("41.06666666666667em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingDriveDeviceQty")
                .setName("xui_ui_labelBOMStarlingDriveDeviceQty")
                .setLeft("16.761904761904763em")
                .setTop("44.114285714285714em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingDriveDeviceSKU")
                .setName("xui_ui_labelBOMStarlingDriveDeviceSKU")
                .setLeft("1.5238095238095237em")
                .setTop("44.114285714285714em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingDriveDeviceDescription")
                .setName("xui_ui_labelBOMStarlingDriveDeviceDescription")
                .setLeft("22.857142857142858em")
                .setTop("44.114285714285714em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSubscriptionSKU")
                .setName("xui_ui_labelBOMStarlingSubscriptionSKU")
                .setLeft("1.5238095238095237em")
                .setTop("54.78095238095238em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSubscriptionQty")
                .setName("xui_ui_labelBOMStarlingSubscriptionQty")
                .setLeft("16.761904761904763em")
                .setTop("54.78095238095238em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSubscriptionDescription")
                .setName("xui_ui_labelBOMStarlingSubscriptionDescription")
                .setLeft("22.857142857142858em")
                .setTop("54.78095238095238em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1418")
                .setLeft("1.5238095238095237em")
                .setTop("1.4476190476190476em")
                .setWidth("86.17142857142858em")
                .setCaption("Terms")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1419")
                .setLeft("1.5238095238095237em")
                .setTop("3.961904761904762em")
                .setWidth("11.885714285714286em")
                .setCaption("Period of Performance")
                .setHAlign("center"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1420")
                .setLeft("13.714285714285714em")
                .setTop("3.961904761904762em")
                .setWidth("11.885714285714286em")
                .setCaption("Support Type")
                .setHAlign("center"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_TermsSupportYears")
                .setName("xui_ui_comboinput_TermsSupportYears")
                .setLeft("26.666666666666668em")
                .setTop("5.485714285714286em")
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(1)
                .setMax(5)
                .setValue(3)
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1421")
                .setLeft("25.904761904761905em")
                .setTop("3.961904761904762em")
                .setWidth("11.885714285714286em")
                .setCaption("Support Years")
                .setHAlign("center"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1422")
                .setLeft("37.333333333333336em")
                .setTop("5.79047619047619em")
                .setWidth("10.361904761904762em")
                .setCaption("Yrs (1 - 5)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_TermsPeriodofPerformance")
                .setName("xui_ui_comboinput_TermsPeriodofPerformance")
                .setLeft("2.2857142857142856em")
                .setTop("5.485714285714286em")
                .setLabelSize("auto")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "SUP-POP-INV",
                        "caption" : "SUP-POP-INV",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "SUP-POP-30D",
                        "caption" : "SUP-POP-30D",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "SUP-POP-90D",
                        "caption" : "SUP-POP-90D",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "SUP-POP-ACC",
                        "caption" : "SUP-POP-ACC",
                        "imageClass" : "xui-icon-number4",
                        "disabled" : false
                    }
                ])
                .setValue("SUP-POP-INV")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_TermsSupportType")
                .setName("xui_ui_comboinput_TermsSupportType")
                .setLeft("14.476190476190476em")
                .setTop("5.485714285714286em")
                .setLabelSize("auto")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "Basic Onsite",
                        "caption" : "Basic Onsite",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "Premium Onsite",
                        "caption" : "Premium Onsite",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
                .setValue("Basic Onsite")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1423")
                .setLeft("1.5238095238095237em")
                .setTop("39.542857142857144em")
                .setWidth("86.17142857142858em")
                .setCaption("Storage Systems")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSupportTypeSKU")
                .setName("xui_ui_labelBOMStarlingSupportTypeSKU")
                .setLeft("1.5238095238095237em")
                .setTop("51.733333333333334em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSupportTypeDescription")
                .setName("xui_ui_labelBOMStarlingSupportTypeDescription")
                .setLeft("22.857142857142858em")
                .setTop("51.733333333333334em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSupportTypeQty")
                .setName("xui_ui_labelBOMStarlingSupportTypeQty")
                .setLeft("16.761904761904763em")
                .setTop("51.733333333333334em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1427")
                .setLeft("1.5238095238095237em")
                .setTop("48.68571428571428em")
                .setWidth("86.17142857142858em")
                .setCaption("Support and Subscriptions")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1428")
                .setLeft("1.5238095238095237em")
                .setTop("45.63809523809524em")
                .setWidth("86.17142857142858em")
                .setCaption("Other Equipment")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1429")
                .setLeft("1.5238095238095237em")
                .setTop("47.161904761904765em")
                .setWidth("86.17142857142858em")
                .setCaption("Software")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingPeriodofPerformanceSKU")
                .setName("xui_ui_labelBOMStarlingPeriodofPerformanceSKU")
                .setLeft("1.5238095238095237em")
                .setTop("50.20952380952381em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingPeriodofPerformanceDescription")
                .setName("xui_ui_labelBOMStarlingPeriodofPerformanceDescription")
                .setLeft("22.857142857142858em")
                .setTop("50.20952380952381em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingPeriodofPerformanceQty")
                .setName("xui_ui_labelBOMStarlingPeriodofPerformanceQty")
                .setLeft("16.761904761904763em")
                .setTop("50.20952380952381em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1433")
                .setLeft("1.5238095238095237em")
                .setTop("56.304761904761904em")
                .setWidth("86.17142857142858em")
                .setCaption("Services")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1434")
                .setLeft("1.5238095238095237em")
                .setTop("59.352380952380955em")
                .setWidth("13.790476190476191em")
                .setCaption("PSB-HW-INST")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1435")
                .setLeft("16.761904761904763em")
                .setTop("59.352380952380955em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1436")
                .setLeft("22.857142857142858em")
                .setTop("59.352380952380955em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1438")
                .setLeft("22.857142857142858em")
                .setTop("57.82857142857143em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1439")
                .setLeft("16.761904761904763em")
                .setTop("57.82857142857143em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1440")
                .setLeft("1.5238095238095237em")
                .setTop("60.87619047619047em")
                .setWidth("13.790476190476191em")
                .setCaption("PSB-ONSITE")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1441")
                .setLeft("22.857142857142858em")
                .setTop("60.87619047619047em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1442")
                .setLeft("16.761904761904763em")
                .setTop("60.87619047619047em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1443")
                .setLeft("1.5238095238095237em")
                .setTop("42.59047619047619em")
                .setWidth("86.17142857142858em")
                .setCaption("SSDs > 8TB")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSSDSupportTypeSKU")
                .setName("xui_ui_labelBOMStarlingSSDSupportTypeSKU")
                .setLeft("1.5238095238095237em")
                .setTop("53.25714285714286em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSSDSupportTypeQty")
                .setName("xui_ui_labelBOMStarlingSSDSupportTypeQty")
                .setLeft("16.761904761904763em")
                .setTop("53.25714285714286em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSSDSupportTypeDescription")
                .setName("xui_ui_labelBOMStarlingSSDSupportTypeDescription")
                .setLeft("22.857142857142858em")
                .setTop("53.25714285714286em")
                .setWidth("65.6em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs5")
                .setItems([
                    {
                        "id" : "capacity",
                        "caption" : "Capacity"
                    },
                    {
                        "id" : "performance",
                        "caption" : "Performance"
                    },
                    {
                        "id" : "reliability",
                        "caption" : "Reliability",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    }
                ])
                .setDock("none")
                .setLeft("1.5238095238095237em")
                .setTop("24.533333333333335em")
                .setWidth("87.77142857142857em")
                .setHeight("10.514285714285714em")
                .setValue("capacity"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label78")
                .setLeft("0.7619047619047619em")
                .setTop("2.2857142857142856em")
                .setWidth("8.838095238095239em")
                .setCaption("Usable Capacity")
                .setHAlign("left"),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_lblUsableCapacityTB")
                .setName("xui_ui_lblUsableCapacityTB")
                .setLeft("9.904761904761905em")
                .setTop("2.2857142857142856em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_lblEffectiveCapacityTB")
                .setName("xui_ui_lblEffectiveCapacityTB")
                .setLeft("9.904761904761905em")
                .setTop("3.8095238095238093em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label81")
                .setLeft("0.7619047619047619em")
                .setTop("3.8095238095238093em")
                .setWidth("8.838095238095239em")
                .setCaption("Effective Capacity")
                .setHAlign("left"),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label82")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("8.838095238095239em")
                .setCaption("Raw Capacity")
                .setHAlign("left"),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_lblRawCapacityTB")
                .setName("xui_ui_lblRawCapacityTB")
                .setLeft("9.904761904761905em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label84")
                .setLeft("20.571428571428573em")
                .setTop("0.7619047619047619em")
                .setWidth("35.50476190476191em")
                .setCaption("TB")
                .setHAlign("left"),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label85")
                .setLeft("20.571428571428573em")
                .setTop("2.2857142857142856em")
                .setWidth("35.50476190476191em")
                .setCaption("TB (approximate)")
                .setHAlign("left"),
                "capacity"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label86")
                .setLeft("20.571428571428573em")
                .setTop("3.8095238095238093em")
                .setWidth("35.50476190476191em")
                .setCaption("TB (approximate)")
                .setHAlign("left"),
                "capacity"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1437")
                .setLeft("1.5238095238095237em")
                .setTop("57.82857142857143em")
                .setWidth("13.790476190476191em")
                .setCaption("PS-CUSTOM")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1449")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("31.6875em")
                .setHeight("1.8125em")
                .setCaption("DataDirect Networks - Sizing Tools")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "20px"
                    }
                }),
                "before"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1562")
                .setLeft("0.8333333333333334em")
                .setTop("0.16666666666666666em")
                .setWidth("63.833333333333336em")
                .setHeight("1.1666666666666667em")
                .setCaption("© 2022 DataDirect Networks, All Rights Reserved.")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "12px"
                    }
                }),
                "after"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1734")
                .setLeft("0.8333333333333334em")
                .setTop("1.5em")
                .setWidth("63.833333333333336em")
                .setHeight("1.1666666666666667em")
                .setCaption("General Enquiries: +1 818 700 4000, 9351 Deering Avenue, Chatsworth, CA 91311")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "12px"
                    }
                }),
                "after"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2083")
                .setLeft("1.4285714285714286em")
                .setTop("1.4285714285714286em")
                .setWidth("53.857142857142854em")
                .setHeight("1.8125em")
                .setCaption("Experimental - Not for Production Use - For DDN Employee Use ONLY")
                .setHAlign("left")
                .setFontColor("#DC143C")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "14px",
                        "font-style" : "normal"
                    }
                }),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        
        
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //
        //
        // FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
        //
        //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        _onready:function(){
            SPA=this;
        },
        
        _onrender:function(){
            SPA._refresh_tab_forward_capacity();
            //xui.message('_onrender');
        },
                
        _refresh_tab_forward_capacity:function(){
            
            var StarlingApplianceQty = Number(this.xui_ui_comboinput_StarlingApplianceQty.getUIValue());
            
            var StarlingNodeDriveDevicePopulation = 0;           
            switch (this.xui_ui_radioboxNodeDriveDevicePopulation.getUIValue()){
            case "P":
                StarlingNodeDriveDevicePopulation = 6;
                break;
            case "F":
                StarlingNodeDriveDevicePopulation = 12;
                break;
            default :
            }            
            var StarlingDriveDeviceQty = StarlingApplianceQty * StarlingNodeDriveDevicePopulation;

            var StarlingNodeDriveDeviceTypeTB = Number(0);
            switch (this.xui_ui_radioboxNodeDriveDeviceType.getUIValue()){
            case "15":
                StarlingNodeDriveDeviceTypeTB = Number(15.36);
                this.xui_ui_labelBOMStarlingDriveDeviceSKU.setCaption("S04Q1536O24NKK3");
                this.xui_ui_labelBOMStarlingDriveDeviceDescription.setCaption("15.36TB QLC NVMe G4 4K SSD drive module for SE2420 enclosure");
                break;
            case "30":
                StarlingNodeDriveDeviceTypeTB = Number(30.72);
                this.xui_ui_labelBOMStarlingDriveDeviceSKU.setCaption("S04Q3072O24NKK3");
                this.xui_ui_labelBOMStarlingDriveDeviceDescription.setCaption("30.72TB QLC NVMe G4 4K SSD drive module for SE2420 enclosure");
                break;
            default :
            }        
            
            var RawCapacityTB = StarlingDriveDeviceQty * StarlingNodeDriveDeviceTypeTB;
            var UsableCapacityTB = RawCapacityTB * 0.8 * (23/24) * 0.9;
                        
            this.xui_ui_lblRawCapacityTB.setCaption(RawCapacityTB.toFixed(2));
            this.xui_ui_lblUsableCapacityTB.setCaption(UsableCapacityTB.toFixed(2));
            //this.xui_ui_lblEffectiveCapacityTB.setCaption(UsableCapacityTB);
            
            this.xui_ui_labelBOMStarlingApplianceQty.setCaption(StarlingApplianceQty);
            this.xui_ui_labelBOMStarlingDriveDeviceQty.setCaption(StarlingDriveDeviceQty);
           
            //var dlg = (new xui.UI.Dialog({caption:'Validations Log', width:500, height:400, left:'auto', right:'auto'})).show();
            //dlg.append(dlginput = new xui.UI.Input);
            //dlginput.setDock('fill');
            //dlginput.setMultiLines(true);
            //dlginput.setValue("test");
            
            var RoundedRawCapacityDividedBy100 = Math.ceil(RawCapacityTB / 100);
            var TermYears = Number(this.xui_ui_comboinput_TermsSupportYears.getUIValue());
            var BOMStarlingSubscriptionQty = RoundedRawCapacityDividedBy100 * TermYears;
            this.xui_ui_labelBOMStarlingSubscriptionQty.setCaption(BOMStarlingSubscriptionQty);

            if(RawCapacityTB < 101){
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-0-100TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora S3 Software License and Support Subscription, 1-100TB, per 100TB, per year");
            }else if(RawCapacityTB > 100 && RawCapacityTB < 751) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-100-750TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora S3 Software License and Support Subscription, 100-750TB, per 100TB, per year");
            }else if(RawCapacityTB > 750 && RawCapacityTB < 5626) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-750-5625TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora S3 Software License and Support Subscription, 750-5,625TB, per 100TB, per year");
            }else if(RawCapacityTB > 5625 && RawCapacityTB < 42189) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-5625+TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora S3 Software License and Support Subscription, 5,625+TB, per 100TB, per year");
            }
            
            switch (this.xui_ui_comboinput_TermsPeriodofPerformance.getUIValue()){
            case "SUP-POP-INV":
                this.xui_ui_labelBOMStarlingPeriodofPerformanceSKU.setCaption(this.xui_ui_comboinput_TermsPeriodofPerformance.getUIValue());
                this.xui_ui_labelBOMStarlingPeriodofPerformanceQty.setCaption(".");
                break;
            case "SUP-POP-30D":
                this.xui_ui_labelBOMStarlingPeriodofPerformanceSKU.setCaption(this.xui_ui_comboinput_TermsPeriodofPerformance.getUIValue());
                this.xui_ui_labelBOMStarlingPeriodofPerformanceQty.setCaption(".");
                break;
            case "SUP-POP-90D":
                this.xui_ui_labelBOMStarlingPeriodofPerformanceSKU.setCaption(this.xui_ui_comboinput_TermsPeriodofPerformance.getUIValue());
                this.xui_ui_labelBOMStarlingPeriodofPerformanceQty.setCaption(".");
                break;
            case "SUP-POP-ACC":
                this.xui_ui_labelBOMStarlingPeriodofPerformanceSKU.setCaption(this.xui_ui_comboinput_TermsPeriodofPerformance.getUIValue());
                this.xui_ui_labelBOMStarlingPeriodofPerformanceQty.setCaption(".");
                break;
            default :
            }
            
            switch (this.xui_ui_comboinput_TermsSupportType.getUIValue()){
            case "Basic Onsite":
                this.xui_ui_labelBOMStarlingSupportTypeSKU.setCaption("SUP-BSOS-1");
                this.xui_ui_labelBOMStarlingSupportTypeQty.setCaption(".");
                this.xui_ui_labelBOMStarlingSupportTypeDescription.setCaption("Basic Parts Only Support; storage systems, storage servers");
                this.xui_ui_labelBOMStarlingSSDSupportTypeSKU.setCaption("SUP-SSD-BSPO-1");
                this.xui_ui_labelBOMStarlingSSDSupportTypeQty.setCaption(".");
                this.xui_ui_labelBOMStarlingSSDSupportTypeDescription.setCaption("Basic Parts Only Support; SSD Drives; coverage through normal wearl life; use only with BSPO offerings; price is per SSD; annual");
                break;
            case "Premium Onsite":
                this.xui_ui_labelBOMStarlingSupportTypeSKU.setCaption("SUP-BSOS-3");
                this.xui_ui_labelBOMStarlingSupportTypeQty.setCaption(".");
                this.xui_ui_labelBOMStarlingSupportTypeDescription.setCaption("Premium Support; storage systems, storage servers");
                this.xui_ui_labelBOMStarlingSSDSupportTypeSKU.setCaption("SUP-SSD-BSPO-3");
                this.xui_ui_labelBOMStarlingSSDSupportTypeQty.setCaption(".");
                this.xui_ui_labelBOMStarlingSSDSupportTypeDescription.setCaption("Premium Support; SSD Drives");
                break;
            default :
            }
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
        
    }
    
});