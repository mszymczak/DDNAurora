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
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs5")
                .setItems([
                    {
                        "id" : "b",
                        "caption" : "DDN Aurora Forward Sizing"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setWidth("53.02857142857143em")
                .setHeight("53.79047619047619em")
                .setValue("b")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label27")
                .setLeft("1.5238095238095237em")
                .setTop("36.49523809523809em")
                .setWidth("8.838095238095239em")
                .setCaption("Usable Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_lblUsableCapacityTB")
                .setName("xui_ui_lblUsableCapacityTB")
                .setLeft("10.666666666666666em")
                .setTop("36.49523809523809em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_lblEffectiveCapacityTB")
                .setName("xui_ui_lblEffectiveCapacityTB")
                .setLeft("10.666666666666666em")
                .setTop("38.78095238095238em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label31")
                .setLeft("1.5238095238095237em")
                .setTop("38.78095238095238em")
                .setWidth("8.838095238095239em")
                .setCaption("Effective Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label32")
                .setLeft("1.5238095238095237em")
                .setTop("34.20952380952381em")
                .setWidth("8.838095238095239em")
                .setCaption("Raw Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_lblRawCapacityTB")
                .setName("xui_ui_lblRawCapacityTB")
                .setLeft("10.666666666666666em")
                .setTop("34.20952380952381em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
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
                .setLeft("1.5238em")
                .setTop("17.904761904761905em")
                .setWidth("13.790476190476191em")
                .setHeight("6.628571428571429em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Node Drive Device Population")
                .setLabelHAlign("left")
                .setValue("F")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label43")
                .setLeft("21.333333333333332em")
                .setTop("34.20952380952381em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label44")
                .setLeft("21.333333333333332em")
                .setTop("36.49523809523809em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label45")
                .setLeft("21.333333333333332em")
                .setTop("38.78095238095238em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label57")
                .setLeft("1.5238095238095237em")
                .setTop("31.923809523809524em")
                .setWidth("54.93333333333333em")
                .setCaption("Approximate Capacity")
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
            
            host.xui_ui_tabs5.append(
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
                .setLeft("1.5238095238095237em")
                .setTop("24.761904761904763em")
                .setWidth("20.64761904761905em")
                .setHeight("6.628571428571429em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Drive Device Type")
                .setLabelHAlign("left")
                .setValue("30")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_StarlingApplianceQty")
                .setName("xui_ui_comboinput_StarlingApplianceQty")
                .setLeft("13.714285714285714em")
                .setTop("15.161904761904761em")
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(6)
                .setMax(10000)
                .setValue(6)
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label59")
                .setLeft("1.5238095238095237em")
                .setTop("12.876190476190477em")
                .setWidth("54.93333333333333em")
                .setCaption("DDN Aurora Appliance")
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
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label72")
                .setLeft("1.5238095238095237em")
                .setTop("15.39047619047619em")
                .setWidth("8.838095238095239em")
                .setCaption("Starling RS-7313")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label74")
                .setLeft("24.076190476190476em")
                .setTop("15.466666666666667em")
                .setWidth("10.361904761904762em")
                .setCaption("Qty (Min 6)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label75")
                .setLeft("1.5238095238095237em")
                .setTop("41.82857142857143em")
                .setWidth("54.93333333333333em")
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
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label76")
                .setLeft("1.5238095238095237em")
                .setTop("45.86666666666667em")
                .setWidth("15.314285714285715em")
                .setCaption("RS-7313")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label79")
                .setLeft("1.5238095238095237em")
                .setTop("44.34285714285714em")
                .setWidth("16.076190476190476em")
                .setCaption("SKU")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#87CEEB"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label80")
                .setLeft("22.857142857142858em")
                .setTop("44.34285714285714em")
                .setWidth("35.12380952380953em")
                .setCaption("Description")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#87CEEB"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label81")
                .setLeft("18.285714285714285em")
                .setTop("44.34285714285714em")
                .setWidth("3.8857142857142857em")
                .setCaption("Qty")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#87CEEB"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label82")
                .setLeft("22.857142857142858em")
                .setTop("45.86666666666667em")
                .setWidth("34.36190476190476em")
                .setCaption("Aurora Starling Appliance with 12x NVME u.2 slots")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingApplianceQty")
                .setName("xui_ui_labelBOMStarlingApplianceQty")
                .setLeft("18.285714285714285em")
                .setTop("45.86666666666667em")
                .setWidth("3.123809523809524em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingDriveDeviceQty")
                .setName("xui_ui_labelBOMStarlingDriveDeviceQty")
                .setLeft("18.285714285714285em")
                .setTop("47.39047619047619em")
                .setWidth("3.123809523809524em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingDriveDeviceSKU")
                .setName("xui_ui_labelBOMStarlingDriveDeviceSKU")
                .setLeft("1.5238095238095237em")
                .setTop("47.39047619047619em")
                .setWidth("15.314285714285715em")
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
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingDriveDeviceDescription")
                .setName("xui_ui_labelBOMStarlingDriveDeviceDescription")
                .setLeft("22.857142857142858em")
                .setTop("47.39047619047619em")
                .setWidth("34.36190476190476em")
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
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSubscriptionSKU")
                .setName("xui_ui_labelBOMStarlingSubscriptionSKU")
                .setLeft("1.5238095238095237em")
                .setTop("48.91428571428571em")
                .setWidth("15.314285714285715em")
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
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSubscriptionQty")
                .setName("xui_ui_labelBOMStarlingSubscriptionQty")
                .setLeft("18.285714285714285em")
                .setTop("48.91428571428571em")
                .setWidth("3.123809523809524em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_labelBOMStarlingSubscriptionDescription")
                .setName("xui_ui_labelBOMStarlingSubscriptionDescription")
                .setLeft("22.857142857142858em")
                .setTop("48.91428571428571em")
                .setWidth("34.36190476190476em")
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
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1312")
                .setLeft("1.5238095238095237em")
                .setTop("1.4476190476190476em")
                .setWidth("54.93333333333333em")
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
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1313")
                .setLeft("1.5238095238095237em")
                .setTop("3.961904761904762em")
                .setWidth("11.885714285714286em")
                .setCaption("Period of Performance")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1345")
                .setLeft("1.5238095238095237em")
                .setTop("6.933333333333334em")
                .setWidth("11.885714285714286em")
                .setCaption("Support Type")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_TermsSupportYears")
                .setName("xui_ui_comboinput_TermsSupportYears")
                .setLeft("13.714285714285714em")
                .setTop("9.6em")
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(1)
                .setMax(5)
                .setValue(3)
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1347")
                .setLeft("1.5238095238095237em")
                .setTop("9.82857142857143em")
                .setWidth("11.885714285714286em")
                .setCaption("Support Years")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1348")
                .setLeft("24.076190476190476em")
                .setTop("9.904761904761905em")
                .setWidth("10.361904761904762em")
                .setCaption("Yrs (1 - 5)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_TermsPeriodofPerformance")
                .setName("xui_ui_comboinput_TermsPeriodofPerformance")
                .setLeft("13.714285714285714em")
                .setTop("3.7333333333333334em")
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
                        "disabled" : true
                    }
                ])
                .setValue("SUP-POP-INV")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_TermsSupportType")
                .setName("xui_ui_comboinput_TermsSupportType")
                .setLeft("13.714285714285714em")
                .setTop("6.704761904761905em")
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
                this.xui_ui_labelBOMStarlingDriveDeviceSKU.setCaption("QLC-E1.s-15360");
                this.xui_ui_labelBOMStarlingDriveDeviceDescription.setCaption("Aurora Starling 15.36 TB QLC-E1.s-15360 Device");
                break;
            case "30":
                StarlingNodeDriveDeviceTypeTB = Number(30.72);
                this.xui_ui_labelBOMStarlingDriveDeviceSKU.setCaption("QLC-E1.s-30720");
                this.xui_ui_labelBOMStarlingDriveDeviceDescription.setCaption("Aurora Starling 30.72 TB QLC-E1.s-30720 Device");
                break;
            default :
            }            
            
            var RawCapacityTB = StarlingDriveDeviceQty * StarlingNodeDriveDeviceTypeTB; // StarlingNodeDriveDeviceTypeTB;
            var UsableCapacityTB = RawCapacityTB * 0.8 * (23/24) * 0.9;
                        
            this.xui_ui_lblRawCapacityTB.setCaption(RawCapacityTB.toFixed(2));
            this.xui_ui_lblUsableCapacityTB.setCaption(UsableCapacityTB.toFixed(2));
            //this.xui_ui_lblEffectiveCapacityTB.setCaption(UsableCapacityTB);
            
            this.xui_ui_labelBOMStarlingApplianceQty.setCaption(StarlingApplianceQty);
            this.xui_ui_labelBOMStarlingDriveDeviceQty.setCaption(StarlingDriveDeviceQty);
                        
//100
//750
//5625
//42188
            //xui_ui_comboinput_TermsSupportType
            //xui_ui_comboinput_TermsSupportYears
            //xui_ui_comboinput_TermsPeriodofPerformance

            
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
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 0-100TB Subscription, per 100TB, per year");
            }else if(RawCapacityTB > 100 && RawCapacityTB < 751) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-100-750TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 100-750TB Subscription, per 100TB, per year");
            }else if(RawCapacityTB > 750 && RawCapacityTB < 5626) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-750-5625TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 750-5625TB Subscription, per 100TB, per year");
            }else if(RawCapacityTB > 5625 && RawCapacityTB < 42189) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-5625+TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 5625+TB Subscription, per 100TB, per year");
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