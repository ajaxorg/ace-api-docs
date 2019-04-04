var Annotator = function (name, line, jsDoc) {
    this.name = name;
    this.line = line;
    this.jsDoc = jsDoc;
    //this.parent = parent;
};
(function () {
    Annotator.prototype.toString = function () {
        return this.name;
    };

    Annotator.prototype.get = function (name, line, jsDoc) {
        if (!(name instanceof Annotator)) {
            return this[name] || (this[name] = new Annotator(name, line, jsDoc));
        } else {
            return name;
        }
    };
    Annotator.prototype.find = function (states) {
        var s = this;
        while (s && !states[s.name]) {
            s = s.parent;
        }
        return states[s ? s.name : "start"];
    };

    Annotator.prototype.concat = function (name) {
        if ((name instanceof Annotator)) {
            var len = name.length;
            for (var i = 0; i < len; i++) {
                for (p in name[i]) {
                    if (name[i].hasOwnProperty(p)) {
                        ret[p] = name[i][p];
                    }
                }
            }
            return name;
        }

    };

    Annotator.prototype.replace = function (a, b) {
        return this.name.replace(a, b);
    };
    Annotator.prototype.indexOf = function (a, b) {
        return this.name.indexOf(a, b);
    };
    Annotator.prototype.hasParent = function (states) {
        var s = this;
        while (s && states !== s.name) {
            s = s.parent;
        }
        return s ? 1 : -1;
    };
    Annotator.prototype.count = function () {
        var s = 1;
        for (var i in this.children) s += this.children[i].count();
        return s;
    };
}).call(Annotator.prototype);

exports.Annotator = Annotator;