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
                .setTop("37.714285714285715em")
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
                .setTop("37.714285714285715em")
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
                .setTop("40em")
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
                .setTop("40em")
                .setWidth("8.838095238095239em")
                .setCaption("Effective Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label32")
                .setLeft("1.5238095238095237em")
                .setTop("35.42857142857143em")
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
                .setTop("35.42857142857143em")
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
                        "id" : "F",
                        "caption" : "Full (12)",
                        "imageClass" : ""
                    },
                    {
                        "id" : "P",
                        "caption" : "Partial (6)",
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
                .setValue("F"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label43")
                .setLeft("21.333333333333332em")
                .setTop("35.42857142857143em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label44")
                .setLeft("21.333333333333332em")
                .setTop("37.714285714285715em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label45")
                .setLeft("21.333333333333332em")
                .setTop("40em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label57")
                .setLeft("1.5238095238095237em")
                .setTop("33.142857142857146em")
                .setWidth("45.02857142857143em")
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
                .setValue("30"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput_StarlingApplianceQty")
                .setName("xui_ui_comboinput_StarlingApplianceQty")
                .setLeft("9.904761904761905em")
                .setTop("13.333333333333334em")
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(6)
                .setMax(10000)
                .setValue(6),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label58")
                .setLeft("9.904761904761905em")
                .setTop("27.80952380952381em")
                .setWidth("37.40952380952381em")
                .setCaption(" ")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label59")
                .setLeft("1.5238095238095237em")
                .setTop("11.047619047619047em")
                .setWidth("45.02857142857143em")
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
                .setTop("13.561904761904762em")
                .setWidth("8.838095238095239em")
                .setCaption("Starling RS-7313")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label74")
                .setLeft("20.266666666666666em")
                .setTop("13.638095238095238em")
                .setWidth("10.361904761904762em")
                .setCaption("Qty (Min 6)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label75")
                .setLeft("1.5238095238095237em")
                .setTop("43.80952380952381em")
                .setWidth("45.02857142857143em")
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
                .setTop("47.84761904761905em")
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
                .setTop("46.32380952380952em")
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
                .setTop("46.32380952380952em")
                .setWidth("25.21904761904762em")
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
                .setTop("46.32380952380952em")
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
                .setTop("47.84761904761905em")
                .setWidth("24.457142857142856em")
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
                .setTop("47.84761904761905em")
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
                .setTop("49.371428571428574em")
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
                .setTop("49.371428571428574em")
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
                .setTop("49.371428571428574em")
                .setWidth("24.457142857142856em")
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
                .setTop("50.89523809523809em")
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
                .setTop("50.89523809523809em")
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
                .setTop("50.89523809523809em")
                .setWidth("24.457142857142856em")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput979")
                .setName("xui_ui_comboinput_StarlingApplianceQty")
                .setLeft("9.904761904761905em")
                .setTop("5.714285714285714em")
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(1)
                .setMax(5)
                .setValue(6),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1312")
                .setLeft("1.5238095238095237em")
                .setTop("3.4285714285714284em")
                .setWidth("45.02857142857143em")
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
                .setTop("5.942857142857143em")
                .setWidth("8.838095238095239em")
                .setCaption("Support Years")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1314")
                .setLeft("20.266666666666666em")
                .setTop("6.019047619047619em")
                .setWidth("10.361904761904762em")
                .setCaption("Yrs (1 - 5)")
                .setHAlign("left"),
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
            
            var RawCapacityTB = StarlingDriveDeviceQty * 30.72; // StarlingNodeDriveDeviceTypeTB;
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
            
            var RoundedRawCapacityDividedBy100 = Math.ceil(RawCapacityTB / 100);
            var TermYears = 3;
            var BOMStarlingSubscriptionQty = RoundedRawCapacityDividedBy100 * TermYears;
            this.xui_ui_labelBOMStarlingSubscriptionQty.setCaption(BOMStarlingSubscriptionQty);

            if(RawCapacityTB < 101){
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-0-100TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 0-100TB Subscription");
            }else if(RawCapacityTB > 100 && RawCapacityTB < 751) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-100-750TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 100-750TB Subscription");
            }else if(RawCapacityTB > 750 && RawCapacityTB < 5626) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-750-5625TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 750-5625TB Subscription");
            }else if(RawCapacityTB > 5625 && RawCapacityTB < 42189) {
                this.xui_ui_labelBOMStarlingSubscriptionSKU.setCaption("SUB-AUR-S3-5625+TB-1Y");
                this.xui_ui_labelBOMStarlingSubscriptionDescription.setCaption("Aurora 5625+TB Subscription");
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