function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "GradingSystem"};
	this.sidHashMap["GradingSystem"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "GradingSystem:39"};
	this.sidHashMap["GradingSystem:39"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "GradingSystem:4"};
	this.sidHashMap["GradingSystem:4"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "GradingSystem:16"};
	this.sidHashMap["GradingSystem:16"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "GradingSystem:25"};
	this.sidHashMap["GradingSystem:25"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "GradingSystem:29"};
	this.sidHashMap["GradingSystem:29"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "GradingSystem:33"};
	this.sidHashMap["GradingSystem:33"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<Root>/Input"] = {sid: "GradingSystem:37"};
	this.sidHashMap["GradingSystem:37"] = {rtwname: "<Root>/Input"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "GradingSystem:39"};
	this.sidHashMap["GradingSystem:39"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<Root>/Output"] = {sid: "GradingSystem:38"};
	this.sidHashMap["GradingSystem:38"] = {rtwname: "<Root>/Output"};
	this.rtwnameHashMap["<S1>/Input"] = {sid: "GradingSystem:40"};
	this.sidHashMap["GradingSystem:40"] = {rtwname: "<S1>/Input"};
	this.rtwnameHashMap["<S1>/If"] = {sid: "GradingSystem:1"};
	this.sidHashMap["GradingSystem:1"] = {rtwname: "<S1>/If"};
	this.rtwnameHashMap["<S1>/If Action Subsystem"] = {sid: "GradingSystem:4"};
	this.sidHashMap["GradingSystem:4"] = {rtwname: "<S1>/If Action Subsystem"};
	this.rtwnameHashMap["<S1>/If Action Subsystem1"] = {sid: "GradingSystem:16"};
	this.sidHashMap["GradingSystem:16"] = {rtwname: "<S1>/If Action Subsystem1"};
	this.rtwnameHashMap["<S1>/If Action Subsystem2"] = {sid: "GradingSystem:25"};
	this.sidHashMap["GradingSystem:25"] = {rtwname: "<S1>/If Action Subsystem2"};
	this.rtwnameHashMap["<S1>/If Action Subsystem3"] = {sid: "GradingSystem:29"};
	this.sidHashMap["GradingSystem:29"] = {rtwname: "<S1>/If Action Subsystem3"};
	this.rtwnameHashMap["<S1>/If Action Subsystem4"] = {sid: "GradingSystem:33"};
	this.sidHashMap["GradingSystem:33"] = {rtwname: "<S1>/If Action Subsystem4"};
	this.rtwnameHashMap["<S1>/Merge"] = {sid: "GradingSystem:2"};
	this.sidHashMap["GradingSystem:2"] = {rtwname: "<S1>/Merge"};
	this.rtwnameHashMap["<S1>/Output"] = {sid: "GradingSystem:41"};
	this.sidHashMap["GradingSystem:41"] = {rtwname: "<S1>/Output"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "GradingSystem:6"};
	this.sidHashMap["GradingSystem:6"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/String Constant"] = {sid: "GradingSystem:8"};
	this.sidHashMap["GradingSystem:8"] = {rtwname: "<S2>/String Constant"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "GradingSystem:7"};
	this.sidHashMap["GradingSystem:7"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "GradingSystem:17"};
	this.sidHashMap["GradingSystem:17"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/String Constant"] = {sid: "GradingSystem:18"};
	this.sidHashMap["GradingSystem:18"] = {rtwname: "<S3>/String Constant"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "GradingSystem:19"};
	this.sidHashMap["GradingSystem:19"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "GradingSystem:26"};
	this.sidHashMap["GradingSystem:26"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/String Constant"] = {sid: "GradingSystem:27"};
	this.sidHashMap["GradingSystem:27"] = {rtwname: "<S4>/String Constant"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "GradingSystem:28"};
	this.sidHashMap["GradingSystem:28"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "GradingSystem:30"};
	this.sidHashMap["GradingSystem:30"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/String Constant"] = {sid: "GradingSystem:31"};
	this.sidHashMap["GradingSystem:31"] = {rtwname: "<S5>/String Constant"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "GradingSystem:32"};
	this.sidHashMap["GradingSystem:32"] = {rtwname: "<S5>/Out1"};
	this.rtwnameHashMap["<S6>/Action Port"] = {sid: "GradingSystem:34"};
	this.sidHashMap["GradingSystem:34"] = {rtwname: "<S6>/Action Port"};
	this.rtwnameHashMap["<S6>/String Constant"] = {sid: "GradingSystem:35"};
	this.sidHashMap["GradingSystem:35"] = {rtwname: "<S6>/String Constant"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "GradingSystem:36"};
	this.sidHashMap["GradingSystem:36"] = {rtwname: "<S6>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
