public func conjunction(_ p: Bool?, _ q: Bool?) -> Bool? {
    if let p = p, let q = q {
        return p && q
    } else {
        return nil
    }
}
